import Link from "next/link";


export default function BlogPage(){
  return(
    <>
      <h2>블로그 페이지</h2>
      <Link href='/blog/post-1'>게시글1</Link>
      <br/>
      <Link href='/blog/post-2'>게시글2</Link>
    </>
  )
}

//하나의 블로그엔 무수히 많은 게시글이 있을 수 있음
//그걸 일일이 url로 만들어줄 수 없음
//=> 동적url (동적 라우트)
//폴더명 []로 감싸줌 [slug]
//blog폴더 밑에 [slug] 폴더를 만들면 (+page.js까지)
// /blog/~~~로 이동 가능