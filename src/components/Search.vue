<template>
<!--<div class="container">-->
  <!--<div class="searchval">
    <input type="search" v-model= "storeval" class="search" placeholder="Search">
    <button class="btn-search" @click="searchfunc">
    <i class="fa fa-search" aria-hidden="true"></i>
    </button>
  <router-link :to="{name:'Search'}">
    
    </router-link>
</div>-->
<div><!--v-if="videoif"-->
<Videoplay :heading="valuestore"/>
</div>
<!--<div class="res_comp" v-if="rescheck">
  <div class="results" v-for="search in searchTag" :key="search">
  <iframe :src="url+search" width="337px" height="200px" showinfo=0 border-radius="10px" controls=0 autohid=1 
  modestbranding="1" frameborder="0"></iframe>
 <p>{{name}}</p>
  </div>
</div>-->
<!--</div>-->
</template>

<script>
import Videoplay from './Videoplay'
export default {
components:{
    Videoplay
},
props:['searchres', 'checkval', 'dataval'],
data(){
    return{
    valuestore:this.dataval,
    //storevale:'dummy',
    url:'https://www.youtube.com/embed/',
    //name:this.searchres,
    searchTag:[],
    check:this.checkval,
    rescheck:true,
    videoif:true,
    newstoreval:this.storeval
   // showsearch:false,
    }
},
methods:{
searchfunc(){
    this.videoif = true
    this.$emit('resval')
    this.$emit('close')
    console.log(this.check)
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q='+this.storeval+'&key=AIzaSyAAjtsWunb0kGdNkbutbrN2nEdnFo_DisA')
    .then(res=>res.json())
    .then((data)=>{
    //console.log(data)
    //console.log(this.searchres)
    for(let i=0; i<data.items.length; i++)
    if(typeof data.items[i].id.videoId != "undefined"){
    this.searchTag[i] = data.items[i].id.videoId
    //console.log(data.items[i].id.videoId)
    //console.log(this.name, typeof this.name)
    }
    })
    .catch(err=>console.log(err))
    }
},

}

</script>
<style>

</style>