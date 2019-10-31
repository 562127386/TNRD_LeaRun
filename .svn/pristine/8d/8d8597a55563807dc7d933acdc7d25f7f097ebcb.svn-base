/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-03-01 10:46
 * 描  述：设备列表
 */
var selectedRow;
var refreshGirdData;
var facilityId;
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
                var PacName = $('#PacName').val();
                var FacilityCode = $('#FacilityCode').val();
                var FacilityName = $('#FacilityName').val();
                if (learun.isNullOrSpace(PacName) && learun.isNullOrSpace(FacilityCode) && learun.isNullOrSpace(FacilityName)) {
                    page.search();
                    return;
                }
                //主表查询字段不为空时
                if (!learun.isNullOrSpace(PacName)) {
                    var par = {};
                    par.Name = PacName;
                    page.search(par);
                    return;
                }
                //查询子表字段，过滤主表数值
                var param = {};
                var queryParam = {};
                var sql = "select BindId from dbo.TNRD_Facility_Base where 1=1";
                queryParam.Code = FacilityCode;
                queryParam.Name = FacilityName;
                param.queryParam = queryParam;
                param.rowdatas = $('#gridtable').jfGridGet('rowdatas');
                var filterdata = learun.querySubTbData(sql, param);
                $('#gridtable').jfGridSet('refreshdata', filterdata);
            });
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            //查看
            $("#lr_Browse").on('click', function () {
                if (learun.checkrow(facilityId, '请选中设备数据操作')) {
                    var keyValue = $("#" + facilityId).jfGridValue('Id');
                    if (learun.checkrow(keyValue, '请选中设备数据操作')) {
                        learun.frameTab.open({ F_ModuleId: 'pact_browse', F_Icon: 'fa fa-file-text-o', F_FullName: '设备查看', F_UrlAddress: top.$.rootUrl + '/Wizsen_TNRD_Project/FacilityBase/Browse?keyValue=' + keyValue });
                    }
                }
            });
            //添加附件
            $("#lr_Uploader").on('click', function () {
                if (learun.checkrow(facilityId, '请选中设备数据操作')) {
                    var keyValue = $("#" + facilityId).jfGridValue('Id');
                    if (learun.checkrow(keyValue, '请选中设备数据操作')) {
                        var par = {};
                        var currentId = learun.frameTab.iframeId;
                        par.F_ModuleId = currentId + "_Uploader";
                        par.F_FullName = "设备附件";
                        par.F_UrlAddress = '/Wizsen_TNRD_Project/FacilityBase/FacilityAdjunctIndex?keyValue=' + keyValue;
                        learun.frameTab.open(par);
                    }
                }
            });

        },
        initGird: function () {
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/GetPageList',
                width: $(window).height() - 800,
                headData: [
                    //{ label: "项目编码", name: "ProjectNo", width: 100, align: "left" },
                    { label: "项目名称", name: "ProjectName", width: 100, align: "left" },
                    { label: "合同类型", name: "contractType", width: 100, align: "left" },
                    { label: "合同编码", name: "Code", width: 100, align: "left" },
                    { label: "合同名称", name: "Name", width: 100, align: "left" },
                    { label: "合同状态", name: "contractStatus", width: 100, align: "left" },
                    { label: "部门", name: "department", width: 100, align: "left" },
                    { label: "人员", name: "employee", width: 100, align: "left" },
                    { label: "供应商", name: "supplier", width: 100, align: "left" },
                    { label: "采购组织", name: "purchaseOrg", width: 100, align: "left" },
                    { label: "币种", name: "currency", width: 100, align: "left" },
                    { label: "预付款", name: "Amount", width: 100, align: "left" },
                    { label: "预付款限额", name: "budgetRestrict", width: 100, align: "left" },
                    { label: "发生日期", name: "SignDate", width: 100, align: "left" },
                    { label: "计划终止日期", name: "abortDate", width: 100, align: "left" },
                    { label: "付款类型", name: "PayType", width: 100, align: "left" },
                ],
                mainId: 'Id',
                isPage: true,
                onSelectRow: function (rowdata) {
                    $("#jfgrid_left_gridtable >.jfgrid-data-cell").removeClass("jfgrid-selected");
                    $("#jfgrid_right_gridtable >.jfgrid-data-cell").removeClass("jfgrid-selected");

                },
                isSubGrid: true,             // 是否有子表
                subGridExpanded: function (id, rowdate) {
                    facilityId = id;
                    SecondGrid(id, rowdate);
                }
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            param.isCheck = true;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
function SecondGrid(id, rowdate) {
    $('#' + id).jfGrid({
        url: top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/GetTNRD_Facility_BaseList',
        headData: [

            {
                label: '设备分类', name: 'Classify', width: 100, align: 'left'
            },
            {
                label: '设备编码', name: 'Code', width: 100, align: 'left'
            },
            {
                label: '设备名称', name: 'Name', width: 100, align: 'left'
            },
            {
                label: '规格及型号', name: 'Model', width: 100, align: 'left'
            },
            {
                label: '数量', name: 'Quantity', width: 100, align: 'left'

            },
            {
                label: '单位', name: 'Unit', width: 100, align: 'left'
            },
            {
                label: '税率（%）', name: 'Rate', width: 100, align: 'left'
            },
            {
                label: '出厂单价（元）', name: 'Price', width: 100, align: 'left'

            },
            {
                label: '每一品目的出厂价（元）（及总价）', name: 'TotalPrice', width: 100, align: 'left'
            },
            {
                label: '税额（元）', name: 'Tax', width: 100, align: 'left'
            },
            {
                label: '每一目应缴税费（元）（及总税费）', name: 'TotalTax', width: 100, align: 'left'
            },
            {
                label: '含税单价（元）', name: 'TaxPrice', width: 100, align: 'left'
            },
            {
                label: '每一品目的含税价格（元）（及含税总价）', name: 'TotalTaxPrice', width: 100, align: 'left'
            },
            {
                label: '设备状态', name: 'EquipmentState', width: 100, align: 'left'
            },
            {
                label: '收货单位', name: 'ReceivingUnit', width: 100, align: 'left'
            },
            {
                label: '收货地址', name: 'ShippingAddress', width: 100, align: 'left'
            },
            {
                label: '货物描述', name: 'Description', width: 100, align: 'left'
            },
            {
                label: '财务组织', name: 'Financial', width: 100, align: 'left'
            },
            {
                label: '厂家', name: 'Customer', width: 100, align: 'left'
            },
            {
                label: '备注', name: 'Remark', width: 100, align: 'left'
            },
            {
                label: '支付数量', name: 'PayQuantity', width: 100, align: 'left'
            },
            {
                label: '入库时间', name: 'StorageTime', width: 100, align: 'left'
            },
            {
                label: '出库时间', name: 'OutboundTime', width: 100, align: 'left'
            },
        ],
        mainId: 'Id'
    });
    var param3 = { keyValue: rowdate.Id } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param3) });
}