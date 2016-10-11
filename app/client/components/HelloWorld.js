// @flow
import React from 'react';

const obj = [
  {
    title:"title here",
    modules:[FunComp],
  }
]

//adding props because we want to apply flow static type checking
export const HelloWorld = (props: {id: number,name: string}) => {
    obj.map((element)=>{
      return element.modules.map((module)=>{
        return <div>{module}</div>
      })
    })
    return <p>Say my {props.name}!</p>
};
export let FunComp = () => (
    <h1>comp!</h1>
)
