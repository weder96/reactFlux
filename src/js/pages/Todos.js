import React from 'react';

import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore';

export default class Todos extends React.Component {
    constructor() {
        super();
        this.getTodos = this.getTodos.bind(this);
        this.state = {
            todos: TodoStore.getAll()
        };
    }

    componentWillMount() {
        TodoStore.on('change', this.getTodos);
    }

    componentWillUnmount() {
        TodoStore.removeListener('change', this.getTodos);
    }

    getTodos() {
        this.setState({
            todos: TodoStore.getAll()
        });
    }

    reloadTodos() {
        TodoActions.reloadTodos();
    }

    render() {
        const { todos } = this.state;
        /* jshint ignore:start */
        const TodoComponents = todos.map(todo => {
            return <Todo key={todo.id} {...todo} />;
        });
        /* jshint ignore:end */

        return (
            /* jshint ignore:start */
            <div>
                <button onClick={this.reloadTodos.bind(this)}>Reload!</button>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
            /* jshint ignore:end */
        );
    }
}
