import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from 'next-auth'
import Link from "next/link"
import Logoutbtn from "./components/commons/LogoutBtn"
import Header from "./components/Header"
import Card from "./components/Card"
import BackArrow from '../public/backArrow.svg'
import NextArrow from '../public/nextArrow.svg'
import { connectDB } from "@/util/database"
import { redirect } from 'next/navigation'
import { stringify } from "postcss"
export default async function Home() {

  // const session = await getServerSession(authOptions)
  // console.log('session: ', session)

  let db = (await connectDB).db('forum')
  // let result = await db.collection('post').find().sort({_id: -1}).limit(1).toArray()
  let number = await db.collection('number').findOne({postNumber: "postNumber"})
  console.log('start')
  console.log(number.number)    
  
  console.log('end')
  redirect('/post/' + (number.number - 1))
  // return (
  //     <main className="container">
  //         <Header className="header"/>
  //         <div className="cardWrapper">
  //           <Card data={result[0]}/>
  //         </div>
  //         <div className='backBtn'>
  //           <BackArrow width="50" className="btn"/>
  //         </div>
  //         <div className='nextBtn'>
  //           <NextArrow width="50" className="btn"/>
  //         </div>
  //         {/* {session  ? <Logoutbtn /> : <Link href="/login">로그인</Link>}
  //         {session ? session.user.name : <Link href="/signup">회원가입</Link>} */}
  //     </main>

  // )
}
