import axios from 'axios'

export const addAffiliateApi = async (affiliate) => {
  const formData = new FormData()

  // String fields
  formData.append('businessName', affiliate.businessName)
  formData.append('rfcDeLaEmpresa', affiliate.rfcDeLaEmpresa)
  formData.append('giroDeLaEmpresa', affiliate.giroDeLaEmpresa)
  formData.append('subGiroDeLaEmpresa', affiliate.subGiroDeLaEmpresa)
  formData.append('domicilioCompleto', affiliate.domicilioCompleto)
  formData.append('telefonoDelNegocio', affiliate.telefonoDelNegocio)
  formData.append(
    'telefonoCelularPropietario',
    affiliate.telefonoCelularPropietario
  )
  formData.append('telefonoCelularGerente', affiliate.telefonoCelularGerente)
  formData.append('emailPropietario', affiliate.emailPropietario)
  formData.append('emailGerente', affiliate.emailGerente)
  formData.append('fechaDeAfiliacion', affiliate.fechaDeAfiliacion)
  formData.append(
    'fechaDeRenovacionDeAfiliacion',
    affiliate.fechaDeRenovacionDeAfiliacion
  )
  formData.append(
    'fechaDeCumpleanosPropietario',
    affiliate.fechaDeCumpleanosPropietario
  )
  formData.append(
    'fechaDeCumpleanosGerente',
    affiliate.fechaDeCumpleanosGerente
  )
  formData.append('fechaDePaginaWeb', affiliate.fechaDePaginaWeb)
  formData.append('fechaDeFacebook', affiliate.fechaDeFacebook)
  formData.append('fechaDeInstagram', affiliate.fechaDeInstagram)

  // Boolean fields
  formData.append(
    'anexaConstanciaDeSituacionFiscal',
    affiliate.anexaConstanciaDeSituacionFiscal
  )
  formData.append(
    'anexarSolicitudDeAfiliacion',
    affiliate.anexarSolicitudDeAfiliacion
  )
  formData.append('anexarFacturaDeAsociado', affiliate.anexarFacturaDeAsociado)

  const { data } = await axios.post(
    'http://localhost:4000/api/affiliates',
    formData,
    {
      headers: {
        'Content-Type': 'application/json', // Changed from 'application/json' to 'multipart/form-data'
      },
    }
  )
  return data
}

export const getAffiliatesApi = async () => {
  const { data } = await axios.get('http://localhost:4000/api/affiliates', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return data
}

export const getAffiliateByIdApi = async (id) => {
  const { data } = await axios.get(
    `http://localhost:4000/api/affiliates/${id}`, // Added a slash before id for correct URL formation
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  return data
}
