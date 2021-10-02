import React from 'react';
import Label from './Label/Label';
import Input from './Input/Input';
import Content from './Content/Content';



const Text = ({label, type, name, register, className}) =>{
    return <Label>
        <Content>{label}</Content>
        <Input type={type} name={name} ref={register} className={className}/>
    </Label>
}


const Field = {
    Text,
}

export default Field;