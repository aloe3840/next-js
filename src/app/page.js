import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header/header"; //@ => 최초경로라는 뜻

//리액트 프레임워크 => 틀이 있음. 틀기반 작업
//모든 이름은 page.js => 각 페이지
//layout.js => page.js를 감싸는 파일
//non-found.js => Not Found 오류에 해당하는 페이지
//error.js: 기타 오류에 해당하는 페이지
//loading.js : 로딩 페이지

export default function Home() {
  console.log('hello')

  return (
    <div>
      <Link href="/about">어바웃 페이지로 이동</Link>
      <br></br>
      <Link href="/blog"> 블로그 페이지로 이동</Link>
    </div>
  );
}
