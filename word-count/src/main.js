import React from "react";
import ReactDOM from "react-dom";

import Header from "./header";
import SideBar from "./sideBar";
import CardContent from "./cardContent";

ReactDOM.render(<Header />, document.getElementsByClassName('__main')[0]);
ReactDOM.render(<SideBar />, document.getElementsByClassName('__main')[0]);
ReactDOM.render(<CardContent />, document.getElementsByClassName('__main')[0]);

const Main = () => (
    <div className="main">
        <Header />
        <SideBar />
        <CardContent />
    </div>
);

export default Main;