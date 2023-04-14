import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';


export default () => {
    const ref = useRef(null);
    // useRef creates an object "ref" that will be referenced later in the <div>. it has a property called 'current' which is accessible by useEffect

    useEffect(() => {
        mount(ref.current);
        // this is the reference to the HTML element, we are passing that into the mount function and then mount will render to the <div>
    })

    return <div ref={ref}/>;
};

// this is mount:
// const mount = (el) => {
//     ReactDOM.render(
//         <App/>,
//         el
//     );
// }
// so mount(ref.current) means to execute the mount function at the current value of ref
// <div ref={ref}/> just refers to the reference of whatever the component is mounted on, allowing us to extract and manipulate its properties