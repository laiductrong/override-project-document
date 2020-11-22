import react, { Component } from 'react';

class TaskForm extends Component{
    //đóng mở form
    onCloseForm=()=>{
        this.props.onCloseForm();
    }
    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}/>
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

        )
    }
}
export default TaskForm;