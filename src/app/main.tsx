import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'

/* eslint-disable-next-line import/no-internal-modules */
import '../shared/assets/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
