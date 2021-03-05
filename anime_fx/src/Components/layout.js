import React from 'react'
import { Container } from 'rsuite'
import { Drawer, Divider } from 'rsuite';

import NavBar from './navbar'
import logo from '../Assets/logo.svg'


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
            backdrop={true}
            style={{ opacity: 1 }}
            >
            <Drawer.Header>
                <Drawer.Title>
                    <img src={logo} alt="AnimeFX" style={styles.logo} />
                    <Divider/>
                </Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <ul style={{listStyle: 'none' }}>
                <li style={{ margin: '0 0 2rem 2em', fontSize: '20px'}}>Home</li>
                <li style={{ margin: '0 0 2rem 2em', fontSize: '20px' }}>Trending</li>
                <li style={{ margin: '0 0 2rem 2em', fontSize: '20px' }}>Random</li>
                <li style={{ margin: '0 0 2rem 2em', fontSize: '20px' }}>Search</li>
                </ul>
                {/* <h1 style={{color: 'skyblue'}}>Hello</h1> */}
            </Drawer.Body>
            <Drawer.Footer>
            </Drawer.Footer>
            </Drawer>

        </Container>
    )
}

const styles = {
    logo: {
        position: 'relative',
        left: '4vw',
        maxWidth: '30vw',
        height: 'auto',
        minHeight: '90px',
        maxHeight: '9vh',

    },
}

export default Layout