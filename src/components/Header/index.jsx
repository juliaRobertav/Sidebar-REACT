import React, { useState } from "react";
import {Container} from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

const Header = () => {
    const [sidebar, setSidebar] = useState(false) 
    {/* começa aparecendo como false e ao clicar ira chamar a função */}
    const showSiderbar = () => setSidebar(!sidebar)

    return (
        <Container> {/* Componente */}
            <FaBars onClick={showSiderbar} />
            {sidebar && < Sidebar active={setSidebar} />}  {/* sidebar só aparece quando a variável for true, ou seja, quando o botão for clicado */}
        </Container>
    )
}

export default Header