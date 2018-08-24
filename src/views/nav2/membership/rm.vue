<template>
        <section>
            <el-col style="margin:20px 0">
                <el-form :inline="true" :model="formLine">
                    <el-form-item>
                        <el-select v-model="formLine.brand" placeholder="品牌">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="float:right">
                        <el-button type="primary" @click="$router.push({name:'设置等级'})">设置等级</el-button>
                        <el-button type="primary">刷新</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table :data="users"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
                    <el-table-column  width="60" label="id" prop="id">
                    </el-table-column>
                    <el-table-column prop="title" label="品牌" width="200" sortable>
                    </el-table-column>
                    <el-table-column prop="title" label="等级名称"  sortable>
                    </el-table-column>
                    <el-table-column prop="display_total" label="有效月"  sortable>
                    </el-table-column>
                    <el-table-column prop="display_time" label="创建时间"  sortable>
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
</template>
<script type="es6">
    import { getUserList2 } from '../../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data(){
			return {
                formLine:{
                    brand:""
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