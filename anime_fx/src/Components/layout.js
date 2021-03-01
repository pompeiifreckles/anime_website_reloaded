import React from 'react'

import {Container} from 'rsuite'
import { Grid, Row, Col } from 'rsuite';

import logo from '../Assets/logo.svg'
import './layout.css'

function Layout() {
    return (
        <Container>
            <Grid style={{backgroundColor: 'rgba(0,0,0,0.2)', width: '100%'}}>
            <Row>
                <Col xs={6} sm={6} md={6} lg={4}>
                    <img src={logo} alt="AnimeFX" style={styles.logo} />
                </Col>
                <Col xsHidden smHidden mdPush={2} lgPush={1} md={2}>
                    <h5 style={styles.navItem}>Home</h5>
                </Col>
                <Col xs={5} sm={4} xsPush={13} mdPush={12} md={2} lgPush={14}>
                    <h5 style={styles.navItem}>SIGN IN</h5>
                </Col>
                <Col xsHidden smHidden mdPush={12} md={2} lgPush={14}>
                    <h5 style={styles.navItem}>SIGN UP</h5>
                </Col>
            </Row>
            </Grid>
          
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
        marginTop: '30px',
        color: 'white',
        fontFamily: 'sans-serif'
    }
}

export default Layout