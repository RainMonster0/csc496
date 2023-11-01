import { graphql } from 'gatsby'
import React from 'react'
import AuthorImageArticle from '../components/authorImageArticle'

const pageTemplate = props => {
    const data = {
        nodeArticle: props.pageContext.data
    }

    console.log(data);
    console.log(props);
    
    const pageData = '<h1>' + data.nodeArticle?.title + '</h1>';

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData}}/>
        <div>
            <AuthorImageArticle data = {data}/>
        </div>
        </>
    )}

export default pageTemplate