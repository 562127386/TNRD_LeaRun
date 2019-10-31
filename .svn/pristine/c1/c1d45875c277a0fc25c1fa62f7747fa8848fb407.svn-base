/*
 * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：力软-前端开发组
 * 日 期：2017.04.18
 * 描 述：新增表单	
 */

var keyValue = request('keyValue');

var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.bind();
            page.initData();
        },
        bind: function () {
            // 优化滚动条
            $('.lr-layout-wrap').lrscroll();
           
            // 附件信息
            $('#productgird2').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/AdjunctDatails/GetList',
                headData: [
                    { label: '附件名称', name: 'AdjunctName', width: 200, align: "left" },
                    { label: '附件类型', name: 'AdjunctType', width: 200, align: "left" },
                    { label: '附件路径', name: 'Url', width: 200, align: "left" },
                    { label: '上传时间', name: 'UploadTime', width: 200, align: "left" },

                ],
                height: 300,
            });
            var param2 = { BindId: keyValue } || {};
            $('#productgird2').jfGridSet('reload', { queryJson: JSON.stringify(param2) });
            // 关闭
            $('#lr_close').on('click', function () {
                //acceptClick(1);
                learun.frameTab.close(learun.frameTab.iframeId);
            });
        },
        initData: function () {
            $.lrSetForm(top.$.rootUrl + '/Wizsen_TNRD_Project/FacilityBase/GetFormData?keyValue=' + keyValue, function (data) {
                $('[data-table="TNRD_Facility_Base"]').lrSetFormData(data);
            });
        }
    };

    page.init();
}