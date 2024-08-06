import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'

const NotFoundPage = lazy(() => import("../paginas/publicas/NotFound/NotFoundPage.jsx"))

function RutaNotFound ({ children }) {
    return (
        <Routes>
            {children}
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default RutaNotFound;
