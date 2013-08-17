define(["React", "jsx!components/radio-buttons/radio-buttons"], function (React, RadioButtons) {
  return React.createClass({
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
});
