<template>
   <section>
       <el-col>
           <el-form :inline="true" :model="formRule" class="demo-form-inline" label-width="120px" :label-position="left">
               <el-col class="couponTitle">基础信息</el-col>
               <el-col :span="12">
                   <el-form-item label="优惠券名称">
                       <el-input v-model="formRule.couponName"></el-input>
                   </el-form-item>
               </el-col>
               <el-col :span="12" style="height:59px">
                   <el-form-item label="品牌" >
                       <el-select v-model="formRule.Brand">
                           <el-option label="品牌1" value="品牌1"></el-option>
                           <el-option label="品牌2" value="品牌2"></el-option>
                       </el-select>
                   </el-form-item>
               </el-col>
               <el-col :span="8">
                   <el-form-item label="优惠券类型" style="height:30px">
                       <el-select v-model="formRule.couponType">
                           <el-option label="类型1" value="等级1"></el-option>
                           <el-option label="类型2" value="等级2"></el-option>
                       </el-select>
                   </el-form-item>
               </el-col>
               <el-col :span="8">
                   <el-form-item label='生效时间'>
                       <el-date-picker v-model="formRule.validTime"></el-date-picker>
                   </el-form-item>
               </el-col>
               <el-col :span="8">
                   <el-form-item label='失效时间'>
                       <el-date-picker v-model="formRule.invalidTime"></el-date-picker>
                   </el-form-item>
               </el-col>
               <el-col :span="12">
                   <el-form-item label="使用摘要" style="height:35px">
                       <el-input  type="textarea" v-model="formRule.useSummary" style="width:400px"></el-input>
                   </el-form-item>
               </el-col>
               <el-col :span="12">
                   <el-form-item label="券数量">
                       <el-input v-model="formRule.couponNum"></el-input>
                   </el-form-item>
               </el-col>
               <el-col :span="12">
                   <el-form-item label="是否立即发券">
                       <el-radio-group v-model="formRule.isSendCoupon">
                           <el-radio :label="1">是</el-radio>
                           <el-radio :label="0">否</el-radio>
                       </el-radio-group>
                   </el-form-item>
               </el-col>
           </el-form>
           <el-form :model="convertRule"  class="demo-form-inline" label-width="120px" :label-position="left">
               <el-col class="couponTitle">兑换规则</el-col>
               <el-col :span="6">
                     <el-form-item label="是否可兑换">
                        <el-checkbox v-model="convertRule.isConvert"></el-checkbox>
                     </el-form-item>
               </el-col>
               <el-col :span="6">
                      <el-form-item label="兑换所需积分">
                          <el-col :span="20"><el-input v-model="convertRule.integral"></el-input></el-col>
                          <el-col :span="1" :offset="1" style="text-align:center">分</el-col>
                      </el-form-item>
               </el-col>
               <el-col :span="6">
                   <el-form-item label="设定数量">
                       <el-input v-model="convertRule.setNum"></el-input>
                   </el-form-item>
               </el-col>
               <el-col :span="6">
                   <el-form-item label="剩余数量">
                       <el-input v-model="convertRule.SurplusNum"></el-input>
                   </el-form-item>
               </el-col>
               <el-col :span="6">
                   <el-form-item label="会员等级限制">
                       <el-select v-model="convertRule.vipLevelLimit">
                           <el-option label="等级1" value="等级1"></el-option>
                           <el-option label="等级2" value="等级2"></el-option>
                       </el-select>
                   </el-form-item>
               </el-col>
               <el-col :span="12">
                   <el-form-item label="是否需要邮寄">
                       <el-checkbox v-model="convertRule.vipLevelLimit"></el-checkbox>
                   </el-form-item>
               </el-col>
           </el-form>
           <el-form :model="useRule" class="demo-form-inline" label-width="120px" :label-position="left">
               <el-col class="couponTitle">使用规则</el-col>
               <el-col>
                   <el-button type="primary">+添加规则</el-button>
               </el-col>
               <el-col>

               </el-col>
           </el-form>
       </el-col>
   </section>
</template>
<script>
    export default{
        data: function(){
            return{
                formRule:{},
                convertRule:{}
            }
        }
    }

</script>

<style scoped>
    .couponTitle{
        margin:20px;
    }
</style>
