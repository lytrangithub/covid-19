import React, { Component } from 'react'
const axios = require('axios').default;

export default class ItemDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataDetail: '',
            confirmed: '',
            deaths: '',
            recovered: ''
        };
    }
    async componentDidMount() {
        const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/'+this.props.match.params.id);
        this.setState({
            dataDetail: res.data.location,
            confirmed: res.data.location.latest.confirmed,
            deaths: res.data.location.latest.deaths,
            recovered: res.data.location.latest.recovered
        });
    }
    
    render() {
        return (
            <div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.588247774446!2d106.6421774155711!3d10.766182662324848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e96dc2d2a6b%3A0x663fc9012fab7a70!2zMTEwIMOUbmcgw41jaCBLaGnDqm0sIFBoxrDhu51uZyA1LCBRdeG6rW4gMTEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1610071117686!5m2!1svi!2s" 
                    frameBorder={0} 
                    style={{border: 0}} 
                    allowFullScreen aria-hidden="false" 
                    tabIndex={0}
                    className= "maps"
                />
                <span>ID: {this.state.dataDetail.id}</span><br/>
                <span>Quốc gia: {this.state.dataDetail.country}</span><br/>
                <span>Tĩnh: {this.state.dataDetail.province}</span><br/>
                <span>Mã quốc gia: {this.state.dataDetail.country_code}</span><br/>
                <span>Dân số: {this.state.dataDetail.country_population}</span><br/>
                <span>Ngày cập nhật: {this.state.dataDetail.last_updated}</span><br/>
                <span>Số ca nhiễm: {this.state.confirmed}</span><br/>
                <span>Số ca tử vong: {this.state.deaths}</span><br/>
                <span>Số ca hồi phục: {this.state.recovered}</span><br/>
                <button onClick={this.props.history.goBack} className="btn btn-primary">Back</button>
            </div>
        )
    }
}
