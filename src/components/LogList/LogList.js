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
           <Row type="flex" justify="space-around" align="center">
                {list.map((log,index) => (
                   <Col xl={{ span: 6}} sm={{ span: 6}} md={{ span: 4}} xs={{ span: 21}} lg={{ span: 5}} style={{ marginBottom: 10,marginRight:10 }}key = {index}>
                        <Log title={log.title} content={log.content} isLoading={log.isLoading}/>
                   </Col>
                ))}
            </Row>
           </div>
        );
    }
}

export default LogList;