'use client'
import Link from "next/link"

export default function Listitem({result}) {
    return (
        <div>
        {result.map((a,i) => {
            return(
              <div className="list-item" key={a._id}>
                <Link href={"/detail/" + a._id}>
                  <h4>{a.title}</h4>
                </Link>
                <p>{a.content}</p>
                <Link  href={"/edit/" + a._id}>
                  🎨
                </Link>
                <span onClick={(e)=>{
                    fetch('api/post/delete', {
                        method : 'DELETE',
                        body: a._id,
                    }).then((r)=>
                    {
                      if(r.status == 200){
                        e.target.parentElement.style.opacity = 0;
                        setTimeout(()=>{
                            e.target.parentElement.style.display = 'none';
                        },1000)
                      }
                    }
                    )
                }}>🗑</span>
              </div>
            )
          })}
        </div>
    )

}