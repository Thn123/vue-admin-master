<template>
	<section>
			<el-col style="margin:20px 0">
				<el-form :inline="true" :model="formLine">
					<el-form-item>
						<el-select v-model="formLine.brand" placeholder="品牌名称">
							<el-option label="区域一" value="shanghai"></el-option>
							<el-option label="区域二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-select v-model="formLine.brand" placeholder="卡状态">
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
						<el-button type="primary">+新增会员卡</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			<el-col>
				<el-table :data="user"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
					<el-table-column  width="60" label="id" prop="id">
					</el-table-column>
					<el-table-column prop="brandName" label="品牌名称"  sortable>
					</el-table-column>
					<el-table-column prop="vipLevel" label="会员等级"  sortable>
					</el-table-column>
					<el-table-column prop="cardPre" label="卡号前缀"  sortable>
					</el-table-column>
					<el-table-column prop="cardLength" label="卡号长度"  sortable>
					</el-table-column>
					<el-table-column prop="num" label="卡数量"  sortable>
					</el-table-column>
					<el-table-column prop="state" label="状态" width="200" sortable :formatter="formatState">
					</el-table-column>
					<el-table-column prop="CreatTime" label="创建时间" sortable :formatter="formatState">
					</el-table-column>
					<el-table-column prop="valid" label="卡有效期"  sortable :formatter="formatState">
					</el-table-column>
					<el-table-column prop="founder" label="创建人"  sortable :formatter="formatState">
					</el-table-column>
					<el-table-column label="操作">
						<template scope="scope">
							<el-button type="text" size="small">编辑</el-button>
							<el-button type="text" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
			<div class="expand_content-footer">
				<el-col  class="expand_pagination">
					<el-pagination
							:page-sizes="[10, 20, 30, 40]"
							:page-size="10"
							layout="total, sizes, prev, pager, next, jumper"
							:total="40">
					</el-pagination>
				</el-col>
			</div>
		</section>
</template>
<script type="es6">
    import { getUserList2 } from '../../api/api';
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
                user:[],
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
