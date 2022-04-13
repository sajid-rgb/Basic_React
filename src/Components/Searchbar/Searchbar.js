import React, { useEffect, useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Searchbar = (props) => {

    return (
        <div>
            <InputGroup className="mb-3 w-50" onChange={props.handleChange}>
                <InputGroup.Text id="inputGroup-sizing-default">Food Search</InputGroup.Text>
                <FormControl
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    name="search"
                />
            </InputGroup>

        </div>
    );
};

export default Searchbar;