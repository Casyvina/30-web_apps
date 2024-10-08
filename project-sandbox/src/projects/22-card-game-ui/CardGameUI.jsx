import React, { useState } from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import './cardGame.css'
import Card from './Card'

// Unit
import SpearManImg from "./svg/spear-man.svg";
import WarHoursMan from "./svg/warhorse-svgrepo-com.svg";
import Archer from "./svg/archer.svg"
// import ArcherImg from "./svg/archer.svg";
// import KnightImg from "./svg/knight.svg";


// import Knight from "./svg/knight-svgrepo-com.svg"




function CardGameUI() {
    const [start, setStart] = useState(false)

    document.body.style.background = "#170536"
    document.body.style.color = "#bab6bf"

    const startGame = () => {
        setStart(true)
    }

    return (
        <div className='container text-center'>

            {!start ? (<section className="text-center">
                <Title text={"Card Game"} />
                <Button text='Start' btnClass={"btn-success btn-lg"} onClick={startGame} />
                <Title classes={"subtitle"} text="Rules:" />
                <ul className='fs-lg d-flex flex-column' style={{ gap: 15 }}>
                    <li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad odit asperiores illum hic assumenda ratione dolorem quis. Molestiae, voluptatum explicabo!
                    </li><li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad odit asperiores illum hic assumenda ratione dolorem quis. Molestiae, voluptatum explicabo!
                    </li><li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad odit asperiores illum hic assumenda ratione dolorem quis. Molestiae, voluptatum explicabo!
                    </li><li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad odit asperiores illum hic assumenda ratione dolorem quis. Molestiae, voluptatum explicabo!
                    </li><li>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad odit asperiores illum hic assumenda ratione dolorem quis. Molestiae, voluptatum explicabo!
                    </li>
                </ul>
            </section>
            ) : (
                <>
                    <Title text={"0-1"} />
                    <main className="container m-auto game-board">
                        <section className="player_1">
                            <Card
                                player="player_1"
                                unitTypeName={"Sword Calvary "}
                                unitTypeImg={WarHoursMan}
                            />
                            <Card
                                player="player_1"
                                unitTypeName={"Spear man"}
                                unitTypeImg={SpearManImg}
                            />
                            <Card
                                player="player_1"
                                unitTypeName={"Archer man "}
                                unitTypeImg={Archer}
                            />
                            <Card
                                player="player_1"
                                unitTypeName={"Spear man"}
                                unitTypeImg={SpearManImg}
                            />
                        </section>
                        <section className="fog-of-war">

                        </section>
                        <section className="player_2">
                            <Card player="player_2"
                                unitTypeName={"Sword Calvary "}
                                unitTypeImg={WarHoursMan}
                            />
                            <Card player="player_2"
                                unitTypeName={"Spear man"}
                                unitTypeImg={SpearManImg}
                            />
                            <Card player="player_2"
                                unitTypeName={"Sword Calvary "}
                                unitTypeImg={WarHoursMan}
                            />
                            <Card player="player_2"
                                unitTypeName={"Archer man"}
                                unitTypeImg={Archer}
                            />
                        </section>
                    </main>
                </>
            )}

        </div>
    )
}

export default CardGameUI