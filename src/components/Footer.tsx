
import { BarChart3, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
              <BarChart3 className="h-8 w-8 text-primary-300" />
              <span>BeetXuul</span>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed">
              Transforming data into intelligent decisions for SMEs through specialized 
              visualization solutions and expert consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-primary-100 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-primary-100 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-primary-100 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-200 hover:text-primary-100 transition-colors text-sm">Home</Link></li>
              <li><Link to="/company" className="text-primary-200 hover:text-primary-100 transition-colors text-sm">Company</Link></li>
              <li><Link to="/services" className="text-primary-200 hover:text-primary-100 transition-colors text-sm">Services</Link></li>
              <li><Link to="/contact" className="text-primary-200 hover:text-primary-100 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-primary-200 text-sm">Customized Diagnostics</span></li>
              <li><span className="text-primary-200 text-sm">Training & Support</span></li>
              <li><span className="text-primary-200 text-sm">Dashboard Development</span></li>
              <li><span className="text-primary-200 text-sm">Technical Support</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-300" />
                <span className="text-primary-200 text-sm">info@beetxuul.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-300" />
                <span className="text-primary-200 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-300" />
                <span className="text-primary-200 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8 text-center">
          <p className="text-primary-300 text-sm">
            © {currentYear} BeetXuul. All rights reserved. Built with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
