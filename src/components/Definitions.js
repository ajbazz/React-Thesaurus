import React, { Component } from 'react';

class Definitions extends Component {
    constructor(props) {
        super(props);


        this.errorMsg = 'No results found.';
    }

    render() {
        let wordDefs = this.props.defs;
        let renderDefs = [];

        if (wordDefs !== null || wordDefs.length > 0) {
            wordDefs.forEach(function (entry, idx) {
                renderDefs.push(<strong key={entry.key}>{entry.key} : </strong>);
                entry.value.forEach(function (def, idx2, array) {
                    renderDefs.push(<span key={`${entry.key}${idx2}${idx}`}>{def.definition}{(idx2 !== array.length - 1) ? ", " : ""}</span>);
                })
                renderDefs.push(<br key={`${entry.key}_br${idx}`} />);
                return renderDefs;
            })
        }

        return (
            <div>
                {this.props.noResults ? (<div className="text-center">{this.errorMsg}</div>)
                    : (<span><h3 className="text-left">{this.props.searchWord}</h3> <h5 className="text-left">Definitions</h5></span>)
                }

                <div className="lead">
                    {renderDefs}
                </div>
            </div>
        )
    }
}

export default Definitions;