
import { useParams } from "react-router-dom";

interface Props {
    id: string;
    username: string;
    caption: string;
    img_url: string;
}
  
const Post = ({id, username, caption, img_url}: Props) => {
    const {user_id} = useParams();
    return (
        <section className="font-sans flex flex-col bg-teal-post rounded-xl w-128 justify-center m-4 pt-2.5 px-4 pb-6 shadow-3xl">
            <span className="inline-block mb-2 p-2">
                <a href={!user_id ? "user/" + id : ""} className="text-cream font-bold antialiased">
                    @{username}
                </a>
            </span>
            <section className="grid grid-rows-2">
                {img_url && <img src={img_url} className="rounded-lg" width={500} height={300}/>}
                
                <section className="w-120 text-cream font-light p-2 tracking-wider antialiased max-w-lg mb-1 ">
                    <p className="line-clamp-3"> {caption}</p>
                </section>
                <section className="pb-5">
                    <button className=" rounded-full w-10 border-5 bg-cream mt-3 mx-2 py-2 px-2.5 ">🪤</button>
                    <button className="rounded-full w-10 border-5 bg-cream mt-3 mx-2 py-2 px-2.5">💬</button>
                    <button className="rounded-full w-10 border-5 bg-cream mt-3 mx-2 py-2 px-2.5">✈️</button>
                </section>
            </section>
            
        </section>
    );
}

export default Post;