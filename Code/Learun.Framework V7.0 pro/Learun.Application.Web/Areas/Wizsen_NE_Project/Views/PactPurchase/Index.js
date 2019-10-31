/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:13
 * 描  述：采购设备合同
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime; 
    var Name;
    var Package;
    var Supplier;
    var page = {
        init: function () {
            //page.initTree();
            page.initGird();
            page.bind();
        },
        bind: function () {

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
                Supplier = $('#Supplier').val();
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
                //    url: top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/Form',
                //    width: 700,
                //    height: 400,
                //    callBack: function (id) {
                //        return top[id].acceptClick(refreshGirdData);
                //    }
                //});
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "新增";
                par.F_UrlAddress = '/Wizsen_NE_Project/PactPurchase/Form';
                learun.frameTab.open(par);
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                //selectedRow = $('#gridtable').jfGridGet('rowdata');
                if (learun.checkrow(keyValue)) {
                    //learun.layerForm({
                    //    id: 'form',
                    //    title: '编辑',
                    //    url: top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/Form?keyValue=' + keyValue,
                    //    width: 700,
                    //    height: 400,
                    //    callBack: function (id) {
                    //        return top[id].acceptClick(refreshGirdData);
                    //    }
                    //});
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_edit";
                    par.F_FullName = "编辑";
                    par.F_UrlAddress = '/Wizsen_NE_Project/PactPurchase/Form?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/DeleteForm', { keyValue: keyValue}, function () {
                            });
                        }
                    });
                }
            });
            // 查看
            $('#lr_detail').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
           
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_edit";
                    par.F_FullName = "采购合同查看";
                    par.F_UrlAddress = '/Wizsen_NE_Project/PactPurchase/Detail?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });

            // 付款
            $('#lr_pay').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form',
                        title: '编辑',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/Form?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });

            // 付款明细
            $('#lr_payDetail').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form',
                        title: '编辑',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/PayDatails/Index2?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            //添加附件
            $('#lr_Uploader').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_Uploader";
                    par.F_FullName = "采购合同附件";
                    par.F_UrlAddress = '/Wizsen_NE_Project/PactPurchase/AdjunctIndex?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
        },
        //树形图
        //initTree: function () {
        //    $('#tree').lrtree({
        //        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectBase/GetProjectTree',
        //        nodeClick: function (item) {
        //            //classify_itemCode = item.value;
        //            //$('#titleinfo').text(item.text + '(' + classify_itemCode + ')');
        //            page.search();
        //        }
        //    });
        //},
        initGird: function () {
            $('#gridtable').lrAuthorizeJfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/PactPurchase/GetPageList',
                headData: [
                        { label: '主键', name: 'Id', width: 200, align: "left" },
                        { label: 'BindId', name: 'BindId', width: 200, align: "left" },
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
                        { label: '创建时间', name: 'CreateDate', width: 200, align: "left" },
                        { label: '创建人ID', name: 'CreateUserId', width: 200, align: "left" },
                        { label: '创建人姓名', name: 'CreateUserName', width: 200, align: "left" },
                        { label: '更新时间', name: 'UpdateDate', width: 200, align: "left" },
                        { label: '更新人ID', name: 'UpdateUserId', width: 200, align: "left" },
                        { label: '更新人姓名', name: 'UpdateUserName', width: 200, align: "left" },
                ],
                mainId:'Id',
                isPage: true,
                isSubGrid: true,             // 是否有子表
                subGridExpanded: function (id, rowdate) {
                    SecondGrid(id, rowdate);
                }
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            param.StartTime = startTime;
            param.EndTime = endTime; 
            param.Name = Name;
            param.Supplier = Supplier;
            param.Package = Package;
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
        url: top.$.rootUrl + '/Wizsen_NE_Project/ProjectDatails/GetList',
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
        mainId: 'ID',
        isSubGrid: true,             // 是否有子表
        subGridExpanded: function (id, rowdate) {

            ThirdGrid(id, rowdate);
        }
    });
    var param2 = { keyword: rowdate.Package } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param2) });
}



function ThirdGrid(id, rowdate) {
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
    var param3 = { keyword: rowdate.Code } || {};
    $('#' + id).jfGridSet('reload', { queryJson: JSON.stringify(param3) });
}