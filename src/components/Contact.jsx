import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Coffee, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // GANTI DENGAN ENDPOINT FORMSPREE KAMU
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqaydjwd'; // ← GANTI INI!

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '', budget: '' });
        }, 3000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "wahyu.setiadi@email.com",
      link: "mailto:wahyu.setiadi@email.com",
      description: "Kirim email kapan saja"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+62 812-3456-7890",
      link: "tel:+6281234567890",
      description: "Mari ngobrol sebentar"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Jakarta, Indonesia",
      link: "#",
      description: "Tersedia untuk kerja remote"
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: "Web Development",
      description: "Website & aplikasi web kustom dengan React & Node.js"
    },
    {
      icon: Calendar,
      title: "Konsultasi",
      description: "Diskusi teknis & perencanaan proyek"
    },
    {
      icon: Coffee,
      title: "Kolaborasi",
      description: "Kerja tim jangka panjang atau integrasi ke proyek Anda"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-800/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
            <MessageCircle size={18} className="text-blue-400" />
            <span className="text-blue-400 font-medium">Hubungi Saya</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Mari Bangun Sesuatu Bersama
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Punya ide proyek? Saya siap membantu mewujudkannya dengan 
            <span className="text-blue-400 font-semibold"> teknologi modern</span>
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 p-6 rounded-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105 text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <service.icon size={28} />
              </div>
              <h3 className="font-bold mb-2 text-lg text-white group-hover:text-blue-300 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mari Terhubung
            </h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="group flex items-center gap-6 p-6 bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:bg-gray-900/50 hover:border-blue-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-blue-400 mb-1">{info.title}</h4>
                    <p className="text-white font-medium mb-1">{info.content}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Tersedia untuk proyek baru</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Saya sedang membuka kolaborasi untuk proyek pengembangan web.
                Mari diskusikan ide Anda!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Kirim Pesan</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-green-400 mb-2">Pesan Terkirim!</h4>
                  <p className="text-gray-300">Terima kasih! Saya akan segera membalas pesan Anda.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                        Nama Anda *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                        placeholder="Wahyu Setiadi"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                        placeholder="wahyu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                        Subjek *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                        placeholder="Proyek Website"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium mb-2 text-gray-300">
                        Budget Proyek
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20"
                      >
                        <option value="">Pilih rentang budget</option>
                        <option value="Di bawah Rp10 juta">Di bawah Rp10 juta</option>
                        <option value="Rp10 - 20 juta">Rp10 - 20 juta</option>
                        <option value="Rp20 - 50 juta">Rp20 - 50 juta</option>
                        <option value="Di atas Rp50 juta">Di atas Rp50 juta</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                      Detail Proyek *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 resize-none"
                      placeholder="Ceritakan tentang proyek Anda, tujuan, timeline, dan kebutuhan spesifik..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            ⚡ Biasanya membalas dalam 24 jam • 🌍 Terbuka untuk kerja remote
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;