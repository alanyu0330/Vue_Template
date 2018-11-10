<template>
  <div class="hello">
    <div class="main">
      <div class="text">
        Vue-Template
      </div>
      <div>
        <img src="assets/image/majitoo.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    
    }
  },
  beforeCreate(){
    document.getElementsByTagName("body")[0].className="HelloBackGround";
  },
  beforeDestroy(){
    document.getElementsByTagName("body")[0].classList.remove("HelloBackGround");
  },

  methods:{
  }
}
</script>

<style lang="scss">
.HelloBackGround
{
  background:#000 url("../../assets/image/BG.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<style lang="scss" scoped>
.hello
{
  width:100%;
  height:100%;
  .main{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    .text
    {
      color:skyblue;
      font-size:32px;
      font-weight:500;
      text-align: center;
      margin-top:50px;
      margin-bottom:50px;
    }
  }
}
</style>
