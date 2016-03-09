var React = require('react');

var SearchBox = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onSearch(this.refs.searchIn.value);
        this.refs.searchIn.value = '';
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col-xs-12 form-group">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="col-xs-12 form-control"
                                style={{background: '#ec3333', border: 'none', color: '#FFF'}}
                                onChange={this.onChange}
                                ref="searchIn"/>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = SearchBox;
