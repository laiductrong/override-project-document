import React, { Component } from 'react';
import axios from 'axios';

class TaskForm extends Component {
    //lấy giá trijkhi update từ tasklist
    constructor(props){
        super(props);
        this.state={
            customerEdit:{
                id:null,
                name:'',
                phoneNumber:'',
                address:'',
                email:''
            },
            inforHeader: ''
        }
    }
    componentWillReceiveProps(){
        if(this.props.tasksEditing){
            this.setState( {
                customerEdit: {
                    id: this.props.tasksEditing.id,
                    name: this.props.tasksEditing.name,
                    phoneNumber: this.props.tasksEditing.phoneNumber,
                    address: this.props.tasksEditing.address,
                    email: this.props.tasksEditing.email
                    } },
                    ()=>{
                        //console.log(this.state.tasksEditing);
                    }
            );
            this.setState({
                inforHeader:this.props.tasksEditing.id
            });
        }
    }
    
    //reset state
    resetState=()=>{
        this.setState( {
            customerEdit: {
                id:'',
                name:'',
                phoneNumber:'',
                address:'',
                email:''
                } },
                ()=>{
                    //console.log(this.state.tasksEditing);
                }
        );
        this.setState( {
            inforHeader:''
        },
                ()=>{
                    //console.log(this.state.tasksEditing);
                }
        );
        
    }

    //đóng mở form
    onCloseForm=()=>{
        this.props.onCloseForm();
        this.resetState();
    }
    onChange=(event)=>{
        var target = event.target.value;
        var id = target.id;
        var name=target.name;
        var phoneNumber=target.phoneNumber;
        var address=target.address;
        var email=target.email;
        this.setState( {
            customerEdit: {
                id:id,
                name:name,
                phoneNumber:phoneNumber,
                address:address,
                email:email
                } },
                ()=>{
                    //console.log(this.state.tasksEditing);
                }
        );
    }
    
    render(){
        const submit= e=>{
            let id=e.target[0].value;
            let name=e.target[1].value;
            let phoneNumber=e.target[2].value;
            let address=e.target[3].value;
            let email=e.target[4].value;
            let data={
                id,
                name,
                phoneNumber,
                address,
                email
            }
            console.log(data);
            postCustomer(data);
        };

        //post
        const postCustomer=data=>{
            axios
                .post("http://localhost:8085/Customer/post",data);
        }

        //cap nhat
        var {inforHeader}=this.state;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <span className="fa fa-times-circle text-right" onClick={this.onCloseForm}/>
                    <h3 className="panel-title ">{inforHeader!=='' ?'Sửa Thông Tin Khách Hàng':'Thêm Khách Hàng'}</h3>   
                </div>
                <div className="panel-body">
                    <form onSubmit={e=>{
                        e.preventDefault();
                        submit(e);
                    }}>
                        <div className="form-group">
                            <label>Mã Khách Hàng :</label>
                            <input type="text" className="form-control"
                                name="idCustomer"
                                value={this.state.customerEdit.id}
                            />
                        </div>
                        <div className="form-group">
                            <label>Tên Khách Hàng :</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.customerEdit.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>SĐT :</label>
                            <input type="text" className="form-control"
                                name="phoneNumberCustomer"
                                value={this.state.customerEdit.phoneNumber}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Địa Chỉ :</label>
                            <input type="text" className="form-control"
                                name="addressCustomer"
                                value={this.state.customerEdit.address}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>E-Mail :</label>
                            <input type="text" className="form-control"
                                name="mailCustomer"
                                value={this.state.customerEdit.email}
                                onChange={this.onChange}
                            />
                        </div>
                        <br/>
                        <div className="text-center">
                            {/* thay đổi nút button */}
                            {inforHeader!=='' ?<button type="submit" className="btn btn-warning">Sửa</button>:<button type="submit" className="btn btn-success">Thêm</button>}                            
                                &nbsp;
                            <button type="reset" className="btn btn-danger" onClick={this.onCloseForm}>Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
