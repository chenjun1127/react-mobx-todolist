/**
 * Created by 0easy-23 on 2017/8/15.
 */
import React, {Component} from 'react';
import Link from './Link';

export default class extends Component {
    render() {
        return (
            <p className="footer">
                Show:{" "}
                <Link {...this.props} active={true}>
                    All
                </Link>
                {" | "}
                <Link  {...this.props}>
                    Active
                </Link>
                {" | "}
                <Link {...this.props}>
                    Completed
                </Link>
            </p>
        )
    }
}