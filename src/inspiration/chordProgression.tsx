import * as _ from "lodash";
import * as React from "react";

const baseNumbers = [
    "I", "i", "II", "ii", "III", "iii", "IV", "iv",
    "V", "v", "VI", "vi", "VII", "vii",
];
const modifiers = ["", "", "", "", "", "", "7", "7", "dim"];
const getRandomChord = () => _.sample(baseNumbers) + _.sample(modifiers);

const ChordProgressionInspiration = () => {
    const progression = _.times(4, () => getRandomChord());
    return (
        <p>
            Write a song with this chord progression
            <pre>{progression.join(" -> ")}
            </pre>
        </p>
    );
};

export default ChordProgressionInspiration;
