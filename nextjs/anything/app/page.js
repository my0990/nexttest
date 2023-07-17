import Link from "next/link"
export default function Home() {
  return (
    <main>
      메인홈
      <Link href="/login">로그인</Link>
    </main>
  )
}
