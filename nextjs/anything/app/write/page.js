'use client'
import Image from 'next/image'
import styles from './write.module.css'
import inputIcon from '../../public/input.png'
import localFont from "next/font/local"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import testImg from '../../public/smile.png'
import axios from 'axios'

const myFont = localFont({
    src: "./NanumSquareRoundB.ttf",
    display: "swap",
  })


export default function Write() {
    const router = useRouter();
    const [loading,setLoading] = useState(false);
    const [imgUrl,setImgUrl] = useState('');
    const [form,setForm] = useState({
      title: "",
      content: "",
      url: "",
    });
    const onSubmit = () => {
      setLoading(true);
      let body = new FormData()
      body.set('key', '949e5e887d4fb3a5fea229f584afb1c8')
      body.append('image', imgUrl)
  
      axios.post("https://api.imgbb.com/1/upload?key=949e5e887d4fb3a5fea229f584afb1c8",body)
      .then(r => {
        console.log("igmbb test: ", r.data.data.url)
        return fetch('api/post/new', {
        method : 'POST',
        body: JSON.stringify({...form, url: r.data.data.url}),
    }).then((r)=>{

        if(r.status == 200){
            alert('작성완료')
        
            setLoading(false)
            r.json().then(result => router.push(result))
            
          } else if(r.status == 400){
            alert('모두 입력해 주세요')
          }
    })})
        
      }

      const onChange = (e) => {
        setForm((current) => {
          let tmp = {...current};
          tmp[e.target.name] = e.target.value;
          return tmp;
        })
        
      }
      const onImgUpload  = (blob) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          setImgUrl(base64data.replace(/^data:image\/[a-z]+;base64,/, ""));
      }}



      const uploadImage = (imgUrl) => {
        console.log(imgUrl)
        let body = new FormData()
        body.set('key', '949e5e887d4fb3a5fea229f584afb1c8')
        body.append('image', imgUrl)
    
        axios.post("https://api.imgbb.com/1/upload?key=949e5e887d4fb3a5fea229f584afb1c8",body)
        .then(r => console.log(r))
      


      }
    return(
        <div className={[myFont.className ,styles.container ].join(" ")}>
            <div className={styles.wrapper}>
                <input name="title" className={[myFont.className ,styles.title ].join(" ")} placeholder='제목을 입력하세요' onChange={onChange}></input>
                
                <textarea name="content" className={styles.content} placeholder='내용을 입력하세요' onChange={onChange}></textarea>
                <div className={styles.fileWrapper}>
                    <label for="input-file" className={styles.input}>
                        업로드
                    </label>
                    <input type='file' id="input-file" style={{display: 'none'}} onChange={(e) => {
                        onImgUpload(e.target.files[0])
                    }}></input>
                    <button className={styles.btn} onClick={(e) => onSubmit(imgUrl, e)}>올리기</button>
                </div>
            </div>
            {loading ?             
            <div className={styles.square}>
            <div class={styles.spin}></div>
            <div style={{textAlign: "center"}} className={[myFont.className]}>업로드중</div>
          </div> : null}

        </div>
    )
}