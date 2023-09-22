import { useState, useEffect } from "react";
import { PostContainer } from "../components";
import api_string from "../api_string";

const Home = () => {
  const [postData, setPostData] : [any, any] = useState([]);

    useEffect(() => {
      fetch(api_string + '/api/posts/home')
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