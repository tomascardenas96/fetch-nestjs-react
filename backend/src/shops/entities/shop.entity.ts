import { Food } from 'src/foods/entities/food.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  shopId: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @ManyToOne(() => User, (user) => user.shops)
  @JoinColumn({
    name: 'user'
  })
  user: User;

  @OneToMany(() => Food, (food) => food.shop)
  foods: Food[];
}
