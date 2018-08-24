<template>
    <section class="cust_wrapper">
        <el-row>
            <el-col :span="5" class="cust_left">
                <el-row style="margin-bottom:20px;">最近3个月的消费</el-row>
                <el-row class="rule-mes">
                    <el-col style="margin:10px 0">规则信息</el-col>
                    <el-col>1、省份&nbsp;&nbsp;是<span>上海市</span></el-col>
                    <el-col>2、时间&nbsp;&nbsp;是<span>2017-6-5</span></el-col>
                    <el-col>3、交易金额&nbsp;&nbsp;大于<span>1000元</span></el-col>
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
                        <el-table-column  label="操作" >
                            <template slot-scope="scope" fixed="right">
                                <el-button type="success" size="small" @click="AddLabelVisible=true">新增</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-row>
            </el-col>
        </el-row>
        <!--新增界面-->
        <el-dialog title="新增标签" :visible.sync="AddLabelVisible" :close-on-click-modal="false">
            <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="addForm">
                <el-form-item label="标签分类" prop="type">
                    <el-input v-model="editForm.type" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="标签名称" prop="name">
                    <el-input v-model="editForm.name" auto-complete="off"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="AddLabelVisible = false">取消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">确认</el-button>
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
				loading: false,
				users:[
				],
                editFormRules:{
                    type:[
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur' }
                    ]
                },
                editForm:[],
                AddLabelVisible:false
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
				//调用$confirm方法即可打开消息提示
				//this.$confirm("内容",'标题',{ confirmButtonText: '确定',
				//cancelButtonText: '取消',
				//		type: 'warning'}).then().catch()
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
            editSubmit:function(){
                this.$refs.addForm.validate((valid) => {
                    if(valid){
                        this.$confirm("确认新增标签吗",'提示',{}).then(()=>{
                            this.AddLabelVisible=false;
                        })
                    }
                });

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
</style>

