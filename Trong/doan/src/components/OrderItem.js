import React, { Component } from 'react';

class OderItem extends Component {
    render(){
        return(
            <div className="mr-50 ml-50">
                <br/>
                <br/>
                
                <div className="text-center">
                    <h1>ĐẶT HÀNG</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        {/* tasks form */}
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <span className="fa fa-times-circle text-right" />
                            <h3 className="panel-title ">Thêm Đặt Hàng</h3>         
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label>Mã đơn hàng :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ngày lập đơn :</label>
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
                                    <label>Phương thức thanh toán :</label>
                                    <select className="form-control"
                                    name="status"
                                    >
                                        <option >Trực tiếp</option>
                                        <option >Thẻ ngân hàng</option>
                                        <option >Gửi bưu điện</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Tổng phí ship :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Giá :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <label>Trạng Thái :</label>
                                <select className="form-control"
                                    name="status"
                                >
                                    <option value={1}>unpaid</option>
                                    <option value={2}>pending</option>
                                    <option value={3}>canceled</option>
                                    <option value={4}>ready_to_ship</option>
                                    <option value={5}>delivered</option>
                                    <option value={6}>returned</option>
                                    <option value={7}>shipped</option>
                                    <option value={8}>failed</option>
                                </select>
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
                                        <li><a role="button">Thanh Toán Trực Tiếp</a></li>
                                        <li><a role="button">Thanh Toán Qua Ngân Hàng</a></li>
                                        <li><a role="button">Thanh Toán Qua Bưu Điện</a></li>

                                        <li role="separator" className="divider"></li>
                                        <li><a role="button">Giá thấp tới cao</a></li>
                                        <li><a role="button">Giá cao tới thấp</a></li>

                                        <li role="separator" className="divider"></li>
                                        <li><a role="button">Trạng thái unpaid</a></li>
                                        <li><a role="button">Trạng thái pending</a></li>
                                        <li><a role="button">Trạng thái canceled</a></li>
                                        <li><a role="button">Trạng thái ready_to_ship</a></li>
                                        <li><a role="button">Trạng thái delivered</a></li>
                                        <li><a role="button">Trạng thái returned</a></li>
                                        <li><a role="button">Trạng thái shipped</a></li>
                                        <li><a role="button">Trạng thái failed</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">Mã đơn hàng</th>
                                            <th className="text-center">Ngày lập đơn</th>
                                            <th className="text-center">Ngày cập nhật cuối</th>
                                            <th className="text-center">Phương thức thanh toán</th>
                                            <th className="text-center">Tổng phí ship</th>
                                            <th className="text-center">Giá</th>
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
                                                <select className="form-control">
                                                    <option value="-1">Trực tiếp</option>
                                                    <option value="0">Thẻ ngân hàng</option>
                                                    <option value="1">Bưu điện</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" className="form-control" />
                                            </td>
                                            <td>
                                                <input type="text" className="form-control" />
                                            </td>
                                            <td>
                                                <select className="form-control">
                                                    <option value={1}>unpaid</option>
                                                    <option value={2}>pending</option>
                                                    <option value={3}>canceled</option>
                                                    <option value={4}>ready_to_ship</option>
                                                    <option value={5}>delivered</option>
                                                    <option value={6}>returned</option>
                                                    <option value={7}>shipped</option>
                                                    <option value={8}>failed</option>
                                                </select>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="text-center">1</td>
                                            <td>1/1/2020</td>
                                            <td>10/10/2020</td>
                                            <td>Trực tiếp</td>
                                            <td>100.000 VNĐ</td>
                                            <td>500.000 VNĐ</td>
                                            <td className="text-center">
                                                <span className="label label-success">
                                                    unpaid
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
export default OderItem;