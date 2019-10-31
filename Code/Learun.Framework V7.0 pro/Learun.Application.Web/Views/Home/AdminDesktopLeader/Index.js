/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:01
 * 描  述：项目管理
 */
var selectedRow;
var refreshGirdData;
var lr;
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            lr = learun;
            gridtable();
        }
    };
    page.init();
}





function gridtable() {
    $("#gridtable").jfGrid(
        {
            height: 196,
            //width: $(window).width()*0.65,
            url: top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/GetList',
            headData: [
                {
                    label: "设备包", name: "Package", width: 90, align: 'left',
                    formatter: function (cellvalue, options, rowObject) {
                        return "<a  class='btn btn-primary btn-sm'  href='javascript:void(0)'  onclick=aclick('" + options.Id + "')>" + cellvalue + "</a>";
                    }
                },
                { label: "合同名称", name: "Name", width: 220, align: 'left' },
                { label: "合同金额（元）", name: "Amount", width: 150, align: 'left' },
                { label: "已付金额（元）", name: "PaidAmount", width: 150, align: 'left' },
                { label: "未付金额（元）", name: "UnPaidAmount", width: 150, align: 'left' },
                {
                    label: "支付比例", name: "PayProportion", width: 150, align: 'left',
                    formatter: function (cellvalue, options, rowObject) {
                        var paid = parseFloat(options.PaidAmount) / parseFloat(options.Amount) * 100;
                        var per = paid.toFixed(2);
                        //return per + "%";
                        return '<div class="progress">'
                            + '<div class="progress-bar" role="progressbar" aria-valuenow="' + per + '"'
                            + ' aria-valuemin="0" aria-valuemax="100" style="width: ' + per + '%;">'
                            + ' <span style = "color: black">' + per + '% 完成</span>'
                            + '</div>'
                            + '</div>'
                    }
                },
                { label: "供应商", name: "Supplier", width: 150, align: 'left' },
                { label: "合同签订日期", name: "SigningDate", width: 150, align: 'left' },
                { label: "合同状态", name: "HTState", width: 150, align: 'left' },
            ],

            //sortname: 'CreateDate',
            //styleUI: 'Bootstrap',
            //viewrecord: true,
            //rowNum: 30,
            //caption: "亚行项目",
            //rowList: [10, 20, 30],
            //pager: '#pager10',
            //viewrecords: true,
            //sortorder: "asc",
            //multiselect: false,
            //caption: "Invoice Header",
            onSelectRow: function (rowData) {
                //var rowData = $("#gridtable").jfGridGet("rowdata");
                var queryJson = JSON.stringify({
                    keyword: rowData.Package
                });
                // if (ids == null) {
                //   ids = 0;
                //    if ($("#gridtable2").jfGrid('getGridParam',
                //        'records') > 0) {
                //        $("#gridtable2").jfGrid(
                //            'setGridParam',
                //            {
                //                url: "/TN_XM/TN_XM/GetGridJson3?queryJson="
                //                    + queryJson,
                //                page : 1
                //            });
                //        $("#gridtable2").jfGrid('setCaption',
                //            "亚行项目: " + ids).trigger(
                //            'reloadGrid');
                //    }
                //} else {
                $("#gridtable2").jfGridSet('reload', { queryJson });
                //$("#gridtable2").jfGrid('setCaption',
                //    "亚行项目: " + ids).trigger(
                //    'reloadGrid');

                //}
            },
            //  ondblClickRow: function (ids) {
            //      var rowData = $("#gridtable").getRowData(ids);
            //      var parentId = top.$.jfinetab.getCurrentTabId();
            //      top.$.jfinetab.addTabContent("/TN_XM/TN_HT_CG/Details?keyValue=" + rowData.Id, "采购合同管理--查看", parentId + "_edit", parentId);
            //}


        });
    var param = { keyword: '' } || {};
    $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });

    $("#gridtable").jfGrid('navGrid', '#gridPager', {
        add: false,
        edit: false,
        del: false
    });
    $("#gridtable2").jfGrid({
        height: 285,
        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/GetList',
        headData: [

            { label: "主项目名称", name: "BaseName", width: 150, align: 'left' },

            { label: "子项目名称", name: "BaseSubName", width: 150, align: 'left' },

            { label: "项目实施内容", name: "Name", width: 150, align: 'left' },

            { label: "所属公司", name: "CompanyName", width: 150, align: 'left' },

            { label: "项目状态", name: "ProjectState", width: 150, align: 'left' },

            { label: "亚行资金（元）", name: "TaxTotal", width: 100, align: 'left' },

            { label: "配套资金（元）", name: "Amount", width: 100, align: 'left' },

            {
                label: "项目总投资（元）", name: "sumAmount", width: 100, align: 'left',
                formatter: function (cellvalue, options, rowObject) {
                    var sum = parseFloat(options.Amount) + parseFloat(options.TaxTotal);
                    return sum.toFixed(2);
                }
            },

        ],
        //rowNum: 200,
        //rowList: [10, 20, 30],
        ////pager: '#gridPager2',
        //sortname: 'CreateDate',
        //rownumbers: true ,
        //viewrecords : true,
        //sortorder : "asc",
        //multiselect: false,
        //caption: "亚行项目",
        onSelectRow: function (rowData) {
            //var rowData = $("#gridtable2").getRowData(ids);
            //   var parentId = top.$.jfinetab.getCurrentTabId();
            //top.$.jfinetab.addTabContent("/TN_XM/TN_XM/Details2?keyValue=" + rowData.Id + "&Code=" + rowData.Code, "项目信息", parentId + "_edit", parentId);
            var par = {};
            var currentId = lr.frameTab.iframeId;
            par.F_ModuleId = currentId + "_edit";
            par.F_FullName = "项目信息";
            par.F_UrlAddress = '/Wizsen_NE_Project/ProjectDatails/Detail?keyValue=' + rowData.Id + '&Code=' + rowData.Code;
            lr.frameTab.open(par);
        }
        //onRenderComplete: function () {
        //    var rowIds = $('#gridtable2').jqGrid('getDataIDs');
        //    var sum = 0
        //    for (var i = 0; i < rowIds.length; i++) {
        //        var row = $('#gridtable2').getRowData(rowIds[i]);
        //        sum += parseFloat(row.TaxTotal);
        //    }
        //    var id = $('#gridtable').jqGrid('getGridParam', 'selrow');
        //    if (id != undefined && id != null && id != "") {
        //         var ht = sum.toFixed(2);
        //         $("#gridtable").setCell(id, 'Amount', ht);
        //    }else{
        //        return false;
        //    }
        //}

    })
    var param2 = { keyword: '' } || {};
    $('#gridtable2').jfGridSet('reload', { queryJson: JSON.stringify(param2) });
    //$("#ms1").click(function() {
    //    var s;
    //    s = $("#list10_d").jqGrid('getGridParam', 'selarrrow');
    //    alert(s);
    //});
    //$("#gridtable").setGridWidth($(window).width() - 6);
    //$("#gridtable2").setGridWidth($(window).width() - 6);
}


