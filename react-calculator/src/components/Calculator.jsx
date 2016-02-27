var React = require('react');
var Button = require('./Button.jsx');

var Calculator = React.createClass({
    getInitialState: function() {
        return {value: ""};
    },
    onClick: function(val, e) {
        var val1 = this.state.value;
        val1 += val;
        this.setState({value: val1});
    },
    onClear: function(e) {
        this.setState({value: ""});
    },
    onChange: function(e) {
        var val = e.target.value;

        this.setState({value: val});
    },
    onEvaluate: function() {
        var val = this.state.value;

        // Addition
        if (val.indexOf('+') !== -1) {
            var pos = val.indexOf('+');
            if (pos === 0 || pos === val.length-1) {
                this.setState({value: ''});
            } else {
                var fn = parseInt(val.substring(0, pos));
                var sn = parseInt(val.substring(pos + 1));
                this.setState({value: fn + sn});
            }
        }

        // Subtraction


        // Multiplication


        // Division

    },
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <div className="col-xs-12">
                        <div className="form-group">
                            <input type="text" className="form-control" onChange={this.onChange} value={this.state.value} />
                        </div>
                    </div>

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
                    <Button type="clear" value="C" onClick={this.onClear} />
                    <Button type="number" value="0" onClick={this.onClick.bind(this, "0")} />
                    <Button type="eval" value="=" onClick={this.onEvaluate} />
                    <Button type="info" value="*" onClick={this.onClick.bind(this, "*")} />
                </div>
            </div>
        );
    }
});

module.exports = Calculator;
