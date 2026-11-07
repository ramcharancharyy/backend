const express= require("express");

/**
 * - Routes required
 */
const authRouter=require("./routes/auth.routes")
const accountRouter=require("./routes/account.routes")


const cookieParser=require("cookie-parser");
const { authMiddleware } = require("./middleware/auth.middleware");
const app=express();

app.use(express.json())
app.use(cookieParser())

/**
 * - Routes used
 */

app.use("/api/auth",authRouter)
app.use("api/accounts/",accountRouter)

module.exports=app;