import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { BucketProvider } from './context/BucketContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import TripBucketDrawer from './components/bucket/TripBucketDrawer.jsx'
import ProtectedRoute from './components/common/ProtectedRoute.jsx'
import Home from './pages/Home.jsx'
import Explore from './pages/Explore.jsx'
import StateCities from './pages/StateCities.jsx'
import CityDetail from './pages/CityDetail.jsx'
import Flights from './pages/Flights.jsx'
import TripPlanner from './pages/TripPlanner.jsx'
import Wishlist from './pages/Wishlist.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import About from './pages/About.jsx'
import FAQ from './pages/FAQ.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname]) //dependency array
  return null 
}

export default function App() {
  //nested context providers
  return (
    <ThemeProvider>
      <AuthProvider>
        <WishlistProvider>
          <BucketProvider>
            <ScrollToTop />
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/flights" element={<Flights />} />
                  <Route path="/trip-planner"element={
                    //user must pass authentication process
                      <ProtectedRoute>  
                        <TripPlanner />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/destination/:stateId" element={<StateCities />} />
                  <Route path="/destination/:stateId/:cityId" element={<CityDetail />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <TripBucketDrawer />
          </BucketProvider>
        </WishlistProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
