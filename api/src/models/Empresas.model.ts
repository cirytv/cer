import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript'

@Table({
  tableName: 'empresas',
})
class Empresa extends Model {
  // fk propietario
  @ForeignKey(() => Empresa)
  @Column({
    type: DataType.INTEGER,
  })
  declare propietarioId: number

  // datos en general
  @Column({
    type: DataType.STRING(100),
  })
  declare razonSocial: string

  @Column({
    type: DataType.STRING(100),
  })
  declare rfc: string

  @Column({
    type: DataType.DATE,
  })
  declare fechaAfiliacion: Date
}

export default Empresa
