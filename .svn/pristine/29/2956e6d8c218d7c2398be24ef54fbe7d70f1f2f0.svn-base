var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime; 
    var Name;
    var ProjectName;
    var page = {
        init: function () {
            page.initGrid();
            page.bind();
        },
        bind: function () {
            // 时间搜索框 
            $('#datesearch').lrdate({
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
                    startTime = begin;
                    endTime = end;
                    //page.search();
                }
            });
            // 查询
            $('#btn_Search').on('click', function () {
                //var keyword = $('#txt_Keyword').val();
                ProjectName = $('#ProjectName').val();
                Name = $('#Name').val();
                page.search();
            });
            // 刷新
            $('#lr-replace').on('click', function () {
                location.reload();
            });
            //打印
            $('#lr-print').on('click', function () {
                $("#gridtable").jqprintTable({ title: '国内配套合同明细表' });
            });
            //导出
            $('#lr-export').on('click', function () {
                learun.download({
                    method: "POST",
                    url: '/Utility/ExportExcel',
                    param: {
                        fileName: "导出国内配套合同报表",
                        columnJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').headData),
                        dataJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').rowdatas)
                    }
                });
            });
            //国内配套合同台账
            $('#lr-AssLedger').on('click', function () {
                var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "国内配套合同台账";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/AssortLedger?keyword=' + keyword;
                learun.frameTab.open(par);
            });
        },
        initGrid: function () {
            $("#gridtable").height($(window).height() - 143);
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/PactAssort/GetPageList',
                headData: [
                    //{ label: '主键', name: 'Id', width: 200, align: "left" },
                    //{ label: 'BindId', name: 'BindId', width: 200, align: "left" },
                    //{ label: '项目编码', name: 'ProjectNo', width: 200, align: "left" },
                    { label: '项目名称', name: 'ProjectName', width: 200, align: "left" },
                    { label: '合同编码', name: 'Code', width: 200, align: "left" },
                    { label: '合同名称', name: 'Name', width: 200, align: "left" },
                    { label: '合同金额', name: 'Amount', width: 200, align: "left" },
                    { label: '付款金额', name: 'PaidAmount', width: 200, align: "left" },
                    { label: '结算金额', name: 'Settlement', width: 200, align: "left" },
                    { label: '合同类别', name: 'Type', width: 200, align: "left" },
                    { label: '未付金额', name: 'UnPaidAmount', width: 200, align: "left" },
                    { label: '支付方式', name: 'PayType', width: 200, align: "left" },
                    //{ label: '甲方编码', name: 'ACode', width: 200, align: "left" },
                    { label: '甲方名称', name: 'AName', width: 200, align: "left" },
                    //{ label: '乙方编码', name: 'BCode', width: 200, align: "left" },
                    { label: '乙方名称', name: 'BName', width: 200, align: "left" },
                    { label: '签订日期', name: 'SignDate', width: 200, align: "left" },
                    { label: '签订地点', name: 'SignPlace', width: 200, align: "left" },
                    { label: '资金来源', name: 'FundSource', width: 200, align: "left" },
                    //{ label: '合同文本', name: 'DEC', width: 200, align: "left" },
                    //{ label: '备注', name: 'Remark', width: 200, align: "left" },
                    //{ label: '创建日期', name: 'CreateDate', width: 200, align: "left" },
                    //{ label: '创建用户账户', name: 'CreateUserId', width: 200, align: "left" },
                    //{ label: '创建用户名称', name: 'CreateUserName', width: 200, align: "left" },
                    //{ label: '最后修改时间', name: 'UpdateDate', width: 200, align: "left" },
                    //{ label: '最后修改用户', name: 'UpdateUserId', width: 200, align: "left" },
                    //{ label: '最后修改用户名称', name: 'UpdateUserName', width: 200, align: "left" },
                ],
                mainId: 'Id',
                isPage: true,
                reloadSelected: true
            });

            page.search();
        },
        search: function (param) {
            param = param || {};
            param.StartTime = startTime;
            param.EndTime = endTime; 
            param.ProjectName = ProjectName;
            param.Name = Name;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    page.init();
}


