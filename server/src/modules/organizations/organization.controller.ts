import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import organizations, { Organization } from '../../models/organization';

@Controller('organizations')
export class OrganizationsController {
  organizations: Organization[];
  constructor() {
    this.organizations = [...organizations];
  }

  @Get('getOrganizations')
  async index(): Promise<Organization[]> {
    return this.organizations.filter(organization => organization.status == 1);
  }

  @Get('getOrganization/:id')
  async show(@Param('id') id: string): Promise<Organization> {
    return this.organizations.find((organization) => organization.id === parseInt(id) && organization.status == 1);
  }

  @Post('createOrganization')
  async create(@Body() { name }: { name: string }): Promise<Organization> {
    const organization = {
      id: this.organizations.length + 1,
      name,
      status: 1
    };
    this.organizations.push(organization);
    return organization;
  }

  @Put('editOrganization/:id')
  async update(@Param('id') id: string, @Body() data: Organization): Promise<Organization> {
    this.organizations = this.organizations.map((organization) =>
    organization.id === parseInt(id) ? { ...organization, ...data } : organization,
    );

    return data;
  }

  @Delete('deleteOrganization/:id')
  async destroy(@Param('id') id: string): Promise<Organization[]> {
    this.organizations = this.organizations.map((organization) =>
    organization.id === parseInt(id) ? { ...organization, status: 0 } : organization,
    );
    return this.organizations.filter(organization => organization.status == 1);
  }
}
