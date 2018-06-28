/**
 * Created by 0easy-23 on 2017/8/15.
 */
import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class extends Component {
    render() {
        return (
            <div className="inner">
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!this.input.value.trim()) {
                        return
                    }
                    this.props.todoList.addTodo(this.input.value);
                    this.input.value = ''
                }}>
                    <input type="text" placeholder="React-Mobx Todolist" ref={node => {
                        this.input = node
                    }}/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}
