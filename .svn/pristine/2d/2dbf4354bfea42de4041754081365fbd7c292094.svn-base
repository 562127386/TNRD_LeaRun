/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn) 
 * Copyright (c) 2013-2018 上海力软信息技术有限公司 
 * 创建人：超级管理员 
 * 日  期：2019-01-28 11:31 
 * 描  述：采购合同 
 */
var acceptClick;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var page = {
        init: function () {
            $('.lr-form-wrap').lrscroll();
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#Type').lrDataItemSelect({ code: 'PactType' });
            $('#State').lrDataItemSelect({ code: 'PactState' });
            $('#Package').lrDataItemSelect({ code: 'Package' });
            $('#XM_Facility_Base').jfGrid({
                headData: [
                    {
                        label: '项目名称', name: 'ProjectName', width: 100, align: 'left'
                        , edit: {
                            type: 'select',
                            datatype: 'dataItem',
                            code: 'Package'
                        }
                    },
                {
                    label: '设备编码', name: 'Code', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '设备名称', name: 'Name', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '设备分类', name: 'Classify', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '规格及型号', name: 'Model', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '数量', name: 'Quantity', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '单位', name: 'Unit', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '出厂价格（元）', name: 'Price', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '税率（%）', name: 'Rate', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '每一目出厂价格（元）', name: 'TotalPrice', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '每一目应缴税费（元）', name: 'TotalTax', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '每一目含税价格（元）', name: 'TotalTaxPrice', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '厂家', name: 'Customer', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '财务组织', name: 'Financial', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '收货单位', name: 'ReceivingUnit', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '收货地址', name: 'ShippingAddress', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '货物描述', name: 'Description', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                },
                {
                    label: '备注', name: 'Remark', width: 100, align: 'left'
                    , edit: {
                        type: 'input'
                    }
                }, 
                ],
                isEdit: true,
                height: 260 
            }); 
        },
        initData: function () {
            if (!!keyValue) {
                $.lrSetForm(top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/GetFormData?keyValue=' + keyValue, function (data) {
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
        } 
    };



    // 保存数据
    $('#lr_submit').on('click', function () {
        acceptClick();
        //learun.frameTab.close(learun.frameTab.iframeId);
    });

    // 关闭
    $('#lr_close').on('click', function () {
        //acceptClick(1);
        learun.frameTab.close(learun.frameTab.iframeId);
    });

// 保存数据 
acceptClick = function (callBack) {
    if (!$('body').lrValidform()) {
        return false;
    }
    var postData = {};
    postData.strEntity = JSON.stringify($('[data-table="XM_Pact_Purchase"]').lrGetFormData());
    postData.strxM_Facility_BaseList = JSON.stringify($('#XM_Facility_Base').jfGridGet('rowdatas'));
    $.lrSaveForm(top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/SaveForm?keyValue=' + keyValue, postData, function (res) {
        // 保存成功后才回调 
        if (!!callBack) {
            callBack();
        }
    });
};
page.init(); 
} 