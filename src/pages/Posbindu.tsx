import { motion } from 'motion/react';
import { Activity, Stethoscope, Heart, Users, Droplets, ClipboardList, Calendar, Filter } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  LineChart, Line,
  AreaChart, Area, Legend
} from 'recharts';

interface Person {
  NO: string;
  RT: string;
  NAMA: string;
  ALAMAT: string;
  'NO KK': string;
  NIK: string;
  'JENIS KELAMIN': string;
  'TEMPAT LAHIR': string;
  'TGL. LAHIR': string;
  USIA: string;
  AGAMA: string;
  'HUB. KELUARGA': string;
  'STATUS KAWIN': string;
  'PENDIDIKAN TERAKHIR': string;
  PEKERJAAN: string;
  'STTS TINGGAL': string;
  'NAMA AYAH': string;
  'NAMA IBU': string;
  KETERANGAN: string;
}

interface Visit {
  TANGGAL: string;
  'JENIS KELAMIN': string;
}

export default function Posbindu() {
  const [data, setData] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [visitData, setVisitData] = useState<Visit[]>([]);
  const [visitLoading, setVisitLoading] = useState(true);
  const [selectedYear, setSelectedYear] = useState<string>('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRh_ePcQk6dlMg-n35ZQEyp_PGDJKFR0Jyf-dVMTKFdVYwZ7MReVZ8xww_1pIMNqUEWE_087gZd26nR/pub?gid=1135930185&single=true&output=csv');
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setData(results.data as Person[]);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    const fetchVisitData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTYG3FkCHn7OXTyiLCtqdLwFkFexQQVXVlPtwpxIOlzWt3mpcCZbMyYDp2p4PabbbQnB1GciwkokN20/pub?gid=0&single=true&output=csv');
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setVisitData(results.data as Visit[]);
            setVisitLoading(false);
          }
        });
      } catch (error) {
        console.error('Error fetching visit data:', error);
        setVisitLoading(false);
      }
    };

    fetchData();
    fetchVisitData();
  }, []);

  // Calculations
  const balitaTotal = data.filter(d => parseInt(d.USIA) >= 0 && parseInt(d.USIA) <= 5).length;
  const sekolahTotal = data.filter(d => parseInt(d.USIA) >= 6 && parseInt(d.USIA) <= 18).length;
  const dewasaTotal = data.filter(d => parseInt(d.USIA) >= 19 && parseInt(d.USIA) <= 59).length;
  const lansiaTotal = data.filter(d => parseInt(d.USIA) >= 60).length;
  const wusTotal = data.filter(d => d['JENIS KELAMIN'] === 'PEREMPUAN' && parseInt(d.USIA) >= 15 && parseInt(d.USIA) <= 59).length;
  const pusTotal = data.filter(d => d['HUB. KELUARGA'] === 'KEPALA KELUARGA' && d['STATUS KAWIN'] === 'KAWIN').length;

  // Chart Data
  const balitaData = [0, 1, 2, 3, 4, 5].map(age => ({
    age: `${age} th`,
    count: data.filter(d => parseInt(d.USIA) === age).length
  }));

  const sekolahData = [
    { group: '6-9 th', count: data.filter(d => parseInt(d.USIA) >= 6 && parseInt(d.USIA) <= 9).length },
    { group: '10-12 th', count: data.filter(d => parseInt(d.USIA) >= 10 && parseInt(d.USIA) <= 12).length },
    { group: '13-15 th', count: data.filter(d => parseInt(d.USIA) >= 13 && parseInt(d.USIA) <= 15).length },
    { group: '16-18 th', count: data.filter(d => parseInt(d.USIA) >= 16 && parseInt(d.USIA) <= 18).length },
  ];

  const dewasaData = [
    { group: '19-29 th', count: data.filter(d => parseInt(d.USIA) >= 19 && parseInt(d.USIA) <= 29).length },
    { group: '30-39 th', count: data.filter(d => parseInt(d.USIA) >= 30 && parseInt(d.USIA) <= 39).length },
    { group: '40-49 th', count: data.filter(d => parseInt(d.USIA) >= 40 && parseInt(d.USIA) <= 49).length },
    { group: '50-59 th', count: data.filter(d => parseInt(d.USIA) >= 50 && parseInt(d.USIA) <= 59).length },
  ];

  const lansiaData = [
    { name: '60-69 th', value: data.filter(d => parseInt(d.USIA) >= 60 && parseInt(d.USIA) <= 69).length },
    { name: '70-79 th', value: data.filter(d => parseInt(d.USIA) >= 70 && parseInt(d.USIA) <= 79).length },
    { name: '80+ th', value: data.filter(d => parseInt(d.USIA) >= 80).length },
  ].filter(d => d.value > 0);

  const wusData = [
    { name: '15-29 th', value: data.filter(d => d['JENIS KELAMIN'] === 'PEREMPUAN' && parseInt(d.USIA) >= 15 && parseInt(d.USIA) <= 29).length },
    { name: '30-49 th', value: data.filter(d => d['JENIS KELAMIN'] === 'PEREMPUAN' && parseInt(d.USIA) >= 30 && parseInt(d.USIA) <= 49).length },
    { name: '50-59 th', value: data.filter(d => d['JENIS KELAMIN'] === 'PEREMPUAN' && parseInt(d.USIA) >= 50 && parseInt(d.USIA) <= 59).length },
  ].filter(d => d.value > 0);

  const rts = Array.from(new Set(data.map(d => d.RT))).filter(Boolean).sort();
  const pusData = rts.map(rt => ({
    rt: `RT ${rt}`,
    count: data.filter(d => d.RT === rt && d['HUB. KELUARGA'] === 'KEPALA KELUARGA' && d['STATUS KAWIN'] === 'KAWIN').length
  }));

  const PIE_COLORS = ['#ec4899', '#8b5cf6', '#3b82f6', '#10b981'];

  // Process Visit Data
  const years = Array.from(new Set(visitData.map(d => {
    const parts = d.TANGGAL?.split('/');
    return parts?.length === 3 ? parts[2] : '';
  }).filter(Boolean))).sort().reverse();

  const filteredVisits = selectedYear === 'All' 
    ? visitData 
    : visitData.filter(d => d.TANGGAL?.endsWith(`/${selectedYear}`));

  const monthlyDataMap = new Map<string, { month: string, LakiLaki: number, Perempuan: number, sortKey: string }>();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];

  filteredVisits.forEach(d => {
    if (!d.TANGGAL) return;
    const parts = d.TANGGAL.split('/');
    if (parts.length === 3) {
      const mIndex = parseInt(parts[1], 10) - 1;
      const monthYear = `${monthNames[mIndex]} ${parts[2]}`;
      const sortKey = `${parts[2]}-${parts[1]}`;
      
      if (!monthlyDataMap.has(monthYear)) {
        monthlyDataMap.set(monthYear, { month: monthYear, LakiLaki: 0, Perempuan: 0, sortKey });
      }
      
      const entry = monthlyDataMap.get(monthYear)!;
      if (d['JENIS KELAMIN']?.toLowerCase() === 'laki-laki') {
        entry.LakiLaki += 1;
      } else if (d['JENIS KELAMIN']?.toLowerCase() === 'perempuan') {
        entry.Perempuan += 1;
      }
    }
  });

  const chartVisitData = Array.from(monthlyDataMap.values())
    .sort((a, b) => a.sortKey.localeCompare(b.sortKey))
    .map(d => ({ month: d.month, 'Laki-laki': d.LakiLaki, 'Perempuan': d.Perempuan }));

  const steps = [
    {
      title: "Pendaftaran",
      desc: "Pencatatan identitas dan riwayat kesehatan peserta.",
      icon: <Users className="w-6 h-6 text-rose-600" />
    },
    {
      title: "Wawancara",
      desc: "Penggalian informasi faktor risiko penyakit tidak menular.",
      icon: <ClipboardList className="w-6 h-6 text-rose-600" />
    },
    {
      title: "Pengukuran",
      desc: "Tinggi badan, berat badan, lingkar perut, dan IMT.",
      icon: <Activity className="w-6 h-6 text-rose-600" />
    },
    {
      title: "Pemeriksaan",
      desc: "Tekanan darah, gula darah, kolesterol, dan asam urat.",
      icon: <Droplets className="w-6 h-6 text-rose-600" />
    },
    {
      title: "Edukasi",
      desc: "Konseling dan penyuluhan kesehatan sesuai hasil pemeriksaan.",
      icon: <Stethoscope className="w-6 h-6 text-rose-600" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="mx-auto w-24 h-24 mb-6 flex items-center justify-center shadow-sm rounded-2xl overflow-hidden bg-white border border-rose-100 p-2">
          <img 
            src="https://cdn.phototourl.com/member/2026-03-29-9809b89e-4e22-4209-9feb-be86deb8e748.png" 
            alt="Logo Posbindu" 
            className="w-full h-full object-contain" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Posbindu PTM Cendrawasih 1
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Pos Pembinaan Terpadu Penyakit Tidak Menular (Posbindu PTM) adalah kegiatan deteksi dini dan pemantauan faktor risiko PTM utama yang dilaksanakan secara terpadu, rutin, dan periodik.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
          <img 
            src="https://cdn.phototourl.com/uploads/2026-03-11-ba7b285e-0dba-4a79-a5f3-1d309ee44d83.png" 
            alt="Kegiatan Posbindu 1" 
            className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
          <img 
            src="https://cdn.phototourl.com/uploads/2026-03-11-735a4ac5-d555-46c7-b5f5-6a5590f026d9.png" 
            alt="Kegiatan Posbindu 2" 
            className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Photo Slide (Threads Style) */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-slate-900">Giat Posbindu 11 April 2026</h3>
        </div>
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 sm:px-6 lg:px-8 pb-8 pt-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {[
              "https://cdn.phototourl.com/member/2026-04-12-a605578d-9811-474f-b56a-3d4016d89b27.jpg",
              "https://cdn.phototourl.com/member/2026-04-12-77a52c3e-e249-49d4-b177-52d2a6a6bdc6.jpg",
              "https://cdn.phototourl.com/member/2026-04-12-d8541218-bf28-44aa-b893-60cb31dd4bc4.jpg",
              "https://cdn.phototourl.com/member/2026-04-12-f296d611-f7fd-475f-a1df-73bd115f8e45.jpg",
              "https://cdn.phototourl.com/member/2026-04-12-84690e16-4346-444f-8f80-69119cda0b46.jpg",
              "https://cdn.phototourl.com/member/2026-04-13-12423277-1888-4d34-86b2-eb7ac4e9cd93.jpg",
              "https://cdn.phototourl.com/member/2026-04-13-db4c0a0e-3c20-40a6-8f42-048dbdb8ffc4.jpg",
              "https://cdn.phototourl.com/member/2026-04-13-69f48740-16bd-479d-ab42-94aa46928f9b.jpg"
            ].map((src, index) => (
              <div 
                key={index} 
                className="flex-none h-72 sm:h-80 aspect-[4/5] snap-center rounded-3xl overflow-hidden shadow-md border border-slate-100 group relative"
              >
                <img 
                  src={src} 
                  alt={`Giat Posbindu ${index + 1}`} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infografis Data Warga */}
      <section className="py-16 mb-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Demografi Warga</h3>
          <p className="text-lg text-slate-600">
            Statistik data warga berdasarkan kelompok usia dan kategori sasaran Posbindu.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Balita */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Balita</h4>
                  <p className="text-sm text-slate-500">Usia 0-5 tahun</p>
                </div>
                <div className="text-3xl font-black text-rose-500">{balitaTotal}</div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={balitaData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="age" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="count" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Card 2: Sekolah & Remaja */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Sekolah & Remaja</h4>
                  <p className="text-sm text-slate-500">Usia 6-18 tahun</p>
                </div>
                <div className="text-3xl font-black text-orange-500">{sekolahTotal}</div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={sekolahData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="group" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Line type="monotone" dataKey="count" stroke="#f97316" strokeWidth={3} dot={{ r: 4, fill: '#f97316', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Card 3: Dewasa */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Dewasa</h4>
                  <p className="text-sm text-slate-500">Usia 19-59 tahun</p>
                </div>
                <div className="text-3xl font-black text-emerald-500">{dewasaTotal}</div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={dewasaData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                    <defs>
                      <linearGradient id="colorDewasa" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="group" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="count" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorDewasa)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Card 4: Lansia */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Lansia</h4>
                  <p className="text-sm text-slate-500">Usia 60+ tahun</p>
                </div>
                <div className="text-3xl font-black text-purple-500">{lansiaTotal}</div>
              </div>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={lansiaData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {lansiaData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 text-xs text-slate-500 mt-2">
                {lansiaData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[index % PIE_COLORS.length] }}></div>
                    {entry.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Card 5: Wanita Usia Subur */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Wanita Usia Subur</h4>
                  <p className="text-sm text-slate-500">Perempuan 15-59 tahun</p>
                </div>
                <div className="text-3xl font-black text-pink-500">{wusTotal}</div>
              </div>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={wusData}
                      cx="50%"
                      cy="50%"
                      outerRadius={75}
                      dataKey="value"
                      labelLine={false}
                    >
                      {wusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#f472b6', '#fb7185', '#e879f9'][index % 3]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 text-xs text-slate-500 mt-2">
                {wusData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ['#f472b6', '#fb7185', '#e879f9'][index % 3] }}></div>
                    {entry.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Card 6: Pasangan Usia Subur */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800">Pasangan Usia Subur</h4>
                  <p className="text-sm text-slate-500">Kepala Keluarga Kawin</p>
                </div>
                <div className="text-3xl font-black text-blue-500">{pusTotal}</div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={pusData} layout="vertical" margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                    <YAxis dataKey="rt" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} width={45} />
                    <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Grafik Kunjungan */}
      <section className="py-16 mb-12 bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Grafik Kunjungan Posbindu</h3>
            <p className="text-slate-600">
              Tren jumlah kunjungan warga berdasarkan jenis kelamin.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-xl border border-slate-200">
            <Filter className="w-5 h-5 text-slate-500 ml-2" />
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-transparent border-none text-slate-700 font-medium focus:ring-0 cursor-pointer py-1 pr-8"
            >
              <option value="All">Semua Tahun</option>
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {visitLoading ? (
          <div className="flex justify-center items-center h-80">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
          </div>
        ) : chartVisitData.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-80 text-slate-400">
            <Calendar className="w-12 h-12 mb-4 opacity-20" />
            <p>Tidak ada data kunjungan untuk tahun ini.</p>
          </div>
        ) : (
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartVisitData} margin={{ top: 20, right: 30, bottom: 20, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fill: '#64748b' }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} 
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Line 
                  type="monotone" 
                  name="Laki-laki"
                  dataKey="Laki-laki" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 6 }} 
                />
                <Line 
                  type="monotone" 
                  name="Perempuan"
                  dataKey="Perempuan" 
                  stroke="#ec4899" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#ec4899', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>

      {/* Struktur Organisasi Posbindu */}
      <section className="py-16 bg-rose-50/50 border-t border-rose-100 rounded-3xl mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="mx-auto w-24 h-24 mb-6 flex items-center justify-center shadow-sm rounded-2xl overflow-hidden bg-white border border-rose-100 p-2">
              <img 
                src="https://cdn.phototourl.com/member/2026-03-29-9809b89e-4e22-4209-9feb-be86deb8e748.png" 
                alt="Logo Posbindu" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Struktur Organisasi</h3>
            <p className="text-lg text-slate-600">
              Pengurus Posbindu Cendrawasih 1 RW. 015 Pesona Gading Cibitung
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
                    src="https://cdn.phototourl.com/uploads/2026-03-10-c4fe6c3d-8a67-465f-8090-eca301cf5ef8.png" 
                    alt="Pengurus Baris 1" 
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            {/* Baris 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 w-full max-w-5xl">
              {[
                "https://cdn.phototourl.com/uploads/2026-03-11-ae7465a0-caf8-42c1-bfbf-258e94e24c75.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-a1b673a8-542a-406a-aac9-7e6601d92d79.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-3f3973f6-2463-441a-9ca5-50f163f12472.png"
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
                "https://cdn.phototourl.com/uploads/2026-03-11-91ebf2ea-b402-450b-b19f-bc72ff9584b6.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-d2b7bb61-8f22-4bbe-b0b0-cdb655e1c5fc.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-21441881-8299-420f-8f3f-82addd6732e9.png"
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
                "https://cdn.phototourl.com/uploads/2026-03-11-2607be17-f3f3-4b7e-b355-0f3517df7bdc.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-1e98c59c-664d-4357-a5aa-2ad01cb4dae4.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-98dd43a0-b299-40e2-9cff-05a5eed3e2fb.png",
                "https://cdn.phototourl.com/uploads/2026-03-11-01f66acb-1028-489b-8ca3-602a9bace2c5.png"
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
