import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { SocailBlock, Social } from "./socailBlockStyle";
import { FormItem } from "../../styles/form";
import { P } from "../../styles/text";
import { socialLogin } from "./socaialAction";

export class socialBlockComponent extends Component {

    loginSocial = (data) => () => {
        this.props.dispatch(socialLogin(data, () => {
            this.props.history.push("/");
        }));
    }

    render() {
        return (
            <Fragment>
                <SocailBlock>
                    <FormItem >
                        <Social bc="blue" onClick={this.loginSocial("facebook")}>
                            <P p="10px" color="white">Login With Facebook</P>
                        </Social>
                    </FormItem>
                    <FormItem >
                        <Social bc="red" onClick={this.loginSocial("google")}>
                            <P p="10px" color="white">Login With Google</P>
                        </Social>
                    </FormItem>
                </SocailBlock>
            </Fragment>
        )
    }
}

export default connect()(socialBlockComponent);
