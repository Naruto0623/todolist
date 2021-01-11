import React, { Component } from 'react'
import propTypes from 'prop-types';

class TodoItem extends Component {
  constructor( props ){
    super(props);
  }

  // 删除子项
  itemDelete = () => {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  };

  // 组件挂载前执行（即将过时，避免使用）
  componentWillMount(){

  }

  render(){
    return (
      <div onClick={ this.itemDelete }>
        { this.props.item }
      </div>
    );
  }

  // 组件挂在后执行
  componentDidMount(){

  }
  // 组件接收的props发生改变时执行，只要父组件的render被重新执行即被执行（即将过时，避免使用）
  componentWillReceiveProps( nextProps, nextContext ){

  }

  // 组件被更新前执行
  shouldComponentUpdate( nextProps, nextState, nextContext ){
    return true
  }

  // 组件被更新前，shouldComponentUpdate 返回true之后（即将过时，避免使用）
  componentWillUpdate( nextProps, nextState, nextContext ){

  }

  // 组件更新后执行
  componentDidUpdate( prevProps, prevState, snapshot ){

  }
}

TodoItem.propTypes = {
  item: propTypes.string,
  index: propTypes.number,
  handleItemDelete: propTypes.func
};
TodoItem.defaultProps = {
  item: 'Hello'
};
export default TodoItem
