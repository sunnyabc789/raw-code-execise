module.exports.decorates = {
    state: {
        removeFlag: !1,
        unSpread: !1,
        openKeys: [],
        initedCustomMenu: !1,
        value: '[\n    {\n        "unPersistence": false,\n        "fdpPreSplitBoxParamDTO": {\n            "extendFields": {},\n            "orderFlag": 32768,\n            "tradeType": 202\n        },\n        "fulfilGoodsList": [\n            {\n                "isPrecious": false,\n                "fulfilQuantity": 1,\n                "extendFields": {\n                    "isPrecious": "0",\n                    "isDanger": "0",\n                    "seller_user_id": "217101303",\n                    "isFragile": "0",\n                    "userId": "217101303"\n                },\n                "length": 144,\n                "width": 61,\n                "weight": 277,\n                "scItemId": 667105195901,\n                "height": 61\n            },\n            {\n                "isPrecious": false,\n                "fulfilQuantity": 1,\n                "extendFields": {\n                    "isPrecious": "0",\n                    "isDanger": "0",\n                    "seller_user_id": "217101303",\n                    "isFragile": "0",\n                    "userId": "217101303"\n                },\n                "length": 135,\n                "width": 59,\n                "weight": 83,\n                "scItemId": 669760155851,\n                "height": 34\n            }\n        ],\n        "ownerId": 217101303,\n        "spCode": "5000000000059",\n        "userId": 217101303,\n        "toContact": {\n            "areaId": 210122002,\n            "detailAddress": "\u84b2\u4e1c\u8857\u9053\u8fce\u5bbe\u8def26\u53f7\u4e3d\u90fd\u6c34\u5cb822\u53f7\u697c"\n        },\n        "fulfilTimeParam": {\n            "expectReceiveEndTime": "2022-06-27T23:59:00",\n            "preciseHourMatch": false,\n            "fulfilStartTime": "2022-06-23T16:15:25.924",\n            "serviceForUser": false,\n            "preciseTimeMatch": false,\n            "timeCriterion": "fourDayReach"\n        },\n        "fulfilServices": [],\n        "outBizCode": "LP00518220878157",\n        "extendFields": {\n            "totalVolume": "807.0",\n            "subOrderType": "0",\n            "existCombGoods": "false",\n            "estConTime": "2_15",\n            "logisticsOrderCode": "LP00518220878157",\n            "isCt2B": "false",\n            "buyerId": "1938196134",\n            "tpCollectTime": "2022-07-02 12:19:05",\n            "lcOrderType": "0",\n            "totalCnWeight": "360",\n            "taobaoTradeId": "2701043748625193461",\n            "sellerId": "217101303",\n            "logisPattern": "std",\n            "providerId": "217101303",\n            "tgl": "false",\n            "totalGoodsNumber": "2",\n            "totalWeight": "360.0",\n            "lgOrderCT": "2022-06-23 16:15:25",\n            "needC2B": "1",\n            "tpt": "2022-06-17 12:19:05",\n            "orderPayTime": "20220617121905",\n            "fulfilOrderCode": "FB2994000007718615950",\n            "capInstanceId": "LP00518220878157"\n        },\n        "fromContact": {\n            "areaId": 440112008,\n            "detailAddress": "\u5e7f\u4e1c\u7701^^^\u5e7f\u5dde\u5e02^^^\u9ec4\u57d4\u533a^^^ \u5357\u5c97\u8857\u9053   \u5e7f\u4e1c\u7701\u5e7f\u5dde\u5e02\u9ec4\u57d4\u533a\u5f00\u53d1\u5927\u9053\u5c06\u519b\u5c71\u4e8c\u8def33\u53f7\u8baf\u88d5\u7269\u6d41\u56ed\u79d1\u6377\u4ed3\u5e93"\n        },\n        "bizIdentity": "FOURPL_TOC",\n        "fulfilBizType": "CONSIGN",\n        "fdpPackageDTOS": [],\n        "logisticsServiceList": [\n            {\n                "serviceCode": "2020027",\n                "ownerId": -1,\n                "serviceName": "\u6807\u51c6\u4ef6-\u65e0\u7279\u6b8a\u670d\u52a1\u914d\u9001"\n            },\n            {\n                "serviceCode": "2010001",\n                "servicePropertyInsDTO": {\n                    "servicePropertyVal": {\n                        "storeCode": "CAN205"\n                    },\n                    "selectedServicePropOpt": {}\n                },\n                "ownerId": -1,\n                "serviceName": "\u6807\u51c6\u4ef6\u666e\u901a\u914d",\n                "storeCode": "CAN205"\n            }\n        ],\n        "channelId": 213\n    }\n]'
    },
    onEnter: function() {},
    onCancel: function() {
        this.setState({
            visible: !this.state.visible
        })
    },
    onClose: function() {
        this.setState({
            visible: !this.state.visible
        })
    },
    cellOp: function(e, t) {
        this.setState({
            visible: !this.state.visible
        })
    }
}, module.exports.logicTree = function() {
    var e = walle.h;
    return [
        [1, "a", {
                onClick: function e(t) {
                    var n = this;
                    with(t) return function() {
                        n.cellOp("")
                    }
                },
                href: "javascript:;"
            },
            [
                [0, 0, 0, "\u70b9\u51fb\u67e5\u770b"]
            ]
        ],
        [2, "View", 0, [
            [2, "Dialog", {
                    className: "tanchuang",
                    visible: function e(n) {
                        with(n) return this.state.visible
                    },
                    closable: "esc,mask,close",
                    onClose: function e(n) {
                        with(n) return this.onClose
                    },
                    onCancel: function e(n) {
                        with(n) return this.onClose
                    },
                    shouldUpdatePosition: function e(n) {
                        with(n) return !0
                    },
                    hasMask: function e(n) {
                        with(n) return !1
                    },
                    hasClose: function e(n) {
                        with(n) return !1
                    },
                    canCloseByMask: function e(n) {
                        with(n) return !1
                    },
                    canCloseByEsc: function e(n) {
                        with(n) return !0
                    },
                    canCloseByOutSideClick: function e(n) {
                        with(n) return !1
                    }
                },
                [
                    [1, "div", {
                            className: "breadcrumb"
                        },
                        [
                            [2, "Breadcrumb", 0, [
                                [2, "Breadcrumb.Item", 0, [
                                    [0, 0, 0, "abc"]
                                ]]
                            ]]
                        ]
                    ],
                    [1, "div", {
                            className: "tc"
                        },
                        [
                            [1, "pre", 0, [
                                [0, 0, 0, function(e) {
                                    with(e) return this.state
                                        .value
                                }]
                            ]],
                            [1, "input", {
                                type: "text",
                                id: "testori",
                                style: function e(n) {
                                    with(n) return {
                                        opacity: 0,
                                        position: "absolute"
                                    }
                                },
                                value: function e(n) {
                                    with(n) return this.state
                                        .value
                                }
                            }]
                        ]
                    ]
                ]
            ]
        ]]
    ]
}(), module.exports.styles =
'@charset "UTF-8";#root,#root>div[data-reactroot],body,html{height:100%;width:100%;position:relative}@font-face{font-family:solution-font;src:url(//at.alicdn.com/t/font_471328_pv55w34evims4i.eot);src:url(//at.alicdn.com/t/font_471328_pv55w34evims4i.eot?#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_471328_pv55w34evims4i.woff) format("woff"),url(//at.alicdn.com/t/font_471328_pv55w34evims4i.ttf) format("truetype"),url(//at.alicdn.com/t/font_471328_pv55w34evims4i.svg#iconfont) format("svg")}.white-background{background:#fff}.content-container{position:relative;overflow:hidden}.hight-affix{z-index:11}.container{min-height:100%}.container .header{height:48px;z-index:2}.container .main-container{-ms-flex:1;flex:1;height:min-content;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.container .main-container .main-content{-ms-flex:1;flex:1}.container .manager-system-header>.next-col:first-child{margin-left:240px;transition:all .2s}.content-parent{margin-left:240px;transition:all .2s;width:100%;overflow:hidden}.content-parent.un-spread{margin-left:48px}.content-parent.un-spread .manager-system-header>.next-col:first-child{margin-left:60px}.left-menu-body::-webkit-scrollbar{width:4px;margin-right:4px}.left-menu-body::-webkit-scrollbar-thumb{background-color:rgba(255,255,255,.2)}.page-logo-and-title{background:#1470cc;color:#fff;position:relative;height:48px;border-bottom:1px solid rgba(255,255,255,.2)}.page-logo-and-title .manager-system-icon{display:inline-block;width:48px;text-align:center;vertical-align:top}.page-logo-and-title .manager-system-icon img{margin-top:12px;width:36px}.page-logo-and-title .manager-system-title{font-size:20px;overflow:hidden;white-space:nowrap;line-height:47px;display:inline-block;width:180px;text-align:left;transition:all .2s}.page-logo-and-title .platform-user-img{height:40px;width:40px;border-radius:40px;margin-top:5px;background-color:#fff}.page-logo-and-title .header-border-bottom{border-bottom:1px solid #eee}.page-logo-and-title .toogle-menu{display:inline-block;position:absolute;height:48px;right:-24px;top:0;line-height:48px;color:#aaa;background:#f2f2f2;width:24px;text-align:center;cursor:pointer}.page-logo-and-title .toogle-menu:hover{opacity:.8}.container div.left-menu{height:100vh;background:#1470cc;width:240px;min-width:auto;position:fixed;left:0;top:0;z-index:8}.container div.left-menu .next-menu-group-title{color:#fff}.container div.left-menu .left-menu-body{height:calc(100% - 48px);overflow:auto;overflow-x:hidden}.container div.left-menu .left-menu-body .next-menu-submenu-title .next-icon{color:#fff}.container div.left-menu .left-menu-body .next-menu-submenu-item .sub-line-before{display:inline-block;height:48px;width:0;vertical-align:top;margin:0 16px 0 2px;border-left:1px solid rgba(255,255,255,.4);position:relative}.container div.left-menu .left-menu-body .next-menu-submenu-item .sub-line-before::before{content:\' \';display:inline-block;width:2px;height:2px;position:absolute;top:22px;background:#fff;left:-1px}.container div.left-menu .left-menu-body .next-menu-submenu-item .next-menu-submenu-title .sub-line-before{margin:0 16px 0 6px}.container div.left-menu.un-spread{width:48px;-ms-flex:0 0 48px;flex:0 0 48px;min-width:auto}.container div.left-menu.un-spread .manager-system-title{display:none}.container div.left-menu.un-spread .left-menu-back{width:48px}.container div.left-menu.un-spread .left-menu-body{overflow:inherit;overflow-x:inherit;width:100%}.cn-navfold-item-child-collapsed-first-title>.cn-navfold-deco-bottom,.cn-navfold-item-child-collapsed-first-title>.cn-navfold-deco-top{display:none}.cn-navfold-cat>.cn-navfold-cat-child>.cn-navfold-item>.cn-navfold-item-head>.cn-navfold-title{padding-left:0}.next-icon-taobao::before{font-family:solution-font;content:\'\\e6c3\';color:#666}.next-icon-xinlang::before{font-family:solution-font;content:\'\\e60c\';color:#666}.next-icon-xinlang.next-icon-small::before{font-size:22px;margin-top:5px}.tbl-search-bg{background:#fff}.breadcrumb{border-bottom:1px solid #f2f2f2;padding:12px 24px}.gap-line{border-bottom:1px solid #eee;height:0;width:100%}.next-radio-group label{margin-right:20px}.detail-title{font-size:32px;padding:32px 12px}.detail-item-title{padding:12px 24px;background:#f8f8f8}.tbl-search-bg .tbl-search-wrap{padding-top:0}.next-accordion .tbl-search-adv-item{margin-bottom:12px}.tbl-search-adv-overlay .tbl-search-adv-overlay-toolbar{box-shadow:none;border-top:1px solid #f2f2f2}.right-detail{position:fixed;right:0;top:48px;height:calc(100% - 48px);background:#fff;box-shadow:-4px 0 10px rgba(0,0,0,.1);overflow:hidden;transition:transform .4s ease-in,filter 40ms ease-in;width:60%}.right-detail.show{transform:translateX(0);filter:none}.right-detail.hide{transform:translateX(100%);filter:blur(2px)}.right-detail .right-detail-header{padding:6px 0 6px 20px;background:#f3f3f3}.right-detail .right-detail-header .title{line-height:28px}.right-detail .right-detail-header .right-detail-close-btn{cursor:pointer;transition:transform .2s}.right-detail .right-detail-header .right-detail-close-btn:hover{transform:rotate(180deg)}.right-detail .right-detail-content{height:calc(100% - 46px);overflow:auto}.cn-dash-board .cn-dash-board-row .cn-dash-board-item.cn-dash-board-item-gap:last-child{z-index:-1}.custom-dash-board{color:#333;padding:0 20px;margin-top:1px}.custom-dash-board.cn-dash-board .cn-dash-board-row .cn-dash-board-item[href]{color:#333}.custom-dash-board.cn-dash-board .cn-dash-board-gap-mark{border-color:#333}.custom-dash-board.cn-dash-board .cn-dash-board-row .cn-dash-board-item{border-color:#efefef}span.detail-item-info-label{width:70px;text-align:left;display:inline-block}.cn-stnav-donot-merge{position:fixed!important}.next-form-item-inset .next-date-picker{border:none}div[data-slot=content]{margin-top:48px}.cn-table.next-table .next-table-row.highlighted{background:#e6f3ff}.next-btn.next-btn-secondary a,.next-btn.next-btn-secondary a:link{color:#fff}ul.tbl-search-tagbar li.tbl-search-tag{border-radius:2px;background:0 0;border:1px solid #ccc;color:#333}ul.tbl-search-tagbar li.tbl-search-tag button.next-btn{background:0 0}ul.tbl-search-tagbar li.tbl-search-tag button.next-btn:hover{background:0 0}ul.tbl-search-tagbar .tbl-search-clear-tag{margin-left:8px}.form-tooltip-explain-help{margin-top:4px}.form-tooltip-explain-help:empty{margin-top:0}.list-split{display:inline-block;width:1px;height:12px;background:#e8e8e8;vertical-align:middle;margin-left:4px;margin-right:4px}.next-form-item.has-error .form-tooltip-explain-help+.next-form-item-explain{background:#e63d2e;color:#fff}.form-tooltip-explain .next-form-item-explain::after{background:#e63d2e}.menu-toggle{position:absolute;top:0;right:-20px;z-index:10;height:30px;line-height:30px;background:#f2f2f2;cursor:pointer;color:#999;width:20px;text-align:center}.next-table th .next-table-cell-wrapper{word-break:break-word}.next-form-item-label{min-height:auto}.next-form .next-form-item-label{display:-webkit-inline-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.next-form-item .next-form-item-control{vertical-align:middle}.next-form.next-form-medium .next-form-item-label{line-height:20px;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;vertical-align:middle}.next-form.next-form-small .next-form-item-label{line-height:16px;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;vertical-align:middle}.next-form.next-form-large .next-form-item-label{line-height:20px;-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center;vertical-align:middle}.next-form .next-form-item.textarea-field .next-form-item-label{-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;margin-top:8px}.tbl-search-quick-row:not(:last-child){margin-bottom:12px}.next-input-group.large .next-input-addon,.next-input-group.medium .next-input-addon,.next-input-group.small .next-input-addon{line-height:1}.cn-table.next-table .next-table-row.highlighted,.cn-table.next-table.zebra .next-table-row.highlighted td{background:#dbedff}.demo-box{background:#f9f7f7!important;padding:20px 0;border-radius:2px}.search-wrap .spread-icon{position:absolute;top:-17px;right:-22px;background:#e5e5e5;color:#bfbfbf;line-height:20px;cursor:pointer}.search-wrap{position:relative}.search-wrap .search-main{overflow:hidden}.search-wrap .search-main.fold{max-height:100px}.login-tabs .next-tabs-content{padding:16px 0 0 0}.tag-select-field .next-tag{margin-bottom:0}.text-ellipsis{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cn-dyna-icon{vertical-align:middle}';