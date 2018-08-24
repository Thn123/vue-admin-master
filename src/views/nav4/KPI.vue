<template>
    <section>
        <el-row type="flex" justify="space-between" style="margin:20px">
            <el-col>
                <el-button-group>
                    <el-button type="primary" icon="el-icon-edit">我的活动</el-button>
                    <el-button type="primary" icon="el-icon-share">全部活动</el-button>
                </el-button-group>
            </el-col>
            <el-col style="text-align: right">
                <el-date-picker v-model="KPIPicker"></el-date-picker>
            </el-col>
        </el-row>
        <el-row style="height:200px;"></el-row>
        <el-row>
            <el-tabs type="border-card" class="KPICard">
                <el-tab-pane label="首页">首页</el-tab-pane>
                <el-tab-pane label="活动查看">
                    <el-col style="margin:20px 0">
                        <el-form :inline="true" :model="formLine">
                            <el-form-item>
                                <el-input placeholder="活动名称" v-model="formLine.campaignName"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="formLine.campaignType" placeholder="活动分类">
                                    <el-option label="名称一" value="shanghai"></el-option>
                                    <el-option label="名称二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item>
                                <el-select v-model="formLine.campaignState" placeholder="活动状态">
                                    <el-option label="名称一" value="shanghai"></el-option>
                                    <el-option label="名称二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col>
                        <el-table :data="vipCardList"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
                            <el-table-column prop="brandName" label="活动名称" width="200" sortable>
                            </el-table-column>
                            <el-table-column prop="couponName" label="推送渠道"  sortable>
                            </el-table-column>
                            <el-table-column prop="couponType" label='活动分类'  sortable>
                            </el-table-column>
                            <el-table-column prop="" label="状态"  sortable>
                            </el-table-column>
                            <el-table-column prop="ID" label="开始日期"  sortable>
                            </el-table-column>
                            <el-table-column prop="store" label="结束日期"  sortable>
                            </el-table-column>
                            <el-table-column prop="sendDate" label="创建人"  sortable>
                            </el-table-column>
                            <el-table-column prop="state" label='成功率'  sortable>
                            </el-table-column>
                        </el-table>
                    </el-col>
                </el-tab-pane>
                <el-tab-pane label="渠道监控">
                    <el-row>
                        <el-col :span="5">
                            <el-row>
                                <el-col class="ChannelLeftHeader">任务分类</el-col>
                                <el-col class="ChannelLeftBody" type="flex" justify="space-between">
                                    <el-row>
                                        <el-col :span="10">234</el-col>
                                        <el-col :span="14">
                                            <el-col class="channelRI">所有渠道</el-col>
                                            <el-col>已发送12314</el-col>
                                            <el-col>未发送1414</el-col>
                                            <el-col class="channelState">失败124</el-col>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="10">234</el-col>
                                        <el-col :span="14">
                                            <el-col class="channelRI">短信</el-col>
                                            <el-col>已发送12314</el-col>
                                            <el-col>未发送1414</el-col>
                                            <el-col class="channelState">失败124</el-col>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="10">234</el-col>
                                        <el-col :span="14">
                                            <el-col class="channelRI">电访</el-col>
                                            <el-col>已发送12314</el-col>
                                            <el-col>未发送1414</el-col>
                                            <el-col class="channelState">失败124</el-col>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="10">234</el-col>
                                        <el-col :span="14">
                                            <el-col class="channelRI">微信</el-col>
                                            <el-col>已发送12314</el-col>
                                            <el-col>未发送1414</el-col>
                                            <el-col class="channelState">失败124</el-col>
                                        </el-col>
                                    </el-row>
                                </el-col>

                            </el-row>
                        </el-col>
                        <el-col :span="18" :offset="1">
                            <el-table :data="ChannelMonitor"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
                                <el-table-column prop="brandName" label="活动名称" width="200" sortable>
                                </el-table-column>
                                <el-table-column prop="couponName" label='目标人'  sortable>
                                </el-table-column>
                                <el-table-column prop="couponType" label='开始时间'  sortable>
                                </el-table-column>
                                <el-table-column prop="" label="结束时间"  sortable>
                                </el-table-column>
                                <el-table-column prop="ID" label="沟通方式"  sortable>
                                </el-table-column>
                                <el-table-column prop="store" label="应发数量"  sortable>
                                </el-table-column>
                                <el-table-column prop="sendDate" label="实发数量"  sortable>
                                </el-table-column>
                                <el-table-column prop="state" label='未发送'  sortable>
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-row>
    </section>
</template>
<script type="es6">
    export default{
        data: function () {
            return {
                KPIPicker:"",
                formLine:{
                    campaignName:'',
                    campaignType:'',
                    brandName:"",
                    campaignState:''
                },
                vipCardList:[],
                ChannelMonitor:[]
            }
        }
    }

</script>
<style scoped>
    .ChannelLeftHeader{
        height:40px;
        line-height:40px;
        background:#000;
        color:#fff;
        font-size:16px;
    }
    .ChannelLeftBody{
        width: 100%;
        min-height: 400px;
        border:1px solid #000;
        padding:10px;
    }
    .channelRI{
        text-align:right;
        margin-bottom:15px;
        font-size:16px;
        font-weight:600;
    }
    .ChannelLeftBody .el-row{
        padding:5px 0 5px 15px;
        background: #EEEEEE;
        margin-bottom:4px;
    }
    .channelState{
        color:#CDCDCC;
    }
    .ChannelLeftBody .el-col{
        line-height:22px;
    }
</style>
<style>
    .KPICard .el-tabs__content {
        min-height: 500px;
    }
</style>
