// @flow
import React from 'react';

//adding props because we want to apply flow static type checking
export const HelloWorld = (props: {id: number,name: string}) => (
    <p>Say my {props.name}!</p>
);
export const FunComp = () => (
    <h1>comp!</h1>
)
