<template>
  <div class="hello">
    <van-button @click="login" round type="info" block>块级元素</van-button>
  </div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
import * as homeApi from 'api/home-api.js'
import {ERR_OK} from 'config/index'
export default {
  name: 'Home',
  data () {
    return {
      num: 0
    }
  },
  computed: {
    ...mapState({
      number: state => state.Home.number
    })
  },
  methods: {
    ...mapMutations({
      setNum: 'SET_NUM'
    }),
    increase () {
      this.num++;
      this.setNum(this.num);
    },
    login () {
      homeApi.loginUserNo({type: 'guess'}).then(res => {
        console.log(res);
        console.log( ERR_OK);
      })
    }
  }
}
</script>

<style scoped>

</style>
