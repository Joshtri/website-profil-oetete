import { getTotalGender, getTotalWarga } from "../repository/warga.repository.js";



export const statisticPage = async(req,res)=>{
    const totalWargaLakiLaki = await getTotalGender('laki-laki');
    console.log('Total warga laki-laki:', totalWargaLakiLaki);

    const totalWarga = await getTotalWarga();


    const totalWargaPerempuan = await getTotalGender('perempuan');
    console.log('Total warga perempuan:', totalWargaPerempuan);
    res.render('main_statistik',{
        totalWargaPerempuan,
        totalWarga,
        totalWargaLakiLaki
    });
}