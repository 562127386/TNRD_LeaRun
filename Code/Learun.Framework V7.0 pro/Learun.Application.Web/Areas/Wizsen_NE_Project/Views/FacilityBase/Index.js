/* * 版 本 Learun-ADMS V7.0.0 力软敏捷开发框架(http://www.learun.cn)
 * Copyright (c) 2013-2018 上海力软信息技术有限公司
 * 创建人：超级管理员
 * 日  期：2019-01-14 17:15
 * 描  述：设备管理
 */
var selectedRow;
var refreshGirdData;
var bootstrap = function ($, learun) {
    "use strict";
    var ProjectName;
    var Classify;
    var Package;
    var Name;
    var page = {
        init: function () {
            page.initTree();
            page.initGird();
            page.bind();
        },
        bind: function () {
            // 查询
            $('#btn_Search').on('click', function () {
                //var keyword = $('#txt_Keyword').val();
                ProjectName = $('#ProjectName').val();
                Classify = $('#Classify').val();
                Package = $('#Package').val();
                Name = $('#Name').val();
                page.search();
            });
            // 刷新
            $('#lr_refresh').on('click', function () {
                location.reload();
            });
            // 新增
            $('#lr_add').on('click', function () {
                selectedRow = null;
                learun.layerForm({
                    id: 'form',
                    title: '新增',
                    url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityBase/Form',
                    width: 700,
                    height: 400,
                    callBack: function (id) {
                        return top[id].acceptClick(refreshGirdData);
                    }
                });
            });
            // 编辑
            $('#lr_edit').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form',
                        title: '编辑',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityBase/Form?keyValue=' + keyValue,
                        width: 700,
                        height: 400,
                        callBack: function (id) {
                            return top[id].acceptClick(refreshGirdData);
                        }
                    });
                }
            });
            // 删除
            $('#lr_delete').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    learun.layerConfirm('是否确认删除该项！', function (res) {
                        if (res) {
                            learun.deleteForm(top.$.rootUrl + '/Wizsen_NE_Project/FacilityBase/DeleteForm', { keyValue: keyValue}, function () {
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
                    par.F_FullName = "项目查看";
                    par.F_UrlAddress = '/Wizsen_NE_Project/FacilityBase/Detail?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            // 税率变更
            $('#lr_rate').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                selectedRow = $('#gridtable').jfGridGet('rowdata');
                if (learun.checkrow(keyValue)) {
                    learun.layerForm({
                        id: 'form',
                        title: '新增',
                        url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityRateLog/Form',
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
                    par.F_FullName = "项目附件";
                    par.F_UrlAddress = '/Wizsen_NE_Project/FacilityBase/AdjunctIndex?keyValue=' + keyValue;
                    learun.frameTab.open(par);
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
                    page.search();
                }
            });
        },
        initGird: function () {
            $('#gridtable').jfGrid({
                url: top.$.rootUrl + '/Wizsen_NE_Project/FacilityBase/GetPageList',
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
                mainId:'Id',
                isPage: true
            });
            page.search();
        },
        search: function (param) {
            param = param || {};
            param.ProjectName = ProjectName;
            param.Classify = Classify;
            param.Package = Package;
            param.Name = Name;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    refreshGirdData = function () {
        page.search();
    };
    page.init();
}
