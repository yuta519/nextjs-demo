import { useEffect, useState } from "react";

export async function getStaticProps() {
  const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty&limitToFirst=3&orderBy="$key"');
  const hackerRankTopIds = await res.json();
  return { props: { hackerRankTopIds } }
}

const User = (props) => {
  useEffect(()=>{
    fetchArticleDetails(props.hackerRankTopIds);
  }, [props.hackerRankTopIds]);

  const [articles, setArticles] = useState([]);

  const fetchArticleDetails = async (hackerRankTopIds) => {
    hackerRankTopIds.forEach(async(id) => {
      const res = await fetch("https://hacker-news.firebaseio.com/v0/item/"+ id +".json?print=pretty");
      const data = await res.json();
      // https://stackoverflow.com/questions/54676966/push-method-in-react-hooks-usestate
      setArticles(prev => [...prev, data]);
    });
  }

  return (
    <>
      {console.log(articles)}

      {articles.map((article) => {
        return(
          <>
            <div>{article.id}</div>
            <div>{article.title}</div>
          </>
        )
      })}
    </>
  );
}

export default User
