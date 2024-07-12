import { Shop } from 'src/shops/entities/shop.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({ nullable: false })
  address: string;

  @OneToMany(() => Shop, (shop) => shop.user)
  shops: Shop[];
}
