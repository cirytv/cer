import { Box } from '@mui/material'
import Header from '../../components/Header'

import 'react-toastify/dist/ReactToastify.css'
import CongratCard from '../../components/Cards'
import { useAffiliates } from '../../hooks/useAffiliates'
import { useEffect } from 'react'

const Dashboard = () => {
  const { getAffiliates } = useAffiliates()

  useEffect(() => {
    getAffiliates()
  }, [])

  return (
    <Box m="20px">
      <Header title="Dashboard" subtitle="proximos eventos" />
      <Box>
        <h2>Cumples Empresarios</h2>
        <CongratCard cardType="owner" />
      </Box>
      <Box>
        <h2>Cumples Gerentes</h2>
        <CongratCard cardType="manager" />
      </Box>
      <Box>
        <h2>Afiliaciones proximas a vencer</h2>
        <CongratCard cardType="renova" />
      </Box>
    </Box>
  )
}

export default Dashboard
