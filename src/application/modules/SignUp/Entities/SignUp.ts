import { randomUUID } from 'node:crypto'
import { Password } from './Password'

export interface ISignUpProps {
  name: string
  birthday: string
  password: Password
  profile: string
}

export class SignUp {
  private _id: string
  private _createdAt: Date
  private _updatedAt: Date
  private _term: boolean
  private props: ISignUpProps

  constructor(props: ISignUpProps, id?: string) {
    this._id = id ?? randomUUID()
    this._createdAt = new Date()
    this._updatedAt = new Date()
    this._term = false
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

  public set profile(profile: string) {
    this.props.profile = profile
  }

  public get profile(): string {
    return this.props.profile
  }

  public set term(term: boolean) {
    this._term = term
  }

  public get term(): boolean {
    return this._term
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }
}
