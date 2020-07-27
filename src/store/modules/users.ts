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

import { loginUser, fetchProfile } from '@/apis/api';

@Module({
  namespaced: true, //for generating a dynamic module
  name: 'users',
  store,
  dynamic: true,
})
class UsersModule extends VuexModule {
  //State
  user: User | null = null;
  profile: Profile | null = null;

  //Getters
  get userName() {
    return (this.user && this.user.username) || null;
  }

  //Mutations
  @Mutation
  setUser(user: User) {
    this.user = user;
  }

  @Mutation
  setProfile(profile: Profile) {
    this.profile = profile;
  }

  //Actions
  @Action({ commit: 'setUser' })
  async login(userSubmit: UserSubmit) {
    const user = await loginUser(userSubmit);
    return user;
    // console.log(user);
  }

  @Action({ commit: 'setProfile' })
  async loadProfile(username: string) {
    const profile = await fetchProfile(username);
    return profile;
  }
}

export default getModule(UsersModule);
