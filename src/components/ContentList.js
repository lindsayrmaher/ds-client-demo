import React, { Component } from 'react'
import ListItem from './ListItem'
// import fakeData from '../../seed'

export default class ContentList extends Component {
    render() {
        return (
            <div>
                {fakeData.map(item => <ListItem item={item} />)}
            </div>
        )
    }
}

const fakeData = [
    {
        id: "1",
        headline: "Headline for Story One",
        metaDescription: "meta description 1",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "2",
        headline: "Headline for Story Two",
        metaDescription: "meta description 2",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "3",
        headline: "Headline for Story Three",
        metaDescription: "meta description 3",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "4",
        headline: "Headline for Story Four",
        metaDescription: "meta description 4",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "5",
        headline: "Headline for Story Five",
        metaDescription: "meta description 5",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "6",
        headline: "Headline for Story Six",
        metaDescription: "meta description 6",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "7",
        headline: "Headline for Story Seven",
        metaDescription: "meta description 7",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "8",
        headline: "Headline for Story Eight",
        metaDescription: "meta description 8",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "9",
        headline: "Headline for Story Nine",
        metaDescription: "meta description 9",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    },
    {
        id: "10",
        headline: "Headline for Story Ten",
        metaDescription: "meta description 10",
        shortURL: "https://tinyurl.com/yb28julc",
        lastModifiedDate: "1561142525937",
        searchThumbLocation: "https://cdns.abclocal.go.com/content/kgo/images/cms/091218-kgo-ap-bts-bbmas-2-img.jpg",
        section: "International"
    }
]