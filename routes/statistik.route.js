import express from "express";
import { statisticPage } from "../controllers/statistic.controller.js";
import { getPekerjaanStatistics, getPendidikanStatistics, getStatusPerkawinanStatistics } from "../repository/warga.repository.js";
const router = express.Router();


router.get('/main_statistik', statisticPage);



router.get('/pekerjaan-statistics', getPekerjaanStatistics);
router.get('/pendidikan-statistics', getPendidikanStatistics)
router.get('/perkawinan-statistics',getStatusPerkawinanStatistics)

export default router;