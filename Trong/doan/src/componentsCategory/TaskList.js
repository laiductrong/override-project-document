import react, { Component } from 'react';

class TaskList extends Component{
    render(){
        return(
            <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">ID</th>
                            <th className="text-center">Name</th>
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
                            <td></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Học lập trình</td>
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
        )
    }
}
export default TaskList;