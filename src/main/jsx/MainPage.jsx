import '../webapp/css/custom.css';
 
import React from 'react';
import ReactDOM from 'react-dom';
 
class MainPage extends React.Component {
 
    render() {
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        };
        return (
        <div className="App" style={style}>
            hi there
        </div>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));


