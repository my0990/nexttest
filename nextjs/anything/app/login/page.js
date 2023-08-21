import smile from '../../public/smile.png'
import Image from 'next/image'
import LoginBtn from './components/LoginBtn'
import Link from 'next/link'
import Btn from './components/commons/Btn'
import KakaoLoginBtn from './components/KakaoLoginBtn'
import styles from './login.module.css'
import { signIn } from 'next-auth/react'
import { getServerSession } from 'next-auth'
import LoginForm from './components/LoginForm'
import { authOptions } from '@/pages/api/auth/[...nextauth]'


export default async function Login() {




  return (
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
        <div style={{flexBasis: "400px"}}>
          <Image 
            src={smile}
            width={420}
            height={388} 
            style={{objectFit: 'cover'}}
            alt='smile'
          /> 
          <h1>하루 한장</h1>
          <p>행복했던 순간을 공유해보세요.</p>
        </div>
        <div style={{width: '500px' , flexBasis: "400px"}}>
          <h1>로그인</h1>
          <LoginForm />
          <span className={styles.inputSpan}>or</span>
          <Link href="/signup"><Btn>회원가입</Btn></Link>
          <KakaoLoginBtn color="kakao-login-btn">카카오로 로그인</KakaoLoginBtn>
        </div>

      </div>
    </div>
  )
}
