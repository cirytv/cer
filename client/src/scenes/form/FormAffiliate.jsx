import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'
import { useAffiliates } from '../../hooks/useAffiliates'
import { useState } from 'react'

const FormAffiliate = () => {
  const isNonMobile = useMediaQuery('(min-width:600px)')
  const { addAffiliate } = useAffiliates()
  const [step, setStep] = useState(1)

  const handleFormSubmit = async (values) => {
    console.log('Form values:', values)
    try {
      const newAffiliate = await addAffiliate(values)
      console.log('Affiliate created: ', newAffiliate)
    } catch (error) {
      console.error('Error creating affiliate:', error.message)
    }
  }

  return (
    <Box m="20px">
      <Header
        title="CREATE AFFILIATE"
        subtitle="Create a New Affiliate Profile"
      />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          setFieldValue,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                }}
              >
                {/* Business Name */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Business Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.businessName}
                  name="businessName"
                  error={!!touched.businessName && !!errors.businessName}
                  helperText={touched.businessName && errors.businessName}
                  sx={{ gridColumn: 'span 4' }}
                />

                {/* RFC of the Company */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="RFC of the Company"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.rfcDeLaEmpresa}
                  name="rfcDeLaEmpresa"
                  error={!!touched.rfcDeLaEmpresa && !!errors.rfcDeLaEmpresa}
                  helperText={touched.rfcDeLaEmpresa && errors.rfcDeLaEmpresa}
                  sx={{ gridColumn: 'span 4' }}
                />

                {/* Business Sector */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Business Sector"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.giroDeLaEmpresa}
                  name="giroDeLaEmpresa"
                  error={!!touched.giroDeLaEmpresa && !!errors.giroDeLaEmpresa}
                  helperText={touched.giroDeLaEmpresa && errors.giroDeLaEmpresa}
                  sx={{ gridColumn: 'span 4' }}
                />

                {/* Sub-Business Sector */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Sub-Business Sector"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.subGiroDeLaEmpresa}
                  name="subGiroDeLaEmpresa"
                  error={
                    !!touched.subGiroDeLaEmpresa && !!errors.subGiroDeLaEmpresa
                  }
                  helperText={
                    touched.subGiroDeLaEmpresa && errors.subGiroDeLaEmpresa
                  }
                  sx={{ gridColumn: 'span 4' }}
                />

                {/* Full Address */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Full Address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.domicilioCompleto}
                  name="domicilioCompleto"
                  error={
                    !!touched.domicilioCompleto && !!errors.domicilioCompleto
                  }
                  helperText={
                    touched.domicilioCompleto && errors.domicilioCompleto
                  }
                  sx={{ gridColumn: 'span 4' }}
                />

                {/* Business Phone */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Business Phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.telefonoDelNegocio}
                  name="telefonoDelNegocio"
                  error={
                    !!touched.telefonoDelNegocio && !!errors.telefonoDelNegocio
                  }
                  helperText={
                    touched.telefonoDelNegocio && errors.telefonoDelNegocio
                  }
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Owner's Cell Phone */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Owner's Cell Phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.telefonoCelularPropietario}
                  name="telefonoCelularPropietario"
                  error={
                    !!touched.telefonoCelularPropietario &&
                    !!errors.telefonoCelularPropietario
                  }
                  helperText={
                    touched.telefonoCelularPropietario &&
                    errors.telefonoCelularPropietario
                  }
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Manager's Cell Phone */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Manager's Cell Phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.telefonoCelularGerente}
                  name="telefonoCelularGerente"
                  error={
                    !!touched.telefonoCelularGerente &&
                    !!errors.telefonoCelularGerente
                  }
                  helperText={
                    touched.telefonoCelularGerente &&
                    errors.telefonoCelularGerente
                  }
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Owner's Email */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Owner's Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emailPropietario}
                  name="emailPropietario"
                  error={
                    !!touched.emailPropietario && !!errors.emailPropietario
                  }
                  helperText={
                    touched.emailPropietario && errors.emailPropietario
                  }
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Manager's Email */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="email"
                  label="Manager's Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.emailGerente}
                  name="emailGerente"
                  error={!!touched.emailGerente && !!errors.emailGerente}
                  helperText={touched.emailGerente && errors.emailGerente}
                  sx={{ gridColumn: 'span 2' }}
                />
              </Box>
            )}{' '}
            {step === 2 && (
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
                }}
              >
                {/* Facebook Date */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Facebook Date"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setFieldValue('fechaDeFacebook', e.target.value)
                  }
                  value={values.fechaDeFacebook}
                  name="fechaDeFacebook"
                  error={!!touched.fechaDeFacebook && !!errors.fechaDeFacebook}
                  helperText={touched.fechaDeFacebook && errors.fechaDeFacebook}
                  InputProps={{ inputProps: { placeholder: '' } }}
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Instagram Date */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Instagram Date"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setFieldValue('fechaDeInstagram', e.target.value)
                  }
                  value={values.fechaDeInstagram}
                  name="fechaDeInstagram"
                  error={
                    !!touched.fechaDeInstagram && !!errors.fechaDeInstagram
                  }
                  helperText={
                    touched.fechaDeInstagram && errors.fechaDeInstagram
                  }
                  InputProps={{ inputProps: { placeholder: '' } }}
                  sx={{ gridColumn: 'span 2' }}
                />
                {/* Affiliation Date */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Affiliation Date"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setFieldValue('fechaDeAfiliacion', e.target.value)
                  }
                  value={values.fechaDeAfiliacion}
                  name="fechaDeAfiliacion"
                  error={
                    !!touched.fechaDeAfiliacion && !!errors.fechaDeAfiliacion
                  }
                  helperText={
                    touched.fechaDeAfiliacion && errors.fechaDeAfiliacion
                  }
                  InputProps={{ inputProps: { placeholder: '' } }}
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Affiliation Renewal Date */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Affiliation Renewal Date"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setFieldValue(
                      'fechaDeRenovacionDeAfiliacion',
                      e.target.value
                    )
                  }
                  value={values.fechaDeRenovacionDeAfiliacion}
                  name="fechaDeRenovacionDeAfiliacion"
                  error={
                    !!touched.fechaDeRenovacionDeAfiliacion &&
                    !!errors.fechaDeRenovacionDeAfiliacion
                  }
                  helperText={
                    touched.fechaDeRenovacionDeAfiliacion &&
                    errors.fechaDeRenovacionDeAfiliacion
                  }
                  InputProps={{ inputProps: { placeholder: '' } }}
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Owner's Birthday */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Owner's Birthday"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setFieldValue(
                      'fechaDeCumpleanosPropietario',
                      e.target.value
                    )
                  }
                  value={values.fechaDeCumpleanosPropietario}
                  name="fechaDeCumpleanosPropietario"
                  error={
                    !!touched.fechaDeCumpleanosPropietario &&
                    !!errors.fechaDeCumpleanosPropietario
                  }
                  helperText={
                    touched.fechaDeCumpleanosPropietario &&
                    errors.fechaDeCumpleanosPropietario
                  }
                  InputProps={{ inputProps: { placeholder: '' } }}
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Manager's Birthday */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Manager's Birthday"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setFieldValue('fechaDeCumpleanosGerente', e.target.value)
                  }
                  value={values.fechaDeCumpleanosGerente}
                  name="fechaDeCumpleanosGerente"
                  error={
                    !!touched.fechaDeCumpleanosGerente &&
                    !!errors.fechaDeCumpleanosGerente
                  }
                  helperText={
                    touched.fechaDeCumpleanosGerente &&
                    errors.fechaDeCumpleanosGerente
                  }
                  InputProps={{ inputProps: { placeholder: '' } }}
                  sx={{ gridColumn: 'span 2' }}
                />

                {/* Website Date */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Website Date"
                  onBlur={handleBlur}
                  onChange={(e) =>
                    setFieldValue('fechaDePaginaWeb', e.target.value)
                  }
                  value={values.fechaDePaginaWeb}
                  name="fechaDePaginaWeb"
                  error={
                    !!touched.fechaDePaginaWeb && !!errors.fechaDePaginaWeb
                  }
                  helperText={
                    touched.fechaDePaginaWeb && errors.fechaDePaginaWeb
                  }
                  InputProps={{ inputProps: { placeholder: '' } }}
                  sx={{ gridColumn: 'span 2' }}
                />
              </Box>
            )}
            {step === 2 && (
              <Box
                display="flex"
                flexDirection="column"
                gap="10px"
                sx={{ mt: 3 }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.anexaConstanciaDeSituacionFiscal}
                      onChange={(e) =>
                        setFieldValue(
                          'anexaConstanciaDeSituacionFiscal',
                          e.target.checked
                        )
                      }
                      name="anexaConstanciaDeSituacionFiscal"
                      color="primary"
                      size="small"
                      sx={{
                        color: 'white', // Unchecked color
                        '&.Mui-checked': {
                          color: 'red !important', // Override checked color to red
                        },
                      }}
                    />
                  }
                  label="Fiscal Status Attached"
                  sx={{
                    '& .MuiTypography-root': {
                      color: 'white',
                      fontSize: '1rem',
                    },
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.anexarSolicitudDeAfiliacion}
                      onChange={(e) =>
                        setFieldValue(
                          'anexarSolicitudDeAfiliacion',
                          e.target.checked
                        )
                      }
                      name="anexarSolicitudDeAfiliacion"
                      color="primary"
                      size="small"
                      sx={{
                        color: 'white', // Unchecked color
                        '&.Mui-checked': {
                          color: 'red !important', // Override checked color to red
                        },
                      }}
                    />
                  }
                  label="Affiliation Request Attached"
                  sx={{
                    '& .MuiTypography-root': {
                      color: 'white',
                      fontSize: '1rem',
                    },
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={values.anexarFacturaDeAsociado}
                      onChange={(e) =>
                        setFieldValue(
                          'anexarFacturaDeAsociado',
                          e.target.checked
                        )
                      }
                      name="anexarFacturaDeAsociado"
                      color="primary"
                      size="small"
                      sx={{
                        color: 'white', // Unchecked color
                        '&.Mui-checked': {
                          color: 'red !important', // Override checked color to red
                        },
                      }}
                    />
                  }
                  label="Associate Invoice Attached"
                  sx={{
                    '& .MuiTypography-root': {
                      color: 'white',
                      fontSize: '1rem',
                    },
                  }}
                />
              </Box>
            )}
            <Box display="flex" justifyContent="space-between" mt="20px">
              {step === 1 && (
                <Button
                  onClick={() => setStep(2)}
                  color="secondary"
                  variant="contained"
                >
                  Next
                </Button>
              )}
              {step === 2 && (
                <>
                  <Button
                    onClick={() => setStep(1)}
                    color="secondary"
                    variant="contained"
                  >
                    Previous
                  </Button>
                  <Button type="submit" color="secondary" variant="contained">
                    Create New Affiliate
                  </Button>
                </>
              )}
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  )
}

