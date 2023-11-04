const jwksClient = require("jwks-rsa")
const jwt = require("jsonwebtoken")

const client = jwksClient({
    jwksUri: process.env.JWKS_URL
})

const verifyUser = async (req, res, next) => {
    try {
        const jwkSet = await client.getSigningKey()
        const token = req.cookies["__session"]
        const key = jwkSet.getPublicKey()

        const verify = jwt.verify(token, key)
        next()
    } catch (err) {
        res.send("Invalid user")
    }
}

module.exports = verifyUser
