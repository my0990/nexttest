'use client'
import Btn from "./Btn"
import { signOut } from "next-auth/react"
import styles from "./Btn.module.css"
export default function Logoutbtn(){
    return(
        <button className={styles.logoutBtn} onClick={()=>signOut()}>로그아웃</button>
    )
}