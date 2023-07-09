import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    if(req.method == 'DELETE'){

        let session = await getServerSession(req,res,authOptions)
         const db = (await connectDB).db('forum')
         let 찾은거 = await db.collection('post').findOne({_id : new ObjectId(req.body)})
        if(session == null){
            return res.status(500).json('로그인해주세요')
        } else if (찾은거.author == session.user.email || session.user.role == 'admin'){
            let result = await db.collection('post').deleteOne({ _id : new ObjectId(req.body)})
            return res.status(200).json('삭제완료')
         } else {
            return res.status(500).json('현재유저와 작성자 불일치')
         }



    }

}
 