import React, { Component } from 'react';
import SearchBox from './SearchBox';
import Definitions from './Definitions';
import Synonyms from './Synonyms';
import Spinner from './images/spin1.gif';


class Thesaurus extends Component {
    constructor() {
        super();
        this.state = {
            'currentWord': '',
            'notFound': false,
            'definitions': [],
            'synonyms': [],
            'spinner': false
        }
        this.apiUrl = 'https://wordsapiv1.p.mashape.com/words/';
        this.headers = new Headers();
        this.headers.append('X-Mashape-Key', 'MW8P1cLprJmshJrwI7PuhElx6f60p1dMwkkjsnvssrtrJ70AmI');

        this.getDefinitions = this.getDefinitions.bind(this);
        this.changeWord = this.changeWord.bind(this);
    }

    getSynonyms(word) {
        fetch(`${this.apiUrl}${word}/synonyms`, { method: 'GET', headers: this.headers })
            .then((response) => {
                if (!response.ok) {
                    throw Error();
                }
                response.json().then((data) => {
                    this.setState({ 'synonyms': data.synonyms });
                })
            }).catch((error) => {
                console.log('Request failed', error);
            });
    }

    getDefinitions(word) {
        this.setState({
            'spinner':true,
            'currentWord': word,
            'definitions': [],
            'synonyms': []})
        fetch(`${this.apiUrl}${word}/definitions`, { method: 'GET', headers: this.headers })
            .then((response) => {
                if (!response.ok) {
                     Error();
                }
                response.json().then((data) => {
                    this.setState({ 'currentWord': data.word, 'notFound': false });

                    let defs = data.definitions;
                    if (defs.length > 0) {
                        var result = defs.reduce(function (r, a) {
                            r[a.partOfSpeech] = r[a.partOfSpeech] || [];
                            r[a.partOfSpeech].push(a);
                            return r;
                        }, Object.create(null));

                        var viewResult = [];
                        for (const [key, value] of Object.entries(result)) {
                            viewResult.push({ key: key, value: value });
                        }
                        this.setState({ 
                            'definitions': viewResult,
                            'spinner': false   
                        });
                        this.getSynonyms(word);
                        
                    }
                });
            }).catch((error) => {
                this.setState({
                    'currentWord': word,
                    'notFound': true,
                    'definitions': [],
                    'synonyms': [],
                    'spinner': false
                });
            });
    }

    changeWord(e) {
        e.preventDefault();
        this.setState({
            'currentWord': ''
        });
        this.getDefinitions(e.target.innerHTML);
    }

    render() {
        let haveWord = (this.state.currentWord) ? true : false;
        let showSpinner = (this.state.spinner && haveWord) ? true : false;
        return (
            <div>
                <SearchBox getDefs={this.getDefinitions} inputWord={this.state.currentWord} />
                <div className="jumbotron">
                    {haveWord ?
                        <div className="font-weight-bold">
                            <div className="container">
                                <Definitions noResults={this.state.notFound} searchWord={this.state.currentWord} defs={this.state.definitions} />
                                <Synonyms syns={this.state.synonyms} wordClicked={this.changeWord} />
                            </div>
                        </div>
                        : <div class="defaultText">Enter a word to lookup the definition and synonyms.</div>
                    }
                    {showSpinner ?
                        <div class="spinner"><img src={Spinner} alt="fetch word" /></div> : null
                    }
                </div>
            </div>
        )
    }
}

export default Thesaurus;