import { FC } from 'react'
import { useHistory } from 'react-router'

import { useBackButton, useEmailConfirmation } from '../../shared/hooks'
import { ActionButtons, LoadingIndicator, Popup } from '../../shared/ui'
import { LoginStepTwoText } from './texts'

const LoginStepTwo: FC = () => {
    const history = useHistory()
    const email = sessionStorage.getItem('userEmail') || ''
    const { confirmEmail, popupMessage, showPopup, closePopup, isLoading } = useEmailConfirmation()

    useBackButton(showPopup, closePopup)

    const handleBack = () => {
        history.push('/login/step-1')
    }

    const handleConfirm = () => {
        confirmEmail(email)
    }

    return (
        <div className="flex flex-col h-full justify-between relative">
            <p>
                {LoginStepTwoText.EMAIL_LABEL} {email}
            </p>

            <Popup
                message={popupMessage}
                onClose={closePopup}
                show={showPopup}
                closeButtonText={LoginStepTwoText.CLOSE_BUTTON}
            />
            <LoadingIndicator isLoading={isLoading} loadingText={LoginStepTwoText.LOADING_TEXT} />
            <ActionButtons
                onBack={handleBack}
                onConfirm={handleConfirm}
                isLoading={isLoading}
                backButtonText={LoginStepTwoText.BACK_BUTTON}
                confirmButtonText={LoginStepTwoText.CONFIRM_BUTTON}
            />
        </div>
    )
}

export { LoginStepTwo }
