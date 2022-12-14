import { Routes, Route, Navigate } from 'react-router-dom';
import { MarvelPage, DcPage, SearchPage, HeroPage } from '../pages';

import { Navbar } from '../../ui/components/NavBar'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />

                <Route path="/*" element={<Navigate to="/marvel" />} />
            </Routes>
        </>
    )
}
