'use client'
import LoginBtn from "./LoginBtn";
import { signIn } from "next-auth/react";
import styles from "../login.module.css"
import { useRouter } from "next/navigation";

export default function LoginForm({session}){

    const router = useRouter();
    if(session){
        router.push('/')
    }
    const login = async (e) => {
        // 원래 실행되는 이벤트 취소
        e.preventDefault();
        // Form 안에서 이메일, 패스워드 가져오기
        const email = e.target.email.value;
        const password = e.target.password.value;
        const response = await signIn("email-password-credential", {
            email,
            password,
            redirect: false, 
        })
        if(response.error){
          alert('다시 확인해주세용')
        } else {
            router.replace('/')
        }
    }

    return(
        <form onSubmit={login}>
            <input placeholder="아이디 입력" className={styles.loginInput}  name='email' ></input>
            <input placeholder="비밀번호 입력" className={styles.loginInput} type='password' name='password'></input>
            <LoginBtn type='submit'>로그인</LoginBtn>
        </form>
    )
}