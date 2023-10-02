const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const generatedAccessToken = (payload) => {
    const access_token = jwt.sign({
        payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '1p' })

    return access_token
}

const generatedRefreshToken = (payload) => {
    const refresh_token = jwt.sign({
        payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '365d' })

    return refresh_token
}

const refreshTokenJwtService = (token) => {
    return new Promise(async (resolve, reject) => {
        try {
            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
                if (err) {
                    resolve({
                        status: 'error',
                        message: 'The authentication',
                    })
                }
                const { payload } = user
                const access_token = await generatedAccessToken({
                    id: payload?.id,
                    role: payload?.role
                })
                resolve({
                    status: 'OK',
                    message: 'Success',
                    access_token
                })
            })
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    generatedAccessToken,
    generatedRefreshToken,
    refreshTokenJwtService
}