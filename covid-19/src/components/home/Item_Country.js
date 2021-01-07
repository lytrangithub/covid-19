import React, { Component } from 'react'
import NumberFormat from 'react-number-format';

export default class Item_Country extends Component {
   setData = () => {
      if(Object.prototype.hasOwnProperty.call(this.props.dataSelect, 'id')){
         // console.log(this.props.dataSelect);
         return (
            <tr className="success">
               <td>{this.props.dataSelect.id}</td>
               <td>{this.props.dataSelect.country}</td>
               <td>{this.props.dataSelect.province}</td>
               <td><NumberFormat value={this.props.dataSelect.latest.confirmed} thousandSeparator={true} displayType={'text'}/></td>
               <td><NumberFormat value={this.props.dataSelect.latest.deaths} thousandSeparator={true} displayType={'text'}/></td>
               <td><NumberFormat value={this.props.dataSelect.latest.recovered} thousandSeparator={true} displayType={'text'}/></td>
               <td><NumberFormat value={this.props.dataSelect.last_updated} format="####/##/##" displayType={'text'} /></td>
            </tr>
         )
      }
   }
   render() {
      return (
         <>  
               <table className="table">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Quốc gia</th>
                     <th>Tỉnh</th>
                     <th>Số ca nhiễm</th>
                     <th>Số ca tử vong</th>
                     <th>Số ca hồi phục</th>
                     <th>Ngày cập nhật</th>
                  </tr>
               </thead>
               <tbody>
                  {this.setData()}
               </tbody>
            </table>
         </>
      )
   }
}
