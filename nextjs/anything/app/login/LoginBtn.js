'use client'
import Btn from "../components/Btn"

export default function LoginBtn({children}){
    return(
        <div>
            <Btn>{children}</Btn>
        </div>
    )
}