import axios from "axios";
import Link from "next/link"
import { useEffect } from "react";
import {Article} from '../component/Article';

const Home = () => {

  useEffect(()=>{

    axios.get('/user?ID=12345')
  .then(function (response) {
 // handle success(axiosの処理が成功した場合に処理させたいことを記述)
    console.log(response);
  })
  .catch(function (error) {
 // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
    console.log(error);
  })
  .finally(function () {
 // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
  });


    const url = axios.get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")

    .then(() => {
        console.log("ステータスコード:", );
    })
    // catchでエラー時の挙動を定義
    .catch(err => {
        console.log("err:", err);
    });

//     const res = axios.get(url);
//       .then(() => {
//         console.log("ステータスコード:", status);
//     })
//     .catch(err => {
//       console.log("err:", err);
//   });
});


    // console.log(res);
    // const url = axios.get("http://localhost:3000/")

    // // thenで成功した場合の処理
    // // catchでエラー時の挙動を定義

  return (
    <>
      <Article
        name="aaa"
        headerItem1="Home"
        headerItem2="About"
        headerItem3="Topic"
      />
      {/* <ul>
        <li><Link href="/users/[id]" as="/users/0"><a>user1</a></Link></li>
        <li><Link href="/users/[id]" as="/users/1"><a>user2</a></Link></li>
        <li><Link href="/users/[id]" as="/users/2"><a>user3</a></Link></li>
      </ul> */}
    </>
  );
}

export default Home;
