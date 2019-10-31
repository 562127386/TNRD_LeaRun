/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:01
 * 描  述：项目管理
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime; 
    var Name;
    var CompanyName;
    var Package;
    var page = {
        init: function () {
            page.initTree();
            page.initGird();
            page.bind();
        },
        selectUserinit: function () {
            $('#selectuser1').lrformselect({
                layerUrl: top.$.rootUrl + '/LR_OrganizationModule/User/SelectForm',
                layerUrlW: 800,
                layerUrlH: 520,
                dataUrl:''
            });
        },
        jfgridinit:function(){
            initGrid();
        },
        uploaderInit: function () {
            $('#learun_uploader').lrUploader();
        },
        bind: function () {
            // 时间搜索框 
            $('#datesearch').lrdate({
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
                    startTime = begin;
                    endTime = end;
                    //page.search();
                }
            }); 
            // 查询
            $('#btn_Search').on('click', function () {
                //var keyword = $('#txt_Keyword').val();
                Name = $('#Name').val();
                CompanyName = $('#CompanyName').val();
                Package = $('#Package').val();
                page.search();
            });
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 新增
            $('#lr_add').on('click', function () {
                selectedRow = null;
                //learun.layerForm({
                //    id: 'form',
                //    title: '新增',
                //    url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/Form',
                //    width: 700,
                //    height: 450,
                //    callBack: function (id) {
                //        return top[id].acceptClick(refreshGirdData);
                //    }

                //});
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_add";
                par.F_FullName = "新增";
                par.F_UrlAddress = '/Wizsen_NE_Project/ProjectDatails/Form';
                learun.frameTab.open(par);
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "编辑";
                par.F_UrlAddress = '/Wizsen_NE_Project/ProjectDatails/Form?keyValue=' + keyValue;
                learun.frameTab.open(par);
                //if (learun.checkrow(keyValue)) {
                //    learun.layerForm({
                //        id: 'form',
                //        title: '编辑',
                //        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/Form?keyValue=' + keyValue,
                //        width: 700,
                //        height: 450,
                //        callBack: function (id) {
                //            return top[id].acceptClick(refreshGirdData);
                //        }
                //    });
                //}
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/DeleteForm', { keyValue: keyValue}, function () {
                            });
                            location.reload();
                        }
                    });
                }
            });
            // 查看
            $('#lr_detail').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                var Code = $('#gridtable').jfGridValue('Code');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_edit";
                    par.F_FullName = "项目查看";
                    par.F_UrlAddress = '/Wizsen_NE_Project/ProjectDatails/Detail?keyValue=' + keyValue+'&Code='+Code;
                    learun.frameTab.open(par);
                }
            });
            //添加附件
            $('#lr_Uploader').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                //if (learun.checkrow(keyValue)) {
                //    learun.layerForm({
                //        id: 'ProjectAdjunct',
                //        title: '编辑',
                //        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/Adjunct?keyValue=' + keyValue,
                //        width: 700,
                //        height: 450,
                //        callBack: function (id) {
                //            return top[id].acceptClick(refreshGirdData);
                //        }
                //    })
                //}
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_Uploader";
                    par.F_FullName = "项目附件";
                    par.F_UrlAddress = '/Wizsen_NE_Project/ProjectDatails/AdjunctIndex?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            //项目状态
            //$('#lr_State').on('click', function () {
            //    var keyValue = $('#gridtable').jfGridValue('Id');
            //    if (learun.checkrow(keyValue)) {
            //        learun.layerForm({
            //            id: 'form',
            //            title: '编辑',
            //            url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/ProjectAdjunct?keyValue=' + keyValue,
            //            width: 700,
            //            height: 450,
            //            callBack: function (id) {
            //                return top[id].acceptClick(refreshGirdData);
            //            }
            //        })
            //    }
            //});

            //项目状态菜单加载
            $.ajax({
                url: "/LR_SystemModule/DataItem/GetDetailList",
                type: "get",
                data: { itemCode: "ProjectNode" },
                dataType: "json",
                success: function (msg) {
                    for (var i in msg.data) {
                        $("#State").append("<li><a  onclick='State(this)'>" + msg.data[i].F_ItemValue + "</a></li>");
                    }

                },
                error: function () {

                }
            });
        },
        //树形图
        initTree: function () {
            $('#tree').lrtree({
                url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectBase/GetProjectTree',
                nodeClick: function (item) {
                    //classify_itemCode = item.value;
                    //$('#titleinfo').text(item.text + '(' + classify_itemCode + ')');
                    page.search({ keyword: item.value });
                }
            });
        },
        initGird: function () {
            $('#gridtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/GetPageList',
                headData: [
                        { label: '编码', name: 'Code', width: 200, align: "left" },
                        { label: '名称', name: 'Name', width: 200, align: "left" },
                        { label: '主项目名称', name: 'BaseName', width: 200, align: "left" },
                        { label: '子项目名称', name: 'BaseSubName', width: 200, align: "left" },
                        { label: '开始时间', name: 'BeginDate', width: 200, align: "left" },
                        { label: '结束时间', name: 'EndDate', width: 200, align: "left" },
                        { label: '所属公司', name: 'CompanyName', width: 200, align: "left" },
                        { label: '项目状态', name: 'ProjectState', width: 200, align: "left" },
                        { label: '资金来源', name: 'CapitalSource', width: 200, align: "left" },
                        { label: '设备包', name: 'Package', width: 200, align: "left" },
                        { label: '项目描述', name: 'DEC', width: 200, align: "left" },
                        { label: '项目负责人', name: 'Principal', width: 200, align: "left" },
                        { label: '项目负责人电话', name: 'Phone', width: 200, align: "left" },
                        { label: '施工单位', name: 'ConstructionUnit', width: 200, align: "left" },
                        { label: '施工单位负责人', name: 'CPrincipal', width: 200, align: "left" },
                        { label: '施工单位负责人电话', name: 'CPhone', width: 200, align: "left" },
                        { label: '创建日期', name: 'CreateDate', width: 200, align: "left" },
                        { label: '创建用户账户', name: 'CreateUserId', width: 200, align: "left" },
                        { label: '创建用户名称', name: 'CreateUserName', width: 200, align: "left" },
                ],
                mainId:'Id',
                isPage: true,
                isSubGrid: true,             // 是否有子表
                subGridCount:2,
                subGridExpanded: function (id, rowdate) {
                    SecondGrid(id, rowdate);
                    SecondGrid2(id, rowdate);
                }
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            param.StartTime = startTime;
            param.EndTime = endTime; 
            param.Name = Name;
            param.CompanyName = CompanyName;
            param.Package = Package;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };

    //$.ajax({
    //    url: "/SysManage/ItemsDetail/GetSelectJson",
    //    type: "get",
    //    data: { Code: "XMZT" },
    //    dataType: "json",
    //    success: function (msg) {
    //        for (var i in msg) {
    //            $("#State").append("<li><a  onclick='State(this)'>" + msg[i].text + "</a></li>");
    //        }

    //    },
    //    error: function () {

    //    }
    //});


    //修改项目状态
    //State = function (th) {
    //    var keyValue = $('#gridtable').jfGridValue('Id');
    //    if (learun.checkrow(keyValue)) {
    //        var postData = {};

    //        postData.State = th.text;
    //        postData.BindId = keyValue
    //        postData.ProjectCode = $('#gridtable').jfGridValue('Code');
    //        postData.ProjectName = $('#gridtable').jfGridValue('Name');
    //        postData.OldState = $('#gridtable').jfGridValue('ProjectState');
    //        $.lrSaveForm(top.$.rootUrl + '/Wizsen_NE_Project/ProjectState/SaveForm', postData, function (res) {
    //            // 保存成功后才回调
    //            if (!!callBack) {
    //                callBack();
    //            }
    //        });
    //    }
    //}


    refreshGirdData = function () {
        page.search();
    };
    page.init();
}



