import { connectDB } from '@/util/database'

export default async function test(req,res){
    const db = (await connectDB).db("forum")
    // let result = await db.collection('post').insertOne({test:'test'})
    console.log(req.body)
    return res.status(200).json('test')
}