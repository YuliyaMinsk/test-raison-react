import { FC } from 'react'

interface LoadingIndicatorProps {
    isLoading: boolean
    loadingText: string
}

const LoadingIndicator: FC<LoadingIndicatorProps> = ({ isLoading, loadingText }) => {
    if (!isLoading) return null

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
            <div className="animate-pulse bg-white p-4 md:p-6 lg:p-8 shadow-lg rounded min-w-[200px] text-center">
                {loadingText}
            </div>
        </div>
    )
}

export { LoadingIndicator }
