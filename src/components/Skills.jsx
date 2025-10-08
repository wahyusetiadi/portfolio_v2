import React from 'react';
import { Code2, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", description: "Membangun UI komponen interaktif dengan hooks" },
        { name: "Next.js", description: "Aplikasi web dengan SSR, routing, dan API routes" },
        { name: "Vite", description: "Setup proyek React yang cepat dan ringan" },
        { name: "Tailwind CSS", description: "Styling responsif dengan pendekatan utility-first" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", description: "Lingkungan server-side dengan JavaScript" },
        { name: "Express.js", description: "Framework untuk membuat RESTful API" },
        { name: "Prisma ORM", description: "Manajemen database dengan query type-safe" },
        { name: "REST APIs", description: "Membangun dan mengonsumsi API modern" }
      ]
    }
  ];

  const expertise = [
    {
      icon: Code2,
      title: "Modern Frontend",
      description: "Membangun antarmuka pengguna dengan React dan Next.js"
    },
    {
      icon: Server,
      title: "Full-Stack Dasar",
      description: "Menghubungkan frontend dengan backend menggunakan Node.js & Prisma"
    },
    {
      icon: Smartphone,
      title: "Responsif & Mobile-First",
      description: "Desain yang bekerja baik di semua perangkat"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-6 py-2 mb-6">
            <Code2 size={18} className="text-green-400" />
            <span className="text-green-400 font-medium">Technical Skills</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Fokus pada pengembangan aplikasi web modern dengan 
            <span className="text-green-400 font-semibold"> React, Next.js, dan Node.js</span>
          </p>
        </div>

        {/* Expertise Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {expertise.map((item, index) => (
            <div 
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:bg-gray-800/50 hover:border-green-500/30 transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <item.icon size={28} />
              </div>
              <h3 className="font-bold mb-2 text-lg text-white group-hover:text-green-300 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/20 hover:bg-gray-800/30 transition-colors">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    <div>
                      <span className="text-white font-semibold block">{skill.name}</span>
                      <p className="text-gray-400 text-sm mt-1">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning & Growth */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Terus Belajar
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Saya aktif mempelajari praktik terbaik dalam pengembangan web, 
              termasuk TypeScript, pengujian, autentikasi, dan deployment.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'Testing Dasar', 'Auth (JWT)', 'Deploy ke Vercel/Render'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;