$(function () {
    bootstrap(jQuery, top.learun);
})

var lr;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            lr = learun;
            gridtable();
            initChart();
        }
    };
    page.init();
}
function initChart() {
    // 基于准备好的dom，初始化echarts实例
    var pieChart = echarts.init(document.getElementById('piecontainer'));
    // 指定图表的配置项和数据
    var pieoption = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            bottom: 'bottom',
            //data: ['亚行资金', '市级配套费 ', '区级配套费', '自筹项目 ', '其他 ']
            data: ['亚行资金', '市级配套费', '区级配套费', '自筹项目', '其他']
        },
        series: [
            {
                name: '用电占比',
                type: 'pie',
                radius: '75%',
                center: ['50%', '50%'],
                label : {
                    normal : {
                        formatter: '{b}:{c}: ({d}%)',
                        textStyle : {
                            fontWeight : 'normal',
                            fontSize : 12,
                            color:'#333'
                        }
                    }
                },
                data: [
                    { value: 10, name: '亚行资金' },
                    { value: 10, name: '市级配套费' },
                    { value: 10, name: '区级配套费' },
                    { value: 10, name: '自筹项目' },
                    { value: 10, name: '其他' },
                    //{ value: 10, name: '办公大楼' },
                    //{ value: 40, name: 'C网基站' }
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
        ,
        color:['#df4d4b','#d78d2f','#52bbc8','rgb(224,134,105)','#8dd5b4']
    };
    // 使用刚指定的配置项和数据显示图表。
    pieChart.setOption(pieoption);


    // 基于准备好的dom，初始化echarts实例
    var lineChart = echarts.init(document.getElementById('linecontainer'));
    // 指定图表的配置项和数据
    var lineoption = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            bottom: 'bottom',
            data: ['预算', '实际']
        },
        grid: {
            bottom: '8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '预算',
                type: 'line',
                stack: '用电量',
                itemStyle: {
                    normal: {
                        color: "#fc0d1b",
                        lineStyle: {
                            color: "#fc0d1b"
                        }
                    }
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 23.3, 18.3, 13.9, 9.6, 1]
            },
            {
                name: '实际',
                type: 'line',
                stack: '用电量',
                itemStyle: {
                    normal:{
                        color:'#344858',
                        lineStyle:{
                            color:'#344858'
                        }
                    }

                },
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    lineChart.setOption(lineoption);

    window.onresize = function (e) {
        pieChart.resize(e);
        lineChart.resize(e);
    }

    $(".lr-desktop-panel").mCustomScrollbar({ // 优化滚动条
        theme: "minimal-dark"
    });
}
function gridtable() {
    $("#gridtable").jfGrid(
        {
            height: 196,
            //width: $(window).width()*0.65,
            url: top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/GetList',
            headData: [
                {
                    label: "设备包", name: "Package", width: 90, align: 'left',
                    formatter: function (cellvalue, options, rowObject) {
                        return "<a  class='btn btn-primary btn-sm'  href='javascript:void(0)'  onclick=aclick('" + options.Id + "')>" + cellvalue + "</a>";
                    }
                },
                { label: "合同名称", name: "Name", width: 220, align: 'left' },
                { label: "合同金额（元）", name: "Amount", width: 150, align: 'left' },
                { label: "已付金额（元）", name: "PaidAmount", width: 150, align: 'left' },
                { label: "未付金额（元）", name: "UnPaidAmount", width: 150, align: 'left' },
                {
                    label: "支付比例", name: "PayProportion", width: 150, align: 'left',
                    formatter: function (cellvalue, options, rowObject) {
                        var paid = parseFloat(options.PaidAmount) / parseFloat(options.Amount) * 100;
                        var per = paid.toFixed(2);
                        //return per + "%";
                        return '<div class="progress">'
                            + '<div class="progress-bar" role="progressbar" aria-valuenow="' + per + '"'
                            + ' aria-valuemin="0" aria-valuemax="100" style="width: ' + per + '%;">'
                            + ' <span style = "color: black">' + per + '% 完成</span>'
                            + '</div>'
                            + '</div>'
                    }
                },
                { label: "供应商", name: "Supplier", width: 150, align: 'left' },
                { label: "合同签订日期", name: "SigningDate", width: 150, align: 'left' },
                { label: "合同状态", name: "HTState", width: 150, align: 'left' },
            ],

            //sortname: 'CreateDate',
            //styleUI: 'Bootstrap',
            //viewrecord: true,
            //rowNum: 30,
            //caption: "亚行项目",
            //rowList: [10, 20, 30],
            //pager: '#pager10',
            //viewrecords: true,
            //sortorder: "asc",
            //multiselect: false,
            //caption: "Invoice Header",
            onSelectRow: function (rowData) {
                //var rowData = $("#gridtable").jfGridGet("rowdata");
                var queryJson = JSON.stringify({
                    keyword: rowData.Package
                });
                // if (ids == null) {
                //   ids = 0;
                //    if ($("#gridtable2").jfGrid('getGridParam',
                //        'records') > 0) {
                //        $("#gridtable2").jfGrid(
                //            'setGridParam',
                //            {
                //                url: "/TN_XM/TN_XM/GetGridJson3?queryJson="
                //                    + queryJson,
                //                page : 1
                //            });
                //        $("#gridtable2").jfGrid('setCaption',
                //            "亚行项目: " + ids).trigger(
                //            'reloadGrid');
                //    }
                //} else {
                $("#gridtable2").jfGridSet('reload', { queryJson });
                //$("#gridtable2").jfGrid('setCaption',
                //    "亚行项目: " + ids).trigger(
                //    'reloadGrid');

                //}
            },
            //  ondblClickRow: function (ids) {
            //      var rowData = $("#gridtable").getRowData(ids);
            //      var parentId = top.$.jfinetab.getCurrentTabId();
            //      top.$.jfinetab.addTabContent("/TN_XM/TN_HT_CG/Details?keyValue=" + rowData.Id, "采购合同管理--查看", parentId + "_edit", parentId);
            //}


        });
    var param = { keyword: '' } || {};
    $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });

    //$("#gridtable").jfGrid('navGrid', '#gridPager', {
    //    add: false,
    //    edit: false,
    //    del: false
    //});
    $("#gridtable2").jfGrid({
        height: 160,
        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/GetList',
        headData: [

            { label: "主项目名称", name: "BaseName", width: 150, align: 'left' },

            { label: "子项目名称", name: "BaseSubName", width: 150, align: 'left' },

            { label: "项目实施内容", name: "Name", width: 150, align: 'left' },

            { label: "所属公司", name: "CompanyName", width: 150, align: 'left' },

            { label: "项目状态", name: "ProjectState", width: 150, align: 'left' },

            { label: "亚行资金（元）", name: "TaxTotal", width: 100, align: 'left' },

            { label: "配套资金（元）", name: "Amount", width: 100, align: 'left' },

            {
                label: "项目总投资（元）", name: "sumAmount", width: 100, align: 'left',
                formatter: function (cellvalue, options, rowObject) {
                    var sum = parseFloat(options.Amount) + parseFloat(options.TaxTotal);
                    return sum.toFixed(2);
                }
            },

        ],
        //rowNum: 200,
        //rowList: [10, 20, 30],
        ////pager: '#gridPager2',
        //sortname: 'CreateDate',
        //rownumbers: true ,
        //viewrecords : true,
        //sortorder : "asc",
        //multiselect: false,
        //caption: "亚行项目",
        onSelectRow: function (rowData) {
            //var rowData = $("#gridtable2").getRowData(ids);
            //   var parentId = top.$.jfinetab.getCurrentTabId();
            //top.$.jfinetab.addTabContent("/TN_XM/TN_XM/Details2?keyValue=" + rowData.Id + "&Code=" + rowData.Code, "项目信息", parentId + "_edit", parentId);
            var par = {};
            var currentId = lr.frameTab.iframeId;
            par.F_ModuleId = currentId + "_edit";
            par.F_FullName = "项目信息";
            par.F_UrlAddress = '/Wizsen_NE_Project/ProjectDatails/Detail?keyValue=' + rowData.Id + '&Code=' + rowData.Code;
            lr.frameTab.open(par);
        }
        //onRenderComplete: function () {
        //    var rowIds = $('#gridtable2').jqGrid('getDataIDs');
        //    var sum = 0
        //    for (var i = 0; i < rowIds.length; i++) {
        //        var row = $('#gridtable2').getRowData(rowIds[i]);
        //        sum += parseFloat(row.TaxTotal);
        //    }
        //    var id = $('#gridtable').jqGrid('getGridParam', 'selrow');
        //    if (id != undefined && id != null && id != "") {
        //         var ht = sum.toFixed(2);
        //         $("#gridtable").setCell(id, 'Amount', ht);
        //    }else{
        //        return false;
        //    }
        //}

    })
    var param2 = { keyword: '' } || {};
    $('#gridtable2').jfGridSet('reload', { queryJson: JSON.stringify(param2) });
    //$("#ms1").click(function() {
    //    var s;
    //    s = $("#list10_d").jqGrid('getGridParam', 'selarrrow');
    //    alert(s);
    //});
    //$("#gridtable").setGridWidth($(window).width() - 6);
    //$("#gridtable2").setGridWidth($(window).width() - 6);
}
function aclick(keyValue) {
    var par = {};
    var currentId = lr.frameTab.iframeId;
    par.F_ModuleId = currentId + "_edit";
    par.F_FullName = "采购合同";
    par.F_UrlAddress = '/Wizsen_NE_Project/PactPurchase/Detail?keyValue=' + keyValue;
    lr.frameTab.open(par);
    //var parentId = top.$.jfinetab.getCurrentTabId();
    //top.$.jfinetab.addTabContent("/TN_XM/TN_HT_CG/Details?keyValue=" + keyValue, "采购合同管理--查看", parentId + "_edit", parentId);
}