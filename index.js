const express = require('express');

const app = express();
const PORT = 3026;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from Yoga Sequelize!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});