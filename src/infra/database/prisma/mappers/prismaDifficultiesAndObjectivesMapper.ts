// import { PersonalData as RawPersonalData } from '@prisma/client';
import { DifficultiesAndObjectives } from '@application/modules/DifficultiesAndObjectives/Entities/DifficultiesAndObjectives'

export class PrismaDifficultiesAndObjectivesMapper {
  static toPrisma(data: DifficultiesAndObjectives) {
    return {
      id: data.id,
      personalDataId: data.personalDataId,
      difficultFirst: data.difficultFirst,
      difficultSecond: data.difficultSecond,
      difficultThird: data.difficultThird,
      objective: data.objective,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    }
  }
}
