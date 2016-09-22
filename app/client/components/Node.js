// @flow
import React from 'react';

//adding props because we want to apply flow static type checking
export const Node = (props: {id: number,name: string}) => (
    <p>Say my {props.name}!</p>
);
