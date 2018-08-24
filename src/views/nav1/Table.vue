<template>
	<section>
		<!--工具条-->
		<el-row style="margin-top:10px">
			<el-col :span="4">
				<el-col :span="20" style="margin-bottom:20px">
					<el-input
							placeholder="请输入内容"
							prefix-icon="el-icon-search"
							v-model="search">
					</el-input>
				</el-col>
				<el-col :span="24">
					<el-checkbox v-model="checkedName" label="顾客名称"></el-checkbox>
					<div v-if="checkedName">
					</div>
				</el-col>
				<el-col :span="24">
					<el-checkbox v-model="checkedTel">手机号码</el-checkbox>
					<div v-if="checkedTel">add filter</div>
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
				<el-col :span="24">
					<el-checkbox v-model="checkedGroup">群组</el-checkbox>
					<div v-if="checkedGroup">add filter</div>
				</el-col>
				<el-col :span="24">
					<el-checkbox v-model="checkedLabel">标签</el-checkbox>
					<div v-if="checkedLabel">add filter</div>
				</el-col>
				<el-col :span="24" style="text-align:center">
					<i class="el-icon-arrow-down"></i>
				</el-col>
				<el-col :span="24" style="text-align:center;margin-top:20px">
					<el-button type="primary">应用筛选</el-button>
				</el-col>
			</el-col>
			<el-col :span="20">
				<el-col   style="padding-bottom: 0px;">
					<el-form :inline="true" :model="filters">
						<!--<el-form-item>-->
							<!--<el-input v-model="filters.name" placeholder="姓名"></el-input>-->
						<!--</el-form-item>-->
						<!--<el-form-item>-->
							<!--<el-button type="primary" v-on:click="getUsers">查询</el-button>-->
						<!--</el-form-item>-->
						<el-form-item>
							<el-button type="primary" @click="handleAdd">+新增</el-button>
						</el-form-item>
						<el-form-item>
							<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
						</el-form-item>
						<el-form-item>
							<el-dropdown trigger="click" :hide-on-click="false">
								<el-button type="primary">
									<i class="el-icon-menu"></i>
									<span class="el-icon-caret-bottom"></span>
								</el-button>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item>
										<el-checkbox v-model="id">id</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="birth">生日</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="sex">性别</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="name" >顾客名称</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="tel">手机号</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="ID">身份证号</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="email">邮箱</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="province">省市</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="city">城市</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="addr">地址</el-checkbox>
									</el-dropdown-item>
									<el-dropdown-item>
										<el-checkbox v-model="store">所属门店</el-checkbox>
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="dialogVisible = true">
								批量导入
								<span class="caret"></span>
							</el-button>
							<el-dialog
									title="批量导入"
									:visible.sync="dialogVisible"
									width="30%">
								<el-upload
										style="text-align:center"
										class="upload-demo"
										action="https://jsonplaceholder.typicode.com/posts/"
										drag
										>
									<i class="el-icon-upload"></i>
									<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
									<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
								</el-upload>
							</el-dialog>
						</el-form-item>
						<el-form-item>
							<el-button  type="primary"   @click.native="getGroup">保存群组</el-button>
						</el-form-item>
					</el-form>
				</el-col>
				<el-col >
					<el-col :span="24" style="height:44px;line-height:44px">
						<span>筛选条件></span>
						<div class="fliter-content" style="display:inline">
							<span class="tags-view-item" v-show="filterValue" >筛选条件1<i class="el-icon-close" @click='closeSelectedTag'></i></span>
						</div>
						<span class="clear-filter" @click="clearFilter">清空筛选</span>
					</el-col>
					<el-table :data="users" stripe border highlight-current-row v-loading="listLoading" @selection-change="selsChange" style="width: 100%;">
						<el-table-column type="selection" width="55">
						</el-table-column>
						<!--<el-table-column type="index" width="60" label="id">-->
						<!--</el-table-column>-->
						<el-table-column prop="id" label="id" width="80" sortable v-if="id">
						</el-table-column>
						<el-table-column prop="birth" label="生日" width="120" sortable v-if="birth">
						</el-table-column>
						<el-table-column prop="sex" label="性别" width="120" sortable v-if="sex" :formatter="formatSex">
						</el-table-column>
						<el-table-column prop="name" label="顾客名称" width="120" sortable v-if="name" style="cursor:pointer;">
							<template slot-scope="scope">
								custDetail<p @click="$router.push({path:'/custDetail/'+scope.row.id})">{{scope.row.name}}</p>
							</template>
						</el-table-column>
						<el-table-column prop="tel" label="手机号码" min-width="180" sortable v-if="tel">
						</el-table-column>
						<el-table-column prop="ID" label="身份证号" min-width="180" sortable v-if="ID">
						</el-table-column>
						<el-table-column prop="email" label="邮箱" min-width="240" sortable v-if="email">
						</el-table-column>
						<el-table-column prop="province" label="省份" min-width="120" sortable v-if="province">
						</el-table-column>
						<el-table-column prop="city" label="城市" min-width="120" sortable v-if="city">
						</el-table-column>
						<el-table-column prop="addr" label="地址" min-width="180" sortable v-if="addr">
						</el-table-column>
						<el-table-column prop="store" label="所属门店" min-width="120" sortable>
						</el-table-column>
						<el-table-column label="操作" width="200"  fixed="right">
						<!--&lt;!&ndash; 通过  slot-scope="scope"可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。&ndash;&gt;-->
						<template scope="scope">
						<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
						<el-button type="success" size="small" @click="$router.push({path:'/custDetail/'+scope.row.id})">查看</el-button>
						</template>
						</el-table-column>
					</el-table>
				</el-col>
			</el-col>
		</el-row>
		<!-- 分页-->
		<el-col :span="20" :offset="4" class="toolbar">
			<el-pagination
					style="float:left"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
					:current-page.sync="listUser.page"
					:page-size="listUser.limit"
					:page-sizes="[10, 20, 30, 40]"
					layout="total,sizes, prev, pager, next,jumper"
					:total="total">
			</el-pagination>

			<!--<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">-->
			<!--</el-pagination>-->
		</el-col>

		<!-- 添加群组界面-->
		<!--:visible.sync="addGroupVisible"等效与-->
       <el-dialog title="保存群组" :visible.sync="addGroupVisible" :close-on-click-modal="false" class="addDialog">
		   <div class="dialog-body">
			   <div class="dialog-title">创建新的群组</div>
			   <el-form :model="editGroup">
				   <el-form-item >
					   <el-input v-model="editGroup.groupName" placeholder="请输入新的群组名称"></el-input>
				   </el-form-item>
			   </el-form>
		   </div>
		   <div slot="footer" class="dialog-footer">
			   <el-button @click.native="addGroupVisible=false">取消</el-button>
			   <el-button type="primary" @click.native="addGroupSubmit" :loading="addLoading">确认</el-button>
		   </div>
	   </el-dialog>

		<!--编辑界面-->
		<el-dialog title="编辑" :visible.sync="editFormVisible" :close-on-click-modal="false">
			<el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
				<el-form-item label="姓名" prop="name">
					<el-input v-model="editForm.name" auto-complete="off"></el-input>
				</el-form-item>
				<el-form-item label="性别" >
					<el-radio-group v-model="editForm.sex" >
						<el-radio class="radio" :label="1" >男</el-radio>
						<el-radio class="radio" :label="0">女</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="年龄">
					<el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
				</el-form-item>
				<el-form-item label="生日">
					<el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
				</el-form-item>
				<el-form-item label="地址">
					<el-input type="textarea" v-model="editForm.addr"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="editFormVisible = false">取消</el-button>
				<el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
			</div>
		</el-dialog>

		<!--新增界面-->
		<el-dialog title="新增" :visible.sync="addFormVisible" :close-on-click-modal="false" class="addDialog">
			<el-form :inline="true" :model="addForm" :rules="addFormRules" class="demo-form-inline"  label-width="80px" ref="addForm" status-icon>
				<el-row>
					<el-col :span="12">
						<el-form-item label="姓名"   prop="name">
							<el-input v-model="addForm.name" placeholder="顾客姓名"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="昵称" >
							<el-input v-model="addForm.nickname" placeholder="顾客昵称"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="身份证号"   >
							<el-input v-model="addForm.ID" placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="手机号码"  prop="tel">
							<el-input v-model.number="addForm.tel" placeholder=""></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="性别">
							<el-radio-group v-model="addForm.sex">
								<el-radio class="radio" :label="1">男</el-radio>
								<el-radio class="radio" :label="0">女</el-radio>
							</el-radio-group>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="生日">
							<el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="12">
						<el-form-item label="省份">
							<el-input v-model="addForm.province" placeholder=""></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="城市">
							<el-input v-model="addForm.city" placeholder=""></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-form-item label="电子邮件">
							<el-input v-model="addForm.email" placeholder=""></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row>
					<el-col :span="24">
						<el-form-item label="详细地址">
							<el-input type="textarea" v-model="addForm.addr" placeholder="" style="width:500px"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click.native="addFormVisible =false">取消</el-button>
				<el-button type="primary" @click.native="addSubmit" :loading="addLoading">确认</el-button>
			</div>
		</el-dialog>
	</section>
