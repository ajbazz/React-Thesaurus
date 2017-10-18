import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { DebounceInput } from 'react-debounce-input';

class SearchBox extends Component {
    render() {
        return (
            <div className="searchBox">
                <Row className="show-grid">
                    <Col md={4}></Col>
                    <Col md={4}>
                        <DebounceInput
                            autoFocus
                            className="form-control"
                            minLength={2}
                            debounceTimeout={1000}
                            onChange={event => this.props.getDefs(event.target.value)}
                            value={this.props.inputWord}
                        />
                    </Col>
                    <Col md={4}></Col>
                </Row>
            </div>
        )
    }
}

export default SearchBox;