<template>
    <section style="padding:15px;">
        <el-tabs type="border-card">
            <el-tab-pane label="活动基础信息">
                <el-col><el-button class="Savebtn" type="primary">保存</el-button></el-col>
                <el-col class="couponTitle">基础信息</el-col>
                <el-col>
                    <el-form :inline="true" :model="formRule" class="demo-form-inline" label-width="120px" :label-position="left">
                        <el-col :span="12">
                            <el-form-item label="活动名称">
                                <el-input v-model="formRule.couponName" placeholder="活动名称"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12" style="height:59px">
                            <el-form-item label="活动类型" >
                                <el-select v-model="formRule.Brand">
                                    <el-option label="类型1" value="品牌1"></el-option>
                                    <el-option label="类型2" value="品牌2"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="活动开始时间">
                                <el-date-picker v-model="formRule.activityStartTime" placeholder="活动开始时间"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="活动结束时间">
                                <el-date-picker v-model="formRule.activityEndTime" placeholder="活动结束时间"></el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-form-item label="活动描述">
                            <el-input type="textarea" placeholder="活动描述" style="width:800px"></el-input>
                        </el-form-item>
                        <el-col >
                            <el-form-item label="是否立即发券">
                                <el-radio-group v-model="formRule.isSendCoupon">
                                    <el-radio :label="1">是</el-radio>
                                    <el-radio :label="0">否</el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-col>
                    </el-form>
                </el-col>
                <el-col>
                     <el-tabs tab-position="left" class="activityMes">
                            <el-tab-pane label="选择细分人群" class="activityMes-01">
                                <el-row>
                                    <el-col style="margin-bottom:10px">细分人群</el-col>
                                </el-row>
                                <el-row style="margin-bottom:10px">
                                    <el-col :span="20">
                                        <el-form :model="subDivision">
                                            <el-form-item label="人群名称">
                                                <el-col :span="4"><el-input v-model="subDivision.custName" placeholder="人群名称"></el-input></el-col>
                                                <el-col :span="4" offset="1" style="text-align:left;padding-left:10px">已筛选顾客数:2000</el-col>
                                            </el-form-item>
                                        </el-form>
                                    </el-col>
                                    <el-col :span="3" :offset="1">
                                        <el-button type="primary" @click="addCondition">+添加筛选条件</el-button>
                                    </el-col>
                                </el-row>
                                <el-row>
                                    <el-table :data="subDivisionData"  border stripe highlight-current-row>
                                        <el-table-column label='筛选类型'></el-table-column>
                                        <el-table-column label="筛选条件说明"></el-table-column>
                                        <el-table-column label="筛选人数"></el-table-column>
                                        <el-table-column label="操作">
                                            <template slot="slot">
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                </el-row>
                            </el-tab-pane>
                            <el-tab-pane label="配置规则条件">
                                <el-row>
                                    <el-col style="margin-bottom:10px">配置规则条件</el-col>
                                </el-row>
                                <el-row>
                                    <el-col :span="15" style="margin-bottom:10px">流程图</el-col>
                                    <el-col :span="4" class="rule-content">
                                            <el-row class="Ruletoobar">工具栏</el-row>
                                            <el-row class="RuleNavbar">
                                                    <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened >
                                                        <el-submenu index="1">
                                                                <template slot="title">激励条件</template>
                                                                <el-menu-item index="1-1" @click="sendCoupon">发送优惠券</el-menu-item>
                                                                <el-menu-item index="1-2" @click="integralAdd">积分增加</el-menu-item>
                                                        </el-submenu>
                                                        <el-submenu>
                                                            <template slot="title">推送渠道</template>
                                                            <el-menu-item index="2-1" @click="message">短信</el-menu-item>
                                                            <el-menu-item index="2-2" @click="wechat">微信</el-menu-item>
                                                        </el-submenu>
                                                    </el-menu>
                                            </el-row>
                                    </el-col>
                                </el-row>
                            </el-tab-pane>
                            <el-tab-pane label="填写活动指标">
                                <el-row>
                                    <el-col style="margin-bottom:10px">填写活动指标</el-col>
                                </el-row>
                                <el-row>
                                    <el-col><span>发送有效性</span></el-col>
                                    <el-col class="formPosition">
                                        <el-form :inline="true" :model="sendValid">
                                            <el-col :span="12">
                                                <el-form-item label="目标发送人数">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                 </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="成功发送人数">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="发送成功率">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">% &nbsp;&nbsp;实际0%</el-col>
                                                </el-form-item>
                                            </el-col>
                                        </el-form>
                                    </el-col>
                                    <el-col><span>接受客户邀请</span></el-col>
                                    <el-col class="formPosition">
                                        <el-form :inline="true" :model="sendValid">
                                            <el-col :span="12">
                                                <el-form-item label="响应人数">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="响应率">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                        </el-form>
                                    </el-col>
                                    <el-col><span>提高销售</span></el-col>
                                    <el-col class="formPosition">
                                        <el-form :inline="true" :model="sendValid">
                                            <el-col :span="12">
                                                <el-form-item label="销售金额">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="销售数量">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="订单数">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="购买人数">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                        </el-form>
                                    </el-col>
                                    <el-col><span>提高客单亮</span></el-col>
                                    <el-col class="formPosition">
                                        <el-form :inline="true" :model="sendValid">
                                            <el-col :span="12">
                                                <el-form-item label="平均客单件">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="12">
                                                <el-form-item label="平均客单价">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                        </el-form>
                                    </el-col>
                                    <el-col><span>优化投入产出</span></el-col>
                                    <el-col class="formPosition">
                                        <el-form :inline="true" :model="sendValid">
                                            <el-col :span="12">
                                                <el-form-item label="ROI">
                                                    <el-col :span="16"><el-input  v-model="sendValid.desNum" placeholder="请输入目标值"></el-input></el-col>
                                                    <el-col :span="8">人 &nbsp;&nbsp;实际1人</el-col>
                                                </el-form-item>
                                            </el-col>
                                        </el-form>
                                    </el-col>
                                </el-row>
                            </el-tab-pane>
                     </el-tabs>
                </el-col>
            </el-tab-pane>
            <el-tab-pane label="活动数据视图">
                <el-col><el-button class="Savebtn" type="primary">保存</el-button></el-col>
            </el-tab-pane>
        </el-tabs>

        <!--<!-筛选条件说明-->
        <el-dialog :visible.sync="addFilterVisible" close-on-click-modal="false" title="添加条件">
            <el-row>
                <el-col :span="4">
                    <el-col :span="20" style="margin-bottom:20px">
                        <el-input
                                placeholder="请输入内容"
                                prefix-icon="el-icon-search"
                                v-model="inputCust">
                        </el-input>
                    </el-col>
                    <el-col >
                        <el-checkbox v-model="checkedName" label="顾客名称"></el-checkbox>
                        <div v-if="checkedName">
                            add fliter
                        </div>
                    </el-col>
                    <el-col >
                        <el-checkbox v-model="checkedTel" label="手机号"></el-checkbox>
                        <div v-if="checkedTel">
                            add fliter
                        </div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedID">身份证明</el-checkbox>
                        <div v-if="checkedID">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedSex">性别</el-checkbox>
                        <div v-if="checkedSex">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedProvince">省市</el-checkbox>
                        <div v-if="checkedProvince">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedCity">城市</el-checkbox>
                        <div v-if="checkedCity">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedTime">入会时间</el-checkbox>
                        <div v-if="checkedTime">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedMoney">交易金额</el-checkbox>
                        <div v-if="checkedMoney">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedTimeRegion">时间段</el-checkbox>
                        <div v-if="checkedTimeRegion">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedMS">市场活动</el-checkbox>
                        <div v-if="checkedMS">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedSN">门店名称</el-checkbox>
                        <div v-if="checkedSN">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedLevel">会员等级</el-checkbox>
                        <div v-if="checkedLevel">add filter</div>
                    </el-col>
                    <el-col :span="24">
                        <el-checkbox v-model="checkedBonus">积分额度</el-checkbox>
                        <div v-if="checkedBonus">add filter</div>
                    </el-col>
                </el-col>

                <el-col :span="20">
                    <el-col :span="24" style="height:44px;line-height:44px">
                        <span>筛选条件></span>
                        <div class="fliter-content" style="display:inline">
                            <span class="tags-view-item" v-show="filterValue" >筛选条件1<i class="el-icon-close" @click='closeSelectedTag'></i></span>
                        </div>
                        <span class="clear-filter" @click="clearFilter">清空筛选</span>
                    </el-col>
                    <el-col>
                        <el-table  :data="addFilter" highlight-current-row style="width: 100%;">
                            <el-table-column prop="name" label="顾客名称" sortable width="120"></el-table-column>
                            <el-table-column prop="tel" label="手机号" sortable></el-table-column>
                            <el-table-column prop="ID" label="身份证号" sortable width="120"></el-table-column>
                            <el-table-column prop="email" label="邮箱" sortable></el-table-column>
                            <el-table-column prop="province" label="省市" sortable></el-table-column>
                            <el-table-column prop="city" label="城市" sortable></el-table-column>
                            <el-table-column prop="addr" label="地址" sortable></el-table-column>
                        </el-table>
                    </el-col>
                </el-col>
            </el-row>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addFilterVisible=false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit">确认</el-button>
            </div>
        </el-dialog>

        <!-- 优惠券-->
        <el-dialog :visible.sync="sendCouponVisible" close-on-click-modal="false" title="优惠券">


            <div slot="footer" class="dialog-footer">
                <el-button @click.native="sendCouponVisible=false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit">确认</el-button>
            </div>
        </el-dialog>

        <!-- 积分规则-->
        <el-dialog :visible.sync="integralAddVisible" close-on-click-modal="false" title="积分规则">

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="integralAddVisible=false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit">确认</el-button>
            </div>
        </el-dialog>
        <!--短信模板 -->
        <el-dialog :visible.sync="messageVisible" close-on-click-modal="false" title="短信模板">

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="messageVisible=false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit">确认</el-button>
            </div>
        </el-dialog>
        <!-- 微信模板-->
        <el-dialog :visible.sync="wechatVisible" close-on-click-modal="false" title="微信模板">

            <div slot="footer" class="dialog-footer">
                <el-button @click.native="wechatVisible=false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit">确认</el-button>
            </div>
        </el-dialog>

    </section>
