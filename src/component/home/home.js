import React, { Component } from 'react';
import { Section } from "./homeStyle";
import { P } from "../../styles/text";

class HomeComponent extends Component {
    render() {
        return (
            <Section>
                <P dark>Home</P>
            </Section>
        )
    }
}

export default {
    component: HomeComponent
};