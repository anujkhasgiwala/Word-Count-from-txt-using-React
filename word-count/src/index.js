import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(<body />, document.getElementById('root'));

class Main extends Component {
    render() {
        return (
            <div className="__main">
                <div className="main">
                    <script src="header.js"></script>
                    <script src="sideBar.js"></script>
                    <script src="content.js"></script>
                </div>
            </div>
        )
    }
}