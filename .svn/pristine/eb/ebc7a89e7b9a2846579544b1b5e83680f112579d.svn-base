/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-02-23 17:26
 * 描  述：项目管理
 */
var acceptClick;
var keyValue = request('keyValue');

var bootstrap = function ($, learun) {
    "use strict";
    var selectedRow = learun.frameTab.currentIframe().selectedRow;
    //$('#CapitalSource').lrDataItemSelect({
    //    code: 'ProjectCapitalSource',
    //    type: 'multiple',
    //    maxHeight: 230
    //});
    $('#CapitalSource').lrselect({
        // 字段
        value: "F_ItemName",
        text: "F_ItemName",
        title: "F_ItemName",
        type: 'multiple',
        // 展开最大高度
        maxHeight: 200,
        // 是否允许搜索
        allowSearch: true,
        // 访问数据接口地址
        url: top.$.rootUrl + '/LR_SystemModule/DataItem/GetDetailListByParentId',
        // 访问数据接口参数
        param: { itemCode: 'ProjectCapitalSource',parentId: '0' },
    });
    $('#Nature').lrDataItemSelect({
        code: 'ProjectNature',
        maxHeight: 230
    });
    $('#Node').lrDataItemSelect({
        code: 'ProjectType2',
        maxHeight: 230
    });
    var page = {
        init: function () {
            $('.lr-form-wrap').lrscroll();
            page.bind();
            page.initData();
        },
        bind: function () {
            //年范围
            laydate.render({
                elem: '#ImplementYear'
                , type: 'year'
                 , range: true
            });
            // 部门
            $('#Dept_Code').lrDepartmentSelect({
                companyId: '2323098c-e97b-4800-be05-ca6e2d311cf9', select: function (data) {
                    $('#Dept_Name').val(data.text);
                    $('#Dept_Code').val(data.id);}
            });
            //$('#TNRD_Project_Estimate').jfGrid({
            //    headData: [
            //        {
            //            label: '数据来源', name: 'DataSource', width: 100, align: 'left'
            //            , edit: {
            //                type: 'select',
            //                datatype: 'dataItem',
            //                code: 'DataSource'
            //            }
            //        },
            //        {
            //            label: '工程费', name: 'ProjectFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '前期费', name: 'AgoFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '勘察费', name: 'ProspectFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '设计费', name: 'DesignFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '监理费', name: 'ControlFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '环评费', name: 'EnvironmentFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '安评费', name: 'SafetyFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '扬尘防治增加费', name: 'DustFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '劳动卫生评价费', name: 'HealthFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '预备费', name: 'ReadyFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '掘路费', name: 'DiggingFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '管理费', name: 'ManageFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        },
            //        {
            //            label: '其他费用', name: 'OtherFee', width: 100, align: 'left'
            //            , edit: {
            //                type: 'input'
            //            }
            //        }
            //    ],
            //    isEdit: true,
            //    height: 120
            //});
        },
        initData: function () {
            if (!!keyValue) {
                $.lrSetForm(top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/GetFormData?keyValue=' + keyValue, function (data) {
                    $('[data-table="TNRD_Project_Datails"]').lrSetFormData(data);
                    $("#Date").val(learun.formatDate(data.Date, 'yyyy-MM'));
                    $("#ApprovalTime").val(learun.formatDate(data.Date, 'yyyy-MM'));
                    //$("#Date").val(data.Date);
                });
            }
            //if (!!selectedRow) {
            //    $('#form').lrSetFormData(selectedRow);
            //}
        },
    };


    // 保存数据
    $('#lr_submit').on('click', function () {
        acceptClick(learun.frameTab.closeRefreshTab);
        //learun.frameTab.close(learun.frameTab.iframeId);
    });

    // 关闭
    $('#lr_close').on('click', function () {
        //acceptClick(1);
        learun.frameTab.close(learun.frameTab.iframeId);
    });

    // 保存数据
    //acceptClick = function () {
    //    if (!$('body').lrValidform()) {
    //        return false;
    //    }
    //    var postData = {};
    //    postData.strEntity = JSON.stringify($('[data-table="TNRD_Project_Datails"]').lrGetFormData());
    //    postData.strtNRD_Project_EstimateEntity = JSON.stringify($('[data-table="TNRD_Project_Estimate"]').lrGetFormData());
    //    $.lrSaveForm(top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/SaveForm?keyValue=' + keyValue, postData, function (res) {
    //        learun.frameTab.closeRefreshTab();
    //        // 保存成功后才回调
    //        //if (!!callBack) {
    //        //    callBack();
    //        //}
    //    });
    //};
    // 保存数据
    acceptClick = function (callBack) {
        if (!$('body').lrValidform()) {
            return false;
        }
        //return false;
        var postData = $('[data-table="TNRD_Project_Datails"]').lrGetFormData();
        //estimate(postData);
        $.lrSaveForm(top.$.rootUrl + '/Wizsen_TNRD_Project/ProjectDatails/SaveForm?keyValue=' + keyValue, postData, function (res) {
            //learun.frameTab.closeRefreshTab();
            //保存成功后才回调
            if (!!callBack) {
                callBack();
            }
        });
    };
    page.init();
}


