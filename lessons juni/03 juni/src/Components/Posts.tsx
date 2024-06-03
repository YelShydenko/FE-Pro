import PostItem from "./PostItem";
import { postList } from "../config/posts";
import RandomComp from "./RandomComp";
import CustomButton from "./UI/CustomButton";

interface IPosts {
    title: string;
    postDescriprion: string;
    onHandleClick: (str: string) => void
}

function Posts (props : IPosts) {
    const { title, postDescriprion, onHandleClick} = props
    let result : string = 'Hello world'
    result = '55'

    return (
        <div>
            <h3>{title}</h3>
            <p>{postDescriprion}</p>
            {
                postList.map((item) => (
                    <PostItem key={item.id} title={item.title} postDescriprion={item.description} />
                ))
            }
            <CustomButton text='Hello world' size='L' onHandleClick={() => console.log('clicked')}/>
            <RandomComp posts={postList} buttonText="btn text" onHandleClick={onHandleClick}/>
        </div>
    )
}

export default Posts