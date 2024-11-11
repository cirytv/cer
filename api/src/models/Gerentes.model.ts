import { STRING } from 'sequelize'
import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript'
import Empresa from './Empresas.model'
import Sucursal from './Sucursales.model'

@Table({
  tableName: 'gerentes',
})
class Gerente extends Model {
  // fk empresa
  @ForeignKey(() => Empresa)
  @Column({
    type: DataType.INTEGER,
  })
  declare propietarioId: number
  // fk sucursal
  @ForeignKey(() => Sucursal)
  @Column({
    type: DataType.INTEGER,
  })
  declare sucursalId: number

  // datos en general
  @Column({
    type: DataType.STRING(100),
  })
  declare nombre: string

  @Column({
    type: DataType.STRING(100),
  })
  declare email: string

  @Column({
    type: DataType.STRING(100),
  })
  declare celular: string

  @Column({
    type: DataType.STRING(100),
  })
  declare whatsapp: string

  @Column({
    type: DataType.DATE,
  })
  declare fecha_nacimiento: Date

  @Column({
    type: DataType.DATE,
  })
  declare fechaAfiliacion: Date
}

export default Gerente
