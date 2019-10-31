/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:01
 * 描  述：项目管理
 */
var acceptClick;
var keyValue = request('keyValue');
var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = learun.frameTab.currentIframe().selectedRow;
    $('#CompanyName').lrDataItemSelect({
        code: 'Company',
        maxHeight: 230
    });
    $('#CapitalSource').lrDataItemSelect({
        code: 'ProjectCapitalSource',
        maxHeight: 230
    });
    $('#Package').lrDataItemSelect({
        code: 'Package',
        maxHeight: 230
    });
    $('#Node').lrDataItemSelect({
        code: 'ProjectType2',
        maxHeight: 230
    });
    var dfop = {
        type: 'tree',
        // 展开最大高度
        //maxHeight: 200,
        // 是否允许搜索
        //allowSearch: true,
        // 访问数据接口地址
        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectBase/GetTreeSelect',
        value: "value",
        text: "value",
        id: "value",
        title: "value",
        // 访问数据接口参数
        param: { parentId: '0' },
        select: function (items) {
            var BaseSubCode = items.id; //子项目编码
            var BaseCode = items.parentId; //主项目编码
            if (items.parent) {
                var BaseName = items.parent.text; //主项目名称
                $("#BaseName").val(BaseName);
            }
           
            $("#BaseSubCode").val(BaseSubCode);
            $("#BaseCode").val(BaseCode);
    
        }
    }
    $('#BaseSubName').lrselect(dfop);
    var page = {
        init: function () {
            $('.lr-form-wrap').lrscroll();
            page.bind();
            page.initData();
        },
        bind: function () {
            $('#DataSource').lrDataItemSelect({ code: 'DataSource' });
            $('#XM_Project_Details_Estimate').jfGrid({
                headData: [
                    {
                        label: '数据来源', name: 'DataSource', width: 100, align: 'left'
                        , edit: {
                            type: 'select',
                            datatype: 'dataItem',
                            code: 'DataSource'
                        }
                    },
                    {
                        label: '文号', name: 'Number', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '下达时间', name: 'GiveTime', width: 100, align: 'left'
                        , edit: {
                            type: 'datatime',
                            dateformat: '1'
                        }
                    },
                    {
                        label: '热网', name: 'heat', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '一次网', name: 'ANet', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '换热站', name: 'HotNet', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '二次网', name: 'TwoNet', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '交易服务费', name: 'DealFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '招标代理费', name: 'TenderFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '造价咨询费', name: 'CostFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '施工图审查费', name: 'WorkMapFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '其他费（前期费）', name: 'AgoOtherFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '勘察费', name: 'ProspectFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '设计费', name: 'DesignFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '监理费', name: 'ControlFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '环评费', name: 'EnvironmentFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '安评费', name: 'SafetyFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '掘路费', name: 'DiggingFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '招待费', name: 'ServeFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '管理费', name: 'Managefee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '其他费用', name: 'OtherFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                    {
                        label: '总投资', name: 'AmountFee', width: 100, align: 'left'
                        , edit: {
                            type: 'input'
                        }
                    },
                ],
                isEdit: true,
                height: 160
            });
        },
        initData: function () {
            if (!!keyValue) {
                $.lrSetForm(top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/GetFormData2?keyValue=' + keyValue, function (data ) {
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
    acceptClick = function () {
        if (!$('body').lrValidform()) {
            return false;
        }
        //var postData = {};
        var postData = JSON.stringify($('[data-table="XM_Project_Datails"]').lrGetFormData());
        //postData.strxM_Project_Details_EstimateList = JSON.stringify($('#XM_Project_Details_Estimate').jfGridGet('rowdatas'));
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/SaveForm?keyValue=' + keyValue, postData, function (res) {
            // 保存成功后才回调 
            learun.frameTab.closeRefreshTab();
            //if (!!callBack) {
            //    callBack();
            //}
        });
    }; 
    //    init: function () {
    //        page.initData();
    //    },
    //    bind: function () {
    //    },
    //    initData: function () {
    //        if (!!selectedRow) {
    //            $('#form').lrSetFormData(selectedRow);
    //        }
    //    }
    //};
    //// 保存数据
    //acceptClick = function (callBack) {
    //    if (!$('#form').lrValidform()) {
    //        return false;
    //    }
    //    var postData = $('#form').lrGetFormData();
    //    $.lrSaveForm(top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/SaveForm?keyValue=' + keyValue, postData, function (res) {
    //        // 保存成功后才回调
    //        if (!!callBack) {
    //            callBack();
    //        }
    //    });
    //};
    //page.init();
}
