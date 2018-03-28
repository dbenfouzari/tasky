import * as React from 'react';
import { ThemeProvider, Input, Button, COLORS, Navbar, DefaultLayout } from '@tasky/ui';

const handleChange = nextVal => {
    // tslint:disable-next-line:no-console
    console.log(nextVal);
};

class App extends React.Component {
  render() {
    return (
        <ThemeProvider theme={{ primary: COLORS.MATERIAL.GREENSEA }}>
            <DefaultLayout>
                <Navbar title="Tasky" fixed={true} />

                <Input value="123" onChange={handleChange} />
                <Button onClick={() => null}>Click me</Button>
            </DefaultLayout>
        </ThemeProvider>
    );
  }
}

export default App;
