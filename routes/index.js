const express = require('express');
const router = express.Router();

const mongodb = require('mongodb');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Gun = require('../models/GunData');

const url = 'mongodb://localhost:27017/guns';

mongoose.connect('mongodb://localhost:27017/guns');
mongoose.connection
    .once('open', () => console.log('Database connected'))
    .on('error', (error) => {
        console.log(error);
    });

router.get('/', async (req, res) => {
    let data = await Gun.find();
    console.log(data);
    res.render('index', { data: data });
});

router.post('/', async (req, res) => {

    let newGun = new Gun({
        name: req.body.name || 'Unknown',
        country: req.body.country || 'Unknown',
        firerate: req.body.firerate,
        ammo: req.body.ammo || 'Unknown',
        capacity: req.body.capacity,
        price: req.body.price || 'Priceless',
        photo: req.body.file
    });
    newGun.save()
        .then( async () => {
            let data = await Gun.find();
            res.render('index', {data: data});
        });
});



module.exports = router;

