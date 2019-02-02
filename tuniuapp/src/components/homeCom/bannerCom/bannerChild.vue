<template>
    <div class="bannerChild">
        <Back :data="$route.query.name"/>
        <HotelList :data="content"/>
    </div>
</template>

<script>
import Back from '../../common/headBack';
import HotelList from '../hotelList';
import {getHtoalContent} from '../../../services/homeServices.js';
export default {
    components:{
        Back,
        HotelList
    },
    data(){
        return{
            content:[]
        }
    },
    created(){
        getHtoalContent(this.$route.query.id).then(data=>{
            this.content=data.num5
        })
    }
}
</script>

<style lang="scss" scoped>
.bannerChild{
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 100%;
    z-index: 10;
}
</style>
