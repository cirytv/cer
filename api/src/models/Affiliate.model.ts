import { Table, Column, Model, DataType, HasOne } from 'sequelize-typescript'

@Table({
  tableName: 'affiliates',
})
export default class Affiliate extends Model {
  @Column({
    type: DataType.STRING,
  })
  declare businessName: string

  @Column({
    type: DataType.STRING,
  })
  declare rfcDeLaEmpresa: string

  @Column({
    type: DataType.STRING,
  })
  declare giroDeLaEmpresa: string

  @Column({
    type: DataType.STRING,
  })
  declare subGiroDeLaEmpresa: string

  @Column({
    type: DataType.STRING,
  })
  declare domicilioCompleto: string

  @Column({
    type: DataType.STRING,
  })
  declare telefonoDelNegocio: string

  @Column({
    type: DataType.STRING,
  })
  declare telefonoCelularPropietario: string

  @Column({
    type: DataType.STRING,
  })
  declare telefonoCelularGerente: string

  @Column({
    type: DataType.STRING,
  })
  declare emailPropietario: string

  @Column({
    type: DataType.STRING,
  })
  declare emailGerente: string

  @Column({
    type: DataType.STRING,
  })
  declare fechaDeAfiliacion: string

  @Column({
    type: DataType.STRING,
  })
  declare fechaDeRenovacionDeAfiliacion: string

  @Column({
    type: DataType.STRING,
  })
  declare fechaDeCumpleanosPropietario: string

  @Column({
    type: DataType.STRING,
  })
  declare fechaDeCumpleanosGerente: string

  @Column({
    type: DataType.STRING,
  })
  declare fechaDePaginaWeb: string

  @Column({
    type: DataType.STRING,
  })
  declare fechaDeFacebook: string

  @Column({
    type: DataType.STRING,
  })
  declare fechaDeInstagram: string

  @Column({
    type: DataType.BOOLEAN,
  })
  declare anexaConstanciaDeSituacionFiscal: boolean

  @Column({
    type: DataType.BOOLEAN,
  })
  declare anexarSolicitudDeAfiliacion: boolean

  @Column({
    type: DataType.BOOLEAN,
  })
  declare anexarFacturaDeAsociado: boolean
}
