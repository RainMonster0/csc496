import * as React from 'react'
import { preparationGridContainer, preparationInfoContainer } from './layout.module.css'

const PrepInfo = ({ data }) => {

    return (
        <>
        <div className={preparationGridContainer}>
            <img src ={data.nodeFood?.mediaImage.mediaImage.url}/>
            <div className={preparationInfoContainer}>
                <h4>Preparation Time:</h4>
                <div dangerouslySetInnerHTML={{__html: data.nodeFood?.preparationTime}}/>
                <h4>Cooking Time:</h4>
                <div dangerouslySetInnerHTML={{__html: data.nodeFood?.cookingTime}}/>
                <h4>Number of Servings:</h4>
                <div dangerouslySetInnerHTML={{__html: data.nodeFood?.numberOfServings}}/>
                <h4>Difficulty:</h4>
                <div dangerouslySetInnerHTML={{__html: data.nodeFood?.difficulty}}/>
            </div>
        </div>
        </>
    )
}

export default PrepInfo