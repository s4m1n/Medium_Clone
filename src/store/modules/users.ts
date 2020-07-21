import { VuexModule, Module, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { Profile } from '../../interfaces/Profile';
import { User } from '../../interfaces/User';

@Module({
  namespaced: true, //for generating a dynamic module
  name: 'users',
  store,
})
class UsersModule extends VuexModule {
  user: User | null = null;
  profile: Profile | null = null;
}

export default getModule(UsersModule);
