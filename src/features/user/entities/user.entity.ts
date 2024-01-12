import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number;

    @Column({ name: 'name', nullable: false, type: 'varchar' })
    name: string;

    @Column({ name: 'email', nullable: false, type: 'varchar', unique: true })
    email: string;

    @Column({ name: 'password', nullable: false, type: 'varchar' })
    password: string;

    @Column({ name: 'cpf', nullable: false, type: 'varchar', unique: true })
    cpf: string;

    @Column({ name: 'phone', type: 'varchar' })
    phone: string;

    @Column({ name: 'type_user', type: 'int' })
    typeUser: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
