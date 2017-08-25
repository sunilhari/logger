import React, {Component} from 'react';
import {Modal} from 'antd';
class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: (props.isVisible || false),
            message:(props.message||'Loading ...')
        }
    }
    render() {
        return (
            <div>
                <Modal
                    title=""
                    wrapClassName="vertical-center-modal"
                    visible={this.state.isVisible}
                    header={null}
                    maskClosable = {false}
                    closable={false}
                    footer={null}>
                    <center><p>{this.state.message}</p></center>
                </Modal>
            </div>
        );
    }
}

export default Loader;