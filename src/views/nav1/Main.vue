<template>
	<section>
		<el-col class="cust_label_header">
			<el-col :span="4">
				<el-select v-model='LabelType' placeholder="标签分类" sortable>
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-col>
			<el-col :span="4">
				<el-input placeholder="标签名称" v-model="LabelName">
					<i slot="prefix" class="el-input__icon el-icon-search"></i>
				</el-input>
			</el-col>
			<el-col :span="6" :offset="10">
				<el-button type="text" @click="AddLabelTypeVisible=true">新增标签分类</el-button>
				<el-button type="text" @click="AddLabelVisible=true">新增标签</el-button>
			</el-col>
		</el-col >
		<el-col>
			<el-table :data="users" border stripe highlight-current-row v-loading="loading">
				<el-table-column label="id" prop="id" width="80">
				</el-table-column>
				<el-table-column label="标签分类" prop="title">
				</el-table-column>
				<el-table-column label="标签名称" prop="name">
				</el-table-column>
				<el-table-column label="总人数" prop="display_total">
				</el-table-column>
				<el-table-column label="创建时间" prop="creatTime">
				</el-table-column>
				<el-table-column label="操作">
					<template  scope="scope">
						<el-button size="small" type="success" @click="$router.push({path:'/_custLabel_detail/'+scope.row.id})">查看</el-button>
						<el-button size="small" type="danger" @click="handleDel(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-col>
		<!--新增标签分类-->
		<el-dialog title="新增标签分类" :visible.sync="AddLabelTypeVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" label-position="top">
				<el-form-item label="标签分类名称">
					<el-input type="textarea" v-model="editForm.addr" placeholder="请输入标签分类名称"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="AddLabelTypeVisible=false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit">确认</el-button>
			</div>
		</el-dialog>
		<!-- 新增标签-->
		<el-dialog title="新增标签分类" :visible.sync="AddLabelVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="addForm">
				<el-form-item label="标签分类" prop="type">
					<el-select v-model='LabelType' placeholder="标签分类">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="标签名称" prop="name">
					<el-input type="textarea" v-model="editForm.addr" placeholder="请输入标签分类名称"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="AddLabelVisible=false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit">确认</el-button>
			</div>
		</el-dialog>
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
				editForm:[],
				AddLabelTypeVisible:false,
				AddLabelVisible:false,
				//editFormRules:{
				//	type:[
				//		{required: true, message: '必须要有分类', trigger: 'blur'}
				//	],
				//	name:[
				//		{required: true, message: '请输入标签名称', trigger: 'blur'},
				//		{min: 3, max: 50, message: '长度在 3 到 50个字符', trigger: 'blur' }
				//	]
				//}
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
			//新增标签显示
			AddLabelType:function(){
				this.AddLabelVisible=true;
			},
			//新增标签分类显示
			AddLabelType:function(){
				this.AddLabelTypeVisible = true;
			},

			editSubmit:function(){
				this.$refs.addForm.validate((valid) => {
					if(valid){
						this.$confirm("确认新增标签吗",'提示',{}).then(()=>{
							this.AddLabelVisible=false;
							this.AddLabelTypeVisible=false;
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
	.cust_label_header{
		height:100px;
		line-height:100px;
	}
</style>