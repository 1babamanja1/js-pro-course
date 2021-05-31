import './App.css';
import { Clicker } from './components/Clicker/Clicker'
import { EmojiList } from './components/EmojiList/EmojiList.jsx'
// import { PostList } from './components/PostList/PostList'

function App() {
  return (
    <div className="App">
        <Clicker />
        <EmojiList />
        {/*<PostList />*/}
    </div>
  );
}

export default App;
