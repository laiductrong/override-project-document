import React, { Component } from 'react';


class Control extends Component {
    render(){
        return (
            <div>
                 <div className="text-center">
                    <h1></h1>
                    <hr/>
                </div>
                <div className="row">
                <div className={"col-xs-3 col-sm-3 col-md-3 col-lg-3"}>
                      
                    </div>
                    <div className={"col-xs-9 col-sm-9 col-md-9 col-lg-9"}>
                        <button type="button" className="btn btn-primary">
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                     
                    </div>
                </div>
            </div>
        );
    }
  ;
}

export default Control;
