import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Order from './components/Order';
import PageHome from './components/PageHome';
import Bill from './components/Bill';
import BillItem from './components/BillItem';
import Category from './components/Category';
import GoodsReceivedNote from './components/GoodsReceivedNote';
import GoodsReceivedNoteItem from './components/GoodsReceivedNoteItem';
import ImageProduct from './components/ImageProduct';
import OrderItem from './components/OrderItem';
import SKU from './components/SKU';
import Statistic from './components/Statistic';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            statusHome: true,
            statusCustomer:false,
            statusOrder:false,
            statusBill: false,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: false
        }
    }
    onOpenPageHome=()=>{
        this.setState({
            statusHome: true,
            statusCustomer: false,
            statusOrder: false,
            statusBill: false,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: false
        })
    }
    onOpenPage1=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: true,
            statusOrder: false,
            statusBill: false,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: false
        })
    }
    onOpenPage2=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: false,
            statusOrder: true,
            statusBill: false,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: false
        })
    }
    onOpenPage3=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: false,
            statusOrder: false,
            statusBill: true,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: false
        })
    }
    onOpenPage4=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: false,
            statusOrder: false,
            statusBill: false,
            statusBillItem: true,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: false
        })
    }
    onOpenPage5=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: false,
            statusOrder: false,
            statusBill: false,
            statusBillItem: false,
            statusCategory: true,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: false
        })
    }
    onOpenPage6=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: false,
            statusOrder: false,
            statusBill: false,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: true,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: false
        })
    }
    onOpenPage7=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: false,
            statusOrder: false,
            statusBill: false,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: true,
            statusOrderItem: false,
            statusSKU: false
        })
    }
    onOpenPage8=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: false,
            statusOrder: false,
            statusBill: false,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: true,
            statusSKU: false
        })
    }
    onOpenPage9=()=>{
        this.setState({
            statusHome: false,
            statusCustomer: false,
            statusOrder: false,
            statusBill: false,
            statusBillItem: false,
            statusCategory: false,
            statusGoodsReceivedNote: false,
            statusGoodsReceivedNoteItem: false,
            statusOrderItem: false,
            statusSKU: true
        })
    }
    render(){
        var {statusHome,statusCustomer,statusOrder,statusBill,statusBillItem,statusCategory,statusGoodsReceivedNote,statusGoodsReceivedNoteItem,statusOrderItem,statusSKU}= this.state;
        return (
            <div>
                <div>
                <nav className="navbar navbar-inverse ontop">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">BananaStore</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li onClick={this.onOpenPageHome}><a href="#products">Giày</a></li>
                            <li onClick={this.onOpenPage1}><a href="#customer">Khách hàng</a></li>
                            <li onClick={this.onOpenPage2}><a href="#order">Order</a></li>
                            <li onClick={this.onOpenPage3}><a href="#bill">Hóa đơn</a></li>
                            {/* <li onClick={this.onOpenPage4}><a href="#billitem">CT hóa đơn</a></li> */}
                            <li onClick={this.onOpenPage5}><a href="#category">Loại giày</a></li>
                            <li onClick={this.onOpenPage6}><a href="#goodsReceivedNote">Nhập hàng</a></li>
                            <li onClick={this.onOpenPage7}><a href="#goodsReceivedNoteItem">goodsReceivedNoteItem</a></li>
                            {/* <li onClick={this.onOpenPage8}><a href="#orderItem">orderItem</a></li> */}
                            <li onClick={this.onOpenPage9}><a href="#SKU">CT SKU</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </nav>
                {statusHome?<PageHome/>:''}
                {statusCustomer?<Customer/>:''}
                {statusOrder?<Order/>:''}
                {statusBill?<Bill/>:''}
                {statusBillItem?<BillItem/>:''}
                {statusCategory?<Category/>:''}
                {statusGoodsReceivedNote?<GoodsReceivedNote/>:''}
                {statusGoodsReceivedNoteItem?<GoodsReceivedNoteItem/>:''}
                {statusOrderItem?<OrderItem/>:''}
                {statusSKU?<SKU/>:''}
                {/* <Statistic/> */}
            </div>
            
                
            </div>
        );
    }
  
}

export default App;
