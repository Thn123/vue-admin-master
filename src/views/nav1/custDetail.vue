<template>
    <el-row>
        <el-col :span="4" style="margin-top:50px">
            <el-col :span="24" class="cust_img">
                <el-col :span="12"><img :src="cust_img" width="100px;" height="100px"/></el-col>
                <el-col :span="12" class="cust_img_right">
                    <div class=""><span>Janny</span><i class="el-icon-search"></i></div>
                    <span>14353524</span>
                </el-col>
            </el-col>
            <el-col :span="24" style="margin-top:20px;" class="cust-mes">
                <el-col>会员信息</el-col>
                <el-col :span="24">会员卡号:31366454</el-col>
                <el-col :span="24">生日:1990-04-02</el-col>
                <el-col :span="24">入会渠道:微信</el-col>
                <el-col :span="24">会员等级：金卡</el-col>
                <el-col :span="24">会员活跃度:活跃</el-col>
            </el-col>
        </el-col>
        <el-col :span="20">
            <el-col style="text-align: right;margin-top:10px;">
                <el-form :inline="true">
                    <el-form-item>
                        <el-button type="primary">编辑</el-button>
                        <el-button type="primary">保存</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-tabs type="border-card">
                    <el-tab-pane label="会员信息">
                        <el-col :span="24"><div class="vipTitle">基本信息</div></el-col>
                        <el-col :span="24">
                            <div class="basic_mes">
                                <el-form :inline="true" :model="VipForm" :rules="VipFormRules" class="demo-form-inline"  label-width="80px" status-icon>
                                    <el-row>
                                        <el-col :span="8">
                                            <el-form-item label="姓名"   prop="name">
                                                <el-input v-model="VipForm.name" placeholder="顾客姓名"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="昵称">
                                                <el-input v-model="VipForm.nickname" placeholder="顾客昵称"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="性别">
                                                <el-input v-model="VipForm.sex" placeholder="性别"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="身份证号">
                                                <el-input v-model="VipForm.ID" placeholder="身份证号"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="手机号码" prop="tel">
                                                <el-input v-model="VipForm.tel" placeholder="手机号码"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="生日" >
                                                <el-input v-model="VipForm.birth" placeholder="生日"></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="省份" >
                                                <el-input v-model="VipForm.province" placeholder=""></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="城市" >
                                                <el-input v-model="VipForm.city" placeholder=""></el-input>
                                            </el-form-item>
                                        </el-col>
                                        <el-col :span="8">
                                            <el-form-item label="电子邮件" >
                                                <el-input v-model="VipForm.email" placeholder=""></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                    <el-row>
                                        <el-col :span="24">
                                            <el-form-item label="详细地址">
                                                <el-input type="textarea" v-model="VipForm.addr" placeholder="" style="width:1000px"></el-input>
                                            </el-form-item>
                                        </el-col>
                                    </el-row>
                                </el-form>
                            </div>
                        </el-col>
                        <el-col :span="24">
                            <el-col :span="24"><div class="vipTitle">会员信息</div></el-col>
                            <el-col :span="24">
                                <div class="Vip_mes">
                                    <el-form :inline="true" :model="VipForm" :rules="VipFormRules" class="demo-form-inline"  label-width="110px" status-icon>
                                        <el-row>
                                            <el-col :span="8">
                                                <el-form-item label="入会渠道"   prop="name">
                                                    <el-input v-model="VipForm.name"></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item label="入会时间">
                                                    <el-input v-model="VipForm.nickname" ></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item label="入会月龄">
                                                    <el-input v-model="VipForm.sex" ></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item label="会员等级">
                                                    <el-input v-model="VipForm.ID" ></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item label="会员卡号" prop="tel">
                                                    <el-input v-model="VipForm.tel" ></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item label="会员活跃度" >
                                                    <el-input v-model="VipForm.birth" ></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item label="累计积分" >
                                                    <el-input v-model="VipForm.province" placeholder=""></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item label="可用积分" >
                                                    <el-input v-model="VipForm.city" placeholder=""></el-input>
                                                </el-form-item>
                                            </el-col>
                                            <el-col :span="8">
                                                <el-form-item label="次月将过期积分" >
                                                    <el-input v-model="VipForm.email" placeholder=""></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                        <el-row>
                                            <el-col :span="24">
                                                <el-form-item label="备注">
                                                    <el-input type="textarea" v-model="VipForm.addr" placeholder="" style="width:1000px"></el-input>
                                                </el-form-item>
                                            </el-col>
                                        </el-row>
                                    </el-form>
                                </div>
                            </el-col>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="扩展信息">
                        <div class="expand_mes">
                            <el-col :span="24"><span class="expand_id">1</span><span class="expand_label">面部表情</span></el-col>
                            <el-col :span="24">
                                <span class="expand_nav">痘痘：</span>
                                <el-radio-group v-model='doudou'>
                                    <el-radio label="多"></el-radio>
                                    <el-radio label="一般"></el-radio>
                                    <el-radio label="少"></el-radio>
                                    <el-radio label="严重"></el-radio>
                                </el-radio-group>
                            </el-col>
                            <el-col>
                                <span  class="expand_nav">斑点：</span>
                                <el-checkbox-group v-model="bandian">
                                    <el-checkbox label="雀斑"></el-checkbox>
                                    <el-checkbox label="日光性黑子"></el-checkbox>
                                    <el-checkbox label="老年斑"></el-checkbox>
                                    <el-checkbox label="黄褐斑"></el-checkbox>
                                    <el-checkbox label="咖啡斑" ></el-checkbox>
                                    <el-checkbox label="太田痣" ></el-checkbox>
                                    <el-checkbox label="化妆品黑斑" ></el-checkbox>
                                    <el-checkbox label="皮炎" ></el-checkbox>
                                </el-checkbox-group>
                            </el-col>
                            <el-col>
                                <span  class="expand_nav">眼睛：</span>
                                <el-checkbox-group v-model="eyes">
                                    <el-checkbox label="黑眼圈"></el-checkbox>
                                    <el-checkbox label="眼袋"></el-checkbox>
                                </el-checkbox-group>

                            </el-col>
                            <el-col>
                                <span  class="expand_nav">皱纹：</span>
                                <el-checkbox-group v-model="zhuwen">
                                    <el-checkbox label="抬头纹"></el-checkbox>
                                    <el-checkbox label="眉间纹"></el-checkbox>
                                    <el-checkbox label="鱼尾纹"></el-checkbox>
                                    <el-checkbox label="鼻纯沟纹(法令纹)"></el-checkbox>
                                </el-checkbox-group>

                            </el-col>
                            <el-col :span="24">
                                <span  class="expand_nav">面色：</span>
                                <el-radio-group v-model="mianse">
                                    <el-radio label="红润"></el-radio>
                                    <el-radio label="晦暗"></el-radio>
                                    <el-radio label="潮红"></el-radio>
                                    <el-radio label="苍白"></el-radio>
                                    <el-radio label="发黄"></el-radio>
                                    <el-radio label="发黑"></el-radio>
                                    <el-radio label="发青"></el-radio>
                                </el-radio-group>
                            </el-col>
                            <el-col :span="24"><span class="expand_id">2</span><span class="expand_label">皮肤情况</span></el-col>
                            <el-col :span="24">
                                <span  class="expand_nav">性质：</span>
                                <el-radio-group v-model="xingzhi">
                                    <el-radio label="油性"></el-radio>
                                    <el-radio label="中性"></el-radio>
                                    <el-radio label="干性"></el-radio>
                                    <el-radio label="混合性"></el-radio>
                                </el-radio-group>
                            </el-col>
                            <el-col :span="24">
                                <span  class="expand_nav">状况：</span>
                                <el-checkbox-group v-model="zhuangkuang">
                                    <el-checkbox label="松弛"></el-checkbox>
                                    <el-checkbox label="毛孔粗大"></el-checkbox>
                                    <el-checkbox label="没弹性"></el-checkbox>
                                    <el-checkbox label="角质厚层"></el-checkbox>
                                </el-checkbox-group>
                            </el-col>
                            <el-col :span="24"><span class="expand_id">3</span><span class="expand_label">头发</span></el-col>
                            <el-col :span="24">
                                <span  class="expand_nav">性质：</span>
                                <eL-radio-group v-model="xingzhi2">
                                    <el-radio label="油性"></el-radio>
                                    <el-radio label="中性"></el-radio>
                                    <el-radio label="干性"></el-radio>
                                    <el-radio label="混合性"></el-radio>
                                </eL-radio-group>

                            </el-col>
                            <el-col :span="24"><span class="expand_id">4</span><span class="expand_label">个人喜好</span></el-col>
                            <el-col>
                                <span  class="expand_nav">受力：</span>
                                <el-radio-group v-model="shouli">
                                    <el-radio label="不受力"></el-radio>
                                    <el-radio label="一般"></el-radio>
                                    <el-radio label="很受力"></el-radio>
                                </el-radio-group>
                            </el-col>
                            <el-col>
                                <span  class="expand_nav">健谈：</span>
                                <el-radio-group v-model="jiantan">
                                    <el-radio label="不键谈"></el-radio>
                                    <el-radio label="一般"></el-radio>
                                    <el-radio label="很健谈"></el-radio>
                                </el-radio-group>
                            </el-col>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="顾客画像">顾客画像</el-tab-pane>
                    <el-tab-pane label="顾客标签">
                        <el-col :span="24" class="cust_header">顾客标签</el-col>
                        <el-col class="cust_tag">系统标签</el-col>
                        <el-col :span="24">
                            <el-tag>购买频率高</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">购买频率高</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                        </el-col>
                        <el-col class="cust_tag">您选择的标签</el-col>
                        <el-col :span="24">
                            <el-tag
                                    :key="tag"
                                    v-for="tag in dynamicTags"
                                    closable
                                    :disable-transitions="false"
                                    @close="handleClose(tag)">
                                {{tag}}
                            </el-tag>
                            <el-input
                                    class="input-new-tag"
                                    v-if="inputVisible"
                                    v-model="inputValue"
                                    ref="saveTagInput"
                                    size="small"
                                    @keyup.enter.native="handleInputConfirm"
                                    @blur="handleInputConfirm"
                                    >
                            </el-input>
                            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 编辑标签</el-button>
                        </el-col>
                        <el-col class="cust_header">您可以从以下的标签中选择适合顾客的标签</el-col>
                        <el-col class="cust_tag">系统标签</el-col>
                        <el-col :span="24">
                            <el-tag>购买频率高</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">购买频率高</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                        </el-col>
                        <el-col class="cust_tag">系统标签</el-col>
                        <el-col :span="24">
                            <el-tag>购买频率高</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">购买频率高</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                        </el-col>
                        <el-col class="cust_tag">系统标签</el-col>
                        <el-col :span="24">
                            <el-tag>购买频率高</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">购买频率高</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                        </el-col>
                        <el-col class="cust_tag">系统标签</el-col>
                        <el-col :span="24">
                            <el-tag>购买频率高</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">购买频率高</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                            <el-tag type="info">骨灰级会员</el-tag>
                            <el-tag type="info">高购买力</el-tag>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="等级历史">
                        <el-col class="cust_tags">等级变更历史</el-col>
                        <el-col>
                            <el-table
                                    :data="tableData"
                                    border
                                    style="width: 100%">
                                <el-table-column
                                        prop="old_level"
                                        label="原等级"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="new_level"
                                        label="新等级"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="change_type"
                                        label="变动类型">
                                </el-table-column>
                                <el-table-column
                                        prop="change_time"
                                        label="变更时间">
                                </el-table-column>
                            </el-table>
                            <div class="block">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[10, 20, 30, 40]"
                                        :page-size="10"
                                        layout="total, sizes, prev, pager, next, jumper"
                                        :total="40">
                                </el-pagination>
                            </div>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="积分账户">
                        <el-col class="jifen" :span="24">
                            <el-col :span="24">
                                <span >成长值:<strong>234234</strong></span>
                                <span >可用积分:<strong>334</strong></span>
                                <span >未生效积分:<strong>1</strong></span>
                                <span >次月即将过期积分:<strong>32</strong></span>
                                <el-button class="button-new-tag" size="small" @click="showInput">+手动调整积分</el-button>
                            </el-col>
                        </el-col>


                        <el-col class="table-header">积分历史纪录</el-col>
                        <el-col>
                            <el-table
                                    :data="tableData"
                                    border
                                    style="width: 100%">
                                <el-table-column
                                        prop="old_level"
                                        label="原等级"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="new_level"
                                        label="新等级"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="change_type"
                                        label="变动类型">
                                </el-table-column>
                                <el-table-column
                                        prop="change_time"
                                        label="变更时间">
                                </el-table-column>
                            </el-table>
                            <div class="block">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[10, 20, 30, 40]"
                                        :page-size="10"
                                        layout="total, sizes, prev, pager, next, jumper"
                                        :total="40">
                                </el-pagination>
                            </div>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="交易历史">
                        <el-col :span="24" class="cust_tags">订单信息</el-col>
                        <el-form :inline="true" :model="filters">
                            <el-form-item>
                                <el-input v-model="filters.name" placeholder="订单号"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" v-on:click="getUsers">查询</el-button>
                            </el-form-item>
                        </el-form>
                        <el-col>
                            <el-table :data="jiaoyi" border style="width: 100%">
                                <el-table-column label="操作" prop=""></el-table-column>
                                <el-table-column label="渠道" prop=""></el-table-column>
                                <el-table-column label="门店" prop=""></el-table-column>
                                <el-table-column label="订单编号" prop=""></el-table-column>
                                <el-table-column label="退货员编号" prop=""></el-table-column>
                                <el-table-column label="订单状态" prop=""></el-table-column>
                                <el-table-column label="下单时间" prop=""></el-table-column>
                                <el-table-column label="支付时间" prop=""></el-table-column>
                                <el-table-column label="实付金额" prop=""></el-table-column>
                                <el-table-column label="退换单" prop=""></el-table-column>
                            </el-table>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="互动历史">
                        <el-col>
                            <el-form :inline="true" :model="filters">
                                <el-form-item>
                                    <el-input v-model="filters.name" placeholder="订单号"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" v-on:click="getUsers">查询</el-button>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col>
                            <el-table :data="history" border style="width: 100%">
                                <el-table-column label="活动时间" prop=""></el-table-column>
                                <el-table-column label="互动渠道" prop=""></el-table-column>
                                <el-table-column label="互动时间" prop=""></el-table-column>
                                <el-table-column label="互动状态" prop=""></el-table-column>
                                <el-table-column label="活动门店" prop=""></el-table-column>
                                <el-table-column label="备注" prop=""></el-table-column>
                            </el-table>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="优惠券">
                        <el-col>
                            <el-form :inline="true" :model="filters">
                                <el-form-item>
                                    <el-input v-model="filters.name" placeholder="订单号"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" v-on:click="getUsers">查询</el-button>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col>
                            <el-table :data="coupon" border style="width: 100%">
                                <el-table-column
                                        prop="id"
                                        label="编号"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="name"
                                        label="名称"
                                        width="180">
                                </el-table-column>
                                <el-table-column
                                        prop="type"
                                        label="优惠类型">
                                </el-table-column>
                                <el-table-column
                                        prop="order"
                                        label="使用订单">
                                </el-table-column>
                                <el-table-column
                                        prop="effective-data"
                                        label="生效日期">
                                </el-table-column>
                                <el-table-column
                                        prop="invalid-data"
                                        label="失效日期">
                                </el-table-column>
                                <el-table-column
                                        prop="mianzhi"
                                        label="面值">
                                </el-table-column>
                                <el-table-column
                                        prop="zheshe"
                                        label='折射率'>
                                </el-table-column>
                                <el-table-column
                                        prop="hexiao"
                                        label="核销码">
                                </el-table-column>
                                <el-table-column
                                        prop="direction"
                                        label="使用说明">
                                </el-table-column>
                                <el-table-column
                                        prop="state"
                                        label="状态">
                                </el-table-column>
                                <el-table-column
                                        prop="handle"
                                        label="操作">
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-tab-pane>
                    <el-tab-pane label="储值卡">
                        <el-col class="jifen" :span="24">
                            <el-col :span="24">
                                <span >状态:<strong></strong></span>
                                <span >可用余额:<strong></strong></span>
                                <el-button class="button-new-tag" size="small" @click="showInput">+手动调整积分</el-button>
                            </el-col>
                        </el-col>
                        <el-col class="table-header">账户变动明细</el-col>
                        <el-col>
                            <el-table  :data="biandong"  border>
                                <el-table-column prop="" label="卡号"></el-table-column>
                                <el-table-column prop="" label="变动类型"></el-table-column>
                                <el-table-column prop="" label="变动金额"></el-table-column>
                                <el-table-column prop="" label="变动日期"></el-table-column>
                                <el-table-column prop="" label="过期日期"></el-table-column>
                                <el-table-column prop="" label="关联的小票"></el-table-column>
                                <el-table-column prop="" label="变动状态"></el-table-column>
                            </el-table>
                        </el-col>
                    </el-tab-pane>
                </el-tabs>
            </el-col>

        </el-col>
    </el-row>
