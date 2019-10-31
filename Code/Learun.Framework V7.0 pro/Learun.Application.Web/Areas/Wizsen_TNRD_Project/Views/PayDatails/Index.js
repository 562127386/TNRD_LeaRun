/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-23 15:12
 * 描  述：付款明细
 */
var selectedRow;
var refreshGirdData;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
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
            // 新增
            $('#lr_add').on('click', function () {
                selectedRow = null;
                learun.layerForm({
                    id: 'form',
                    title: '新增',
                    url: top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/Form',
                    width: 700,
                    height: 400,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                //var count = $("#gridtable").getJfGridParam("reccount");
                var row = $("#gridtable .jfgrid-data-cell.jfgrid-selected:eq(0)").attr("rowindex");
                var rowdatas = $('#gridtable').jfGridGet('rowdatas');
                if (parseInt(row) != rowdatas.length - 1) {
                    learun.alert.error('付款修改只能修改最新一条，请检查！');
                    return 
                }
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form2',
                        title: '付款编辑',
                        url: top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/Form?keyValue=' + keyValue + '&pactId=gridtable',
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
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/DeleteForm', { keyValue: keyValue }, function () {
                                refreshGirdData();
                            });
                        }
                    });
                }
            });
        },
        initGird: function () {
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/GetPageList',
                headData: [
                    //{ label: 'Id', name: 'Id', width: 200, align: "left" },
                    //{ label: 'BindId', name: 'BindId', width: 200, align: "left" },
                    //{ label: '合同编码', name: 'PactCode', width: 200, align: "left" },
                    { label: '合同名称', name: 'PactName', width: 200, align: "left" },
                    //{ label: '合同类型', name: 'PactType', width: 100, align: "left" },
                    //{ label: '付款公司Id', name: 'PaymentCompanyId', width: 200, align: "left" },
                    { label: '付款公司', name: 'PayCompany', width: 100, align: "left" },
                    { label: '入账金额', name: 'bookedAmount', width: 100, align: "left" },
                    { label: '付款金额', name: 'PayAmount', width: 100, align: "left" },
                    { label: '挂账金额', name: 'hangAmount', width: 100, align: "left" },
                    { label: '付款日期', name: 'PayDate', width: 100, align: "left" },
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
                sidx: 'CreateDate',
                mainId:'Id',
                isPage: true
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            param.BindId = keyValue;
            param.PactName = $("#txt_Keyword").val();
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
