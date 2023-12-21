import { useEffect, useState } from 'react'

import { validateEmail } from '../utils'

interface ReturnType {
    email: string
    isEmailValid: boolean
    updateEmail: (newEmail: string) => void
}

const useSaveEmail = (): ReturnType => {
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(true)

    useEffect(() => {
        const savedEmail = sessionStorage.getItem('userEmail')
        if (savedEmail) {
            setEmail(savedEmail)
            setIsEmailValid(true)
        }
    }, [])

    const updateEmail = (newEmail: string) => {
        setEmail(newEmail)
        const isValid = validateEmail(newEmail)
        setIsEmailValid(isValid)
        if (isValid) {
            sessionStorage.setItem('userEmail', newEmail)
        }
    }

    return { email, isEmailValid, updateEmail }
}

export { useSaveEmail }
