import react, { Component } from 'react';

class Control extends Component{
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
                            <label>Giá trị triết khấu :</label>
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
        )
    }
}
export default Control;