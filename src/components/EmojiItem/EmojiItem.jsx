import './emojiItem.css'

export const EmojiItem = ({title, symbol}) => {
    return (
        <div class='emoji'>
            {symbol} {title}
        </div>
    )
}