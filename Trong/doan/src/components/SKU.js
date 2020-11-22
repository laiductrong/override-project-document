import React, { Component } from 'react';

class SKU extends Component {

    render(){
        return(
            <div className="mr-50 ml-50">
                <br/>
                <br/>
                
                <div className="text-center">
                    <h1>QUẢN LÝ GIÀY</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        {/* tasks form */}
                    <div className="panel panel-warning">
                        <div className="panel-heading">
                            <span className="fa fa-times-circle text-right" />
                            <h3 className="panel-title ">Thêm Công Việc</h3>
                            
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label>ID :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Loại :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nhãn hiệu :</label>
                                    <select className="form-control"
                                    name="status"
                                    >
                                        <option >Nhãn hiệu 1</option>
                                        <option >Nhãn hiệu 2</option>
                                        <option >Nhãn hiệu 3</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Tên :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mô tả ngắn :</label>
                                    <input type="text" className="form-control"
                                        name="name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mô tả :</label>
                                    <br/>
                                    <textarea className="w-100 h-100px" name="comment" form="usrform">
                                        
                                    </textarea>       
                                </div>
                                <label>Trạng Thái :</label>
                                <select className="form-control"
                                    name="status"
                                >
                                    <option value={1}>active</option>
                                    <option value={-1}>inactive</option>
                                    <option value={-0}>deleted</option>
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
                                        <li>
                                        <a role="button">
                                            <span className="pr-5">
                                                Nhãn hiệu
                                            </span>
                                        </a>
                                        </li>
                                        <li role="separator" className="divider"></li>
                                        <li><a role="button">Trạng Thái Active</a></li>
                                        <li><a role="button">Trạng Thái Inactive</a></li>
                                        <li><a role="button">Trạng Thái Deleted</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-15">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <table className="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">ID</th>
                                            <th className="text-center">Loại</th>
                                            <th className="text-center">Nhãn Hiệu</th>
                                            <th className="text-center">Tên</th>
                                            <th className="text-center">Mô Tả Ngắn</th>
                                            <th className="text-center">Mô Tả</th>
                                            <th className="text-center">Trạng Thái</th>
                                            <th className="text-center">Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td>
                                                <input type="text" className="form-control" />
                                            </td>
                                            <td>
                                                <select className="form-control">
                                                    <option value="-1">Nhãn hiệu 1</option>
                                                    <option value="0">Nhãn hiệu 2</option>
                                                    <option value="1">Nhãn hiệu 3</option>
                                                </select>
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
                                                    <option value="-1">active</option>
                                                    <option value="0">inactive</option>
                                                    <option value="1">deleted</option>
                                                </select>
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Học lập trình</td>
                                            <td className="text-center">
                                                Nhãn Hiệu
                                            </td>
                                            <td className="text-center">
                                                Tên sản phẩm
                                            </td>
                                            <td>Mô tả ngắn</td>
                                            <td>Mô tả chi tiết</td>
                                            <td className="text-center">
                                                <span className="label label-success">
                                                    active
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
export default SKU;