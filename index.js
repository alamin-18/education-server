const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());


const allCourse =require('./data/education-data.json')
app.get('/', (req, res) => {
    res.send('Education server Running');
});

app.get('/allcourse', (req, res) => {
    res.send(allCourse);
});
app.get('/allcourse/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = allCourse.find(n => n.id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Education server in running', port);
})