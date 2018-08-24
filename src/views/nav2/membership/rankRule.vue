<template>
    <div>
        <section>
            <el-col style="margin:20px 0">
                <el-form :inline="true" :model="formLine">
                    <el-form-item>
                        <el-input placeholder="规则名称" v-model="formLine.ruleName"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.brand" placeholder="品牌">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.state" placeholder="状态">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-date-picker
                                v-model="formLine.data"
                                type="daterange"
                                range-separator="至"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item style="float:right">
                        <el-button type="primary"  @click="$router.push({name:' 等级规则'})">+新增</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table :data="users"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
                    <el-table-column  width="60" label="id" prop="id">
                    </el-table-column>
                    <el-table-column prop="title" label="品牌" width="200" sortable>
                    </el-table-column>
                    <el-table-column prop="title" label="规则名称"  sortable>
                    </el-table-column>
                    <el-table-column prop="type" label="分类"  sortable>
                    </el-table-column>
                    <el-table-column prop="creatTime" label="规则开始时间"  sortable>
                    </el-table-column>
                    <el-table-column prop="creatTime" label="规则结束时间"  sortable>
                    </el-table-column>
                    <el-table-column prop="state" label="状态" width="200" sortable :formatter="formatState">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template scope="scope">
                            <el-button size="text">启用</el-button>
                            <el-button type="text" size="small">停用</el-button>
                            <el-button type="text" size="small" @click="$router.push({path:'/rankRuleEdit/'+scope.row.id})">编辑</el-button>
                            <el-button type="text" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </section>
    </div>
</template>
<script type="es6">
    import { getUserList2 } from '../../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data(){
			return {
                formLine:{
                    ruleName:"",
                    brand:"",
                    state:'',
                    data:''
                },
                users:[],
				loading:false
			}
		},
		methods: {

            formatState: function (row, column) {
                return row.state == 1 ? '启用' :'停用'
            },
			//获取用户列表
			getUser:function(){
				this.loading = true;
				//NProgress.start();
				getUserList2().then((res) => {
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
			}
		},
		mounted(){
			this.getUser();
		}
	};
</script>

<style scoped>

</style>
