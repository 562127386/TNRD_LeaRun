/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 16:51
 * 描  述：项目层级管理
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
                $('#form').lrSetFormData(selectedRow);
            }
        }
    }; 
    var dfop = {
        // 字段
        value: "Name",
        text: "Name",
        title: "Name",
        // 展开最大高度
        maxHeight: 200,
        // 是否允许搜索
        allowSearch: true,
        // 访问数据接口地址
        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectBase/SelList',
        // 访问数据接口参数
        param: { parentId: '0' },
        select: function (items) {
            $('#ParentCode').val(items.Code);
        }
    }
    $('#ParentName').lrselect(dfop);

    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_NE_Project/ProjectBase/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}
