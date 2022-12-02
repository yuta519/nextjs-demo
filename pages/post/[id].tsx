import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";

// export async function getStaticProps(params:type) {

// }

export async function getStaticProps() {
  const hackerRankTopIds = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");

  return {
    props: { hackerRankTopIds }, // will be passed to the page component as props
  }
}

const User = (props: { hackerRankTopIds: any; }) => {

  console.log(props.hackerRankTopIds);

  const fetchCatFactsData = async () => {
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty");
    const data = await res.json()
    return data;
  }

  useEffect(()=>{
    const response = fetchCatFactsData();
    console.log(response);

  }, []);
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
