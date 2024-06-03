import { Posts } from "../config/posts"
import PostItem from "./PostItem"
import CustomButton from "./UI/CustomButton"

interface IPostItem {
    posts: Posts[]
    buttonText: string;
    onHandleClick: (str: string) => void
}

function RandomComp (props : IPostItem) {
    const {posts, buttonText, onHandleClick } = props


    return (
        <div>
            {
                posts.map(item => (
                    <PostItem title={item.title} postDescriprion={item.description} key={item.id}/>
                ))
            }
            <CustomButton text={buttonText} onHandleClick={onHandleClick}/>
        </div>
    )
}

export default RandomComp