import { Post } from ".";

interface Props {
    postData: Array<object>;
}

const PostContainer = ({postData}: Props) => {
  return (
    <section className="grid justify-center mt-14">
        {postData ? postData.map((item: any) => (
            <Post key={item.id} id={item.user_id} username={item.username} caption={item.content} img_url=""/>
        )) : <div>Loading</div>}
    </section>
  );
}

export default PostContainer;