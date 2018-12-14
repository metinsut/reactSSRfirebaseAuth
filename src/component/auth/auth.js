import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from "react-redux-firebase";

export default ChildComponent => {
   class ComposedComponent extends Component {
      componentDidMount() {
         this.shouldNavigateAway();
      }
      componentDidUpdate() {
         this.shouldNavigateAway();
      }
      shouldNavigateAway() {
         if (this.props.auth.isLoaded && !this.props.auth.isEmpty) {
            this.props.history.push('/');
         }
      }
      render() {
         return <ChildComponent {...this.props} />;
      }
   }
   const mapStateToProps = state => {
      return {
         auth: state.firebase.auth
      }
   }
   return withFirebase(connect(mapStateToProps)(ComposedComponent));
};