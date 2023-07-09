import { connectDB } from "@/util/database"

export default async function Post(req,res) {
    const db = (await connectDB).db("forum")
    db.collection('post').insertOne({title: req.body.text})
    
    return (
        res.status(200).json('처리완료')
    )
}