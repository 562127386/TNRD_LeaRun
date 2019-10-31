/*
 * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：力软-前端开发组
 * 日 期：2017.04.18
 * 描 述：新增表单	
 */
var selectedRow;
var keyValue = request('keyValue');
var refreshGirdData;
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

            // 合同附件
            //$('#F_ContractFile').lrUploader();
            //添加附件
            $('#lr_add').on('click', function () {
                $('#productgird').jfGridSet('nocheck');
                //var keyValue = $('#productgird').jfGridValue('Id');
                //if (learun.checkrow(keyValue)) {
                learun.layerForm({
                    id: 'ProjectAdjunct',
                    title: '添加附件',
                    url: top.$.rootUrl + '/Wizsen_TNRD_Project/FacilityBase/FacilityAdjunctForm?keyValue=' + keyValue,
                    width: 700,
                    height: 450,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });;
                //}
            });
            //编辑附件
            $('#lr_edit').on('click', function () {
                var attachId = $('#productgird').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'ProjectAdjunct',
                        title: '编辑附件',
                        url: top.$.rootUrl + '/Wizsen_TNRD_Project/FacilityBase/FacilityAdjunctForm?keyValue='  + keyValue + '&attachId=' + attachId,
                        width: 700,
                        height: 450,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    })
                }
            });
            //删除附件
            $('#lr_delete').on('click', function () {
                var keyValue = $('#productgird').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_TNRD_Project/AdjunctDatails/DeleteForm', { keyValue: keyValue }, function (res) {
                                if (res.code == 200) {
                                    refreshGirdData();
                                }
                            });
                        }
                    });
                }
            });
            //附件信息
            $('#productgird').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/AdjunctDatails/GetList',
                headData: [
                    { label: '附件名称', name: 'AdjunctName', width: 200, align: "left" },
                    { label: '附件类型', name: 'AdjunctType', width: 200, align: "left" },
                    { label: '附件路径', name: 'Url', width: 200, align: "left" },
                    { label: '上传时间', name: 'UploadTime', width: 200, align: "left" },

                ],
                height: 300,
            });
            page.search();


            // 关闭
            $('#lr_close').on('click', function () {
                //acceptClick(1);
                learun.frameTab.close(learun.frameTab.iframeId);
            });
        },
        search: function (param) {
            param = { BindId: keyValue } || {};
            $('#productgird').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        },
        initData: function () {
            if (!!keyValue) {
                $.lrSetForm(top.$.rootUrl + '/Wizsen_TNRD_Project/FacilityBase/GetFormData?keyValue=' + keyValue, function (data) {
                    $('[data-table="TNRD_Facility_Base"]').lrSetFormData(data);
                });
            }
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}