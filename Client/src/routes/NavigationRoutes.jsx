import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SplashPage from '../pages/SplashPage/SplashPage'
import SpecialThanks from '../pages/SpecialThanks/SpecialThanks'
import TopNav from '../ui/Nav'
import Card from '../ui/Card/Card'

function NavigationRoutes() {
  return (
    <>
    <BrowserRouter>
    <TopNav />
        <Routes>
            <Route path="/" element={<SplashPage/>} />
            <Route path="/citations" element={<SpecialThanks />} />
            <Route path="*" element={<Card>404 Not Found</Card>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default NavigationRoutes