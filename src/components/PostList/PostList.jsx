import {Post} from '../Post/Post'
import {useState, useEffect} from 'react'
import './postlist.css'
import {Button} from '../Button'
import {ModalProvider} from "../../Contexts";
import {useDispatch, useSelector} from "react-redux";
import {ACTIONS} from "../../redux/constants";

function getID() {
    return "_" + Math.random().toString(36).substr(2, 9);
}

export const PostList = () => {

    const items = useSelector((state) => state.postsReducer.posts)
    const author = useSelector((state) => state.postsReducer.authors)
    const dispatch = useDispatch()

    const [counter, setCounter] = useState(0)
    const [isFirstDisabled, setIsFirstDisabled] = useState(false)
    const [isLastDisabled, setIsLastDisabled] = useState(false)
    const onClickPlus = () => {
        setCounter(counter + 3)
    }
    const onClickMinus = () => {
        setCounter(counter - 3)
    }

    useEffect(() => {
        setIsFirstDisabled(counter === 0)
        setIsLastDisabled(items.length / counter < 3)
    }, [counter, items.length]);


    useEffect(() => {
            dispatch({type: ACTIONS.GET_POST_REQUEST})
            dispatch({type: ACTIONS.GET_AUTHOR_REQUEST})
        }
        , []);

    const getAuthName = (userId) => {
        return (
            author.map(item => item.id === userId ? item.name : '')
        )
    }

    return (
        <ModalProvider>
            <div>
                <h1>List Of Posts</h1>
                <Button onclick={onClickMinus} btnName='Prev 3' sign='minus' disabled={isFirstDisabled}/>

                <div className='postList'>
                    {
                        items
                            .filter(item => item.id > (counter) && item.id <= (counter + 3))
                            .map((item) => {
                                    const user = author.find((user) => user.id === item.userId);

                                    return (<Post
                                        key={getID()}
                                        title={item.title}
                                        body={item.body}
                                        author={getAuthName(item.userId)}
                                        modalBody={user ?
                                            <div className='modal-in-posts'>
                                                <h2>{user.name}</h2>
                                                <span> User Name: {user.username} </span>
                                                <span> Email: {user.email} </span>
                                            </div>
                                            : null}
                                    />)
                                }
                            )
                    }
                </div>
                <Button onclick={onClickPlus} btnName='Next 3' sign='plus' disabled={isLastDisabled}/>
            </div>
        </ModalProvider>)
}