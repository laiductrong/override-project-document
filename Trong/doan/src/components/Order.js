import React, { Component } from 'react';
import Control from '../componentsOrder/Control';
import TaskForm from '../componentsOrder/TaskForm';
import TaskList from '../componentsOrder/TaskList';

class Order extends Component {
    constructor(props){
        super(props)
        this.state = {
            order:[],
            isDisplayForm: false
        }
    }
    // lấy data từ API
    // componentDidMount(){
    //     axios.get(PRODUCTS_REST_API_URL).then((Response)=>{
    //         this.setState({customer : Response.data});
    //     })
    // }
      //thay đổi trạng thái đóng mở của form
    onToggleForm=()=>{
    this.setState({
        isDisplayForm : !this.state.isDisplayForm
    })
    }
    // Mở form
    onShowForm=()=>{
        this.setState({
            isDisplayForm : true
        })
    }
    //button đóng form
    onCloseForm= () => {
        this.setState({
            isDisplayForm : false
        })
    }
    render(){
         //lấy sữ liệu từ state
         var {order,isDisplayForm}=this.state;
         //element task form
         var elementTaskForm=isDisplayForm?<TaskForm onCloseForm={this.onCloseForm}/>:'';
        return(
            <div className="mr-50 ml-50">
                <br/>
                <br/>
                
                <div className="text-center">
                    <h1>Order Management</h1>
                    <hr/>
                </div>
                <div className="row">
                <div className={isDisplayForm?'col-xs-3 col-sm-3 col-md-3 col-lg-3':''}>
                        {/* tasks form */}
                        {elementTaskForm}
                    </div>
                    <div className={isDisplayForm?'col-xs-9 col-sm-9 col-md-9 col-lg-9':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span>Add Job
                        </button>
                        <Control/>                        
                        <TaskList order={order}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Order;