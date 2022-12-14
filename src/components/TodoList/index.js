import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { todoAdd } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { v4 as uuidv4, v4 } from 'uuid';
import { useState } from 'react';
import {  searchTextSelector, todoListSelector } from '../../redux/selectors';

export default function TodoList() {

  const [todoName, setTodoName] = useState();

  const [priority, setPriority] = useState('Medium');

  const todoList = useSelector(todoListSelector );
  const searchText = useSelector(searchTextSelector);

  const dispatch = useDispatch()

  const handlePriovityChange = (value) => {
    setPriority(value)
  }

  const handeInputChange = (e) => {
    setTodoName(e.target.value)
  }

  const handleClick = () => {
    dispatch(todoAdd(
      {
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      }
    )
    );
    setTodoName("")
    setPriority('Medium')
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
         {
           todoList.map(todo => <Todo key={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed}  />)
         }
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handeInputChange} />
          <Select value={priority} onChange={handlePriovityChange} defaultValue="Medium">
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button onClick={handleClick} type='primary'>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
