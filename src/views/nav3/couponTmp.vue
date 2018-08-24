<template>
	<div>
		<section>
			<el-col style="margin:20px 0">
				<el-form :inline="true" :model="formLine">
					<el-form-item>
						<el-input placeholder="优惠券名称" v-model="formLine.couponName"></el-input>
					</el-form-item>
					<el-form-item>
						<el-select v-model="formLine.couponType" placeholder="优惠券类型">
							<el-option label="名称一" value="shanghai"></el-option>
							<el-option label="名称二" value="beijing"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-input placeholder="品牌名称" v-model="formLine.brandName"></el-input>
					</el-form-item>
					<el-form-item>
						<el-data-picker placeholder="创建时间" v-model="formLine.creatTime"></el-data-picker>
					</el-form-item>
					<el-form-item style="float:right">
						<el-button type="primary" @click.native="$router.push({name:'新建优惠券'})">+新建优惠券</el-button>
						<el-button type="primary">刷新</el-button>
					</el-form-item>
				</el-form>
			</el-col>
			<el-col>
				<el-table :data="vipCardList"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
					<el-table-column  width="60" label="id" prop="id">
					</el-table-column>
					<el-table-column prop="brandName" label="品牌名称" width="200" sortable>
					</el-table-column>
					<el-table-column prop="couponName" label="优惠券名称"  sortable>
					</el-table-column>
					<el-table-column prop="couponType" label='优惠券类型'  sortable>
					</el-table-column>
					<el-table-column prop="" label="生效日期"  sortable>
					</el-table-column>
					<el-table-column prop="ID" label="失效日期"  sortable>
					</el-table-column>
					<el-table-column prop="store" label="创建时间"  sortable>
					</el-table-column>
					<el-table-column prop="sendDate" label="已发数量"  sortable>
					</el-table-column>
					<el-table-column prop="state" label='已使用数'  sortable>
					</el-table-column>
					<el-table-column prop="state" label='创建人' sortable >
					</el-table-column>
					<el-table-column label='操作'>
						<template slot="slot">
							<el-button type="text">启用</el-button>
							<el-button type="text">停用</el-button>
							<el-button type="text">编辑</el-button>
							<el-button type="text">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
			</el-col>
			<el-col>
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
			</el-col>
		</section>
	</div>
</template>
<script type="es6">
    import { getUserList2 } from '../../api/api';
	//import NProgress from 'nprogress'
	export default {
		data(){
			return {
                formLine:{
                    brandName:"",
                    storeName:"",
                    cardNum:'',
                    cardState:''
                },
                vipCardList:[],
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
			}
		},
		mounted(){
			this.getUser();
		}
	};
</script>

<style scoped>

</style>
