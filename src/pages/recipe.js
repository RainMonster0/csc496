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
            <p>{data.nodeFood?.mediaImage.mediaImage.url}</p>
            <p>{data.nodeFood?.difficulty}</p>
            <p>{data.nodeFood?.cookingTime}</p>
            <p>{data.nodeFood?.preparationTime}</p>
            <p>{data.nodeFood?.numberOfServings}</p>
            <p>{data.nodeFood?.ingredients}</p>
            <p>{data.nodeFood?.recipeInstruction.processed}</p>
            </>
    )}

export default pageTemplate