import './css/App.css';
import NumberFormat from 'react-number-format';
import React, { Component } from 'react';
import RouterLink from './routers/RouterLink';
const axios = require('axios').default;

export default class App extends Component {
   constructor(props){
      super(props);
      this.state = {
         dataConfirmed: '',
         dataDeaths: '',
         dataRecovered: '',
      };
   }
   async componentDidMount() {
      const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
      this.setState({
          dataConfirmed: res.data.latest.confirmed,
          dataDeaths: res.data.latest.deaths,
          dataRecovered: res.data.latest.recovered,
      })
   }
   render() {
      return (
         <div className="container">
            <div>
               <h2>THỐNG KÊ VỀ COVID-19</h2>
               <p>Thông tin về dịch bệnh covid-19</p>
               <p>Tổng số ca nhiễm: <NumberFormat value={this.state.dataConfirmed} thousandSeparator={true} displayType={'text'}/> </p>
               <p>Tổng số ca tử vong: <NumberFormat value={this.state.dataDeaths} thousandSeparator={true} displayType={'text'}/></p>
               <p>Tổng số ca hồi phục: <NumberFormat value={this.state.dataRecovered} thousandSeparator={true} displayType={'text'}/></p>
            </div>
            <RouterLink />
         </div>
      )
   }
}
