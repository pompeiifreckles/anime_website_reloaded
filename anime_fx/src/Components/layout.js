import React from 'react'

import {Container} from 'rsuite'
import { Grid, Row, Col } from 'rsuite';
import { Input, InputGroup } from 'rsuite';
import { Drawer } from 'rsuite';
import { Icon } from 'rsuite'
import { Button } from 'rsuite' 

import logo from '../Assets/logo.svg'
import './layout.css'

function Layout() {
    const [showDrawer, setShowDrawer] = React.useState(false);

    return (
        <Container>
            <Grid style={{backgroundColor: 'rgba(0,0,0,0.2)', width: '100%', zIndex: 1}}>
            <Row>
                <Col md={1} sm={3} xs={3}>
                    <div style={{cursor: 'pointer', marginLeft: '2vw', marginTop: '30px'}} onClick={() => setShowDrawer(!showDrawer)}>
                    <Icon icon="bars" size="2x" style={{color: 'white'}}/>
                    </div>
                </Col>
                <Col xs={6} sm={6} md={5} lg={4}>
                    <img src={logo} alt="AnimeFX" style={styles.logo} />
                </Col>
                <Col xsHidden smHidden mdPush={2} lgPush={1} md={1}>
                <Button appearance="subtle" color="red" style={styles.navItem}><h5>HOME</h5></Button>
                </Col>
                <Col md={6} mdPush={3} smHidden xsHidden>
                    <InputGroup inside style={{marginTop: '25px'}}>
                    <Input placeholder="Search" style={{backgroundColor: '#303030'}}/>
                    <InputGroup.Button>
                        <Icon icon="search" />
                    </InputGroup.Button>
                    </InputGroup>
                </Col>
                <Col xs={5} sm={4} xsPush={10} mdPush={6} md={2} lgPush={8}>
                <Button appearance="subtle" color="red" style={styles.navItem}><h5>SIGN IN</h5></Button>
                </Col>
                <Col xsHidden smHidden mdPush={6} md={2} lgPush={8}>
                    <Button appearance="subtle" color="red" style={styles.navItem}><h5>SIGN UP</h5></Button>
                </Col>
            </Row>
            </Grid>
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
            <Drawer.Body style={{backgroundColor: '#000000'}}>
            </Drawer.Body>
            <Drawer.Footer>
            </Drawer.Footer>
            </Drawer>
        </Container>
    )
}

const styles = {
    navbar: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        height: '10vw',
        maxHeight: '100px',
        minHeight: '90px',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    logo: {
        position: 'relative',
        left: '6vw',
        maxWidth: '30vw',
        height: 'auto',
        minHeight: '90px',
        maxHeight: '9vh',
        marginTop: '3px',
        marginBottom: '3px'
    },
    navItem: {
        marginTop: '25px',
        color: 'white',
        fontFamily: 'Roboto Condensed, sans-serif'
    }
}

export default Layout