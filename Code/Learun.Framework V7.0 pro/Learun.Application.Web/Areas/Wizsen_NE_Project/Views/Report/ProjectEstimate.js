var bootstrap = function ($, learun) {
    "use strict";

    var page = {
        init: function () {
            page.initGrid();
            page.initChart();
            page.bind();
        },
        bind: function () {
            // 刷新
            $('#lr-replace').on('click', function () {
                location.reload();
            });
            //打印
            $('#lr-print').on('click', function () {
                $("#gridtable").jqprintTable({ title: '项目概算明细表' });
            });
            //导出
            $('#lr-export').on('click', function () {
                learun.download({
                    method: "POST",
                    url: '/Utility/ExportExcel',
                    param: {
                        fileName: "导出项目报表",
                        columnJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').headData),
                        dataJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').rowdatas)
                    }
                });
            });
            //新增报表1
            $('#lr-Report1').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "新增报表1";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/Report1';
                learun.frameTab.open(par);
            });
            //新增报表2
            $('#lr-Report2').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "新增报表2";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/Report2';
                learun.frameTab.open(par);
            });
            //新增报表3
            $('#lr-Report3').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "新增报表3";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/Report3';
                learun.frameTab.open(par);
            });
            //新增报表4
            $('#lr-Report4').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "新增报表4";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/Report4';
                learun.frameTab.open(par);
            });
        },
        initGrid: function () {
            $("#gridtable").height($(window).height() - 143);
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDetailsEstimate/GetPageList',
                headData: [
                    { label: '项目编码', name: 'Code', width: 200, align: "left" },
                    { label: '项目名称', name: 'Name', width: 200, align: "left" },
                    { label: '立项时间', name: 'ProjectDate', width: 200, align: "left" },
                    { label: '数据来源', name: 'DataSource', width: 200, align: "left" },
                    { label: '文号', name: 'Number', width: 200, align: "left" },
                    { label: '下达时间', name: 'GiveTime', width: 200, align: "left" },
                    { label: '热源', name: 'heat', width: 200, align: "left" },
                    { label: '一次网', name: 'ANet', width: 200, align: "left" },
                    { label: '换热站', name: 'HotNet', width: 200, align: "left" },
                    { label: '二次网', name: 'TwoNet', width: 200, align: "left" },
                    { label: '交易服务费', name: 'DealFee', width: 200, align: "left" },
                    { label: '招标代理费', name: 'TenderFee', width: 200, align: "left" },
                    { label: '造价咨询费', name: 'CostFee', width: 200, align: "left" },
                    { label: '施工图审查费', name: 'WorkMapFee', width: 200, align: "left" },
                    { label: '其他费（前期费）', name: 'AgoOtherFee', width: 200, align: "left" },
                    { label: '勘察费', name: 'ProspectFee', width: 200, align: "left" },
                    { label: '设计费', name: 'DesignFee', width: 200, align: "left" },
                    { label: '监理费', name: 'ControlFee', width: 200, align: "left" },
                    { label: '环评费', name: 'EnvironmentFee', width: 200, align: "left" },
                    { label: '安评费', name: 'SafetyFee', width: 200, align: "left" },
                    { label: '掘路费', name: 'DiggingFee', width: 200, align: "left" },
                    { label: '招待费', name: 'ServeFee', width: 200, align: "left" },
                    { label: '管理费', name: 'Managefee', width: 200, align: "left" },
                    { label: '其他费用', name: 'OtherFee', width: 200, align: "left" },
                    { label: '总投资', name: 'AmountFee', width: 200, align: "left" },
                ],
                mainId: 'Id',
                isPage: true,
                reloadSelected: true
            });

            page.search();
        },
        initChart: function () {
            loadmain();
            loadmain1();
            function loadmain() {
                var myChart = echarts.init(document.getElementById('main'));
                var option = {
                    title: {
                        text: '概算数据分析图',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['建安工程费', '前期费', '勘察费', '设计费', '监理费', '环评费', '安评费', '掘路费', '总管理费', '其他费用']
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 335, name: '建安工程费' },
                                { value: 310, name: '前期费' },
                                { value: 234, name: '勘察费' },
                                { value: 135, name: '设计费' },
                                { value: 335, name: '监理费' },
                                { value: 310, name: '环评费' },
                                { value: 234, name: '安评费' },
                                { value: 135, name: '掘路费' },
                                { value: 335, name: '总管理费' },
                                { value: 310, name: '其他费用' }
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                };
                myChart.setOption(option);
            }
            function loadmain1() {
                var myChart = echarts.init(document.getElementById('main1'));
                var option = {
                    title: {
                        text: '项目投资趋势图',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '城管局',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210, 200]
                        },
                        {
                            name: '财政局',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310, 314]
                        }
                    ]
                };
                myChart.setOption(option);
            }
        },
        search: function (param) {
            param = param || {};
            $('#gridtable').jfGridSet('reload', param);
        }
    };
    page.init();
}


