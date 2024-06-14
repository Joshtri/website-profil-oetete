var express = require('express');
var router = express.Router();
const mysql = require("mysql");

const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});
 

router.get('/data-umur', function (req, res, next) {
    res.render('data-umur');
});

router.get('/data-jeniskelamin', function (req, res, next) {
    res.render('data-jeniskelamin');
});

router.get('/data-statuspernikahan', function (req, res, next) {
    res.render('data-statuspernikahan');
});

router.get('/data-umkm', function(req,res,next){
    res.render('data-umkm');
});

router.get('/data-pekerjaan', function (req, res, next) {
    res.render('data-pekerjaan');
});

router.get('/data-jeniskelamin', function (req, res, next) {
    res.render('data-jeniskelamin');
});

router.get('/data-pendidikan', function (req, res, next) {
    res.render('data-pendidikan');
});

// There is 7 router

//DONE
router.get('/statistik/umur', function (req, res, next) {
    // konek
    // data dari tabel
    res.json(
        {
            label: ["My First dataset"],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                
            ],
            data: [90, 60, 45, 80, 100, 40, 25],
            hoverOffset: 4,
        },
    );
});

router.get('/statistik/pekerjaan', function (req, res, next) {
    // konek
    pool.getConnection((err, connection) => {
        if (err) throw err; //NOT CONNECTED.
        console.log(`Connected as ID ` + connection.threadId);
    
        // data dari tabel
        connection.query("SELECT SUM(pekerjaan = 'Belum Bekerja') AS TotalBelumBekerja FROM penduduk", (err, rows1) => {
            //when done with the connection, release it.
            connection.query("SELECT SUM(pekerjaan = 'Mengurus Rumah Tangga') AS TotalMengurusRumahTangga FROM penduduk", (err, rows2) => {
                //when done with the connection, release it.
                connection.query("SELECT SUM(pekerjaan = 'Pelajar/Mahasiswa') AS TotalPelajar FROM penduduk", (err, rows3) => {
                    //when done with the connection, release it.
                    connection.query("SELECT SUM(pekerjaan = 'Pensiunan') AS TotalPensiunan FROM penduduk", (err, rows4) => {
                        //when done with the connection, release it.
                        connection.query("SELECT SUM(pekerjaan = 'PNS') AS TotalPNS FROM penduduk", (err, rows5) => {
                            //when done with the connection, release it.
                            connection.query("SELECT SUM(pekerjaan = 'POLRI') AS TotalPOLRI FROM penduduk", (err, rows6) => {
                                //when done with the connection, release it.
                                connection.query("SELECT SUM(pekerjaan = 'TNI') AS TotalTNI FROM penduduk", (err, rows7) => {
                                        //when done with the connection, release it.
                                    connection.query("SELECT SUM(pekerjaan = 'WIRASWASTA') AS TotalWiraswasta FROM penduduk", (err, rows8) => {
                                            //when done with the connection, release it.
                                        connection.query("SELECT SUM(pekerjaan = 'SWASTA') AS TotalSwasta FROM penduduk", (err, rows9) => {
                                                    //when done with the connection, release it.
                                                connection.query("SELECT SUM(pekerjaan = 'Pegawai BUMN') AS TotalBUMN FROM penduduk", (err, rows10) => {
                                                        //when done with the connection, release it.
                                                    connection.query("SELECT SUM(pekerjaan = 'Pekerja Lepas') AS TotalPekerjaLepas FROM penduduk", (err, rows11) => {
                                                            //when done with the connection, release it.
                                                        connection.query("SELECT SUM(pekerjaan = 'Petani/Peternak/Pekebun') AS TotalPetaniPeternakPekebun FROM penduduk", (err, rows12) => {
                                                            //when done with the connection, release it.
                                                            connection.query("SELECT SUM(pekerjaan = 'Nelayan') AS TotalNelayan FROM penduduk", (err, rows13) => {
                                                                //when done with the connection, release it.
                                                                connection.query("SELECT SUM(pekerjaan = 'Industri') AS TotalIndustri FROM penduduk", (err, rows14) => {
                                                                    //when done with the connection, release it.
                                                                        if (!err) {
                                                                            res.json(
                                                                                {
                                                                                    label: ["My First dataset"],
                                                                                    backgroundColor: [
                                                                                        "rgb(128,0,0)",
                                                                                        "rgb(139,0,0)",
                                                                                        "rgb(165,42,42)",
                                                                                    ],
                                                                                    data: [rows1[0].TotalBelumBekerja, rows2[0].TotalMengurusRumahTangga, rows3[0].TotalPelajar, rows4[0].TotalPensiunan, rows5[0].TotalPNS
                                                                                ,   rows6[0].TotalPOLRI, rows7[0].TotalTNI, rows8[0].TotalWiraswasta, rows9[0].TotalSwasta,rows10[0].TotalBUMN, rows11[0].TotalPekerjaLepas, rows12[0].TotalPetaniPeternakPekebun, rows13[0].TotalNelayan, rows14[0].TotalIndustri],
                                                                                    hoverOffset: 14,
                                                                                },
                                                                            );
                                                                        } else {
                                                                            console.log(err);
                                                                        }
                                                                        // console.log("The data from user table: \n",  rows1, rows2, rows3, rows4, rows5, rows6, rows7, rows8, rows9, rows10, rows11, rows12, rows13, rows14);
                            
                                        }); });});});});});
                                    }); 
                                });                             
                            }); 
                        }); 
                    }); 
                });
            });
        });
    });
});

