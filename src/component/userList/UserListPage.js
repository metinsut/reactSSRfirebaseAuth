import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from '../../actions';
import { Helmet } from "react-helmet";
import { renderRoutes } from 'react-router-config';

class UsersList extends Component {
   componentDidMount() {
      this.props.fetchUsers();
   }

   renderUsers() {
      return this.props.users.map((user, key) => {
         return <li key={key}>{user.name}
         <Link to={"/users/"+user.id}>{user.id}</Link>
         </li>
      })
   }

   head() {
      return (
         <Helmet>
            <title>{`${this.props.users.length} Users Loaded`}</title>
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
            <h1>List of users:</h1>
            <ul>{this.renderUsers()}</ul>
            {renderRoutes(this.props.route.routes)}
         </Fragment>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      users: state.users
   }
}

const loadData = (store) => {
   return store.dispatch(fetchUsers());
}

export default {
   loadData,
   component: connect(mapStateToProps, { fetchUsers })(UsersList)
} 