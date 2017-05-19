import * as Thesaurus from "./thesaurus";
import * as React from "react";

interface IWordCloudState {
    wordCloud: string[] | undefined;
}

export default class WordCloud extends React.PureComponent<{}, IWordCloudState> {
    _searchInput : HTMLInputElement;

    state : IWordCloudState = {
        wordCloud: undefined
    };

    handleSubmit = (event: any) => {
        event.preventDefault();
        Thesaurus.getRelatedWords(this._searchInput.value).then((obj) => this.setState({wordCloud: obj}));
    };

    private printWordCloud() {
        if (this.state.wordCloud != null) {
            return this.state.wordCloud.map((element) => <div key={element}>{element}</div>);
        }
        return <div>Type something into the box!</div>;
    }

    render() {
        return (
            <div className="wordCloud">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref={input => this._searchInput = input}/>
                </form>
                <div>
                    <br/>
                    {this.printWordCloud()}
                </div>
                {/*<Button onClick={this.handleInspirationClick}>*/}
                    {/*Give me some inspiration!*/}
                {/*</Button>*/}
                {/*<div className="current-inspiration">*/}
                    {/*{ this.state.currentInspiration }*/}
                {/*</div>*/}
            </div>
        );
    }
}