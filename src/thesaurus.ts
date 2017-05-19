export interface BigHugeLabsResult {
    [category: string]: {
        syn: string[];
    }
}

export function getRelatedWords(word: string): Promise<string[]> {
    return window.fetch(`https://words.bighugelabs.com/api/2/eae4d380bb9c1a54923a46238135c84a/${word}/json`)
        .then((blob) => blob.json())
        .then((obj: BigHugeLabsResult) => {
            const returnArray: string[] = [];
            Object.keys(obj).forEach((category) => { // "noun", "verb"
                returnArray.push(...obj[category].syn);
            });
            return returnArray;
        });
}