const checkoutSchema = yup.object().shape({
  businessName: yup.string().required('Required'),
  rfcDeLaEmpresa: yup.string().required('RFC is required'),
  giroDeLaEmpresa: yup.string().required('Business sector is required'),
  subGiroDeLaEmpresa: yup.string().required('Sub-business sector is required'),
  domicilioCompleto: yup.string().required('Full address is required'),
  telefonoDelNegocio: yup.string().required('Business phone is required'),
  telefonoCelularPropietario: yup
    .string()
    .required("Owner's cell phone is required"),
  telefonoCelularGerente: yup
    .string()
    .required("Manager's cell phone is required"),
  emailPropietario: yup
    .string()
    .email('Invalid email format')
    .required("Owner's email is required"),
  emailGerente: yup
    .string()
    .email('Invalid email format')
    .required("Manager's email is required"),
  fechaDeAfiliacion: yup.date().required('Affiliation date is required'),
  fechaDeRenovacionDeAfiliacion: yup
    .date()
    .required('Affiliation renewal date is required'),
  fechaDeCumpleanosPropietario: yup
    .date()
    .required("Owner's birthday is required"),
  fechaDeCumpleanosGerente: yup
    .date()
    .required("Manager's birthday is required"),
  fechaDePaginaWeb: yup.date().nullable(),
  fechaDeFacebook: yup.date().nullable(),
  fechaDeInstagram: yup.date().nullable(),
  anexaConstanciaDeSituacionFiscal: yup.boolean(),
  anexarSolicitudDeAfiliacion: yup.boolean(),
  anexarFacturaDeAsociado: yup.boolean(),
})

const initialValues = {
  businessName: '',
  rfcDeLaEmpresa: '',
  giroDeLaEmpresa: '',
  subGiroDeLaEmpresa: '',
  domicilioCompleto: '',
  telefonoDelNegocio: '',
  telefonoCelularPropietario: '',
  telefonoCelularGerente: '',
  emailPropietario: '',
  emailGerente: '',
  fechaDeAfiliacion: '',
  fechaDeRenovacionDeAfiliacion: '',
  fechaDeCumpleanosPropietario: '',
  fechaDeCumpleanosGerente: '',
  fechaDePaginaWeb: '',
  fechaDeFacebook: '',
  fechaDeInstagram: '',
  anexaConstanciaDeSituacionFiscal: false,
  anexarSolicitudDeAfiliacion: false,
  anexarFacturaDeAsociado: false,
}

export default FormAffiliate
