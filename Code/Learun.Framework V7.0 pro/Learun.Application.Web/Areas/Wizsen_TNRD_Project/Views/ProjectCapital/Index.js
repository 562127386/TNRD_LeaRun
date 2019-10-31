/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-27 17:00
 * 描  述：资金下达
 */
var selectedRow;
var refreshGirdData;
var B_startTime;
var B_endTime;
var Name;
var F_startTime;
var F_endTime;
var IssuedYear;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            page.initGird();
            page.bind();
        },
        bind: function () {
            // 时间搜索框 
            $('#BureauDate').lrdate({
                dfdata: [
                    //{ name: '今天', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00') }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近1年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -1) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近3年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -3) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近10年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -10) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } }
                ],
                // 月 
                mShow: false,
                premShow: false,
                // 季度 
                jShow: false,
                prejShow: false,
                // 年 
                ysShow: false,
                yxShow: false,
                preyShow: true,
                yShow: true,
                // 默认 
                dfvalue: '0',
                selectfn: function (begin, end) {
                    B_startTime = begin;
                    B_endTime = end;
                    //page.search();
                }
            }); 

            // 时间搜索框 
            $('#FiscalDate').lrdate({
                dfdata: [
                    //{ name: '今天', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00') }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近1年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -1) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近3年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -3) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } },
                    { name: '近10年', begin: function () { return learun.getDate('yyyy-MM-dd 00:00:00', 'y', -10) }, end: function () { return learun.getDate('yyyy-MM-dd 23:59:59') } }
                ],
                // 月 
                mShow: false,
                premShow: false,
                // 季度 
                jShow: false,
                prejShow: false,
                // 年 
                ysShow: false,
                yxShow: false,
                preyShow: true,
                yShow: true,
                // 默认 
                dfvalue: '0',
                selectfn: function (begin, end) {
                    F_startTime = begin;
                    F_endTime = end;
                    //page.search();
                }
            }); 
            // 查询
            $('#btn_Search').on('click', function () {
                Name = $('#Name').val();
                IssuedYear = $('#IssuedYear').val();
                page.search();
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
                    url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectCapital/Form',
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
                        title: '资金修改',
                        url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectCapital/Form?keyValue=' + keyValue,
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
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectCapital/DeleteForm', { keyValue: keyValue }, function () {
                                refreshGirdData();
                            });
                        }
                    });
                }
            });
        },
        initGird: function () {
            $('#gridtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectCapital/GetPageList',
                headData: [
                        //{ label: '项目编码', name: 'Code', width: 100, align: "left" },
                        { label: '项目名称', name: 'Name', width: 300, align: "left" },
                        { label: '下达年份', name: 'IssuedYear', width: 100, align: "left" },
                        {
                            label: '局下达日期', name: 'BureauDate', width: 150, align: "left", formatter: function (value, row, index) {
                                return $(this).formatterDate(value);
                        }},
                        { label: '局下达文号', name: 'BureauTitanict', width: 200, align: "left" },
                        { label: '局计划下达(万元)', name: 'BureauFunds', width: 150, align: "left" },
                        {
                            label: '财政下达日期', name: 'FiscalDate', width: 150, align: "left", formatter: function (value, row, index) {
                                return $(this).formatterDate(value);
                        }},
                        { label: '财政下达文号', name: 'FiscalTitanict', width: 200, align: "left" },
                        { label: '财政下达(万元)', name: 'FiscalFunds', width: 150, align: "left" },
                        { label: '是否完工', name: 'IsComplete', width: 100, align: "left" },
                ],
                mainId:'Id',
                isPage: true
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            param.B_StartTime = B_startTime;
            param.B_EndTime = B_endTime;
            param.F_StartTime = F_startTime;
            param.F_EndTime = F_endTime;
            param.Name = Name;
            param.IssuedYear = IssuedYear;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
