import { DataTypes } from "sequelize";
import db from "../config/dbConfig.js";


//define model keluarga.
const Keluarga = db.define('Keluarga',{
    id_keluarga:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },

    nama_kepala_keluarga:{
        type: DataTypes.STRING(70),
        allowNull:false
    },

    nomor_kartu_keluarga:{
        type: DataTypes.STRING(16),
        allowNull:false,
    },
    alamat_kartu_keluarga:{
        type:DataTypes.STRING(45),
        allowNull:false,
    },
    rt_kk:{
        type: DataTypes.STRING(4),
        allowNull: false
    },
    rw_kk:{
        type: DataTypes.STRING(4),
        allowNull: false
    }
},{
    freezeTableName:true
});


export default Keluarga;

// Singkronisasi dengan basis data
(async () => {
    try {
        await db.sync();
        console.log("keluarga table has been created.");
    } catch (error) {
        console.error("Unable to create the table:", error);
    }
})();
