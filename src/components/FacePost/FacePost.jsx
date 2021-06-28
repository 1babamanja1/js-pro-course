import './facepost.css'
import fbPosts from './fbPosts.json'

function getID() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

export const FacePost = () => {
    return <div className='facePost'>
        <h1>Posts like Facebook</h1>
        {fbPosts.map(item =>
                <div className='fb-post' key={getID()}>
                    <div className='fb-photo' style={{backgroundImage: `url(${item.avatar})`}}></div>
                    <div className='fb-text'>
                        <div className='fb-header'>
                            <span className='fb-name'> {item.name} </span>
                            <span className='fb-add-info'> {item.location} </span>
                        </div>
                        <div className='fb-body'> {item.postDescription}</div>
                        <div className='fb-footer'>
                            <span className='fb-button'>Like</span>
                            <span className='fb-button'>Reply</span>
                            <span className='fb-add-info'>{item.timeText}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
        }

