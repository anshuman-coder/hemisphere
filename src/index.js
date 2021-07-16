import React from 'react';
import ReactDOM from "react-dom";
import HemisphereDisplay from './HemisphereDisplay';

class App extends React.Component {

  state = {
    latitude: null,
    errorMessage: ''
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude })
      },
      (error) => {
        this.setState({ errorMessage: error.message })
       }
    );

  }

  render() {
    if (this.state.latitude && !this.state.errorMessage) {
      return  <HemisphereDisplay latitude={ this.state.latitude } />
    }
    if (!this.state.latitude && this.state.errorMessage) {
      return <h1> { this.state.errorMessage } </h1>
    }
    else {
      return <h1> Loading... </h1>
     }
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)