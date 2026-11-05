const dotenv = require("dotenv")
dotenv.config()
const app = require("./src/app");
const connectToDB = require('./src/config/db')
const PORT = process.env.PORT;
connectToDB().then(() => {

    app.listen(3000, () => {
        console.log(`Server is running on port ${PORT}`);
    })
})
    .catch(err => {
        console.log('Failed to connect to DB')
        process.exit(1)
    })
