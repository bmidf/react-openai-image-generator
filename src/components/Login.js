import React from 'react'
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  handleSubmit(event, history) {
    // Perform login

    // Redirect to home page
    history.push('/');
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event, this.props.history)}>
      <label>
        Email:
        <input type="text" />
      </label>
      <label>
        Password:
        <input type="password"  />
      </label>
      <button type="submit">Login</button>
      </form>
    );
  }
}

export default withRouter(LoginForm);