express = require('express')
app = express()
const PORT = 3000;
const path = require('path')
const cors = require("cors")
const cookieParser = require("cookie-parser")
const verifyUser = require("./auth")

app.use(
	cors({
		origin: process.env.CLIENT_URL,
		credentials: true,
	})
)

app.use(express.json())
app.use(cookieParser())

app.use(express.static('../frontend/dist'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve('..', __dirname, 'frontend', 'dist', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${3000}`)});

