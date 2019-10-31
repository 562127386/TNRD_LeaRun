/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-23 17:26
 * 描  述：项目管理
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime;
    var Name;
    var CapitalSource;
    var ImplementYear;
    var Orgin;
    var Date;
    var page = {
        init: function () {
            page.initTree();
            page.initGird();
            page.bind();
        },
        bind: function () {// 时间搜索框 
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
            //年范围
            laydate.render({
                elem: '#ImplementYear'
                , type: 'year'
            });
            //实施年份
            laydate.render({
                elem: '#ImplementYear2'
                , type: 'year'
            });
            //$('#multiple_condition_query').lrMultipleQuery(function (queryJson) {
            //    page.search(queryJson);
            //}, 220, 400); 
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
            // 查询
            $('#btn_Search').on('click', function () {
                Name = $('#Name').val();
                CapitalSource = $("#CapitalSource").lrselectGet();
                ImplementYear = $('#ImplementYear2').val();
                page.search();
            });
            $('#CapitalSource').lrDataItemSelect({
                code: 'ProjectCapitalSource'
            }); 
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 新增
            $('#lr_add').on('click', function () {
                //learun.layerForm({
                //    id: 'form',
                //    title: '新增',
                //    url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/Form',
                //    width: 600,
                //    height: 400,
                //    callBack: function (id) {
                //        return top[id].acceptClick(refreshGirdData);
                //    }
                //});
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_add";
                par.F_FullName = "项目新增";
                par.F_Icon = "fa fa-file-text-o";
                par.F_UrlAddress = '/Wizsen_TNRD_Project/ProjectDatails/Form';
                learun.frameTab.open(par);
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "项目修改";
                par.F_UrlAddress = '/Wizsen_TNRD_Project/ProjectDatails/Form2?keyValue=' + keyValue;
                learun.frameTab.open(par);
                //if (learun.checkrow(keyValue)) {
                //    learun.layerForm({
                //        id: 'form',
                //        title: '编辑',
                //        url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/Form?keyValue=' + keyValue,
                //        width: 600,
                //        height: 400,
                //        callBack: function (id) {
                //            return top[id].acceptClick(refreshGirdData);
                //        }
                //    });
                //}
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/DeleteForm', { keyValue: keyValue}, function () {
                                location.reload();
                            });
                        }
                    });
                }
            });
            // 打印
            //$('#lr_print').on('click', function () {
            //    $('#gridtable').jqprintTable();
            //});
            // 查看
            $('#lr_detail').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                var Code = $('#gridtable').jfGridValue('Code');
                var Name = $('#gridtable').jfGridValue('Name');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_detail";
                    par.F_FullName = "项目查看";
                    par.F_UrlAddress = '/Wizsen_TNRD_Project/ProjectDatails/Detail?keyValue=' + keyValue+'&Code='+Code+'&Name='+Name;
                    learun.frameTab.open(par);
                }
            });
            //添加附件
            $('#lr_Uploader').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                //if (learun.checkrow(keyValue)) {
                //    learun.layerForm({
                //        id: 'ProjectAdjunct',
                //        title: '编辑',
                //        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/Adjunct?keyValue=' + keyValue,
                //        width: 700,
                //        height: 450,
                //        callBack: function (id) {
                //            return top[id].acceptClick(refreshGirdData);
                //        }
                //    })
                //}
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_Uploader";
                    par.F_FullName = "项目附件";
                    par.F_UrlAddress = '/Wizsen_TNRD_Project/ProjectDatails/AdjunctIndex?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            //收款
            $('#lr_Income').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中合同数据操作')) {
                    learun.layerForm({
                        id: 'Income',
                        title: '收款',
                        url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/IncomeDetails?keyValue=' + keyValue + '&pactId=gridtable',
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick();
                        }
                    });
                }
            });
            // 付款明细
            $('#lr_Check').on('click', function () {
                var keyValue = $("#gridtable").jfGridValue('Id');
                if (learun.checkrow(keyValue, '请选中项目数据操作')) {
                    learun.layerForm({
                        id: 'Check',
                        title: '查看明细',
                        url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectIncome/Check?keyValue=' + keyValue,
                        width: 1000,
                        height: 700,
                        btn: null,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
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
        },
        //树形图
        initTree: function () {
            $('#tree').lrtree({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/GetProjectTree',
                nodeClick: function (item) {
                    if (!item.hasChildren) {
                        Name = item.text;
                        Orgin = null;
                        Date = null;
                    } else if (item.parentId == "0") {
                        Orgin = item.text;
                        Name = null;
                        Date = null;
                    } else {
                        Date = item.text;
                        Name = null;
                        Orgin = item.parent.text;
                    }
                    page.search();
                }
            });
        },
        // 初始化列表
        initGird: function () {
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/GetPageList',
                headData: [
                    { label: "项目状态", name: "Node", width: 100, align: "left" },
                    { label: "项目编码", name: "Code", width: 100, align: "left"},
                    { label: "项目名称", name: "Name", width: 300, align: "left" },
                    {
                        label: "立项时间", name: "Date", width: 100, align: "left",
                        formatter: function (value, row, index) {
                            return learun.formatDate(value, 'yyyy-MM');
                        }
                    },
                    { label: "实施年份", name: "ImplementYear", width: 100, align: "left" },
                    { label: "资金来源", name: "CapitalSource", width: 100, align: "left" },
                    //{ label: "建设单位", name: "Company", width: 100, align: "left"},
                    //{ label: "开发商", name: "Developers", width: 100, align: "left"},
                    //{ label: "地址", name: "Address", width: 100, align: "left"},
                    { label: "内部工号", name: "WorkNo", width: 100, align: "left"},
                    { label: "总建筑面积（万平)", name: "CoveredArea", width: 100, align: "left" },
                    { label: "供热面积(万平)", name: "HeatingArea", width: 100, align: "left" },
                    { label: "户数", name: "Households", width: 100, align: "left" },
                    { label: "总投资(万元)", name: "Amount", width: 100, align: "left"},
                    //{ label: "管网长度", name: "PipeLength", width: 100, align: "left" },
                    //{ label: "实施年份", name: "ImplementYear", width: 100, align: "left"},
                    //{ label: "立项(概算)文号", name: "Titanict", width: 100, align: "left" },
                    //{ label: "立项总投资(万元)", name: "ProjectInvest", width: 100, align: "left" },
                    //{
                    //    label: "投资批复时间", name: "ApprovalTime", width: 100, align: "left", formatter: function (value, row, index) {
                    //        return $(this).formatterDate(value);
                    //    }},
                    //{ label: "预算批复文号", name: "ApprovalTitanict", width: 100, align: "left"},
                    //{ label: "预算评审值(万元)", name: "Review", width: 100, align: "left"},
                    //{ label: "决算值(万元)", name: "FinalValue", width: 100, align: "left" },
                    //{ label: "局已下达资金(万元)", name: "BureauFunds", width: 100, align: "left" },
                    //{ label: "财政已下达资金(万元)", name: "FiscalFunds", width: 100, align: "left" },
                    //{ label: "概算", name: "Estimate", width: 100, align: "left" },
                    //{ label: '工程费', name: 'ProjectFee', width: 100, align: "left" },
                    //{ label: '前期费', name: 'AgoFee', width: 100, align: "left" },
                    //{ label: '勘察费', name: 'ProspectFee', width: 100, align: "left" },
                    //{ label: '设计费', name: 'DesignFee', width: 100, align: "left" },
                    //{ label: '监理费', name: 'ControlFee', width: 100, align: "left" },
                    //{ label: '管理费', name: 'ManageFee', width: 100, align: "left" },
                    //{ label: '环评费', name: 'EnvironmentFee', width: 100, align: "left" },
                    //{ label: '安评费', name: 'SafetyFee', width: 100, align: "left" },
                    //{ label: '扬尘防治增加费', name: 'DustFee', width: 100, align: "left" },
                    //{ label: '掘路费', name: 'DiggingFee', width: 100, align: "left" },
                    //{ label: '劳动卫生评价费', name: 'HealthFee', width: 100, align: "left" },
                    //{ label: '预备费', name: 'ReadyFee', width: 100, align: "left" },
                    //{ label: '总管理费', name: 'TotalManageFee', width: 100, align: "left" },
                    //{ label: '其他费用', name: 'OtherFee', width: 100, align: "left" }, 
                    //{ label: "备注", name: "Remark", width: 100, align: "left" },
                ],
                mainId: 'Id',
                isPage: true,
                isSubGrid: true,             // 是否有子表
                isPage: true,
                subGridExpanded: function (id, rowdate) {
                    SecondGrid(id, rowdate);
                }
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            param.StartTime = startTime;
            param.EndTime = endTime;
            param.Name = Name;
            param.ImplementYear = ImplementYear;
            param.CapitalSource = CapitalSource;
            param.Orgin = Orgin;
            param.Date = Date;
            $('#gridtable').jfGridSet('reload',{ queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}


function SecondGrid(id, rowdate) {
    $('#' + id).jfGrid({
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
        mainId: 'ID',
        isPage: true
    });
    var param2 = { ProjectNo: rowdate.Code } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param2) });
}

function SecondGrid2(id, rowdate) {
    var subgrid2_id = id + "_t";
    $("#" + id).after("<div id='" + subgrid2_id + "'style='height:300;' ></div>");

    var Code = rowdate.Code;
    $('#' + subgrid2_id).jfGrid({
        url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectCapital/GetPageList',
        headData: [
            { label: '下达年份', name: 'IssuedYear', width: 200, align: "left" },
            { label: '局下达日期', name: 'BureauDate', width: 200, align: "left" },
            { label: '局下达文号', name: 'BureauTitanict', width: 200, align: "left" },
            { label: '局已下达资金计划', name: 'BureauFunds', width: 200, align: "left" },
            { label: '财政下达日期', name: 'FiscalDate', width: 200, align: "left" },
            { label: '财政下达文号', name: 'FiscalTitanict', width: 200, align: "left" },
            { label: '财政已下达资金', name: 'FiscalFunds', width: 200, align: "left" },
            { label: '是否完工', name: 'IsComplete', width: 200, align: "left" },
        ],
        mainId: 'Id',
        isPage: true
    });
    var param4 = { keyword: rowdate.Code } || {};
    $('#' + subgrid2_id).jfGridSet('reload', { queryJson: JSON.stringify(param4) });
}