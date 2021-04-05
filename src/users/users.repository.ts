import { EntityRepository, Repository } from 'typeorm';
import { UserDto } from './interfaces/User.dto';
import { User } from './users.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (userDto: UserDto) => {
    return await this.save(userDto);
  };
}
