import { STRING } from 'sequelize'
import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
  tableName: 'propietarios',
})
class Propietario extends Model {
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

export default Propietario
