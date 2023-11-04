express = require('express')
app = express()
const PORT = 3000;
const path = require('path')
const db = require('./db');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const USERS_ENDPOINT = '/users';
const EVENTS_ENDPOINT = '/events';

//app.use(express.static('../frontend/dist'))

//GET ALL THE EVENTS
app.get(EVENTS_ENDPOINT, (req, res) => {

    const sqlQuery = 'SELECT * FROM events';

    db.pool.query(sqlQuery, (err, result) => {
        //handle the error
        if(err){
            res.status(500).send({message : "something went wrong"});
        }
        console.log(result);
        res.status(200).send(result);
    })
})
//GET Events posted by perticular user
app.get(EVENTS_ENDPOINT, (req, res) => {

    const host_id = req.query.host_id;

    const sqlQuery = 'SELECT * FROM events WHERE host_id = ?';

    db.pool.query(sqlQuery, [host_id], (err, result) => {
        //handle the error
        if(err){
            res.status(500).send({message : "something went wrong"});
        }
        console.log(result);
        res.status(200).send(result);
    })
})

app.post(EVENTS_ENDPOINT, (req, res) => {
    const event_name = req.body.event_name
    const date_time = req.body.date_time
    const price = req.body.price
    const host_id = req.body.host_id


    const sqlQuery = `INSERT INTO events (event_name, date_time, price, host_id) VALUES (?, ? , ? , ?)`;

    db.pool.query(sqlQuery,[event_name, date_time, price, host_id], (err, result) => {
        if(err){
            res.status(500).send({message: "something went wrong", errM: err});
        }
        res.status(200).send(result);
    })
    
})





app.get(USERS_ENDPOINT, async (req, res) => {

    try {
        const sqlQuery = "SELECT * FROM users";
        db.pool.query(sqlQuery, (err, result) => {
            console.log(result);
            res.send(result)
        });
        
    } catch (error) {
        
    }
})
//app.get('*', (req, res) => {
//    res.sendFile(path.resolve('..', __dirname, 'frontend', 'dist', 'index.html'));
//})

function convertBigIntsToNumbers(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const value = obj[key];
            if (typeof value === 'bigint') {
                obj[key] = Number(value);
            }
        }
    }
    return obj;
}

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${3000}`)});


