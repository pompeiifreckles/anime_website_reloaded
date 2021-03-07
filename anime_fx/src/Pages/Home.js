import React from 'react'
import { Carousel } from 'rsuite'
import { FlexboxGrid } from 'rsuite';
import Slider from '../Components/slider'
// import { Link } from 'react-router-dom'

import '../Styles/carousel.css'

function Home() {
    return (
        <React.Fragment>
        <FlexboxGrid justify='center' style={{marginTop: '5vh'}}>
            <FlexboxGrid.Item>
            <Carousel key={'bottom.bar'} autoplay shape='bar' placement={'bottom'} style={styles.carousel} >
            <img
            src="https://c4.wallpaperflare.com/wallpaper/963/324/861/persona-5-atlus-persona-series-persona-4-wallpaper-preview.jpg"
            height="250"
            alt="Image_2"
            style={{position: 'relative'}}
            />

            <img
            src="https://free4kwallpapers.com/uploads/originals/2021/02/12/samurai-champloo-wallpaper.jpg"
            height="250px"
            alt="Image_4"
            />

            <img
            src="https://free4kwallpapers.com/uploads/originals/2020/12/07/dabi--myheroacadmia--wallpaper.jpg"
            height="250px"
            alt="Image_5"
            />
            
            </Carousel>
            </FlexboxGrid.Item>
        </FlexboxGrid>

        {/* <div style={{position: 'relative', top: '100px'}}> */}
        <h3 style={{paddingLeft: '15vw', marginTop: '10vh', marginBottom: '1em'}}>Popular</h3>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute'}}>
        <Slider />
        </div>
        {/* </div> */}

        </React.Fragment>
    )
}

const styles = {
    carousel: {
        width: '60vw',
        height: 'auto',
    }
}

export default Home