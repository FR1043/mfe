import React from 'react';
// import { mount } from 'marketing/MarketingApp'
// we are importing this for near-zero coupling. if we just import a react component, it is non-generic

import MarketingApp from './components/MarketingApp';



export default () => {
    return <div>
            <h1>Hi there!</h1>
            <hr />
            <MarketingApp />
        </div>
};