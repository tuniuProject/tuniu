<template>
    <div class="bannerContent">
        <Back :data="name"  />
     <keep-alive>
             <scroller :top="0.44" :bottom="0.0000000001"  class="scroll" >
        <section class="banner">
            <img :src="$route.query.img" />
            <!-- <span class="title">{{$route.params.name}}</span> -->
        </section>
 <template v-if="$route.query.id>=2">
    <div class="block" >
        <div class="left">
            <p>入住日期</p>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
        </div>
        <div class="day">{{day}}</div>
       <div class="right">
           <p>离店日期</p>
     <el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
       </div>
  </div>
  <p class="city-list">
      <span v-for="(city,index) in cityList" :key="city.id" @click="changeActive(index)" :class="{active:selectIndex==index}">{{city.city}}</span>
  </p>
  <ul class="citys" >
      <li v-for="(cityItem,index) in citys" :key="cityItem.cityid" :class="{active:citySelectIndex==index}" @click="requestCity(index,cityItem.cityid)">
          {{cityItem.cityName}}
      </li>
  </ul>
   <HotelList :data="content"/>
        </template>
        <ul class="list" v-if="$route.query.id<2">
            <li v-for="item in bannerList" :key="item.id" class="item">
                <div class="top">
                     <p class="people">{{item.people}}</p>
                    <img :src="item.img" />
                    <ul>
                        <li v-for="list in item.location" :key="list.cityName">
                            {{list.cityName}}
                        </li>
                    </ul>
                </div>
                <div class="bottom">
                    <span v-for="title in item.title" :key="title.titleName" >{{ title.titleName }}</span>
                </div>
                <p class="go" @click="titleAction(item.id,item.people)">GO »</p>
            </li>
        </ul>
        </scroller>
     </keep-alive>
     <router-view/>
    </div>
</template>

<script>
import Back from '../../common/headBack.vue';
import {getBannerContent,getCity,getMoreCity,getHtoalContent} from '../../../services/homeServices.js';
import HotelList from "../hotelList";
export default {
    components:{
        Back,
        HotelList
    },
    data(){
        return{
           value1: new Date(),
            value2: new Date(new Date().getTime() + 24*60*60*1000),
            name:'',
            bannerList:[],
            cityList:[],
            selectIndex:0,
            citySelectIndex:0,
            content:[]
        }
    },
    created(){
        this.name= this.$route.query.name;
        console.log(this.name,this.$route.query);
        getBannerContent(this.$route.query.id).then(data=>{
            this.bannerList=data.num2
        })
        getCity().then(data=>{
            console.log(data)
            this.cityList=data.num3
        })
         getHtoalContent(0).then(data=>{
                this.content=data.num5
        })
    },
    methods:{
          openPicker() {
      this.$refs.picker.open();
      console.log(this.pickerValue);
    },
    changeActive(index){
        if(this.selectIndex!=index){
           this.selectIndex=index;
        }
       
    },
    requestCity(index,id){
         if(id==10000){
            console.log('需要请求更多城市数据')
            //需要请求更多城市数据，需要当前城市列表的id
            let id= this.cityList[this.selectIndex].id;
            getMoreCity(id).then(data=>{
                console.log(data.location)
                this.cityList[this.selectIndex].location=data.location
            })
            this.citySelectIndex=index;
            return;
        }
        if(this.citySelectIndex!=index){
            this.citySelectIndex=index;
          console.log(index,id);
            //在这里请求酒店列表数据根据传入的id值（城市id）
            getHtoalContent(id).then(data=>{
                 this.content=data.num5
                 console.log(this.content)
             })
        }
        
    },
    titleAction(id,name){
        console.log(id,name)
        this.$router.push({
            name:'bannerChild',
            query:{
                id:id,
                name:name
            }
        })
    }
       
    },
    computed:{
        day(){
       let day=(this.value2.getTime()-this.value1.getTime())/ (24 * 3600 * 1000)
      if(Math.floor(day)==0){
          return '请选择日期'
      }
      if(Math.floor(day)<0){
          this.value2=new Date(new Date().getTime() + 24*60*60*1000);
      }
      return '住'+ Math.floor((this.value2.getTime()-this.value1.getTime())/ (24 * 3600 * 1000))+"晚";
       
            
        },
       citys(){
           switch(this.selectIndex){
               case 0:
               return this.cityList[0].location
               case 1:
               return this.cityList[1].location
               case 2:
               return this.cityList[2].location
               case 3:
               return this.cityList[3].location
               case 4:
                return this.cityList[4].location
           }
       } 
    },
    watch:{
        value1(newVal,oldVal){
            console.log(newVal.getTime())
            console.log(oldVal)
            if(newVal.getTime()>=this.value2){
                this.value1=oldVal
            }
        },
        selectIndex(newVal,oldVal){
            this.citySelectIndex=0;
               //在这里请求新的酒店列表数据,请求的是第一个城市的酒店列表数据
             console.log(this.cityList[newVal].location[0].cityid)  
             console.log(this.cityList[newVal].location[0].cityName)
             let id=  this.cityList[newVal].location[0].cityid;
             getHtoalContent(id).then(data=>{
                 this.content=data.num5
                 console.log(this.content)
             })
        }
        
    }


}
</script>

