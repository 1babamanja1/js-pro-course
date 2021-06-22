import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import './router.css'
import {Clicker} from "./components/Clicker";
import {EmojiList} from "./components/EmojiList/EmojiList.jsx";
import {PostList} from "./components/PostList";
import {ImageList} from "./components/ImageList";
import {FacePost} from "./components/FacePost";
import {Onliner} from "./components/Onliner";


export default function TestRouter() {
    return (
        <div className='router-nav'>
        <Router>
            <div className='navigation'>
            <div className='nav-item'> <Link to="/">Home</Link> </div>
            <div className='nav-item'> <Link to="/clicker">Clicker</Link> </div>
            <div className='nav-item'> <Link to="/emojis">Emoji List</Link> </div>
            <div className='nav-item'> <Link to="/defaultposts">List of Posts</Link> </div>
            <div className='nav-item'> <Link to="/imagelist">List of Images</Link> </div>
            <div className='nav-item'> <Link to="/facebookpost">List of Facebook Posts</Link> </div>
            <div className='nav-item'> <Link to="/onlinerpost">List of Onliner Posts</Link> </div>
            </div>
            <div className='router-body'>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/clicker">
                        <Clicker />
                    </Route>
                    <Route path="/emojis">
                        <EmojiList />
                    </Route>
                    <Route path="/defaultposts">
                        <PostList />
                    </Route>
                    <Route path="/imagelist">
                        <ImageList />
                    </Route>
                    <Route path="/facebookpost">
                        <FacePost />
                    </Route>
                    <Route path="/onlinerpost">
                        <Onliner/>
                    </Route>
                </Switch>
            </div>
        </Router>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );

}
