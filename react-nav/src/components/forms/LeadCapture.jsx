var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({
    getInitialState: function() {
        return { success: false };
    },
    onSubmit: function(e) {
        if (!this.refs.fieldEmail.state.valid) {
            alert('Please enter a valid email!');
        } else {
            // Send request to email host or server
            var httpRequestBody = {
                email: this.refs.fieldEmail.state.value,
                name: this.refs.fieldName.state.value
            };
            console.log('Info: ' + httpRequestBody.name + ' | ' + httpRequestBody.email);

            this.refs.fieldName.clear();
            this.refs.fieldEmail.clear();

            this.setState({success: true});
        }
    },
    render: function() {
        var successStyle = {
            color: 'green',
            visibility: this.state.success ? 'visible' : 'hidden'
        };

        return (
            <div className="col-sm-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>Get Free Stuff</h4>
                    </div>
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName" />
                        <EmailField ref="fieldEmail" />
                        <div className="row">
                            <div className="col-sm-6">
                                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                            </div>
                            <div className="col-sm-2">
                                <h5 style={successStyle}>Success</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;
