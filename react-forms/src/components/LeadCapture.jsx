var React = require('react');
var NameField = require('./NameField.jsx');
var EmailField = require('./EmailField.jsx');

var LeadCapture = React.createClass({
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
        }
    },
    render: function() {
        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName" />
                        <EmailField ref="fieldEmail" />
                        <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LeadCapture;
