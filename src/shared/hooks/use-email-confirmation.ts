import { useState } from 'react'

import { HttpMethod } from '../constants'

enum EmailConfirmationText {
    SUCCESS_MESSAGE = 'Success!',
    ERROR_MESSAGE = 'Error!',
}
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
                method: HttpMethod.POST,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()

            if (data.ok) {
                setPopupMessage(EmailConfirmationText.SUCCESS_MESSAGE)
            } else {
                setPopupMessage(EmailConfirmationText.ERROR_MESSAGE)
            }
        } catch (error) {
            setPopupMessage(EmailConfirmationText.ERROR_MESSAGE)
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
