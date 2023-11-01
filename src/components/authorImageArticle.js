import * as React from 'react'
import { authorImageContainer } from './layout.module.css'

const AuthorImageArticle = ({ data }) => {
    
    return (
        <>
        <div className={authorImageContainer}>
            <div dangerouslySetInnerHTML={{__html: data.nodeArticle?.author.displayName}}/>
            <img src = {data.nodeArticle?.mediaImage.mediaImage.url}></img>
            <div dangerouslySetInnerHTML={{__html: data.nodeArticle?.body.processed}}/>
        </div>
        </>
    )
}

export default AuthorImageArticle