import { getTotalGender, getTotalWarga} from '../repository/warga.repository.js'


export const mainPage = async (req, res) => {
    try {


        const totalWargaLakiLaki = await getTotalGender('laki-laki');
        console.log('Total warga laki-laki:', totalWargaLakiLaki);

        const totalWarga = await getTotalWarga();


        const totalWargaPerempuan = await getTotalGender('perempuan');
        console.log('Total warga perempuan:', totalWargaPerempuan);
        
        // Render halaman 'home' dengan mengirimkan data genderStats
        res.render('home', { totalWargaLakiLaki,totalWargaPerempuan,totalWarga });
    } catch (error) {
        // Tangani kesalahan jika terjadi
        res.status(500).json({ message: error.message });
    }
};


export const sejarahPage = async (req,res)=>{
    res.render('sejarah_kelurahan')
}

export const visiMisiPage = async (req,res)=>{
    res.render('visi_misi_kelurahan')
}


export const strukturPemPage = async (req,res)=>{
    res.render('struktur_pemerintahan')
}