import { ChangeEvent, FC, useState } from 'react'
import { useHistory } from 'react-router'

import { FormCheckbox, FormInput } from '../../shared/ui'
import { useHoldButton, useSaveEmail } from '../../shared/hooks'
import { AppRoutes } from '../../shared/constants'
import { LoginStepOneText } from './texts'

const LoginStepOne: FC = () => {
    const history = useHistory()
    const { email, isEmailValid, updateEmail } = useSaveEmail()
    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked)
    }

    const handleProceed = () => {
        if (isEmailValid && isChecked) {
            history.push(AppRoutes.LOGIN_STEP_TWO)
        }
    }

    const { holdTimeLeft, startHolding, stopHolding } = useHoldButton(handleProceed)

    return (
        <div className="flex flex-col h-full justify-between">
            <div>
                <FormInput
                    value={email}
                    onChange={(event) => updateEmail(event.target.value)}
                    label={LoginStepOneText.EMAIL_LABEL}
                    placeholder={LoginStepOneText.PLACEHOLDER_EMAIL}
                />
                <p className={`text-red-500 text-sm mt-2 ${isEmailValid ? 'opacity-0' : 'opacity-100'}`}>
                    {LoginStepOneText.INVALID_EMAIL_ERROR}
                </p>
                <FormCheckbox
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    label={LoginStepOneText.AGREE_LABEL}
                />
            </div>

            <button
                onMouseDown={startHolding}
                onMouseUp={stopHolding}
                onMouseLeave={stopHolding}
                disabled={!isEmailValid || !isChecked}
                className={`btn ${!isEmailValid || !isChecked ? 'btn-disabled' : 'btn-primary'}`}
            >
                {LoginStepOneText.HOLD_TO_PROCEED} ({holdTimeLeft / 1000})
            </button>
        </div>
    )
}

export { LoginStepOne }
