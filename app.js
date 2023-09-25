import express from "express"
import { __dirname } from "./utils.js"
import productosRouter from "./src/routers/productos.Router.js"
import viewRouter from "./src/routers/view.router.js"
import cartsRouter from "./src/routers/carts.Router.js"
import handlebars from "express-handlebars"
import { Server } from "socket.io"
import "./src/dao/mongoosedb/dbConfig.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/src/public"))
app.use("/api/carts", cartsRouter)
app.use("/api/products", productosRouter)
app.use("/", viewRouter)


app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/src/views")
app.set("view engine", "handlebars")



const PORT = 8080

const httpServer = app.listen(PORT, () => {
    console.log("escuchando puerto con htpp y socket io")
})


const socketServer = new Server(httpServer)

socketServer.on("connection", async (Socket) => {
    console.log(`cliente conectado a servidor:${Socket.id}`)
Socket.on('disconnect', () => {
    console.log(`Un cliente se ha desconectado:${Socket.id}`)
})

})






