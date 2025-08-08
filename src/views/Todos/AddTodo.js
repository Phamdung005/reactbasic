import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
        if (!this.state.title) {
            toast.error("Title is required!");
            return;
        }
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            //undefined/null/empty => false
            toast.error("Title is required!");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title}
                    onChange={(event) => this.handleChangeTitle(event)}
                />
                <button type="button" className="add"
                    onClick={() => this.handleAddTodo()}
                >Add</button>
            </div>
        )
    }
}

export default AddTodo;