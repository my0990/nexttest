import smile from '../../public/smile.png'
import Image from 'next/image'
import Link from 'next/link'
export default function SignUp() {
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
        <div>
          <h1>회원가입</h1>
          <form>


          </form>
        </div>
      </div>
    </main>
  )
}
