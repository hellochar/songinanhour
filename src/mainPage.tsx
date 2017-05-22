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
                    <p className="header-explanation">Use any software and tools available to you to
                        make. Add lyrics, or don't. Make crazy noise.
                        Explore a new chord progression or melody.
                    </p>
                    <p className="header-explanation">
                        When you feel like you have something (or the hour is up),
                        upload your song to soundcloud or YouTube and click "I'm done!" and use the hashtag "#songinanhour"!
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
