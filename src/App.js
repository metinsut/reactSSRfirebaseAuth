import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import HeaderComponent from './component/header/header.js';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
    box-sizing:border-box;
  }
  ul {
    list-style: none;
  }
`


const App = ({ route }) => {
    return (
        <Fragment>
            <GlobalStyle />
            <HeaderComponent />
            {renderRoutes(route.routes)}
        </Fragment>
    )
};

export default {
    component: App
};