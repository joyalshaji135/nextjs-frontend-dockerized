import Image from 'next/image';
import { ArrowRight, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: "Modern Luxury Villa",
      description: "Contemporary design with minimalist approach",
      image: "/api/placeholder/400/300",
      category: "Residential"
    },
    {
      id: 2,
      title: "Corporate Office Space",
      description: "Productive and inspiring work environment",
      image: "/api/placeholder/400/300",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Cozy Family Apartment",
      description: "Warm and functional living spaces",
      image: "/api/placeholder/400/300",
      category: "Residential"
    }
  ];

  const services = [
    {
      icon: "🏠",
      title: "Residential Design",
      description: "Transform your home into a beautiful and functional space"
    },
    {
      icon: "🏢",
      title: "Commercial Design",
      description: "Create inspiring work environments that boost productivity"
    },
    {
      icon: "🎨",
      title: "3D Visualization",
      description: "See your project come to life before implementation"
    },
    {
      icon: "📐",
      title: "Space Planning",
      description: "Optimize your space for maximum efficiency and comfort"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Sreemayi Cm
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Creating beautiful, functional interiors that reflect your personality and lifestyle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors">
              View Our Work <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Book Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive interior design solutions tailored to your unique needs and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600">
              Explore our latest interior design transformations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 bg-gray-200">
                  {/* Replace with actual Image component */}
                  <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                    <span className="text-gray-700 font-semibold">Project Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2">
                    View Project <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Interior Design Services
              </h2>
              <div className="space-y-4">
                {[
                  "10+ years of experience in interior design",
                  "Customized solutions for every budget",
                  "Premium quality materials and finishes",
                  "On-time project completion guarantee",
                  "Post-completion support and maintenance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-amber-600 flex-shrink-0" size={20} />
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-amber-600 h-80 rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Design Visualization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Get Free Consultation
            </button>
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={20} />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Elite Interiors</h3>
              <p className="text-gray-400">
                Creating beautiful spaces that inspire and transform lives.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Design</li>
                <li>Commercial Design</li>
                <li>3D Visualization</li>
                <li>Space Planning</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>123 Design Street, Creative City</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>hello@eliteinteriors.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Elite Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}