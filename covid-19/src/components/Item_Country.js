import React, { Component } from 'react'

export default class Item_Country extends Component {
   setData = () => {
      if(Object.prototype.hasOwnProperty.call(this.props.dataSelect, 'id')){
         console.log(this.props.dataSelect);
         return (
            <tr className="success">
               <td>{this.props.dataSelect.id}</td>
               <td>{this.props.dataSelect.country}</td>
               <td>{this.props.dataSelect.province}</td>
               <td>{this.props.dataSelect.latest.confirmed}</td>
               <td>{this.props.dataSelect.latest.deaths}</td>
               <td>{this.props.dataSelect.latest.recovered}</td>
               <td>{this.props.dataSelect.last_updated}</td>
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
