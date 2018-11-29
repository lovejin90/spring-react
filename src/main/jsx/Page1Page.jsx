import React from 'react';
import ReactDOM from 'react-dom';
import '../webapp/css/custom.css';
 

 
class Page1Page extends React.Component {
 
    render() {
        return <div className="page1">Page1 페이s지</div>;
    }
 
}  
 
ReactDOM.render(<Page1Page/>, document.getElementById('root'));