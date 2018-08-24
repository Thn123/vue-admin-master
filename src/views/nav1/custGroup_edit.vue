<template>
    <section class="cust_wrapper">
        <el-row>
            <el-col :span="5" class="cust_left">
                <el-row style="margin-bottom:20px;padding-right:30px" :span="15"><el-input type="text" v-model="cust_name" placeholder="输入新的群组名称"></el-input></el-row>
                <el-row class="rule-mes">
                    <el-col style="margin:10px 0">规则信息</el-col>
                    <el-col>1、省份&nbsp;&nbsp;是<span>上海市</span></el-col>
                    <el-col>2、时间&nbsp;&nbsp;是<span>2017-6-5</span></el-col>
                    <el-col>3、交易金额&nbsp;&nbsp;大于<span>1000元</span></el-col>
                    <el-col>
                        <el-col class="line" :span="7"><hr></el-col>
                        <el-col style="margin:0 10px" :span="4"><el-button type="text" @click="handleEdit()">编辑规则</el-button></el-col>
                        <el-col class="line" :span="7"><hr></el-col>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="19">
                <el-row type="flex" justify="space-around " class="cust_list">
                    <el-col>顾客列表</el-col>
                    <el-col style="text-align:right"><i class="el-icon-info"></i><strong style="padding:20px">345人</strong></el-col>
                </el-row>
                <el-row>
                    <el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
                        <el-table-column  width="80" prop="id" label="id" sortable>
                        </el-table-column>
                        <el-table-column prop="name" label="群组名称" width="200" sortable>
                        </el-table-column>
                        <el-table-column prop="sex" label="性别" width="100" :formatter="formatSex"  sortable>
                        </el-table-column>
                        <el-table-column prop="province" label="省份" width="200" sortable>
                        </el-table-column>
                        <el-table-column prop="city" label="城市" min-width="200" sortable>
                        </el-table-column>
                        <el-table-column prop="tel" label="手机号" min-width="200" sortable>
                        </el-table-column>
                    </el-table>
                </el-row>
            </el-col>
        </el-row>
        <!-- 编辑规则-->
        <el-dialog title="添加条件" :visible.sync="editRulesVisible" :close-on-click-modal="false" class="cust_dialog">
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
                        <el-table  :data="users" highlight-current-row style="width: 100%;">
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
                <el-button @click.native="editRulesVisible=false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit">确认</el-button>
            </div>
        </el-dialog>
    </section>
</template>
<script type="es6">
	import { getUserList } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data(){
			return {
				filters: {
					name: ''
				},
                cust_name:'',
				loading: false,
				users:[
				],
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
                inputCust:'',

                filterValue:true,
                editRulesVisible:false
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function () {
				let para = {
					name: this.filters.name
				};
				this.loading = true;
				//NProgress.start();
				getUserList(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
					//NProgress.done();
				});
			},
			handleDel:function (index, row) {
				this.$confirm('确认删除该记录吗?', '提示', {
					type:'warning'
				}).then(()=>{
					this.listLoading = true;
					//NProgress.start();
					let para = { id: row.id };
					removeUser(para).then((res) => {
						this.listLoading = false;
						//NProgress.done();
						this.$message({
							message: '删除成功',
							type: 'success'
						});
						this.getUsers();
					});
				}).catch(() => {

				});
			},
            //显示编辑界面
            handleEdit:function(){
                this.editRulesVisible = true;
            },
            editSubmit:function(){
                this.$confirm("确认提交吗",'添加条件',{}).then(()=>{
                    this.editRulesVisible = false;
                });
            },
            closeSelectedTag(){
                this.filterValue=false
            },
            clearFilter(){
                this.filterValue=false
            }
		},

		mounted(){
			this.getUser();
		}
	};

</script>

<style scoped>
    .cust_wrapper{
        padding:20px;
    }
    .cust_list{
        margin-bottom:20px;
    }
    .cust_left{
        font-size:16px;
        line-height:35px;
    }
    .rule-mes span{
        font-size:18px;
        color:blue;
        margin-left:20px;
    }
    .line{
        padding-top:10px;
    }

</style>
<style>
    .cust_dialog .el-dialog--small{
        width: 70%;
    }
</style>

