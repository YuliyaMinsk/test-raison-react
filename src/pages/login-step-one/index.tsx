import { FC, useState } from 'react'
import { useHistory } from 'react-router'

import { FormCheckbox, FormInput } from '../../shared/ui'
import { useHoldButton, useSaveEmail } from '../../shared/hooks'

const LoginStepOne: FC = () => {
    const history = useHistory()
    const { email, isEmailValid, updateEmail } = useSaveEmail()
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }

    const handleProceed = () => {
        if (isEmailValid && isChecked) {
            history.push('/login/step-2')
        }
    }

    const { holdTimeLeft, startHolding, stopHolding } = useHoldButton(handleProceed)

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <FormInput value={email} onChange={(event) => updateEmail(event.target.value)} />
                <p className={`text-red-500 text-sm mt-2 ${isEmailValid ? 'opacity-0' : 'opacity-100'}`}>
                    Invalid email address
                </p>
                <FormCheckbox checked={isChecked} onChange={handleCheckboxChange} />
            </div>

            <button
                onMouseDown={startHolding}
                onMouseUp={stopHolding}
                onMouseLeave={stopHolding}
                disabled={!isEmailValid || !isChecked}
                className={`btn ${!isEmailValid || !isChecked ? 'btn-disabled' : 'btn-primary'}`}
            >
                Hold to proceed ({holdTimeLeft / 1000})
            </button>
        </div>
    )
}

export { LoginStepOne }
