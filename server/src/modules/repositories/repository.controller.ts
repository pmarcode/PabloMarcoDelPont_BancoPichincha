import {
  Controller,
  Get
} from '@nestjs/common';

import { repositories, IRepository } from '../../models/repository';

interface Repositories {
  repositories: IRepository[];
}

@Controller('repositories')
export class RepositoriesController {
  private repositories: Repositories = { repositories };
  constructor() {}

  @Get('getVerificationCodes')
  async index(): Promise<Repositories> {
    return this.repositories;
  }
}
