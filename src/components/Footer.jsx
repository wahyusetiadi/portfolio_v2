import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2, Coffee, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: "#", 
      label: "GitHub",
      color: "hover:text-gray-300"
    },
    { 
      icon: Linkedin, 
      href: "#", 
      label: "LinkedIn",
      color: "hover:text-blue-400"
    },
    { 
      icon: Mail, 
      href: "mailto:wahyu.setiadi@email.com", 
      label: "Email",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 size={24} />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Wahyu Setiadi
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Full-stack developer passionate about creating exceptional digital experiences. 
              Transforming ideas into scalable, beautiful web applications.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Coffee size={16} />
              <span>Fueled by coffee and curiosity</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Let's Connect</h3>
            <div className="space-y-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`flex items-center gap-3 text-gray-400 ${social.color} transition-colors duration-200 group`}
                >
                  <div className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center group-hover:border-current group-hover:bg-current/10 transition-all duration-200">
                    <social.icon size={18} />
                  </div>
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
            
            {/* Availability Status */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400">Available for projects</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                Made with <Heart size={16} className="text-red-500 animate-pulse" /> and lots of 
                <Coffee size={16} className="text-amber-500" />
              </p>
              <span className="hidden md:block">•</span>
              <p>© {currentYear} Wahyu Setiadi. All rights reserved.</p>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border border-gray-700/50 hover:border-blue-500/30 px-4 py-2 rounded-lg transition-all duration-200 text-gray-400 hover:text-blue-400"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp size={16} className="group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;