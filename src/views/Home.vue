<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/logo.png" alt="laji" />
    </div>
    <div class="content">
      <el-input placeholder="你是什么垃圾" @keyup.enter.native="apply" v-model="key" class="input-with-select">
        <el-button slot="append" @click="apply">搜索</el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.timeout = 10000; // 响应时间
axios.defaults.baseURL = 'https://api.66mz8.com/api/garbage.php';

export default {
  name: 'Home',
  data() {
    return {
      key: '',
      result: ''
    };
  },
  methods: {
    apply() {
      this.getJunkName();
    },
    getJunkName() {
      axios
        .get('/', {
          params: {
            name: this.key
          }
        })
        .then(res => {
          if (!res.data.data) {
            this.$message(`${this.key}你是什么垃圾？`);
          } else {
            this.$message(`你是${res.data.data}`);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  .logo {
    width: 150px;
    margin: 0 auto;
    margin-top: 100px;
    img{
      max-width: 100%;
    }
  }
  .content {
    width: 60%;
    margin: 0 auto;
    .select-container {
      width: 22%;
    }
    .input-container {
      width: 78%;
    }
  }
  .content /deep/ .el-input__inner {
    // border-radius: 25px;
    height: 50px;
    line-height: 50px;
    border-width: 2px;
  }
  .content /deep/ .el-input__icon {
    font-size: 24px;
    width: 40px;
    line-height: 50px;
    color: #b6b9c1;
  }
}
</style>
