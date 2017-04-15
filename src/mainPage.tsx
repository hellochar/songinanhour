import { Button, Intent } from "@blueprintjs/core";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export interface IMainPageProps extends RouteComponentProps<void> {
}

export default class MainPage extends React.Component<IMainPageProps, {}> {
    render() {
        return (
            <div className="main">
                <div className="header">
                    <h1 className="header-title">songinanhour</h1>
                    <p className="header-explanation">
                        Write a song in an hour - we'll help you!
                        It doesn't have to be good.
                        Publish it. Have fun! Profit.
                    </p>
                </div>
                <div className="start-button-container">
                    <Link to="/start">
                        <Button className="start-button" intent={Intent.PRIMARY}>
                            Lets get started!
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
};