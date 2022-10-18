import React from 'react';
import logo from './logo.svg';
import './App.css';

const delay = (ms) => {
    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}

const App = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then(async (data) => {
                await delay(1000)
                setData(data.message)
            });
    }, []);

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>{data ? data : 'Loading...'}</p>
            </header>
        </div>
    );
}

export default App;
