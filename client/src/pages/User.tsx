import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostContainer } from "../components";

const User = () => {
    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);
    const {user_id} = useParams();

    useEffect(() => {
        fetch("/api/user/" + user_id)
        .then(res => res.json())
        .then(setUserData)
    },[]);

    useEffect(() => {
        fetch("/api/posts/" + user_id)
        .then(res => res.json())
        .then(setPostData)
      },[]);    

    console.log(postData);

    return (
        <section key={user_id}>
            <section key={user_id} className="text-cream mt-14">{userData ? userData.map((item: any) => (
                <>
                    <h1>@{item.username}</h1>
                    <h1>{item.followers} Followers</h1>
                </>
            )) : <p>AHHHHHH</p>}
            </section>
            <PostContainer postData={postData}/>
        </section>
    );
};

export default User;