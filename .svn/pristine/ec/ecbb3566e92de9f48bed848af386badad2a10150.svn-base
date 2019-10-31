/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-27 17:00
 * 描  述：资金下达
 */
var acceptClick;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = learun.frameTab.currentIframe().selectedRow;
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#IsComplete').lrRadioCheckbox({
                type: 'radio',
                code: 'IsComplete', 
            }); 
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
                    $('#Code').val(items.Code);
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
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectCapital/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}
