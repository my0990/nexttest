'use client'
import Btn from "./commons/Btn"

export default function LoginBtn({children}){
    return(
        <Btn onClick={()=>alert('카카오로그인')} style={{background: "#F1F52C", color: "black"}}>{children}</Btn>
    )
}