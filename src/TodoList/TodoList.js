import React, { Component, Fragment } from 'react'
import TodoItem from "./TodoItem";
import './TodoList.css'

class TodoList extends Component {
  constructor( props ){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  // 输入框赋值
  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  };
  // 提交保存
  onSubmit = () => {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  };

  // 删除单项
  handleItemDelete( index ){
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list }
    })
  };

  // 列表渲染
  setListContent(){
    return this.state.list.map(( item, index ) =>
      <div key={index}>
        <TodoItem item={ item }
                  index={index}
                  handleItemDelete={ this.handleItemDelete.bind(this) }/>
        {/*<li key={ index }
            dangerouslySetInnerHTML={ { __html: item } }
            onClick={ index => this.handleItemDelete(index) }>
        </li>*/ }
      </div>
    )
  }

  render(){
    return (
      <Fragment>
        <label htmlFor="inputArea">请输入内容：</label>
        <input id="inputArea" type="text" className="input"
               value={ this.state.inputValue }
               onChange={ this.handleInputChange }/>
        <button onClick={ this.onSubmit }>提交</button>
        <ul>
          { this.setListContent() }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList
