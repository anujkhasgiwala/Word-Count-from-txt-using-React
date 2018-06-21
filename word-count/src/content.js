import React, {Component} from 'react';
import './index.css';

class Content extends Component {
    render() {
        return (
            <div className="__content">
                <div className="card">
                    <div className="__card-content">
                        <div className="box">
                            <div className="field">
                                <div className="file has-name">
                                    <label className="file-label">
                                        <input className="file-input" type="file" name="wordFile" accept=".txt" />
                                                <span className="file-cta">
                                                    <span className="file-icon">
                                                        <i className="fas fa-upload"></i>
                                                    </span>
                                                    <span className="file-label">Choose a txt file</span>
                                                </span>
                                            <span className="file-name"></span>
                                    </label>
                                    <input type="submit" className="button is-right" placeholder="Finish" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}