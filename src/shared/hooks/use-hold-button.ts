import { useState, useEffect } from 'react'

interface ReturnType {
    holdTimeLeft: number
    startHolding: () => void
    stopHolding: () => void
}

const useHoldButton = (callback: () => void, holdTime = 500): ReturnType => {
    const [holdTimeLeft, setHoldTimeLeft] = useState(holdTime)
    const [holding, setHolding] = useState(false)

    useEffect(() => {
        let timerId: NodeJS.Timeout
        if (holding && holdTimeLeft > 0) {
            timerId = setTimeout(() => {
                setHoldTimeLeft(holdTimeLeft - 100)
                if (holdTimeLeft <= 100) {
                    callback()
                }
            }, 100)
        } else {
            setHoldTimeLeft(holdTime)
        }

        return () => clearTimeout(timerId)
    }, [holding, holdTimeLeft, callback, holdTime])

    const startHolding = () => setHolding(true)
    const stopHolding = () => setHolding(false)

    return { holdTimeLeft, startHolding, stopHolding }
}

export { useHoldButton }
