<template>
    <section>
        <el-col style="text-align:right">
            <el-button type="primary">保存</el-button>
            <el-button type="primary">刷新</el-button>
        </el-col>
        <el-col>
            <el-form :inline="true" :model="formRule" class="demo-form-inline" label-width="120px" :label-position="left">
                <el-col :span="12" style="height:59px">
                    <el-form-item label="品牌" >
                        <el-select v-model="formRule.Brand">
                            <el-option label="品牌1" value="品牌1"></el-option>
                            <el-option label="品牌2" value="品牌2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12"  style="height:59px">
                    <el-form-item label="会员等级">
                        <el-select v-model="formRule.Level">
                            <el-option label="等级1" value="等级1"></el-option>
                            <el-option label="等级2" value="等级2"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="卡号前缀">
                        <el-input v-model="formRule.cardPre"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="卡号长度">
                        <el-input v-model="formRule.cardLength"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="卡数量">
                        <el-input v-model="formRule.cardLength"></el-input>
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="卡有效期" >
                        <el-date-picker v-model="formRule.cardVaild"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="是否立即启用">
                        <el-radio-group v-model="formRule.isUse">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                    </el-form-item>
                </el-col>
            </el-form>

        </el-col>
    </section>
</template>
<script>
    export default{
        data: function () {
            return {
                formRule:{}
            }
        }
    }

</script>

<style scoped>
    .el-form-item__content {
        line-height: 0px;
        position: relative;
        font-size: 14px;
    }
</style>
