express = require('express')
app = express()
const PORT = 3000;
const path = require('path')

app.use(express.static('../frontend/dist'))


app.get('*', (req, res) => {
    res.sendFile(path.resolve('..', __dirname, 'frontend', 'dist', 'index.html'));
})

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${3000}`)});

