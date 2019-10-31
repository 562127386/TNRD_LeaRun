/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:19
 * 描  述：设备税率变更日志
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
                    url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityRateLog/Form',
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
                        url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityRateLog/Form?keyValue=' + keyValue,
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
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/FacilityRateLog/DeleteForm', { keyValue: keyValue}, function () {
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
                url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityRateLog/GetPageList',
                headData: [
                        { label: '主键', name: 'Id', width: 200, align: "left" },
                        { label: 'BindId', name: 'BindId', width: 200, align: "left" },
                        { label: '项目编码', name: 'ProjectNo', width: 200, align: "left" },
                        { label: '项目名称', name: 'ProjectName', width: 200, align: "left" },
                        { label: '设备编码', name: 'FacilityCode', width: 200, align: "left" },
                        { label: '设备名称', name: 'FacilityName', width: 200, align: "left" },
                        { label: '数量', name: 'Quantity', width: 200, align: "left" },
                        { label: '单位', name: 'Unit', width: 200, align: "left" },
                        { label: '变更前税率', name: 'OldRate', width: 200, align: "left" },
                        { label: '变更后税率', name: 'Rate', width: 200, align: "left" },
                        { label: '出厂价格（元）', name: 'Price', width: 200, align: "left" },
                        { label: '每一品目的出厂价（元）（及总价）', name: 'TotalPrice', width: 200, align: "left" },
                        { label: '每一目应缴税费（元）（及总税费）', name: 'TotalTax', width: 200, align: "left" },
                        { label: '每一品目的含税价格（元）（及含税总价）', name: 'TotalTaxPrice', width: 200, align: "left" },
                        { label: '变更后每一品目出厂价格', name: 'TotalPriceNew', width: 200, align: "left" },
                        { label: '变更后每一品目应交税费', name: 'TotalTaxNew', width: 200, align: "left" },
                        { label: '变更后每一品目含税价格', name: 'TotalTaxPriceNew', width: 200, align: "left" },
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