router.get('/statistik/status', function (req, res, next) {
    // konek
        // data dari tabel
    
        pool.getConnection((err, connection) => {
            if (err) throw err; //NOT CONNECTED.
            console.log(`Connected as ID ` + connection.threadId);
    
                //show data
                // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk
    
    
          
            connection.query("SELECT SUM(status_perkawinan = 'Belum Menikah') AS TotalBelumMenikah FROM penduduk", (err, rows1) => {
                    //when done with the connection, release it.
                connection.query("SELECT SUM(status_perkawinan = 'Sudah Menikah') AS TotalSudahMenikah FROM penduduk", (err, rows2) => {
                        //when done with the connection, release it.
                    connection.query("SELECT SUM(status_perkawinan = 'Cerai Hidup') AS TotalCeraiHidup FROM penduduk", (err, rows3) => {
                            //when done with the connection, release it.
                        connection.query("SELECT SUM(status_perkawinan = 'Cerai Mati') AS TotalCeraiMati FROM penduduk", (err, rows4) => {
                                //when done with the connection, release it.
    
                            if (!err) {
                                res.json(
                                    {
                                        label: ["My First dataset"],
                                        backgroundColor: [
                                            "rgb(128,0,0)",
                                            "rgb(139,0,0)",
                                            "rgb(165,42,42)",
                                        ],
                                        data: [rows1[0].TotalBelumMenikah, rows2[0].TotalSudahMenikah, rows3[0].TotalCeraiHidup, rows4[0].TotalCeraiMati],
                                        hoverOffset: 4,
                                    },  
                                );
                            } else {
                                console.log(err);
                            }
                            // console.log("The data from user table: \n",  rows1, rows2, rows3, rows4);
                    
                        }); 
                    });
                });
            });
        });
});
router.get('/statistik/pendidikan', function (req, res, next) {
    // konek
    pool.getConnection((err, connection) => {
        if (err) throw err; //NOT CONNECTED.
        console.log(`Connected as ID ` + connection.threadId);

    // data dari tabel
    connection.query("SELECT SUM(pendidikan = 'Belum/Tidak Pernah Sekolah') AS TotalBelumSekolah FROM penduduk", (err, rows1) => {
        //when done with the connection, release it.
        connection.query("SELECT SUM(pendidikan = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A') AS TotalBelumTamatSD FROM penduduk", (err, rows2) => {
            //when done with the connection, release it.
            connection.query("SELECT SUM(pendidikan = 'SD/SDLB/MI/Paket A') AS TotalSD FROM penduduk", (err, rows3) => {
                //when done with the connection, release it.
                connection.query("SELECT SUM(pendidikan = 'SMP/SMPLB/MTs/Paket B') AS TotalSMP FROM penduduk", (err, rows4) => {
                    //when done with the connection, release it.
                    connection.query("SELECT SUM(pendidikan = 'SMA/SMLB/MA/SMK/MAK/Paket C') AS TotalSMA FROM penduduk", (err, rows5) => {
                        //when done with the connection, release it.
                        connection.query("SELECT SUM(pendidikan = 'DI/DII/DIII') AS TotalD FROM penduduk", (err, rows6) => {
                            //when done with the connection, release it.
                            connection.query("SELECT SUM(pendidikan = 'DIV/S1') AS TotalS1 FROM penduduk", (err, rows7) => {
                                    //when done with the connection, release it.
                                connection.query("SELECT SUM(pendidikan = 'S2') AS TotalS2 FROM penduduk", (err, rows8) => {
                                        //when done with the connection, release it.
                                    connection.query("SELECT SUM(pendidikan = 'S3') AS TotalS3 FROM penduduk", (err, rows9) => {
                                                //when done with the connection, release it.

                                                if (!err) {
                                                    res.json(
                                                        {
                                                            label: ["My First dataset"],
                                                            backgroundColor: [
                                                                "rgb(128,0,0)",
                                                                "rgb(139,0,0)",
                                                                "rgb(165,42,42)",
                                                            ],
                                                            data: [rows1[0].TotalBelumSekolah, rows2[0].TotalBelumTamatSD, rows3[0].TotalSD, rows4[0].TotalSMP, rows5[0].TotalSMA
                                                        , rows6[0].TotalD, rows7[0].TotalS1, rows8[0].TotalS2, rows9[0].TotalS3],
                                                            hoverOffset: 9,
                                                        },
                                                    );
                                                } else {
                                                    console.log(err);
                                                }
                                                // console.log("The data from user table: \n",  rows1, rows2, rows3, rows4, rows5, rows6, rows7, rows8, rows9);
                        
                                    });
                                }); 
                            });                             
                        }); 
                    }); 
                }); 
            });
        });
    });
});
});

