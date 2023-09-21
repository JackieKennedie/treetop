import { useState, useEffect } from "react";
import { PostContainer } from "../components";

const Home = () => {
  const [postData, setPostData] : [any, any] = useState([]);

    useEffect(() => {
      fetch('/api/posts/home')
      .then(res => res.json())
      .then(setPostData)
    },[]);    

  return (
    <section>
      <PostContainer postData={postData}/>
    </section>
    
    
  );
}
export default Home;