const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require("./countries.js")
const activities = require("./activities.js")


const router = Router();
var cors = require('cors')
router.use(cors())

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", countries)
router.use("/activities", activities)


module.exports = router;
