import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { useAffiliates } from '../../hooks/useAffiliates'
import { useEffect } from 'react'
import { Link } from 'react-router-dom' // Importa para navegación

const Affiliate = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const { affiliates, getAffiliates } = useAffiliates()

  useEffect(() => {
    getAffiliates()
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 }, // Assuming ID might be small, adjust as needed
    {
      field: 'businessName',
      headerName: 'Business Name',
      flex: 2, // Increase flex for more space
      minWidth: 200,
      cellClassName: 'name-column--cell',
      renderCell: (params) => (
        <Link
          to={`/affiliate/${params.id}`}
          style={{
            color: colors.greenAccent[300],
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
        >
          {params.value}
        </Link>
      ),
    },
    {
      field: 'telefonoCelularPropietario',
      headerName: "Owner's Cell Phone",
      flex: 1,
      minWidth: 150,
      cellClassName: 'phone-column--cell',
      renderCell: (params) => (
        <Link
          to={`https://wa.me/${params.value}`}
          style={{
            color: colors.greenAccent[300],
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => (e.target.style.textDecoration = 'underline')}
          onMouseLeave={(e) => (e.target.style.textDecoration = 'none')}
        >
          Click to open WhatsApp chat
        </Link>
      ),
    },
    {
      field: 'rfcDeLaEmpresa',
      headerName: 'RFC of the Company',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'giroDeLaEmpresa',
      headerName: 'Business Sector',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'subGiroDeLaEmpresa',
      headerName: 'Sub-Business Sector',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'domicilioCompleto',
      headerName: 'Full Address',
      flex: 2,
      minWidth: 250,
    },
    {
      field: 'telefonoDelNegocio',
      headerName: 'Business Phone',
      flex: 1,
      minWidth: 150,
    },

    {
      field: 'telefonoCelularGerente',
      headerName: "Manager's Cell Phone",
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'emailPropietario',
      headerName: "Owner's Email",
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'emailGerente',
      headerName: "Manager's Email",
      flex: 1,
      minWidth: 200,
    },
    {
      field: 'fechaDeAfiliacion',
      headerName: 'Affiliation Date',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'fechaDeRenovacionDeAfiliacion',
      headerName: 'Affiliation Renewal Date',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'fechaDeCumpleanosPropietario',
      headerName: "Owner's Birthday",
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'fechaDeCumpleanosGerente',
      headerName: "Manager's Birthday",
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'fechaDePáginaWeb',
      headerName: 'Website Date',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'fechaDeFacebook',
      headerName: 'Facebook Date',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'fechaDeInstagram',
      headerName: 'Instagram Date',
      flex: 1,
      minWidth: 150,
    },
    {
      field: 'anexaConstanciaDeSituacionFiscal',
      headerName: 'Fiscal Status Attached',
      type: 'boolean',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'anexarSolicitudDeAfiliacion',
      headerName: 'Affiliation Request Attached',
      type: 'boolean',
      flex: 1,
      minWidth: 100,
    },
    {
      field: 'anexarFacturaDeAsociado',
      headerName: 'Associate Invoice Attached',
      type: 'boolean',
      flex: 1,
      minWidth: 100,
    },
  ]

  return (
    <Box m="20px">
      <Header title="AFILIADOS" subtitle="Lista de afiliados" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
            whiteSpace: 'normal', // Allow text to wrap
            lineHeight: '1.5em', // Adjust line height for readability
          },
          '& .name-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .phone-column--cell': {
            color: colors.greenAccent[300],
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: colors.blueAccent[700],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: colors.primary[400],
          },
          '& .MuiDataGrid-footerContainer': {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700],
          },
          '& .MuiCheckbox-root': {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          rows={affiliates || []}
          columns={columns}
          disableColumnMenu
          disableColumnFilter
          disableColumnSelector
        />
      </Box>
    </Box>
  )
}

export default Affiliate
