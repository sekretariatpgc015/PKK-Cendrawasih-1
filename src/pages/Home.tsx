import { motion } from 'motion/react';
import { Users, Heart, BookOpen, Leaf } from 'lucide-react';
import DemografiWarga from '../components/DemografiWarga';

export default function Home() {
  const activities = [
    {
      title: "Penghayatan dan Pengamalan Pancasila",
      description: "Pembinaan mental spiritual dan gotong royong warga RW 015.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      image: "https://picsum.photos/seed/pancasila/600/400"
    },
    {
      title: "Pendidikan dan Keterampilan",
      description: "Pelatihan keterampilan untuk meningkatkan ekonomi keluarga.",
      icon: <BookOpen className="w-6 h-6 text-rose-500" />,
      image: "https://picsum.photos/seed/education/600/400"
    },
    {
      title: "Pengembangan Kehidupan Berkoperasi",
      description: "Mendorong partisipasi warga dalam kegiatan koperasi UP2K.",
      icon: <Users className="w-6 h-6 text-rose-500" />,
      image: "https://picsum.photos/seed/koperasi/600/400"
    },
    {
      title: "Sandang, Pangan, dan Tata Laksana Rumah Tangga",
      description: "Penyuluhan gizi keluarga dan pemanfaatan pekarangan (HATINYA PKK).",
      icon: <Leaf className="w-6 h-6 text-rose-500" />,
      image: "https://picsum.photos/seed/pangan/600/400"
    },
    {
      title: "Kesehatan",
      description: "Pelaksanaan Posyandu dan Posbindu secara rutin setiap bulan.",
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      image: "https://picsum.photos/seed/kesehatan/600/400"
    },
    {
      title: "Kelestarian Lingkungan Hidup",
      description: "Kerja bakti, pengelolaan sampah, dan penghijauan lingkungan.",
      icon: <Leaf className="w-6 h-6 text-rose-500" />,
      image: "https://picsum.photos/seed/lingkungan/600/400"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-16"
    >
      {/* Hero Section */}
      <section className="relative bg-rose-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/community/1920/1080?blur=2" 
            alt="Community" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-rose-800/80 mix-blend-multiply" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block py-1 px-3 rounded-full bg-rose-500/30 border border-rose-400/30 text-rose-100 text-xs font-semibold tracking-wider mb-4"
            >
              SELAMAT DATANG DI
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 leading-tight"
            >
              Pemberdayaan Kesejahteraan Keluarga Cendrawasih 1
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-rose-100 mb-6 leading-relaxed"
            >
              Bersama membangun keluarga sejahtera, cerdas, dan sehat di lingkungan RW. 015 Pesona Gading Cibitung.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a href="#kegiatan" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-full text-rose-600 bg-white hover:bg-rose-50 transition-colors shadow-md hover:shadow-lg">
                Lihat Kegiatan Kami
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demografi Warga */}
      <DemografiWarga />

      {/* 10 Program Pokok PKK */}
      <section id="kegiatan" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Kegiatan & Program Pokok</h3>
          <p className="text-lg text-slate-600">
            Pelaksanaan 10 Program Pokok PKK yang diwujudkan melalui berbagai kegiatan nyata di lingkungan RW 015.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-rose-100 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 bg-white p-2 rounded-xl shadow-lg">
                  {activity.icon}
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{activity.title}</h4>
                <p className="text-slate-600 leading-relaxed">{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-16 bg-[#FFF0CA] border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mx-auto w-24 h-24 mb-6 flex items-center justify-center shadow-sm rounded-2xl overflow-hidden bg-white border border-rose-100">
              <img 
                src="https://cdn.phototourl.com/member/2026-03-29-6aafd335-cfb2-47ca-940d-0108ac027797.png" 
                alt="Logo PKK" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Struktur Organisasi</h3>
            <p className="text-lg text-slate-600">
              Pengurus PKK Cendrawasih 1 RW. 015 Pesona Gading Cibitung
            </p>
          </div>

          <div className="flex flex-col items-center space-y-16">
            {/* Baris 1: Ketua */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="relative mb-6">
                {/* Decorative background blobs */}
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                
                {/* Image container */}
                <div className="relative w-48 rounded-2xl overflow-hidden shadow-xl z-10">
                  <img 
                    src="https://cdn.phototourl.com/uploads/2026-03-10-a182c4f2-8dff-4050-9273-c99606a1c7f0.png" 
                    alt="Alinda - Ketua" 
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Baris 2: Sekretaris & Bendahara */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/uploads/2026-03-11-48a05bf1-f2c5-4b2e-a8f5-3a84afe6def2.png" 
                      alt="Rohita - Sekretaris" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/uploads/2026-03-11-c670e023-cd23-4d87-b353-7db71a83e90d.png" 
                      alt="Suhaidah - Bendahara 1" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/uploads/2026-03-11-a12fef6c-b832-413a-8696-383337cc7789.png" 
                      alt="Sugiarti - Bendahara 2" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Majelis Talim */}
      <section className="py-16 border-t border-rose-100 bg-[#D4E9DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Majelis Taklim</h3>
            <p className="text-lg text-slate-600">
              Kegiatan Keagamaan Ibu-ibu PKK Cendrawasih 1 RW. 015
            </p>
          </div>

          <div className="flex flex-col items-center space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/member/2026-04-05-51df6785-138e-4bb8-9953-1325f50512ab.png" 
                      alt="Majelis Taklim 1" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/member/2026-04-05-355feb5b-641d-4ada-b2f3-7115d9859084.png" 
                      alt="Majelis Taklim 2" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/member/2026-04-05-5d38525c-639b-4bbd-9bb4-fb8647cbf2e4.png" 
                      alt="Majelis Taklim 3" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Kelompok Jantung Sehat */}
      <section className="py-16 border-t border-rose-100 bg-[#C4DCFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Kelompok Jantung Sehat</h3>
            <p className="text-lg text-slate-600">
              Kegiatan Olahraga dan Kesehatan Jantung Warga RW. 015
            </p>
          </div>

          <div className="flex flex-col items-center space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/member/2026-04-08-370b4e5d-0d63-4090-ae23-1b3b8131f591.png" 
                      alt="Uum" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/member/2026-04-08-9ede8269-270b-4580-a831-b4c66cc411a8.png" 
                      alt="Erry Yuliana" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                  
                  <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                    <img 
                      src="https://cdn.phototourl.com/member/2026-04-08-977d6865-91a2-4201-9871-8650b834a8ec.png" 
                      alt="Bendahara" 
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
