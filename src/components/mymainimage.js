import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const MyMainImage = () => {
    return(
        <StaticImage
        alt="Italian dishes sitting on a table with a top down camera view."
        src="../images/restaurantdishes.jpg"
        />
    )
}

export default MyMainImage