</template>
<script type="es6">
    export default{
        data: function (){
            return {
                formRule:{},
                subDivision:{},
                subDivisionData:[],
                addFilterVisible:false,
                addFilter:[],
                checkedName:false,
                checkedTel:false,
                checkedID:false,
                checkedSex:false,
                checkedProvince:false,
                checkedCity:false,
                checkedTime:false,
                checkedMoney:false,
                checkedTimeRegion:false,
                checkedMS:false,
                checkedSN:false,
                checkedLevel:false,
                checkedBonus:false,
                filterValue:true,
                editRulesVisible:false,


                sendValid:{},
                sendCouponVisible:false,
                integralAddVisible:false,
                messageVisible:false,
                wechatVisible:false

            }
        },
        methods:{
            addCondition:function(){
                this.addFilterVisible=true;
            },
            closeSelectedTag(){
                this.filterValue=false
            },
            clearFilter(){
                this.filterValue=false
            },
            editSubmit:function(){
                this.addFilterVisible=false;
                this.sendCouponVisible=false;
                this.integralAddVisible=false;
                this.messageVisible=false;
                this.wechatVisible=false;
            },
            //dialog
            sendCoupon:function(){
                this.sendCouponVisible=true
            },
            integralAdd:function(){
                this.integralAddVisible=true
            },
            message:function(){
                this.messageVisible=true
            },
            wechat:function(){
                this.wechatVisible=true
            }
        }
    }

</script>

<style scoped>
    .Savebtn{
        float:right;
    }
    .couponTitle{
        margin:20px;
    }
    .formPosition{
        padding:15px 15px 15px 70px;
    }
    .Ruletoobar{
        width:100%;
        height:40px;
        line-height:40px;
        background:#199ED8;
        color:#000;
        text-align:center;
    }
    .RuleNavbar{
        border:1px solid #ddd;
        height:240px;
        margin:0px 0px 0 0
    }
    .RuleNavbar .el-menu {
        border-right: none;
    }
</style>
<style>
    .activityMes .el-tabs__item{
        border:1px solid #ddd;
        margin:10px 15px;
        height:60px;
        line-height:60px;
    }
    /*.activityMes #tab-0:before{*/
        /*content:'1';*/
        /*position:absolute;*/
        /*top:0;*/
        /*left:0;*/
        /*width:20px;*/
        /*height:20px;*/
        /*border-radius:50%;*/
        /*background: #dddddd;*/
    /*}*/
</style>
