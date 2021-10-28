const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send();
});

const users = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 2,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
    },
    {
        id: 3,
        name: "Nobel prize obama",
        username: "Bretty pink",
        email: "Sincere@april.biz"
    }
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/users', (req, res) => {
    const search = req.query.search;
    //user query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocalLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    console.log('hitting the post', req.body);
    // res.send('post got hitted');
    res.json(newUser);

})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy tok marka fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
})



