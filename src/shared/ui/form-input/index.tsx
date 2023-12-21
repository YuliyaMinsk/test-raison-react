import { ChangeEvent, FC } from 'react'

interface FormInputProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    label: string
    placeholder: string
}

const FormInput: FC<FormInputProps> = ({ value, onChange, label, placeholder }) => {
    return (
        <label className="form-control">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type="email" value={value} onChange={onChange} placeholder={placeholder} className="input" />
        </label>
    )
}

export { FormInput }
