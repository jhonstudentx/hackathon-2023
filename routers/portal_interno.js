const express = require('express');
const path = require('path');

const portalInternoController = require('../controllers/portal_interno');

const router = express.Router();

// /interno/inicio => GET
router.get('/inicio', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','inicio.html'));
    console.log('Acessando inicio.html');
})

// /interno/candidatosinterno => GET
router.get('/candidatosinterno', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','candidatosinterno.html'));
    console.log('Acessando candidatosinterno.html');
})

// /interno/reportsinterno => GET
router.get('/reportsinterno', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','reportsinterno.html'));
    console.log('Acessando reportsinterno.html');
})

// /interno/solicitacoesinterno => GET
router.get('/solicitacoesinterno', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views','solicitacoesinterno.html'));
    console.log('Acessando solicitacoesinterno.html');
})

// /interno/equipamentosinterno => GET
router.get('/equipamentosinterno', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'equipamentosinterno.html'))
})

// /interno/equipinternos => POST
router.post('/equipinternos', portalInternoController.postAddEquipamentos);

module.exports = router;