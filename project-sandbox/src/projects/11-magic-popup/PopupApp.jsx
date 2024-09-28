import React, { useState, useEffect } from 'react'
import { Popup } from '../components/Popup.components'
import Title from '../components/Title'
import Button from '../components/Button'


export const PopupApp = () => {

    const [trigger, setTrigger] = useState(false);
    const [timeTrigger, setTimeTrigger] = useState(false);
    const [timeWarningTrigger, setTimeWarningTrigger] = useState(false);

    const triggerPopup = () => {
        console.log("trigger popup")
        setTrigger(!trigger)
    }

    useEffect(() => {
        setTimeout(() => {
            setTimeTrigger(true)
        }, 3000)

        setTimeout(() => {
            setTimeWarningTrigger(true)
        }, 8000)

    }, [])
    return (
        <div className='text-center'>
            <Title text={"Click for popup, or wait 3 seconds"} />
            <Button btnClass={"btn-primary"} onClick={triggerPopup} />
            <Popup
                type={"alert-info"}
                title={"Triggered Popup"}
                text={"This popup was triggered by a button"}
                handleClose={setTrigger}
                trigger={trigger}
            />
            <Popup
                type={"alert-danger"}
                title={"Time triggered Popup"}
                text={"This popup was triggered by a delay"}
                handleClose={setTimeTrigger}
                trigger={timeTrigger}
            />
            <Popup
                type={"alert-warning"}
                title={"Time triggered Popup"}
                text={"This popup was triggered by a delay"}
                handleClose={setTimeWarningTrigger}
                trigger={timeWarningTrigger}
            />
        </div>
    )
}
