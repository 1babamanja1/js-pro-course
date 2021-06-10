import { Post } from '../Post/Post'
import { useState, useEffect } from 'react'
import './postlist.css'
import { Button } from '../Button'

export const PostList = () => {
    const [items,setItems] = useState([]);
    const [counter, setCounter] = useState(0)
    const [isFirstDisabled, setIsFirstDisabled] = useState(false)
    const [isLastDisabled, setIsLastDisabled] = useState(false)
    const onClickPlus = () => {setCounter(counter + 5)}
    const onClickMinus = () => {setCounter(counter - 5)}

    useEffect(() => {
        setIsFirstDisabled(counter === 0)
        setIsLastDisabled(items.length / counter < 5)
    },[counter, items.length])

    useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then (result => setItems(result))}
    ,[])
    return (<div>
        <Button onclick={onClickMinus} btnName='Prev 5' sign='minus' disabled={isFirstDisabled}/>

        <div className='postList'>{
             items.filter(item => item.id > (counter) && item.id <= (counter + 5))
            .map((item) => (<Post key={item.id} title={item.title} body={item.body}/>))}
        </div>
        <Button onclick={onClickPlus} btnName='Next 5' sign='plus' disabled={isLastDisabled}/>
    </div>)
}