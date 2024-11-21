import React from 'react'
import Test1 from './Test1'

export default function Home(props) {
    return (
        <div>
            <h1>{props.text} {props.test}</h1>
            <Test1 text={props.text}/>
        </div>
    )
}
