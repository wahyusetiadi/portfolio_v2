import React from 'react';
import { Github, Linkedin, Mail, Download, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  const personalInfo = {
    name: 'Wahyu Setiadi',
    role: 'Full Stack Developer',
    initials: 'WS',
    specializations: ['React', 'Node.js', 'TypeScript'],
    resumeUrl: '/resume.pdf', // Update dengan path file CV Anda
    social: [
      { icon: Github, href: 'https://github.com/wahyusetiadi', label: 'GitHub', color: 'hover:from-gray-600 hover:to-gray-700' },
      { icon: Linkedin, href: 'https://www.linkedin.com/in/wahyu-setiadi-a09131213/', label: 'LinkedIn', color: 'hover:from-blue-600 hover:to-blue-700' },
      { icon: Mail, href: 'mailto:wahyusetiadi330@gmail.com', label: 'Email', color: 'hover:from-red-500 hover:to-red-600' }
    ]
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Buka CV di tab baru atau trigger download
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden bg-gray-900">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-spin-slow {
          animation: spinSlow 3s linear infinite;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-bounce" style={{ animationDelay: '0.3s' }} aria-hidden="true">
        <Code size={24} className="text-blue-400" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-bounce" style={{ animationDelay: '0.7s' }} aria-hidden="true">
        <Sparkles size={20} className="text-purple-400" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-20 animate-bounce" style={{ animationDelay: '0.5s' }} aria-hidden="true">
        <Code size={28} className="text-cyan-400" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            {/* Profile Image with Enhanced Animation */}
            <div className="relative w-36 h-36 mx-auto mb-8 group" role="img" aria-label={`${personalInfo.name} initials`}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-1 bg-gray-900 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                  {personalInfo.initials}
                </span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
            </div>

            {/* Greeting */}
            <div className="mb-6">
              <p className="text-blue-400 text-lg font-medium mb-2 animate-fade-in-up">
                <span aria-label="Waving hand">👋</span> Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent animate-fade-in-up delay-200">
                {personalInfo.name}
              </h1>
            </div>

            {/* Role with Typing Effect */}
            <div className="mb-8">
              <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-bold mb-4 animate-fade-in-up delay-300">
                {personalInfo.role}
              </p>
              <div className="flex flex-wrap justify-center items-center gap-2 text-base md:text-lg text-gray-400 animate-fade-in-up delay-400">
                <span>Specializing in</span>
                {personalInfo.specializations.map((skill, index) => (
                  <React.Fragment key={skill}>
                    <span className={`${index === 0 ? 'text-blue-400' : index === 1 ? 'text-purple-400' : 'text-cyan-400'} font-semibold`}>
                      {skill}
                    </span>
                    {index < personalInfo.specializations.length - 1 && <span>•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="mb-12 animate-fade-in-up delay-500">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
                I craft <span className="text-blue-400 font-semibold">digital experiences</span> that blend 
                <span className="text-purple-400 font-semibold"> beautiful design</span> with 
                <span className="text-cyan-400 font-semibold"> robust functionality</span>
              </p>
              <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Transforming ideas into scalable web applications with clean code, 
                modern technologies, and a passion for pixel-perfect user interfaces.
              </p>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 animate-fade-in-up delay-700">
            <button 
              onClick={handleDownloadResume}
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 sm:px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 flex items-center gap-3 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              aria-label="Download resume"
            >
              <Download size={22} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" aria-hidden="true"></div>
            </button>
            <button 
              onClick={scrollToProjects}
              className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 px-8 sm:px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 relative overflow-hidden w-full sm:w-auto"
              aria-label="Explore projects"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></div>
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="animate-fade-in-up delay-900">
            <p className="text-gray-400 mb-6 text-sm uppercase tracking-wider">Connect With Me</p>
            <div className="flex justify-center space-x-6 sm:space-x-8">
              {personalInfo.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group relative w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-transparent rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400/50 hover:bg-gradient-to-r ${social.color}`}
                >
                  <social.icon size={22} className="group-hover:scale-110 transition-transform duration-200" />
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" aria-hidden="true"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;