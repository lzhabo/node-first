const express = require('express')
const mongoose = require('mongoose')
//htm engine
const exphbs = require('express-handlebars')
const todoRoutes = require("./routes/todos")

const PORT = process.env.PORT || 3000


const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: "hbs"
});

//for page rendering
//register of engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(todoRoutes);

async function start() {
    try {
        //allows to connect to db
        //todo - вынести в config
        await mongoose.connect('mongodb+srv://lzhabo:qwerty123@cluster0.arp0n.mongodb.net/todos',
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

