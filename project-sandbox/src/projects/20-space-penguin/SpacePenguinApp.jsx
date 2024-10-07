import React, { useState, useEffect } from 'react'
import "./ship.css"
import Button from '../components/Button'
import SpaceShipObj from './objects/SpaceShipObj'
import Ship from "./svg/space-ship-rocket-svgrepo-com.svg"
import Earth from "./svg/planet-earth-svgrepo-com.svg"
import Moon from "./svg/moon-svgrepo-com.svg"
import PlanetObj from './objects/PlanetObj'
import MoonObj from './objects/MoonObj'
import Pengiun from "./svg/penguin-svgrepo-com.svg"

function SpacePenguinApp() {

    // const [shipAction, setShipAction] = useState()
    // const [transformScale, setTransformScale] = useState(200)
    const [shipProps, setShipProps] = useState({
        action: "",
        scale: 200,
    })

    const startShip = () => {
        // setShipAction("fly")
        // setTransformScale(50);
        setShipProps({
            action: "fly",
            scale: 50,
        })
    }

    const landShip = () => {
        // setShipAction("land")
        // setTransformScale(200);
        setShipProps({
            action: "land",
            scale: 200,
        })
    }

    const [shipType, setShipType] = useState(Ship)

    useEffect(() => {
        console.log(shipProps)
        if (shipProps.action == "land") {
            setShipType(Pengiun)
            setTimeout(() => {
                setShipType(Ship)
            }, 5500)
        } else {
            setShipType(Ship)
        }
    }, [shipProps.action])


    return (
        <div className='space'>
            <Button text='Launch' btnClass={"btn-danger"} onClick={startShip} />
            <section className='env'>
                <PlanetObj Planet={Earth} />
                <SpaceShipObj changeShip={shipType} scale={shipProps.scale} start={shipProps.action} />
                <MoonObj Moon={Moon} />
            </section>
            <Button text='Land' btnClass={"btn-info"} onClick={landShip} />
        </div>
    )
}

export default SpacePenguinApp