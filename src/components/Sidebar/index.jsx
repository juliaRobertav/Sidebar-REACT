import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaUpload,
  FaArrowAltCircleUp,
  FaRegSun,  
  FaRegFileAlt,
  FaTasks,
  FaCar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => { //propriedade active

  const closeSidebar = () => { // quando a função for acionada através do botão FaTimes, ira setar como false, ocultando a sidebar
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" />
        <SidebarItem Icon={FaCar} Text="DataXtract" />
        <SidebarItem Icon={FaUpload} Text="Upload" />
        <SidebarItem Icon={FaTasks} Text="Measurement" />
        <SidebarItem Icon={FaArrowAltCircleUp} Text="Assign" />
        <SidebarItem Icon={FaRegFileAlt} Text="Files" />
        <SidebarItem Icon={FaRegSun} Text="Settings" />
      </Content>
    </Container>
  )
}

export default Sidebar