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
  // redirect('/post/' + (number.number - 1))
  return (
      <main className="container">
        <div>
          숫자는 112123
        </div>


      </main>

  )
}
