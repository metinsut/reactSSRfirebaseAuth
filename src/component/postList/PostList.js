import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { fetchPosts } from '../../actions';
import { Helmet } from "react-helmet";

class PostList extends Component {
   componentDidMount() {
      this.props.fetchPosts();
   }

   renderUsers() {
      return this.props.posts.map((post, key) => {
         return <li key={key}>{post.title}</li>
      })
   }

   head() {
      return (
         <Helmet>
            <title>User Posts</title>
            <meta name="description" content="Users List" />
            <meta property="og:title" content="Users App" />
            <meta property="og:description" content="Users App Test Desc." />
         </Helmet>
      )
   }

   render() {
      return (
         <Fragment>
            {this.head()}
            <h1>Posts</h1>
            <ul>{this.renderUsers()}</ul>
         </Fragment>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      posts: state.posts
   }
}

const loadData = (store) => {
   return store.dispatch(fetchPosts());
}

export default {
   loadData,
   component: connect(mapStateToProps, { fetchPosts })(PostList)
} 