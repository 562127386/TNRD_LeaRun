/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-23 15:12
 * 描  述：付款明细
 */
var acceptClick;
var keyValue = request('keyValue');
var pactId = request('pactId');
var bootstrap = function ($, learun) {
    "use strict";
    //var selectedRow = learun.frameTab.currentIframe().selectedRow;
    var $window = learun.frameTab.currentIframe().document.getElementById(pactId);
    var selectedRow = $($window).jfGridGet('rowdata');
    var page = {
        init: function () {
            page.initData();
        },
        bind: function () {
        },
        initData: function () {
            $.ajax({
                url: "/Wizsen_TNRD_Project/PayDatails/GetFormData",
                data: { keyValue: keyValue },
                dataType: "json",
                async: false,
                success: function (data) {
                    if (!!data) {
                        $('#form').lrSetFormData(data.data);
                    }
                }
            });
            
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}
