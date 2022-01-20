import React from 'react';

class CCLifeCycle extends React.Component {
    constructor() {
        super();
        this.state = { total: 1 };
        console.log('constructor');
        console.log(this);
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    hello() {
        console.log('Hello');
    }

    render() {
        console.log('render');
        return (
            <>
                <h1
                    onClick={() => {
                        // 呼叫 set state 會觸發 re-render
                        // (記住元件只有 3 種情況會 re-render: setState, new props, force update)
                        this.setState({ total: this.state.total + 1 });
                    }}
                >
                    {this.state.total}
                </h1>
            </>
        );
    }
}

export default CCLifeCycle;
