/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:12
 * 描  述：国内配套合同
 */
var acceptClick;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = learun.frameTab.currentIframe().selectedRow;
    $('#FundSource').lrDataItemSelect({
        code: 'Capital',
        maxHeight: 230
    });
    //合同类别
    $('#Type').lrDataItemSelect({
        code: 'PactType2',
        maxHeight: 230
    });
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
        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/GetList',
        // 访问数据接口参数
        param: { parentId: '0' },
        select: function (items) {
            $('#ProjectNo').val(items.Code);
        }
    }
    $('#ProjectName').lrselect(dfop);
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


    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_NE_Project/PactAssort/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}
