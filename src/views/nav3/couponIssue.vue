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
                        <el-select v-model="formLine.couponType" placeholder="品牌名称">
                            <el-option label="名称一" value="shanghai"></el-option>
                            <el-option label="名称二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item >
                        <el-date-picker v-model="formLine.validTime" placeholder="生效日期"></el-date-picker>
                    </el-form-item>
                        <el-select v-model="formLine.couponType" placeholder="优惠券编码">
                            <el-option label="名称一" value="shanghai"></el-option>
                            <el-option label="名称二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.couponType" placeholder="优惠券状态">
                            <el-option label="名称一" value="shanghai"></el-option>
                            <el-option label="名称二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="formLine.activityName" placeholder="活动名称"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="formLine.custMes" placeholder="顾客姓名/手机号"></el-input>
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
                    <el-table-column prop="" label="活动名称"  sortable>
                    </el-table-column>
                    <el-table-column prop="ID" label="优惠券编码"  sortable>
                    </el-table-column>
                    <el-table-column prop="store" label="优惠券状态"  sortable>
                    </el-table-column>
                    <el-table-column prop="sendDate" label="生效日期"  sortable>
                    </el-table-column>
                    <el-table-column prop="state" label='顾客姓名'  sortable>
                    </el-table-column>
                    <el-table-column prop="state" label='顾客手机号' sortable >
                    </el-table-column>
                </el-table>
            </el-col>
            <el-co>
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
            </el-co>
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