//
router.get('/statistik/jeniskelamin', function (req, res, next) {
    // konek
        // data dari tabel
    
        pool.getConnection((err, connection) => {
            if (err) throw err; //NOT CONNECTED.
            console.log(`Connected as ID ` + connection.threadId);
    
            //show data
            // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk
    
        connection.query("SELECT SUM(jenis_kelamin ='Laki-Laki') AS Total_laki FROM penduduk", (err, rows1) => {
                    //when done with the connection, release it.
            connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows2) => {
                    //when done with the connection, release it.
    
                    if (!err) {
                        res.json(
                            {
                                label: ["My First dataset"],
                                backgroundColor: [
                                "rgb(128,0,0)",
                                "rgb(139,0,0)",
                                "rgb(165,42,42)",],
                                data: [rows1[0].Total_laki, rows2[0].Total_perempuan],
                                hoverOffset: 2,},
                        );
                    } else {
                        console.log(err);
                    }
                    // console.log("The data from user table: \n",  rows2, rows1);
            });
        });
    });
});


//
router.get('/statistik/umkm', function (req, res, next) {
    // konek
        // data dari tabel
    
    pool.getConnection((err, connection) => {
            if (err) throw err; //NOT CONNECTED.
            console.log(`Connected as ID ` + connection.threadId);
    
            //show data
            // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk
    
        connection.query("SELECT COUNT(id_Usaha) AS Tmikro from umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, rows1) => {
            //when done with the connection, release it.
            connection.query("SELECT COUNT(id_Usaha) AS Tmenengah from umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'", (err, rows2) => {
                //when done with the connection, release it.
                connection.query("SELECT COUNT(id_Usaha) AS Tkecil from umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.500 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'", (err, rows3) => {
                    //when done with the connection, release it.
                
   
    
                            if (!err) {
                                res.json(
                                    {
                                        label: ["My First dataset"],
                                        backgroundColor: [
                                        "rgb(128,0,0)",
                                        "rgb(139,0,0)",
                                        "rgb(165,42,42)",],
                                        data: [rows1[0].Tmikro, rows2[0].Tmenengah, rows3[0].Tkecil],
                                        hoverOffset: 3,},
                                );
                            } else {
                                console.log(err);
                            }
                });
            });
        });
    });
});


router.get('/statistik/penduduk', function (req, res, next) {
    // konek
        // data dari tabel
    
        pool.getConnection((err, connection) => {
            if (err) throw err; //NOT CONNECTED.
            console.log(`Connected as ID ` + connection.threadId);
    
            //show data
            // SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk
    
        connection.query("SELECT SUM(jenis_kelamin ='laki-laki') AS Total_laki FROM penduduk", (err, rows1) => {
                    //when done with the connection, release it.
            connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows2) => {
                    //when done with the connection, release it.
    
                    if (!err) {
                        res.json(
                            {
                                label: ["My First dataset"],
                                backgroundColor: [
                                "rgb(128,0,0)",
                                "rgb(139,0,0)",
                                "rgb(165,42,42)",],
                                data: [rows1[0].Total_laki, rows2[0].Total_perempuan],
                                hoverOffset: 2,},
                        );
                    } else {
                        console.log(err);
                    }
                    // console.log("The data from user table: \n",  rows2, rows1);
            });
        });
    });

});
module.exports = router;
