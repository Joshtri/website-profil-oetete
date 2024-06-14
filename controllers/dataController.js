const mysql = require("mysql");

//Connection Pool
const pool = mysql.createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

//View data
exports.view_pendidikan = (req, res) => {
 
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    //show data
    /*
        CATATAN !! 
            Tiap klasifikasi klo bisa querynya dibuat berurutan berdasarkan row di views!.
    */
    //belum/tidak pernah sekolah
    connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend1 FROM penduduk WHERE pendidikan = 'Belum/Tidak Pernah Sekolah'", (err, pendpria1) => {
      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend1 FROM penduduk WHERE pendidikan = 'Belum/Tidak Pernah Sekolah'", (err, pendwan1) => {
        connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend1 FROM penduduk WHERE pendidikan  = 'Belum/Tidak Pernah Sekolah'", (err, totalpend1) => {

          //Belum/Tidak Tamat SD/SDLB/MI/Paket A. 
          connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend2 FROM penduduk WHERE pendidikan = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'", (err, pendpria2) => {
            connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend2 FROM penduduk WHERE pendidikan = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'", (err, pendwan2) => {
              connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend2 FROM penduduk WHERE pendidikan  = 'Belum/Tidak Tamat SD/SDLB/MI/Paket A'", (err, totalpend2) => {

                //SD/SDLB/MI/Paket A
                connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend3 FROM penduduk WHERE pendidikan = 'SD/SDLB/MI/Paket A'", (err, pendpria3) => {
                  connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend3 FROM penduduk WHERE pendidikan = 'SD/SDLB/MI/Paket A'", (err, pendwan3) => {
                    connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend3 FROM penduduk WHERE pendidikan  = 'SD/SDLB/MI/Paket A'", (err, totalpend3) => {

                      //SMP/SMPLB/MTs/Paket B
                      connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend4 FROM penduduk WHERE pendidikan = 'SMP/SMPLB/MTs/Paket B'", (err, pendpria4) => {
                        connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend4 FROM penduduk WHERE pendidikan = 'SMP/SMPLB/MTs/Paket B'", (err, pendwan4) => {
                          connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend4 FROM penduduk WHERE pendidikan  = 'SMP/SMPLB/MTs/Paket B'", (err, totalpend4) => {

                            //#SMA/SMLB/MA/SMK/MAK/paket C. 
                            connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend5 FROM penduduk WHERE pendidikan = 'SMA/SMLB/MA/SMK/MAK/paket C'", (err, pendpria5) => {
                              connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend5 FROM penduduk WHERE pendidikan = 'SMA/SMLB/MA/SMK/MAK/paket C'", (err, pendwan5) => {
                                connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend5 FROM penduduk WHERE pendidikan  = 'SMA/SMLB/MA/SMK/MAK/paket C'", (err, totalpend5) => {

                                  //#DI/DII/DIII. 
                                  connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend6 FROM penduduk WHERE pendidikan = 'DI/DII/DIII'", (err, pendpria6) => {
                                    connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend6 FROM penduduk WHERE pendidikan = 'DI/DII/DIII'", (err, pendwan6) => {
                                      connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend6 FROM penduduk WHERE pendidikan  = 'DI/DII/DIII'", (err, totalpend6) => {

                                        //#DIV/S1. 
                                        connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend7 FROM penduduk WHERE pendidikan = 'DIV/S1'", (err, pendpria7) => {
                                          connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend7 FROM penduduk WHERE pendidikan = 'DIV/S1'", (err, pendwan7) => {
                                            connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend7 FROM penduduk WHERE pendidikan  = 'DIV/S1'", (err, totalpend7) => {

                                              //#S2. 
                                              connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend8 FROM penduduk WHERE pendidikan = 'S2'", (err, pendpria8) => {
                                                connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend8 FROM penduduk WHERE pendidikan = 'S2'", (err, pendwan8) => {
                                                  connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend8 FROM penduduk WHERE pendidikan  = 'S2'", (err, totalpend8) => {

                                                    //#S3. 
                                                    connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaPend9 FROM penduduk WHERE pendidikan = 'S3'", (err, pendpria9) => {
                                                      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaPend9 FROM penduduk WHERE pendidikan = 'S3'", (err, pendwan9) => {
                                                        connection.query("SELECT COUNT(jenis_kelamin) AS TotalPend9 FROM penduduk WHERE pendidikan  = 'S3'", (err, totalpend9) => {

                                                          connection.release();
                                                          if(!err){
                                                            res.render("data-pendidikan",{pendpria1,pendwan1,totalpend1,pendpria2,pendwan2,totalpend2,pendpria3,pendwan3,totalpend3,pendpria4,pendwan4,totalpend4,pendpria5,pendwan5,totalpend5,pendpria6,pendwan6,totalpend6,pendpria7,pendwan7,totalpend7,pendpria8,pendwan8,totalpend8,pendpria9,pendwan9,totalpend9});
                                                          }
                                                          else{
                                                            console.log(err);
                                                          } 
                                                          // console.log('The data from user table: \n', pendpria1,pendwan1,totalpend1,pendpria2,pendwan2,totalpend2,pendpria3,pendwan3,totalpend3,pendpria4,pendwan4,totalpend4,pendpria5,pendwan5,totalpend5,pendpria6,pendwan6,totalpend6,pendpria7,pendwan7,totalpend7,pendpria8,pendwan8,totalpend8,pendpria9,pendwan9,totalpend9);
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
            }); 
          }); 
        }); 
      }); 
    });  
  });
};




