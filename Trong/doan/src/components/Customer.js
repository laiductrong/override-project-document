import React, { Component } from 'react';
import axios from 'axios';
import TaskForm from '../componentsCustomer/TaskForm';
import Control from '../componentsCustomer/Control';
import TaskList from '../componentsCustomer/TaskList';

const CUSTOMER_REST_API_URL = 'http://localhost:8085/Customer/get';
class Customer extends Component {
    constructor(props){
        super(props)
        this.state = {
            customer:[],
            tasksEditing:{
                id:'',
                name:'',
                phoneNumber:'',
                address:'',
                email:''
            },
            isDisplayForm: false
        }
    }
    
    componentDidMount(){
        axios.get(CUSTOMER_REST_API_URL).then((Response)=>{
            this.setState({customer : Response.data});
        })
    }
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
    //lấy giá trị để update
    onUpdate=(id,name,phoneNumber,address,email)=>{
        this.setState( {
            tasksEditing: {
                id: id,
                name:name,
                phoneNumber:phoneNumber,
                address:address,
                email:email
                } },
                ()=>{
                    
                }
        );
        this.onShowForm();
    }
    render(){
        //lấy sữ liệu từ state
        var {customer,isDisplayForm,tasksEditing}=this.state;
        //element task form
        var elementTaskForm=isDisplayForm?<TaskForm onCloseForm={this.onCloseForm} onUpdate={this.onUpdate} tasksEditing={tasksEditing}/>:'';
        return(
            <div className="mr-50 ml-50">
                <br/>
                <br/>
                
                <div className="text-center">
                    <h1>QUẢN LÝ KHÁCH HÀNG</h1>
                    <hr/>
                </div>
                <div className="row">
                <div className={isDisplayForm?'col-xs-3 col-sm-3 col-md-3 col-lg-3':''}>
                        {/* tasks form */}
                        {elementTaskForm}
                    </div>
                    <div className={isDisplayForm?'col-xs-9 col-sm-9 col-md-9 col-lg-9':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <Control/>                        
                        <TaskList customer={customer} onUpdate={this.onUpdate} onShowForm={this.onShowForm}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Customer;