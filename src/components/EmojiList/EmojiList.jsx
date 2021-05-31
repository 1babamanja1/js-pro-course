import './emojiList.css'
import { EmojiItem } from '../EmojiItem/EmojiItem'
import allEmojis from './emojiList.json'

const List = (
    allEmojis.map(item => (
        <EmojiItem key={item.title} title={item.title} symbol={item.symbol}/>
    )));

export const EmojiList = () => {

    return <div class='emojiList'>{List}</div>
}