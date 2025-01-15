import { Request, Response } from 'express'
import Affiliate from '../models/Affiliate.model'

// get all
export const getAffiliates = async (req: Request, res: Response) => {
  const affiliates = await Affiliate.findAll()
  res.status(200).send(affiliates) // Changed status to 200 for getting items
}

// get by id
export const getAffiliateById = async (req: Request, res: Response) => {
  const { id } = req.params
  const affiliate = await Affiliate.findByPk(id)

  if (!affiliate) {
    return res.status(404).json({
      error: 'Item Not Found',
    })
  }

  res.status(200).send(affiliate)
}

// create
export const addAffiliate = async (req: Request, res: Response) => {
  let info = {
    businessName: req.body.businessName,
    rfcDeLaEmpresa: req.body.rfcDeLaEmpresa,
    giroDeLaEmpresa: req.body.giroDeLaEmpresa,
    subGiroDeLaEmpresa: req.body.subGiroDeLaEmpresa,
    domicilioCompleto: req.body.domicilioCompleto,
    telefonoDelNegocio: req.body.telefonoDelNegocio,
    telefonoCelularPropietario: req.body.telefonoCelularPropietario,
    telefonoCelularGerente: req.body.telefonoCelularGerente,
    emailPropietario: req.body.emailPropietario,
    emailGerente: req.body.emailGerente,
    fechaDeAfiliacion: req.body.fechaDeAfiliacion,
    fechaDeRenovacionDeAfiliacion: req.body.fechaDeRenovacionDeAfiliacion,
    fechaDeCumpleanosPropietario: req.body.fechaDeCumpleanosPropietario,
    fechaDeCumpleanosGerente: req.body.fechaDeCumpleanosGerente,
    fechaDePaginaWeb: req.body.fechaDePaginaWeb,
    fechaDeFacebook: req.body.fechaDeFacebook,
    fechaDeInstagram: req.body.fechaDeInstagram,
    anexaConstanciaDeSituacionFiscal: req.body.anexaConstanciaDeSituacionFiscal,
    anexarSolicitudDeAfiliacion: req.body.anexarSolicitudDeAfiliacion,
    anexarFacturaDeAsociado: req.body.anexarFacturaDeAsociado,
    tipoAfiliado: req.body.tipoAfiliado,
  }

  try {
    const affiliate = await Affiliate.create(info)
    res.status(201).send(affiliate) // Changed status to 201 for resource creation
    console.log(affiliate)
  } catch (error) {
    console.error('Error creating affiliate:', error)
    res.status(500).send({ error: 'Could not create affiliate' })
  }
}

// update
export const updateAffiliate = async (req: Request, res: Response) => {
  const { id } = req.params
  const affiliate = await Affiliate.findByPk(id)

  if (!affiliate) {
    return res.status(404).json({
      error: 'Item Not Found',
    })
  }

  // Update with corresponding fields
  await affiliate.update(req.body)
  await affiliate.save()
  res.send(affiliate)
}

// delete
export const deleteAffiliate = async (req: Request, res: Response) => {
  const { id } = req.params
  const affiliate = await Affiliate.findByPk(id)

  if (!affiliate) {
    return res.status(404).json({
      error: 'Item Not Found',
    })
  }

  // Delete
  await affiliate.destroy()
  res.send({ data: 'Item Deleted' })
}
