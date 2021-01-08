import React, { Component } from 'react'
import List_Country from './List_Country';
import Item_Country from './Item_Country';
import NumberFormat from 'react-number-format';
const axios = require('axios').default;

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
           data: [],
           dataConfirmed: '',
           dataDeaths: '',
           dataRecovered: '',
           dataSelect: {},
           dataSearch: []
        };
    }
    async componentDidMount() {
        const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
        this.setState({
            data: res.data.locations,
            dataConfirmed: res.data.latest.confirmed,
            dataDeaths: res.data.latest.deaths,
            dataRecovered: res.data.latest.recovered,
            dataSearch: res.data.locations
        })
    }
    getDataListCountry = () => {
        if(this.state.data && this.state.data.length > 0){
            return this.state.data.map((item, key) => {
                return <List_Country 
                        key={key} 
                        id={item.id}
                        country={item.country}
                        province={item.province}
                        confirmed={item.latest.confirmed}
                        deaths={item.latest.deaths}
                        recovered={item.latest.recovered}
                    />
            })
        }
    }
    pushDataToSelect = () => {
        if(this.state.data && this.state.data.length > 0){
            return this.state.data.map((item, key) => {
                return <option key={key} value={item.id}>{item.country} {item.province}</option>
            })
        }
    }
    isChangeToGetId = async (event) => {
        const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/'+event.target.value);
        this.setState({
            dataSelect: res.data.location
        })
    }
    isChangeToGetText = async (event) => {
        let dataSearch = [];
        this.state.dataSearch.forEach((item)=>{
            if(item.country.toLowerCase().indexOf(event.target.value) !== -1){
                dataSearch.push(item);
            }
        });
        this.setState({
            data: dataSearch
        })
    }
    render() {
        return (
            <>
                <div>
                    <select className="form-control" name="id_country" onChange={(event) => this.isChangeToGetId(event)}>
                        <option>Chọn quốc gia</option>
                        {this.pushDataToSelect()}
                    </select>
                    <Item_Country dataSelect={this.state.dataSelect} />
                </div>
                <div>
                    <input name="search" placeholder="Nhập từ khóa..." className="form-control" type="text" onChange={(event) => this.isChangeToGetText(event)} />
                    <div className="row">
                        {this.getDataListCountry()}
                    </div>
                </div>
            </>
        )
    }
}
