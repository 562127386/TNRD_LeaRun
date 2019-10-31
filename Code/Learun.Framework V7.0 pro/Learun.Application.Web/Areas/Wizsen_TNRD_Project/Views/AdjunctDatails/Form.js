/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-23 16:25
 * 描  述：附件信息
 */
var acceptClick;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = learun.frameTab.currentIframe().selectedRow;
    $('#Process').lrDataItemSelect({
        code: 'ProjectType2',
        maxHeight: 230
    });
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            var dfop = {
                // 字段
                value: "Name",
                text: "Name",
                title: "Name",
                id: "Name",
                // 展开最大高度
                maxHeight: 200,
                // 是否允许搜索
                allowSearch: true,
                // 访问数据接口地址
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/GetList',
                // 访问数据接口参数
                param: { parentId: '0' },
                select: function (items) {
                    $('#BindId').val(items.Id);
                }
            }
            $('#Name').lrselect(dfop);
        },
        initData: function () {
            if (!!selectedRow) {
                $('#form').lrSetFormData(selectedRow);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_TNRD_Project/AdjunctDatails/SaveForm?keyValue=' + keyValue, postData, function (res) {
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
        url: top.$.rootUrl + "/LR_SystemModule/Annexes/UpLoadBF?modelName=AdjunctName&windowId=Adjunct&elementId=" + elementId,
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
