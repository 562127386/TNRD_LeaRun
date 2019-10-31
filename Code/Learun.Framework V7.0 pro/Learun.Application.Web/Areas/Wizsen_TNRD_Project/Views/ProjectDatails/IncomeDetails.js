/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-10-25 18:02
 * 描  述：项目收入
 */
var acceptClick;
var keyValue = request('keyValue');
var pactId = request('pactId');
var bootstrap = function ($, learun) {
    "use strict";
    var $window = learun.frameTab.currentIframe().document.getElementById(pactId);
    var selectedRow = $($window).jfGridGet('rowdata');
    var page = {
        init: function () {
            page.initData();
        },
        bind: function () {
        },
        initData: function () {
            if (!!selectedRow) {
                //$('#form').lrSetFormData(selectedRow);
                $('#ProjectNo').val(selectedRow.Code);
                $('#ProjectName').val(selectedRow.Name);
                $('#BindId').val(keyValue);
            }
            $('#capitalSource').lrDataItemSelect({
                code: 'ProjectCapitalSource',
                maxHeight: 230
            });
            $('#Type').lrDataItemSelect({
                code: 'TNBillType',
                maxHeight: 230
            });
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectIncome/SaveForm', postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}


//打开上传附件窗口
function open_upload(elementId) {
    top.learun.layerForm({
        id: 'UpLoadForm',
        title: '上传附件',
        url: top.$.rootUrl + "/LR_SystemModule/Annexes/UpLoadBF?modelName=AdjunctName&windowId=Income&elementId=" + elementId,
        width: 550,
        height: 570,
        callBack: function (id) {
            //return top[id].acceptClick(refreshZZList);
        }
    });
}

//附件窗口回调刷新文件列表
function refreshFiles(result) {
    var displayStr = "<a style='color:blue;' href='" + result.path + "'>" + result.filename_o + "</a>";
    $("#fileInfo").html(displayStr);
    $("#" + result.elementId).val(result.filename_o);
    $("#Url").val(result.path);
}














