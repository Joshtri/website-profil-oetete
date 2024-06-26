/* eslint-disable no-empty */
/* eslint-disable no-useless-catch */
import Warga from "../models/warga.model.js";
import Keluarga from "../models/keluarga.model.js";


// Controller untuk mendapatkan statistik jenis kelamin untuk warga yang hidup
export const getGenderStatistics = async (_, res) => {
  try {
      const totalPria = await Warga.count({ where: { jenis_kelamin: 'Laki-Laki', status_warga: 'hidup' } });
      const totalWanita = await Warga.count({ where: { jenis_kelamin: 'Perempuan', status_warga: 'hidup' } });

      res.status(200).json({ pria: totalPria, wanita: totalWanita });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Controller untuk mendapatkan statistik pekerjaan untuk warga yang hidup
export const getPekerjaanStatistics = async (_, res) => {
  try {
      const totalBelumKerja = await Warga.count({ where: { pekerjaan: 'Belum Bekerja', status_warga: 'hidup' } });
      const totalMengurusRT = await Warga.count({ where: { pekerjaan: 'Mengurus Rumah Tangga', status_warga: 'hidup' } });
      const totalPelajarMhs = await Warga.count({ where: { pekerjaan: 'Pelajar/Mahasiswa', status_warga: 'hidup' } });
      const totalPensiunan = await Warga.count({ where: { pekerjaan: 'Pensiunan', status_warga: 'hidup' } });
      const totalPns = await Warga.count({ where: { pekerjaan: 'PNS', status_warga: 'hidup' } });
      const totalPolri = await Warga.count({ where: { pekerjaan: 'POLRI', status_warga: 'hidup' } });
      const totalTni = await Warga.count({ where: { pekerjaan: 'TNI', status_warga: 'hidup' } });
      const totalWiraswasta = await Warga.count({ where: { pekerjaan: 'Wiraswasta', status_warga: 'hidup' } });
      const totalSwasta = await Warga.count({ where: { pekerjaan: 'Swasta', status_warga: 'hidup' } });
      const totalBumn = await Warga.count({ where: { pekerjaan: 'Pegawai BUMN', status_warga: 'hidup' } });
      const totalKerjaLepas = await Warga.count({ where: { pekerjaan: 'Pekerja Lepas', status_warga: 'hidup' } });
      const totalPetaniPeternak = await Warga.count({ where: { pekerjaan: 'Petani/Peternak/Pekebun', status_warga: 'hidup' } });
      const totalNelayan = await Warga.count({ where: { pekerjaan: 'Nelayan', status_warga: 'hidup' } });
      const totalIndustri = await Warga.count({ where: { pekerjaan: 'Industri', status_warga: 'hidup' } });

      res.json({
          belumKerja: totalBelumKerja,
          mengurusRT: totalMengurusRT,
          pelajarMhs: totalPelajarMhs,
          pensiunan: totalPensiunan,
          pns: totalPns,
          polri: totalPolri,
          tni: totalTni,
          wiraswasta: totalWiraswasta,
          swasta: totalSwasta,
          bumn: totalBumn,
          kerjaLepas: totalKerjaLepas,
          petaniPeternak: totalPetaniPeternak,
          nelayan: totalNelayan,
          industri: totalIndustri
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


// Controller untuk mendapatkan statistik pendidikan untuk warga yang hidup
export const getPendidikanStatistics = async (_, res) => {
  try {
      const pendidikanLevels = [
          'Belum/Tidak Pernah Sekolah', 'Belum/Tidak Tamat SD/SDLB/MI/Paket A', 'SD/SDLB/MI/Paket A',
          'SMP/SMPLB/MTs/Paket B', 'SMA/SMLB/MA/SMK/MAK/paket C', 'DI/DII/DIII',
          'DIV/S1', 'S2', 'S3'
      ];

      const pendidikanStatistics = {};

      for (const level of pendidikanLevels) {
          const count = await Warga.count({
              where: {
                  pendidikan: level,
                  status_warga: 'hidup' // Menambahkan kriteria status_warga = 'hidup'
              }
          });
          pendidikanStatistics[level] = count;
      }

      res.status(200).json(pendidikanStatistics);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


// Controller untuk mendapatkan statistik status perkawinan untuk warga yang hidup
export const getStatusPerkawinanStatistics = async (_, res) => {
  try {
      const statusPerkawinanLevels = [
          'Belum Menikah', 'Sudah Menikah', 'Cerai Hidup', 'Cerai Mati'
      ];

      const statusPerkawinanStatistics = {};

      for (const status of statusPerkawinanLevels) {
          const count = await Warga.count({
              where: {
                  status_perkawinan: status,
                  status_warga: 'hidup' // Menambahkan kriteria status_warga = 'hidup'
              }
          });
          statusPerkawinanStatistics[status] = count;
      }

      res.status(200).json(statusPerkawinanStatistics);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};




// Fungsi untuk mendapatkan total data Warga dengan jenis kelamin tertentu dan status hidup
export const getTotalGender = async (gender) => {
  try {
    const totalWarga = await Warga.count({ where: { jenis_kelamin: gender, status_warga: 'hidup' } });
    return totalWarga;
  } catch (error) {
    throw error;
  }
};
// Fungsi untuk mendapatkan total data Warga dengan status hidup
export const getTotalWarga = async () => {
  try {
      const totalWargaHidup = await Warga.count({ where: { status_warga: 'hidup' } });
      return totalWargaHidup;
  } catch (error) {
      throw error;
  }
};



// Controller untuk mendapatkan statistik pekerjaan untuk warga yang hidup
export const getPekerjaanByGender = async (_, res) => {
  try {
      // Mendapatkan jumlah warga untuk setiap jenis pekerjaan
      const statsBelumKerja = await getGenderStats('Belum Bekerja');
      const statsMengurusRT = await getGenderStats('Mengurus Rumah Tangga');
      const statsPelajarMhs = await getGenderStats('Pelajar/Mahasiswa');
      const statsPensiunan = await getGenderStats('Pensiunan');
      const statsPns = await getGenderStats('PNS');
      const statsPolri = await getGenderStats('POLRI');
      const statsTni = await getGenderStats('TNI');
      const statsWiraswasta = await getGenderStats('Wiraswasta');
      const statsSwasta = await getGenderStats('Swasta');
      const statsBumn = await getGenderStats('Pegawai BUMN');
      const statsKerjaLepas = await getGenderStats('Pekerja Lepas');
      const statsPetaniPeternak = await getGenderStats('Petani/Peternak/Pekebun');
      const statsNelayan = await getGenderStats('Nelayan');
      const statsIndustri = await getGenderStats('Industri');

      // Menghitung total keseluruhan untuk setiap jenis pekerjaan
      const totalBelumKerja = statsBelumKerja.lakiLaki + statsBelumKerja.perempuan;
      const totalMengurusRT = statsMengurusRT.lakiLaki + statsMengurusRT.perempuan;
      const totalPelajarMhs = statsPelajarMhs.lakiLaki + statsPelajarMhs.perempuan;
      const totalPensiunan = statsPensiunan.lakiLaki + statsPensiunan.perempuan;
      const totalPns = statsPns.lakiLaki + statsPns.perempuan;
      const totalPolri = statsPolri.lakiLaki + statsPolri.perempuan;
      const totalTni = statsTni.lakiLaki + statsTni.perempuan;
      const totalWiraswasta = statsWiraswasta.lakiLaki + statsWiraswasta.perempuan;
      const totalSwasta = statsSwasta.lakiLaki + statsSwasta.perempuan;
      const totalBumn = statsBumn.lakiLaki + statsBumn.perempuan;
      const totalKerjaLepas = statsKerjaLepas.lakiLaki + statsKerjaLepas.perempuan;
      const totalPetaniPeternak = statsPetaniPeternak.lakiLaki + statsPetaniPeternak.perempuan;
      const totalNelayan = statsNelayan.lakiLaki + statsNelayan.perempuan;
      const totalIndustri = statsIndustri.lakiLaki + statsIndustri.perempuan;

      // Menyusun data untuk respons JSON
      const responseData = {
          belumKerja: {
              lakiLaki: statsBelumKerja.lakiLaki,
              perempuan: statsBelumKerja.perempuan,
              total: totalBelumKerja
          },
          mengurusRT: {
              lakiLaki: statsMengurusRT.lakiLaki,
              perempuan: statsMengurusRT.perempuan,
              total: totalMengurusRT
          },
          pelajarMhs: {
              lakiLaki: statsPelajarMhs.lakiLaki,
              perempuan: statsPelajarMhs.perempuan,
              total: totalPelajarMhs
          },
          pensiunan: {
              lakiLaki: statsPensiunan.lakiLaki,
              perempuan: statsPensiunan.perempuan,
              total: totalPensiunan
          },
          pns: {
              lakiLaki: statsPns.lakiLaki,
              perempuan: statsPns.perempuan,
              total: totalPns
          },
          polri: {
              lakiLaki: statsPolri.lakiLaki,
              perempuan: statsPolri.perempuan,
              total: totalPolri
          },
          tni: {
              lakiLaki: statsTni.lakiLaki,
              perempuan: statsTni.perempuan,
              total: totalTni
          },
          wiraswasta: {
              lakiLaki: statsWiraswasta.lakiLaki,
              perempuan: statsWiraswasta.perempuan,
              total: totalWiraswasta
          },
          swasta: {
              lakiLaki: statsSwasta.lakiLaki,
              perempuan: statsSwasta.perempuan,
              total: totalSwasta
          },
          bumn: {
              lakiLaki: statsBumn.lakiLaki,
              perempuan: statsBumn.perempuan,
              total: totalBumn
          },
          kerjaLepas: {
              lakiLaki: statsKerjaLepas.lakiLaki,
              perempuan: statsKerjaLepas.perempuan,
              total: totalKerjaLepas
          },
          petaniPeternak: {
              lakiLaki: statsPetaniPeternak.lakiLaki,
              perempuan: statsPetaniPeternak.perempuan,
              total: totalPetaniPeternak
          },
          nelayan: {
              lakiLaki: statsNelayan.lakiLaki,
              perempuan: statsNelayan.perempuan,
              total: totalNelayan
          },
          industri: {
              lakiLaki: statsIndustri.lakiLaki,
              perempuan: statsIndustri.perempuan,
              total: totalIndustri
          }
      };

      // Membuat respons JSON
      res.json(responseData);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Fungsi untuk mendapatkan statistik jenis kelamin berdasarkan pekerjaan
const getGenderStats = async (pekerjaan) => {
  const lakiLaki = await Warga.count({ where: { pekerjaan, jenis_kelamin: 'laki-laki', status_warga: 'hidup' } });
  const perempuan = await Warga.count({ where: { pekerjaan, jenis_kelamin: 'perempuan', status_warga: 'hidup' } });
  return { lakiLaki, perempuan };
};


// Controller untuk mendapatkan statistik status perkawinan untuk warga yang hidup
export const getStatusPerkawinanByGender = async (_, res) => {
  try {
      const statusPerkawinanLevels = [
          'Belum Menikah', 'Sudah Menikah', 'Cerai Hidup', 'Cerai Mati'
      ];

      const statusPerkawinanStatistics = {};

      for (const status of statusPerkawinanLevels) {
          const stats = await getGenderStatsByStatusPerkawinan(status);
          const total = stats.lakiLaki + stats.perempuan;
          statusPerkawinanStatistics[status] = {
              lakiLaki: stats.lakiLaki,
              perempuan: stats.perempuan,
              total
          };
      }

      res.status(200).json(statusPerkawinanStatistics);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Fungsi untuk mendapatkan statistik jenis kelamin berdasarkan status perkawinan
const getGenderStatsByStatusPerkawinan = async (status_perkawinan) => {
  const lakiLaki = await Warga.count({ where: { status_perkawinan, jenis_kelamin: 'laki-laki', status_warga: 'hidup' } });
  const perempuan = await Warga.count({ where: { status_perkawinan, jenis_kelamin: 'perempuan', status_warga: 'hidup' } });
  return { lakiLaki, perempuan };
};


// Controller untuk mendapatkan statistik pendidikan untuk warga yang hidup
export const getPendidikanByGender = async (_, res) => {
  try {
      const pendidikanLevels = [
          'Belum/Tidak Pernah Sekolah', 'Belum/Tidak Tamat SD/SDLB/MI/Paket A', 'SD/SDLB/MI/Paket A',
          'SMP/SMPLB/MTs/Paket B', 'SMA/SMLB/MA/SMK/MAK/paket C', 'DI/DII/DIII',
          'DIV/S1', 'S2', 'S3'
      ];

      const pendidikanStatistics = {};

      for (const level of pendidikanLevels) {
          const stats = await getGenderStatsByPendidikan(level);
          const total = stats.lakiLaki + stats.perempuan;
          pendidikanStatistics[level] = {
              lakiLaki: stats.lakiLaki,
              perempuan: stats.perempuan,
              total
          };
      }

      res.status(200).json(pendidikanStatistics);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Fungsi untuk mendapatkan statistik jenis kelamin berdasarkan pendidikan
const getGenderStatsByPendidikan = async (pendidikan) => {
  const lakiLaki = await Warga.count({ where: { pendidikan, jenis_kelamin: 'laki-laki', status_warga: 'hidup' } });
  const perempuan = await Warga.count({ where: { pendidikan, jenis_kelamin: 'perempuan', status_warga: 'hidup' } });
  return { lakiLaki, perempuan };
};
