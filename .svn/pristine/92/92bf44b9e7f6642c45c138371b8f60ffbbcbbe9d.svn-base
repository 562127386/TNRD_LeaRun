var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime; 
    var Name;
    var Package;
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
                Name = $('#Name').val();
                Package = $('#Package').val();
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
                url: top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/GetPageList',
                headData: [
                    { label: '主键', name: 'Id', width: 200, align: "left" },
                    { label: 'BindId', name: 'BindId', width: 200, align: "left" },
                    { label: '合同编码', name: 'Code', width: 200, align: "left" },
                    { label: '合同名称', name: 'Name', width: 200, align: "left" },
                    { label: '合同类型', name: 'Type', width: 200, align: "left" },
                    { label: '采购组织', name: 'Organiz', width: 200, align: "left" },
                    { label: '设备包', name: 'Package', width: 200, align: "left" },
                    { label: '计划终止日期', name: 'EndTime', width: 200, align: "left" },
                    { label: '供应商', name: 'Supplier', width: 200, align: "left" },
                    { label: '币种', name: 'Currency', width: 200, align: "left" },
                    { label: '合同金额', name: 'Amount', width: 200, align: "left" },
                    { label: '已付金额', name: 'PaidAmount', width: 200, align: "left" },
                    { label: '未付金额', name: 'UnPaidAmount', width: 200, align: "left" },
                    { label: '付款类型', name: 'PayType', width: 200, align: "left" },
                    { label: '资金来源', name: 'FundSource', width: 200, align: "left" },
                    { label: '合同签订日期', name: 'SigningDate', width: 200, align: "left" },
                    { label: '部门', name: 'Department', width: 200, align: "left" },
                    { label: '人员', name: 'Personnel', width: 200, align: "left" },
                    { label: '交货地点', name: 'Place', width: 200, align: "left" },
                    { label: '预付款', name: 'AdvancePay', width: 200, align: "left" },
                    { label: '预付款限额 ', name: 'Limit', width: 200, align: "left" },
                    { label: '合同状态', name: 'State', width: 200, align: "left" },
                    { label: '创建时间', name: 'CreateDate', width: 200, align: "left" },
                    { label: '创建人ID', name: 'CreateUserId', width: 200, align: "left" },
                    { label: '创建人姓名', name: 'CreateUserName', width: 200, align: "left" },
                    { label: '更新时间', name: 'UpdateDate', width: 200, align: "left" },
                    { label: '更新人ID', name: 'UpdateUserId', width: 200, align: "left" },
                    { label: '更新人姓名', name: 'UpdateUserName', width: 200, align: "left" },
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
            param.Name = Name;
            param.Package = Package;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    page.init();
}


