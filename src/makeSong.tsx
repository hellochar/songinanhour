import * as React from "react";
import { RouteComponentProps } from "react-router";
import moment = require("moment");
import { Link } from "react-router-dom";
import { Button, Intent } from "@blueprintjs/core";
import Inspiration from "./inspiration/index";
import WordCloud from "./wordCloud";

export type IMakeSongProps = RouteComponentProps<{ startTime: number }>;

export interface IMakeSongState {
    // ms since the epoch
    endTime: number;
    // current countdown
    now: number;
}

const ONE_HOUR_IN_MS = 1000 * 60 * 60;

const TWO_DIGIT_FORMATTER = new Intl.NumberFormat(undefined, {minimumIntegerDigits: 2});

export default class MakeSong extends React.Component<IMakeSongProps, IMakeSongState> {
    state = {
        endTime: Date.now() + ONE_HOUR_IN_MS,
        now: Date.now(),
    };

    private setIntervalHandle: number | null;

    componentDidMount() {
        // render the new time immediately, otherwise we miss 59:59
        this.setState({
            now: Date.now()
        });

        this.setIntervalHandle = setInterval(() => {
                this.setState({
                    now: Date.now()
                })
            },
            // update at 500ms intervals or else we sometimes miss seconds
            500
        );
    }

    componentWillUnmount() {
        if (this.setIntervalHandle != null) {
            clearInterval(this.setIntervalHandle);
            this.setIntervalHandle = null;
        }
    }

    render() {
        const remainingMs = this.state.endTime - this.state.now;
        const duration = moment.duration(remainingMs);
        const minutesRemaining = duration.minutes();
        const secondsRemaining = duration.seconds();
        const formattedDuration = `${TWO_DIGIT_FORMATTER.format(minutesRemaining)}:${TWO_DIGIT_FORMATTER.format(secondsRemaining)}`;
        const donePercentage = remainingMs / ONE_HOUR_IN_MS;
        const progressMeterLineStyles: React.CSSProperties = {
            left: `${donePercentage * 100}%`
        };
        return (
            <div className="make-song-container">
                <div className="motivation">
                    Have fun!
                </div>
                <div className="inspiration-container">
                    <Inspiration></Inspiration>
                </div>
                <div className="inspiration-container">
                    <WordCloud></WordCloud>
                </div>
                <div className="footer">
                    <div className="make-song-countdown">
                        {formattedDuration}
                    </div>
                    <div className="progress-meter">
                        <div className="progress-meter-line" style={progressMeterLineStyles}></div>
                    </div>
                    <div className="finish-button-container">
                        <Link to="/finish">
                            <Button className="finish-button" intent={Intent.PRIMARY}>I'm done!</Button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}