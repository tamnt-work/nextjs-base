import { beApi } from '@/utils/beApi';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './user.entity';
import { UserModel } from './user.model';

const prefix = '/users';

const UserService = {
  /**
   * Get all users
   * @returns
   */
  async all(): Promise<Array<UserModel>> {
    const { data } = await beApi.get<UserEntity[]>(prefix);

    return data.map((user) => user.toModel());
  },

  /**
   * Find one user by id
   * @param id
   * @returns
   */
  async findOne(id: string): Promise<UserModel> {
    const { data } = await beApi.get<UserEntity>(`${prefix}/${id}`);

    return data.toModel();
  },

  /**
   * Create a new user
   * @param user
   * @returns
   */
  async create(user: CreateUserDto): Promise<UserModel> {
    const { data } = await beApi.post<UserEntity>(prefix, {
      body: user.toForm(),
    });

    return data.toModel();
  },

  async update(id: string, user: UpdateUserDto): Promise<UserModel> {
    const { data } = await beApi.put<UserEntity>(`${prefix}/${id}`, {
      body: user.toForm(),
    });

    return data.toModel();
  },

  /**
   * Delete a user
   * @param id
   * @returns
   */
  async delete(id: string): Promise<boolean> {
    const { data } = await beApi.delete<UserEntity>(`${prefix}/${id}`);

    return !!data;
  },
};

export default UserService;
