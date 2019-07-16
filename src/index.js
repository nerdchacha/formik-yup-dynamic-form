import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
