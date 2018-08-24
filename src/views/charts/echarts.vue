<template>
    <section class="chart-container"  v-loading="loading">
        <el-row>
            <el-col :span="24">
                <div>
                    <el-date-picker
                            v-model="value6"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <div class="panel panel-default">
                    <div class="panel-heading">关键指标</div>
                    <div class="panel-body">
                        <el-row>
                            <el-col :span="5">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="colBox-title">销售总额（MTD)</div>
                                        <div class="colBox-data t_c">{{saleTotal}}</div>
                                    </div>
                                    <div class="panel-footer">
                                        <div>
                                            <span><b>同比:</b>{{saleMoM}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>环比:</b>{{saleYoY}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>YTD:</b>{{saleYTD}}</span>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="colBox-title">顾客总额（MTD)</div>
                                        <div class="colBox-data t_c">{{custTotal}}</div>
                                    </div>
                                    <div class="panel-footer">
                                        <div>
                                            <span><b>同比:</b>{{custMoM}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>环比:</b>{{custYoY}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>YTD:</b>{{custYTD}}</span>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="colBox-title">新增顾客（MTD)</div>
                                        <div class="colBox-data t_c">{{AddcustTotal}}</div>
                                    </div>
                                    <div class="panel-footer">
                                        <div>
                                            <span><b>同比:</b>{{AddcustMoM}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>环比:</b>{{AddcustYoY}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>YTD:</b>{{AddcustYTD}}</span>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="colBox-title">平均客单价（MTD)</div>
                                        <div class="colBox-data t_c">{{nuitPriceTotal}}</div>
                                    </div>
                                    <div class="panel-footer">
                                        <div>
                                            <span><b>同比:</b>{{nuitPriceMoM}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>环比:</b>{{nuitPriceeYoY}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>YID:</b>{{nuitPriceYTD}}</span>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <div class="colBox-title">平均客单量（MTD)</div>
                                        <div class="colBox-data t_c"> {{nuitPCSTotal}}</div>
                                    </div>
                                    <div class="panel-footer">
                                        <div>
                                            <span><b>同比:</b>{{nuitPCSceMoM}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>环比:</b>{{nuitPCSceeYoY}}</span>
                                            <i class="glyphicon glyphicon-arrow-down fr"></i>
                                        </div>
                                        <div>
                                            <span><b>YID:</b>{{nuitPCSceYTD}}</span>
                                        </div>
                                    </div>
                                </div>
                            </el-col>
                        </el-row>

                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-signal"></span>
                        <span>顾客数量和销售按地域统计</span>
                    </div>
                    <div class="panel-body">
                        <div id="chartMap" style="width:100%; height:400px;"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-signal"></span>
                        <span>销售总额按渠道统计</span>
                    </div>
                    <div class="panel-body">
                        <div id="chartArea" style="width:100%; height:400px;"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-signal"></span>
                        <span>平均客单价</span>
                    </div>
                    <div class="panel-body">
                        <div id="chartLine" style="width:100%; height:400px;"></div>
                    </div>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-signal"></span>
                        <span>平均客件数</span>
                    </div>
                    <div class="panel-body">
                        <div id="chartLine2" style="width:100%; height:400px;"></div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
</template>

<script type="es6">
    import echarts from 'echarts'
    import 'echarts/map/js/china.js'

    export default {
        data() {
        return {
            chartMap: null,
            chartArea: null,
            chartLine: null,
            chartLine2: null,
            loading:false,
            value6:'',
            saleTotal:"￥1,801k",
            saleMoM:'-55%',
            saleYoY:"--16%",
            saleYTD:'￥1,801k(-11%)',
            custTotal:"￥1,801k",
            custMoM:'-55%',
            custeYoY:"--16%",
            custYTD:'￥1,801k(-11%)',
            AddcustTotal:"￥1,801k",
            AddcustMoM:'-55%',
            AddcusteYoY:"--16%",
            AddcustYTD:'￥1,801k(-11%)',
            nuitPriceTotal:"￥1,801k",
            nuitPriceMoM:'-55%',
            nuitPriceeYoY:"--16%",
            nuitPriceYTD:'￥1,801k(-11%)',
            nuitPCSTotal:"￥1,801k",
            nuitPCSceMoM:'-55%',
            nuitPCSceeYoY:"--16%",
            nuitPCSceYTD:'￥1,801k(-11%)'
        }
    },

    methods:{
        drawMapChart(){
            this.chartMap = echarts.init(document.getElementById('chartMap'));
            this.chartMap.setOption({
                        title : {
//            text: '顾客数量和销售按地域统计',
//            x:'center'
                        },
                        tooltip : {
                            trigger: 'item'
                        },
                        color:['#3499D9','#CCCCCC'],//设置图例中图标的颜色
                        legend: {
                            orient: 'vertical',
                            x:'left',
                            textStyle: {    //图例文字的样式
                                color: '#999',
                                fontSize: 12
                            },
                            data:['顾客总量','销售总量']
                        },
                        dataRange:{
                            show:true,
                            min: 0,
                            max: 30214,
                            x: 'left',
                            y: 'bottom',
                            text:['高','低'],           // 文本，默认为数值文本
                            calculable : true,
//          splitNumber:0//不可滑动；
                            color:['#3A9DCB','#58B4DB','#A6E2FB','#A6E2FB']
                        },
                        toolbox:{
                            show:true,
                            orient : 'vertical',
                            x: 'right',
                            y: 'center',
                            feature : {
                                mark : {show: true},
                                dataView : {show: true, readOnly: false},
                                restore : {show: true},
                                saveAsImage : {show: true}
                            }
                        },
                        roamController:{
                            show: true,
                            x: 'right',
                            mapTypeControl: {
                                'china': true
                            }
                        },
                        series : [
                            {
                                name: '顾客总量',
                                type: 'map',
                                mapType: 'china',
                                roam: false,
                                itemStyle: {
                                    normal: {
                                        areaStyle:{color:'green'},
                                        borderWidth: .5,//区域边框宽度
                                        borderColor: '#CECECE',//区域边框颜色
                                        areaColor:"#EDEDED"//区域颜色
                                    },
                                    emphasis: {//鼠标进入
                                        borderWidth: .5,
                                        borderColor: '#4b0082'
//                        areaColor:"blue"
                                    }
                                },
                                label: {
                                    normal: {
                                        show: true,//显示省份标签
                                        textStyle:{color:"white",fontSize:14}//省份标签字体颜色
                                    },
                                    emphasis: {//对应的鼠标悬浮效果
                                        show: true,
                                        textStyle:{color:"#ddd"}
                                    }
                                },
                                data:[
                                    {name: '北京',value: Math.round(Math.random()*1000),selected:true},
                                    {name: '天津',value: Math.round(Math.random()*1000)},
                                    {name: '上海',value: Math.round(Math.random()*1000)},
                                    {name: '重庆',value: Math.round(Math.random()*1000)},
                                    {name: '河北',value: Math.round(Math.random()*1000)},
                                    {name: '河南',value: Math.round(Math.random()*1000)},
                                    {name: '云南',value: Math.round(Math.random()*1000)},
                                    {name: '辽宁',value: Math.round(Math.random()*1000)},
                                    {name: '黑龙江',value: Math.round(Math.random()*1000)},
                                    {name: '湖南',value: Math.round(Math.random()*1000)},
                                    {name: '安徽',value: Math.round(Math.random()*1000)},
                                    {name: '山东',value: Math.round(Math.random()*1000)},
                                    {name: '新疆',value: Math.round(Math.random()*1000)},
                                    {name: '江苏',value: Math.round(Math.random()*1000)},
                                    {name: '浙江',value: Math.round(Math.random()*1000)},
                                    {name: '江西',value: Math.round(Math.random()*1000)},
                                    {name: '湖北',value: Math.round(Math.random()*1000)},
                                    {name: '广西',value: Math.round(Math.random()*1000)},
                                    {name: '甘肃',value: Math.round(Math.random()*1000)},
                                    {name: '山西',value: Math.round(Math.random()*1000)},
                                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                                    {name: '陕西',value: Math.round(Math.random()*1000)},
                                    {name: '吉林',value: Math.round(Math.random()*1000)},
                                    {name: '福建',value: Math.round(Math.random()*1000)},
                                    {name: '贵州',value: Math.round(Math.random()*1000)},
                                    {name: '广东',value: Math.round(Math.random()*1000)},
                                    {name: '青海',value: Math.round(Math.random()*1000)},
                                    {name: '西藏',value: Math.round(Math.random()*1000)},
                                    {name: '四川',value: Math.round(Math.random()*1000)},
                                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                                    {name: '海南',value: Math.round(Math.random()*1000)},
                                    {name: '台湾',value: Math.round(Math.random()*1000)},
                                    {name: '香港',value: Math.round(Math.random()*1000)},
                                    {name: '澳门',value: Math.round(Math.random()*1000)}
                                ]
                            },
                            {
                                name: '销售总量',
                                type: 'map',
                                mapType: 'china',
                                itemStyle:{
                                    normal:{label:{show:true}},
                                    emphasis:{label:{show:true}}
                                },
                                data:[
                                    {name: '北京',value: Math.round(Math.random()*1000)},
                                    {name: '天津',value: Math.round(Math.random()*1000)},
                                    {name: '上海',value: Math.round(Math.random()*1000)},
                                    {name: '重庆',value: Math.round(Math.random()*1000)},
                                    {name: '河北',value: Math.round(Math.random()*1000)},
                                    {name: '安徽',value: Math.round(Math.random()*1000)},
                                    {name: '新疆',value: Math.round(Math.random()*1000)},
                                    {name: '浙江',value: Math.round(Math.random()*1000)},
                                    {name: '江西',value: Math.round(Math.random()*1000)},
                                    {name: '山西',value: Math.round(Math.random()*1000)},
                                    {name: '内蒙古',value: Math.round(Math.random()*1000)},
                                    {name: '吉林',value: Math.round(Math.random()*1000)},
                                    {name: '福建',value: Math.round(Math.random()*1000)},
                                    {name: '广东',value: Math.round(Math.random()*1000)},
                                    {name: '西藏',value: Math.round(Math.random()*1000)},
                                    {name: '四川',value: Math.round(Math.random()*1000)},
                                    {name: '宁夏',value: Math.round(Math.random()*1000)},
                                    {name: '香港',value: Math.round(Math.random()*1000)},
                                    {name: '澳门',value: Math.round(Math.random()*1000)}
                                ]
                            }
                        ]
            });
        },
        drawAreaChart() {
            this.chartArea = echarts.init(document.getElementById('chartArea'));
            this.chartArea.setOption({
                title : {
//            text: '某楼盘销售情况',
//            subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['官网','京东','天猫','线下']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'官网',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default',color:"yellow"}}},
                        data:[10, 12, 21, 54, 260, 830, 710]
                    },
                    {
                        name:'京东',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default',color:"blue"}}},
                        data:[30, 182, 434, 791, 390, 30, 10]
                    },
                    {
                        name:'天猫',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default',color:"green"}}},
                        data:[1320, 1132, 601, 234, 120, 90, 20]
                    },
                    {
                        name:'线下',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default',color:"green"}}},
                        data:[1320, 112, 601, 234, 120, 90, 20]
                    }
                ]
            });
        },
        drawLineChart(){
            this.chartLine = echarts.init(document.getElementById('chartLine'));
            this.chartLine.setOption({
                title : {
//            text: '某楼盘销售情况',
//            subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['官网','京东','天猫','线下']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis:[
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['2016/11','2016/12','2017/1','2017/2','2017/3','2017/4','2017/5']
                    }
                ],
                yAxis :[
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'官网',
                        type:'line',
                        //smooth:true,
                        //itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[10, 12, 21, 54, 260, 830, 710]
                    },
                    {
                        name:'京东',
                        type:'line',
                        //smooth:true,
                        //itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[30, 182, 434, 791, 390, 30, 10]
                    },
                    {
                        name:'天猫',
                        type:'line',
                        //smooth:true,
                        //itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[1320, 1132, 601, 234, 120, 90, 20]
                    },
                    {
                        name:'线下',
                        type:'line',
                        //smooth:true,
                        //itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[1320, 112, 601, 234, 120, 90, 20]
                    }
                ]
            });
        },
        drawLine2Chart() {
            this.chartLine2 = echarts.init(document.getElementById('chartLine2'));
            this.chartLine2.setOption({
                title : {
//            text: '某楼盘销售情况',
//            subtext: '纯属虚构'
                },
                tooltip : {
                    trigger: 'axis'
                },
                legend: {
                    data:['官网','京东','天猫','线下']
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : true,
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'官网',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[10, 12, 21, 54, 260, 830, 710]
                    },
                    {
                        name:'京东',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[30, 182, 434, 791, 390, 30, 10]
                    },
                    {
                        name:'天猫',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[1320, 1132, 601, 234, 120, 90, 20]
                    },
                    {
                        name:'线下',
                        type:'line',
                        smooth:true,
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data:[1320, 112, 601, 234, 120, 90, 20]
                    }
                ]
            });
        },
        drawCharts() {
            this.drawMapChart();
            this.drawAreaChart();
            this.drawLineChart();
            this.drawLine2Chart()
        }
    },
    mounted:function (){
        this.drawCharts();
      //setTimeout(function(){
      //    this.drawCharts();
      //},0);
    },
    updated:function () {
        this.drawCharts()
    }
 }
</script>

<style scoped>
    .chart-container {
        width: 100%;
        float: left;
    }
    .el-col {
        padding: 30px 20px;
    }
    .el-col-5{
        width: 20%;
    }
    .fr{
        float:right;
    }
    .t_c{
        text-align:center;
    }
    .colBox-data{
        font-size:25px;
        padding:22px 0;
    }
    .panel{
        margin-bottom: 20px;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
        box-shadow: 0 1px 1px rgba(0,0,0,.05);
    }
    .panel-default>.panel-heading {
        color: #333;
        background-color: #f5f5f5;
        border-color: #ddd;
    }
    .panel-heading {
        padding: 10px 15px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .panel-body {
        padding:15px;
    }
    .panel-default {
        border-color: #ddd;
    }
    .panel-footer {
        padding: 10px 15px;
        background-color: #f5f5f5;
        border-top: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
</style>
