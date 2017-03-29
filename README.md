# vue-douban-copyTry

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
``` bash
  看了一个开源项目，这个是我对那个开源项目的部分提炼，基本上常用的都覆盖到了？
  去掉了vuex，组件间的通信基于$on $emit v-on 完成，后续我再学习vuex。
```
``` bash
  3.29
      新增使用vuex进行组件之间的通信的demo，感觉是方便了一些哈
      但是遇到一些问题，我使用 ...mapState(['inputVal']) 和 ...mapMutations(['addClick']) 在编译的时候会报错
  说是什么空对象啊之类的，找了半天才定位到是这个问题，但是怎么解决还没找到办法，网上说是使用babel插件，但是我
  用的是vue-cli进行初始化，感觉应该没问题啊。所以我现在用的是
    this.$store.state.val,this.$store.commit('inputVal',this.val)
  这种写法。
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
