import React from 'react';
import { Activity, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Products',
      links: ['Health Calculators', 'Diet Comparisons', 'Exercise Plans', 'Nutrition Analysis', 'Progress Tracking']
    },
    {
      title: 'Resources',
      links: ['Health Blog', 'Nutrition Guide', 'Exercise Library', 'Meal Plans', 'Success Stories']
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact Us', 'FAQ', 'Community', 'Live Chat']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Press']
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Youtube, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">FitFlex</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Your comprehensive health comparison platform. Compare diet plans, exercise routines, and track your progress with professional-grade tools.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="h-5 w-5" />
                  <span>support@fitflex.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="h-5 w-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <MapPin className="h-5 w-5" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600">Get the latest health tips, product reviews, and exclusive offers.</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © 2025 FitFlex. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;