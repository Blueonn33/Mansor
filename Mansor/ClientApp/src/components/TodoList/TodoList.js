import React, { Component } from 'react';

export default class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    componentDidMount() {
        // fetch data from database and update state with todos
        // example fetch call:
        fetch('https://localhost:7286/api/taskItems')
            .then(res => res.json())
            .then(todos => this.setState({ todos }));
    }

    handleNewTodoChange = (event) => {
        this.setState({ newTodo: event.target.value });
    }

    handleNewTodoSubmit = (event) => {
        event.preventDefault();
        let splittedURL = window.location.pathname.split('/');
        let getTaskGroupId = splittedURL[splittedURL.length - 1];
        const newTodo = {
            value: this.state.newTodo,
            isCompleted: false,
            taskGroupId: getTaskGroupId
        };
        // send newTodo to database and update state with new todo
        // example fetch call:
        fetch('https://localhost:7286/api/taskItem/create', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(todo => {
                this.setState({
                    todos: [...this.state.todos, todo],
                    newTodo: ''
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <form onSubmit={this.handleNewTodoSubmit}>
                    <input type="text" value={this.state.newTodo} onChange={this.handleNewTodoChange} />
                    <button type="submit">Add Todo</button>
                </form>
                <ul>
                    {this.state.todos.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