//View data
exports.view_pekerjaan = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    //
    connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja1 FROM penduduk WHERE pekerjaan = 'Belum Bekerja'", (err,pekerjapria1)=>{
      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja1 FROM penduduk WHERE pekerjaan = 'Belum Bekerja'", (err,pekerjawanita1)=>{
        connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja1  FROM penduduk WHERE pekerjaan  = 'Belum Bekerja'", (err,totalpekerja1)=>{

          connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja2 FROM penduduk WHERE pekerjaan = 'Mengurus Rumah Tangga'", (err,pekerjapria2)=>{
            connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja2 FROM penduduk WHERE pekerjaan = 'Mengurus Rumah Tangga'", (err,pekerjawanita2)=>{
              connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja2  FROM penduduk WHERE pekerjaan  = 'Mengurus Rumah Tangga'", (err,totalpekerja2)=>{

                connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja3 FROM penduduk WHERE pekerjaan = 'Pelajar/Mahasiswa'", (err,pekerjapria3)=>{
                  connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja3 FROM penduduk WHERE pekerjaan = 'Pelajar/Mahasiswa'", (err,pekerjawanita3)=>{
                    connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja3  FROM penduduk WHERE pekerjaan  = 'Pelajar/Mahasiswa'", (err,totalpekerja3)=>{

                      connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja4 FROM penduduk WHERE pekerjaan = 'Pensiunan'", (err,pekerjapria4)=>{
                        connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja4 FROM penduduk WHERE pekerjaan = 'Pensiunan'", (err,pekerjawanita4)=>{
                          connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja4  FROM penduduk WHERE pekerjaan  = 'Pensiunan'", (err,totalpekerja4)=>{

                            connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja5 FROM penduduk WHERE pekerjaan = 'PNS'", (err,pekerjapria5)=>{
                              connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja5 FROM penduduk WHERE pekerjaan = 'PNS'", (err,pekerjawanita5)=>{
                                connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja5  FROM penduduk WHERE pekerjaan  = 'PNS'", (err,totalpekerja5)=>{

                                  connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja6 FROM penduduk WHERE pekerjaan = 'POLRI'", (err,pekerjapria6)=>{
                                    connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja6 FROM penduduk WHERE pekerjaan = 'POLRI'", (err,pekerjawanita6)=>{
                                      connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja6  FROM penduduk WHERE pekerjaan  = 'POLRI'", (err,totalpekerja6)=>{

                                        connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja7 FROM penduduk WHERE pekerjaan = 'TNI'", (err,pekerjapria7)=>{
                                          connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja7 FROM penduduk WHERE pekerjaan = 'TNI'", (err,pekerjawanita7)=>{
                                            connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja7  FROM penduduk WHERE pekerjaan  = 'TNI'", (err,totalpekerja7)=>{

                                              connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja8 FROM penduduk WHERE pekerjaan = 'WIRASWASTA'", (err,pekerjapria8)=>{
                                                connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja8 FROM penduduk WHERE pekerjaan = 'WIRASWASTA'", (err,pekerjawanita8)=>{
                                                  connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja8  FROM penduduk WHERE pekerjaan  = 'WIRASWASTA'", (err,totalpekerja8)=>{

                                                    connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja9 FROM penduduk WHERE pekerjaan = 'SWASTA'", (err,pekerjapria9)=>{
                                                      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja9 FROM penduduk WHERE pekerjaan = 'SWASTA'", (err,pekerjawanita9)=>{
                                                        connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja9  FROM penduduk WHERE pekerjaan  = 'SWASTA'", (err,totalpekerja9)=>{

                                                          connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja10 FROM penduduk WHERE pekerjaan = 'Pegawai BUMN'", (err,pekerjapria10)=>{
                                                            connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja10 FROM penduduk WHERE pekerjaan = 'Pegawai BUMN'", (err,pekerjawanita10)=>{
                                                              connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja10  FROM penduduk WHERE pekerjaan  = 'Pegawai BUMN'", (err,totalpekerja10)=>{

                                                                connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja11 FROM penduduk WHERE pekerjaan = 'Pekerja Lepas'", (err,pekerjapria11)=>{
                                                                  connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja11 FROM penduduk WHERE pekerjaan = 'Pekerja Lepas'", (err,pekerjawanita11)=>{
                                                                    connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja11  FROM penduduk WHERE pekerjaan  = 'Pekerja Lepas'", (err,totalpekerja11)=>{

                                                                      connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja12 FROM penduduk WHERE pekerjaan = 'Petani/peternak/pekebun'", (err,pekerjapria12)=>{
                                                                        connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja12 FROM penduduk WHERE pekerjaan = 'Petani/peternak/pekebun'", (err,pekerjawanita12)=>{
                                                                          connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja12  FROM penduduk WHERE pekerjaan  = 'Petani/peternak/pekebun'", (err,totalpekerja12)=>{

                                                                            connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja13 FROM penduduk WHERE pekerjaan = 'Nelayan'", (err,pekerjapria13)=>{
                                                                              connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja13 FROM penduduk WHERE pekerjaan = 'Nelayan'", (err,pekerjawanita13)=>{
                                                                                connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja13  FROM penduduk WHERE pekerjaan  = 'Nelayan'", (err,totalpekerja13)=>{
                                                                                  
                                                                                  connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaKerja14 FROM penduduk WHERE pekerjaan = 'Industri'", (err,pekerjapria14)=>{
                                                                                    connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanKerja14 FROM penduduk WHERE pekerjaan = 'Industri'", (err,pekerjawanita14)=>{
                                                                                      connection.query("SELECT COUNT(jenis_kelamin) AS TotalKerja14  FROM penduduk WHERE pekerjaan  = 'Industri'", (err,totalpekerja14)=>{

                                                                                        //when done with the connection, release it. 
                                                                                        connection.release();

                                                                                        if(!err){
                                                                                            res.render("data-pekerjaan",{pekerjapria1,pekerjawanita1,totalpekerja1,pekerjapria2,pekerjawanita2,totalpekerja2,pekerjapria3,pekerjawanita3,totalpekerja3,pekerjapria4,pekerjawanita4,totalpekerja4,
                                                                                            pekerjapria5,pekerjawanita5,totalpekerja5,pekerjapria6,pekerjawanita6,totalpekerja6,pekerjapria7,pekerjawanita7,totalpekerja7,pekerjapria8,pekerjawanita8,totalpekerja8,
                                                                                          pekerjapria9,pekerjawanita9,totalpekerja9,pekerjapria10,pekerjawanita10,totalpekerja10,pekerjapria11,pekerjawanita11,totalpekerja11,
                                                                                        pekerjapria12,pekerjawanita12,totalpekerja12,pekerjapria13,pekerjawanita13,totalpekerja13,pekerjapria14,pekerjawanita14,totalpekerja14});
                                                                                        }
                                                                                        else{
                                                                                            console.log(err);
                                                                                        } 
                                                                                    //     console.log('The data from user table: \n',pekerjapria1,pekerjawanita1,totalpekerja1,pekerjapria2,pekerjawanita2,totalpekerja2,pekerjapria3,pekerjawanita3,totalpekerja3,pekerjapria4,pekerjawanita4,totalpekerja4,
                                                                                    //     pekerjapria5,pekerjawanita5,totalpekerja5,pekerjapria6,pekerjawanita6,totalpekerja6,pekerjapria7,pekerjawanita7,totalpekerja7,pekerjapria8,pekerjawanita8,totalpekerja8,
                                                                                    //   pekerjapria9,pekerjawanita9,totalpekerja9,pekerjapria10,pekerjawanita10,totalpekerja10,pekerjapria11,pekerjawanita11,totalpekerja11,
                                                                                    // pekerjapria12,pekerjawanita12,totalpekerja12,pekerjapria13,pekerjawanita13,totalpekerja13,pekerjapria14,pekerjawanita14,totalpekerja14 );
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
};





//View data
exports.view_jeniskelamin = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query("SELECT SUM(jenis_kelamin ='Laki-Laki') AS Total_laki FROM penduduk", (err, rows1) => {
      //when done with the connection, release it.
      connection.query("SELECT SUM (jenis_kelamin = 'Perempuan') AS Total_perempuan FROM penduduk", (err, rows2) => {
            //when done with the connection, release it.
            connection.query("SELECT COUNT(jenis_kelamin) AS TotalJK FROM penduduk", (err, rows3) => {
              connection.release();

              if(!err){
                  res.render("data-jeniskelamin",{rows1, rows2,rows3});
              }
              else{
                  console.log(err);
              } 
              // console.log('The data from user table: \n', rows1, rows2,rows3);
       });
    });
    });
  });
};

