import { Post } from ".";

interface Props {
    postData: Array<object>;
}

const PostContainer = ({postData}: Props) => {
  return (
    <section className="grid justify-center mt-14">
        {postData ? postData.map((item: any, i: number) => (
            <Post key={i} id={item.user_id} username={item.username} caption={item.caption} img_url=""/>
        )) : <div>Loading</div>}
    </section>
  );
}

export default PostContainer;