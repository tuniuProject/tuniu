<template>
    <div id="pay">
       <ul>
           <li>
               <span>您的订单</span>
               <ul>
                   <li>几何Time年度尊享会员卡</li>
                   <li>
                       <span>单价:</span>
                       <p>￥188元</p>
                   </li>
               </ul>
           </li>
           <li>
               <span>填写信息</span>
               <ul>
                   <li>
                       <span>购买数量</span>
                       <p>1</p>
                   </li>
                   <li>
                       <span>收货人</span>
                       <p>杜sir</p>
                   </li>
                   <li>
                       <span>手机号</span>
                       <p>15077102582</p>
                   </li>
                   <li>
                       <span>总价</span>
                       <p class="price">￥188元</p>
                   </li>
               </ul>
           </li>
           <li>
               <span>支付方式</span>
               <ul>
                   <li>
                       <span>银行卡支付</span>
                   </li>
               </ul>
           </li>
       </ul>
       <button>支付</button>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#pay {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  background: white;
  font-size: 0.16rem;
  ul {
    margin: 0 0.2rem;
    li {
      span {
        color: gray;
      }
      ul {
        background: #fafafa;
        li {
          display: flex;
          padding: 0.2rem;
          .price {
            color: red;
          }
        }
      }
    }
  }
  button {
    margin: 1rem auto 0;
    display: block;
    width: 80%;
    height: 0.4rem;
    border: none;
    background: red;
    border-radius: 0.2rem;
    color: white;
  }
}
</style>