//View data
exports.view_umur = (req, res) => {
 
  // //connect db.
  // pool.getConnection((err, connection) => {
  //   if (err) throw err; //NOT CONNECTED.
  //   console.log(`Connected as ID ` + connection.threadId);
    
  //   //show data
  //   connection.query("", (err,rows)=>{
  //       //when done with the connection, release it. 
  //       connection.release();

  //       if(!err){
            
  //       }
  //       else{
  //           console.log(err);
  //       } 
  //       console.log('The data from user table: \n', rows);

  //   });

  // });
  res.render("data-umur");
};

//View data
exports.view_umkm = (req, res) => {
 
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    connection.query("SELECT COUNT(id_Usaha) AS Tmikro from umkm WHERE omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta' OR omset ='Omset <= Rp.300 Juta' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta' OR omset = 'Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.50 Juta'", (err, rows1) => {
      //when done with the connection, release it.
      connection.query("SELECT COUNT(id_Usaha) AS Tmenengah from umkm WHERE omset ='Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar'", (err, rows2) => {
          //when done with the connection, release it.
          connection.query("SELECT COUNT(id_Usaha) AS Tkecil from umkm WHERE omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'KBU <= Rp.500 Juta' OR omset ='Rp.300 Juta < Omset <= Rp.2,5 Milliar' AND kekayaan_bersih_usaha = 'Rp.500 Juta < KBU <= Rp.10 Milliar' OR omset = 'Rp.2,5 Milliar < Omset <= Rp.50 Milliar' AND kekayaan_bersih_usaha = 'Rp.50 Juta < KBU <= Rp.500 Juta'", (err, rows3) => {
              //when done with the connection, release it.
              connection.query("SELECT COUNT(id_Usaha) AS TotalUMKM FROM umkm", (err, rows4) => {
              //when done with the connection, release it.
                //when done with the connection, release it. 
                connection.release();

                if(!err){
                    res.render("data-umkm",{rows1, rows2, rows3,rows4});
                }
                else{
                    console.log(err);
                } 
                // console.log('The data from user table: \n', rows1, rows2, rows3,rows4);
              });
        });
      });
    });
  });
};

