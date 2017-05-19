import * as React from "react";
import { RouteComponentProps } from "react-router";

export interface IFinishPageProps extends RouteComponentProps<void> {
}

export default class FinishPage extends React.Component<IFinishPageProps, {}> {
    render() {
        return (
            <div className="finish-page">
                <div className="finish-page-congratulator">Congrats! You made a song in an hour!!!!!</div>
            </div>
        )
    }
};
