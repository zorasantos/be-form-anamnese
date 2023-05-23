import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class PersonalData1684839367934 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'PersonalData',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'birthday',
            type: 'string',
          },
          {
            name: 'gender',
            type: 'string',
          },
          {
            name: 'occupation',
            type: 'string',
          },
          {
            name: 'maritalStatus',
            type: 'string',
          },
          {
            name: 'religion',
            type: 'string',
          },
          {
            name: 'zipCode',
            type: 'string',
          },
          {
            name: 'number',
            type: 'string',
          },
          {
            name: 'addressDetails',
            type: 'string',
          },
          {
            name: 'neighborhood',
            type: 'string',
          },
          {
            name: 'city',
            type: 'string',
          },
          {
            name: 'state',
            type: 'string',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('PersonalData')
  }
}
