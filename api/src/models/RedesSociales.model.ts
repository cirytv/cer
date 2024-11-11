import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript'
import Empresa from './Empresas.model'

@Table({
  tableName: 'Redes',
})
class Redes extends Model {
  // fk empresa
  @ForeignKey(() => Empresa)
  @Column({
    type: DataType.INTEGER,
  })
  declare empresaId: number

  @Column({
    type: DataType.STRING(100),
  })
  declare facebook: string

  @Column({
    type: DataType.STRING(100),
  })
  declare instagram: string

  @Column({
    type: DataType.STRING(100),
  })
  declare twitter: string

  @Column({
    type: DataType.STRING(100),
  })
  declare page: string
}

export default Redes
