import React, { Component } from 'react';

class GoodsReceivedNote extends Component {
    render(){
        return(
            <div className="mr-50 ml-50">
                <br/>
                <br/>
                
                <div className="text-center">
                    <h1>HÓA ĐƠN</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        {/* tasks form */}
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <span className="fa fa-times-circle text-right" />
                            <h3 className="panel-title ">Thêm Đơn</h3>         
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label>Mã hóa đơn :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mã khách hàng :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ngày lập :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ngày cập nhật cuối :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tổng giá trị :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Trạng thái :</label>
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
                                    <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                    <button type="button" className="btn btn-danger">Hủy Bỏ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <div className="row mt-15">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                                    <span className="input-group-btn">
                                                <button className="btn btn-primary" type="button">
                                                    <span className="fa fa-search mr-5"></span>Tìm
                                    </button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                        <li>
                                            <a role="button">
                                                <span className="fa fa-sort-alpha-asc pr-5">
                                                    Tên A-Z
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a role="button">
                                                        <span className="fa fa-sort-alpha-desc pr-5">
                                                            Tên Z-A
                                                        </span>
                                                    </a>
                                        </li>        

                                        <li role="separator" className="divider"></li>
                                        <li><a role="button">Trạng thái pending</a></li>
                                        <li><a role="button">Trạng thái success</a></li>
                                        <li><a role="button">Trạng thái cancel</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Mã hóa đơn</th>
                                            <th className="text-center">Mã khách hàng</th>
                                            <th className="text-center">Ngày lập</th>
                                            <th className="text-center">Ngày cập nhật cuối</th>
                                            <th className="text-center">Tổng phí ship</th>x
                                            <th className="text-center">Trạng Thái</th>
                                            <th>Hành động</th>
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
                                            <td>
                                                <select className="form-control">
                                                    <option value="-1">pending</option>
                                                    <option value="0">success</option>
                                                    <option value="1">cancel</option>
                                                </select>
                                            </td>                                            
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>1</td>
                                            <td>10/10/2020</td>
                                            <td>10/10/2020</td>
                                            <td>100.000 VNĐ</td>
                                            
                                            <td className="text-center">
                                                <span className="label label-success">
                                                    pending
                                                </span>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" className="btn btn-warning">
                                                    <span className="fa fa-pencil mr-5"></span>Sửa
                                                </button>
                                                &nbsp;
                                                <button type="button" className="btn btn-danger">
                                                    <span className="fa fa-trash mr-5"></span>Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default GoodsReceivedNote;