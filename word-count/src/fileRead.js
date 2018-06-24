import React from "react";
import "./index.css";

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
        var cardContentDiv = document.getElementsByClassName("box")[0];
        cardContentDiv.parentNode.removeChild(cardContentDiv);

        const labelTag = document.createElement("label");
        labelTag.className = "label";
        document.getElementsByClassName("__card-content")[0].appendChild(labelTag);

        cardContentDiv = document.createElement("div");
        cardContentDiv.className = "words";
        document.getElementsByClassName("__card-content")[0].appendChild(cardContentDiv);
        this.findSpan();
    }

    renderTags() {
        var wordsDiv = document.getElementsByClassName("words")[0];
        var words = fileContent.split(" ");
        for (var i in words) {
            //tags.push(React.createElement("span", {key: parseInt(i) + 1}, words[i]));
            var span = document.createElement("span");
            span.id = parseInt(i) + 1;
            span.innerHTML = words[i];
            wordsDiv.appendChild(span);
        }
    }

    findSpan() {
        var cardContentDiv = document.getElementsByClassName("words")[0];
        cardContentDiv.addEventListener('click', function(event) {
            document.getElementsByClassName("label")[0].innerHTML = "You clicked on the word \"" +
                event.target.innerHTML + "\" which is the \"" + event.target.id + "th\" word in file.";
        });
    }
} export default ReadFile;