/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:12
 * 描  述：国内配套合同
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime; 
    var Name;
    var AName;
    var ProjectName;
    var page = {
        init: function () {
            page.initTree();
            page.initGird();
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
                AName = $('#AName').val();
                page.search();
            });
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 新增
            $('#lr_add').on('click', function () {
                selectedRow = null;
                learun.layerForm({
                    id: 'form',
                    title: '新增',
                    url: top.$.rootUrl + '/Wizsen_NE_Project/PactAssort/Form',
                    width: 700,
                    height: 400,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form',
                        title: '编辑',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/PactAssort/Form?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/PactAssort/DeleteForm', { keyValue: keyValue}, function () {
                            });
                        }
                    });
                }
            });
            // 查看
            $('#lr_detail').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_detail";
                    par.F_FullName = "查看";
                    par.F_UrlAddress = '/Wizsen_NE_Project/PactAssort/Detail?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            // 付款
            $('#lr_pay').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form2',
                        title: '付款',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/Form2?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });

            // 付款明细
            $('#lr_payDetail').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form',
                        title: '付款明细',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/Index2?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });

            //添加附件
            $('#lr_Uploader').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_Uploader";
                    par.F_FullName = "合同附件";
                    par.F_UrlAddress = '/Wizsen_NE_Project/PactAssort/AdjunctIndex?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
        },
        //树形图
        initTree: function () {
            $('#tree').lrtree({
                url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectBase/GetProjectTree',
                nodeClick: function (item) {
                    //classify_itemCode = item.value;
                    //$('#titleinfo').text(item.text + '(' + classify_itemCode + ')');
                    page.search({ keyword: item.value });
                }
            });
        },
        initGird: function () {
            $('#gridtable').lrAuthorizeJfGrid({
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
                mainId:'Id',
                isPage: true
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            param.StartTime = startTime;
            param.EndTime = endTime; 
            param.ProjectName = ProjectName;
            param.Name = Name;
            param.AName = AName;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
