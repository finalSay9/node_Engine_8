const express = require('express')
const app = express()
const PORT = 3000

const users = [
    {id: 1, name: 'evan chimwaza'},
    {id: 2, name: 'teeya tembo'}
]

app.get('/users', (req, res) => {
    res.json(users);
})

app.get('/', (req, res) => {
    res.json({
        name: 'My Server',
        version: 2.0,
        status: 'running',
        message: 'hello from the geek boy'
    });
});

app.get('/contact', (req, res) => {
    res.json({
        name: 'evan chimwaza',
        email: 'evanchimwaza@gmail.com'
    })
})

app.get('/admin', (req, res) => {
    const password = req.query.password;

    if (password === '1234') {
        res.send('Welcome to the Secret Admin Panel!');
    } else {
        res.status(401).send('Access Denied! Wrong password.');
    }
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
