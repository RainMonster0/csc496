import { graphql } from 'gatsby'
import React from 'react'
import ListOfIngredients from '../components/ingredientsAndRecipe'
import PrepInfo from '../components/preparationAndImage'

const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }

    console.log(data);
    console.log(props);

    data.nodeFood?.ingredients.forEach((i => console.log(i)))

    const pageData = '<h1>' + data.nodeFood?.title + '</h1>';
    
    return (
        <>
            <div dangerouslySetInnerHTML={{__html: pageData}}/>
            <div>
                <PrepInfo data={data}/>
                <ListOfIngredients data={data}/>
            </div>
            </>
    )}

export default pageTemplate