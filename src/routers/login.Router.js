import { Router } from "express";
import { __dirname } from "../../utils.js"
const router =Router()


router.get("/", async (req, res) => {
    try {
        const {name,apellido,contraseña,email}=req.body
        console.log(name,apellido,contraseña,email);
        console.log(req);
        res.send(`bienvenido `)
    } catch (error) {
        console.log(error);
    }
})




export default router