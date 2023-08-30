import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'assets/styles/App.css'
import { SearchPage } from 'pages'

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper dark:bg-slate-500">
        <div className="customContainer">
          <main>
            <Routes>
              <Route path="/" element={<SearchPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