function estimate(postData) {
    var sum = 0;
    if (postData.ProjectFee == "" || postData.ProjectFee == null || postData.ProjectFee == undefined) {
        sum += parseFloat(postData.ProjectFee);
    }
    if (postData.ServiceFee == "" || postData.ServiceFee == null || postData.ServiceFee == undefined) {
        sum += parseFloat(postData.ServiceFee);
    }
    if (postData.BiddingFee == "" || postData.BiddingFee == null || postData.BiddingFee == undefined) {
        sum += parseFloat(postData.BiddingFee);
    }
    if (postData.CostFee == "" || postData.CostFee == null || postData.CostFee == undefined) {
        sum += parseFloat(postData.CostFee);
    }
    if (postData.ReviewFee == "" || postData.ReviewFee == null || postData.ReviewFee == undefined) {
        sum += parseFloat(postData.ReviewFee);
    }
    if (postData.ProspectFee == "" || postData.ProspectFee == null || postData.ProspectFee == undefined) {
        sum += parseFloat(postData.ProspectFee);
    }
    if (postData.DesignFee == "" || postData.DesignFee == null || postData.DesignFee == undefined) {
        sum += parseFloat(postData.DesignFee);
    }
    if (postData.ControlFee == "" || postData.ControlFee == null || postData.ControlFee == undefined) {
        sum += parseFloat(postData.ControlFee);
    }
    if (postData.ManageFee == "" || postData.ManageFee == null || postData.ManageFee == undefined) {
        sum += parseFloat(postData.ManageFee);
    }
    if (postData.EnvironmentFee == "" || postData.EnvironmentFee == null || postData.EnvironmentFee == undefined) {
        sum += parseFloat(postData.EnvironmentFee);
    }
    if (postData.SafetyFee == "" || postData.SafetyFee == null || postData.SafetyFee == undefined) {
        sum += parseFloat(postData.SafetyFee);
    }
    if (postData.DustFee == "" || postData.DustFee == null || postData.DustFee == undefined) {
        sum += parseFloat(postData.DustFee);
    }
    if (postData.DiggingFee == "" || postData.DiggingFee == null || postData.DiggingFee == undefined) {
        sum += parseFloat(postData.DiggingFee);
    }
    if (postData.HealthFee == "" || postData.HealthFee == null || postData.HealthFee == undefined) {
        sum += parseFloat(postData.HealthFee);
    }
    if (postData.ReadyFee == "" || postData.ReadyFee == null || postData.ReadyFee == undefined) {
        sum += parseFloat(postData.ReadyFee);
    }
    if (postData.OtherFee == "" || postData.OtherFee == null || postData.OtherFee == undefined) {
        sum += parseFloat(postData.OtherFee);
    }
    alert(sum);
}

function onPipe() {
    var OnceNetLength = parseFloat($("#OnceNetLength").val() == "" ? 0 : $("#OnceNetLength").val());
    var TwiceNetLength = parseFloat($("#TwiceNetLength").val() == "" ? 0 : $("#TwiceNetLength").val());
    var RiserLength = parseFloat($("#RiserLength").val() == "" ? 0 : $("#RiserLength").val());
    var HeatStandNum = parseFloat($("#HeatStandNum").val() == "" ? 0 : $("#HeatStandNum").val());
    var sumPipe = OnceNetLength + TwiceNetLength + RiserLength + HeatStandNum;
    $("#PipeLengthDD").html(sumPipe);
    $("#PipeLength").val(sumPipe);
}

