<template>
  <div id="app" style="align:left">
    <el-container>
      <el-header>
        <!--<img style="all: inherit" src="./assets/logo.png">-->
        <el-autocomplete
          id="routerID"
          placeholder="请输入router地址，以“/”开头"
          clearable
          v-model="routeValue"
          :fetch-suggestions="querySearchAsync"
          @select="handleSelect">
        </el-autocomplete>
        <el-button @click="routerAddr()">跳转</el-button>
      </el-header>
    </el-container>


    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      restaurants: [],
      routeValue: '',
      timeout: null
    }
  },
  methods:{
    loadAll(){
      return [
        {"value":"/navmenu","dep":"@/components/elementUI/navmenu"},
        {"value":"/button","dep":"@/components/elementUI/button-element"},
        {"value":"/layout","dep":"@/components/elementUI/layout-element"}
      ]
    },
    querySearchAsync(queryString,cb){
      var restaurants = this.restaurants;
      var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

      //clearTimeout(this.timeout);
      cb(results);
      /*this.timeout = setTimeout(() => {
        cb(results);
      },3000 * Math.random());*/
    },
    createStateFilter(queryString){
      return (state) => {
        return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item){
      console.log(item);
    },
    routerAddr(){
      if(this.routeValue == ''){
        this.$message({
          message : '路由地址为空，请重新选择！',
          type : 'warning'
        });
      }else{
        this.$message({
          message : '正在跳转...',
          type : 'success'
        });
        this.$router.app({path:this.routeValue});
      };
      this.routeValue = '';
    }
  },
  mounted () {
    this.restaurants = this.loadAll();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
