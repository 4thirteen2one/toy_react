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
                <span>{this.state.a.toString()}</span>
                <button onclick={
                    ()=> {
                        this.setState({a: this.state.a+1})
                    }
                }>add</button>
                <span>{this.state.a.toString()}</span>
                <span>{this.state.b.toString()}</span>
            </div>
    }
}

render(<MyComponent id="b" class="c">
    <div>hello</div>
    <div>world</div>
</MyComponent>, document.body);

