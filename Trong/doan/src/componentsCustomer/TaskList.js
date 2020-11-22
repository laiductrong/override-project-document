import React, { Component } from 'react';

class TaskList extends Component{
    onUpdate(id,name,phoneNumber,address,email){
        this.props.onUpdate(id,name,phoneNumber,address,email);
    }
   onShowForm=()=>{
       this.props.onShowForm();
   }
    render(){
        var {customer}=this.props;
        return(
            <div>
                <div className="row mt-15">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">Mã Khách Hàng</th>
                                    <th className="text-center">Tên Khách Hàng</th>
                                    <th className="text-center">SĐT</th>
                                    <th className="text-center">Địa Chỉ</th>
                                    <th className="text-center">E_Mail</th>
                                    <th className="text-center">Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                    
                                    <td></td>
                                </tr>
                                {
                                    customer.map(
                                        customer=>
                                        <tr key={customer.id}>
                                            <td >{customer.id}</td>
                                            <td>{customer.name}</td>
                                            <td>{customer.phoneNumber}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.email}</td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-warning"
                                                    onClick={() => this.onUpdate(customer.id,
                                                                                customer.name,
                                                                                customer.phoneNumber,
                                                                                customer.address,
                                                                                customer.email
                                                    )} >
                                                    <span className="fa fa-pencil mr-5"></span>Sửa
                                                </button>

                                                &nbsp;

                                                <button type="button" className="btn btn-danger">
                                                    <span className="fa fa-trash mr-5"></span>Xóa
                                                </button>
                                            </td>
                                        </tr>
                                        
                                    )
                                }  
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskList;