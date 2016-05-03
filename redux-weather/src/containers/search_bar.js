import React, { Component } from 'react';
import { connect } from  'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        // bind this to functions
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    onSubmitForm(e) {
        e.preventDefault();

        // fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className="input-group" onSubmit={this.onSubmitForm}>
                <input
                    placeholder="Get a five-day forecast in your favorite cities"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
