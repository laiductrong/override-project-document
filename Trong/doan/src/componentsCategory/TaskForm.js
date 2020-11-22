import React, { Component } from 'react';

class TaskForm extends Component {
   //đóng mở form
    onCloseForm=()=>{
        this.props.onCloseForm();
    }
    render(){
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}/>
                    <h3 className="panel-title ">Add Category</h3>   
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            <label>Category ID :</label>
                            <input type="text" className="form-control"
                                name="idCustomer"
                            />
                        </div>
                        <div className="form-group">
                            <label>Category Name :</label>
                            <input type="text" className="form-control"
                                name="name"
                            />
                        </div>
                        
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                            <button type="button" className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
