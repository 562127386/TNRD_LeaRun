/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:22
 * 描  述：附件信息表
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            //page.initTree();
            //page.initGird();
            //page.bind();
        },
        bind: function () {
            //绑定公司tab页
            var list2 = [];
            learun.clientdata.getAllAsync('dataItem', {
                code: "CompanyName",
                callback: function (dataes) {
                    $.each(dataes, function (_index, _item) {
                        list2.push({ id: _item.text, text: _item.value, title: _item.text, k: _index });
                    });
                    for (var i = 0; i < list2.length; i++) {
                        if (i == 0) {
                            $("ul.nav-tabs").append("<li role=\"presentation\" class=\"active\"><a href=\"#" + list2[i].id + "\" data-toggle=\"tab\">" + list2[i].id + "</a></li>");
                            $(".tab-content").append("<div class=\"tab-pane fade in active\" id=\"" + list2[i].id + "\"><div id=\"gridtable\"></div></div>");
                            page.initGird("gridtable", list2[i].id);
                        }
                        else {
                            $("ul.nav-tabs").append("<li role=\"presentation\" ><a href=\"#" + list2[i].id + "\" data-toggle=\"tab\">" + list2[i].id + "</a></li>");
                            $(".tab-content").append("<div class=\"tab-pane fade \" id=\"" + list2[i].id + "\"><div id=\"gridtable" + i + "\"></div></div>");
                            //js闭包
                            (function () {
                                var temp = i;
                                $("ul.nav-tabs li:eq(" + i + ") a").click(function () {
                                    page.initGird("gridtable" + temp, list2[temp].id);
                                })
                            })();
                        }
                    }
                }
            });
        

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
                    id: 'Adjunct',
                    title: '新增',
                    url: top.$.rootUrl + '/Wizsen_NE_Project/AdjunctDatails/Form',
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
                        id: 'Adjunct',
                        title: '编辑',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/AdjunctDatails/Form?keyValue=' + keyValue,
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
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/AdjunctDatails/DeleteForm', { keyValue: keyValue }, function () {
                            });
                        }
                    });
                }
            });
        },
        initGird: function (id, companyName) {
            $('#' + id).jfGrid({
                height: 400,
                width: 500,
                url: top.$.rootUrl + '/Wizsen_NE_Project/AdjunctDatails/GetPageList',
                headData: [
                    { label: 'Id', name: 'Id', width: 200, align: "left" },
                    { label: '附件流程节点', name: 'Process', width: 200, align: "left" },
                    { label: '关联编号', name: 'OrderNo', width: 200, align: "left" },
                    { label: '附件路径', name: 'Url', width: 200, align: "left" },
                    { label: '附件名称', name: 'AdjunctName', width: 200, align: "left" },
                    { label: '附件类型', name: 'AdjunctType', width: 200, align: "left" },


                ],
                mainId: '',
                isPage: true
            });
            var param = {};
            param.id = id;
            param.companyName = companyName;
            page.search(param);
        },
        search: function (param) {
            param = param || {};

            $('#' + param.id).jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        $("ul.nav-tabs li").removeClass("active");
        $("ul.nav-tabs li:eq(0)").addClass("active");
        $(".tab-content div").removeClass("in active");
        $(".tab-content div:eq(0)").addClass("in active");
        var list2 = [];
        learun.clientdata.getAllAsync('dataItem', {
            code: "CompanyName",
            callback: function (dataes) {
                $.each(dataes, function (_index, _item) {
                    list2.push({ id: _item.text, text: _item.value, title: _item.text, k: _index });
                });
            }
        });
        var param = {};
        param.companyName = list2[0].id;
        param.id = "gridtable";
        page.search(param);
    };
    page.bind();
    //page.init();
}
