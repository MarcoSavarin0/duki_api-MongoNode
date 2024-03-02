const jwt = require('jsonwebtoken')
require('dotenv').config();
const User = require('../models/user.model')
const verifyToken = async function (req, res, next) {
    try {
        const token = req.headers["x-access-token"];
        if (!token) {
            return res.status(403).json({ message: "No token provided" })
        }
        const decoded = jwt.verify(token, process.env.PALABRA_SECRETA)
        req.userId = decoded.id
        const usuarioFind = await User.findById(req.userId, { password: 0 })
        if (!usuarioFind) return res.status(404).json({ message: "User not found" })

        next()

    } catch (error) {
        return res.status(401).json({ message: error.message })
    }

}


module.exports = verifyToken