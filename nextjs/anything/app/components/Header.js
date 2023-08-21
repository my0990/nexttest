import { getServerSession } from "next-auth"
import { authOptions } from "@/pages/api/auth/[...nextauth]"
import Logoutbtn from "./commons/LogoutBtn"
import Link from "next/link"
import styles from "./card.module.css"
import Image from "next/image"
import logo from "../../public/logo.png"
import Btn from "./commons/Btn"
import { redirect } from "next/navigation"
import localFont from 'next/font/local'


const myFont = localFont({
    src: "../../public/fonts/NanumSquareRoundB.ttf",
    display: "swap",
  })

export default async function Header(){
    const session = await getServerSession(authOptions)
    if(session == null){
        redirect('/login')
    }
    return(
        <div className={[myFont.className ,styles.header ].join(" ")}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div className={styles.logo}>
                  <Link href="/write"><Btn>포스트 올리기</Btn></Link>
                </div>
            </div>
            <div className={styles.btnWrapper}>
                <Logoutbtn />
            </div>

        </div>
    )
}
