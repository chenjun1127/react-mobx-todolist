/**
 * Created by 0easy-23 on 2017/8/15.
 */
import React, {Component} from 'react';

import {observer} from 'mobx-react';

@observer
export default class extends Component {
    delClick(id, type) {
        this.props.todoList.removeTodo(id, type);
    }

    onClickSelect(todo) {
        todo.completed = !todo.completed
    }

    render() {
        const {todos, todosCompleted, todosActive, todosType} = this.props.todoList;
        let list;
        if (todosType === 'All') {
            list = todos;
        } else if (todosType === 'Completed') {
            list = todosCompleted;
        } else {
            list = todosActive;
        }
        return (
            <ul className="dodo-list">
                {
                    list.map(todo => {
                        return (
                            <li key={todo.id}>
                                <em onClick={this.onClickSelect.bind(this, todo)} className={todo.completed ? 'selected' : null}></em>
                                <p onClick={this.onClickSelect.bind(this, todo)} style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none'
                                }}>
                                    {todo.title}
                                </p>
                                <span onClick={this.delClick.bind(this, todo.id, todosType)}>&times;</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}