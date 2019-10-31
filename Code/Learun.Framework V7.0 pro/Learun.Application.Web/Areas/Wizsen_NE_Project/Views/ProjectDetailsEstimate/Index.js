/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-18 10:47
 * 描  述：项目概算数据
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.initGird();
            page.bind();
        },
        bind: function () {
            // 查询
            $('#btn_Search').on('click', function () {
                var keyword = $('#txt_Keyword').val();
                page.search({ keyword: keyword });
            });
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 新增
            $('#lr_add').on('click', function () {
                selectedRow = null;
                learun.layerForm({
                    id: 'form',
                    title: '新增',
                    url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDetailsEstimate/Form',
                    width: 700,
                    height: 400,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form',
                        title: '编辑',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDetailsEstimate/Form?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/ProjectDetailsEstimate/DeleteForm', { keyValue: keyValue}, function () {
                            });
                        }
                    });
                }
            });
        },
        initGird: function () {
            $('#gridtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDetailsEstimate/GetPageList',
                headData: [
                        { label: 'Id', name: 'Id', width: 200, align: "left" },
                        { label: '项目ID', name: 'BindId', width: 200, align: "left" },
                        { label: '项目编码', name: 'Code', width: 200, align: "left" },
                        { label: '项目名称', name: 'Name', width: 200, align: "left" },
                        { label: '数据来源', name: 'DataSource', width: 200, align: "left" },
                        { label: '文号', name: 'Number', width: 200, align: "left" },
                        { label: '下达时间', name: 'GiveTime', width: 200, align: "left" },
                        { label: '热源', name: 'heat', width: 200, align: "left" },
                        { label: '一次网', name: 'ANet', width: 200, align: "left" },
                        { label: '换热站', name: 'HotNet', width: 200, align: "left" },
                        { label: '二次网', name: 'TwoNet', width: 200, align: "left" },
                        { label: '交易服务费', name: 'DealFee', width: 200, align: "left" },
                        { label: '招标代理费', name: 'TenderFee', width: 200, align: "left" },
                        { label: '造价咨询费', name: 'CostFee', width: 200, align: "left" },
                        { label: '施工图审查费', name: 'WorkMapFee', width: 200, align: "left" },
                        { label: '其他费（前期费）', name: 'AgoOtherFee', width: 200, align: "left" },
                        { label: '勘察费', name: 'ProspectFee', width: 200, align: "left" },
                        { label: '设计费', name: 'DesignFee', width: 200, align: "left" },
                        { label: '监理费', name: 'ControlFee', width: 200, align: "left" },
                        { label: '环评费', name: 'EnvironmentFee', width: 200, align: "left" },
                        { label: '安评费', name: 'SafetyFee', width: 200, align: "left" },
                        { label: '掘路费', name: 'DiggingFee', width: 200, align: "left" },
                        { label: '招待费', name: 'ServeFee', width: 200, align: "left" },
                        { label: '管理费', name: 'Managefee', width: 200, align: "left" },
                        { label: '其他费用', name: 'OtherFee', width: 200, align: "left" },
                        { label: '总投资', name: 'AmountFee', width: 200, align: "left" },
                ],
                mainId:'Id',
                isPage: true
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
