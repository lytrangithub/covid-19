import React, { Component } from 'react'

export default class List_Country extends Component {

    render() {
        return (
            <>
                <div className="col-sm-3">
                    <div className="card">
                        <img src="https://znews-photo.zadn.vn/w660/Uploaded/zbvunua/2020_02_01/5.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Quốc gia: {this.props.country}</h5>
                            <p className="card-text">Tỉnh: {this.props.province}</p>
                            <p className="card-text">Số ca nhiễm: {this.props.confirmed}</p>
                            <p className="card-text">Số ca tử vong: {this.props.deaths}</p>
                            <p className="card-text">Số ca hồi phục: {this.props.recovered}</p>
                            {/* <a href="#a" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
