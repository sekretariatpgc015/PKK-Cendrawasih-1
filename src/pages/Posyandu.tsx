import { motion } from 'motion/react';
import { Baby, Scale, Syringe, ClipboardList, HeartPulse } from 'lucide-react';

export default function Posyandu() {
  const services = [
    {
      title: "Penimbangan & Pengukuran",
      desc: "Pemantauan pertumbuhan balita setiap bulan untuk mencegah stunting.",
      icon: <Scale className="w-8 h-8 text-rose-500" />
    },
    {
      title: "Imunisasi",
      desc: "Pemberian imunisasi dasar lengkap untuk kekebalan tubuh balita.",
      icon: <Syringe className="w-8 h-8 text-rose-500" />
    },
    {
      title: "Pemberian Makanan Tambahan",
      desc: "PMT penyuluhan dan pemulihan untuk balita dengan gizi kurang.",
      icon: <Baby className="w-8 h-8 text-rose-500" />
    },
    {
      title: "Penyuluhan Kesehatan",
      desc: "Edukasi kesehatan ibu dan anak, gizi, serta pola asuh.",
      icon: <ClipboardList className="w-8 h-8 text-rose-500" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-sm border border-rose-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 font-medium text-sm mb-6 w-fit">
              <HeartPulse className="w-4 h-4" />
              Layanan Kesehatan Balita
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Posyandu Cendrawasih 1
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Pos Pelayanan Terpadu (Posyandu) merupakan upaya kesehatan bersumber daya masyarakat yang dikelola dan diselenggarakan dari, oleh, untuk dan bersama masyarakat dalam penyelenggaraan pembangunan kesehatan.
            </p>
            
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
              <h3 className="font-semibold text-rose-900 mb-2">Jadwal Pelayanan:</h3>
              <p className="text-rose-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Minggu ke-2 setiap bulannya
              </p>
              <p className="text-rose-800 flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Pukul 08.00 - 11.00 WIB
              </p>
            </div>
          </div>
          
          <div className="relative w-full aspect-square md:aspect-[4/3] bg-rose-50/30 rounded-3xl flex items-center justify-center overflow-hidden group p-4 lg:p-8">
            <img 
              src="https://cdn.phototourl.com/uploads/2026-03-12-b73240b3-c8ba-4281-a380-1be612b2eb5c.png" 
              alt="Kegiatan Posyandu" 
              className="w-full h-full object-contain rounded-2xl transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 mb-20">
        <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">Layanan Utama Kami</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Struktur Organisasi Posyandu */}
      <section className="py-16 bg-rose-50/50 border-t border-rose-100 rounded-3xl mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mx-auto w-24 h-24 mb-6 flex items-center justify-center shadow-sm rounded-2xl overflow-hidden bg-white border border-rose-100">
              <img 
                src="https://cdn.phototourl.com/member/2026-03-29-132b62d8-d37a-4201-bfcd-120501987ee5.png" 
                alt="Logo Posyandu" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Struktur Organisasi</h3>
            <p className="text-lg text-slate-600">
              Pengurus Posyandu Cendrawasih 1 RW. 015 Pesona Gading Cibitung
            </p>
          </div>

          <div className="flex flex-col items-center space-y-16">
            {/* Baris 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                
                <div className="relative w-48 rounded-2xl overflow-hidden shadow-xl z-10">
                  <img 
                    src="https://cdn.phototourl.com/uploads/2026-03-11-89eed63a-c626-4e5a-960e-2d1d03870673.png" 
                    alt="Pengurus Baris 1" 
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Baris 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full max-w-3xl">
              {[
                "https://cdn.phototourl.com/uploads/2026-03-11-b0546f96-bda9-4d12-b2ac-de7d3ae8ff37.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-d3676c48-82e4-45ab-b2eb-3466a6869a12.png"
              ].map((src, idx) => (
                <motion.div 
                  key={`row2-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                    
                    <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                      <img 
                        src={src} 
                        alt={`Pengurus Baris 2 - ${idx + 1}`} 
                        className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Baris 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-5xl">
              {[
                "https://cdn.phototourl.com/uploads/2026-03-10-46a17db2-fd8f-47cb-80b8-310838b1d55a.png",
                "https://cdn.phototourl.com/uploads/2026-03-10-4d085db6-13af-4cdd-9795-651e4ffb8e56.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-9f58f815-10a3-4fb2-9d3b-285b286e0f98.png"
              ].map((src, idx) => (
                <motion.div 
                  key={`row3-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                    
                    <div className="relative w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                      <img 
                        src={src} 
                        alt={`Pengurus Baris 3 - ${idx + 1}`} 
                        className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Baris 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-6xl">
              {[
                "https://cdn.phototourl.com/uploads/2026-03-11-25f52a66-514c-4646-a7f3-b492960fe20c.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-2e279a84-f1a1-40dc-a53b-1caf37964cfd.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-994a3e61-0a6e-4c35-887c-4422ce398133.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-0b6a08e2-877a-4a91-9d17-49a6723e7835.png"
              ].map((src, idx) => (
                <motion.div 
                  key={`row4-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-rose-400 to-rose-200 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-60"></div>
                    <div className="absolute inset-0 bg-gradient-to-bl from-rose-300 to-rose-100 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300 opacity-60"></div>
                    
                    <div className="relative w-36 md:w-40 rounded-2xl overflow-hidden shadow-xl z-10">
                      <img 
                        src={src} 
                        alt={`Pengurus Baris 4 - ${idx + 1}`} 
                        className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
