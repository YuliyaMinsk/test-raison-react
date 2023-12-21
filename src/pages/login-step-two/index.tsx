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
        <div>
            <p>Email: {email}</p>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleConfirm}>Confirm</button>
        </div>
    )
}

export { StepTwoPage }
