/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-25 14:30
 * 描  述：Wizsen_TNRD_Pact
 */
var refreshGirdData;
var selectedRow;
var pactId;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.initTree();
            page.initGird();
            page.bind();
        },
        bind: function () {
            $("#contractType").lrDataItemSelect({
                code: 'PactType2',
                maxHeight: 230
            });
            //年范围
            laydate.render({
                elem: '#ImplementYear'
                , type: 'year'
            });
            //// 时间搜索框 
            //$('#datesearch').lrdate({
            //    dfdata: [
            //        //{ name: '今天', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00') }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
            //        { name: '近1年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -1) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
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
            //        //page.search();
            //    }
            //});
            //$('#CapitalSource').lrDataItemSelect({
            //    code: 'ProjectCapitalSource',
            //    select: function (items) {
            //        CapitalSource = items.value;
            //    }
            //});
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            //查询
            $('#btn_Search').on('click', function () {
                //var CapitalSource = $("#CapitalSource").lrselectGet();
                //var Name = $('#Name').val();
                //var ImplementYear = $("#ImplementYear").val();
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
                ////查询子表字段，过滤主表数值
                //var param = {};
                //var queryParam = {};
                //var sql = "select BindId from dbo.TNRD_Pact_Datails where 1=1";
                //queryParam.contractType = contractType;
                //param.queryParam = queryParam;
                //param.rowdatas = $('#gridtable').jfGridGet('rowdatas');
                //var filterdata = learun.querySubTbData(sql, param);
                //$('#gridtable').jfGridSet('refreshdata', filterdata);
            });
            //项目查询
            $('#btn_Project_Search').on('click', function () {
                var ImplementYear = $("#ImplementYear").val();
                if (ImplementYear !== '') {
                    $("#tree").lrtreeSet("search", { keyword: ImplementYear });
                }
                else {
                    $("#tree").lrtreeSet("refresh");
                }
            })
            // 新增
            $('#lr_add').on('click', function () {
                //获取选中项目数据
                var treeSelect = $("#tree").lrtreeSet("currentItem");
                if (learun.checkrow(treeSelect, '请选中项目数据操作')) {
                    learun.frameTab.open({ F_ModuleId: 'pact_add', F_Icon: 'fa fa-file-text-o', F_FullName: '合同新增', F_UrlAddress: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/Form?projectId=' + treeSelect.value + '&projectName=' + treeSelect.text });
                }
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中合同数据操作')) {
                    learun.frameTab.open({ F_ModuleId: 'pact_edit', F_Icon: 'fa fa-file-text-o', F_FullName: '合同修改', F_UrlAddress: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/Form?keyValue=' + keyValue });
                }


            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中合同数据操作')) {
                    learun.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/DeleteForm', { keyValue: keyValue }, function () {
                                location.reload();
                            });
                        }
                    });
                }
            });
            // 查看
            $('#lr_Browse').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中合同数据操作')) {
                    learun.frameTab.open({ F_ModuleId: 'pact_browse', F_Icon: 'fa fa-file-text-o', F_FullName: '合同查看', F_UrlAddress: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/Browse?keyValue=' + keyValue });
                }
            });
            //付款
            $('#lr_pay').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中合同数据操作')) {
                    learun.layerForm({
                        id: 'PayDetails',
                        title: '付款',
                        url: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/PayDetails?keyValue=' + keyValue + '&pactId=gridtable',
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick();
                        }
                    });
                }
            });
            // 付款明细
            $('#lr_payDetail').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中合同数据操作')) {
                    learun.layerForm({
                        id: 'form',
                        title: '查看明细',
                        url: top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/Index?keyValue=' + keyValue,
                        width: 1000,
                        height: 700,
                        btn: null,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            //添加附件
            $('#lr_Uploader').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中合同数据操作')) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_Uploader";
                    par.F_FullName = "合同附件";
                    par.F_UrlAddress = '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/PactAdjunctIndex?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }

            });
        },
        //树形图
        initTree: function () {
            $('#tree').lrtree({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/GetProjectTree',
                nodeClick: function (item) {
                    var mainPar = {};
                    if (!item.hasChildren) {
                        mainPar.ProjectName = item.text;
                        mainPar.Orgin = null;
                        mainPar.Date = null
                    } else if (item.parentId == "0") {
                        mainPar.ProjectName = null;
                        mainPar.Orgin = item.text;
                        mainPar.Date = null
                    } else {
                        mainPar.ProjectName = null;
                        mainPar.Orgin = item.parent.text;
                        mainPar.Date = item.text
                    }
                    page.search(mainPar);
                }
            });
        },
        // 初始化列表
        initGird: function () {
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/GetPageList',
                width: 200,
                headData: [

                    { label: "合同状态", name: "contractStatus", width: 100, align: "left" },
                    { label: "合同类型", name: "contractType", width: 100, align: "left" },
                    { label: "合同编码", name: "Code", width: 100, align: "left" },
                    { label: "合同名称", name: "Name", width: 300, align: "left" },
                    { label: "对方单位", name: "supplier", width: 200, align: "left" },
                    //{ label: "部门", name: "department", width: 100, align: "left" },
                    //{ label: "人员", name: "employee", width: 100, align: "left" },
                    //{ label: "币种", name: "currency", width: 100, align: "left" },
                    { label: "合同金额(元)", name: "Amount", width: 100, align: "left" },
                    { label: "应付金额(元)", name: "payableMoney", width: 100, align: "left" },
                    { label: "已付款金额(元)", name: "paySumAmount", width: 100, align: "left" },
                    { label: "未付款金额(元)", name: "overAmount", width: 100, align: "left" },
                    {
                        label: "付款比例（%）", name: "Ratio", width: 100, align: "left",
                        formatter: function (value, row, index) {
                            return (row.paySumAmount / row.Amount * 100).toFixed(2) + "%";
                        }
                    },
                    //{
                    //    label: "签订日期", name: "SignDate", width: 100, align: "left", formatter: function (value, row, index) {
                    //        return $(this).formatterDate(value);
                    //    }
                    //},
                    //{ label: "计划终止日期", name: "abortDate", width: 100, align: "left" },
                
                ],
                mainId: 'Id',
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
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
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
        sidx: 'CreateDate',
        isPage: true,
        mainId: 'Id'
    });
    var param3 = { BindId: rowdata.Id } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param3) });
}

