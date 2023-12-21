import { ChangeEvent, FC } from 'react'

interface FormInputProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormInput: FC<FormInputProps> = ({ value, onChange }) => {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input type="email" value={value} onChange={onChange} placeholder="Type here" className="input" />
        </label>
    )
}

export { FormInput }
