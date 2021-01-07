import React, { Component } from 'react'
import NumberFormat from 'react-number-format';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class List_Country extends Component {
    
    string_to_slug = (string) => {
        string = string.toLowerCase();
        string = string.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
        string = string.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
        string = string.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
        string = string.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
        string = string.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
        string = string.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
        string = string.replace(/đ/gi, 'd');
        string = string.replace(/ /gi, '-');
        return string;
    }
    render() {
        return (
            <>
                <div className="col-sm-3">
                    <div className="card">
                        <img src="https://znews-photo.zadn.vn/w660/Uploaded/zbvunua/2020_02_01/5.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Quốc gia: {this.props.country}</h5>
                            <p className="card-text">Tỉnh: {this.props.province}</p>
                            <p className="card-text">Số ca nhiễm: <NumberFormat value={this.props.confirmed} thousandSeparator={true} displayType={'text'}/></p>
                            <p className="card-text">Số ca tử vong: <NumberFormat value={this.props.deaths} thousandSeparator={true} displayType={'text'}/></p>
                            <p className="card-text">Số ca hồi phục: <NumberFormat value={this.props.recovered} thousandSeparator={true} displayType={'text'}/></p>
                                <Link to={"/chi-tiet/"+this.string_to_slug(this.props.country)+"-"+this.props.id+".html"}>
                                    Chi tiết
                                </Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
