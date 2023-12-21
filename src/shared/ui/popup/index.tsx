import { FC } from 'react'

interface PopupProps {
    message: string
    onClose: () => void
    show: boolean
    closeButtonText: string
}

const Popup: FC<PopupProps> = ({ message, onClose, show, closeButtonText }) => {
    if (!show) return null

    return (
        <>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50"></div>
            <div className="fixed inset-0 flex items-center justify-center">
                <div className="bg-white p-4 md:p-6 lg:p-8 shadow-lg rounded min-w-[200px] text-center">
                    <h2 className="text-lg font-semibold text-gray-700">{message}</h2>
                    <div className="mt-4">
                        <button onClick={onClose} className="btn btn-primary w-full">
                            {closeButtonText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Popup }
