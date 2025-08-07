import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo.js';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'cleaning house' },
            { id: 'todo3', title: 'shopping' }
        ]
    }

    addNewTodo = (todo) => {

        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
    }
    render() {
        let { listTodos } = this.state;
        //let listTodos = this.state.listTodos

        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                />
                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    <span>{index + 1} - {item.title}</span>
                                    <button className="edit">Edit</button>
                                    <button className="deleye">Delete</button>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default ListTodo;