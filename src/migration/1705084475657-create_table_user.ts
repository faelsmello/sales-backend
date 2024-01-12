import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1705084475657 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE IF NOT EXISTS public."user"
            (
                id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
                name character varying COLLATE pg_catalog."default" NOT NULL,
                email character varying COLLATE pg_catalog."default" NOT NULL,
                password character varying COLLATE pg_catalog."default" NOT NULL,
                cpf character varying COLLATE pg_catalog."default" NOT NULL,
                phone character varying COLLATE pg_catalog."default" NOT NULL,
                type_user integer NOT NULL,
                created_at timestamp without time zone NOT NULL DEFAULT now(),
                updated_at timestamp without time zone NOT NULL DEFAULT now(),
                CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id),
                CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE (cpf),
                CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email)
            )
            
            TABLESPACE pg_default;
            
            ALTER TABLE IF EXISTS public."user"
                OWNER to postgres;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE public.user
        `);
    }
}

