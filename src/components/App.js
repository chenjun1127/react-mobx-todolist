import React, {Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';
import {inject, observer} from 'mobx-react';

@inject("todoList")
@observer
export default class App extends Component {
    render() {
        return (
            <div className="container">
                <AddTodo {...this.props}/>
                <TodoList {...this.props}/>
                <Footer {...this.props}/>
            </div>
        )
    }
}
 