import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Header} from "./components/Header";
import {Clicker} from "./components/Clicker";
import {EmojiList} from "./components/EmojiList/EmojiList.jsx";
import {PostList} from "./components/PostList";
import {ImageList} from "./components/ImageList";
import {FacePost} from "./components/FacePost";
import {Onliner} from "./components/Onliner";

export default function TestRouter(){
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/clicker">Clicker</Link>
                </li>
                <li>
                    <Link to="/emoji">List of Emoji</Link>
                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/images">List of Images</Link>
                </li>
                <li>
                    <Link to="/facebook">Facebook</Link>
                </li>
                <li>
                    <Link to="/onliner">Onliner</Link>
                </li>
            </ul>

            },
            <Switch>
                <Route exact path="/">
                    <Header/>
                </Route>
                <Route path="/clicker">
                    <Clicker />
                </Route>
                <Route path="/emoji">
                    <EmojiList />
                </Route>
                <Route path="/posts">
                    <PostList />
                </Route>
                <Route path="/images">
                    <ImageList />
                </Route>
                <Route path="/facebook">
                    <FacePost />
                </Route>
                <Route path="/onliner">
                    <Onliner />
                </Route>
            </Switch>
        </div>
    </Router>
}

