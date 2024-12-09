// ==UserScript==
// @name         forsenE
// @namespace    http://tampermonkey.net/
// @version      2
// @description  GACHI THE WEEBS AWAY
// @author       NevMan
// @match        https://www.reddit.com/r/forsen/comments/*
// @updateURL    https://github.com/nev-mann/Reddit-forsen-script/raw/refs/heads/main/script.user.js
// @downloadURL  https://github.com/nev-mann/Reddit-forsen-script/raw/refs/heads/main/script.user.js
// ==/UserScript==


(function () {
    'use strict';
    window.addEventListener('load', function () {
        const node = document.createElement("button");
        node.innerHTML = "Downvote all retards";
        node.addEventListener('click', asd);
        document.getElementById("right-sidebar-container").appendChild(node);
        document.getElementsByTagName("shreddit-post")[0].shadowRoot.appendChild(node);
        console.log("done");
        asd();
        //
    }, false);
})();

function asd() {
    let comments = document.getElementsByTagName("shreddit-comment");
    for (let i = 0; i < comments.length; i++) {
        if (comments[i].children[2].innerHTML.toString().includes("https://reddit-econ-prod-assets-permanent.s3.amazonaws.com/asset-manager/t5_33td5/neRMhyZ4QN.png")) {
            let button = comments[i].getElementsByTagName("shreddit-comment-action-row")[0].shadowRoot.firstElementChild.getElementsByTagName("button")[2];
            if (button.ariaPressed == 'false') {
                console.log("false")
                button.click();
            }
            else {
                console.log("true");
            }
        }
    }
}