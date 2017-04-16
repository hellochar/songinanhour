import * as _ from "lodash";
import * as React from "react";

const EMOTIONAL_WORDS = [
    "Serenity",	"Pensiveness",	"Joy",	"Sadness",	"Ecstasy",	"Grief",
    "Acceptance",	"Boredom",	"Trust",	"Disgust",	"Admiration",	"Loathing",
    "Apprehension",	"Annoyance",	"Fear",	"Anger",	"Terror",	"Rage",
    "Distraction",	"Interest",	"Surprise",	"Anticipation",	"Amazement",	"Vigilance",
];

const EmotionalWordsInspiration = () => {
    const word = _.sample(EMOTIONAL_WORDS).toLowerCase();

    return (
        <p>
            Write a song that evokes {word}.
        </p>
    );
};

export default EmotionalWordsInspiration;
