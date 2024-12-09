// ==UserScript==
// @name         Downvote weeb emotes
// @namespace    http://tampermonkey.net/
// @version      3
// @description  GACHI THE WEEBS AWAY
// @author       NevMan
// @match        https://www.reddit.com/*
// @updateURL    https://github.com/nev-mann/Reddit-forsen-script/raw/refs/heads/main/script.user.js
// @downloadURL  https://github.com/nev-mann/Reddit-forsen-script/raw/refs/heads/main/script.user.js
// ==/UserScript==
const emoteToDownvote = "https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_33td5/neRMhyZ4QN.png";
const guyToDownvote = "Vocaloid-Guy";

let oldPage = "";
let allDownvoteButton = document.createElement("button");

function main() {
    let button = document.getElementsByTagName("left-nav-top-section")[0].shadowRoot.getElementById("downvoteAllWeebs");
    let currentPage = window.location.toString();
    if (!currentPage.startsWith("https://www.reddit.com/r/forsen/comments/")) {
        oldPage = "";
        if (!!button) button.remove();
        return;
    }
    document.getElementsByTagName("left-nav-top-section")[0].shadowRoot.appendChild(allDownvoteButton);

    if (oldPage == currentPage) {
        return;
    }
    oldPage = currentPage;

    downvote();
}

function downvote() {
    console.log("Downvoting all weebs");
    let comments = document.getElementsByTagName("shreddit-comment");
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].children[2].innerHTML.toString().includes(emoteToDownvote) || comments[i].__author == guyToDownvote) {
            let button = comments[i].getElementsByTagName("shreddit-comment-action-row")[0].shadowRoot.firstElementChild.getElementsByTagName("button")[2];
            if (button.ariaPressed == 'false') {
                button.click();
            }
        }
    }
}

(function () {
    'use strict';
    allDownvoteButton.innerHTML = "Downvote all weebs";
    allDownvoteButton.id = "downvoteAllWeebs"
    allDownvoteButton.addEventListener('click', downvote);
    setInterval(main, 2000);
})();