//View data
exports.view_statuspernikahan = (req, res) => {
  //connect db.
  pool.getConnection((err, connection) => {
    if (err) throw err; //NOT CONNECTED.
    console.log(`Connected as ID ` + connection.threadId);
    
    //show data
    connection.query("SELECT COUNT(jenis_kelamin) AS TotalBelumMenikah FROM penduduk WHERE status_perkawinan = 'Belum Menikah'",(err,rows1totalblmnikah)=>{
        connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaBelumMenikah FROM penduduk WHERE status_perkawinan = 'Belum Menikah'",(err,rows1sec) =>{
          //when done with the connection, release it.
          connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaBelumMenikah FROM penduduk WHERE status_perkawinan = 'Belum Menikah'",(err,rows1third) =>{ 
              connection. query("SELECT COUNT(jenis_kelamin) AS TotalSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'", (err,rows2totalsdhnikah)=>{
                //when done with the connection, release it. 
                connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'", (err,rows2sec)=>{
                  //when done with the connection, release it. 
                  connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaSudahMenikah FROM penduduk WHERE status_perkawinan = 'Sudah Menikah'", (err,rows2third)=>{
                    //when done with the connection, release it. 
                    //when done with the connection, release it. 

                    //UBAH INI !!!!
                    connection.query("SELECT COUNT(jenis_kelamin) AS TotalCeraiHidup FROM penduduk WHERE status_perkawinan = 'Cerai Hidup'", (err,rows3totalceraihidup)=>{
                      connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaCeraiHidup FROM penduduk WHERE status_perkawinan = 'Cerai Hidup'", (err,rows3sec)=>{
                        //when done with the connection, release it. 
                        connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaCeraiHidup FROM penduduk WHERE status_perkawinan = 'Cerai Hidup'", (err,rows3third)=>{
                          //when done with the connection, release it. 

                          //CERAII MATII!
                          connection.query("SELECT COUNT(jenis_kelamin) AS TotalCeraiMati FROM penduduk WHERE status_perkawinan = 'Cerai Mati'", (err,rows4totalceraimati)=>{
                            //when done with the connection, release it. 
                            connection.query("SELECT SUM(jenis_kelamin = 'Perempuan') AS TotalWanitaCeraiMati FROM penduduk WHERE status_perkawinan = 'Cerai Mati'", (err,rows4sec)=>{
                              //when done with the connection, release it. 
                              connection.query("SELECT SUM(jenis_kelamin = 'Laki-Laki') AS TotalPriaCeraiMati FROM penduduk WHERE status_perkawinan = 'Cerai Mati'", (err,rows4third)=>{
                                //when done with the connection, release it. 
                                connection.release();

                                if(!err){
                                    res.render("data-statuspernikahan",{rows1totalblmnikah, rows1sec,rows1third, rows2totalsdhnikah,rows2sec,rows2third, rows3totalceraihidup,rows3sec,rows3third, rows4totalceraimati, rows4sec,rows4third});
                                }
                                else{
                                    console.log(err);
                                }
                                // console.log('The data from user table: \n', rows1totalblmnikah, rows1sec, rows1third, rows2totalsdhnikah, rows2sec, rows2third, rows3totalceraihidup,rows3sec,rows3third, rows4totalceraimati, rows4sec,rows4third);
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
    });
  });
};
