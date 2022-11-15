import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'
import { UserProvider } from './context/UserProvider'

export const MainApp = () => {
    return (
        <UserProvider>
            <h1>MainApp</h1>
            <hr />
            <NavBar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='/*' element={<Navigate />} to="/about" />
            </Routes>
        </UserProvider>
    )
}
