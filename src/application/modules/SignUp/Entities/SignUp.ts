import { randomUUID } from 'node:crypto'
import { Password } from './Password'

export interface ISignUpProps {
  name: string
  birthday: string
  password: Password
}

export class SignUp {
  private _id: string
  private _createdAt: Date
  private _updatedAt: Date
  private props: ISignUpProps

  constructor(props: ISignUpProps, id?: string) {
    this._id = id ?? randomUUID()
    this._createdAt = new Date()
    this._updatedAt = new Date()
    this.props = props
  }

  public get id() {
    return this._id
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get name(): string {
    return this.props.name
  }

  public set birthday(birthday: string) {
    this.props.birthday = birthday
  }

  public get birthday(): string {
    return this.props.birthday
  }

  public set password(password: Password) {
    this.props.password = password
  }

  public get password(): Password {
    return this.props.password
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }
}
