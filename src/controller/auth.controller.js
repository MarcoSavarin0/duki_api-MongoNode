const User = require('../models/user.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const jwt = require('jsonwebtoken')
const Role = require('../models/roles.model')
require('dotenv').config();


module.exports = {
    signUp: async function (req, res) {
        try {
            const { username, email, password, roles } = req.body;

            const user = new User({
                username,
                email,
                password: await User.encryptPassword(password),
            });

            const saveUser = await user.save();



            if (roles && roles.length > 0) {
                const foundRoles = await Role.find({ name: { $in: roles } });



                const roleIds = foundRoles.map(role => role._id);


                user.roles = roleIds;


            } else {

                const role = await Role.findOne({ name: "user" });
                user.roles = [role._id];
            }


            await user.save();

            const token = jwt.sign({ id: saveUser._id }, process.env.PALABRA_SECRETA, {
                expiresIn: 86400
            });

            res.status(200).json({ token });
        } catch (error) {
            res.status(400).json({
                message: error.message
            });
        }

    },
    signIn: async function (req, res) {

        try {
            const userFound = await User.findOne({ email: req.body.email }).populate("roles");
            if (!userFound) {
                return res.status(400).json({ message: "User Not Found" })
            }

            const matchPassword = await User.comparePassword(req.body.password, userFound.password);
            if (!matchPassword) {
                return res.status(401).json({ token: null, message: "wrong" })
            }

            const token = jwt.sign({ id: userFound._id }, process.env.PALABRA_SECRETA, {
                expiresIn: 86400
            })

            res.json({ token })

        } catch (error) {
            return res.status(400).json({message: error.message})
        }

    },
}