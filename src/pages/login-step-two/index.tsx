import { FC, useEffect } from 'react'
import { useHistory } from 'react-router'

import { useBackButton, useEmailConfirmation } from '../../shared/hooks'

const LoginStepTwo: FC = () => {
    const history = useHistory()
    const email = sessionStorage.getItem('userEmail') || ''
    const { confirmEmail, popupMessage, showPopup, closePopup, isLoading } = useEmailConfirmation()

    useBackButton(showPopup, closePopup)

    const handleBack = () => {
        history.push('/login/step-1')
    }

    return (
        <div className="flex flex-col h-full justify-between relative">
            <p>Email: {email}</p>

            {showPopup && (
                <>
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-50"></div>
                    <div className="fixed inset-0 flex items-center justify-center">
                        <div className="bg-white p-4 md:p-6 lg:p-8 shadow-lg rounded min-w-[200px] text-center">
                            <h2 className="text-lg font-semibold text-gray-700">{popupMessage}</h2>
                            <div className="mt-4">
                                <button onClick={closePopup} className="btn btn-primary w-full">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {isLoading && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="animate-pulse bg-white p-4 md:p-6 lg:p-8 shadow-lg rounded min-w-[200px] text-center">
                        Loading...
                    </div>
                </div>
            )}

            <div className="flex justify-between p-1">
                <button onClick={handleBack} className="btn flex-1 mr-2" disabled={isLoading}>
                    Back
                </button>
                <button
                    onClick={() => confirmEmail(email)}
                    className="btn flex-1 ml-2 btn-primary"
                    disabled={isLoading}
                >
                    Confirm
                </button>
            </div>
        </div>
    )
}

export { LoginStepTwo }
