import { createElement, Component, render } from "./toy_react.js"

for(let i of [1, 2, 3]) {
    console.log(i);
}

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2
        }
    }
    render() {
        return <div>
                <h1>my_component</h1>
                <button onclick={()=>{this.state.a++; this.rerender();}}>add</button>
                <span>{this.state.a.toString()}</span>
            </div>
    }
}

render(<MyComponent id="b" class="c">
    <div>hello</div>
    <div>world</div>
</MyComponent>, document.body);

