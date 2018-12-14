import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { P, H2 } from "../../styles/text";

class FirebaseComponent extends Component {

    render() {
        const { detail } = this.props;
        return (
            <div>
                {
                    detail && [...detail].map((item, i) => (
                        <ul key={i}>
                            <li><H2 dark>{item.id}</H2></li>
                            <li><P dark>{item.color}</P></li>
                            <li><P dark>{item.size}</P></li>
                            <li><P dark>{item.boolen ? "true" : "false"}</P></li>
                        </ul>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        detail: state.firestore.ordered.detail ? state.firestore.ordered.detail : null
    }
}

const loadData = (state) => {
    firestoreConnect(['detail']);
}

const FirebaseComp = compose(
    firestoreConnect(['detail']),
    connect(mapStateToProps)
)(FirebaseComponent)

export default {
    loadData,
    component: FirebaseComp
};