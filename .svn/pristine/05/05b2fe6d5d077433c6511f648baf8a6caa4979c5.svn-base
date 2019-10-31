var bootstrap = function ($, learun) {
    "use strict";
    var startTime;
    var endTime; 
    var Name;
    var Package;
    var page = {
        init: function () {
            page.initGrid();
            page.bind();
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
                Package = $('#Package').val();
                page.search();
            });
            // 刷新
            $('#lr-replace').on('click', function () {
                location.reload();
            });
            //打印
            $('#lr-print').on('click', function () {
                $("#gridtable").jqprintTable({ title: '项目信息明细表' });
            });
            //导出
            $('#lr-export').on('click', function () {
                learun.download({
                    method: "POST",
                    url: '/Utility/ExportExcel',
                    param: {
                        fileName: "导出项目报表",
                        columnJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').headData),
                        dataJson: JSON.stringify($('#gridtable').jfGridGet('settingInfo').rowdatas)
                    }
                });
            });
            //项目统计
            $('#lr-total').on('click', function () {
                var keyValue = $('#gridtable').jfGridValue('Id');
                if (learun.checkrow(keyValue)) {
                    var par = {};
                    var currentId = learun.frameTab.iframeId;
                    par.F_ModuleId = currentId + "_edit";
                    par.F_FullName = "项目统计";
                    par.F_UrlAddress = '/Wizsen_NE_Project/Report/ProjectDatails?keyword=' + keyValue;
                    learun.frameTab.open(par);
                }
            });
            //项目金额合计
            $('#lr-PAmount').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "项目金额合计";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/ProjectTotalAmount';
                learun.frameTab.open(par);
            });
            //项目附件报表
            $('#lr-Adjunct').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "项目附件报表";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/AdjunctReport';
                learun.frameTab.open(par);
            });
            //新增报表1
            $('#lr-Report1').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "新增报表1";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/Report1';
                learun.frameTab.open(par);
            });
            //新增报表2
            $('#lr-Report2').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "新增报表2";
                par.F_UrlAddress = '/Wizsen_NE_Project/Report/Report2';
                learun.frameTab.open(par);
            });
            //新增报表3
            $('#lr-Report3').on('click', function () {
                //var keyword = $("#txt_Keyword").val();
                var par = {};
                var currentId = learun.frameTab.iframeId;
                par.F_ModuleId = currentId + "_edit";
                par.F_FullName = "新增报表3";
                //par.F_UrlAddress = '/Wizsen_NE_Project/Report/Report3';
                learun.frameTab.open(par);
            });
            //新增报表4
            //$('#lr-Report4').on('click', function () {
            //    //var keyword = $("#txt_Keyword").val();
            //    var par = {};
            //    var currentId = learun.frameTab.iframeId;
            //    par.F_ModuleId = currentId + "_edit";
            //    par.F_FullName = "新增报表4";
            //    par.F_UrlAddress = '/Wizsen_NE_Project/Report/Report4';
            //    learun.frameTab.open(par);
            //});
        },
        initGrid: function () {
            $("#gridtable").height($(window).height() - 143);
            $('#gridtable').jfGrid({
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
                mainId: 'Id',
                isPage: true,
                reloadSelected: true
            });

            page.search();
        },
        search: function (param) {
            param = param || {};
            param.StartTime = startTime;
            param.EndTime = endTime; 
            param.Name = Name;
            param.Package = Package;
            $('#gridtable').jfGridSet('reload', { queryJson: JSON.stringify(param) });
        }
    };
    page.init();
}


