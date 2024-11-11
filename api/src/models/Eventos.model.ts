import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({
  tableName: 'eventos',
})
class Evento extends Model {
  @Column({
    type: DataType.STRING(100),
  })
  declare nombre: string

  @Default(new Date('2025-01-01'))
  @Column({
    type: DataType.DATE,
  })
  declare fecha: Date

  @Column({
    type: DataType.STRING(255),
  })
  declare descripcion: string
}

export default Evento
