/**
 * Created by 0easy-23 on 2017/8/15.
 */
import React, {Component} from 'react';
import {observer} from 'mobx-react';

@observer
export default class extends Component {
    onclick(children) {
        this.props.todoList.filterTodos(children);
        const arr = [...document.querySelectorAll('a')];
        for (let i = 0; i < arr.length; i++) {
            arr[i].classList.remove('active');
        }
        this.link.classList.add('active');
    }

    render() {
        const {active, children} = this.props;
        return (
            <a href="javascript:;" className={active ? 'active' : null} onClick={this.onclick.bind(this, children)} ref={node => {
                this.link = node
            }}>
                {children}
            </a>
        )
    }
}