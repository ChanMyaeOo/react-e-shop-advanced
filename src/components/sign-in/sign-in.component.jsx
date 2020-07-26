import React from "react";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ password: "", email: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Email</label>

          <input
            type="password"
            name="password"
            required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
