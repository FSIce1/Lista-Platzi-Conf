import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';

import Layout from './Layout';

function App(){
    return (

        <Layout>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />    
                    <Route exact path="/badges/:badgeEdit/edit" component={BadgeEdit} />    
                    <Route exact path="/badges/:badgeDetails" component={BadgeDetailsContainer} />    
                
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </Layout>
    );
}

export default App;