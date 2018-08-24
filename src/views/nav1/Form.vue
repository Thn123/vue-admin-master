<template>
	<section >
		<el-row :span="24">
			<el-col :span="4" class="expand">
				<div class="expand_content">
					<div class="expand_content-heading">组织机构</div>
					<div>
						<el-tree
								:data="data2"
								show-checkbox
								accordion
								node-key="id"
								ref="tree"
								highlight-current
								:props="defaultProps">
						</el-tree>
					</div>
				</div>
			</el-col>
			<el-col :span="20" class="expand">
				<div class="expand_content">
					<div class="expand_content-heading">基本信息列表</div>
					<div class="expand_content-body">
						<el-form>
							<el-form-item>
								<el-button type="primary" @click="handleAdd">+新增</el-button>
							</el-form-item>
						</el-form>
						<el-table :data="users" highlight-current-row  border style="width: 100%" stripe>
							<el-table-column prop="id" label="唯一编码">
							</el-table-column>
							<el-table-column prop="name" label="名称">
							</el-table-column>
							<el-table-column prop="type" label="类型" >
							</el-table-column>
							<el-table-column prop="describe" label="是否描述" >
							</el-table-column>
							<el-table-column prop="ID" label="序号" >
							</el-table-column>
							<el-table-column prop="isEdit" label="是否填写">
							</el-table-column>
							<el-table-column prop="time" label="创建时间">
							</el-table-column>
							<el-table-column label="操作" width="200">
								<template scope="scope">
									<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
									<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
								</template>
							</el-table-column>
						</el-table>

					</div>
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
				</div>
			</el-col>
		</el-row>


		<!--新增界面-->
		<el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false" class="addDialog">
			<el-form  :model="addForm" :rules="addFormRules" class="demo-form-inline" :label-position="labelPosition" label-width="80px" ref="addForm" status-icon>
					<el-col :span="24">
						<el-form-item label="名称"   prop="name">
							<el-input v-model="addForm.name" placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="排序" >
							<el-input v-model="addForm.nickname" placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="类型"   >
							<el-input v-model="addForm.type" placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="24">
						<el-form-item label="是否必填"  prop="tel">
							<el-input v-model.number="addForm.tel" placeholder=""></el-input>
						</el-form-item>
					</el-col>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible =false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">确认</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script  type="es6">
	export default {
		data() {
			return {
				data2: [{
					id: 1,
					label:'顾客信息',
					children: [{
						id:1,
						label: '您希望以后通过哪些方式了解我们的信息',
						children: [{
							id: 9,
							label: '电话沟通'
						},{
							id: 10,
							label: '其他'
						},
							{
								id: 10,
								label: '短信平面'
							},
							{
								id: 10,
								label: '短信'
							}
						]
					},
						{
							id:2,
							label: '家用美容产品品牌',
							children: [{
								id: 9,
								label: '电话沟通'
							},{
								id: 10,
								label: '其他'
							},
								{
									id: 10,
									label: '短信平面'
								},
								{
									id: 10,
									label: '短信'
								}
							]
						},
						{
							id:3,
							label: '有无下列不适或疾病',
							children: [{
								id: 9,
								label: '电话沟通'
							},{
								id: 10,
								label: '其他'
							},
								{
									id: 10,
									label: '短信平面'
								},
								{
									id: 10,
									label: '短信'
								}
							]
						},
						{
							id:4,
							label: '子女数量',
							children: [{
								id: 9,
								label: '无'
							},{
								id: 10,
								label: '有'
							}
							]
						},
						{
							id:5,
							label: '茶水喜好',
							children: [{
								id: 9,
								label: '其他'
							},{
								id: 10,
								label: '红枣茶'
							},
								{
									id: 10,
									label: '大麦茶'
								},
								{
									id: 10,
									label: '菊花枸杞茶'
								}
							]
						}
					]
				}],

				addFormVisible:false,//新增界面是否显示
				addFormRules:{
					name:[
						{ required: true, message: '请输入活动名称', trigger: 'blur' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					tel:[
						{ required: true, message: '电话不能为空'}
						//{ type: 'number', message: '/^1\d{10}$/'}
					]
				},
				//新增界面数据
				addForm:{
					name:'',
					nickname:'',
					ID:'',
					tel:'',
					sex:'1',
					birth:'',
					province:'',
					city:'',
					email:'',
					addr: ''
				},
				defaultProps:{
					children: 'children',
					label: 'label'
				}
			};
		},
		methods:{
			handleAdd:function(){
				this.addFormVisible = true;
				this.addForm={
					name:'',
					nickname:'',
					ID:'',
					tel:'',
					sex:'',
					birth: '',
					province:'',
					city:'',
					email:'',
					addr: ''
				};
			},
			//新增一个大类
			addSubmit:function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							let para = Object.assign({}, this.addForm);
							this.addFormVisible = false;
							//para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							//addUser(para).then((res)=>{
							//	//this.addLoading=false;
							//	//NProgress.done();
							//	this.$message({
							//		message: '提交成功',
							//		type: 'success'
							//	});
							//	this.$refs['addForm'].resetFields();
							//	this.addFormVisible = false;
							//});
						}).catch(()=>{
							alert(1);
						});
					}
				});
			}
		}
	}

</script>
<style scope>

	.expand{
		padding:10px;
	}
	.expand_content{
		width: 100%;
		min-height:800px;
		border: 1px solid #d1dbe5;
	}
	.expand_content-heading{
		background: #4F8EDC;
		color:#fff;
		padding:10px;
		font-size:18px;
	}
	.el-tree{
		border:none;
	}
	.expand_content-body{
		padding:10px;
	}
	.expand_pagination{
		text-align:right;
		float:right;
		margin:10px;
	}
</style>