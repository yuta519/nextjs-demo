import { useEffect, useState } from "react";

export async function getStaticProps() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"');
  const hackerRankTopIds = await res.json();
  return { props: { hackerRankTopIds } }
}

type HackerRankeArticle = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
}

const initialValue: HackerRankeArticle[] = [];

const User = (props: { hackerRankTopIds: string[]; }) => {
  useEffect(()=>{
    fetchArticleDetails(props.hackerRankTopIds);
  }, [props.hackerRankTopIds]);

  const [articles, setArticles] = useState(initialValue);

  const fetchArticleDetails = async (hackerRankTopIds: string[]) => {
    hackerRankTopIds.forEach(async(id) => {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/item/"+ id +".json?print=pretty");
      const data: HackerRankeArticle = await res.json();

      // https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
      setArticles(prev => [...prev, data]);
    });
  }

  return (
    <>
      {articles.map((article) => {
        return(
          <>
            <div>{article.id}</div>
            <div>{article.title}</div>
            <div>{article.by}</div>
          </>
        )
      })}
    </>
  );
}

export default User
