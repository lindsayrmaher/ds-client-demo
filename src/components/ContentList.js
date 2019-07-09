import React, { Component } from 'react'
import ListItem from './ListItem'
import { Query } from 'react-apollo'
import gql from 'graphql-tag';

// move queries into a new 'utils' file
// renaming variable and updating query name
const CONTENT_QUERY = gql`{
    getContent {
        title
        author
        publishedAt
    }
}`

// to-do try to make this more DRY
//consolidate some of the query setups
const NYTIMES_QUERY = gql`{
    nytimesContent {
        title
        author
    }
}`



export default class ContentList extends Component {
    constructor() {
        super()
        this.state = {
            toggle: false
        }

        this.toggleClick = this.toggleClick.bind(this)
    }

    toggleClick() {
        this.setState(state => ({
            toggle: !state.toggle
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleClick}>Toggle Me!</button>
                {
                    this.state.toggle ?
                        <Query query={NYTIMES_QUERY}>
                            {({ loading, error, data }) => {
                                if (loading) return <div>Fetching</div>
                                if (error) return <div>Error</div>
                                const content = data.nytimesContent

                                return (
                                    <div>
                                        {content.map(item => <ListItem item={item} />)}
                                    </div>
                                )
                            }}
                        </Query> :
                        <Query query={CONTENT_QUERY}>
                            {({ loading, error, data }) => {
                                if (loading) return <div>Fetching</div>
                                if (error) return <div>Error</div>
                                const content = data.getContent

                                return (
                                    <div>
                                        {content.map(item => <ListItem item={item} />)}
                                    </div>
                                )
                            }}
                        </Query>
                }
            </div>
        )
    }
}

