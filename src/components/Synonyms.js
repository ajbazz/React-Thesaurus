import React, { Component } from 'react';

class Synonyms extends Component {
    render() {
        const words = this.props.syns || [];
        const clicked = this.props.wordClicked || {};
        const synonyms = words.map((word, index) => {
            return <a href="" title={word} onClick={event => clicked(event)} key={`syns_${index}`}>{word}</a>
        })

        return (
            <div>
                {words.length ? 
                    <h5 className="text-left">Synonyms</h5>
                    : null
                }
                <div className="flexCols">
                    {synonyms}
                </div>
            </div>
        )
    }
}

export default Synonyms;