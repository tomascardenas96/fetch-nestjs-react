import { Shop } from 'src/shops/entities/shop.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  foodId: number;

  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => Shop, (shop) => shop.foods)
  shop: Shop;
}
