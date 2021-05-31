// import { Post } from '../Post/Post'
// import { useState, useEffect } from 'react'
//
// export const PostList = () => {
//     const [items,setItems] = useState([]);
//
//     useEffect(() => {
//      fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res => res.json())
//         .then (result => setItems(result))})
//
//         return (items.map(item => {
//             <div key={item.id}>{item.title}</div>
//         }))
// }