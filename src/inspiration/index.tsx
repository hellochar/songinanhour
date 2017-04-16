import { Button } from "@blueprintjs/core";
import * as _ from "lodash";
import * as React from "react";
import ChordProgressionInspiration from "./chordProgression";
import TimeSignatureInspiration from "./timeSignature";
import EmotionalWordsInspiration from "./emotionalWords";
import MelodyInspiration from "./melody";

const inspirationRegistry = [
    ChordProgressionInspiration,
    TimeSignatureInspiration,
    EmotionalWordsInspiration,
    MelodyInspiration
];

export interface IInspirationState {
    currentInspiration?: JSX.Element;
}

export default class Inspiration extends React.PureComponent<{}, IInspirationState> {
    state = {
        currentInspiration: undefined
    };

    private handleInspirationClick = () => {
        this.setState({
            currentInspiration: _.sample(inspirationRegistry)()
        });
    };

    render() {
        return (
            <div className="inspiration">
                <Button onClick={this.handleInspirationClick}>
                    Give me some inspiration!
                </Button>
                <div className="current-inspiration">
                    { this.state.currentInspiration }
                </div>
            </div>
        );
    }
}
