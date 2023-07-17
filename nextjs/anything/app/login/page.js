import smile from '../../public/smile.png'
import Image from 'next/image'
import LoginInput from './LoginInput'
import LoginBtn from './LoginBtn'
import Link from 'next/link'
import Btn from '../components/Btn'
export default function Login() {
  return (
    <main className='container'>
      <div className='login-wrapper'>
        <div>
          <Image 
            src={smile}
            width={420}
            height={388} 
            style={{objectFit: 'cover'}}
          /> 
          <h1>하루 한장</h1>
          <p>행복했던 순간을 공유해보세요.</p>
        </div>
        <div style={{width: '500px'}}>
          {/* <h1>로그인</h1> */}

            <LoginInput placeholder="이메일 입력"></LoginInput>
            <LoginInput placeholder="비밀번호 입력"></LoginInput>
            <Btn>로그인</Btn>
            <span className='inputSpan'>or</span>
            <Link href="/signup"><Btn color="login-btn">회원가입</Btn></Link>
            <LoginBtn color="kakao-login-btn">카카오로 로그인</LoginBtn>

        </div>
      </div>
    </main>
  )
}
