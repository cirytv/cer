import { Request, Response } from 'express'
import Propietario from '../models/Propietarios.model'

export const getPropietarios = async (req: Request, res: Response) => {
  const propietario = await Propietario.findAll({
    order: [['id', 'ASC']],
  })
  res.json({ data: propietario })
}

export const getPropietarioById = async (req: Request, res: Response) => {
  const { id } = req.params
  const propietario = await Propietario.findByPk(id)

  if (!propietario) {
    return res.status(404).json({
      error: 'Item Not Found',
    })
  }

  res.json({ data: propietario })
}

export const createPropietario = async (req: Request, res: Response) => {
  const propietario = await Propietario.create(req.body)
  res.status(201).json({ data: propietario })
}

export const updatePropietario = async (req: Request, res: Response) => {
  const { id } = req.params
  const propietario = await Propietario.findByPk(id)

  if (!propietario) {
    return res.status(404).json({
      error: 'Item Not Found',
    })
  }

  //   Actualizar
  await propietario.update(req.body)
  await propietario.save()
  res.json({ data: propietario })
}

export const deletePropietario = async (req: Request, res: Response) => {
  const { id } = req.params
  const propietario = await Propietario.findByPk(id)

  if (!propietario) {
    return res.status(404).json({
      error: 'Item Not Found',
    })
  }

  //   delete
  await propietario.destroy()
  res.json({ data: 'Item Deleted' })
}
