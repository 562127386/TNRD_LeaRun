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
            ////设备信息
            //$('#TNRD_Facility_Base').jfGrid({
            //    headData: [
            //        {
            //            label: '设备分类', name: 'Classify', width: 100, align: 'left'
            //        },
            //        {
            //            label: '设备编码', name: 'Code', width: 100, align: 'left'
            //        },
            //        {
            //            label: '设备名称', name: 'Name', width: 100, align: 'left'
            //        },
            //        {
            //            label: '规格及型号', name: 'Model', width: 100, align: 'left'
            //        },
            //        {
            //            label: '数量', name: 'Quantity', width: 100, align: 'left'
            //        },
            //        {
            //            label: '单位', name: 'Unit', width: 100, align: 'left'
            //        },
            //        {
            //            label: '税率（%）', name: 'Rate', width: 100, align: 'left'
            //        },
            //        {
            //            label: '出厂单价（元）', name: 'Price', width: 100, align: 'left'
            //        },
            //        {
            //            label: '每一品目的出厂价（元）（及总价）', name: 'TotalPrice', width: 100, align: 'left'
            //        },
            //        {
            //            label: '税额（元）', name: 'Tax', width: 100, align: 'left'
            //        },
            //        {
            //            label: '每一目应缴税费（元）（及总税费）', name: 'TotalTax', width: 100, align: 'left'
            //        },
            //        {
            //            label: '含税单价（元）', name: 'TaxPrice', width: 100, align: 'left'
            //        },
            //        {
            //            label: '每一品目的含税价格（元）（及含税总价）', name: 'TotalTaxPrice', width: 100, align: 'left'
            //        },
            //        {
            //            label: '设备状态', name: 'EquipmentState', width: 100, align: 'left'
            //        },
            //        {
            //            label: '收货单位', name: 'ReceivingUnit', width: 100, align: 'left'
            //        },
            //        {
            //            label: '收货地址', name: 'ShippingAddress', width: 100, align: 'left'
            //        },
            //        {
            //            label: '货物描述', name: 'Description', width: 100, align: 'left'
            //        },
            //        {
            //            label: '财务组织', name: 'Financial', width: 100, align: 'left'
            //        },
            //        {
            //            label: '厂家', name: 'Customer', width: 100, align: 'left'
            //        },
            //        {
            //            label: '备注', name: 'Remark', width: 100, align: 'left'
            //        },
            //        {
            //            label: '支付数量', name: 'PayQuantity', width: 100, align: 'left'
            //        },
            //        {
            //            label: '入库时间', name: 'StorageTime', width: 100, align: 'left'
            //        },
            //        {
            //            label: '出库时间', name: 'OutboundTime', width: 100, align: 'left'
            //        },
            //    ],
            //    height: 290
            //});
            // 订单产品信息
            $('#productgird2').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/AdjunctDatails/GetList',
                headData: [
                    {
                        label: '附件名称', name: 'AdjunctName', width: 200, align: "left",
                        formatter: function (value, row, index) {
                            if (row.AdjunctName != "" && row.AdjunctName != null) {
                                return '<a id="FJ" style="color:blue;"  target="_blank" href="' + row.Url + '">' + row.AdjunctName + '</a>';
                            } else {
                                return "";
                            }
                        }
                    },
                    { label: '附件类型', name: 'AdjunctType', width: 200, align: "left" },
                    { label: '上传路径', name: 'Url', width: 300, align: "left" },
                    { label: '上传时间', name: 'UploadTime', width: 200, align: "left" },

                ],
                height: 180,
            });
            var param2 = { BindId: keyValue } || {};
            $('#productgird2').jfGridSet('reload', { queryJson: JSON.stringify(param2) });

            $('#productgird3').jfGrid({
                url: top.$.rootUrl + '/Wizsen_TNRD_Project/PayDatails/GetPageList',
                headData: [
                  
                    //{ label: '合同编码', name: 'PactCode', width: 150, align: "left" },
                    //{ label: '合同名称', name: 'PactName', width: 200, align: "left" },
                    //{ label: '合同类型', name: 'PactType', width: 150, align: "left" },
                    //{ label: '付款公司Id', name: 'PaymentCompanyId', width: 150, align: "left" },
                    //{ label: '乙方公司', name: 'PayCompany', width: 150, align: "left" },
                    {
                        label: '付款日期', name: 'PayDate', width: 200, align: "left",
                        formatter: function (value, row, index) {
                            return $(this).formatterDate(value);
                        }
                    },
                    { label: '入账金额', name: 'bookedAmount', width: 200, align: "left" },
                    { label: '付款金额', name: 'PayAmount', width: 200, align: "left" },
                    { label: '挂账金额', name: 'hangAmount', width: 200, align: "left" },
                    
                    //{ label: '付款批次', name: 'PayNo', width: 150, align: "left" },
                    //{ label: '付款类型', name: 'PayType', width: 150, align: "left" },
                    { label: '凭证号', name: 'VoucherNo', width: 200, align: "left" },
            //{ label: '付款金额类型', name: 'Type', width: 150, align: "left" },
                ],
                mainId: 'Id',
                isPage: true,
                height: 180
            });
            var param3 = { BindId: keyValue } || {};
            $('#productgird3').jfGridSet('reload', { queryJson: JSON.stringify(param3) });

            $("#lr_close").click(function () {
                learun.frameTab.closeCurrentTab();
            });
            // 关闭
            $('#close').on('click', function () {
                //acceptClick(1);
                learun.frameTab.close(learun.frameTab.iframeId);
            });
        },
        initData: function () {
            $.lrSetForm(top.$.rootUrl + '/Wizsen_TNRD_Project/Wizsen_TNRD_Pact/GetFormData?keyValue=' + keyValue, function (data) {
                for (var id in data) {
                    if (!!data[id].length && data[id].length > 0) {
                        $('#' + id).jfGridSet('refreshdata', data[id]);
                    }
                    else {
                        $('[data-table="' + id + '"]').lrSetFormData(data[id]);
                    }
                }
            });
        }
    };

    page.init();
}