/* eslint-disable no-useless-catch */

import Keluarga from "../models/keluarga.model.js";


// Fungsi untuk menambahkan mahasiswa baru (contoh tambahan)
export const createKeluarga = async (keluargaData) => {

    try {
        const newKeluarga = await Keluarga.create(keluargaData);
        return newKeluarga;
    } catch (error) {
        throw error;
    }
};


// Fungsi untuk mendapatkan data keluarga dengan pagination
export const getAllKeluarga = async (offset, limit) => {
    try {
      const keluargaData = await Keluarga.findAll({ offset, limit });
      return keluargaData;
    } catch (error) {
      throw error;
    }
};
  

// Fungsi untuk mendapatkan data keluarga semua
export const getAll = async () => {
    try {
      const keluargaData = await Keluarga.findAll();
      return keluargaData;
    } catch (error) {
      throw error;
    }
};

// Fungsi untuk mendapatkan total data keluarga
export const getTotalKeluarga = async () => {
    try {
        const totalKeluarga = await Keluarga.count();
        return totalKeluarga;
    } catch (error) {
        throw error;
    }
};

// Fungsi untuk menghapus data keluarga berdasarkan id
export const deleteKeluarga = async (id_keluarga) => {
    try {
        const result = await Keluarga.destroy({ where: { id_keluarga } });
        return result;
    } catch (error) {
        throw error;
    }
};

// Fungsi untuk mendapatkan detail keluarga berdasarkan id_keluarga
export const getKeluargaById = async (id_keluarga) => {
    try {
        const keluargaDetail = await Keluarga.findByPk(id_keluarga);
        return keluargaDetail;
    } catch (error) {
        throw error;
    }
};


// Fungsi untuk memperbarui data keluarga berdasarkan id
export const updateKeluarga = async (id_keluarga, updateData) => {
    try {
      const [updatedRows] = await Keluarga.update(updateData, {
        where: { id_keluarga }
      });
  
      if (updatedRows === 0) {
        return null;
      }
  
      const updatedKeluarga = await Keluarga.findByPk(id_keluarga);
      return updatedKeluarga;
    } catch (error) {
      throw error;
    }
};