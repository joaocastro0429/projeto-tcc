
import {Router,Request,Response}from 'express'

const router= Router()


router.get("/",(request,response)=>{
    response.json({message: "Hello from API"})
})

export default router

