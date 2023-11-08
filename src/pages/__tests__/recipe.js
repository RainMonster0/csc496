import React from 'react'
import { render } from "@testing-library/react"

import Recipe from '../recipe'

describe(`Recipe`, () => {
    it("Displays the correct title", () => {
        const data = {
            site: {
                siteMetadata: {
                    title: "data",
                },
            },
        }
        
        const { container } = render(<Recipe data={data} />)

        expect(container.firstChild).toMatchSnapshot()
     })
})