var bootstrap = function ($, learun) {
    "use strict";
    var ProjectName;
    var Package;
    var Name;
    var page = {
        init: function () {
            page.initGrid();
            page.bind();
        },
        bind: function () {
            // 查询
            $('#btn_Search').on('click', function () {
                //var keyword = $('#txt_Keyword').val();
                ProjectName = $('#ProjectName').val();
                Package = $('#Package').val();
                Name = $('#Name').val();
                page.search();
            });
            // 刷新
            $('#lr-replace').on('click', function () {
                location.reload();
            });
            //打印
            $('#lr-print').on('click', function () {
                $("#gridtable").jqprintTable({ title: '设备明细表' });
            });
            //导出
            $('#lr-export').on('click', function () {
                learun.download({
                    method: "POST",
                    url: '/Utility/ExportExcel',
                    param: {
                        fileName: "导出设备报表",
                        columnJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').headData),
                        dataJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').rowdatas)
                    }
                });
            });
            //设备卡
            $('#lr-fcard').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_edit";
                    par.F_FullName = "设备卡";
                    par.F_UrlAddress = '/Wizsen_NE_Project/Report/FacilityCard?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            //履约保函
            $('#lr-performance').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_edit";
                    par.F_FullName = "履约保函";
                    par.F_UrlAddress = '/Wizsen_NE_Project/Report/PerformanceBond?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            //验收款
            $('#lr-freceipt').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_edit";
                    par.F_FullName = "验收款";
                    par.F_UrlAddress = '/Wizsen_NE_Project/Report/FacilityPayment?keyValue=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            //设备台账
            $('#lr-fledger').on('click', function () {

                var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "设备台账";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/FacilityLedger?keyword=' + keyword;
                learun.frameTab.open(par);
            });
        },
        initGrid: function () {
            $("#gridtable").height($(window).height() - 143);
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
                mainId: 'Id',
                isPage: true,
                reloadSelected: true
            });

            page.search();
        },
        search: function (param) {
            param = param || {};
            param.ProjectName = ProjectName;
            param.Package = Package;
            param.Name = Name;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    page.init();
}


