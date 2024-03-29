import { UserDto } from 'src/app/models/User/userDto.interface';
export class UserParams {
  gender: string;
  minAge = 18;
  maxAge = 99;
  pageNumber = 1;
  pageSize = 5;
  orderBy = 'lastActive';

  constructor(user: UserDto) {
    this.gender = user.gender === 'female' ? 'male' : 'female';
  }
}