//建安费
function onProject() {
    var OnceNetFee = parseFloat($("#OnceNetFee").val() == "" ? 0 : $("#OnceNetFee").val());
    var TwiceNetFee = parseFloat($("#TwiceNetFee").val() == "" ? 0 : $("#TwiceNetFee").val());
    var RiserFee = parseFloat($("#RiserFee").val() == "" ? 0 : $("#RiserFee").val());
    var HeatStandFee = parseFloat($("#HeatStandFee").val() == "" ? 0 : $("#HeatStandFee").val());
    var sumProject = OnceNetFee + TwiceNetFee + RiserFee + HeatStandFee;
    $("#ProjectFeeDD").html(sumProject);
    $("#ProjectFee").val(sumProject);
}

//预备费
function onReady() {
    var ReadyFee111 = parseFloat($("#ReadyFee111").val() == "" ? 0 : $("#ReadyFee111").val());
    $("#ReadyFee").val(ReadyFee111);
}

//总投资
function onAmount() {
    var ProjectInvest = parseFloat($("#ProjectInvest").val() == "" ? 0 : $("#ProjectInvest").val());
    var Review = parseFloat($("#Review").val() == "" ? 0 : $("#Review").val());
    var FinalValue = parseFloat($("#FinalValue").val() == "" ? 0 : $("#FinalValue").val());
    if (FinalValue != 0) {
        $("#Amount").val(FinalValue);
    } else if (Review != 0) {
        $("#Amount").val(Review);
    } else if (ProjectInvest != 0) {
        $("#Amount").val(ProjectInvest);
    }
   
}


//其他费用
function onOther() {
    //var ServiceFee = parseFloat($("#ServiceFee").val() == "" ? 0 : $("#ServiceFee").val());
    var BiddingFee = parseFloat($("#BiddingFee").val() == "" ? 0 : $("#BiddingFee").val());
    var CostFee = parseFloat($("#CostFee").val() == "" ? 0 : $("#CostFee").val());
    //var ReviewFee = parseFloat($("#ReviewFee").val() == "" ? 0 : $("#ReviewFee").val());
    //var PeerReviewFee = parseFloat($("#PeerReviewFee").val() == "" ? 0 : $("#PeerReviewFee").val());
    //var OtherAgoFee = parseFloat($("#OtherAgoFee").val() == "" ? 0 : $("#OtherAgoFee").val());
    //var sumAgo = ServiceFee + BiddingFee + CostFee + ReviewFee + PeerReviewFee + OtherAgoFee;
    //$("#AgoFeeDD").html(sumAgo);
    //$("#AgoFee").val(sumAgo);
    //var AgoFee = parseFloat($("#AgoFee").val() == "" ? 0 : $("#AgoFee").val());
    var ProspectFee = parseFloat($("#ProspectFee").val() == "" ? 0 : $("#ProspectFee").val());
    var DesignFee = parseFloat($("#DesignFee").val() == "" ? 0 : $("#DesignFee").val());
    var ControlFee = parseFloat($("#ControlFee").val() == "" ? 0 : $("#ControlFee").val());
    var EnvironmentFee = parseFloat($("#EnvironmentFee").val() == "" ? 0 : $("#EnvironmentFee").val());
    var SafetyFee = parseFloat($("#SafetyFee").val() == "" ? 0 : $("#SafetyFee").val());
    var DiggingFee = parseFloat($("#DiggingFee").val() == "" ? 0 : $("#DiggingFee").val());
    var ManageFee = parseFloat($("#ManageFee").val() == "" ? 0 : $("#ManageFee").val());
    var OtherFeeD = parseFloat($("#OtherFeeD").val() == "" ? 0 : $("#OtherFeeD").val());
    var sumOther = BiddingFee + CostFee + ProspectFee + DesignFee + ControlFee + EnvironmentFee + SafetyFee + DiggingFee + ManageFee + OtherFeeD;
    //$("#OtherFeeDD").html(sumOther);
    $("#OtherFee").val(sumOther);
}