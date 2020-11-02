import { createElement, Component, render } from "./toy_react.js"

for(let i of [1, 2, 3]) {
    console.log(i);
}

class MyComponent extends Component {
    render() {
        return <div>
            <h1>my_component</h1>
            {this.children}
            </div>
    }
}

render(<MyComponent id="b" class="c">
    <div>hello</div>
    <div>world</div>
</MyComponent>, document.body);

