var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime; 
    var pactName;
    var PayCompany;
    var page = {
        init: function () {
            page.initGrid();
            page.bind();
        },
        bind: function () {
            // 时间搜索框 
            $('#PayDate').lrdate({
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
                pactName = $("#pactName").val();
                PayCompany = $("#PayCompany").val();
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
            // 付款明细
            $('#lr_payDetail').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中合同数据操作')) {
                    learun.layerForm({
                        id: 'form',
                        title: '查看明细',
                        url: top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/Index?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            //国内配套合同台账
            //$('#lr-AssLedger').on('click', function () {
            //    var keyword = $("#txt_Keyword").val();
            //    var par = {};
            //    var currentId = learun.frameTab.iframeId;
            //    par.F_ModuleId = currentId + "_edit";
            //    par.F_FullName = "国内配套合同台账";
            //    par.F_UrlAddress = '/Wizsen_NE_Project/Report/AssortLedger?keyword=' + keyword;
            //    learun.frameTab.open(par);
            //});
        },
        initGrid: function () {
            $("#gridtable").height($(window).height() - 143);
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/GetPageList',
                width: $(window).height() - 800,
                headData: [
                    //{ label: 'Id', name: 'Id', width: 200, align: "left" },
                    //{ label: 'BindId', name: 'BindId', width: 200, align: "left" },
                    { label: '合同类型', name: 'PactType', width: 150, align: "left" },
                    { label: '合同编码', name: 'PactCode', width: 150, align: "left" },
                    { label: '合同名称', name: 'PactName', width: 300, align: "left" },
                    //{ label: '付款公司Id', name: 'PaymentCompanyId', width: 200, align: "left" },
                    { label: '乙方公司', name: 'PayCompany', width: 240, align: "left" },
                    { label: '入账金额', name: 'bookedAmount', width: 150, align: "left" },
                    { label: '付款金额', name: 'PayAmount', width: 150, align: "left" },
                    { label: '挂账金额', name: 'hangAmount', width: 150, align: "left" },
                    {
                        label: '付款日期', name: 'PayDate', width: 150, align: "left",
                        formatter: function (value, row, index) {
                            return $(this).formatterDate(value);
                        }
                    },
                    //{ label: '付款批次', name: 'PayNo', width: 200, align: "left" },
                    //{ label: '付款类型', name: 'PayType', width: 200, align: "left" },
                    { label: '凭证号', name: 'VoucherNo', width: 100, align: "left" },
                    //{ label: '付款金额类型', name: 'Type', width: 200, align: "left" },
                    //{ label: '创建日期', name: 'CreateDate', width: 200, align: "left" },
                    //{ label: '创建人Id', name: 'CreateUserId', width: 200, align: "left" },
                    //{ label: '创建人', name: 'CreateUserName', width: 200, align: "left" },
                    //{ label: '修改日期', name: 'UpdateDate', width: 200, align: "left" },
                    //{ label: '修改人Id', name: 'UpdateUserId', width: 200, align: "left" },
                    //{ label: '修改人', name: 'UpdateUserName', width: 200, align: "left" },
                    //{ label: 'Remark1', name: 'Remark1', width: 200, align: "left" },
                    //{ label: 'Remark2', name: 'Remark2', width: 200, align: "left" },
                    //{ label: 'Remark3', name: 'Remark3', width: 200, align: "left" },
                    //{ label: 'Remark4', name: 'Remark4', width: 200, align: "left" },
                    //{ label: 'Remark5', name: 'Remark5', width: 200, align: "left" },
                    //{ label: 'Remark6', name: 'Remark6', width: 200, align: "left" },
                    //{ label: 'Remark7', name: 'Remark7', width: 200, align: "left" },
                    //{ label: 'Remark8', name: 'Remark8', width: 200, align: "left" },
                    //{ label: 'Remark9', name: 'Remark9', width: 200, align: "left" },
                    //{ label: 'Remark10', name: 'Remark10', width: 200, align: "left" },
                ],
                mainId: 'Id',
                isPage: true
            });

            page.search();
        },
        search: function (param) {
            param = param || {};
            param = param || {};
            param.StartTime = startTime;
            param.EndTime = endTime;
            param.PactName = pactName;
            param.PayCompany = PayCompany;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    page.init();
}



