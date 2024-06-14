import express from "express";
const router = express.Router();
import * as indexController from '../controllers/index.controller.js';
import { getGenderStatistics } from "../repository/warga.repository.js";
import Keluarga from "../models/keluarga.model.js";


// mainPage
router.get('/', indexController.mainPage);


router.get('/gender-statistics', getGenderStatistics);
router.get('/sejarah_kelurahan', indexController.sejarahPage)
router.get('/visi_misi_kelurahan', indexController.visiMisiPage)
router.get('/struktur_kelurahan', indexController.strukturPemPage)


router.get('/get_query', async(req,res)=>{

    const dataKeluarga =  await Keluarga.findAll();

    res.json(dataKeluarga);
});



export default router;