import { Router} from "express"
import  managerProducto from "../dao/mongoosedb/managerMongose/managerProductoMoogose.js"
import { __dirname } from "../../utils.js"

const router = Router()

const ManagerProducto = new managerProducto()

router.get("/home", async (req, res) => {
    try {
        const productos = await ManagerProducto.getProduct()
    res.render("home",{ productos })
    // res.json({ productos })
    } catch (error) {
        console.log(error);
    }
    
})

router.get("/realTimeProductos", (req, res) => {
    res.render("realTimeProducts")
})

router.get("/formulario",(req,res)=>{
    res.render("formularioProducto")
})

router.get("/formularioIo",(req,res)=>{
    res.render("formularioProductoIo")
})


export default router