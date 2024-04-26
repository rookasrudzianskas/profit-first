// model/Post.js
import { Model } from '@nozbe/watermelondb';
import {date, field, immutableRelation, readonly, relation, text} from '@nozbe/watermelondb/decorators';

export default class AccountAllocation extends Model {
  static table = 'account_allocations';

  @readonly @date('created_at') createdAt: Date;
  @field('cap') cap: number;
  @field('amount') amount: number;

  @immutableRelation('accounts', 'account_id') account;
  @immutableRelation('allocations', 'allocation_id') allocation;
}
