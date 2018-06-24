import React from 'react';
import './index.css';
import ReadFile from "./fileRead";

class Box extends React.Component {
    constructor(props) {
        super(props);

        this.onFileSubmit = this.onFileSubmit.bind(this);
    }

    fileName() {
        var span = document.getElementsByClassName("file-label")[0].appendChild(document.createElement('span'));
        span.className = 'file-name';
        span.innerHTML = document.getElementsByTagName("input")[0].value.split(/(\\|\/)/g).pop();
        document.getElementsByTagName("input")[1].disabled = false;
    }

    onFileSubmit() {
        new ReadFile(document.getElementsByTagName("input")[0].files[0], "content");
    }

    render() {
        return (
            <div className="__card-content">
                <div className="box">
                    <div className="field">
                        <div className="file has-name">
                            <label className="file-label">
                                <input className="file-input" type="file" name="txtFile"
                                       accept=".txt" onChange={this.fileName}/>
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"/>
                                    </span>
                                    <span className="file-label">Choose a txt file</span>
                                </span>
                            </label>
                            <input type="submit" className="button is-right"
                                   placeholder="Finish" disabled={true} onClick={this.onFileSubmit}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} export default Box;