import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript'
import Evento from './Eventos.model'
import Gerente from './Gerentes.model'
import Propietario from './Propietarios.model'

@Table({
  tableName: 'invitaciones',
})
class Invitacion extends Model {
  @ForeignKey(() => Evento)
  @Column({
    type: DataType.STRING,
  })
  declare eventoId: string

  // invitado gerente
  @ForeignKey(() => Gerente)
  @Column({
    type: DataType.STRING,
  })
  declare gerenteId: string

  // invitado propietario
  @ForeignKey(() => Propietario)
  @Column({
    type: DataType.STRING,
  })
  declare propietarioId: string

  @Column({
    type: DataType.DATE,
  })
  declare fechaInvitacion: Date

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare confirmado: boolean
}

export default Invitacion
