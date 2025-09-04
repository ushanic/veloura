const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employees.js");
const PerfumeModel = require("./models/Perfume.js");
const CartModel = require("./models/Cart.js");

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/employee1')

app.post('/login',(req,res)=>{
    const {email,password} = req.body
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("Success")
        }else{
            res.json("password is incorrect")
        }
    }else{
        res.json("user doesn't exists")

    }
    })
})

app.post('/register',(req,res)=>{
    EmployeeModel.create(req.body)
    .then(employee=>res.json(employee))
    .catch(err=>res.json(err))
})


app.get('/perfumes', async(req,res)=>{
  try{
    const perfumes = await PerfumeModel.find();
    res.json(perfumes);
  }catch(err){
    res.status(500).json({error:err.message});
  }
});

//Add to cart
app.post("/cart/add", async (req, res) => {
  try {
    const { userId, perfumeId, name, price, size, quantity, imageUrl } = req.body;

    const existing = await CartModel.findOne({ userId, perfumeId, size });
    if (existing) {
      existing.quantity += quantity;
      await existing.save();
      return res.json(existing);
    }

    const cartItem = await CartModel.create({ userId, perfumeId, name, price, size, quantity, imageUrl });
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.listen(3001,()=>{
    console.log("server s runing")
})