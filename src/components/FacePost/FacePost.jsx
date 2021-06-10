import './facepost.css'
import fbPosts from './fbPosts.json'

function getID() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

export const FacePost = () => {
    return <div className='facePost'>
        {fbPosts.map(item =>
            <ul key={getID()}>
                <li>{item.name}</li>
                <li>{item.postDescription}</li>
                <li>{item.location}</li>
                <li>{item.timeText}</li>
            </ul>
            )}
        </div>
        }