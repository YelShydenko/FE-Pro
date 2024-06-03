
interface IPostItem {
    title: string;
    postDescriprion: string;
}

function PostItem (props : IPostItem) {
    const { title, postDescriprion} = props


    return (
        <div>
            <h4>{title}</h4>
            <p>{postDescriprion}</p>
        </div>
    )
}

export default PostItem