import { Component } from "react";
import { Link } from "react-router-dom";
import withRouter from "../helpers/withRouter";

class NotFound extends Component {
  render() {
    console.log("PROPS OF NOT FOUND", this.props.router);
    return (
      <div>
        <h1>404 - Page not found</h1>
        <h3>the not found path is: {this.props.router.location.pathname}</h3>
        <h3>This is not the page you were looking for :(</h3>
        <h4>
          Click <Link to="/">here</Link> to go home
        </h4>
      </div>
    );
  }
}

export default withRouter(NotFound);
