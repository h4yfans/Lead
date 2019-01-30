import React, {Component} from 'react';
import Form from './Form'
import Leads from './Leads'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Form/>
                <Leads/>
            </div>
        );
    }
}

export default Dashboard;