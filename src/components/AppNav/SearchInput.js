import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

const SearchInput = ({placeholder, onClick, value, onChange}) =>
    <InputGroup>
        <Input 
            placeholder={`${placeholder}`} 
            value={value}
            onChange={onChange} />
        <InputGroupAddon addonType="prepend">
            <Button 
                color="primary" 
                onClick={onClick}> 
                    <i className="fas fa-search" />
            </Button>
        </InputGroupAddon>
    </InputGroup>

export default SearchInput;