import { useRouter } from "next/router";
import { useEffect } from "react";

export async function getStaticProps() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"');
  const hackerRankTopIds = await res.json();
  return { props: { hackerRankTopIds } }
}

const User = (props: { hackerRankTopIds: any; }) => {

  console.log("################################");
  console.log("Top500のID一覧");
  console.log(props.hackerRankTopIds);
  console.log("################################");

  const fetchCatFactsData = async (id: string) => {
    const res = await fetch("https://hacker-news.firebaseio.com/v0/item/"+ id +".json?print=pretty");
    const data = await res.json()
    console.log("################################");
    console.log("各記事の詳細情報");
    console.log(data);
    console.log("################################");
    return data;
  }

  useEffect(()=>{
    props.hackerRankTopIds.forEach((id:string)=>{
      fetchCatFactsData(id);
    });
  }, [props.hackerRankTopIds]);
  const router = useRouter();
  const id = router.query.id

  const hackerNewsArticles = {
      id: 1,
      name: "hoge",
    };


  return (
    <>
      <div>userId: {id}</div>
      <div>{hackerNewsArticles.name}</div>
    </>
  );
}

export default User
