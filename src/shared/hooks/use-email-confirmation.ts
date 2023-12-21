import { useState } from 'react'

interface ReturnType {
    confirmEmail: (email: string) => void
    popupMessage: string
    showPopup: boolean
    closePopup: () => void
    isLoading: boolean
}

const useEmailConfirmation = (): ReturnType => {
    const [popupMessage, setPopupMessage] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const confirmEmail = async (email: string) => {
        setIsLoading(true)

        try {
            const response = await fetch('http://localhost:4040/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()

            if (data.ok) {
                setPopupMessage('Success!')
            } else {
                setPopupMessage('Error!')
            }
        } catch (error) {
            setPopupMessage('Error!')
        }
        setShowPopup(true)
        setIsLoading(false)
    }

    const closePopup = () => {
        setShowPopup(false)
    }

    return { confirmEmail, popupMessage, showPopup, closePopup, isLoading }
}

export { useEmailConfirmation }
