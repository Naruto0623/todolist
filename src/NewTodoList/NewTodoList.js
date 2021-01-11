import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List, Typography, Divider } from 'antd';
import store from "../store";

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class NewTodoList extends Component {
  constructor( props ){
    super(props);
    this.state = store.getState();
  }

  render(){
    return (
      <div style={ { padding: "20px" } }>
        <Input value={ this.state.inputValue }
               style={ { width: "300px", marginRight: "20px" } }
               placeholder="todo info"/>
        <Button type="primary">提交</Button>
        <List bordered style={ { marginTop: "20px", width: "300px" } }
              renderItem={ item => (
                <List.Item>
                  { item }
                </List.Item>
              ) }
              dataSource={ this.state.list }/>
      </div>
    );
  }
}

export default NewTodoList
