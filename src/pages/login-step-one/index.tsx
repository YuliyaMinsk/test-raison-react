import { FC, useState } from 'react'
import { useHistory } from 'react-router'

import { validateEmail } from '../../shared/utils'
import { FormCheckbox, FormInput } from '../../shared/ui'

const LoginPage: FC = () => {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }

    const handleProceed = () => {
        if (validateEmail(email) && isChecked) {
            localStorage.setItem('userEmail', email)
            history.push('/login/step-2')
        }
    }

    return (
        <div>
            <FormInput value={email} onChange={handleEmailChange} />
            <FormCheckbox checked={isChecked} onChange={handleCheckboxChange} />
            <button onClick={handleProceed} disabled={!validateEmail(email) || !isChecked}>
                Hold to proceed
            </button>
        </div>
    )
}

export { LoginPage }
