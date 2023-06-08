import { randomUUID } from 'node:crypto'

interface IMembersProps {
  name: string
  problem: string
}

interface IChildrenProps {
  name: string
  occupation?: string
  age?: number
  gender?: string
  comments?: string
}

export interface IFamilyAndYouProps {
  personalDataId: string
  placeOfBirth: string
  fatherAge?: number
  fatherDeathAge?: number
  ageWhenFatherDied?: number
  fatherOccupation?: string
  fatherDescription?: string
  motherAge?: number
  motherDeathAge?: number
  ageWhenMotherDied?: number
  motherOccupation?: string
  motherDescription?: string
  problemsWithParents?: string
  relationshipBrothers?: string
  atmosphereHome?: string
  importantChanges?: string
  anyoneImportantForMe?: string
  psychiatricTreatment?: number
  historyOfMentalIllness?: number
  member?: IMembersProps[]
  children?: IChildrenProps[]
  anyMemberFamilySuicideAttempt?: number
  anyMemberFamilyDiedBySuicide?: number
  manyChildrenThereInFamily?: number
  botherYou?: string
}

export class FamilyAndYou {
  private _id: string
  private _createdAt: Date
  private _updatedAt: Date
  private props: IFamilyAndYouProps

  constructor(props: IFamilyAndYouProps, id?: string) {
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

  public set placeOfBirth(placeOfBirth: string) {
    this.props.placeOfBirth = placeOfBirth
  }

  public get placeOfBirth(): string {
    return this.props.placeOfBirth
  }

  public set fatherAge(fatherAge: number | undefined) {
    this.props.fatherAge = fatherAge
  }

  public get fatherAge(): number | undefined {
    return this.props.fatherAge
  }

  public set fatherDeathAge(fatherDeathAge: number | undefined) {
    this.props.fatherDeathAge = fatherDeathAge
  }

  public get fatherDeathAge(): number | undefined {
    return this.props.fatherDeathAge
  }

  public set ageWhenFatherDied(ageWhenFatherDied: number | undefined) {
    this.props.ageWhenFatherDied = ageWhenFatherDied
  }

  public get ageWhenFatherDied(): number | undefined {
    return this.props.ageWhenFatherDied
  }

  public set fatherOccupation(fatherOccupation: string | undefined) {
    this.props.fatherOccupation = fatherOccupation
  }

  public get fatherOccupation(): string | undefined {
    return this.props.fatherOccupation
  }

  public set fatherDescription(fatherDescription: string | undefined) {
    this.props.fatherDescription = fatherDescription
  }

  public get fatherDescription(): string | undefined {
    return this.props.fatherDescription
  }

  public set motherAge(motherAge: number | undefined) {
    this.props.motherAge = motherAge
  }

  public get motherAge(): number | undefined {
    return this.props.motherAge
  }

  public set motherDeathAge(motherDeathAge: number | undefined) {
    this.props.motherDeathAge = motherDeathAge
  }

  public get motherDeathAge(): number | undefined {
    return this.props.motherDeathAge
  }

  public set ageWhenMotherDied(ageWhenMotherDied: number | undefined) {
    this.props.ageWhenMotherDied = ageWhenMotherDied
  }

  public get ageWhenMotherDied(): number | undefined {
    return this.props.ageWhenMotherDied
  }

  public set motherOccupation(motherOccupation: string | undefined) {
    this.props.motherOccupation = motherOccupation
  }

  public get motherOccupation(): string | undefined {
    return this.props.motherOccupation
  }

  public set motherDescription(motherDescription: string | undefined) {
    this.props.motherDescription = motherDescription
  }

  public get motherDescription(): string | undefined {
    return this.props.motherDescription
  }

  public set problemsWithParents(problemsWithParents: string | undefined) {
    this.props.problemsWithParents = problemsWithParents
  }

  public get problemsWithParents(): string | undefined {
    return this.props.problemsWithParents
  }

  public set relationshipBrothers(relationshipBrothers: string | undefined) {
    this.props.relationshipBrothers = relationshipBrothers
  }

  public get relationshipBrothers(): string | undefined {
    return this.props.relationshipBrothers
  }

  public set atmosphereHome(atmosphereHome: string | undefined) {
    this.props.atmosphereHome = atmosphereHome
  }

  public get atmosphereHome(): string | undefined {
    return this.props.atmosphereHome
  }

  public set importantChanges(importantChanges: string | undefined) {
    this.props.importantChanges = importantChanges
  }

  public get importantChanges(): string | undefined {
    return this.props.importantChanges
  }

  public set anyoneImportantForMe(anyoneImportantForMe: string | undefined) {
    this.props.anyoneImportantForMe = anyoneImportantForMe
  }

  public get anyoneImportantForMe(): string | undefined {
    return this.props.anyoneImportantForMe
  }

  public set psychiatricTreatment(psychiatricTreatment: number | undefined) {
    this.props.psychiatricTreatment = psychiatricTreatment
  }

  public get psychiatricTreatment(): number | undefined {
    return this.props.psychiatricTreatment
  }

  public set historyOfMentalIllness(
    historyOfMentalIllness: number | undefined,
  ) {
    this.props.historyOfMentalIllness = historyOfMentalIllness
  }

  public get historyOfMentalIllness(): number | undefined {
    return this.props.historyOfMentalIllness
  }

  public set member(member: IMembersProps[] | undefined) {
    this.props.member = member
  }

  public get member(): IMembersProps[] | undefined {
    return this.props.member
  }

  public set children(children: IChildrenProps[] | undefined) {
    this.props.children = children
  }

  public get children(): IChildrenProps[] | undefined {
    return this.props.children
  }

  public set anyMemberFamilySuicideAttempt(
    anyMemberFamilySuicideAttempt: number | undefined,
  ) {
    this.props.anyMemberFamilySuicideAttempt = anyMemberFamilySuicideAttempt
  }

  public get anyMemberFamilySuicideAttempt(): number | undefined {
    return this.props.anyMemberFamilySuicideAttempt
  }

  public set anyMemberFamilyDiedBySuicide(
    anyMemberFamilyDiedBySuicide: number | undefined,
  ) {
    this.props.anyMemberFamilyDiedBySuicide = anyMemberFamilyDiedBySuicide
  }

  public get anyMemberFamilyDiedBySuicide(): number | undefined {
    return this.props.anyMemberFamilyDiedBySuicide
  }

  public set manyChildrenThereInFamily(
    manyChildrenThereInFamily: number | undefined,
  ) {
    this.props.manyChildrenThereInFamily = manyChildrenThereInFamily
  }

  public get manyChildrenThereInFamily(): number | undefined {
    return this.props.manyChildrenThereInFamily
  }

  public set botherYou(botherYou: string | undefined) {
    this.props.botherYou = botherYou
  }

  public get botherYou(): string | undefined {
    return this.props.botherYou
  }

  public get createdAt(): Date {
    return this._createdAt
  }

  public get updatedAt(): Date {
    return this._updatedAt
  }
}
