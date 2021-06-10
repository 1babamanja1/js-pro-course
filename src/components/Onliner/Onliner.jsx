import './onliner.css'
import onlinerList from './onlinerAPI.json'
import { OnlinerPost } from "../OnlinerPost";

function getID() {
    return "_" + Math.random().toString(36).substr(2, 9);
}
export const Onliner = () => {
    return onlinerList.map(item =>
        <OnlinerPost
            key={getID()}
            backgroundImage={item.backgroundImageUrl}
            category={item.category}
            onlinerTitle={item.title}
            onlinerTitle2={item.title2}
            callout={item.commentCount}
        />)
}