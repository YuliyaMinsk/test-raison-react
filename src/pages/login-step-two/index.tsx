import { FC } from 'react'
import { useHistory } from 'react-router'

const StepTwoPage: FC = () => {
    const history = useHistory()
    const email = localStorage.getItem('userEmail') || ''

    const handleBack = () => {
        history.push('/login/step-1')
    }

    const handleConfirm = async () => {
        try {
            alert('Success!')
        } catch (error) {
            alert('Error!')
        }
    }

    return (
        <div className="flex flex-col h-full justify-between">
            <p>Email: {email}</p>

            <div className="flex justify-between p-1">
                <button onClick={handleBack} className="btn flex-1 mr-2">
                    Back
                </button>
                <button onClick={handleConfirm} className="btn flex-1 ml-2 btn-primary">
                    Confirm
                </button>
            </div>
        </div>
    )
}

export { StepTwoPage }
