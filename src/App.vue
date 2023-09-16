<template>
<div>
  <header class="head-header">
    <i class="fa fa-bars" aria-hidden="true"></i>
    <img class="yt-logo" src="Images/youtube.JPG" alt="">
    <div class="search1">
      <div class="searchh">
        <div class="searchval">
        <input type="search" v-model= "storeval" class="search" placeholder="Search">
        <button class="btn-search" @click="searchfunc">
        <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        <!--<router-link :to="{name:'Search'}">
        
        </router-link>-->
        </div>
       <!--<Search v-if="videoif" :dataval="newdata" :checkval="check" />:searchres="storeval" @close="closeHome" @change="reschng"-->
      <div class="res_comp" v-if="stateHome"><!--v-if="rescheck"-->
        <div class="results" v-for="search in searchTag" :key="search">
        <iframe :src="url+search" width="337px" height="200px" showinfo=0 border-radius="10px" controls=0 autohid=1 
        modestbranding="1" frameborder="0"></iframe>
        <p>{{name}}</p>
        </div>
      </div>
       <!--<Videoplay v-if="videoif" :dataval="storeval" :checkval="check" />-->
      </div>
      
    </div>
    
    <!--v-if="searchcond"
    <input type="search" v-model= "storeval" class="search" placeholder="Search">
    <router-link :to="{name:'Search'}">
    <button class="btn-search" @click="search">
    <i class="fa fa-search" aria-hidden="true"></i>
    </button>
    </router-link>
    -->
    <button class="btn-mic"><i class="fa fa-microphone" aria-hidden="true"></i></button>
    <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
    <button class="btn-user">
    <i class="fa fa-user-circle" aria-hidden="true"></i> <span id="sign">Sign in</span>
    </button>
  </header>
</div>
<div class="contain-2">
  <div class="side-bar">
    <router-link :to="{name:'home'}" v-if="searchndhome">
    <span id="p-home" :class="{home:homecond}" @click="change"><i class="fa fa-home" aria-hidden="true"></i> <span>Home</span></span>
    </router-link> 
    <router-link :to="{name:'Shorts'}">
    <span id="p-home" :class="{short:homeshort}" @click="change"><i class="fa fa-bolt" aria-hidden="true"></i><span>Shorts</span></span>
    </router-link>
  </div>
 <!--<Search v-if="searchcond" :searchres="storeval"/>v-if="searchcond"-->
  <div v-if="check">
    <router-view/>
  </div>
</div>

  <!--<nav>
    <i class="fa fa-bars" aria-hidden="true"></i>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>-->
</template>
<script>
import Homevideo from './components/Homevideo'
import Search from './components/Search.vue'
import Videoplay from './components/Videoplay'
//import Shorts from './views/Shorts.vue';
export default {
  components:{
    Homevideo,Search,Videoplay
  },
  props:[],
  data(){
    return{
      storeval:'',
      stateHome:false,
      homecond:false,
      homeshort:false,
      searchndhome:true,
      check:true,
      videoif:false,
      url:'https://www.youtube.com/embed/',
      //name:this.searchres,
      searchTag:[],
      //searchcheck:true,
     //searchcond:false
    }
  },
  beforeMount(){
  this.check = true;
  },
  mounted(){
    //this.check = !this.check;
    this.homecond = true;
    //console.log(this.check)
  },
  methods:{
    closeHome(){
      this.check = false
    },
    searchfunc(){
    //this.videoif = true
    this.stateHome = true
    this.check = false
    console.log(this.check)
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q='+this.storeval+'&key=AIzaSyAAjtsWunb0kGdNkbutbrN2nEdnFo_DisA')
    .then(res=>res.json())
    .then((data)=>{
    console.log(data)
    //console.log(this.searchres)
    for(let i=0; i<data.items.length; i++)
    if(typeof data.items[i].id.videoId != "undefined"){
    this.searchTag[i] = data.items[i].id.videoId
    console.log(data.items[i].id.videoId)
    //console.log(this.name, typeof this.name)
    }
    })
    .catch(err=>console.log(err))
    //this.$router.push({name:'home'})
    },
    reschng(){
      if(this.homecond == false){
        this.rescheck = false;
        //console.log(this.rescheck)
      }
    },
    change(){
      this.storeval = ''
      this.videoif = false
      this.stateHome = false
      if(this.homecond==true){
      this.check = true
      this.homecond = false
      this.homeshort = true
      this.reschng = false
      //this.searchcheck = false
      }
     else{
      this.check = true
      this.homecond = true
      this.homeshort = false
      //this.searchcheck = false
     }
      
    }
  }
}
</script>
<style>
body{
  padding: 0;
  margin:0 20px;
}
*{
  padding: 0;
  margin: 0;
}
.head-header{
  position: fixed;
}
router-link{
  color: black;
}
iframe{
    border-radius: 15px;
}
iframe:hover{
    border-radius: 0px;
}
.fa-bars{
  font-size: 22px;
  font-weight:bold;
  margin-right: 10px;
}
.res_comp{
margin-top:20px;
width:85vw; 
/*background-color: pink;*/
}
.results{
/*width:300px;*/
display: inline-block;
margin-right: 20px;
border-radius: 5px;
/*background-color: yellow;*/
}
.searchval{
margin-top:-25px;
margin-left:45px;
}
.search1{
  width:700px;
  display: inline-block;
  /*background-color: yellow;*/
}
.searchh{
  position: absolute;
  display: inline-block;
  /*width:650px;*/
  /*margin-left:60px;*/
}
.yt-logo{
  margin-left: 10px;
  margin-right:90px;
  margin-bottom: 5px;
}
input[type=search]{
  padding:10px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid rgb(218, 214, 214);
  width:550px; 
}
.btn-search{
height:44px;
background: none;
width:65px;
background-color:none;
outline:none;
border-top-right-radius: 20px;
border-bottom-right-radius: 20px;
padding-bottom: 3px;
border: 1px solid rgb(218, 214, 214);
border-left-width: 0;
background-color: rgb(252, 252, 252);
}
.fa-search{
  font-size: 20px;
}
.btn-mic{
width:40px;
border: none;
border-radius: 50%;
height:43px;
margin-right:150px;
}
.fa-microphone{
  font-size: 18px;
}
.fa-ellipsis-v{
  font-size: 20px;
  margin-right:25px;
}
.btn-user{
background: none;
outline: none;
border: 1px solid rgb(218, 214, 214);
width:100px;
border-radius: 20px;
}
.fa-user-circle{
  font-size: 20px;
  padding: 8px 0;
  color: #3f51b5;
}
#sign{
  position: relative;
  bottom:2px;
  font-weight:bold;
  color:#3f51b5;
}
#p-home{
  display: inline-block;
  width:200px;
  padding: 10px 0;
  padding-left: 15px;
  border-radius:10px;
  font-weight: bold;
  cursor:pointer;
}
#p-home:hover{
background-color:#E5E5E5;
}
.home,.short{
   background-color:#E5E5E5;
}
.fa-home{
  margin-right:20px;
}
.side-bar{
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top:70px;
  margin-right:50px ;
}
.fa-bolt{
  margin-right:20px ;
}
.contain-2{
  display: flex;
}
</style>
