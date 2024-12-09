// ==UserScript==
// @name         Downvote weebs
// @namespace    http://tampermonkey.net/
// @version      3
// @description  GACHI THE WEEBS AWAY
// @author       NevMan
// @match        https://www.reddit.com/r/forsen/comments/*
// @updateURL    https://github.com/nev-mann/Reddit-forsen-script/raw/refs/heads/main/script.user.js
// @downloadURL  https://github.com/nev-mann/Reddit-forsen-script/raw/refs/heads/main/script.user.js
// ==/UserScript==

const emoteToDownvote = "https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_33td5/neRMhyZ4QN.png";

function main() {
    let comments = document.getElementsByTagName("shreddit-comment");
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].children[2].innerHTML.toString().includes(emoteToDownvote)) {
            let button = comments[i].getElementsByTagName("shreddit-comment-action-row")[0].shadowRoot.firstElementChild.getElementsByTagName("button")[2];
            if (button.ariaPressed == 'false') {
                button.click();
            }
        }
    }
}

(function () {
    'use strict';
    window.addEventListener('load', function () {
        const node = document.createElement("button");
        node.innerHTML = "Downvote all weebs";
        node.addEventListener('click', main);
        document.getElementsByTagName("shreddit-post")[0].shadowRoot.appendChild(node);
        main();
        //
    }, false);
})();