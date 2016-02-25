var React = require('react');
var Button = require('./Button.jsx');

var Calculator = React.createClass({
    getInitialState: function() {
        return {value: ""};
    },
    onClick: function() {

    },
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <input type="" className="form-control col-xs-12" placeholder="" value={this.state.value} />
                    <Button type="number" value="1" onClick={this.onClick.bind(this, "1")} />
                    <Button type="number" value="2" onClick={this.onClick.bind(this, "2")} />
                    <Button type="number" value="3" onClick={this.onClick.bind(this, "3")} />
                    <Button type="info" value="+" onClick={this.onClick.bind(this, "+")} />
                    <Button type="number" value="4" onClick={this.onClick.bind(this, "4")} />
                    <Button type="number" value="5" onClick={this.onClick.bind(this, "5")} />
                    <Button type="number" value="6" onClick={this.onClick.bind(this, "6")} />
                    <Button type="info" value="-" onClick={this.onClick.bind(this, "-")} />
                    <Button type="number" value="7" onClick={this.onClick.bind(this, "7")} />
                    <Button type="number" value="8" onClick={this.onClick.bind(this, "8")} />
                    <Button type="number" value="9" onClick={this.onClick.bind(this, "9")} />
                    <Button type="info" value="/" onClick={this.onClick.bind(this, "/")} />
                    <Button type="clear" value="C" onClick={this.onClick.bind(this, "C")} />
                    <Button type="number" value="0" onClick={this.onClick.bind(this, "0")} />
                    <Button type="eval" value="=" onClick={this.onClick.bind(this, "=")} />
                    <Button type="info" value="*" onClick={this.onClick.bind(this, "*")} />
                </div>
            </div>
        );
    }
});

module.exports = Calculator;
