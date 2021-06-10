import './emojiItem.css'

export const EmojiItem = ({title, symbol}) => {
    return (
        <div className='emoji'>
            {symbol} {title}
        </div>
    )
}