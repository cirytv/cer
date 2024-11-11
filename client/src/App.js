import { Routes, Route } from 'react-router-dom'
import Topbar from './scenes/global/Topbar'
import Sidebar from './scenes/global/Sidebar'
import Dashboard from './scenes/dashboard'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import Empresas from './scenes/empresas'
import Empresarios from './scenes/empresarios'
import FormEmpresarios from './scenes/form/FormEmpresarios'

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/empresarios" element={<Empresarios />} />
              <Route path="/empresas" element={<Empresas />} />
              <Route path="/form/empresarios" element={<FormEmpresarios />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
