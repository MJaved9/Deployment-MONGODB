const {Router}=require("express")
const { TopicModel } = require("../Model/TopicModel")

const topicControler=Router()

topicControler.get("/",async(req,res)=>{
    const result=await TopicModel.find()
    res.send(result)
})

topicControler.post("/create",async(req,res)=>{
    const payload=req.body;
    const new_topic=new TopicModel(payload)
    await new_topic.save()
    res.send("Added")
})
topicControler.delete("/:id",async(req,res)=>{
    const id=req.params.id
    const remove_topic=await TopicModel.deleteOne({id})
    res.send("Deleted")
})
topicControler.patch("/:id",async(req,res)=>{
    const data=await TopicModel.findById(req.params.id)
    data.topic_name=req.body.topic_name;
    const s=await data.save()
    res.json(s)

})

module.exports={
    topicControler
}