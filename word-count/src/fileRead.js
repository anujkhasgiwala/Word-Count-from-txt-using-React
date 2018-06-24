import React from "react";
import "./index.css";
import ReactDOM from "react-dom";

var fileContent;

class ReadFile extends React.Component {
    constructor(props) {
        super(props);

        this.readTextFile(props);
    }

    readTextFile = file => {
        var raw = new FileReader();
        raw.onload = function(event) {
            fileContent = event.target.result;

            this.alterElements();
            this.renderTags();
        }.bind(this);

        raw.readAsText(file);
    };

    alterElements() {
        //Using Javascript its much easier and less code to remove or alter tags
        /*var cardContentDiv = document.getElementsByClassName("box")[0];
        cardContentDiv.parentNode.removeChild(cardContentDiv);

        const labelTag = document.createElement("label");
        labelTag.className = "label";
        document.getElementsByClassName("__card-content")[0].appendChild(labelTag);

        cardContentDiv = document.createElement("div");
        cardContentDiv.className = "words";
        document.getElementsByClassName("__card-content")[0].appendChild(cardContentDiv);*/


        //used the react rendering but it gives an error but still code runs.
        const cardContentDiv = (
            <div className="__card-content">
                <label className="label"></label>
                <div className="words"></div>
            </div>
        );

        ReactDOM.render(cardContentDiv, document.getElementsByClassName("card")[0]);
        this.findSpan();
    }

    renderTags() {
        //Using Javascript its much easier and less code to alter tags
        /*var wordsDiv = document.getElementsByClassName("words")[0];
        var words = fileContent.split(" ");
        for (var i in words) {
            //tags.push(React.createElement("span", {key: parseInt(i) + 1}, words[i]));
            var span = document.createElement("span");
            span.id = parseInt(i) + 1;
            span.innerHTML = words[i];
            wordsDiv.appendChild(span);
        }*/

        //used the react rendering but it gives an error but still code runs.
        const words = fileContent.split(" ");
        const spanTags = [];

        for(var i in words) {
            spanTags.push(<span id={parseInt(i, 10) + 1} > {words[i]} </span>)
        }

        ReactDOM.render(spanTags, document.getElementsByClassName("words")[0]);
    }

    findSpan() {
        var cardContentDiv = document.getElementsByClassName("words")[0];
        cardContentDiv.addEventListener('click', function(event) {
            document.getElementsByClassName("label")[0].innerHTML = "You clicked on the word \"" +
                event.target.innerText + "\" which is the \"" + event.target.id + "th\" word in file.";
        });
    }
} export default ReadFile;