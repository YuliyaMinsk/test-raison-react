import { useEffect } from 'react'

const useBackButton = (showPopup: boolean, closePopup: () => void) => {
    useEffect(() => {
        const handleBackButton = (event: PopStateEvent) => {
            if (showPopup) {
                closePopup()
                event.preventDefault()
            }
        }

        window.addEventListener('popstate', handleBackButton)

        return () => {
            window.removeEventListener('popstate', handleBackButton)
        }
    }, [showPopup, closePopup])
}

export { useBackButton }
