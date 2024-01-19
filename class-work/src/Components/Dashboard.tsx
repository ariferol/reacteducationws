import * as React from 'react';
import AppHeader from '../Layout/AppHeader';
import Users from './Users';

const Dashboard = () => {
    return ( 
        <section id="dashboard">
            <AppHeader />
            <Users />
        </section>
     );
}
 
export default Dashboard;