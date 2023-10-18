import { graphql } from 'gatsby'
import React from 'react'

const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);
    
    return (
        <>
            <h4>{data.nodeFood?.title}</h4>
            <p>{data.nodeFood?.preparationTime}</p>
            </>
    )}

export default pageTemplate