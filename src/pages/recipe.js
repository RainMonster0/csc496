import { graphql } from 'gatsby'
import React from 'react'

const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);
    console.log(props);
    
    return (
        <>
            <h4>{data.nodeFood?.title}</h4>
            <p>{data.nodeFood?.cookingTime}</p>
            <p>{data.nodeFood?.preparationTime}</p>
            </>
    )}

export default pageTemplate