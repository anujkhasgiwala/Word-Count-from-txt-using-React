import React from 'react';
import './index.css';
import Box from "./box";

class CardContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="__content">
                <div className="card">
                    <Box />
                </div>
            </div>
        );
    }
} export default CardContent;