import React, { Fragment } from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <Fragment>
            <h1>PAGE NOT FOUND</h1>
        </Fragment>
    )
};

export default {
    component: NotFoundPage
}