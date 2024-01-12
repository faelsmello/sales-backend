import { Module } from '@nestjs/common';
import { UserModule } from './features/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

const MODULES = [UserModule];

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ['.env.development.local', '.env.development'],
        }),
        TypeOrmModule.forRoot({
            database: process.env.DATABASE_NAME,
            host: process.env.DATABASE_HOST,
            password: process.env.DATABASE_PASSWORD,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USER,
            type: 'postgres',
            entities: [`${__dirname}/**/*.entity{.ts,.js}`],
            migrations: [`${__dirname}/migration/{.ts,.js}`],
            migrationsRun: true,
            synchronize: true,
        }),
        ...MODULES,
    ],
})
export class AppModule {}