function SecondGrid(id, rowdate) {
    var Code = rowdate.Code;
    $('#' + id).jfGrid({
        url: top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/GetList',
        headData: [
            { label: '合同编码', name: 'Code', width: 200, align: "left" },
            { label: '合同名称', name: 'Name', width: 200, align: "left" },
            { label: '合同类型', name: 'Type', width: 200, align: "left" },
            { label: '采购组织', name: 'Organiz', width: 200, align: "left" },
            { label: '设备包', name: 'Package', width: 200, align: "left" },
            { label: '计划终止日期', name: 'EndTime', width: 200, align: "left" },
            { label: '供应商', name: 'Supplier', width: 200, align: "left" },
            { label: '币种', name: 'Currency', width: 200, align: "left" },
            { label: '合同金额', name: 'Amount', width: 200, align: "left" },
            { label: '已付金额', name: 'PaidAmount', width: 200, align: "left" },
            { label: '未付金额', name: 'UnPaidAmount', width: 200, align: "left" },
            { label: '付款类型', name: 'PayType', width: 200, align: "left" },
            { label: '资金来源', name: 'FundSource', width: 200, align: "left" },
            { label: '合同签订日期', name: 'SigningDate', width: 200, align: "left" },
            { label: '部门', name: 'Department', width: 200, align: "left" },
            { label: '人员', name: 'Personnel', width: 200, align: "left" },
            { label: '交货地点', name: 'Place', width: 200, align: "left" },
            { label: '预付款', name: 'AdvancePay', width: 200, align: "left" },
            { label: '预付款限额 ', name: 'Limit', width: 200, align: "left" },
            { label: '合同状态', name: 'State', width: 200, align: "left" },
        ],
        mainId: 'ID',
        isSubGrid: true,             // 是否有子表
        subGridExpanded: function (id, rowdate) {

            ThirdGrid(id, rowdate,Code);
        }
    });
    var param2 = { keyword: rowdate.Package } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param2)});
}


function SecondGrid2(id, rowdate) {
    var subgrid2_id = id + "_t";
    $("#" + id).after("<div id='" + subgrid2_id + "'style='height:300;' ></div>");

    var Code = rowdate.Code;
    $('#' + subgrid2_id).jfGrid({
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
        mainId: 'ID'
    });
    var param4 = { keyword: rowdate.Code } || {};
    $('#' + subgrid2_id).jfGridSet('reload', { queryJson: JSON.stringify(param4) });
}



function ThirdGrid(id, rowdate , Code) {
    //var Code = $('#gridtable').jfGridValue('Code');
    $('#' + id).jfGrid({
        url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityBase/GetList',
        headData: [
            { label: '项目名称', name: 'ProjectName', width: 200, align: "left" },
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
        mainId: 'Id'
    });
    var param3 = { keyword: Code } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param3) });
}

 
