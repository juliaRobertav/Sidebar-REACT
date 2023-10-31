import React from 'react'
import { Container } from './styles'

function Button( Icon, Text) {
    return(
        <div className="App">
            <Container>
                <Icon />
                {Text}
            </Container>
        </div>
    )
}

export default Button