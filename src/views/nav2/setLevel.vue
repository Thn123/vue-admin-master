<template>
    <section>
        <el-col class="setLevel_btn">
            <span>规则信息</span>
            <el-button type="primary" style="float:right">保存按钮</el-button>
        </el-col>
        <el-col>
            <el-form :inline="true" :model="formRule" class="demo-form-inline" label-width="100px" :label-position="left">
                <el-col :span="12">
                    <el-form-item label="品牌" v-model="formRule.Brand">
                        <el-select>
                            <el-option label="品牌1"></el-option>
                            <el-option label="品牌2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="等级名称" v-model="formRule.LevelName">
                        <el-select>
                            <el-option label="名称1"></el-option>
                            <el-option label="名称1"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="有效月(月)" >
                       <el-input placeholder="输入有效月数量" v-model="formRule.validMonth"></el-input>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-col>
        <el-col class="setLevel_btn">
            <span >等级权益配置</span>
        </el-col>
        <el-col class="setLevel_chk">
            <el-col :span="5" style="padding-top: 8px;">
                <el-checkbox label="会员折扣" v-model="VipDiscount"></el-checkbox>
            </el-col>
            <el-col :span="5" >
                <el-col :span="15">
                    <el-input placeholder="输入折扣" v-model='discount' style="display:inline"></el-input>
                </el-col>
                <el-col :span="7" :offset="2" style="padding-top:8px"><span>折</span></el-col>
            </el-col>
        </el-col>
        <el-col class="setLevel_chk">
            <el-col :span="8" style="padding-top: 8px;">
                <el-checkbox label="优惠券" v-model="coupon"></el-checkbox>
            </el-col>
            <el-col :span="8">
                <el-button type="text" @click="couponVisible=true">+添加优惠券</el-button>
            </el-col>
            <el-col :span="8" >
                <i class="el-icon-arrow-down" @click="isOpenCoupon" id="isOpenCoupon"></i>
            </el-col>
        </el-col>
        <el-col :offset="8" :span="16">
            <transition name="el-fade-in-linear">
                <div v-show="showCoupon" class="transition-box">
                    <el-row style="padding:20px">
                        <el-col :span="5">优惠券名称</el-col>
                        <el-col :span="5">优惠券张数</el-col>
                        <el-col :span="5">操作</el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="5">银卡会员专享资格券</el-col>
                        <el-col :span="5"><input type="text" placeholder="张数"/></el-col>
                        <el-col :span="5">--</el-col>
                    </el-row>
                </div>
            </transition>
        </el-col>
        <el-col class="setLevel_chk" >
            <el-col :span="8" style="padding-top: 8px;">
                <el-checkbox label="积分" v-model="integral"></el-checkbox>
            </el-col>
            <el-col :span="8">
                <el-button type="text" @click="integralVisible=true">+添加积分权益</el-button>
            </el-col>
            <el-col :span="8">
                <i class="el-icon-arrow-down" @click="isOpenIntegral" id="isOpenIntegral"></i>
            </el-col>
        </el-col>
        <el-col :offset="8" :span="16">
            <transition name="el-fade-in-linear">
                    <div v-show="showIntegral" class="transition-box">
                        <el-row style="padding:20px">
                            <el-col :span="5">积分名称</el-col>
                            <el-col :span="5">操作</el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="5">消费享1.3倍积分</el-col>
                            <el-col :span="5">--</el-col>
                        </el-row>
                    </div>
            </transition>
        </el-col>

       <!--添加优惠券-->
        <el-dialog title="优惠券" :visible.sync="couponVisible">
            <el-row>
                <el-col style="margin:20px 0">
                    <el-form :inline="true" :model="formLineCoupon">
                        <el-form-item>
                            <el-input placeholder="优惠券名称" v-model="formLineCoupon.couponName"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="formLineCoupon.couponType" placeholder="优惠券类型">
                                <el-option label="类型一" value="shanghai"></el-option>
                                <el-option label="类型二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-select v-model="formLineCoupon.brand" placeholder="品牌名称">
                                <el-option label="品牌一" value="shanghai"></el-option>
                                <el-option label="品牌二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item style="float:right">
                            <el-button type="primary">新增优惠券</el-button>
                            <el-button type="primary">查询</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col>
                    <el-table :data="couponData"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="title" label="品牌名称" width="200" sortable>
                        </el-table-column>
                        <el-table-column prop="title" label="优惠券名称"  sortable>
                        </el-table-column>
                        <el-table-column prop="creatTime" label="生效日期"  sortable>
                        </el-table-column>
                        <el-table-column prop="creatTime" label="失效日期"  sortable>
                        </el-table-column>
                        <el-table-column prop="" label="优惠券剩余数量"  sortable>
                        </el-table-column>
                    </el-table>
                </el-col>
            </el-row>

            <el-col  style="margin-top:20px;">
                <el-pagination
                        style="float:right"
                        :current-page.sync="listUser.page"
                        :page-size="listUser.limit"
                        :page-sizes="[10, 20, 30, 40]"
                        layout="total,sizes, prev, pager, next,jumper"
                        :total="total">
                </el-pagination>
            </el-col>
                <div slot="footer" class="dialog-footer" style="margin-top:20px">
                    <el-button @click.native="couponVisible =false">取消</el-button>
                    <el-button type="primary" @click.native="SubmitCoupon" :loading="addLoading">确认</el-button>
                </div>
        </el-dialog>

        <!--添加积分权益-->
        <el-dialog title="积分权益" :visible.sync="integralVisible">
            <el-row>
                <el-col style="margin:20px 0">
                    <el-form :inline="true" :model="formLineIntegral">
                        <el-form-item>
                            <el-input placeholder="规则名称" v-model="formLineIntegral.integralName"></el-input>
                        </el-form-item>
                        <el-form-item  style="width: 100px;">
                            <el-select v-model="formLineIntegral.integralType" placeholder="积分类型">
                                <el-option label="类型一" value="shanghai"></el-option>
                                <el-option label="类型二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item style="width: 100px;">
                            <el-select v-model="formLineIntegral.integralBrand" placeholder="品牌">
                                <el-option label="品牌一" value="shanghai"></el-option>
                                <el-option label="品牌二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item style="width: 100px;">
                            <el-select v-model="formLineIntegral.integralLevel" placeholder="等级">
                                <el-option label="品牌一" value="shanghai"></el-option>
                                <el-option label="品牌二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item style="float:right">
                            <el-button type="primary">查询</el-button>
                            <el-button type="primary">+新建积分模板</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col>
                    <el-table :data="integralData"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
                        <el-table-column type="selection" width="55">
                        </el-table-column>
                        <el-table-column prop="title" label="品牌" width="200" sortable>
                        </el-table-column>
                        <el-table-column prop="title" label="积分类型"  sortable>
                        </el-table-column>
                        <el-table-column prop="creatTime" label="规则名称"  sortable>
                        </el-table-column>
                        <el-table-column prop="creatTime" label="适应等级"  sortable>
                        </el-table-column>
                        <el-table-column prop="state" label="状态"  sortable>
                        </el-table-column>
                    </el-table>
                </el-col>
                <el-col  style="margin-top:20px;">
                    <el-pagination
                            style="float:right"
                            :current-page.sync="listUser.page"
                            :page-size="listUser.limit"
                            :page-sizes="[10, 20, 30, 40]"
                            layout="total,sizes, prev, pager, next,jumper"
                            :total="total">
                    </el-pagination>
                </el-col>
            </el-row>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="integralVisible=false">取消</el-button>
                    <el-button type="primary" @click.native="SubmitIntegral" :loading="addLoading">确认</el-button>
                </div>
        </el-dialog>
    </section>
