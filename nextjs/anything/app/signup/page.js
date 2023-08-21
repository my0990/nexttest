'use client'
import smile from '../../public/smile.png'
import Image from 'next/image'
import Link from 'next/link'
import styles from './signup.module.css'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
export default function SignUp() {
  const [error,setError] = useState('');
  const [form,setForm] = useState({
    email: "",
    password: "",
    name: ""
  });
  const onChange = (e) => {
    setForm((current) => {
      let tmp = {...current};
      tmp[e.target.name] = e.target.value;
      return tmp;
    })
    
  }
  const router = useRouter()

  const onSubmit = () => {
    
    fetch('api/auth/signup', {
        method : 'POST',
        body: JSON.stringify(form)
    }).then((r)=>{
      if(r.status == 200){
        alert('회원가입 성공')
        router.push('/')
      } else if(r.status == 400){
        alert('모두 입력해 주세요')
      }
    })
  }
  const validCheck = () => {
        fetch('api/auth/validCheck',{
          method : 'POST',
          body: form.email
        }).then((r) => {
          if(r.status == 400){
            setError('이미 사용중인 아이디입니다')
          } else {
            setError('사용 가능한 아이디입니다')
          }
        })
  }
  return (
    <main>
    <div className={styles.container}>
      <div className={styles.loginWrapper}>
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
        <div className={styles.wrapperRight}>
          <h1>회원가입</h1>
          <input onChange={onChange} onBlur={validCheck} name="email" placeholder='아이디를 입력하세요' className={styles.loginInput} ></input>
          <span className={styles.signupSpan}>{error}</span>
          <input onChange={onChange}  name="password" placeholder='비밀번호를 입력하세요' className={styles.loginInput} type='password'></input>
          <span className={styles.signupSpan}> </span>
          <input onChange={onChange} name="name" placeholder='이름을 입력하세요' className={styles.loginInput}></input>
          <span className={styles.signupSpan}> </span>
          <button className={styles.btn} type='submit' onClick={onSubmit}>회원가입</button>
          {/* <button onClick={onSubmit}>test</button> */}
          {/* <SignupForm /> */}
        </div>
      </div>
      </div>
    </main>
  )
}
