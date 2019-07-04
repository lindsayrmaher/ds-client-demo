import React from 'react'

const ListItem = (props) => {
    const item = props.item
    return (
        <div>
            Title: {item.headline}
            Description: {item.metaDescription}
        </div>
    )
}
export default ListItem