import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action,
} from 'vuex-module-decorators';
import store from '@/store';
import { Article } from '@/interfaces/Article';
import { getGlobalFeed } from '@/apis/api';

type FeedType = 'global' | 'user';

@Module({
  dynamic: true,
  namespaced: true,
  name: 'articles',
  store,
})
class ArticlesModule extends VuexModule {
  feed: Article[] = [];

  @Mutation
  setFeed(articles: Article[]) {
    this.feed = articles;
  }

  @Action({ commit: 'setFeed' })
  async refreshFeed(feedType: FeedType) {
    const globalFeed = await getGlobalFeed();
    return globalFeed.articles;
  }
}

export default getModule(ArticlesModule);
