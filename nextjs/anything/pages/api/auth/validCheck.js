import { connectDB } from "@/util/database";

export default async function handler(req,res){


    const db = (await connectDB).db("forum")
    let result = await db.collection('user_cred').findOne({email: req.body})
    if(result){
        return res.status(400).json('다른 이메일을 입력하세요')
    } else {
        return res.status(200).json('유효한 이메일')
    }
}