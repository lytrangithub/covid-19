import './css/App.css';
import React, { Component } from 'react';
import List_Country from './components/List_Country';
import Item_Country from './components/Item_Country';
const axios = require('axios').default;

export default class App extends Component {
   constructor(props){
      super(props);
      this.state = {
         data: [],
         dataConfirmed: '',
         dataDeaths: '',
         dataRecovered: '',
      };
   }
   async componentDidMount() {
      const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
      this.setState({
         data: res.data.locations,
         dataConfirmed: res.data.latest.confirmed,
         dataDeaths: res.data.latest.deaths,
         dataRecovered: res.data.latest.recovered,
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
      // const res = await axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations/'+event.target.value);
      console.log(event.target.value);
   }

   render() {
      return (
         <>
            <div className="container">
               <h2>COVID-19</h2>
               <p>Thông tin về dịch bệnh covid-19</p>
               <p>Tổng số ca nhiễm: {this.state.dataConfirmed}</p>
               <p>Tổng số ca tử vong: {this.state.dataDeaths}</p>
               <p>Tổng số ca hồi phục: {this.state.dataRecovered}</p>
            </div>
            <div className="container">
               <select className="form-control" name="id_country" onChange={(event)=>this.isChangeToGetId(event)}>
                  <option>Chọn quốc gia</option>
                  {this.pushDataToSelect()}
               </select>
               <Item_Country />
            </div>
            <div className="container">
               <div className="row">
                  {this.getDataListCountry()}
               </div>
            </div>

         </>
      )
   }
}
