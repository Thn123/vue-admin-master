<template>
    <section style="margin-top:20px">
        <el-col>
            <el-col>
                <el-tabs v-model="integral" type="border-card">
                    <el-tab-pane label="积分规则管理" name="first">
                        <el-col><el-button class="Savebtn" type="primary">保存</el-button></el-col>
                        <el-form :model="integralForm" label-width="100" :label-position="left">
                                <el-col :span="8">
                                    <el-form-item label="品牌">
                                        <el-select v-model="integralForm.Brand" placeholder="品牌">
                                            <el-option label="品牌1" value="品牌1"></el-option>
                                            <el-option label="品牌2" value="品牌2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-coL>
                                <el-col :span="8">
                                    <el-form-item label="积分类型">
                                        <el-select v-model="integralForm.Type">
                                            <el-option label="消费积分1" value="消费积分1"></el-option>
                                            <el-option label="消费积分2" value="消费积分2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="规则名称">
                                        <el-select  v-model="integralForm.Rule">
                                            <el-option label="正价商品消费积分1" value="正价商品消费积分1"></el-option>
                                            <el-option label="正价商品消费积分2" value="正价商品消费积分2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="交易渠道" >
                                        <el-select v-model="integralForm.trade">
                                            <el-option label="正价商品消费积分1" value="正价商品消费积分1"></el-option>
                                            <el-option label="正价商品消费积分2" value="正价商品消费积分2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="适用等级" >
                                        <el-select v-model="integralForm.level">
                                            <el-option label="正价商品消费积分1" value="正价商品消费积分1"></el-option>
                                            <el-option label="正价商品消费积分2" value="正价商品消费积分2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col  :span="12">
                                    <el-form-item label="消费折扣">
                                        <el-col :span="2"><el-input placeholder="0.6" v-model="integralForm.startDiscount"></el-input></el-col>
                                        <el-col :span="1" style="text-align:center">-</el-col>
                                        <el-col :span="2"><el-input placeholder="1" v-model="integralForm.endDiscount"></el-input></el-col>
                                    </el-form-item>
                                </el-col>
                                <el-col  :span="12">
                                    <el-form-item label="积分比例">
                                        <el-col :span="2"><el-input placeholder="1" v-model="integralForm.startScale"></el-input></el-col>
                                        <el-col :span="2" style="text-align:center">元&nbsp;&nbsp;=</el-col>
                                        <el-col :span="2"><el-input placeholder="20" v-model="integralForm.endScale"></el-input></el-col>
                                        <el-col :span="1" style="text-align:center">积分</el-col>
                                    </el-form-item>
                                </el-col>
                                <el-col  :span="8">
                                    <el-form-item label="积分生效延迟天数">
                                        <el-col :span="2"><el-input placeholder="2" v-model="integralForm.delayDay"></el-input></el-col>
                                        <el-col :span="1" style="text-align:center">天</el-col>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="8">
                                    <el-form-item label="积分有效期类型" >
                                        <el-select v-model="integralForm.effectiveType">
                                            <el-option label="相对日期" value="相对日期1"></el-option>
                                            <el-option label="绝对日期" value="相对日期2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                                <el-col  :span="8">
                                    <el-form-item label="积分失效月数">
                                        <el-col :span="2"><el-input placeholder="2" v-model="integralForm.expiryDate"></el-input></el-col>
                                        <el-col :span="1" style="text-align:center">月</el-col>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="开始时间" >
                                        <el-date-picker v-model="integralForm.startTime"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="结束时间" >
                                        <el-date-picker v-model="integralForm.endTime"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-form>
                        <el-col style="margin:20px  0 30px 0"><span>商品规则</span></el-col>
                        <el-col>
                            <el-form :model="goodsRule">
                                <el-col :span="12">
                                    <el-form-item label="商品大类">
                                      <el-date-picker v-model="goodsRule.bigType"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="商品小类">
                                        <el-date-picker v-model="goodsRule.smallType"></el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-form>
                        </el-col>
                        <el-col style="margin:20px  0 30px 0"><span>适用门店</span></el-col>
                        <el-col>
                            <el-col :span="4">
                                <el-col :span="20">
                                    <el-input placeholder="门店名称" v-model="storeName">
                                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                                    </el-input>
                                </el-col>
                                <el-col style="margin-top:20px">
                                    <el-tree :data="TreeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                                </el-col>
                            </el-col>

                            <el-col :span="20">
                                <el-table :data="user" stripe border highlight-current-row>
                                    <el-table-column type="selection" width="55">
                                    </el-table-column>
                                    <el-table-column prop="region" label="大区"  sortable>
                                    </el-table-column>
                                    <el-table-column prop="province" label="省份"  sortable>
                                    </el-table-column>
                                    <el-table-column prop="city" label="城市"  sortable>
                                    </el-table-column>
                                    <el-table-column prop="type" label="门店类型"  sortable>
                                    </el-table-column>
                                    <el-table-column prop="name" label="门店名称"  sortable>
                                    </el-table-column>
                                </el-table>
                            </el-col>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="积分沟通" name="second">
                        <el-col><el-button class="Savebtn" type="primary">保存</el-button></el-col>
                        <el-col class="treeToolbar" :span="4">
                            <el-col :span="24" class="treeToolbar-header">工具栏</el-col>
                        </el-col>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-col>
    </section>
</template>
<script>
    export default{
        data: function () {
            return {
                integral:'first',
                integralForm:{
                    Brand:'',
                    Type:'',
                    Rule:'',
                    trade:"",
                    level:'',
                    startDiscount:'',
                    endDiscount:'',
                    startScale:"",
                    endScale:'',
                    delayDay:"",
                    effectiveType:"",
                    expiryDate:'',
                    startTime:'',
                    endTime:""
                },
                goodsRule:{
                    bigType:"",
                    smallType:''
                },
                storeName:'',
                user:[],
                TreeData:[{label:'大区',children:[{label:'省份',children:[{label:"城市",children:[{label:"门店名称"}]}]}]}]
            }
        },

        methods:{

        }
    }

</script>

<style scoped>
    .treeToolbar{
        position:absolute;
        top:200px;
        right:100px;
    }
    .treeToolbar-header{
        height:40px;
        line-height:40px;
        text-align:center;
        background:#367FA9;
        color:#fff;
        font-size:18px;
    }
    .Savebtn{
        float:right;
    }
</style>
