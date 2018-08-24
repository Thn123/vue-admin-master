<template>
    <div>
        <section>
            <el-col style="margin:20px 0">
                <el-form :inline="true" :model="formLine">
                    <el-form-item>
                        <el-input placeholder="起始卡号" v-model="formLine.cardNum"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input placeholder="结束卡号" v-model="formLine.cardNum"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.brandName" placeholder="磁条储值卡">
                            <el-option label="名称一" value="shanghai"></el-option>
                            <el-option label="名称二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.storeName" placeholder="请选择状态">
                            <el-option label="名称一" value="shanghai"></el-option>
                            <el-option label="名称二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="formLine.sendDate" placeholder="领卡门店">
                            <el-option label="日期一" value="shanghai"></el-option>
                            <el-option label="日期二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item style="float:right">
                        <el-button type="primary">查询</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col>
                <el-table :data="users"  border stripe highlight-current-row v-loading="loading" style="width: 100%;">
                    <el-table-column  width="60" label="id" prop="id">
                    </el-table-column>
                    <el-table-column prop="Cardid" label="卡号"  sortable>
                    </el-table-column>
                    <el-table-column prop="balance" label="余额"  sortable>
                    </el-table-column>
                    <el-table-column prop="cardType" label="卡类型"  sortable>
                    </el-table-column>
                    <el-table-column prop="cardIssuer" label="发卡机构"  sortable>
                    </el-table-column>
                    <el-table-column prop="receiveCardStore" label="领卡门店"  sortable>
                    </el-table-column>
                    <el-table-column prop="ExpireTime" label="过期时间"  sortable>
                    </el-table-column>
                    <el-table-column prop="CashContent" label="现金含量"  sortable>
                    </el-table-column>
                    <el-table-column prop="StoredValueState" label="状态" sortable :formatter="formatState">
                    </el-table-column>
                    <el-table-column label="操作" sortable width="200">
                        <template scope="scope">
                            <el-button type="text" @click="handleDetail(scope.$index,scope.row)">明细</el-button>
                            <el-button type="text"  @click="handleRecord(scope.$index,scope.row)">操作日志</el-button>
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
            <!-- 明细-->
            <el-dialog title="卡余额变动历史" :visible.sync="handleDetailVisible" :close-on-click-modal="false" class="handleDetailDialog">
                <el-table   border stripe highlight-current-row v-loading="loading" style="width: 100%">
                    <el-table-column label="变动类型" sortable>
                    </el-table-column>
                    <el-table-column label="变动金额" sortable>
                    </el-table-column>
                    <el-table-column label="关联订单" sortable>
                    </el-table-column>
                    <el-table-column label="可用金额" sortable>
                    </el-table-column>
                    <el-table-column label="变动时间" sortable>
                    </el-table-column>
                    <el-table-column label="变动类型" sortable>
                    </el-table-column>
                    <el-table-column label="过期时间" sortable>
                    </el-table-column>
                    <el-table-column label="状态" sortable>
                    </el-table-column>
                    <el-table-column label="备注" sortable>
                    </el-table-column>
                </el-table>
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
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="handleDetailVisible=false">取消</el-button>
                </div>
            </el-dialog>

            <!-- 操作日志-->
            <el-dialog title="操作日志" :visible.sync="handleRecordVisible" :close-on-click-modal="false">
                <el-table   border stripe highlight-current-row v-loading="loading" style="width: 100%">
                    <el-table-column label="操作类型" sortable>
                    </el-table-column>
                    <el-table-column label="操作摘要" sortable>
                    </el-table-column>
                    <el-table-column label="操作人" sortable>
                    </el-table-column>
                    <el-table-column label="操作时间" sortable>
                    </el-table-column>
                    <el-table-column label="备注" sortable>
                    </el-table-column>
                </el-table>
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
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="handleRecordVisible=false">取消</el-button>
                </div>
            </el-dialog>
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
                users:[],
				loading:false,
                handleDetailVisible:false,
                handleRecordVisible:false

			}
		},
		methods: {

            formatState: function (row, column) {
                return row.state == 1 ? '启用' :'停用'
            },
			//获取用户列表
			getUser:function(){
				this.loading =true;
				getUserList2().then((res) => {
					this.users = res.data.users;
					this.loading = false;
				});
			},
            handleDetail:function(index,row){
                this.handleDetailVisible=true;
                this.editForm = Object.assign({}, row);
            },
            handleRecord:function(index,row){
                this.handleRecordVisible=true;
                this.editForm = Object.assign({}, row);
            }
		},
		mounted(){
			this.getUser();
		}
	};
</script>

<style scoped>

</style>
<style>
    .handleDetailDialog .el-dialog--small {
        width:60%!important;
    }
</style>

