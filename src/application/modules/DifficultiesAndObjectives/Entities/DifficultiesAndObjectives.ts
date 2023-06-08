import { randomUUID } from 'node:crypto'

export interface IDifficultiesAndObjectives {
  personalDataId: string
  difficultFirst: string
  difficultSecond?: string
  difficultThird?: string
  objective?: string
}

export class DifficultiesAndObjectives {
  private _id: string
  private _createdAt: Date
  private _updatedAt: Date
  private props: IDifficultiesAndObjectives

  constructor(props: IDifficultiesAndObjectives, id?: string) {
    this._id = id ?? randomUUID()
    this._createdAt = new Date()
    this._updatedAt = new Date()
    this.props = props
  }

  public get id() {
    return this._id
  }

  public set personalDataId(personalDataId: string) {
    this.props.personalDataId = personalDataId
  }

  public get personalDataId(): string {
    return this.props.personalDataId
  }

  public set difficultFirst(difficultFirst: string) {
    this.props.difficultFirst = difficultFirst
  }

  public get difficultFirst(): string {
    return this.props.difficultFirst
  }

  public set difficultSecond(difficultSecond: string | undefined) {
    this.props.difficultSecond = difficultSecond
  }

  public get difficultSecond(): string | undefined {
    return this.props.difficultSecond
  }

  public set difficultThird(difficultThird: string | undefined) {
    this.props.difficultThird = difficultThird
  }

  public get difficultThird(): string | undefined {
    return this.props.difficultThird
  }

  public set objective(objective: string | undefined) {
    this.props.objective = objective
  }

  public get objective(): string | undefined {
    return this.props.objective
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }
}
