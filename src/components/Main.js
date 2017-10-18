import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Thesaurus from './Thesaurus';

const Main = (props) => {
    return (
        <div>
            <main>
                <Switch>
                    <Route exact path='/' component={Thesaurus} />
                </Switch>
            </main>
        </div>
    )
}

export default Main;