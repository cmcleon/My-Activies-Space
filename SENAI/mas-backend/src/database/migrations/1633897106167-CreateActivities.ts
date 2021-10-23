import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateActivities1633897106167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "activities",
                columns:[
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",

                    },
                    {
                        name: "activy_date",
                        type: "date"

                    },
                    {
                        name: "grade",
                        type: "number"

                    },
                    {
                        name: "courseUnitId",
                        type: "varchar"

                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }

                ]
            })
        )
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("activities");
    }

}
