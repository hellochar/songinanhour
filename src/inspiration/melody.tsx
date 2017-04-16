import * as _ from "lodash";
import * as React from "react";

const PITCH_CLASSES = [ "A", "B", "C", "D", "E", "F", "G" ];
const ACCIDENTALS = ["", "", "", "", "", "", "#", "b"];

const getRandomNote = () => _.sample(PITCH_CLASSES) + _.sample(ACCIDENTALS);

const MelodyInspiration = () => {
    const progression = _.times(_.random(4, 9), () => getRandomNote());
    return (
        <p>
            Use this melody:
            <pre>{progression.join(" ")}
            </pre>
        </p>
    );
};

export default MelodyInspiration;
