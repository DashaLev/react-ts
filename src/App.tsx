import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";
import {RouteComponentProps} from "react-router";


const App = () => {
    return (
        <div>
            <Router>
                <Link to={'/posts'}>posts</Link>
                <Route exact path={'/posts'} render={() => <Posts/>}/>
                <Route path={'/posts/:id'} render={(props: RouteComponentProps) => <PostDetails {...props}/>}/>
            </Router>
        </div>
    );
}

export default App;