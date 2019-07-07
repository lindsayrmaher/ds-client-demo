import React, { Component } from 'react'
import ListItem from './ListItem'
import { Query } from 'react-apollo'
import gql from 'graphql-tag';

const CONTENT_QUERY = gql`{
    getContent {
        title
        author
        publishedAt
    }
}`

export default class ContentList extends Component {
    render() {
        return (
            <Query query={CONTENT_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
                    console.log(data.getContent)
                    const content = data.getContent

                    return (
                        <div>
                            {content.map(item => <ListItem item={item} />)}
                        </div>
                    )
                }}
            </Query>
        )
    }
}

