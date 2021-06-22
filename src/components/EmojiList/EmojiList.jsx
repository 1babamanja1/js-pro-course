import './emojiList.css'
import { EmojiItem } from '../EmojiItem/EmojiItem'
import allEmojis from './emojiList.json'

export const EmojiList = () => {

    return <div>
        <h1>List of Emojis</h1>
        <div  className='emojiList'>
        {allEmojis.map(item => (
        <EmojiItem key={item.title} title={item.title} symbol={item.symbol}/>
        ))}</div>
    </div>
}