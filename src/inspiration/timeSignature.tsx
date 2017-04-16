import * as _ from "lodash";
import * as React from "react";

const POSSIBLE_NUMBER_BEATS_PER_BAR = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const POSSIBLE_BEAT_UNITS = [2, 4, 8];

const TimeSignatureInspiration = () => {
    const top = _.sample(POSSIBLE_NUMBER_BEATS_PER_BAR);
    const bottom = _.sample(POSSIBLE_BEAT_UNITS);
    return (
        <p>
            Play in the
            <div className="time-signature">
                <div className="time-signature-top">{top}</div>
                <div className="time-signature-bottom">{bottom}</div>
            </div>
            time signature!
        </p>
    );
};

export default TimeSignatureInspiration;
