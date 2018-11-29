import React from 'react';
import ReactDOM from 'react-dom';
import '../webapp/css/custom.css';
import MyName from './MyName.jsx';
 
 
class MainPage extends React.Component {
 
    render() {
        const style = {
            backgroundColor: 'black',
            padding: '16px',
            color: 'white',
            fontSize: '12px'
        }; 
        return (
            <div>
                <div className="App" style={style}>
                    hi there
                </div>
                <div className="test">
                    <MyName/>
                </div>
            </div>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));


