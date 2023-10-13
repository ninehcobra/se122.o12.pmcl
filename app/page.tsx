import Image from 'next/image'
import Link from 'next/link'
import Header from './components/header'


export default function Home() {
  return (
    <div>
      <Header></Header>
      <Link href={"/login"}>Đăng nhập</Link>

    </div>
  )
}



