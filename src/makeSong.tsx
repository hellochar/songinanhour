import * as React from "react";
import { RouteComponentProps } from "react-router";

export type IMakeSongProps = RouteComponentProps<{ startTime: number }>;

export default class MakeSong extends React.Component<IMakeSongProps, {}> {
    render() {
        return <h1>Making a song!</h1>;
    }
}