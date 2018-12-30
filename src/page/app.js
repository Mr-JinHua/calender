import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

import Calendar from '../components/Calender.js'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShow: false,
            transitionJud: false
        }
    }
    render() {
        return (
            <div>
				<Calendar />
			</div>
        )
    }
}

export default App;
