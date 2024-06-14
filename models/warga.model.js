import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";
import Keluarga from "./keluarga.model.js";

//define warga model.


const Warga = db.define('Warga',{

    id_warga:{
        type:DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true,
    },
    nama_warga:{
        type:DataTypes.STRING(45),
        allowNull:false
    },

    nomor_induk_kependudukan:{
        type:DataTypes.STRING(16),
        allowNull:false
    },
    jenis_kelamin:{
        type: DataTypes.ENUM,
        values: ['Laki-laki', 'Perempuan'], // Specify allowed values
        allowNull: false
    },

    status_perkawinan:{
        type: DataTypes.ENUM,
        values: ['Belum Menikah','Sudah Menikah','Cerai Hidup','Cerai Mati'],
        allowNull: false
    },

    pekerjaan:{
        type:DataTypes.ENUM,
        values: ['Belum Bekerja','Mengurus Rumah Tangga','Pelajar/Mahasiswa','Pensiunan','PNS','POLRI','TNI','WIRASWASTA','SWASTA','Pegawai BUMN','Pekerja Lepas','Petani/peternak/pekebun','Nelayan','Industri'],
        allowNull:false
    },


    pendidikan:{
        type:DataTypes.ENUM,
        values: ['Belum/Tidak Pernah Sekolah','Belum/Tidak Tamat SD/SDLB/MI/Paket A','SD/SDLB/MI/Paket A','SMP/SMPLB/MTs/Paket B','SMA/SMLB/MA/SMK/MAK/paket C','DI/DII/DIII','DIV/S1','S2','S3'],
        allowNull:false
    },

    kelahiran:{
        type: DataTypes.DATE,
        allowNull:false
    },

    keluargaId:{
        type: DataTypes.INTEGER,
        references: {
          model: Keluarga,
          key: 'id_keluarga',
        },
        allowNull:false,
    },

    status_warga:{
        type: DataTypes.ENUM,
        values: ['hidup','meninggal', 'keluar'], // Specify allowed values
        allowNull: true,
        defaultValue: 'hidup'
    },
},{
    freezeTableName:true
});

Keluarga.hasMany(Warga, {foreignKey: `keluargaId`});
Warga.belongsTo(Keluarga,{foreignKey: `keluargaId`});

export default Warga;

(async () => {
    try {
        await db.sync();
        console.log("keluarga table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();