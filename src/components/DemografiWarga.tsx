import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { motion } from 'motion/react';
import { Users, User, UserCheck } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

interface DemografiData {
  totalPenduduk: number;
  totalKK: number;
  totalLakiLaki: number;
  totalPerempuan: number;
}

export default function DemografiWarga() {
  const [data, setData] = useState<DemografiData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(
          'https://docs.google.com/spreadsheets/d/e/2PACX-1vRh_ePcQk6dlMg-n35ZQEyp_PGDJKFR0Jyf-dVMTKFdVYwZ7MReVZ8xww_1pIMNqUEWE_087gZd26nR/pub?gid=1135930185&single=true&output=csv'
        );
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const rows = results.data as any[];
            
            let totalPenduduk = 0;
            let totalKK = 0;
            let totalLakiLaki = 0;
            let totalPerempuan = 0;

            rows.forEach((row) => {
              // Validasi baris yang memiliki NAMA
              if (row['NAMA'] && row['NAMA'].trim() !== '') {
                totalPenduduk++;
                
                const jk = row['JENIS KELAMIN']?.trim().toUpperCase();
                if (jk === 'LAKI-LAKI') totalLakiLaki++;
                else if (jk === 'PEREMPUAN') totalPerempuan++;

                const hub = row['HUB. KELUARGA']?.trim().toUpperCase();
                if (hub === 'KEPALA KELUARGA') totalKK++;
              }
            });

            setData({
              totalPenduduk,
              totalKK,
              totalLakiLaki,
              totalPerempuan
            });
            setLoading(false);
          },
          error: (error: any) => {
            console.error('Error parsing CSV:', error);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error('Error fetching CSV:', error);
        setLoading(false);
      }
    };

    fetchCSV();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
      </div>
    );
  }

  if (!data) return null;

  const genderData = [
    { name: 'Laki-laki', value: data.totalLakiLaki, color: '#3b82f6' }, // blue-500
    { name: 'Perempuan', value: data.totalPerempuan, color: '#ec4899' } // pink-500
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Demografi Warga</h2>
          <p className="text-lg text-slate-600">
            Statistik data kependudukan warga RW 015 Pesona Gading Cibitung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card Total Penduduk */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4"
          >
            <div className="p-4 bg-rose-100 rounded-xl text-rose-600">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Total Penduduk</p>
              <h3 className="text-3xl font-bold text-slate-900">{data.totalPenduduk}</h3>
            </div>
          </motion.div>

          {/* Card Kepala Keluarga */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4"
          >
            <div className="p-4 bg-emerald-100 rounded-xl text-emerald-600">
              <UserCheck className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">Kepala Keluarga</p>
              <h3 className="text-3xl font-bold text-slate-900">{data.totalKK}</h3>
            </div>
          </motion.div>

          {/* Card Laki-laki & Perempuan */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center space-x-4"
          >
            <div className="p-4 bg-blue-100 rounded-xl text-blue-600">
              <User className="w-8 h-8" />
            </div>
            <div className="w-full">
              <p className="text-sm font-medium text-slate-500 mb-1">Jenis Kelamin</p>
              <div className="flex justify-between items-center">
                <div className="text-blue-600 font-semibold">
                  <span className="text-xl">{data.totalLakiLaki}</span> L
                </div>
                <div className="text-pink-600 font-semibold">
                  <span className="text-xl">{data.totalPerempuan}</span> P
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Jenis Kelamin */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-6 text-center">Komposisi Jenis Kelamin</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={genderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => [`${value} Jiwa`, 'Jumlah']}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Chart Perbandingan */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-6 text-center">Statistik Penduduk</h3>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={[
                    { name: 'Total Penduduk', value: data.totalPenduduk, fill: '#f43f5e' },
                    { name: 'Kepala Keluarga', value: data.totalKK, fill: '#10b981' }
                  ]}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip 
                    cursor={{ fill: '#f8fafc' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {
                      [
                        { name: 'Total Penduduk', value: data.totalPenduduk, fill: '#f43f5e' },
                        { name: 'Kepala Keluarga', value: data.totalKK, fill: '#10b981' }
                      ].map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))
                    }
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
