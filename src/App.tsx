import tw from 'twin.macro'
import GlobalStyles from '@hummingbot/hbui/system/GlobalStyles'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './site/pages/home'
import Instructions from './site/pages/instructions'

const App = () => (
  <div tw='bg-body w-full h-screen'>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
