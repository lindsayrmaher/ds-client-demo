import React from 'react'

const ListItem = (props) => {
    const item = props.item
    return (
        <div>
            Title: {item.title}
            Author: {item.author ? item.author : 'no author available'}
            Date Published: {item.publishedAt}
        </div>
    )
}
export default ListItem