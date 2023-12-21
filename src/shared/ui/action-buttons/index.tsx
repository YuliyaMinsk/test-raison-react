import { FC } from 'react'

interface ActionButtonsProps {
    onBack: () => void
    onConfirm: () => void
    isLoading: boolean
    backButtonText: string
    confirmButtonText: string
}

const ActionButtons: FC<ActionButtonsProps> = ({ onBack, onConfirm, isLoading, backButtonText, confirmButtonText }) => {
    return (
        <div className="flex justify-between p-1">
            <button onClick={onBack} className="btn flex-1 mr-2" disabled={isLoading}>
                {backButtonText}
            </button>
            <button onClick={onConfirm} className="btn flex-1 ml-2 btn-primary" disabled={isLoading}>
                {confirmButtonText}
            </button>
        </div>
    )
}

export { ActionButtons }
