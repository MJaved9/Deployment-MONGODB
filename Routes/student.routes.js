const {Router}=require("express")
const {StudentModel} =require("../Model/StudentModel")
const studentControler=Router()

studentControler.get("/",async(req,res)=>{
    const result=await StudentModel.find();
    res.send(result) 
})
studentControler.post("/add",async(req,res)=>{
    const payload=req.body;
    const new_data=new StudentModel(payload)
    await new_data.save()
    res.send("New Student Added")
})

studentControler.delete("/:id",async(req,res)=>{
    const id=req.params.id
    const remove_student=await StudentModel.deleteOne({id})
    res.send("Deleted")
})
studentControler.patch("/:id",async(req,res)=>{
    const data=await StudentModel.findById(req.params.id)
    data.name=req.body.name;
    const s=await data.save()
    res.json(s)

})

module.exports={
    studentControler
}