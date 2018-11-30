import React from 'react';
import ReactDOM from 'react-dom';
import '../webapp/css/custom.css';
import Counter from './Counter';
import MyName from './MyName';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';
 
 
class MainPage extends React.Component {
    id = 2
    state = {
        information: [
        {
            id: 0,
            name: '김민준',
            phone: '010-0000-0000'
        },
        {
            id: 1,
            name: '홍길동',
            phone: '010-0000-0001'
        }
        ]
    }
    handleCreate = (data) => {
        const { information } = this.state;
        this.setState({
          information: information.concat({ id: this.id++, ...data })
        })
      }
    render() {
        const { information } = this.state;
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
                    <MyName  />
                    <Counter/>
                    <PhoneForm 
                      onCreate={this.handleCreate}/>
                    {JSON.stringify(information)}

                    <PhoneInfoList data={this.state.information}/>
                </div>
            </div>
        );
    }
 
}
 
ReactDOM.render(<MainPage/>, document.getElementById('root'));


