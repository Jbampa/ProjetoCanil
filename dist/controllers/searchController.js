"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const createMenuObjects_1 = require("../helpers/createMenuObjects");
const search = (req, res) => {
    let query = req.query.q;
    let list = pet_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: (0, createMenuObjects_1.createMenuObject)(''),
        list
    });
};
exports.search = search;
