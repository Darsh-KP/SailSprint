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

const db = require('./db');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const USERS_ENDPOINT = '/users';
const EVENTS_ENDPOINT = '/events';
const VIEWERS_ENDPOINT = '/viewers';
const RACERS_ENDPOINT = '/racers';

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

//GET get total viewers in event
app.get(VIEWERS_ENDPOINT, (req, res) => {

    const event_id = req.query.event_id;

    const sqlQuery = 'SELECT COUNT(*) FROM viewers WHERE event_id = ?';

    db.pool.query(sqlQuery, [event_id], (err, result) => {
        //handle the error
        if(err){
            res.status(500).send({message : "something went wrong"});
        }
        console.log(result);
        res.status(200).send(result);
    })
})

//GET get total racers in event
app.get(RACERS_ENDPOINT, (req, res) => {

    const event_id = req.query.event_id;

    const sqlQuery = 'SELECT COUNT(*) FROM racers WHERE event_id = ?';

    db.pool.query(sqlQuery, [event_id], (err, result) => {
        //handle the error
        if(err){
            res.status(500).send({message : "something went wrong"});
        }
        console.log(result);
        res.status(200).send(result);
    })
})

//GET get event's hostname
app.get(EVENTS_ENDPOINT, (req, res) => {

    const event_id = req.query.event_id;

    const sqlQuery = 'SELECT hostname FROM racers WHERE event_id = ?';

    db.pool.query(sqlQuery, [event_id], (err, result) => {
        //handle the error
        if(err){
            res.status(500).send({message : "something went wrong"});
        }
        console.log(result);
        res.status(200).send(result);
    })
})

//POST create an event
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


