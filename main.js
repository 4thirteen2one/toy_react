for(let i of [1, 2, 3]) {
    console.log(i);
}

function createElement(tagName, attributes, ...children) {
    return document.createElement(tagName);
}

window.a = <div id="b" class="c">
    <div>hello</div>
    <div>world</div>
</div>

