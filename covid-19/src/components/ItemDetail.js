import React, { Component } from 'react'
const axios = require('axios').default;

export default class ItemDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataDetail: ''
        };
    }
    async componentDidMount() {
        const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/'+this.props.match.params.id);
        this.setState({
            dataDetail: res.data.location
        })
    }
    
    render() {
        return (
            <div>
                {/* {this.pushDataDetail()} */}
            </div>
        )
    }
}
