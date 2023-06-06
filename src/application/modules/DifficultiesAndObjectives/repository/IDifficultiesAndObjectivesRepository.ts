import { DifficultiesAndObjectives } from '../Entities/DifficultiesAndObjectives'

export interface IDifficultiesAndObjectivesRepository {
  create(data: DifficultiesAndObjectives): Promise<void>
}