</template>
<script type="es6">
    export default{
        data: function () {
            return {
                formRule: {
                    Brand: '',
                    LevelName: '',
                    validMonth: ''
                },
                listUser:{
                    page:'1',
                    limit:'20'
                },
                couponData:[],
                integralData:[],
                VipDiscount:false,
                discount: '',
                showCoupon:false,
                showIntegral:false,
                coupon:false,
                integral:false,
                couponVisible:false,
                integralVisible:false,
                addLoading:false,
                formLineCoupon:{
                    couponName:'',
                    couponType:'',
                    brand:''
                },
                formLineIntegral:{

                }
            }
        },
        methods:{
            isOpenCoupon:function(){
                if(this.showCoupon==false){
                    this.showCoupon=true;
                    document.getElementById('isOpenCoupon').style.transform='rotate(180deg)';

                }else{
                    this.showCoupon=false;
                    document.getElementById('isOpenCoupon').style.transform='rotate(360deg)';

                }
            },
            isOpenIntegral:function(){
                if(this.showIntegral==false){
                    this.showIntegral=true;
                    document.getElementById('isOpenIntegral').style.transform='rotate(180deg)';

                }else{
                    this.showIntegral=false;
                    document.getElementById('isOpenIntegral').style.transform='rotate(360deg)';

                }
            },
            SubmitCoupon:function(){
            this.$confirm("确认提交吗",'提示',{}).then(()=>{
                //this.addLoading = true;
                this.couponVisible=false
            })
            },
            SubmitIntegral:function(){
                this.$confirm("确认提交吗",'提示',{}).then(()=>{
                    //this.addLoading = true;
                    this. integralVisible=false
                })
            }
        }
    }

</script>

<style scoped>
    .setLevel_btn{
        margin:20px;
    }
    .setLevel_chk{
        padding:20px;
    }
    /*.el-col{*/
       /*padding:10px;*/
    /*}*/
</style>
