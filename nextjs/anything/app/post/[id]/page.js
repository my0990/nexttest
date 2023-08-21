import Header from "@/app/components/Header"
import Card from "@/app/components/Card"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from 'next-auth'
import Link from "next/link"
import BackArrow from '../../../public/backArrow.svg'
import NextArrow from '../../../public/nextArrow.svg'
import { connectDB } from "@/util/database"
import { redirect } from 'next/navigation'

export default async function Post(props) {
    let db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({number: Number(props.params.id)})
    if(result){
        return (
            <main className="container">
                <Header className="header"/>
                <div className="cardWrapper">
                    <Card data={result}/>
                </div>
                <div className='backBtn'>
                     <Link href={"/post/" + String(Number(props.params.id) - 1)}><BackArrow width="50" className="btn"/></Link>
                </div>
                <div className='nextBtn'>
                    <Link href={"/post/" + String(Number(props.params.id) + 1)}><NextArrow width="50" className="btn"/></Link>
                </div>
                {/* {session  ? <Logoutbtn /> : <Link href="/login">로그인</Link>}
                {session ? session.user.name : <Link href="/signup">회원가입</Link>} */}
            </main>
    
        )
    } else {
        return(
            <div>
                없당
            </div>
        )
    }

}