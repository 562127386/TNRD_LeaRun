var bootstrap = function ($, learun) {
    "use strict";
    var B_startTime;
    var B_endTime;
    var Name;
    var F_startTime;
    var F_endTime;
    var IssuedYear;
    var page = {
        init: function () {
            page.initGrid();
            page.bind();
        },
        bind: function () {
            laydate.render({
                elem: '#IssuedYear'
                , type: 'year'
            });
            // 时间搜索框 
            $('#BureauDate').lrdate({
                dfdata: [
                    //{ name: '今天', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00') }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近1年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -1) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近3年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -3) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近10年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -10) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } }
                ],
                // 月 
                mShow: false,
                premShow: false,
                // 季度 
                jShow: false,
                prejShow: false,
                // 年 
                ysShow: false,
                yxShow: false,
                preyShow: true,
                yShow: true,
                // 默认 
                dfvalue: '0',
                selectfn: function (begin, end) {
                    B_startTime = begin;
                    B_endTime = end;
                    //page.search();
                }
            });

            // 时间搜索框 
            $('#FiscalDate').lrdate({
                dfdata: [
                    //{ name: '今天', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00') }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近1年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -1) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近3年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -3) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近10年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -10) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } }
                ],
                // 月 
                mShow: false,
                premShow: false,
                // 季度 
                jShow: false,
                prejShow: false,
                // 年 
                ysShow: false,
                yxShow: false,
                preyShow: true,
                yShow: true,
                // 默认 
                dfvalue: '0',
                selectfn: function (begin, end) {
                    F_startTime = begin;
                    F_endTime = end;
                    //page.search();
                }
            }); 
            // 查询
            $('#btn_Search').on('click', function () {
                Name = $('#Name').val();
                page.search();
            });
            // 刷新
            $('#lr-replace').on('click', function () {
                location.reload();
            });
            //打印
            $('#lr-print').on('click', function () {
                $("#gridtable").jqprintTable({ title: '商品采购明细表' });
            });
            //导出
            $('#lr-export').on('click', function () {
                learun.download({
                    method: "POST",
                    url: '/Utility/ExportExcel',
                    param: {
                        fileName: "导出采购报表",
                        columnJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').headData),
                        dataJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').rowdatas)
                    }
                });
            });
        },
        initGrid: function () {
            $("#gridtable").height($(window).height() - 143);
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectCapital/GetCapitalSum',
                headData: [
                    { label: '项目编码', name: 'Code', width: 200, align: "left" },
                    { label: '项目名称', name: 'Name', width: 200, align: "left" },
                    { label: '局已下达资金计划', name: 'BureauFunds', width: 200, align: "left" },
                    { label: '财政已下达资金', name: 'FiscalFunds', width: 200, align: "left" }
                ],
                mainId: 'Id',
                isPage: true,
                reloadSelected: true
            });

            page.search();
        },
        search: function (param) {
            param = param || {};
            param.B_StartTime = B_startTime;
            param.B_EndTime = B_endTime;
            param.F_StartTime = F_startTime;
            param.F_EndTime = F_endTime;
            param.Name = Name;
            param.IssuedYear = IssuedYear;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    page.init();
}


