// @flow
import React from 'react';

export const HelloWorld = (props: {id: number,name: string}) => (
    <p>Say my {props.name}!</p>
);
export const FunComp = () => (
    <h1>comp!</h1>
)
