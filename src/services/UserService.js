const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const { generatedAccessToken, generatedRefreshToken } = require('./JwtService');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'OK',
                    message: 'The email is already in use'
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            const createdUser = await User.create({
                name,
                email,
                password: hash,
                phone
            })
            if(createdUser) {
                resolve({
                    status: 'OK',
                    message: 'Success',
                    data: createdUser
                })
            }
        } catch (e) {
            reject(e);
        }
    })
};

const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)

            if(!comparePassword) {
                resolve({
                    status: 'OK',
                    message: 'The password or username is incorrect'
                })
            }
            const access_token = await generatedAccessToken({
                id: checkUser.id,
                role: checkUser.role,
            })

            const refresh_token = await generatedRefreshToken({
                id: checkUser.id,
                role: checkUser.role,
            })

            resolve({
                status: 'OK',
                message: 'Success',
                access_token,
                refresh_token
            })
        } catch (e) {
            reject(e);
        }
    })
};

const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id,
            })
            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }

            const updatedUser = await User.findByIdAndUpdate(id, data, { new: true })
            resolve({
                status: 'OK',
                message: 'Success',
                data: updatedUser,
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createUser,
    loginUser,
    updateUser
}