import react, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React,{ useState } from 'react';

class Control extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        //     dateState:{
        //         electdDate:null,
        //         setSelectDay: null
        //     }
        // };
        this.state = {date: new Date()}
      }

    //đóng mở form
    onCloseForm=()=>{
        this.props.onCloseForm();
    }
    
    render(){
        return(
            <div>
                <div className="panel panel-warning">
                <div className="panel-heading">
                    <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}/>
                    <h3 className="panel-title ">Add Order</h3>         
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Order ID :</label>
                            <input type="text" className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Created Date :</label>
                            <input type="text" className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Updated Date :</label>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={date=>{this.setState({date:date})}}
                                />
                        </div>
                        <div className="form-group">
                            <label>Payment Method :</label>
                            <input type="text" className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Shipping Fee :</label>
                            <input type="text" className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Price :</label>
                            <input type="text" className="form-control"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Status :</label>
                            <select className="form-control"
                            name="status"
                            >
                                <option >pending</option>
                                <option >success</option>
                                <option >cancel</option>
                            </select>
                        </div>
                        
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                            <button type="button" className="btn btn-danger">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}
export default Control;