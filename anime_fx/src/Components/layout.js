import React from 'react'
import {Container} from 'rsuite'
import { Drawer } from 'rsuite';

import NavBar from './navbar'


export const NavBarInfo = React.createContext()

function Layout() {
    const [showDrawer, setShowDrawer] = React.useState(false);

    return (
        <Container>          
            <NavBarInfo.Provider value={{showDrawer, setShowDrawer}}>
            <NavBar/>
            </NavBarInfo.Provider>
            
            <Drawer
            size='xs'
            placement='left'
            show={showDrawer}
            onHide={() => setShowDrawer(false)}
            backdrop
            style={{zIndex: 0}}
            >
            <Drawer.Header>
                <Drawer.Title></Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
            </Drawer.Body>
            <Drawer.Footer>
            </Drawer.Footer>
            </Drawer>
        </Container>
    )
}

export default Layout