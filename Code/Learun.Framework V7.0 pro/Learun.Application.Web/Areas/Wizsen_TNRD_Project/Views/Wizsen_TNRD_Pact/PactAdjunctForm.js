/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:01
 * 描  述：项目管理
 */
var acceptClick;
var keyValue = request('keyValue');
var attachId = request('attachId');
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = learun.frameTab.currentIframe().selectedRow;
    var currentWindow = learun.frameTab.currentIframe().document.getElementById("productgird");
    var selectedRow = $(currentWindow).jfGridGet("rowdata");
    $('#Process').lrDataItemSelect({
        code: 'ProjectType2',
        maxHeight: 230
    });
    var page = {
        init: function () {
            page.bind();
        },
        bind: function () {
            $('#FileType').lrDataItemSelect({ code: 'CompanyNature' });
            if (!!selectedRow) {
                $('#form').lrSetFormData(selectedRow);
            }
            //if (!!selectedRow) {
            //    $('#form').lrSetFormData(selectedRow[0]);
            //    var fileInfo = { "path": selectedRow[0].Url, "filename_o": selectedRow[0].AdjunctName, "elementId": "AdjunctName" };
            //    refreshFiles(fileInfo);
            //}
        }
    };
    page.init();
    page.bind();

    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
            postData.BindId = keyValue;
            postData.keyValue = attachId;
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_TNRD_Project/AdjunctDatails/SaveForm', postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };


}


//打开上传附件窗口
function open_upload(elementId) {
    top.learun.layerForm({
        id: 'UpLoadForm',
        title: '上传附件',
        url: top.$.rootUrl + "/LR_SystemModule/Annexes/UpLoadBF?modelName=AdjunctName&windowId=ProjectAdjunct&elementId=" + elementId,
        width: 550,
        height: 570,
        btn: [],
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