</template>
<script type="es6">
    import cust_img from '@/assets/404_images/tupian.jpg'
    export default{
        data(){
            return{
                filters:{
               name:''
            },

                doudou:'',
                bandian:"",
                eyes:'',
                zhuwen:'',
                mianse:'',
                xingzhi:'',
                zhuangkuang:'',
                xingzhi2:'',
                shouli:'',
                jiantan:'',

                //标签信息
                dynamicTags: ['标签一', '标签二', '标签三'],
                inputVisible: false,
                inputValue: '',


                cust_img,
                VipForm:{
                    name:'',
                    nickname:'',
                    sex:'',
                    ID:'',
                    tel:'',
                    birth:'',
                    addr:'',
                    province:'',
                    city:'',
                    email:''
            },
                tableData:[
                    {old_level:'普卡',new_level:'金卡',change_type:'注册',change_time:"2017-3-24"},
                    {old_level:'普卡',new_level:'金卡',change_type:'注册',change_time:"2017-3-24"},
                    {old_level:'普卡',new_level:'金卡',change_type:'注册',change_time:"2017-3-24"},
                    {old_level:'普卡',new_level:'金卡',change_type:'注册',change_time:"2017-3-24"}
                ],
                VipFormRules:{
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    tel:[
                        { required: true, message: '手机号不能为空'}
//                      { type: 'number', message: '年龄必须为数字值'}
                    ]
                }
        }
    },
        methods:{
            handleClose(tag) {
                this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
            },

            showInput() {
                this.inputVisible = true;
                this.$nextTick(_ => {
                    this.$refs.saveTagInput.$refs.input.focus();
                });
            },

            handleInputConfirm() {
                let inputValue = this.inputValue;
                if (inputValue) {
                    this.dynamicTags.push(inputValue);
                }
                this.inputVisible = false;
                this.inputValue = '';
            }
        }
 }
