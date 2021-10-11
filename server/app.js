const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use('/user', userRoutes);
app.use('/pet', petRoutes);

mongoose.connect("", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log("You are now connected to MongoDB Atlas.")
})

app.listen(process.env.PORT || port, () => {
    console.log(`API is now online on port ${
        process.env.PORT || port
    }`)
});