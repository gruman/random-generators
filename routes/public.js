const express = require('express');

const path = require('path');

const cowsController = require('../controllers/cows');
const hexController = require('../controllers/hex');
const bioController = require('../controllers/bio');
const smellController = require('../controllers/smell');
const animalsController = require('../controllers/animals');
const names = require('../controllers/names');
const countries = require('../controllers/countries');

const router = express.Router();

const apiData = require('../constants/apis.json');

router.get('/', (req, res) => {
  res.render('index', { endpoints: apiData });
});
// GET /feed/posts
router.get('/cows/', cowsController.getFacts);
router.get('/cows/all', cowsController.getAll);

router.get('/hex/', hexController.getHex);

router.get('/bio/', bioController.getBio);

router.get('/smell/', smellController.getSmell);

router.get('/animals/', animalsController.getAnimal);
router.get('/animals/all', animalsController.getAll);
router.get('/animals/:num', animalsController.getNum);

router.get('/names/', names.getName);
router.get('/names/:num', names.getNum);

router.get('/countries', countries.getCountry);
router.get('/countries/all', countries.getAll);
router.get('/countries/:num', countries.getNum);

module.exports = router;