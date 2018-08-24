<template>
    <section>
        <el-col class="number">190人</el-col>
        <el-col>
            <el-table :data="users" highlight-current-row v-loading="loading">
                <el-table-column label="id" prop="id" width="80">
                </el-table-column>
                <el-table-column label="标签分类" prop="title">
                </el-table-column>
                <el-table-column label="标签名称" prop="title">
                </el-table-column>
                <el-table-column label="顾客姓名" prop="name">
                </el-table-column>
                <el-table-column label="顾客性别" prop="sex" :formatter="formatSex">
                </el-table-column>
                <el-table-column label="手机号" prop="tel">
                </el-table-column>
                <el-table-column label="省份" prop="province">
                </el-table-column>
                <el-table-column label="城市" prop="city">
                </el-table-column>
            </el-table>
        </el-col>
        <!--<div class="back">-->
            <!--<el-button type="success" @click="$router.push('/_custLabel_detail')">返回</el-button>-->
        <!--</div>-->


	</section>
</template>
<script type="es6">
	import { getUserList } from '../../api/api';
	export default {
		data(){
			return {
				filters: {
					name: ''
				},
				loading:false,
				users:[
				],



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
    .cust_label_header{
        height:100px;
        line-height:100px;
    }
    .back{
        position:absolute;
        bottom:30px;
        right:30px;
    }
	.number{
		margin:20px 0;
		font-size:14px;
		font-weight:800;
	}
</style>