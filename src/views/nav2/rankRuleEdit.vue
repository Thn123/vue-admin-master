<template>
    <section>
        <el-col class="rule-header">
            <span>规则信息</span>
            <span style="float:right;margin-right:10px">
                 <el-button type="primary">保存</el-button>
                 <el-button type="text" >刷新</el-button>
            </span>
        </el-col>
        <el-col>
            <el-form :inline="true" :model="formRule" class="demo-form-inline" label-width="100px" :label-position="left">
                <el-col :span="12">
                    <el-form-item label="规则名称">
                        <el-input v-model="formRule.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="品牌" v-model="formRule.Brand">
                        <el-select>
                            <el-option label="品牌1"></el-option>
                            <el-option label="品牌2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="规则开始时间" >
                        <el-date-picker v-model="formRule.startTime"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="规则结束时间" v-model="formRule.endTime">
                        <el-date-picker v-model="formRule.endTime"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="限制周期">
                        <el-select  v-model="formRule.cycle">
                            <el-option label="周期1"></el-option>
                            <el-option label="周期2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="限制次数" >
                        <el-select v-model="formRule.num">
                            <el-option label="次数1"></el-option>
                            <el-option label="次数2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-col>
        <el-col>
            <span>定义流程</span>
        </el-col>
        <el-col></el-col>
    </section>
</template>
<script>
    export default{
        data: function () {
            return {
                formRule:{
                    name:'',
                    Brand:'',
                    startTime:'',
                    endTime:'',
                    cycle:'',
                    num:""

                }
            }
        },
        methods:{

        }
    }

</script>

<style scoped>
    .rule-header{
        margin:20px 0;
    }
</style>
