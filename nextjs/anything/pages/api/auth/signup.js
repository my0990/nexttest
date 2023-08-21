import { connectDB } from "@/util/database";
import bcrypt from 'bcrypt'


export default async function handler(req,res){
    req.body = JSON.parse(req.body);

    if(req.method == 'POST') {
        if(req.body.email == '' || req.body.name == '' || req.body.password == ''){
            return res.status(400).json('....')
            
        } else {
            let hash = await bcrypt.hash(req.body.password, 10)
            req.body.password = hash
            req.body.role = 'user'
            let db = (await connectDB).db('forum');
            
            let result = await db.collection('user_cred').findOne({email: req.body.email})
            if(result){
                return res.status(400).json('다른 이메일을 사용하세요')
            }
            await db.collection('user_cred').insertOne(req.body);
            
            res.status(200).json('success')
        }
    }
}

