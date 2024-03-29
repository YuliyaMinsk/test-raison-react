import { ChangeEvent, FC } from 'react'

interface FormCheckboxProps {
    checked: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    label: string
}

const FormCheckbox: FC<FormCheckboxProps> = ({ checked, onChange, label }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" checked={checked} onChange={onChange} className="checkbox checkbox-primary" />
                <span className="label-text">{label}</span>
            </label>
        </div>
    )
}

export { FormCheckbox }
