import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'
import '../Styles/slider.css'

const list = Array.from({length: 10},
    (v,i) => ({name: 'item' + (i+1)})
)

const MenuItem = ({ text, selected }) => {
    return (
        <div className={`menu-item center ${selected ? "active" : ""}`}>
            <div style={{
                height: '100px',
                width: '200px',
                backgroundColor: 'blueviolet',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export const Menu = (list, selected) => list.map(el => {
    const { name } = el

    return <MenuItem text={name} key={name} selected={selected} />
})

const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>
}

const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" })
const ArrowRight = Arrow({text: ">", className: "arrow-next"})

const selected = "null"

export default function Slider() {
    const [select, setSelect] = React.useState(selected)
    
    const menuItems = Menu(list, selected)

    const onSelect = key => setSelect(key)

    return (
        <div style={{maxWidth: '70vw'}}>
        <ScrollMenu 
            // alignCenter={false}
            wheel={false}
            hideArrows={true}
            inertiaScrolling
            inertiaScrollingSlowdown={0.9}
            // transition={0.6}
            translate={20}
            data={menuItems}
            arrowLeft={ArrowLeft}
            arrowRight={ArrowRight}
            selected={select}
            onSelect={onSelect}
        />
        </div>
    )
}