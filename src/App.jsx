import { Routes, Route } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import History from './pages/History.jsx'
import Members from './pages/Members.jsx'
import MemberDetail from './pages/MemberDetail.jsx'
import Discography from './pages/Discography.jsx'
import AlbumDetail from './pages/AlbumDetail.jsx'
import Gallery from './pages/Gallery.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="members" element={<Members />} />
        <Route path="members/:id" element={<MemberDetail />} />
        <Route path="discography" element={<Discography />} />
        <Route path="discography/:id" element={<AlbumDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
