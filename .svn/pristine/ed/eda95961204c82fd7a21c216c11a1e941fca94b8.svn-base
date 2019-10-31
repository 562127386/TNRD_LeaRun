/*
 * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：力软-前端开发组
 * 日 期：2017.04.18
 * 描 述：新增表单	
 */

var keyValue = request('keyValue');
var Code = request('Code');

var bootstrap = function ($, learun) {
    "use strict";

    // 保存数据
    var acceptClick = function (type) {// 0保存并新增 1保存
        if (!$('.lr-layout-wrap').lrValidform()) {
            return false;
        }
        var formData = $('.lr-layout-wrap').lrGetFormData(keyValue);
        var productData = [];
        var productDataTmp = $('#productgird').jfGridGet('rowdatas');

        for (var i = 0, l = productDataTmp.length; i < l; i++) {
            if (!!productDataTmp[i]['F_ProductName']) {
                productData.push(productDataTmp[i]);
            }
        }

        var postData = {
            crmOrderJson: JSON.stringify(formData),
            crmOrderProductJson: JSON.stringify(productData)
        };

        learun.layerConfirm('注：您确认要保存此操作吗？', function (res, index) {
            if (res) {
                $.lrSaveForm(top.$.rootUrl + '/LR_CRMModule/CrmOrder/SaveForm?keyValue=' + keyValue, postData, function (res) {
                    if (res.code == 200) {
                        if (type == 0) {
                            window.location.href = top.$.rootUrl + '/LR_CRMModule/CrmOrder/Form';
                        }
                        else {
                            learun.frameTab.close('order_add');
                        }
                    }
                });
                top.layer.close(index); //再执行关闭  
            }
        });
    };

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


            // 订单产品信息
            $('#productgird').jfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/AdjunctDatails/GetList',
                headData: [
                    //{ label: 'Id', name: 'Id', width: 200, align: "left" },
                    //{ label: 'BindId', name: 'BindId', width: 200, align: "left" },
                    { label: '附件流程节点', name: 'Process', width: 200, align: "left" },
                    { label: '关联编号', name: 'OrderNo', width: 200, align: "left" },
                    { label: '附件名称', name: 'AdjunctName', width: 200, align: "left" },
                    { label: '附件名称', name: 'AdjunctType', width: 200, align: "left" },
                    { label: '附件路径', name: 'Url', width: 200, align: "left" },
                    { label: '上传时间', name: 'UploadTime', width: 200, align: "left" },
                    { label: '上传时间', name: 'FileType', width: 200, align: "left" },
                    //{ label: '创建日期', name: 'CreateDate', width: 200, align: "left" },
                    //{ label: '创建人Id', name: 'CreateUserId', width: 200, align: "left" },
                    //{ label: '创建人', name: 'CreateUserName', width: 200, align: "left" },
                    //{ label: '修改日期', name: 'UpdateDate', width: 200, align: "left" },
                    //{ label: '修改人Id', name: 'UpdateUserId', width: 200, align: "left" },
                    //{ label: '修改人', name: 'UpdateUserName', width: 200, align: "left" },
                ],
                //isEdit: true,
                height: 290
                //isMultiselect:true
            });
            var param = { keyword: keyValue } || {};
            $('#productgird').jfGridSet('reload', { queryJson: JSON.stringify(param) });


            // 订单产品信息
            $('#productgird2').jfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/PactAssort/GetList',
                headData: [
                    //{ label: '主键', name: 'Id', width: 200, align: "left" },
                    //{ label: 'BindId', name: 'BindId', width: 200, align: "left" },
                    //{ label: '项目编码', name: 'ProjectNo', width: 200, align: "left" },
                    { label: '项目名称', name: 'ProjectName', width: 200, align: "left" },
                    { label: '合同编码', name: 'Code', width: 200, align: "left" },
                    { label: '合同名称', name: 'Name', width: 200, align: "left" },
                    { label: '合同金额', name: 'Amount', width: 200, align: "left" },
                    { label: '付款金额', name: 'PaidAmount', width: 200, align: "left" },
                    { label: '未付金额', name: 'UnPaidAmount', width: 200, align: "left" },
                    { label: '支付方式', name: 'PayType', width: 200, align: "left" },
                    //{ label: '甲方编码', name: 'ACode', width: 200, align: "left" },
                    { label: '甲方名称', name: 'AName', width: 200, align: "left" },
                    //{ label: '乙方编码', name: 'BCode', width: 200, align: "left" },
                    { label: '乙方名称', name: 'BName', width: 200, align: "left" },
                    { label: '签订日期', name: 'SignDate', width: 200, align: "left" },
                    { label: '签订地点', name: 'SignPlace', width: 200, align: "left" },
                    { label: '资金来源', name: 'FundSource', width: 200, align: "left" },
                    //{ label: '合同文本', name: 'DEC', width: 200, align: "left" },
                    //{ label: '备注', name: 'Remark', width: 200, align: "left" },
                    //{ label: '创建日期', name: 'CreateDate', width: 200, align: "left" },
                    //{ label: '创建用户账户', name: 'CreateUserId', width: 200, align: "left" },
                    //{ label: '创建用户名称', name: 'CreateUserName', width: 200, align: "left" },
                    //{ label: '最后修改时间', name: 'UpdateDate', width: 200, align: "left" },
                    //{ label: '最后修改用户', name: 'UpdateUserId', width: 200, align: "left" },
                    //{ label: '最后修改用户名称', name: 'UpdateUserName', width: 200, align: "left" },
                ],
                height: 290
            });
            var param2 = { keyword: Code } || {};
            $('#productgird2').jfGridSet('reload', { queryJson: JSON.stringify(param2) });

            // 订单产品信息
            $('#productgird3').jfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityBase/GetList',
                headData: [
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
                    { label: '每一目应缴税费（元）（及总税费）', name: 'TotalTax', width: 200, align: "left" },
                    { label: '每一品目的含税价格（元）（及含税总价）', name: 'TotalTaxPrice', width: 200, align: "left" },
                    { label: '设备状态', name: 'EquipmentState', width: 200, align: "left" },
                    { label: '收货单位', name: 'ReceivingUnit', width: 200, align: "left" },
                    { label: '收货地址', name: 'ShippingAddress', width: 200, align: "left" },
                    { label: '货物描述', name: 'Description', width: 200, align: "left" },
                    { label: '财务组织', name: 'Financial', width: 200, align: "left" },
                    { label: '厂家', name: 'Customer', width: 200, align: "left" },
                    { label: '支付数量', name: 'PayQuantity', width: 200, align: "left" },
                ],
                height: 290
            });
            var param3 = { keyword: Code } || {};
            $('#productgird3').jfGridSet('reload', { queryJson: JSON.stringify(param3) });

            // 订单产品信息
            $('#productgird4').jfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/GetAssSum',
                headData: [
                    { label: '项目名称', name: 'ProjectName', width: 200, align: "left" },
                    { label: '已付金额', name: 'paidAmount', width: 200, align: "left" },
                    { label: '未付金额', name: 'unpaidAmount', width: 200, align: "left" },
                    { label: '合同总金额', name: 'Amount', width: 200, align: "left" },
                ],
                height: 290
            });
            var param4 = { keyword: Code } || {};
            $('#productgird4').jfGridSet('reload', { keyValue: JSON.stringify(param4) });

            // 关闭
            $('#close').on('click', function () {
                //acceptClick(1);
                learun.frameTab.close(learun.frameTab.iframeId);
            });
        },
        initData: function () {
            if (!!keyValue) {
                $.lrSetForm(top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/GetFormData?keyValue=' + keyValue, function (data) {//
                    $('.lr-layout-wrap').formInitialize(data);
                    $('#productgird').jfGridSet('refreshdata', data.orderProductData);
                });
            }
        }
    };
    
    page.init();
}