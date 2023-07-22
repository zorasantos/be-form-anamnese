import { create } from '@shared/helper/httpHelper'
import { IController } from '@shared/protocols/controller'
import { HttpRequest, HttpResponse } from '@shared/protocols/http'
import { CreateDifficultiesAndObjectivesUseCase } from './CreateDifficultiesAndObjectivesUseCase'
import { IDifficultiesAndObjectives } from '../../Entities/DifficultiesAndObjectives'

interface IDifficultiesAndObjectivesRequest
  extends IDifficultiesAndObjectives {}

export class CreateDifficultiesAndObjectivesController implements IController {
  constructor(
    private readonly useCase: CreateDifficultiesAndObjectivesUseCase
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const {
      difficultFirst,
      difficultSecond,
      difficultThird,
      objective,
      personalDataId
    } = request.body as IDifficultiesAndObjectivesRequest

    const data = {
      personalDataId,
      difficultFirst,
      difficultSecond,
      difficultThird,
      objective
    }
    const useCase = await this.useCase.execute(data)
    return create(useCase)
  }
}
