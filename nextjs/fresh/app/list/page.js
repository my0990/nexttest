import { connectDB } from "@/util/database"
import Link from "next/link"
import DetailLink from "./DetailLink"
import Listitem from "./ListItem"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { getServerSession } from "next-auth"
export const dynamic = 'force=dynamic'

export default async function List() {
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()

  result = result.map((a) => {
    a._id = a._id.toString();
    return a
  })
    return (
      <div className="list-bg">
       <Listitem result = {result}/>
      </div>
    )
  } 