import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'assets/styles/App.css'
import { SearchPage } from 'pages'

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
