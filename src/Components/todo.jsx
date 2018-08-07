import React from 'react';
import {Table, Button, Checkbox, Icon} from 'antd';
import PropTypes from 'prop-types';


const columns = ({remove_todo, complete_todo}) => [
    {
        dataIndex:'check-btn',
        key: 'check-btn',
        align:'center',
        render: (text, record) => (
            <Checkbox
            onClick={() => complete_todo(record.id)}
            checked={record.completed}
            />
        )
    },
    {
        dataIndex:'text',
        key:'text',
        align:'center',
        render: (text, record) => (
            <span style={record.completed?{textDecoration: "line-through"} : {}}>
                {text}
            </span>
        )
    },
    {
        dataIndex:'del-btn',
        key:'del-btn',
        align:'center',
        render: (text, record) => (
            <Button type="danger" onClick={()=>remove_todo(record.id)}>    
            <Icon type="close"/>
            </Button>
        )
    }
]
const todo = ({todos, remove_todo, complete_todo}) => (
    <Table 
    rowKey={record=>{return(record.id+record.text+record.completed)}} 
    columns={columns({remove_todo, complete_todo})} 
    dataSource={todos} 
    rowClassName={(record, index) => {return(record.completed? "completed" :  "")}}
    />
)

todo.propTypes = {
    todos: PropTypes.array,
    remove_todo: PropTypes.func,
    complete_todo: PropTypes.func
}

export default todo;