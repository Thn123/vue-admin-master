<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="群组名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="users"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column  width="60" label="id" prop="id">
				</el-table-column>
				<el-table-column prop="title" label="群组名称"  sortable>
				</el-table-column>
				<el-table-column prop="display_total" label="总人数"  sortable>
				</el-table-column>
				<el-table-column prop="display_time" label="最近更新时间"  sortable>
				</el-table-column>
				<el-table-column prop="creatTime" label="创建时间"  sortable>
				</el-table-column>
				<el-table-column label="操作">
					<template scope="scope">
						<el-button size="small" @click="$router.push({path:'/custGroup_label/'+scope.row.id})">打标签</el-button>
						<el-button type="danger" size="small" @click="$router.push({path:'/custGroup_detail/'+scope.row.id})">查看</el-button>
						<el-button type="success" size="small" @click="$router.push({path:'/custGroup_edit/'+scope.row.id})">编辑</el-button>
						<el-button type="success" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</template>

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
				]
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
			}
		},
		mounted(){
			this.getUser();
		}
	};

</script>

<style scoped>

</style>