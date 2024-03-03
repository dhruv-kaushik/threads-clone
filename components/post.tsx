export default function Post(props: {username: string, postContent: string, createdAt: string}) {
    //TODO: change CreatedAt to a Date
    //TODO: ADD Avatar amd more options
    return (
    <ul>
        <h1>{props.username}</h1>
        <p>{props.postContent}</p>
        <p>{props.createdAt}</p>
    </ul>
    )
}