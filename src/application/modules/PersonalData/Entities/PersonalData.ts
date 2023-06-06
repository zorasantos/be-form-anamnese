import { randomUUID } from 'node:crypto'

export interface IPersonalDataProps {
  name: string
  birthday: string
  gender: string
  occupation: string
  maritalStatus: string
  religion: string
  zipCode: string
  street: string
  number: string
  addressDetails?: string
  neighborhood: string
  city: string
  state: string
}

export class PersonalData {
  private _id: string
  private _createdAt: Date
  private _updatedAt: Date
  private props: IPersonalDataProps

  constructor(props: IPersonalDataProps, id?: string) {
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

  public set gender(gender: string) {
    this.props.gender = gender
  }

  public get gender(): string {
    return this.props.gender
  }

  public set occupation(occupation: string) {
    this.props.occupation = occupation
  }

  public get occupation(): string {
    return this.props.occupation
  }

  public set maritalStatus(maritalStatus: string) {
    this.props.maritalStatus = maritalStatus
  }

  public get maritalStatus(): string {
    return this.props.maritalStatus
  }

  public set religion(religion: string) {
    this.props.religion = religion
  }

  public get religion(): string {
    return this.props.religion
  }

  public set zipCode(zipCode: string) {
    this.props.zipCode = zipCode
  }

  public get zipCode(): string {
    return this.props.zipCode
  }

  public set street(street: string) {
    this.props.street = street
  }

  public get street(): string {
    return this.props.street
  }

  public set number(number: string) {
    this.props.number = number
  }

  public get number(): string {
    return this.props.number
  }

  public set addressDetails(addressDetails: string | undefined) {
    this.props.addressDetails = addressDetails
  }

  public get addressDetails(): string | undefined {
    return this.props.addressDetails
  }

  public set neighborhood(neighborhood: string) {
    this.props.neighborhood = neighborhood
  }

  public get neighborhood(): string {
    return this.props.neighborhood
  }

  public set city(city: string) {
    this.props.city = city
  }

  public get city(): string {
    return this.props.city
  }

  public set state(state: string) {
    this.props.state = state
  }

  public get state(): string {
    return this.props.state
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }
}
