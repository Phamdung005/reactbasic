import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo.js';
import { ToastContainer, toast, Bounce } from 'react-toastify';


class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'doing homework' },
            { id: 'todo2', title: 'cleaning house' },
            { id: 'todo3', title: 'shopping' }
        ],

        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add new todo successfully!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodo
        })

        toast.success("Delete todo successfully!");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex(item => item.id === todo.id);
            listTodosCopy[objIndex].title = editTodo.title;
            if (!editTodo.title) {
                toast.error("Title is required!");

            } else {

                this.setState({
                    listTodos: listTodosCopy,
                    editTodo: {}
                })
                toast.success("Edit todo successfully!");
                return;
            }
        }
        this.setState({
            editTodo: todo
        })

    }

    handleChangeTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        //let listTodos = this.state.listTodos
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(isEmptyObj);

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
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title}</span>
                                        /* <input value={item.title}></input> */
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>{index + 1} -
                                                    <input
                                                        value={editTodo.title}
                                                        onChange={(event) => this.handleChangeTodo(event)}
                                                    />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                        </>

                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            'Save' : 'Edit'
                                        }
                                    </button>
                                    <button className="deleye"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default ListTodo;