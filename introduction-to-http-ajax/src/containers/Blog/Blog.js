import React, { Component,Suspense } from 'react';
import  Posts from './Posts/Posts';
import './Blog.css';
// import { Route,Link } from 'react-router-dom';
import { Route,NavLink,Switch,Redirect } from 'react-router-dom';
//import NewPost from './NewPost/NewPost';
// import asyncComponent from '../../hoc/asyncComponent';
// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });
const NewPost=React.lazy(() => import('./NewPost/NewPost'));
class Blog extends Component {
    state={
        auth:true
    }
  
    render () {

       
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" 
                            exact
                            activeClassName="my-active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration:'underline'
                            }}
                            >Posts</NavLink></li>   {/* activeClassName="active"*/}
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash: '#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*
                <Route path="/" exact render={()=> <h1>Home</h1>}/>
                <Route path="/" render={()=> <h1>Home</h1>}/>

                */}
                 
                <Switch>}
                    {/* {this.state.auth ? <Route path="/new-post" component = {AsyncNewPost}/>:null */}
                    {this.state.auth ? <Route path="/new-post"
                     render={() => <Suspense fallback={<div>Loading...</div>}><NewPost/></Suspense>}/>:null}
                    <Route path="/posts"  component ={Posts}/>
                    <Route render={() => <h2>Not Found</h2>}/>
                    {/* <Redirect from ="/" to ="/posts" /> */}
                    {/* <Route path="/"  component ={Posts}/> */}
                </Switch>
                
                
                
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;