/**
 * @jsx React.DOM
 */
var RadioButtons = React.createClass({
  getDefaultProps: function () {
    return {
      values: [],
      value: null,
      onChange: function () {}
    };
  },
  getInitialState: function () {
    return {
      value: this.props.value
    };
  },
  componentWillReceiveProps: function (props) {
    this.setState({
      value: props.value
    });
  },
  setValue: function (value) {
    var prevValue = this.state.value;
    var newValue = value === prevValue ? null : value;
    this.setState({
      value: newValue
    });
    this.props.onChange(newValue, prevValue);
  },
  renderValue: function (value) {
    var classes = ["radio_buttons-value"];
    if (value === this.state.value) {
      classes.push("radio_buttons-value--state-selected");
    }
    return (
      <div class={classes.join(" ")}
           onClick={this.setValue.bind(this, value)}>{value}</div>
    );
  },
  render: function () {
    return (
      <div class="radio_buttons">
        {this.props.values.map(this.renderValue.bind(this))}
      </div>
    );
  }
});


var TestPage = React.createClass({
  getDefaultProps: function () {
    return {
      values: ["A", "B", "C"],
      value: "B"
    };
  },
  getInitialState: function () {
    return {
      value: this.props.value
    };
  },
  handleChange: function (value) {
    this.setState({
      value: value
    });
  },
  render: function () {
    return (
      <div>
        <RadioButtons values={this.props.values} value={this.state.value} onChange={this.handleChange} />
        <RadioButtons values={this.props.values} value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
});


React.renderComponent(
  <TestPage />,
  document.getElementById("test-page")
);
