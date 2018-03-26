import * as React from 'react';
import { ThemeProvider, Input, Button, COLORS } from '@tasky/ui';
import './App.css';

const logo = require('./logo.svg');

const handleChange = nextVal => {
    // tslint:disable-next-line:no-console
    console.log(nextVal);
};

class App extends React.Component {
  render() {
    return (
        <ThemeProvider theme={{primary: COLORS.MINT}}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <Input value="123" onChange={handleChange} />
                    <Button onClick={() => null}>Click me</Button>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
            </div>
        </ThemeProvider>
    );
  }
}

export default App;
