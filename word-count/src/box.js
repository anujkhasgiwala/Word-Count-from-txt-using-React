import React from 'react';
import './index.css';
import ReadFile from "./fileRead";
import ReactDOM from "react-dom";

const file = React.createRef();

class Box extends React.Component {
    constructor(props) {
        super(props);

        //this.onFileSubmit = this.onFileSubmit.bind(this);

        this.state = {
            fileName: "",
        }
    }

    fileName(event) {
        //Using Javascript its much easier and less code to add new tag
        /*var span = document.getElementsByClassName("file-label")[0].appendChild(document.createElement('span'));
        span.className = 'file-name';
        span.innerHTML = document.getElementsByTagName("input")[0].split(/(\\|\/)/g).pop();*/


        //used the react rendering but it gives an error but still code runs.
        const fileName = event.target.value;

        const spanElement = (
            <label className="file-label">
                <input className="file-input" type="file" name="txtFile" accept=".txt" />
                <span className="file-cta">
                    <span className="file-icon">
                        <i className="fas fa-upload"/>
                    </span>
                    <span className="file-label">Choose a txt file</span>
                </span>
                <span className="file-name">{fileName.split(/(\\|\/)/g).pop()}</span>
            </label>
        );

        ReactDOM.render(spanElement, document.getElementsByClassName("file-label")[0]);
    }

    onFileSubmit() {
        new ReadFile(file.current.files[0]);
    }

    render() {
        return (
            <div className="__card-content">
                <div className="box">
                    <div className="field">
                        <div className="file has-name">
                            <label className="file-label">
                                <input className="file-input" type="file" name="txtFile"
                                       accept=".txt" onChange={this.fileName} ref={file} />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"/>
                                    </span>
                                    <span className="file-label">Choose a txt file</span>
                                </span>
                            </label>
                            <input type="submit" className="button is-right" onClick={this.onFileSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} export default Box;