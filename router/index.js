const express = require('express');
const router = express.Router();
const con = require('../controllers/controllers')

router.get('/', con.defaultCon);
router.get('/addForm', con.addFormCon );
router.post('/addVolu', con.addVolunteerCon);
router.get('/editVolu/:id', con.singleRecordCon);
router.post('/update/:id', con.updatedRecCon);
router.get('/deleteVolu/:id', con.deleteRecCon);
module.exports = router;
    