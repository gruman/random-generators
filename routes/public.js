const express = require('express');

const cowsController = require('../controllers/cows');
const hexController = require('../controllers/hex');
const bioController = require('../controllers/bio');
const smellController = require('../controllers/smell');
const animalsController = require('../controllers/animals');
const names = require('../controllers/names');

const router = express.Router();

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
module.exports = router;