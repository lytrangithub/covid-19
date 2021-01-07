import React, { Component } from 'react'
import TestJsx from './TestJSX';
export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: "100"
        };
        this.jsxTemplate = TestJsx;
    }
    render() {
        return this.jsxTemplate.call(this);
    }
}
