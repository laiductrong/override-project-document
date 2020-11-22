import react, { Component } from 'react';

class Control extends Component{
    render(){
        return(              
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">Order ID</th>
                                <th className="text-center">Created Date</th>
                                <th className="text-center">Updated Date</th>
                                <th className="text-center">Payment Method</th>
                                <th className="text-center">Shipping Fee</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
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
                                <td></td>
                                <td></td>
                                <td>
                                    <select className="form-control">
                                        <option value="-1">pending</option>
                                        <option value="0">success</option>
                                        <option value="1">cancel</option>
                                    </select>
                                </td>                                               
                            </tr>
                            <tr>
                                <td className="text-center">1</td>
                                <td>1</td>
                                <td>10/10/2020</td>
                                <td>10/10/2020</td>
                                <td>100.000 VNĐ</td>
                                <td>100.000 VNĐ</td>
                                <td className="text-center">
                                    <span className="label label-success">
                                        pending
                                    </span>
                                </td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-warning">
                                        <span className="fa fa-pencil mr-5"></span>Edit
                                    </button>
                                    &nbsp;
                                    <button type="button" className="btn btn-danger">
                                        <span className="fa fa-trash mr-5"></span>Delete
                                    </button>
                                    &nbsp;
                                    <button type="button" className="btn btn-info">
                                        Details
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        )
    }
}
export default Control;