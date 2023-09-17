<template>
  <div class="cont_comp" v-if="isShowing">
  <div class="comp" v-for="store in storedValue" :key="store">
     <iframe :src="url+store" width="337px" height="200px" showinfo=0 border-radius="10px" controls=0 autohid=1 modestbranding="1" frameborder="0"></iframe>
     <!--<p v-for="title in titles" :key="title"
        {{title}}
     </p>-->
   </div>
   <!--<div v-for="title in titles" :key="title">
        
    </div>-->
    <p>{{storehead}}</p>
</div>
 
</template>

<script>
export default {
/*props:{ dataval:{
type:Function
}}*/
props:['dataval'],//'heading',
data(){
    return{
    storehead:this.dataval,
    isShowing:false,
    storedValue:[],
    titles:[],
    url:'https://www.youtube.com/embed/'
    }
},
mounted(){
    console.log(this.storehead);
    fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=6&regionCode=NG&key=AIzaSyBoM3WLDo_7GZEr1V2Y2_zsN8iEAWAcpzI')
    .then((res)=>{
    return res.json()})
    .then((data)=>{
    for(let i=0; i<data.items.length; i++){
    /*console.log(data.items[i].id);*/
    this.storedValue [i]= data.items[i].id;
    this.titles[i] = data.items[i].snippet.title
    /*console.log(this.storedValue)
    console.log(this.titles)*/
    }
    })
    .catch(err=>{console.log(err)})
    this.isShowing = true
},
beforeUpdate(){
    console.log(this.storehead);
}
}
</script>

<style>
.iframe{
    border-radius: 15px;
}
/*.cont_comp{ 
   margin-top:70px;*/
  /* background-color: pink;
}*/
.comp{
    /*width:300px;*/
    margin-right: 15px;
    display:inline-block;
    /*background-color: yellow;*/
}
</style>