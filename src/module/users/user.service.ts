import User from "#/users/user.model";

const create = async (data: any): Promise<any> => {
  const user = await User.create(data);
  return user;
};

const UserService = {
  create,
};

export default UserService;
