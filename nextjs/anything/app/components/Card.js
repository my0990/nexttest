import Image from "next/image"
import styles from "./card.module.css"
import japan from "../../public/japan.jpg"
export default function Card({data}){
    return(
        <div>
            <div className={styles.cardWrapper} width={100}>
                <div className={styles.image}>
                    <img src={data.url} className={styles.img} />

                    <div className={styles.postInfo}>
                        <div style={{textAlign:'right'}}>{data.name}</div>
                        <div>{data.date}</div>
                    </div>
                </div>
                <div className={styles.bottomWrapper}>
                    <h1>{data.title}</h1>
                    <div>{data.content}</div>
                </div>
            </div>
        </div>
    )
}