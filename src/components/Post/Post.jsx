import './post.css'

export const Post = ({title, body}) => {
    return (<div class = 'post'><p class = 'title'>{title}</p> {body}</div>)
}