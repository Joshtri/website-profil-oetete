var express = require('express');
var router = express.Router();
const userController = require('../controllers/dataController');

/* GET data page. */

//READ.

router.get('/data-pendidikan',userController.view_pendidikan);
router.get('/data-pekerjaan',userController.view_pekerjaan);
router.get('/data-umur',userController.view_umur );
router.get('/data-jeniskelamin', userController.view_jeniskelamin);
router.get('/data-statuspernikahan', userController.view_statuspernikahan)

//Diluar konteks utk oetete.
router.get('/data-umkm',userController.view_umkm);

module.exports = router;