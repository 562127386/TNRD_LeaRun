/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 18:03
 * 描  述：付款明细表
 */
var acceptClick;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = learun.frameTab.currentIframe().selectedRow;
    $('#PayType').lrDataItemSelect({
        code: 'PayWay',
        maxHeight: 230
    });
    var page = {
        init: function () {
            page.initData();
            page.bind();
        },
        bind: function () {
            $("#lr_add").click(function () {
                learun.layerInitForm({
                    isMultiselect: true,
                    gridWidth: 600,//grid宽度
                    gridHeight: 400,//grid高度
                    url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityBase/GetList',
                    headData: [
                        { label: '项目编码', name: 'ProjectNo', width: 200, align: "left" },
                        { label: '项目名称', name: 'ProjectName', width: 200, align: "left" },
                        { label: '采购合同编号', name: 'PurchaseNo', width: 200, align: "left" },
                        { label: '采购合同', name: 'PurchaseName', width: 200, align: "left" },
                        { label: '设备包', name: 'Package', width: 200, align: "left" },
                        { label: '设备分类', name: 'Classify', width: 200, align: "left" },
                        { label: '设备编码', name: 'Code', width: 200, align: "left" },
                        { label: '设备名称', name: 'Name', width: 200, align: "left" },
                        { label: '规格及型号', name: 'Model', width: 200, align: "left" },
                        { label: '数量', name: 'Quantity', width: 200, align: "left" },
                        { label: '单位', name: 'Unit', width: 200, align: "left" },
                        { label: '税率（%）', name: 'Rate', width: 200, align: "left" },
                        { label: '出厂单格（元）', name: 'Price', width: 200, align: "left" },
                        { label: '每一品目的出厂价（元）（及总价）', name: 'TotalPrice', width: 200, align: "left" },
                        { label: '税额（元）', name: 'Tax', width: 200, align: "left" },
                        { label: '每一目应缴税费（元）（及总税费）', name: 'TotalTax', width: 200, align: "left" },
                        { label: '含税单价（元）', name: 'TaxPrice', width: 200, align: "left" },
                        { label: '每一品目的含税价格（元）（及含税总价）', name: 'TotalTaxPrice', width: 200, align: "left" },
                        { label: '设备状态', name: 'EquipmentState', width: 200, align: "left" },
                        { label: '收货单位', name: 'ReceivingUnit', width: 200, align: "left" },
                        { label: '收货地址', name: 'ShippingAddress', width: 200, align: "left" },
                        { label: '货物描述', name: 'Description', width: 200, align: "left" },
                        { label: '财务组织', name: 'Financial', width: 200, align: "left" },
                        { label: '厂家', name: 'Customer', width: 200, align: "left" },
                        { label: '备注', name: 'Remark', width: 200, align: "left" },
                        { label: '支付数量', name: 'PayQuantity', width: 200, align: "left" },
                    ],
                    select: function (data) {
                        var selectData = $('#gridtable').jfGridGet("rowdatas");
                        for (var i = 0; i < selectData.length; i++) {
                            if (selectData[i]["Code"] === data.Code) {
                                learun.alert.error('不能选择重复编码数据');
                                return;
                            }
                        }
                        var row = {};
                        row.Code = data.Code;
                        row.Name = data.Name;
                        row.Type = data.Type;
                        row.Organiz = data.Organiz;
                        row.Package = data.Package;
                        row.EndTime = data.EndTime;
                        row.Supplier = data.Supplier;
                        row.Currency = data.Currency;
                        row.Amount = data.Amount;
                        $("#gridtable").jfGridSet("addRow", row);
                    },
                    unSelect: function (data) {
                        var selectData = $('#gridtable').jfGridGet("rowdatas");
                        for (var i = 0; i < selectData.length; i++) {
                            if (selectData[i]["Code"] === data.Code) {
                                $("#gridtable").jfGridSet("removeSpeRow", { "key": "Code", "value": data.Code});
                            }
                        }
                      
                    }
                })
            });
            $('#gridtable').jfGrid({
                width: 600,//grid宽度
                height: 150,//grid高度
                headData: [
                    { label: '项目编码', name: 'ProjectNo', width: 200, align: "left" },
                    { label: '项目名称', name: 'ProjectName', width: 200, align: "left" },
                    { label: '采购合同编号', name: 'PurchaseNo', width: 200, align: "left" },
                    { label: '采购合同', name: 'PurchaseName', width: 200, align: "left" },
                    { label: '设备包', name: 'Package', width: 200, align: "left" },
                    { label: '设备分类', name: 'Classify', width: 200, align: "left" },
                    { label: '设备编码', name: 'Code', width: 200, align: "left" },
                    { label: '设备名称', name: 'Name', width: 200, align: "left" },
                    { label: '规格及型号', name: 'Model', width: 200, align: "left" },
                    { label: '数量', name: 'Quantity', width: 200, align: "left" },
                    { label: '单位', name: 'Unit', width: 200, align: "left" },
                    { label: '税率（%）', name: 'Rate', width: 200, align: "left" },
                    { label: '出厂单格（元）', name: 'Price', width: 200, align: "left" },
                    { label: '每一品目的出厂价（元）（及总价）', name: 'TotalPrice', width: 200, align: "left" },
                    { label: '税额（元）', name: 'Tax', width: 200, align: "left" },
                    { label: '每一目应缴税费（元）（及总税费）', name: 'TotalTax', width: 200, align: "left" },
                    { label: '含税单价（元）', name: 'TaxPrice', width: 200, align: "left" },
                    { label: '每一品目的含税价格（元）（及含税总价）', name: 'TotalTaxPrice', width: 200, align: "left" },
                    { label: '设备状态', name: 'EquipmentState', width: 200, align: "left" },
                    { label: '收货单位', name: 'ReceivingUnit', width: 200, align: "left" },
                    { label: '收货地址', name: 'ShippingAddress', width: 200, align: "left" },
                    { label: '货物描述', name: 'Description', width: 200, align: "left" },
                    { label: '财务组织', name: 'Financial', width: 200, align: "left" },
                    { label: '厂家', name: 'Customer', width: 200, align: "left" },
                    { label: '备注', name: 'Remark', width: 200, align: "left" },
                    { label: '支付数量', name: 'PayQuantity', width: 200, align: "left" },
                ]

            });
        },
        initData: function () {
            if (!!selectedRow) {
                //$('#form').lrSetFormData(selectedRow);
                $('#PactCode').val(selectedRow.Code);
                $('#PactName').val(selectedRow.Name);
                $('#BindId').val(keyValue);
                $('#PactType').val(selectedRow.Type);
                $('#PaymentCompanyId').val(selectedRow.Package);
                $('#PayCompany').val(selectedRow.Supplier);
            }
        }
    };
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('#form').lrValidform()) {
            return false;
        }
        var postData = $('#form').lrGetFormData();
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}
