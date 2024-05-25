
//로딩 상세페이지 마다 글이 달라야하니까
//매개변수로 {params}
//{params.폴더명} => 동적 url
export default function BlogPostPage({params}){
  return(
    <>
      <h2>블로그 게시글</h2>
      <p>{params.slug}</p>
    </>
  )
}

//{params} => 동적 라우터에서 사용되는 매개변수
//동적 라우터 설정하려면 폴더명에 [] 넣기