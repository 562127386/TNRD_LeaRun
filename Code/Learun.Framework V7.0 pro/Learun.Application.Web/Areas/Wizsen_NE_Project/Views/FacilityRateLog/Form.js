/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:19
 * 描  述：设备税率变更日志
 */
var acceptClick;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = learun.frameTab.currentIframe().selectedRow;
    var page = {
        init: function () {
            page.initData();
        },
        bind: function () {
        },
        initData: function () {
            if (!!selectedRow) {
                //$('#form').lrSetFormData(selectedRow);
                $("#BindId").val(selectedRow.Id);
                $("#ProjectNo").val(selectedRow.ProjectNo);
                $("#ProjectName").val(selectedRow.ProjectName);
                $("#FacilityCode").val(selectedRow.Code);
                $("#FacilityName").val(selectedRow.Name);
                $("#Quantity").val(selectedRow.Quantity);
                $("#Unit").val(selectedRow.Unit);
                $("#OldRate").val(selectedRow.Rate);
                $("#Price").val(selectedRow.Price);
                $("#TotalPrice").val(selectedRow.TotalPrice);
                $("#TotalTax").val(selectedRow.TotalTax);
                $("#TotalTaxPrice").val(selectedRow.TotalTaxPrice);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_NE_Project/FacilityRateLog/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}
