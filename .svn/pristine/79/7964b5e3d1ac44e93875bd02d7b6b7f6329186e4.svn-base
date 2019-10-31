var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime; 
    var page = {
        init: function () {
            page.initGrid();
            page.bind();
        },
        bind: function () {
            $("#contractType").lrDataItemSelect({
                code: 'PactType2',
                maxHeight: 230
            });
            // 时间搜索框 
            //$('#datesearch').lrdate({
            //    dfdata: [
            //        //{ name: '今天', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00') }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
            //        { name: '近1年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y' - 1) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
            //        { name: '近3年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -3) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
            //        { name: '近10年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -10) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } }
            //    ],
            //    // 月 
            //    mShow: false,
            //    premShow: false,
            //    // 季度 
            //    jShow: false,
            //    prejShow: false,
            //    // 年 
            //    ysShow: false,
            //    yxShow: false,
            //    preyShow: true,
            //    yShow: true,
            //    // 默认 
            //    dfvalue: '0',
            //    selectfn: function (begin, end) {
            //        startTime = begin;
            //        endTime = end;
            //        page.search();
            //    }
            //});
            // 查询
            $('#btn_Search').on('click', function () {
                var contractType = $("#contractType").lrselectGet(); 
                var pactName = $("#pactName").val();
                var supplier = $("#supplier").val();
                if (learun.isNullOrSpace(contractType) || learun.isNullOrSpace(pactName) || learun.isNullOrSpace(supplier)) {
                    var mainPar = {};
                    mainPar.pactName = pactName;
                    mainPar.supplier = supplier;
                    mainPar.contractType = contractType;
                    page.search(mainPar);
                    return;
                }
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
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/GetPageList',
                width: $(window).height() - 800,
                headData: [
                    //{ label: "ID", name: "Id", width: 100, align: "left" },
                    { label: "项目编码", name: "ProjectNo", width: 100, align: "left" },
                    { label: "项目名称", name: "ProjectName", width: 260, align: "left" },
                    { label: "合同类型", name: "contractType", width: 100, align: "left" },
                    { label: "合同编码", name: "Code", width: 100, align: "left" },
                    { label: "合同名称", name: "Name", width: 300, align: "left" },
                    { label: "乙方单位", name: "supplier", width: 200, align: "left" },
                    { label: "合同金额（元）", name: "Amount", width: 120, align: "left" },
                    { label: "已付金额（元）", name: "paySumAmount", width: 120, align: "left" },
                    {
                        label: "未付金额（元）", name: "UnPaidAmount", width: 120, align: "left",
                        formatter: function (value, row, index) {
                            return row.Amount - row.paySumAmount;
                        }
                    },
                    //{ label: "合同类型", name: "Type", width: 100, align: "left" },
                    //{ label: "结算金额", name: "Settlement", width: 100, align: "left" },
                    //{ label: "立项年份", name: "ProjectYear", width: 100, align: "left" },
                    //{ label: "预算金额", name: "BudgetAmount", width: 100, align: "left" },
                    //{ label: "入账金额", name: "BookedAmount", width: 100, align: "left" },
                    //{ label: "挂账金额", name: "HangAmount", width: 100, align: "left" },
                    //{ label: "转资", name: "TurnAmount", width: 100, align: "left" },
                    {
                        label: "付款比例（%）", name: "Ratio", width: 120, align: "left",
                        formatter: function (value, row, index) {
                            return (row.paySumAmount / row.Amount * 100).toFixed(2) + "%";
                        }
                    },
                    //{
                    //    label: "发生日期", name: "SignDate", width: 100, align: "left", formatter: function (value, row, index) {
                    //        return $(this).formatterDate(value);
                    //    }},
                    //{ label: "发生期间", name: "SignTerm", width: 100, align: "left" },
                    //{ label: "发生年份", name: "SignYear", width: 100, align: "left" },
                    //{ label: "财务凭证", name: "Voucher", width: 100, align: "left" },
                    //{ label: "付款类型", name: "PayType", width: 100, align: "left" },
                    //{ label: "资金来源", name: "FundSource", width: 100, align: "left" },
                    { label: "备注", name: "Remark", width: 100, align: "left" },
                ],
                mainId: 'Id',
                reloadSelected: true,
                onSelectRow: function (rowdata) {
                    //$("#jfgrid_left_gridtable >.jfgrid-data-cell").removeClass("jfgrid-selected");
                    //$("#jfgrid_right_gridtable >.jfgrid-data-cell").removeClass("jfgrid-selected");

                },

                isSubGrid: true,             // 是否有子表
                isPage: true,
                subGridExpanded: function (id, rowdate) {
                    PayGrid(id, rowdate);
                }
            });

            page.search();
        },
        search: function (param) {
            param = param || {};
            //param.StartTime = startTime;
            //param.EndTime = endTime; 
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    page.init();
}



//子表付款明细
function PayGrid(id, rowdata) {
    $('#' + id).jfGrid({
        url: top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/GetPageList',
        width: $(window).height() - 800,
        headData: [

            //{ label: '合同编码', name: 'PactCode', width: 150, align: "left" },
            //{ label: '合同名称', name: 'PactName', width: 200, align: "left" },
            //{ label: '合同类型', name: 'PactType', width: 150, align: "left" },
            //{ label: '付款公司Id', name: 'PaymentCompanyId', width: 150, align: "left" },
            { label: '乙方公司', name: 'PayCompany', width: 150, align: "left" },
            { label: '入账金额', name: 'bookedAmount', width: 150, align: "left" },
            { label: '付款金额', name: 'PayAmount', width: 150, align: "left" },
            { label: '挂账金额', name: 'hangAmount', width: 150, align: "left" },
            {
                label: '付款日期', name: 'PayDate', width: 150, align: "left",
                formatter: function (value, row, index) {
                    return $(this).formatterDate(value);
                }
            },
            //{ label: '付款批次', name: 'PayNo', width: 150, align: "left" },
            //{ label: '付款类型', name: 'PayType', width: 150, align: "left" },
            { label: '凭证号', name: 'VoucherNo', width: 150, align: "left" },
            //{ label: '付款金额类型', name: 'Type', width: 150, align: "left" },
        ],
        isPage: true,
        mainId: 'Id'
    });
    var param3 = { BindId: rowdata.Id } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param3) });
}

