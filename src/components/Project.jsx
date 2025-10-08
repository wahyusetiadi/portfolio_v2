import React from 'react';
import { ExternalLink, Github, Star, Calendar, Users, Folder, Wrench } from 'lucide-react';

const Projects = () => {
  const personalData = {
    githubUrl: 'https://github.com/yourusername', // Ganti dengan GitHub-mu
  };

  const projects = [
    {
      title: "Sistem Presensi RFID (Super App)",
      description: "Mengembangkan modul presensi berbasis RFID untuk aplikasi super app perusahaan, mencatat kehadiran karyawan secara real-time.",
      longDescription: "Integrasi perangkat RFID dengan backend untuk mencatat waktu masuk/keluar, sinkronisasi data ke dashboard HR.",
      tech: ["React", "Node.js", "Express", "Prisma", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800", // gambar RFID/absensi
      github: null, // private
      demo: null, // private
      featured: true,
      stats: {
        duration: "Sedang berjalan",
        team: "Tim internal"
      },
      status: "in-progress"
    },
    {
      title: "Manajemen Stok & Transaksi Sepeda Listrik",
      description: "Aplikasi web untuk pencatatan stok, penjualan, dan pembelian sparepart sepeda listrik beserta aksesorisnya.",
      longDescription: "Fitur: input barang, laporan stok, histori transaksi, manajemen supplier, dan antarmuka admin yang responsif.",
      tech: ["React", "Vite", "Node.js", "Express", "Prisma", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800", // toko/sepeda
      github: null,
      demo: null,
      featured: true,
      stats: {
        duration: "2 bulan",
        team: "Solo / Tim kecil"
      }
    },
    {
      title: "Aplikasi Manajemen Cucian Motor & Mobil",
      description: "Sistem digital untuk pencatatan order, status cuci, dan pembayaran di bengkel cuci kendaraan.",
      longDescription: "Menggantikan pencatatan manual dengan antarmuka web yang memudahkan operator mencatat dan melacak pesanan.",
      tech: ["React", "Node.js", "Express", "Prisma", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/276374/pexels-photo-276374.jpeg?auto=compress&cs=tinysrgb&w=800", // cuci mobil
      github: null,
      demo: null,
      featured: false,
      stats: {
        duration: "1.5 bulan",
        team: "Solo"
      }
    },
    {
      title: "Aplikasi Pinjaman Internal",
      description: "Platform untuk pengajuan dan pelacakan pinjaman karyawan di lingkungan perusahaan.",
      longDescription: "Fitur: formulir pengajuan, verifikasi, notifikasi status, dan riwayat pinjaman.",
      tech: ["Next.js", "Express", "Prisma", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/730545/pexels-photo-730545.jpeg?auto=compress&cs=tinysrgb&w=800", // uang/keuangan
      github: null,
      demo: null,
      featured: false,
      stats: {
        duration: "1 bulan",
        team: "Tim internal"
      }
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleViewAllProjects = () => {
    window.open(personalData.githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-800/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-40 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
            <Folder size={18} className="text-purple-400" aria-hidden="true" />
            <span className="text-purple-400 font-medium">Real Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
            Project nyata yang saya kerjakan — dari aplikasi internal perusahaan hingga sistem yang sedang dikembangkan.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center text-purple-400">Project Utama</h3>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {featuredProjects.map((project, index) => (
              <article 
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500"
                aria-labelledby={`project-title-${index}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" aria-hidden="true"></div>
                  
                  {project.status === "in-progress" && (
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
                        <Wrench size={12} aria-hidden="true" />
                        Sedang Dikerjakan
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 
                    id={`project-title-${index}`}
                    className="text-xl sm:text-2xl font-bold group-hover:text-purple-400 transition-colors duration-200 mb-3"
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-3 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 mb-5 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} aria-hidden="true" />
                      <span>{project.stats.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} aria-hidden="true" />
                      <span>{project.stats.team}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.github ? (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
                        aria-label={`Kode ${project.title}`}
                      >
                        <Github size={18} aria-hidden="true" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="px-4 py-2 bg-gray-800/60 text-gray-500 rounded-lg text-sm">Private Project</span>
                    )}
                    
                    {project.demo ? (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-4 py-2 rounded-lg transition-all duration-200"
                        aria-label={`Demo ${project.title}`}
                      >
                        <ExternalLink size={18} aria-hidden="true" />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="px-4 py-2 bg-gray-800/60 text-gray-500 rounded-lg text-sm">Internal Use</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center text-blue-400">Project Lainnya</h3>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {otherProjects.map((project, index) => (
              <article 
                key={index}
                className="group bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-44 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-60" aria-hidden="true"></div>
                </div>
                
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">{t}</span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-gray-500 flex items-center gap-2">
                    <Calendar size={12} aria-hidden="true" />
                    {project.stats.duration} • {project.stats.team}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Ingin melihat kode yang saya tulis?</p>
          <button
            onClick={handleViewAllProjects}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
            aria-label="Lihat semua project di GitHub"
          >
            <Github size={20} aria-hidden="true" />
            <span>Lihat Repositori Saya</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;