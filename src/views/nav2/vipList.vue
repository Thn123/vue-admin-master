<template>
    <div>
        <section>
            <el-col style="margin:20px 0">
                <el-form :inline="true" :model="formLine">
                    <el-form-item>
                        <el-select v-model="formLine.brandName" placeholder="品牌名称">
                            <el-option label="名称一" value="shanghai"></el-option>
                            <el-option label="名称二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.storeName" placeholder="门店名称">
                            <el-option label="名称一" value="shanghai"></el-option>
                            <el-option label="名称二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="顾客姓名/手机号/身份证号" v-model="custMes"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="会员卡号" v-model="cardNum"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.sendDate" placeholder="发卡日期">
                            <el-option label="日期一" value="shanghai"></el-option>
                            <el-option label="日期二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.cardState" placeholder="卡状态">
                            <el-option label="状态一" value="shanghai"></el-option>
                            <el-option label="状态二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="float:right">
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table :data="vipCardList"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
                    <el-table-column  width="60" label="id" prop="id">
                    </el-table-column>
                    <el-table-column prop="brandName" label="品牌名称" width="200" sortable>
                    </el-table-column>
                    <el-table-column prop="vipCardNum" label="会员卡号"  sortable>
                    </el-table-column>
                    <el-table-column prop="custName" label="顾客姓名"  sortable>
                    </el-table-column>
                    <el-table-column prop="tel" label="手机号码"  sortable>
                    </el-table-column>
                    <el-table-column prop="ID" label="身份证号"  sortable>
                    </el-table-column>
                    <el-table-column prop="store" label="所属门店"  sortable>
                    </el-table-column>
                    <el-table-column prop="sendDate" label="发卡日期"  sortable>
                    </el-table-column>
                    <el-table-column prop="state" label="卡状态" width="200" sortable :formatter="formatState">
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
