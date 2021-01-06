import React, { Component } from 'react'

export default class Item_Country extends Component {
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
                        <th>Tỉ lệ</th>
                     </tr>
                  </thead>
                  <tbody>    
                     <tr className="success">
                        <td>Success</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>Success</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                        <td>john@example.com</td>
                     </tr>
                  </tbody>
               </table>
            </>
        )
    }
}
