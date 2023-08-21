import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"


export default async function handler(req,res){
    let session = await getServerSession(req, res, authOptions)
    console.log(session)
    let db = (await connectDB).db('forum')
    req.body = JSON.parse(req.body)
    req.body.name = session.user.name
    req.body.Id = session.user.email
    console.log(req.body)
    let tmpDate = new Date()
    let date = tmpDate.getUTCFullYear() + '/' + (tmpDate.getMonth() + 1) + '/' + tmpDate.getDate()
    let lastNumber = await db.collection('number').findOne({postNumber: "postNumber"})
    req.body.number = lastNumber.number
    req.body.date = date
    console.log("lastNumber: " , lastNumber)
    await db.collection('post').insertOne(req.body);
    await db.collection('number').updateOne({"postNumber": "postNumber"},{"$set": {"number": lastNumber.number + 1}})
    return res.status(200).json('writing test')
}