</script>

<style>

</style>
<style scope>
    .cust_img{
        padding:10px 15px;
        font-size:18px;
    }
    .cust_img_right{
        padding:20px 0;
    }
    .cust-mes .el-col{
        line-height:35px;
        font-size:16px;
    }
    .vipTitle{
        color:#000;
        padding:10px;
        font-size:18px;
    }
    .Vip_mes input{
        background: #E4E4E4;
        color:#000
    }
    .expand_id{
        display:inline-block;
        font-size:16px;
        width:25px;
        height:25px;
        line-height:25px;
        text-align:center;
        border:1px solid  #4BBCE0;
        border-radius:20%;
        background: #4BBCE0;
        color:#fff;
        margin-right:12px;
    }
    .expand_label{
        font-size:18px;
    }
    .el-checkbox-group{
        display:inline-block;
    }
    /*.expand_nav{*/
        /*float:left;*/
        /*margin-right:15px;*/
    /*}*/

    .expand_mes .el-col{
        line-height:45px;
    }
    .cust_header{
        text-align:center;
        font-size:18px;
        margin:10px 0
    }
    .cust_tag{
        font-size:18px;
        margin:20px 0
    }
    .el-tag + .el-tag {
        margin-left: 10px;
    }
    .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
    }
    .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
    }
    .block{
        margin-top:20px;
        float:right;
    }
    .cust_tags{
        margin:15px;
        font-size:18px;
    }
    .jifen{
        padding:0px 20px;
        border:1px solid #ddd;
        height: 100px;
        line-height:100px;
    }
    .jifen span{
        margin:0 20px;
        font-size:16px;
    }
    .jifen strong{
        font-size:20px;
    }
    .el-tabs__content{
        min-height:800px;
    }
    .table-header{
        margin:10px;
    }
</style>
