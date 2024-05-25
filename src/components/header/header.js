import Link from 'next/link'
import './header.css'
import HeaderBack from './header-background'
import logoImg from '@/assets/고양이2.jpg'

//헤더 컴포넌트
export default function Header(){
  return(
    <>
      <HeaderBack/>
      <header>
        <Link href='/'>
          <img src={logoImg.src} alt='사진'/>
        </Link>

        <nav>
          <ul>
            <li>
              <Link href='/blog'>블로그</Link>
            </li>
            <li>
              <Link href='/about'>about</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}