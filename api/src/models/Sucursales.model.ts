import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript'
import Empresa from './Empresas.model'

@Table({
  tableName: 'students',
})
class Sucursal extends Model {
  // fk empresa
  @Column({
    type: DataType.STRING(100),
  })
  declare ubicacion: string

  @ForeignKey(() => Empresa)
  @Column({
    type: DataType.INTEGER,
  })
  declare empresaId: number
}

export default Sucursal
