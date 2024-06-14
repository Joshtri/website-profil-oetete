/* eslint-disable no-empty */
/* eslint-disable no-useless-catch */
import Warga from "../models/warga.model.js";
import Keluarga from "../models/keluarga.model.js";


export const getGenderStatistics = async (_, res) => {
    try {
      const totalPria = await Warga.count({ where: { jenis_kelamin: 'Laki-Laki' } });
      const totalWanita = await Warga.count({ where: { jenis_kelamin: 'Perempuan' } });
  
      res.status(200).json({ pria: totalPria, wanita: totalWanita });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const getPekerjaanStatistics = async (_, res) => {
    try {
      const totalBelumKerja = await Warga.count({ where: { pekerjaan: 'Belum Bekerja' } });
      const totalMengurusRT = await Warga.count({ where: { pekerjaan: 'Mengurus Rumah Tangga' } });
      const totalPelajarMhs = await Warga.count({ where: { pekerjaan: 'Pelajar/Mahasiswa' } });
      const totalPensiunan = await Warga.count({ where: { pekerjaan: 'Pensiunan' } });
      const totalPns = await Warga.count({ where: { pekerjaan: 'PNS' } });
      const totalPolri = await Warga.count({ where: { pekerjaan: 'POLRI' } });
      const totalTni = await Warga.count({ where: { pekerjaan: 'TNI' } });
      const totalWiraswasta = await Warga.count({ where: { pekerjaan: 'Wiraswasta' } });
      const totalSwasta = await Warga.count({ where: { pekerjaan: 'Swasta' } });
      const totalBumn = await Warga.count({ where: { pekerjaan: 'Pegawai BUMN' } });
      const totalKerjaLepas = await Warga.count({ where: { pekerjaan: 'Pekerja Lepas' } });
      const totalPetaniPeternak = await Warga.count({ where: { pekerjaan: 'Petani/Peternak/Pekebun' } });
      const totalNelayan = await Warga.count({ where: { pekerjaan: 'Nelayan' } });
      const totalIndustri = await Warga.count({ where: { pekerjaan: 'Industri' } });
  
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

// Controller untuk mendapatkan statistik pendidikan
export const getPendidikanStatistics = async (_, res) => {
    try {
      const pendidikanLevels = [
        'Belum/Tidak Pernah Sekolah', 'Belum/Tidak Tamat SD/SDLB/MI/Paket A', 'SD/SDLB/MI/Paket A',
        'SMP/SMPLB/MTs/Paket B', 'SMA/SMLB/MA/SMK/MAK/paket C', 'DI/DII/DIII', 
        'DIV/S1', 'S2', 'S3'
      ];
  
      const pendidikanStatistics = {};
  
      for (const level of pendidikanLevels) {
        const count = await Warga.count({ where: { pendidikan: level } });
        pendidikanStatistics[level] = count;
      }
  
      res.status(200).json(pendidikanStatistics);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};


// Controller untuk mendapatkan statistik status perkawinan
export const getStatusPerkawinanStatistics = async (_, res) => {
    try {
      const statusPerkawinanLevels = [
        'Belum Menikah', 'Sudah Menikah', 'Cerai Hidup', 'Cerai Mati'
      ];
  
      const statusPerkawinanStatistics = {};
  
      for (const status of statusPerkawinanLevels) {
        const count = await Warga.count({ where: { status_perkawinan: status } });
        statusPerkawinanStatistics[status] = count;
      }
  
      res.status(200).json(statusPerkawinanStatistics);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
  