</template>

<script type="es6">
	import util from '../../common/js/util'
	//import NProgress from 'nprogress'
	import { getUserListPage, removeUser, batchRemoveUser, editUser, addUser } from '../../api/api';

	export default {
		data() {
			return {
				filters:{
					name: ''
				},
				users:[],
				//分页
				listUser:{
					page:1,
					limit:20
					//importance: undefined,
					//title: undefined,
					//type: undefined
				},
				search:"",
				filterValue:true,
				dialogVisible: false,
				menuOpen:true,
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
				checkedGroup:false,
				checkedLabel:false,
				users:[],
				total:0,
				page:1,
				listLoading:false,
				sels:[],//列表选中列
				id:false,
				birth:false,
				sex:false,
				name:true,
				tel:true,
				ID:true,
				email:true,
				province:true,
				city:true,
				addr:true,
				store:true,

				addGroupVisible:false,//添加群组
				//群组界面数据
				editGroup:{
					groupName:""
				},

				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules:{
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm:{
					id: 0,
					name: '',
					sex: 1,
					age: 0,
					birth: '',
					addr: ''
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules:{
					name:[
						{ required: true, message: '请输入活动名称', trigger: 'blur' },
						{ min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
					],
					tel:[
						{ required: true, message: '电话不能为空'},
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
				}

			}
		},

		methods: {

			//性别显示转换
			formatSex:function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//筛选条件
			closeSelectedTag(){
				this.filterValue=false
			},
			clearFilter(){
				this.filterValue=false
			},
			handleCurrentChange(val) {
				this.page = val;
				this.getUsers();
			},
			//获取用户列表
			getUsers(){
				let para = {
					page: this.page,
					name:this.filters.name
				};
				this.listLoading = true;
				getUserListPage(para).then((res)=>{
					this.total= res.data.total;
					this.users= res.data.users;
					this.listLoading = false;
				});
			},

			//添加群组
			getGroup:function(){
				this.addGroupVisible=true;
				this.Editgroup={
					groupName:''
				}
			},

			addGroupSubmit:function(){
				this.$confirm('确定添加群组吗？','提示',{
					//type为内容区域左边的图标
					type:'warning'
				}).then(()=>{
					this.addGroupVisible=false;
				})
			},

			//删除
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
			//显示编辑界面
			handleEdit:function (index, row) {
				this.editFormVisible = true;
				//复制对象，新增对象
				this.editForm = Object.assign({}, row);
			},
			//显示新增界面
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
			//编辑
			editSubmit:function (){
				this.$refs.editForm.validate((valid)=>{
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.editLoading = true;
							//NProgress.start();
							let para = Object.assign({}, this.editForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							editUser(para).then((res) => {
								this.editLoading = false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type:'success'
								});
								this.$refs['editForm'].resetFields();
								this.editFormVisible = false;
								this.getUsers();
							});
						});
					}
				});
			},
			//新增
			addSubmit:function () {
				this.$refs.addForm.validate((valid) => {
					if (valid) {
						this.$confirm('确认提交吗？', '提示', {}).then(() => {
							this.addLoading = true;
							//NProgress.start();
							//Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
							//Object.assign(target, ...sources)
							let para = Object.assign({}, this.addForm);
							para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
							addUser(para).then((res)=>{
								console.log(res);
								this.addLoading=false;
								//NProgress.done();
								this.$message({
									message: '提交成功',
									type: 'success'
								});
								this.$refs['addForm'].resetFields();
								this.addFormVisible = false;
								this.getUsers();
							});
						}).catch(()=>{
							alert(1);
						});
					}
				});
			},
			selsChange: function (sels) {
				console.log(sels);//数组[]
				this.sels = sels;
			},
			//批量删除
			batchRemove: function () {
				var ids = this.sels.map(item => item.id).toString();
console.log(ids);
				this.$confirm('确认删除选中记录吗？', '提示', {
					type: 'warning'
				}).then(() => {
					this.listLoading = true;
					//NProgress.start();
					let para = { ids: ids };
					batchRemoveUser(para).then((res) => {
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
			//分页查询
			handleSizeChange(val) {
			this.listUser.limit = val;
			this.getUsers();
			},
			handleCurrentChange(val) {
			this.listUser.page= val;
			this.getUsers();
			}
			//顾客详情
		//	handleDetail:function(index, row){
		//	  this.$router.push({path:'/tabledetail/'+(((this.pageindex-1)*10)+params.index) })
		//		console.log(index, row);
		//		this.$router.push({path:'/custDetail/'+scope.$index})
		//}
	},
		mounted(){
			this.getUsers();
		}
	}

</script>

<style scoped>

	.el-dropdown-menu__item{
		width: 150px;
	}
	.el-upload__input{
		display: none!important;
	}
	.tags-view-item {
		display: inline-block;
		position: relative;
		height:30px;
		line-height:30px;
		border: 1px solid #d8dce5;
		color: #495060;
		background: #fff;
		padding: 0 8px;
		font-size: 16px;
		margin-left: 5px;
		margin-top: 4px;
		margin-bottom:10px;
		cursor:pointer;
	}
	.tags-view-item i{
		font-size:12px;
		color:#495060;
		cursor:pointer;
	}
	.clear-filter{
		font-size:14px;
		margin-left:10px;
		cursor:pointer;
	}
	/*.search-icon{*/
		/*position:absolute;*/
		/*top:10px;*/
		/*left:0;*/
		/*font-size:14px;*/
		/*color:#aaa;*/
	/*}*/
	.dialog-body{
		height:200px;
	    padding:50px;
	}
	.dialog-title{
		font-size:20px;
		text-align:center;
		margin-bottom:30px;

	}

</style>
<style>
	.addDialog .el-dialog--small {
		width: 40%;
	}
</style>