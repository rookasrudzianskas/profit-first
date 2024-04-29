// model/Post.js
import { Model } from '@nozbe/watermelondb';
import { field, readonly, date, nochange, } from '@nozbe/watermelondb/decorators';

export default class Allocation extends Model {
  static table = 'allocations';

  @field('income') income: number;
  @readonly @date('created_at') createdAt: Date;
  @readonly @date('updated_at') updatedAt: Date;
  @nochange @field('user_id') userId: string;
}
