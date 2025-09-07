import React, { useState } from 'react';

const Count = (props) => {

    /**
     * Challenge:
     * - Create a new component called `Count`
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the h2.count element below
     *      and display the incoming prop `number`
     * - Replace the h2.count below with an instance of
     *   the new Count component, passing the correct value
     *   to its `number` prop.
     * - After doing this, everything should be working the
     *   same as before.
     */
    let num =props.number
    
    return (
        <h2 className="count">{num}</h2>

    );
};

export default Count;