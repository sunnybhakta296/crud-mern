const express=require("express")
const UserModel=require("./models/users")
const app=express()

app.get("/list-user", async(req, res)=>{    
    try {
        const users =await UserModel.find(req.body)
        return res.send(users)
    } catch(err) {
        res.status(500).send(err)
    }
})

app.post("/add-user", async(req, res)=>{ 
    try {
        const user =await UserModel.create(req.body)
        return res.send(user)
    } catch(err) {
        res.status(500).send(err)
    }
})

app.put("/update-user/:id", async(req, res)=>{    
    try {
        const user =await UserModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        })
        return res.send(user)
    } catch(err) {
        res.status(500).send(err)
    }
})

app.delete("/delete-user/:id", async(req, res)=>{    
    try {
        const user =await UserModel.findByIdAndRemove(req.params.id)
        return res.send(user)
    } catch(err) {
        res.status(500).send(err)
    }
})

app.get("/",(req, res, next)=>{
    res.send({greet:"welcome"})
})

module.exports=app