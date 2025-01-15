import { Table, Column, Model, DataType, HasOne } from 'sequelize-typescript'

@Table({
  tableName: 'giros',
})
export default class Affiliate extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number

  @Column({
    type: DataType.STRING,
  })
  declare giroDeLaEmpresa: string

  @Column({
    type: DataType.STRING,
  })
  declare subGiroDeLaEmpresa: string
}
