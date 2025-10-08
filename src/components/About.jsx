import React from 'react';
import { Code2, Users, Lightbulb, MessageCircle, Zap, Server } from 'lucide-react';

const About = () => {
  const personalData = {
    name: "Wahyu Setiadi",
    title: "Frontend & Full-Stack Developer",
    email: "wahyu.setiadi@email.com",
    story: {
      intro: "Saya memulai perjalanan di dunia pengembangan web melalui pelatihan intensif UI/UX, lalu langsung terjun ke proyek nyata di lingkungan perusahaan.",
      experience: "Sejak itu, saya telah mengembangkan beberapa aplikasi internal seperti sistem manajemen cucian kendaraan, pencatatan stok sparepart sepeda listrik, hingga aplikasi pinjaman karyawan — semuanya menggunakan React, Node.js, dan Prisma.",
      current: "Saat ini, saya sedang mengembangkan fitur sistem presensi berbasis RFID untuk sebuah super app. Saya percaya bahwa konsistensi, rasa ingin tahu, dan kemauan belajar adalah kunci tumbuh di dunia teknologi."
    },
    traits: ['Pembelajar Cepat', 'Fokus pada Solusi', 'Kerja Tim', 'Detail-Oriented']
  };

  const features = [
    {
      icon: Code2,
      title: "React & Next.js",
      description: "Membangun antarmuka modern dengan komponen responsif dan performa optimal"
    },
    {
      icon: Server,
      title: "Node.js + Prisma",
      description: "Mengelola backend sederhana hingga menengah dengan REST API dan ORM type-safe"
    },
    {
      icon: Zap,
      title: "Responsif & Cepat",
      description: "Aplikasi yang bekerja lancar di semua perangkat, dari mobile hingga desktop"
    },
    {
      icon: Users,
      title: "Solusi untuk Bisnis Nyata",
      description: "Mengembangkan tools yang benar-benar digunakan di operasional harian perusahaan"
    }
  ];

  const stats = [
    {
      label: "Project Nyata",
      value: "4+",
      description: "Aplikasi internal & sistem yang digunakan"
    },
    {
      label: "Teknologi Utama",
      value: "React, Node, Prisma",
      description: "Stack yang saya kuasai"
    },
    {
      label: "Status",
      value: "Aktif Belajar",
      description: "Selalu terbuka untuk tantangan baru"
    },
    {
      label: "Kolaborasi",
      value: "Tim Internal",
      description: "Bekerja dalam tim pengembangan"
    }
  ];

  const handleLetsTalk = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `mailto:${personalData.email}`;
    }
  };

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <Lightbulb size={18} className="text-blue-400" aria-hidden="true" />
            <span className="text-blue-400 font-medium">Tentang Saya</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Dari Pelatihan ke Proyek Nyata
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Saya seorang developer yang fokus membangun aplikasi web dengan 
            <span className="text-blue-400 font-semibold"> React dan Node.js</span> untuk menyelesaikan masalah nyata.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Perjalanan Saya
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-base sm:text-lg">
              <p>{personalData.story.intro}</p>
              <p>{personalData.story.experience}</p>
              <p>{personalData.story.current}</p>
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {personalData.traits.map((trait, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-4 sm:p-6 rounded-2xl hover:bg-gray-800/70 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="text-lg sm:text-xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-400 font-semibold text-xs sm:text-sm mb-1">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-6 sm:p-8 rounded-2xl hover:bg-gray-800/50 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <feature.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="font-bold mb-3 text-lg sm:text-xl text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
              Mari Kolaborasi!
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Saya terbuka untuk diskusi proyek, kontribusi tim, atau sekadar bertukar ide seputar pengembangan web.
            </p>
            <button 
              onClick={handleLetsTalk}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2"
              aria-label="Hubungi saya"
            >
              <MessageCircle size={20} aria-hidden="true" />
              <span>Hubungi Saya</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;