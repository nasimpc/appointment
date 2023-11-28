const path = require('path');
const express = require('express');

const router = express.Router();
const companycontroller = require('../controllers/company');

router.post('/add-company', companycontroller.addCompany);
router.get('/get-company/:companyName', companycontroller.getCompany);

module.exports = router;