


export const mainPage = async(req,res)=>{
    res.render('home');
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