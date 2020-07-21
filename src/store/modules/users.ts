import {
  VuexModule,
  Module,
  getModule,
  Action,
  Mutation,
} from 'vuex-module-decorators';
import store from '@/store';
import { Profile } from '../../interfaces/Profile';
import { User } from '../../interfaces/User';
import { UserSubmit } from '../../interfaces/UserSubmit';

import { loginUser } from '@/apis/api';

@Module({
  namespaced: true, //for generating a dynamic module
  name: 'users',
  store,
  dynamic: true,
})
class UsersModule extends VuexModule {
  user: User | null = null;
  profile: Profile | null = null;

  get userName() {
    return (this.user && this.user.username) || null;
  }

  @Mutation
  setUser(user: User) {
    this.user = user;
  }

  @Action({ commit: 'setUser' })
  async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    return user;
    // console.log(user);
  }
}

export default getModule(UsersModule);