<style scoped lang="scss">
.bannerContent{
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
    .banner{
        img{
            width: 100%;
            height: 1.8rem;
        }
    }
    .list{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0.15rem;
        box-sizing: border-box;
        .item{
            width: 1.63rem;
            height: 1.87rem;
            position: relative;
            box-shadow:0.003rem 0.003rem #333333;
            margin-top: 0.15rem;
            .top{
                 width: 100%;
                height: 1.18rem;
               border-top-left-radius: 0.04rem;
                    border-top-right-radius: 0.04rem;
                img{
                width: 100%;
                height: 1.18rem;
                  border-top-left-radius: 0.04rem;
                    border-top-right-radius: 0.04rem;
            }
            .people{
                position: absolute;
                left: 0;
                top: 0;
                padding: 0.05rem 0.12rem 0.05rem ;
                background-color: #f9d080;
                border-top-right-radius: 50%;
                 border-top-left-radius: 0.04rem;
            }
            ul{
                width: 100%;
                height: 1.18rem;
                position: absolute;
                top: 0;
                left: 0;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
                align-items: center;
                padding: 0.15rem;
                box-sizing: border-box;
                li{
                    width: 50%;
                    font-size: 0.152rem;
                    color: #ffffff;
                    text-align: center;
                     overflow:hidden;
                     text-overflow:ellipsis;
                   white-space:nowrap;
                    align-items: center;
                }
            }
            }
            .bottom{
                height: 0.42rem;
                width: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
            .go{
                width: 100%;
                height: 0.27rem;
                background-color: #7989e8;
                text-align: center;
                line-height: 0.27rem;
                color: #ffffff;
            }
        }
    }
}
.title{
    position: absolute;
    top: 0.2rem;
    display: block;
    width: 100%;
    text-align: center;
    margin: auto;
    font-size: 0.14rem;
    color: #ffffff;
}
    .el-date-editor{
        width: 100% !important;
        // float: left;
    }
   .left{
       width: 40%;
       float: left;
       p{
           text-align: center;
           color: #999;
       }
   } 
   .right{
       width: 40%;
       float:right;
       p{
           text-align: center;
         color: #999;
       }
   }
   .day{
       float: left;
       height: 48px;
       line-height: 60px;
       text-align: center;
       width: 20%;
   }
   .city-list{
       width: 100%;
       display: flex;
       padding: 0.1rem 0;
       box-sizing: border-box;
       color: #3b3b3b;
       font-size: 0.12rem;
       font-weight: 600;
       justify-content: space-around;
       span.active{
           padding-bottom: 0.05rem;
           border-bottom: 1px solid salmon;
       }
}
.citys{
    padding-top: 0.02rem;
    padding-bottom: 0.125rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 0.05rem;
    padding-right: 0.05rem;
    box-sizing: border-box;
    li{
        width: 20.1%;
        text-align: center;
        padding: 0.02rem 0;
        background-color: #eef4f8;
        border-radius: 0.1rem;
        margin-bottom: 0.08rem;
     overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    box-sizing: border-box;
    font-size: 0.11rem;
    color:#737678;
    border:1px solid transparent;
    }
    li.active{
        box-sizing: border-box;
        border: 1px solid #f69f9e;
        background-color: #fff1f0;
        color: #d9656b;
    }
}
</style>
