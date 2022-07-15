import {
  Controller,
  Get
} from '@nestjs/common';

import repositories, { Repository } from '../../models/repository';

interface Repositories {
  repositories: Repository[];
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
