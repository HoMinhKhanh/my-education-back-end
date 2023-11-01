const User = require('../models/UserModel')
const bcrypt = require('bcrypt');
const { generatedAccessToken, generatedRefreshToken } = require('./JwtService');

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { email, password, confirmPassword } = newUser
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The email is already in use'
                })
            }
            const hash = bcrypt.hashSync(password, 10)
            const createdUser = await User.create({
                email,
                password: hash,
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
        const { email, password } = userLogin
        try {
            const checkUser = await User.findOne({
                email: email
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }
            const comparePassword = bcrypt.compareSync(password, checkUser.password)

            if(!comparePassword) {
                resolve({
                    status: 'ERR',
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
                    status: 'ERR',
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

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser = await User.findOne({
                _id: id,
            })
            if (checkUser === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined'
                })
            }

            await User.findByIdAndDelete(id, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete user Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

const deleteManyUser = (ids) => {
    return new Promise(async (resolve, reject) => {
        try {
            await User.deleteMany({ _id: ids }, { new: true })
            resolve({
                status: 'OK',
                message: 'Delete user Success',
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find()
            resolve({
                status: 'OK',
                message: 'List all users',
                data: allUser
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getDetailsUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({
                _id: id,
            })
            if (user === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: user,
            })
        } catch (e) {
            reject(e);
        }
    })
};

const getProfileUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findOne({
                _id: id,
            })
            if (user === null) {
                resolve({
                    status: 'ERR',
                    message: 'The user is not defined',
                })
            }

            resolve({
                status: 'OK',
                message: 'Success',
                data: user,
            })
        } catch (e) {
            reject(e);
        }
    })
};

module.exports = { 
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    getAllUser,
    getDetailsUser,
    getProfileUser,
    deleteManyUser,
}