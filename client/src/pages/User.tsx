import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostContainer } from "../components";
import api_string from "../api_string";

const User = () => {
    const [userData, setUserData] = useState([]);
    const [postData, setPostData] = useState([]);
    const {user_id} = useParams();

    useEffect(() => {
        fetch(api_string + "/api/user/" + user_id)
        .then(res => res.json())
        .then(setUserData)
    },[]);

    useEffect(() => {
        fetch(api_string + "/api/posts/" + user_id)
        .then(res => res.json())
        .then(setPostData)
      },[]);    

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