import express from "express";
import { statisticPage } from "../controllers/statistic.controller.js";
import { getPekerjaanStatistics, getPekerjaanByGender, getPendidikanStatistics, getStatusPerkawinanStatistics, getStatusPerkawinanByGender, getPendidikanByGender } from "../repository/warga.repository.js";
const router = express.Router();


router.get('/main_statistik', statisticPage);



router.get('/pekerjaan-statistics', getPekerjaanStatistics);
router.get('/pendidikan-statistics', getPendidikanStatistics)
router.get('/perkawinan-statistics',getStatusPerkawinanStatistics)


router.get('/pekerjaan_gender',getPekerjaanByGender)
router.get('/perkawinan_gender',getStatusPerkawinanByGender)
router.get('/pendidikan_gender',getPendidikanByGender)
export default router;