function SecondGrid(id, rowdata) {
    var Id = rowdata.Id;
    $('#' + id).jfGrid({
        url: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/GetList',
        width: $(window).height() - 800,
        headData: [
            //{ label: "ID", name: "Id", width: 100, align: "left" },
            //{ label: "项目编码", name: "ProjectNo", width: 100, align: "left" },
            //{ label: "项目名称", name: "ProjectName", width: 100, align: "left" },
            { label: "合同类型", name: "contractType", width: 100, align: "left" },
            { label: "合同编码", name: "Code", width: 100, align: "left" },
            { label: "合同名称", name: "Name", width: 100, align: "left" },
            { label: "合同状态", name: "contractStatus", width: 100, align: "left" },
            { label: "部门", name: "department", width: 100, align: "left" },
            { label: "人员", name: "employee", width: 100, align: "left" },
            //{ label: "供应商", name: "supplier", width: 100, align: "left" },
            //{ label: "采购组织", name: "purchaseOrg", width: 100, align: "left" },
            { label: "币种", name: "currency", width: 100, align: "left" },
            {
                label: "发生日期", name: "SignDate", width: 100, align: "left", formatter: function (value, row, index) {
                    return $(this).formatterDate(value);
                }
            },
            { label: "计划终止日期", name: "abortDate", width: 100, align: "left" },
            { label: "已付款累计(元)", name: "paySumAmount", width: 100, align: "left" },
            { label: "余额(元)", name: "overAmount", width: 100, align: "left" },
            //{ label: "预付款限额", name: "budgetRestrict", width: 100, align: "left" },
            //{ label: "预付款", name: "BudgetAmount", width: 100, align: "left" },
            //{ label: "付款类型", name: "PayType", width: 100, align: "left" },
        ],
        mainId: 'Id',
        onSelectRow: function (rowdata) {
            $("#jfgrid_left_gridtable >.jfgrid-data-cell").removeClass("jfgrid-selected");
            $("#jfgrid_right_gridtable >.jfgrid-data-cell").removeClass("jfgrid-selected");
        },

        isSubGrid: true,             // 是否有子表
        subGridExpanded: function (id, rowdate) {
            ThirdGrid(id, rowdate);
        }
    });
    var param2 = { ProjectNo: rowdata.Code } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param2) });
}
function ThirdGrid(id, rowdate) {
    $('#' + id).jfGrid({
        url: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/GetTNRD_Facility_BaseList',
        headData: [

            {
                label: '设备分类', name: 'Classify', width: 100, align: 'left'
            },
            {
                label: '设备编码', name: 'Code', width: 100, align: 'left'
            },
            {
                label: '设备名称', name: 'Name', width: 100, align: 'left'
            },
            {
                label: '规格及型号', name: 'Model', width: 100, align: 'left'
            },
            {
                label: '数量', name: 'Quantity', width: 100, align: 'left'

            },
            {
                label: '单位', name: 'Unit', width: 100, align: 'left'
            },
            {
                label: '税率（%）', name: 'Rate', width: 100, align: 'left'
            },
            {
                label: '出厂单价（元）', name: 'Price', width: 100, align: 'left'

            },
            {
                label: '每一品目的出厂价（元）（及总价）', name: 'TotalPrice', width: 100, align: 'left'
            },
            {
                label: '税额（元）', name: 'Tax', width: 100, align: 'left'
            },
            {
                label: '每一目应缴税费（元）（及总税费）', name: 'TotalTax', width: 100, align: 'left'
            },
            {
                label: '含税单价（元）', name: 'TaxPrice', width: 100, align: 'left'
            },
            {
                label: '每一品目的含税价格（元）（及含税总价）', name: 'TotalTaxPrice', width: 100, align: 'left'
            },
            {
                label: '设备状态', name: 'EquipmentState', width: 100, align: 'left'
            },
            {
                label: '收货单位', name: 'ReceivingUnit', width: 100, align: 'left'
            },
            {
                label: '收货地址', name: 'ShippingAddress', width: 100, align: 'left'
            },
            {
                label: '货物描述', name: 'Description', width: 100, align: 'left'
            },
            {
                label: '财务组织', name: 'Financial', width: 100, align: 'left'
            },
            {
                label: '厂家', name: 'Customer', width: 100, align: 'left'
            },
            {
                label: '备注', name: 'Remark', width: 100, align: 'left'
            },
            {
                label: '支付数量', name: 'PayQuantity', width: 100, align: 'left'
            },
            {
                label: '入库时间', name: 'StorageTime', width: 100, align: 'left'
            },
            {
                label: '出库时间', name: 'OutboundTime', width: 100, align: 'left'
            },
        ],
        mainId: 'Id'
    });
    var param3 = { keyValue: rowdate.Id } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param3) });
}