function gridtable_pxm() {
    var queryJson = {};
    queryJson.ParentName = "0";
    var $gridtable = $("#gridtable_pxm");
    $gridtable.dataGrid({
        url: "/TN_XM/TN_XMBase/GetProjectGridJson",
        height: 196,
        postData: { queryJson: JSON.stringify(queryJson) },
        colModel: [

            { label: "主键", name: "Id", width: 150, align: 'left', hidden: true },

            { label: "BindId", name: "BindId", width: 150, align: 'left', hidden: true },
            {
                label: "主项目名称", name: "ParentName", width: 150, align: 'left', hidden: true, formatter: function (cellvalue, options, rowObject) {
                    if (cellvalue == "0") {
                        return "无"
                    } else {
                        return cellvalue;
                    }
                }
            },
            { label: "编码", name: "Code", width: 100, align: 'left', hidden: true },

            { label: "子项目名称", name: "Name", width: 300, align: 'left' },

            { label: "项目描述", name: "DEC", width: 150, align: 'left', hidden: true },

            { label: "备注", name: "Remark", width: 150, align: 'left', hidden: true },

            { label: "创建日期", name: "CreateDate", width: 100, align: 'left', hidden: true },

            { label: "创建用户", name: "CreateUserName", width: 100, align: 'left', hidden: true }

        ],
        pager: "#gridPager_pxm",
        sortname: 'CreateDate desc',
        rownumbers: true,
        rowNum: 200,
        rowList: [10, 20, 30],
        viewrecords: true,
        onSelectRow: function (ids) {
            var rowData = $("#gridtable_pxm").getRowData(ids);
            var parentId = top.$.jfinetab.getCurrentTabId();
            top.$.jfinetab.addTabContent("/TN_XM/TN_XMBase/Details?keyValue=" + rowData.Id + "&Code=" + rowData.Code, "项目流程事记", parentId + "_edit", parentId);
        },
    });
    //$gridtable.setGridWidth($(window).width() - 36);
}


function aclick(keyValue) {
    var par = {};
    var currentId = lr.frameTab.iframeId;
    par.F_ModuleId = currentId + "_edit";
    par.F_FullName = "采购合同";
    par.F_UrlAddress = '/Wizsen_NE_Project/PactPurchase/Detail?keyValue=' + keyValue;
    lr.frameTab.open(par);
}
