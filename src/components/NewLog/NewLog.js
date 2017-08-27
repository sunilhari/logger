import React, {Component} from 'react';
import {Input, Icon, Col, Row} from 'antd';
import './NewLog.css';
const {TextArea} = Input;
class NewLog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            log: ''
        }
    }
    onPressEnter = (e)=>{
        console.log('Value Saved:'+e.target.value);
    }
    onLogInput=(e)=>{
        this.setState({log:e.target.value});
    }
    render() {
        return (
            <div className="newLog" style={{height:'100%'}}>
                <Row type = "flex" justify="center" align ="middle" style={{height:'100%'}}>
                    <Col span = {12}>
                        <TextArea  placeholder={'Log It'} style={{padding:'10px',height:'30%'}} onChange={this.onLogInput} onPressEnter={this.onPressEnter}></TextArea>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NewLog;