# -----------------------
# 1️⃣ Builder Stage
# -----------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
COPY yarn.lock* ./

RUN npm ci

# Copy project files
COPY . .

# Build Next.js
RUN npm run build

# -----------------------
# 2️⃣ Runner Stage
# -----------------------
FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production

# Copy standalone build output
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Expose & start
EXPOSE 3000
CMD ["node", "server.js"]
