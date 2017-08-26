import React, {Component} from 'react';
import {Col, Row } from 'antd';

import Log from '../Log/Log';
const defaultState = [
    {
        isLoading: true,
        title: 'Card Title',
        content: ''
    }, {
        isLoading: true,
        title: 'Card Title',
        content: ''
    }, {
        isLoading: true,
        title: 'Card Title',
        content: ''
    }, {
        isLoading: true,
        title: 'Card Title',
        content: ''
    }, {
        isLoading: true,
        title: 'Card Title',
        content: ''
    }, {
        isLoading: true,
        title: 'Card Title',
        content: ''
    }
]
class LogList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            logList: props.list || defaultState
        }
    }
    render() {
        const list = this.state.logList;
        return (
            <div>
           <Row>
                {list.map((log,index) => (
                   <Col span={6} key = {index} style={{padding:'10px'}}>
                        <Log title={log.title} content={log.content} isLoading={log.isLoading}/>
                   </Col>
                ))}
            </Row>
           </div>
        );
    }
}

export default LogList;