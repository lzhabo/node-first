const express = require('express')
const mongoose = require('mongoose')
//htm engine
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000


const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: "hbs"
});
//for page rendering
//register of engine
app.engine('hbs',hbs.engine)

async function start() {
    try {
        //allows to connect to db
        await mongoose.connect('',
            {
                useNewUrlParser: true,
                useFindAndModify: false
            })
        app.listen(PORT, () => {
            console.log("Server has been started..")
        })
    } catch (e) {
        console.log(e)
    }

}

start()

