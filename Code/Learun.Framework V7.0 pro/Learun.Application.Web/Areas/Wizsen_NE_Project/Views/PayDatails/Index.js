/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 18:02
 * 描  述：付款明细表
 */
var selectedRow;
var refreshGirdData;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime;
    var PactName;
    var PayCompany;
    var PayType;
    var page = {
        init: function () {
            //page.initTree();
            page.initGird();
            page.bind();
        },
        bind: function () {
            // 时间搜索框 
            $('#datesearch').lrdate({
                dfdata: [
                    //{ name: '今天', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00') }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近1年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y' - 1) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
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
                PactName = $('#PactName').val();
                PayCompany = $('#PayCompany').val();
                PayType = $('#PayType').val();
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
                    url: top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/Form',
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
                        url: top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/Form?keyValue=' + keyValue,
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
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/DeleteForm', { keyValue: keyValue}, function () {
                            });
                        }
                    });
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
                    page.search();
                }
            });
        },
        initGird: function () {
            $('#gridtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/GetPageList',
                headData: [
                        { label: 'Id', name: 'Id', width: 200, align: "left" },
                        { label: 'BindId', name: 'BindId', width: 200, align: "left" },
                        { label: '合同编码', name: 'PactCode', width: 200, align: "left" },
                        { label: '合同名称', name: 'PactName', width: 200, align: "left" },
                        { label: '合同类型', name: 'PactType', width: 200, align: "left" },
                        //{ label: '付款公司编码或设备包', name: 'PaymentCompanyId', width: 200, align: "left" },
                        { label: '付款公司', name: 'PayCompany', width: 200, align: "left" },
                        { label: '付款金额', name: 'PayAmount', width: 200, align: "left" },
                        { label: '付款日期', name: 'PayDate', width: 200, align: "left" },
                        { label: '付款批次', name: 'PayNo', width: 200, align: "left" },
                        { label: '付款类型', name: 'PayType', width: 200, align: "left" },
                        { label: '金额付款类型', name: 'Type', width: 200, align: "left" },
                        { label: '凭证号', name: 'VoucherNo', width: 200, align: "left" },
                        { label: '创建日期', name: 'CreateDate', width: 200, align: "left" },
                        { label: '创建人编码', name: 'CreateUserId', width: 200, align: "left" },
                        { label: '创建人名称', name: 'CreateUserName', width: 200, align: "left" },
                        { label: '修改日期', name: 'UpdateDate', width: 200, align: "left" },
                        { label: '修改人编码', name: 'UpdateUserId', width: 200, align: "left" },
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
            param.PactName = PactName;
            param.PayCompany = PayCompany;
            param.PayType = PayType;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
