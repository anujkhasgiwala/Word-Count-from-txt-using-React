import React from 'react';
import './index.css';
import Box from "./box";

class CardContent extends React.Component {
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