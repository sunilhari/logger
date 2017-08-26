import React, {Component} from 'react';
import { Card } from 'antd';
class Log extends Component {
  constructor(props){
    super(props)
    this.state = {
        isLoading:true && (props.isLoading ||true ),
        title:props.title || 'Card Title',
        content:props.content||''

    }
  }
  render() {
    return (
    <Card loading={this.state.isLoading} title = {this.state.title}>
        <p>{this.state.content}</p>
    </Card>
    );
  }
}

export default Log;