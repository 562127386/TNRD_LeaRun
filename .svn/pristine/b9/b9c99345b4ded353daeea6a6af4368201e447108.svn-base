/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 18:06
 * 描  述：设备付款明细
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.initTree();
            page.initGird();
            page.bind();
        },
        bind: function () {
            // 查询
            $('#btn_Search').on('click', function () {
                var keyword = $('#txt_Keyword').val();
                page.search({ keyword: keyword });
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
                    url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityPay/Form',
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
                        url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityPay/Form?keyValue=' + keyValue,
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
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/FacilityPay/DeleteForm', { keyValue: keyValue}, function () {
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
                url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityPay/GetPageList',
                headData: [
                        { label: '主键', name: 'Id', width: 200, align: "left" },
                        { label: 'BindId', name: 'BindId', width: 200, align: "left" },
                        { label: '设备Id', name: 'FacilityId', width: 200, align: "left" },
                        { label: '项目编码', name: 'ProjectNo', width: 200, align: "left" },
                        { label: '项目名称', name: 'ProjectName', width: 200, align: "left" },
                        { label: '合同名称', name: 'PactName', width: 200, align: "left" },
                        { label: '合同编码', name: 'PactCode', width: 200, align: "left" },
                        { label: '设备名称', name: 'FacilityName', width: 200, align: "left" },
                        { label: '设备编码', name: 'FacilityCode', width: 200, align: "left" },
                        { label: '设备类型', name: 'FacilityType', width: 200, align: "left" },
                        { label: '出厂单价', name: 'Price', width: 200, align: "left" },
                        { label: '付款数量', name: 'Quantity', width: 200, align: "left" },
                        { label: '单位', name: 'Unit', width: 200, align: "left" },
                        { label: '付款公司编码或设备包', name: 'PaymentCompanyId', width: 200, align: "left" },
                        { label: '付款金额', name: 'PaymentAmount', width: 200, align: "left" },
                        { label: '付款日期', name: 'PayDate', width: 200, align: "left" },
                        { label: '付款类型', name: 'PayType', width: 200, align: "left" },
                        { label: '凭证号', name: 'VoucherNo', width: 200, align: "left" },
                        { label: '付款批次', name: 'PayNo', width: 200, align: "left" },
                        { label: '创建日期', name: 'CreateDate', width: 200, align: "left" },
                        { label: '创建用户账户', name: 'CreateUserId', width: 200, align: "left" },
                        { label: '创建用户名称', name: 'CreateUserName', width: 200, align: "left" },
                        { label: '最后修改时间', name: 'UpdateDate', width: 200, align: "left" },
                        { label: '最后修改用户', name: 'UpdateUserId', width: 200, align: "left" },
                        { label: '最后修改用户名称', name: 'UpdateUserName', width: 200, align: "left" },
                ],
                mainId:'Id',
                isPage: true
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
