# 多主题方案
目前社区较成熟的多主题方案 antd  可能有些封装的cms 例如 dora(实际dora没有)之类的 可能也会有 



工程侧实践用法参考 ai-xx 工程

1. 生成 theme 目录  dark.js light.js  两份种子token 
light.js

```
export default {
  token: {
    'blue.1': '#f0f5ff',
    'blue.2': '#e6edff',
    'blue.3': '#bdceff',
    'blue.4': '#94adff',
    'blue.5': '#6b89ff',
    'blue.6': '#4161fd',
    'blue.7': '#2d44d6',
    'blue.8': '#1c2bb0',
    'blue.9': '#0f178a',
    'blue.10': '#0a0d63',
    'cyan.1': '#e6fffb',
    'cyan.2': '#b5f5ec',
    'cyan.3': '#87e8de',
    'cyan.4': '#5cdbd3',
    'cyan.5': '#36cfc9',
    'cyan.6': '#13c2c2',
    'cyan.7': '#08979c',
    'cyan.8': '#006d75',
    'cyan.9': '#00474f',
    'cyan.10': '#002329',
    'geekblue.1': '#f0f5ff',
    'geekblue.2': '#d6e4ff',
    'geekblue.3': '#adc6ff',
    'geekblue.4': '#85a5ff',
    'geekblue.5': '#597ef7',
    'geekblue.6': '#2f54eb',
    'geekblue.7': '#1d39c4',
    'geekblue.8': '#10239e',
    'geekblue.9': '#061178',
    'geekblue.10': '#030852',
    'gold.1': '#fffbe6',
    'gold.2': '#fff1b8',
    'gold.3': '#ffe58f',
    'gold.4': '#ffd666',
    'gold.5': '#ffc53d',
    'gold.6': '#faad14',
    'gold.7': '#d48806',
    'gold.8': '#ad6800',
    'gold.9': '#874d00',
    'gold.10': '#613400',
    'green.1': '#f3fff0',
    'green.2': '#cffcc5',
    'green.3': '#a2f095',
    'green.4': '#77e368',
    'green.5': '#4dd640',
    'green.6': '#25ca1d',
    'green.7': '#11a30f',
    'green.8': '#057d07',
    'green.9': '#005704',
    'green.10': '#003004',
    'lime.1': '#fcffe6',
    'lime.2': '#f4ffb8',
    'lime.3': '#eaff8f',
    'lime.4': '#d3f261',
    'lime.5': '#bae637',
    'lime.6': '#a0d911',
    'lime.7': '#7cb305',
    'lime.8': '#5b8c00',
    'lime.9': '#3f6600',
    'lime.10': '#254000',
    'magenta.1': '#fff0f6',
    'magenta.2': '#ffd6e7',
    'magenta.3': '#ffadd2',
    'magenta.4': '#ff85c0',
    'magenta.5': '#f759ab',
    'magenta.6': '#eb2f96',
    'magenta.7': '#c41d7f',
    'magenta.8': '#9e1068',
    'magenta.9': '#780650',
    'magenta.10': '#520339',
    'orange.1': '#fff7e6',
    'orange.2': '#ffe7ba',
    'orange.3': '#ffd591',
    'orange.4': '#ffc069',
    colorText: 'rgba(0, 0, 0, 0.88)',
    colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
    'orange.5': '#ffa940',
    colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
    colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
    'orange.6': '#fa8c16',
    'orange.7': '#d46b08',
    colorTextLightSolid: '#ffffff',
    colorTextHeading: 'rgba(0, 0, 0, 0.88)',
    colorTextLabel: 'rgba(0, 0, 0, 0.65)',
    'orange.8': '#ad4e00',
    colorTextDescription: 'rgba(0, 0, 0, 0.45)',
    'orange.9': '#873800',
    colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
    'orange.10': '#612500',
    'purple.1': '#f9f0ff',
    'purple.2': '#efdbff',
    'purple.3': '#d3adf7',
    colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
    colorIcon: 'rgba(0, 0, 0, 0.45)',
    'purple.4': '#b37feb',
    colorIconHover: 'rgba(0, 0, 0, 0.88)',
    colorBgContainer: '#ffffff',
    'purple.5': '#9254de',
    colorBgElevated: '#ffffff',
    'purple.6': '#722ed1',
    colorBgLayout: '#f5f5f5',
    'purple.7': '#531dab',
    colorBgMask: 'rgba(0, 0, 0, 0.45)',
    'purple.8': '#391085',
    colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',
    'purple.9': '#22075e',
    colorBorder: '#d9d9d9',
    'purple.10': '#120338',
    colorBorderSecondary: '#f0f0f0',
    'red.1': '#fff2f0',
    colorFill: 'rgba(0, 0, 0, 0.15)',
    'red.2': '#ffe9e6',
    colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
    colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
    colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
    'red.3': '#ffc3bd',
    'red.4': '#ff9b94',
    colorWhite: '#ffffff',
    'red.5': '#fa6e69',
    colorBgBase: '#ffffff',
    'red.6': '#ec3e3e',
    colorTextBase: '#000000',
    'red.7': '#c72a2f',
    'red.8': '#a11a23',
    colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
    'red.9': '#7a0d18',
    colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
    'red.10': '#540813',
    colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
    'volcano.1': '#fff2e8',
    colorBorderBg: '#ffffff',
    'volcano.2': '#ffd8bf',
    colorFillContent: 'rgba(0, 0, 0, 0.06)',
    'volcano.3': '#ffbb96',
    colorFillContentHover: 'rgba(0, 0, 0, 0.15)',
    'volcano.4': '#ff9c6e',
    colorFillAlter: 'rgba(0, 0, 0, 0.02)',
    'volcano.5': '#ff7a45',
    'volcano.6': '#fa541c',
    'volcano.7': '#d4380d',
    transparent: 'rgba(0, 0, 0, 0)',
    colorSplit: 'rgba(0, 0, 0, 0.08)',
    'yellow.1': '#feffe6',
    'volcano.8': '#ad2102',
    'yellow.2': '#ffffb8',
    'yellow.3': '#fffb8f',
    'volcano.9': '#871400',
    'yellow.4': '#fff566',
    'volcano.10': '#610b00',
    'yellow.5': '#ffec3d',
    'yellow.6': '#fadb14',
    'yellow.7': '#d4b106',
    'yellow.8': '#ad8b00',
    'yellow.9': '#876800',
    'yellow.10': '#614700',
    colorPrimary: '#4161fd',
    colorSuccess: '#25ca1d',
    colorWarning: '#faad14',
    colorInfo: '#4161fd',
    colorError: '#ec3e3e',
    colorLink: '#4161fd',
    colorErrorBg: '#fff2f0',
    colorErrorBgHover: '#ffe9e6',
    colorErrorBorder: '#ffc3bd',
    colorErrorBorderHover: '#ff9b94',
    colorErrorHover: '#fa6e69',
    colorErrorActive: '#c72a2f',
    colorErrorTextHover: '#fa6e69',
    colorErrorText: '#ec3e3e',
    colorErrorTextActive: '#c72a2f',
    colorLinkHover: '#6b89ff',
    colorInfoBg: '#f0f5ff',
    colorInfoBgHover: '#e6edff',
    colorInfoBorder: '#bdceff',
    colorInfoBorderHover: '#94adff',
    colorInfoHover: '#6b89ff',
    colorInfoActive: '#2d44d6',
    colorInfoTextHover: '#6b89ff',
    colorInfoText: '#4161fd',
    colorInfoTextActive: '#2d44d6',
    colorLinkActive: '#2d44d6',
    colorPrimaryBg: '#f0f5ff',
    colorPrimaryBgHover: '#e6edff',
    colorPrimaryBorder: '#bdceff',
    colorPrimaryBorderHover: '#94adff',
    colorPrimaryHover: '#6b89ff',
    colorPrimaryActive: '#2d44d6',
    colorPrimaryTextHover: '#6b89ff',
    colorPrimaryText: '#4161fd',
    colorPrimaryTextActive: '#2d44d6',
    colorSuccessBg: '#f3fff0',
    colorSuccessBgHover: '#cffcc5',
    colorSuccessBorder: '#a2f095',
    colorSuccessBorderHover: '#77e368',
    colorSuccessHover: '#77e368',
    colorSuccessActive: '#11a30f',
    colorSuccessTextHover: '#4dd640',
    colorSuccessText: '#25ca1d',
    colorSuccessTextActive: '#11a30f',
    colorWarningBg: '#fffbe6',
    colorWarningBgHover: '#fff1b8',
    colorWarningBorder: '#ffe58f',
    colorWarningBorderHover: '#ffd666',
    colorWarningHover: '#ffd666',
    colorWarningActive: '#d48806',
    colorWarningTextHover: '#ffc53d',
    colorWarningText: '#faad14',
    colorWarningTextActive: '#d48806',
    colorErrorOutline: 'rgba(255, 38, 6, 0.06)',
    colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
    colorItemBorder: 'rgba(0, 0, 0, 0.1)',
    colorItemHover: 'rgba(0, 0, 0, 0.02)',
    controlItemBgActive: '#f0f5ff',
    controlItemBgActiveDisabled: 'rgba(0, 0, 0, 0.15)',
    controlItemBgActiveHover: '#e6edff',
    controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
    controlOutline: 'rgba(65, 97, 253, 0.1)',
    controlTmpOutline: 'rgba(0, 0, 0, 0.02)',
    borderRadius: 6,
    borderRadiusLG: 8,
    borderRadiusSM: 4,
    borderRadiusXS: 2,
    sizeStep: 4,
    sizeUnit: 4,
    controlInteractiveSize: 16,
    size: 16,
    sizeLG: 24,
    sizeMD: 20,
    sizeMS: 16,
    sizeSM: 12,
    sizeXL: 32,
    sizeXS: 8,
    sizeXXL: 48,
    controlHeight: 32,
    sizeXXS: 4,
    controlHeightLG: 40,
    controlHeightSM: 24,
    controlHeightXS: 16,
    lineWidth: 1,
    lineWidthBold: 2,
    lineWidthFocus: 4,
    controlOutlineWidth: 2,
    screenLG: 992,
    screenLGMax: 1199,
    screenLGMin: 992,
    screenMD: 768,
    screenMDMax: 991,
    screenMDMin: 768,
    screenSM: 576,
    screenSMMax: 767,
    screenSMMin: 576,
    screenXL: 1200,
    screenXLMax: 1599,
    screenXLMin: 1200,
    screenXS: 480,
    screenXSMax: 575,
    screenXSMin: 480,
    screenXXL: 1600,
    screenXXLMin: 1600,
    sizePopupArrow: 16,
    margin: 16,
    marginLG: 24,
    marginMD: 20,
    marginSM: 12,
    marginXL: 32,
    marginXS: 8,
    marginXXL: 48,
    marginXXS: 4,
    padding: 16,
    paddingLG: 24,
    paddingMD: 20,
    paddingSM: 12,
    paddingXL: 32,
    paddingXS: 8,
    paddingXXS: 4,
    paddingContentHorizontal: 16,
    paddingContentHorizontalLG: 24,
    paddingContentHorizontalSM: 16,
    paddingContentVertical: 12,
    paddingContentVerticalLG: 16,
    paddingContentVerticalSM: 8,
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    fontFamily: 'SF Pro Text',
    fontFamilyCode: 'Courier Prime',
    fontSize: 14,
    fontSizeLG: 16,
    fontSizeSM: 12,
    fontSizeXL: 20,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    lineHeight: 1.5714285714285714,
    lineHeightHeading1: 1.2105263157894737,
    lineHeightHeading2: 1.2666666666666666,
    lineHeightHeading3: 1.3333333333333333,
    lineHeightHeading4: 1.4,
    lineHeightHeading5: 1.5,
    lineHeightLG: 1.5,
    lineHeightSM: 1.6666666666666667,
    fontSizeIcon: 12,
    fontWeightStrong: 600,
    colorFillAlterSolid: '#fafafa',
    fontWeightNormal: 400,
    colorFilledHandleBg: '#f0f0f0',
    colorBgSolid: '#000000',
    colorBgSolidActive: 'rgba(0, 0, 0, 0.95)',
    colorBgSolidHover: 'rgba(0, 0, 0, 0.75)',
    solidTextColor: '#ffffff',
    'pink.1': '#fff0f6',
    'pink.2': '#ffd6e7',
    'pink.3': '#ffadd2',
    'pink.4': '#ff85c0',
    'pink.5': '#f759ab',
    'pink.6': '#eb2f96',
    'pink.7': '#c41d7f',
    'pink.8': '#9e1068',
    'pink.9': '#780650',
    'pink.10': '#520339',
    fontSizeXS: 10,
    lineHeightXS: 1.6,
    borderRadiusXL: 12,
    isDarkMode: false,
    isLightMode: true,
    borderRadiusXXL: 16,
    borderColorShadow: 'rgba(0, 0, 0, 0.05)',
    colorBgFill: '#f5f5f5',
  },
  components: {
    Input: {
      paddingInlineSM: 7,
      paddingInlineLG: 11,
      paddingInline: 11,
      paddingBlockSM: 0,
      paddingBlockLG: 7,
      paddingBlock: 4,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      paddingLG: 24,
      lineWidth: 1,
      lineHeightLG: 1.5,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSizeIcon: 12,
      fontSize: 14,
      controlPaddingHorizontalSM: 8,
      controlPaddingHorizontal: 12,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
      colorWarningBorderHover: '#ffd666',
      colorWarning: '#faad14',
      colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimary: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorErrorOutline: 'rgba(255, 38, 6, 0.06)',
      colorErrorBorderHover: '#ff9b94',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      hoverBorderColor: '#6b89ff',
      addonBg: 'rgba(0, 0, 0, 0.02)',
      activeBorderColor: '#4161fd',
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorErrorBgHover: '#ffe9e6',
      colorErrorBg: '#fff2f0',
      colorWarningBg: '#fffbe6',
      colorWarningBgHover: '#fff1b8',
      colorWarningText: '#faad14',
      colorErrorText: '#ec3e3e',
      activeBg: '#ffffff',
      hoverBg: '#ffffff',
      inputFontSize: 14,
      inputFontSizeLG: 16,
      inputFontSizeSM: 12,
      fontFamily: 'SF Pro Text',
    },
    Transfer: {
      listWidthLG: 250,
      listWidth: 180,
      listHeight: 200,
      itemPaddingBlock: 5,
      paddingXS: 8,
      paddingSM: 12,
      marginXXS: 4,
      marginXS: 8,
      margin: 16,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeIcon: 12,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActiveHover: '#e6edff',
      controlItemBgActive: '#f0f5ff',
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusLG: 8,
      colorWarning: '#faad14',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorLinkHover: '#6b89ff',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      itemHeight: 32,
      headerHeight: 40,
      fontFamily: 'SF Pro Text',
    },
    Segmented: {
      segmentedBgColorSelected: '#ffffff',
      paddingXXS: 4,
      marginSM: 12,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlPaddingHorizontalSM: 8,
      controlPaddingHorizontal: 12,
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusXS: 2,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorTextLabel: 'rgba(0, 0, 0, 0.65)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorFill: 'rgba(0, 0, 0, 0.15)',
      colorBgLayout: '#f5f5f5',
      colorBgElevated: '#ffffff',
      segmentedGroupBg: 'rgba(0, 0, 0, 0.04)',
      itemSelectedColor: 'rgba(0, 0, 0, 0.88)',
      itemSelectedBg: '#ffffff',
      itemHoverColor: 'rgba(0, 0, 0, 0.88)',
      itemHoverBg: 'rgba(0, 0, 0, 0.06)',
      itemColor: 'rgba(0, 0, 0, 0.65)',
      itemActiveBg: 'rgba(0, 0, 0, 0.15)',
      trackPadding: 4,
      trackBg: '#f5f5f5',
      fontFamily: 'SF Pro Text',
    },
    Switch: {
      trackPadding: 2,
      trackMinWidthSM: 28,
      trackMinWidth: 44,
      trackHeightSM: 16,
      trackHeight: 22,
      handleSizeSM: 12,
      handleSize: 18,
      marginXXS: 4,
      lineWidthFocus: 4,
      lineHeight: 1.5714285714285714,
      fontSizeSM: 12,
      fontSizeIcon: 12,
      fontSize: 14,
      controlHeight: 32,
      colorWhite: '#ffffff',
      colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
      colorTextLightSolid: '#ffffff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      handleBg: '#ffffff',
      fontFamily: 'SF Pro Text',
    },
    TimePicker: {
      timeColumnWidth: 56,
      timeColumnHeight: 224,
      timeCellHeight: 28,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      sizePopupArrow: 16,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeightLG: 1.5,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeLG: 16,
      fontSize: 14,
      controlPaddingHorizontalSM: 8,
      controlPaddingHorizontal: 12,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusXS: 2,
      borderRadius: 6,
      colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
      colorWarning: '#faad14',
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextLightSolid: '#ffffff',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorLinkHover: '#6b89ff',
      colorLinkActive: '#2d44d6',
      colorLink: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorErrorOutline: 'rgba(255, 38, 6, 0.06)',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      colorBgElevated: '#ffffff',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      hoverBorderColor: '#6b89ff',
      cellHoverBg: 'rgba(0, 0, 0, 0.04)',
      cellHeight: 24,
      activeBorderColor: '#4161fd',
      paddingInline: 11,
      paddingInlineLG: 11,
      paddingInlineSM: 7,
      activeBg: '#ffffff',
      hoverBg: '#ffffff',
      cellBgDisabled: 'rgba(0, 0, 0, 0.04)',
      cellActiveWithRangeBg: '#f0f5ff',
      cellHoverWithRangeBg: '#c8dfff',
      cellRangeBorderColor: '#7cb3ff',
      multipleItemBg: 'rgba(0, 0, 0, 0.06)',
      multipleItemBorderColor: 'rgba(0, 0, 0, 0)',
      multipleItemBorderColorDisabled: 'rgba(0, 0, 0, 0)',
      multipleItemColorDisabled: 'rgba(0, 0, 0, 0.25)',
      multipleSelectorBgDisabled: 'rgba(0, 0, 0, 0.04)',
      cellWidth: 36,
      multipleItemHeight: 24,
      multipleItemHeightLG: 32,
      multipleItemHeightSM: 16,
      paddingBlock: 4,
      paddingBlockLG: 7,
      paddingBlockSM: 0,
      presetsMaxWidth: 200,
      presetsWidth: 120,
      textHeight: 40,
      withoutTimeCellHeight: 66,
      inputFontSize: 14,
      inputFontSizeLG: 16,
      inputFontSizeSM: 12,
      fontFamily: 'SF Pro Text',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
    },
    Timeline: {
      itemPaddingBottom: 20,
      paddingXXS: 4,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      marginSM: 12,
      margin: 16,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeSM: 12,
      fontSize: 14,
      controlHeightLG: 40,
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccess: '#25ca1d',
      colorPrimary: '#4161fd',
      colorError: '#ec3e3e',
      colorBgContainer: '#ffffff',
      tailColor: 'rgba(0, 0, 0, 0.08)',
      dotBg: '#ffffff',
      fontFamily: 'SF Pro Text',
    },
    Tabs: {
      horizontalItemGutter: 32,
      cardGutter: 2,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      paddingLG: 24,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      marginSM: 12,
      margin: 16,
      lineWidthFocus: 4,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeSM: 12,
      fontSizeLG: 16,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimaryActive: '#2d44d6',
      colorPrimary: '#4161fd',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorBorderSecondary: '#f0f0f0',
      colorBorder: '#d9d9d9',
      colorBgContainer: '#ffffff',
      itemSelectedColor: '#4161fd',
      itemHoverColor: '#6b89ff',
      itemColor: 'rgba(0, 0, 0, 0.88)',
      itemActiveColor: '#2d44d6',
      inkBarColor: '#4161fd',
      cardHeight: 40,
      cardBg: 'rgba(0, 0, 0, 0.02)',
      titleFontSize: 14,
      titleFontSizeLG: 16,
      titleFontSizeSM: 14,
      fontFamily: 'SF Pro Text',
    },
    Table: {
      stickyScrollBarBorderRadius: 100,
      headerSplitColor: '#f0f0f0',
      headerBg: 'rgba(0, 0, 0, 0.02)',
      footerBg: 'rgba(0, 0, 0, 0.02)',
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      padding: 16,
      marginXXS: 4,
      margin: 16,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeSM: 12,
      fontSizeIcon: 12,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActiveHover: '#e6edff',
      controlItemBgActive: '#f0f5ff',
      controlInteractiveSize: 16,
      controlHeight: 32,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimary: '#4161fd',
      colorLinkHover: '#6b89ff',
      colorLinkActive: '#2d44d6',
      colorLink: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorFillContent: 'rgba(0, 0, 0, 0.06)',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorBorderSecondary: '#f0f0f0',
      colorBgContainer: '#ffffff',
      rowSelectedHoverBg: '#e6edff',
      headerFilterHoverBg: 'rgba(0, 0, 0, 0.06)',
      headerColor: 'rgba(0, 0, 0, 0.88)',
      headerBorderRadius: 8,
      footerColor: 'rgba(0, 0, 0, 0.88)',
      filterDropdownMenuBg: '#ffffff',
      filterDropdownBg: '#ffffff',
      cellPaddingInlineSM: 8,
      cellPaddingInlineMD: 8,
      cellPaddingInline: 16,
      cellPaddingBlockSM: 8,
      cellPaddingBlockMD: 12,
      cellPaddingBlock: 16,
      borderColor: '#f0f0f0',
      rowHoverBg: '#fafafa',
      headerSortActiveBg: 'rgba(0, 0, 0, 0.06)',
      bodySortBg: '#fafafa',
      headerSortHoverBg: 'rgba(0, 0, 0, 0.06)',
      cellFontSize: 14,
      cellFontSizeMD: 14,
      cellFontSizeSM: 14,
      fontFamily: 'SF Pro Text',
    },
    Steps: {
      dotSize: 8,
      dotCurrentSize: 10,
      descriptionMaxWidth: 140,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      paddingLG: 24,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      marginSM: 12,
      marginLG: 24,
      margin: 16,
      lineWidthFocus: 4,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeightSM: 1.6666666666666667,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeSM: 12,
      fontSizeLG: 16,
      fontSizeIcon: 12,
      fontSizeHeading3: 24,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlHeightLG: 40,
      borderRadiusSM: 4,
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
      colorTextLightSolid: '#ffffff',
      colorTextLabel: 'rgba(0, 0, 0, 0.65)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorFillContent: 'rgba(0, 0, 0, 0.06)',
      colorError: '#ec3e3e',
      colorBorderSecondary: '#f0f0f0',
      colorBorderBg: '#ffffff',
      colorBgContainer: '#ffffff',
      titleLineHeight: 32,
      iconSizeSM: 24,
      iconSize: 32,
      finishIconBorderColor: '#1677ff',
      customIconFontSize: 24,
      iconFontSize: 14,
      fontFamily: 'SF Pro Text',
    },
    Spin: {
      dotSizeSM: 14,
      dotSize: 20,
      contentHeight: 400,
      marginXXS: 4,
      lineHeight: 1.5714285714285714,
      fontSize: 14,
      controlHeightLG: 40,
      controlHeight: 32,
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimary: '#4161fd',
      colorBgContainer: '#ffffff',
      dotSizeLG: 32,
      fontFamily: 'SF Pro Text',
    },
    Slider: {
      railSize: 4,
      handleSizeHover: 12,
      dotSize: 8,
      controlSize: 10,
      handleSize: 10,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSize: 14,
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusXS: 2,
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryBorderHover: '#94adff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorFillContentHover: 'rgba(0, 0, 0, 0.15)',
      colorBorderSecondary: '#f0f0f0',
      colorBgElevated: '#ffffff',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      trackHoverBg: '#94adff',
      trackBgDisabled: 'rgba(0, 0, 0, 0.04)',
      trackBg: '#bdceff',
      railHoverBg: 'rgba(0, 0, 0, 0.06)',
      railBg: 'rgba(0, 0, 0, 0.04)',
      handleColor: '#bdceff',
      handleActiveColor: '#4161fd',
      dotBorderColor: '#f0f0f0',
      dotActiveBorderColor: '#bdceff',
      handleColorDisabled: '#bfbfbf',
      fontFamily: 'SF Pro Text',
    },
    Rate: {
      rateStarSize: 20,
      marginXS: 8,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSize: 14,
      controlHeightLG: 40,
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorFillContent: 'rgba(0, 0, 0, 0.06)',
      fontFamily: 'SF Pro Text',
    },
    Radio: {
      radioSize: 16,
      dotSize: 8,
      buttonPaddingInline: 15,
      paddingXS: 8,
      padding: 16,
      marginXS: 8,
      lineWidthFocus: 4,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlItemBgActiveDisabled: 'rgba(0, 0, 0, 0.15)',
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorWhite: '#ffffff',
      colorTextLightSolid: '#ffffff',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimaryActive: '#2d44d6',
      colorPrimary: '#4161fd',
      colorBorder: '#d9d9d9',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      wrapperMarginInlineEnd: 8,
      dotColorDisabled: 'rgba(0, 0, 0, 0.25)',
      buttonSolidCheckedHoverBg: '#6b89ff',
      buttonSolidCheckedColor: '#ffffff',
      buttonSolidCheckedBg: '#4161fd',
      buttonSolidCheckedActiveBg: '#2d44d6',
      buttonColor: 'rgba(0, 0, 0, 0.88)',
      buttonCheckedColorDisabled: 'rgba(0, 0, 0, 0.25)',
      buttonCheckedBgDisabled: 'rgba(0, 0, 0, 0.15)',
      buttonCheckedBg: '#ffffff',
      buttonBg: '#ffffff',
      fontFamily: 'SF Pro Text',
      radioBgColor: '#4161fd',
      radioColor: '#ffffff',
    },
    Popover: {
      titleMinWidth: 177,
      sizePopupArrow: 16,
      paddingSM: 12,
      padding: 16,
      marginXS: 8,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSize: 14,
      controlHeight: 32,
      borderRadiusXS: 2,
      borderRadiusLG: 8,
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorBgElevated: '#ffffff',
      fontFamily: 'SF Pro Text',
    },
    Notification: {
      width: 384,
      paddingMD: 20,
      paddingLG: 24,
      paddingContentHorizontalLG: 24,
      marginXS: 8,
      marginSM: 12,
      marginLG: 24,
      margin: 16,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlHeightLG: 40,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      colorWarning: '#faad14',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccess: '#25ca1d',
      colorInfo: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorError: '#ec3e3e',
      colorBgElevated: '#ffffff',
      lineHeightLG: 1.5,
      lineWidthFocus: 4,
      fontFamily: 'SF Pro Text',
    },
    Tooltip: {
      paddingSM: 12,
      sizePopupArrow: 16,
      paddingXS: 8,
      lineHeight: 1.5714285714285714,
      fontSize: 14,
      controlHeight: 32,
      borderRadiusXS: 2,
      borderRadius: 6,
      colorTextLightSolid: '#ffffff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorBgSpotlight: 'rgba(0, 0, 0, 0.85)',
      fontFamily: 'SF Pro Text',
    },
    Menu: {
      subMenuItemBg: 'rgba(0, 0, 0, 0.02)',
      darkSubMenuItemBg: '#000c17',
      darkItemDisabledColor: 'rgba(255, 255, 255, 0.25)',
      darkItemColor: 'rgba(255, 255, 255, 0.65)',
      darkGroupTitleColor: 'rgba(255, 255, 255, 0.65)',
      darkItemBg: '#001529',
      paddingXS: 8,
      paddingXL: 32,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      margin: 16,
      lineWidthFocus: 4,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeight: 1.8333333333333333,
      fontSizeLG: 16,
      fontSize: 12,
      controlItemBgActive: '#f0f5ff',
      controlHeightSM: 24,
      controlHeightLG: 40,
      borderRadius: 6,
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorFillContent: 'rgba(0, 0, 0, 0.06)',
      colorErrorHover: '#fa6e69',
      colorErrorBg: '#fff2f0',
      colorError: '#ec3e3e',
      colorBgElevated: '#ffffff',
      colorBgContainer: '#ffffff',
      subMenuItemBorderRadius: 8,
      popupBg: '#ffffff',
      itemSelectedColor: '#4161fd',
      itemSelectedBg: '#f0f5ff',
      itemHoverColor: 'rgba(0, 0, 0, 0.88)',
      itemHoverBg: 'rgba(0, 0, 0, 0.06)',
      itemHeight: 40,
      itemDisabledColor: 'rgba(0, 0, 0, 0.25)',
      itemColor: 'rgba(0, 0, 0, 0.88)',
      itemBorderRadius: 8,
      itemBg: '#ffffff',
      iconSize: 24,
      horizontalItemSelectedColor: '#4161fd',
      horizontalItemSelectedBg: 'rgba(0, 0, 0, 0)',
      horizontalItemHoverColor: '#4161fd',
      horizontalItemHoverBg: 'rgba(0, 0, 0, 0)',
      groupTitleColor: 'rgba(0, 0, 0, 0.45)',
      darkItemSelectedColor: '#ffffff',
      darkItemSelectedBg: '#4161fd',
      darkItemHoverColor: '#ffffff',
      darkItemHoverBg: 'rgba(0, 0, 0, 0)',
      collapsedIconSize: 16,
      darkPopupBg: '#001529',
      activeBarBorderWidth: 1,
      collapsedWidth: 80,
      dropdownWidth: 160,
      itemMarginBlock: 8,
      itemMarginInline: 4,
      iconMarginInlineEnd: 8,
      groupTitleFontSize: 14,
      groupTitleLineHeight: 1.5714285714285714,
      fontFamily: 'SF Pro Text',
      subMenuItemSelectedColor: '#4161fd',
    },
    InputNumber: {
      paddingInlineSM: 7,
      paddingInlineLG: 11,
      paddingInline: 11,
      paddingBlockSM: 0,
      paddingBlockLG: 7,
      paddingBlock: 4,
      handleWidth: 22,
      controlWidth: 90,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      lineWidth: 1,
      lineHeightLG: 1.5,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlPaddingHorizontalSM: 8,
      controlPaddingHorizontal: 12,
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorWarningBorderHover: '#ffd666',
      colorWarning: '#faad14',
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimary: '#4161fd',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorErrorBorderHover: '#ff9b94',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      hoverBorderColor: '#6b89ff',
      handleHoverColor: '#4161fd',
      handleBorderColor: '#d9d9d9',
      handleBg: '#ffffff',
      handleActiveBg: 'rgba(0, 0, 0, 0.02)',
      addonBg: 'rgba(0, 0, 0, 0.02)',
      activeBorderColor: '#4161fd',
      activeBg: '#ffffff',
      hoverBg: '#ffffff',
      inputFontSize: 14,
      inputFontSizeLG: 16,
      inputFontSizeSM: 12,
      fontFamily: 'SF Pro Text',
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
      colorWarningBg: '#fffbe6',
      colorWarningBgHover: '#fff1b8',
      colorErrorBg: '#fff2f0',
      colorErrorBgHover: '#ffe9e6',
      filledHandleBg: '#f0f0f0',
      colorErrorText: '#ec3e3e',
      colorWarningText: '#faad14',
    },
    Image: {
      previewOperationSize: 18,
      previewOperationHoverColor: 'rgba(255, 255, 255, 0.85)',
      previewOperationColorDisabled: 'rgba(255, 255, 255, 0.25)',
      previewOperationColor: 'rgba(255, 255, 255, 0.65)',
      paddingXXS: 4,
      paddingSM: 12,
      paddingLG: 24,
      marginXXS: 4,
      marginXL: 32,
      marginSM: 12,
      margin: 16,
      fontSizeIcon: 12,
      controlHeightLG: 40,
      colorTextLightSolid: '#ffffff',
      colorBgMask: 'rgba(0, 0, 0, 0.45)',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
    },
    Card: {
      headerHeightSM: 38,
      headerHeight: 56,
      paddingXS: 8,
      paddingSM: 12,
      paddingLG: 24,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      lineWidth: 1,
      lineHeightLG: 1.5,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSize: 14,
      borderRadiusLG: 8,
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimary: '#4161fd',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorBorderSecondary: '#f0f0f0',
      colorBgContainer: '#ffffff',
      headerBg: 'rgba(0, 0, 0, 0)',
      headerFontSize: 16,
      headerFontSizeSM: 14,
      fontHeight: 22,
      fontSizeLG: 16,
      fontFamily: 'SF Pro Text',
      bodyPaddingSM: 12,
      headerPaddingSM: 12,
      bodyPadding: 24,
      headerPadding: 24,
    },
    Carousel: {
      dotWidth: 16,
      dotHeight: 3,
      dotActiveWidth: 24,
      marginXXS: 4,
      lineHeight: 1.5714285714285714,
      fontSize: 14,
      controlHeightSM: 24,
      controlHeightLG: 40,
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorBgContainer: '#ffffff',
      fontFamily: 'SF Pro Text',
    },
    Cascader: {
      dropdownHeight: 180,
      controlWidth: 184,
      controlItemWidth: 111,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      marginXS: 8,
      lineWidthFocus: 4,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeLG: 16,
      fontSizeIcon: 12,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlInteractiveSize: 16,
      controlHeight: 32,
      borderRadiusSM: 4,
      colorWhite: '#ffffff',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorBorder: '#d9d9d9',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      optionSelectedBg: '#f0f5ff',
      menuPadding: 4,
      optionSelectedFontWeight: 600,
      fontFamily: 'SF Pro Text',
      borderRadiusLG: 8,
      optionSelectedColor: 'rgba(0, 0, 0, 0.88)',
    },
    Calendar: {
      yearControlWidth: 80,
      monthControlWidth: 70,
      controlHeight: 32,
      screenXS: 480,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeightSM: 1.6666666666666667,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeSM: 12,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlHeightSM: 24,
      controlHeightLG: 40,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      colorTextLightSolid: '#ffffff',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimary: '#4161fd',
      colorLinkHover: '#6b89ff',
      colorLinkActive: '#2d44d6',
      colorLink: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      itemActiveBg: '#f0f5ff',
      fullPanelBg: '#ffffff',
      fullBg: '#ffffff',
      fontHeightSM: 20,
      fontFamily: 'SF Pro Text',
    },
    Button: {
      paddingInlineSM: 8,
      paddingInlineLG: 12,
      paddingInline: 10,
      onlyIconSizeSM: 16,
      onlyIconSizeLG: 22,
      paddingXS: 8,
      paddingContentHorizontal: 16,
      marginXS: 8,
      lineWidthFocus: 4,
      lineWidth: 1,
      contentLineHeight: 1.5714285714285714,
      contentFontSizeLG: 16,
      contentFontSize: 14,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorTextLightSolid: '#ffffff',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimaryActive: '#2d44d6',
      colorPrimary: '#4161fd',
      colorLinkHover: '#6b89ff',
      colorLinkActive: '#2d44d6',
      colorLink: '#4161fd',
      colorErrorOutline: 'rgba(255, 38, 6, 0.06)',
      colorErrorHover: '#fa6e69',
      colorErrorBorderHover: '#ff9b94',
      colorErrorBg: '#fff2f0',
      colorErrorActive: '#c72a2f',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      textHoverBg: 'rgba(0, 0, 0, 0.06)',
      primaryColor: '#ffffff',
      onlyIconSize: 16,
      linkHoverBg: 'rgba(0, 0, 0, 0)',
      groupBorderColor: '#6b89ff',
      ghostBg: 'rgba(0, 0, 0, 0)',
      defaultGhostColor: '#ffffff',
      defaultGhostBorderColor: '#ffffff',
      defaultColor: 'rgba(0, 0, 0, 0.88)',
      defaultBorderColor: '#d9d9d9',
      defaultBg: '#ffffff',
      dangerColor: '#ffffff',
      borderColorDisabled: '#d9d9d9',
      defaultHoverBg: '#ffffff',
      defaultHoverColor: '#6b89ff',
      defaultHoverBorderColor: '#6b89ff',
      defaultActiveBg: '#ffffff',
      defaultActiveColor: '#2d44d6',
      defaultActiveBorderColor: '#2d44d6',
      fontWeight: 400,
      contentFontSizeSM: 12,
      contentLineHeightLG: 1.5,
      contentLineHeightSM: 1.8333333333333333,
      textTextActiveColor: 'rgba(0, 0, 0, 0.88)',
      textTextHoverColor: 'rgba(0, 0, 0, 0.88)',
      textTextColor: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryBg: '#f0f5ff',
      colorBgSolid: '#000000',
      colorBgSolidActive: 'rgba(0, 0, 0, 0.95)',
      colorBgSolidHover: 'rgba(0, 0, 0, 0.75)',
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
      solidTextColor: '#ffffff',
      paddingInlineXS: 6,
      contentFontSizeXS: 10,
      contentLineHeightXS: 1.6,
      onlyIconSizeXS: 12,
      controlHeightXS: 16,
      marginXXS: 4,
    },
    Badge: {
      statusSize: 6,
      indicatorHeight: 20,
      dotSize: 6,
      paddingXS: 8,
      marginXS: 8,
      lineWidth: 1,
      borderRadiusSM: 4,
      fontSizeSM: 12,
      fontSize: 14,
      colorWarning: '#faad14',
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextLightSolid: '#ffffff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccess: '#25ca1d',
      colorPrimary: '#4161fd',
      colorErrorHover: '#fa6e69',
      colorError: '#ec3e3e',
      colorBorderBg: '#ffffff',
      colorBgContainer: '#ffffff',
      indicatorHeightSM: 14,
      textFontSize: 12,
      textFontSizeSM: 12,
      fontHeight: 22,
      lineHeight: 1.5714285714285714,
      fontFamily: 'SF Pro Text',
    },
    Form: {
      screenXSMax: 575,
      screenSMMax: 767,
      screenMDMax: 991,
      screenLGMax: 1199,
      paddingXS: 8,
      paddingSM: 12,
      marginXXS: 4,
      marginXS: 8,
      marginLG: 24,
      margin: 16,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      colorWarning: '#faad14',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccess: '#25ca1d',
      colorPrimary: '#4161fd',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      labelRequiredMarkColor: '#ec3e3e',
      labelColor: 'rgba(0, 0, 0, 0.88)',
      itemMarginBottom: 24,
      labelColonMarginInlineEnd: 8,
      labelColonMarginInlineStart: 2,
      labelHeight: 32,
      labelFontSize: 14,
      fontFamily: 'SF Pro Text',
    },
    Avatar: {
      marginXXS: 4,
      marginXS: 8,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeXL: 20,
      fontSizeLG: 16,
      fontSizeHeading3: 24,
      fontSize: 14,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextLightSolid: '#ffffff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorBorderBg: '#ffffff',
      containerSizeSM: 24,
      containerSizeLG: 40,
      containerSize: 32,
      textFontSize: 18,
      textFontSizeLG: 24,
      textFontSizeSM: 14,
      fontFamily: 'SF Pro Text',
    },
    Tour: {
      sizePopupArrow: 16,
      paddingXS: 8,
      padding: 16,
      marginXS: 8,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSize: 14,
      borderRadiusXS: 2,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorWhite: '#ffffff',
      colorTextLightSolid: '#ffffff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimary: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorFill: 'rgba(0, 0, 0, 0.15)',
      colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
      colorBgElevated: '#ffffff',
      closeBtnSize: 22,
      primaryNextBtnHoverBg: '#f0f0f0',
      primaryPrevBtnBg: 'rgba(255, 255, 255, 0.15)',
      fontFamily: 'SF Pro Text',
      lineWidthFocus: 4,
    },
    QRCode: {
      paddingSM: 12,
      marginXS: 8,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSize: 14,
      controlHeight: 32,
      borderRadiusLG: 8,
      colorWhite: '#ffffff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      fontFamily: 'SF Pro Text',
    },
    Upload: {
      paddingXS: 8,
      paddingSM: 12,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      marginXL: 32,
      margin: 16,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSizeHeading3: 24,
      fontSizeHeading2: 30,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlHeightLG: 40,
      borderRadiusLG: 8,
      colorTextLightSolid: '#ffffff',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimary: '#4161fd',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorErrorBg: '#fff2f0',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      colorBgMask: 'rgba(0, 0, 0, 0.45)',
      fontHeight: 22,
      fontHeightSM: 20,
      lineWidthFocus: 4,
      fontFamily: 'SF Pro Text',
    },
    Typography: {
      paddingSM: 12,
      marginXXS: 4,
      marginXS: 8,
      lineWidth: 1,
      lineHeightHeading5: 1.5,
      lineHeightHeading4: 1.4,
      lineHeightHeading3: 1.3333333333333333,
      lineHeightHeading2: 1.2666666666666666,
      lineHeightHeading1: 1.2105263157894737,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeHeading5: 16,
      fontSizeHeading4: 20,
      fontSizeHeading3: 24,
      fontSizeHeading2: 30,
      fontSizeHeading1: 38,
      fontSize: 14,
      colorWarning: '#faad14',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccess: '#25ca1d',
      colorLinkHover: '#6b89ff',
      colorLinkActive: '#2d44d6',
      colorLink: '#4161fd',
      colorErrorHover: '#fa6e69',
      colorErrorActive: '#c72a2f',
      colorError: '#ec3e3e',
      fontFamilyCode: 'Courier Prime',
    },
    TreeSelect: {
      paddingXS: 8,
      marginXXS: 4,
      marginXS: 8,
      lineWidthFocus: 4,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlInteractiveSize: 16,
      controlHeightSM: 24,
      borderRadiusSM: 4,
      borderRadius: 6,
      colorWhite: '#ffffff',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorBorder: '#d9d9d9',
      colorBgElevated: '#ffffff',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      titleHeight: 24,
      nodeSelectedBg: '#f0f5ff',
      nodeHoverBg: 'rgba(0, 0, 0, 0.04)',
      fontFamily: 'SF Pro Text',
      borderRadiusLG: 8,
    },
    Tree: {
      paddingSM: 12,
      borderRadiusLG: 8,
      paddingXS: 8,
      marginXXS: 4,
      marginXS: 8,
      lineWidthFocus: 4,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlInteractiveSize: 16,
      controlHeightSM: 24,
      borderRadiusSM: 4,
      borderRadius: 6,
      colorWhite: '#ffffff',
      colorTextLightSolid: '#ffffff',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorBorder: '#d9d9d9',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      titleHeight: 24,
      nodeSelectedBg: '#f0f5ff',
      nodeHoverBg: 'rgba(0, 0, 0, 0.04)',
      directoryNodeSelectedColor: '#ffffff',
      directoryNodeSelectedBg: '#4161fd',
      fontFamily: 'SF Pro Text',
      nodeHoverColor: 'rgba(0, 0, 0, 0.88)',
      nodeSelectedColor: 'rgba(0, 0, 0, 0.88)',
      indentSize: 24,
    },
    Tag: {
      paddingXXS: 4,
      marginXS: 8,
      lineWidth: 1,
      lineHeightSM: 1.6666666666666667,
      lineHeight: 1.5714285714285714,
      fontSizeSM: 12,
      fontSizeIcon: 12,
      fontSize: 14,
      borderRadiusSM: 4,
      colorTextLightSolid: '#ffffff',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryActive: '#2d44d6',
      colorPrimary: '#4161fd',
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
      colorBorder: '#d9d9d9',
      colorWarningBorder: '#ffe58f',
      colorWarningBg: '#fffbe6',
      colorSuccessBorder: '#a2f095',
      colorSuccessBg: '#f3fff0',
      colorInfoBorder: '#bdceff',
      colorInfoBg: '#f0f5ff',
      colorErrorBorder: '#ffc3bd',
      colorErrorBg: '#fff2f0',
      defaultColor: 'rgba(0, 0, 0, 0.88)',
      defaultBg: 'rgba(0, 0, 0, 0.02)',
      fontFamily: 'SF Pro Text',
    },
    Statistic: {
      padding: 16,
      marginXXS: 4,
      lineHeight: 1.5714285714285714,
      fontSizeHeading3: 24,
      fontSize: 14,
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      contentFontSize: 24,
      titleFontSize: 14,
      fontFamily: 'SF Pro Text',
    },
    Skeleton: {
      padding: 16,
      marginXXS: 4,
      marginSM: 12,
      marginLG: 24,
      controlHeightXS: 16,
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusSM: 4,
      colorFillContent: 'rgba(0, 0, 0, 0.06)',
      colorFill: 'rgba(0, 0, 0, 0.15)',
    },
    Select: {
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeSM: 12,
      fontSizeLG: 16,
      fontSizeIcon: 12,
      fontSize: 14,
      controlPaddingHorizontalSM: 8,
      controlPaddingHorizontal: 12,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlHeightXS: 16,
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusXS: 2,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
      colorWarningHover: '#ffd666',
      colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimary: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorErrorOutline: 'rgba(255, 38, 6, 0.06)',
      colorErrorHover: '#fa6e69',
      colorBorder: '#d9d9d9',
      colorBgElevated: '#ffffff',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      singleItemHeightLG: 40,
      selectorBg: '#ffffff',
      optionSelectedColor: 'rgba(0, 0, 0, 0.88)',
      optionSelectedBg: '#f0f5ff',
      // optionLineHeight: null,
      optionHeight: 32,
      optionActiveBg: 'rgba(0, 0, 0, 0.04)',
      multipleSelectorBgDisabled: 'rgba(0, 0, 0, 0.04)',
      multipleItemHeightLG: 32,
      multipleItemHeight: 24,
      multipleItemColorDisabled: 'rgba(0, 0, 0, 0.25)',
      multipleItemBorderColorDisabled: 'rgba(0, 0, 0, 0)',
      multipleItemBorderColor: 'rgba(0, 0, 0, 0)',
      multipleItemBg: 'rgba(0, 0, 0, 0.06)',
      clearBg: '#ffffff',
      // optionFontSize: 'SF Pro Text',
      optionSelectedFontWeight: 600,
      fontFamily: 'SF Pro Text',
      showArrowPaddingInlineEnd: 18,
      activeBorderColor: '#4161fd',
      hoverBorderColor: '#6b89ff',
      colorErrorBg: '#fff2f0',
      colorErrorBgHover: '#ffe9e6',
      colorWarningBg: '#fffbe6',
      colorWarningBgHover: '#fff1b8',
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorWarning: '#faad14',
      colorError: '#ec3e3e',
    },
    Result: {
      paddingXS: 8,
      paddingXL: 32,
      paddingLG: 24,
      padding: 16,
      marginXS: 8,
      lineHeightHeading3: 1.3333333333333333,
      lineHeight: 1.5714285714285714,
      fontSizeHeading3: 24,
      fontSize: 14,
      colorWarning: '#faad14',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorSuccess: '#25ca1d',
      colorInfo: '#4161fd',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorError: '#ec3e3e',
      iconFontSize: 72,
      subtitleFontSize: 14,
      titleFontSize: 24,
    },
    Progress: {
      paddingXS: 8,
      marginXXS: 4,
      marginXS: 8,
      lineHeight: 1.5714285714285714,
      fontSizeSM: 12,
      fontSize: 14,
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccess: '#25ca1d',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorError: '#ec3e3e',
      colorBgContainer: '#ffffff',
      remainingColor: 'rgba(0, 0, 0, 0.06)',
      defaultColor: '#4161fd',
      circleTextColor: 'rgba(0, 0, 0, 0.88)',
      fontFamily: 'SF Pro Text',
    },
    Popconfirm: {
      marginXXS: 4,
      marginXS: 8,
      fontWeightStrong: 600,
      fontSize: 14,
      colorWarning: '#faad14',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorText: 'rgba(0, 0, 0, 0.88)',
    },
    Pagination: {
      screenSM: 576,
      screenLG: 992,
      paddingXXS: 4,
      paddingSM: 12,
      marginXXS: 4,
      marginXS: 8,
      marginSM: 12,
      margin: 16,
      lineWidthFocus: 4,
      lineWidth: 1,
      lineHeightLG: 1.5,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeSM: 12,
      fontSizeLG: 16,
      fontSize: 14,
      controlPaddingHorizontalSM: 8,
      controlPaddingHorizontal: 12,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlItemBgActiveDisabled: 'rgba(0, 0, 0, 0.15)',
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorErrorOutline: 'rgba(255, 38, 6, 0.06)',
      colorBorder: '#d9d9d9',
      colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
      colorBgTextActive: 'rgba(0, 0, 0, 0.15)',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      itemSizeSM: 24,
      itemSize: 32,
      itemLinkBg: '#ffffff',
      itemInputBg: '#ffffff',
      itemBg: '#ffffff',
      itemActiveColorDisabled: 'rgba(0, 0, 0, 0.25)',
      itemActiveBgDisabled: 'rgba(0, 0, 0, 0.15)',
      itemActiveBg: '#ffffff',
      fontFamily: 'SF Pro Text',
    },
    Modal: {
      screenSMMax: 767,
      paddingXS: 8,
      paddingMD: 20,
      paddingLG: 24,
      paddingContentHorizontalLG: 24,
      padding: 16,
      marginXS: 8,
      marginSM: 12,
      marginLG: 24,
      margin: 16,
      lineWidthFocus: 4,
      lineWidth: 1,
      lineHeightHeading5: 1.5,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeLG: 16,
      fontSizeHeading5: 16,
      fontSize: 14,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      colorWarning: '#faad14',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccess: '#25ca1d',
      colorPrimaryBorder: '#bdceff',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorBgMask: 'rgba(0, 0, 0, 0.45)',
      titleColor: 'rgba(0, 0, 0, 0.88)',
      headerBg: '#ffffff',
      footerBg: 'rgba(0, 0, 0, 0)',
      contentBg: '#ffffff',
      titleFontSize: 16,
      titleLineHeight: 1.375,
      fontHeight: 22,
      fontFamily: 'SF Pro Text',
    },
    Message: {
      paddingXS: 8,
      paddingSM: 12,
      marginXS: 8,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlHeightLG: 40,
      borderRadiusLG: 8,
      colorWarning: '#faad14',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccess: '#25ca1d',
      colorInfo: '#4161fd',
      colorError: '#ec3e3e',
      contentBg: '#ffffff',
      fontFamily: 'SF Pro Text',
    },
    List: {
      screenSM: 576,
      screenMD: 768,
      paddingXS: 8,
      paddingSM: 12,
      paddingLG: 24,
      paddingContentVerticalSM: 8,
      paddingContentVerticalLG: 16,
      paddingContentVertical: 12,
      paddingContentHorizontalLG: 24,
      paddingContentHorizontal: 16,
      padding: 16,
      marginXXS: 4,
      marginXXL: 48,
      marginSM: 12,
      marginLG: 24,
      margin: 16,
      lineWidth: 1,
      lineHeightLG: 1.5,
      lineHeight: 1.5714285714285714,
      fontSizeSM: 12,
      fontSizeLG: 16,
      fontSize: 14,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusLG: 8,
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimary: '#4161fd',
      colorBorder: '#d9d9d9',
      headerBg: 'rgba(0, 0, 0, 0)',
      footerBg: 'rgba(0, 0, 0, 0)',
      avatarMarginRight: 16,
      descriptionFontSize: 14,
      fontFamily: 'SF Pro Text',
    },
    FloatButton: {
      paddingXXS: 4,
      marginXXL: 48,
      marginLG: 24,
      margin: 16,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeSM: 12,
      fontSizeLG: 16,
      fontSizeIcon: 12,
      fontSize: 14,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlHeightLG: 40,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      colorTextLightSolid: '#ffffff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimaryHover: '#6b89ff',
      colorPrimary: '#4161fd',
      colorFillContent: 'rgba(0, 0, 0, 0.06)',
      colorBgElevated: '#ffffff',
      fontFamily: 'SF Pro Text',
    },
    Empty: {
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      fontSize: 14,
      lineHeight: 1.5714285714285714,
    },
    Dropdown: {
      sizePopupArrow: 16,
      paddingXXS: 4,
      paddingXS: 8,
      marginXXS: 4,
      marginXS: 8,
      lineWidthFocus: 4,
      lineHeight: 1.5714285714285714,
      fontSizeSM: 12,
      fontSizeIcon: 12,
      fontSize: 14,
      controlPaddingHorizontal: 12,
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActiveHover: '#e6edff',
      controlItemBgActive: '#f0f5ff',
      controlHeight: 32,
      borderRadiusXS: 2,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      colorTextLightSolid: '#ffffff',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorError: '#ec3e3e',
      colorBgElevated: '#ffffff',
      paddingBlock: 5,
      fontFamily: 'SF Pro Text',
    },
    Drawer: {
      paddingXS: 8,
      paddingLG: 24,
      padding: 16,
      marginSM: 12,
      lineWidth: 1,
      lineHeightLG: 1.5,
      fontWeightStrong: 600,
      fontSizeLG: 16,
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorBgMask: 'rgba(0, 0, 0, 0.45)',
      colorBgElevated: '#ffffff',
      lineWidthFocus: 4,
    },
    Divider: {
      marginXS: 8,
      marginLG: 24,
      margin: 16,
      lineWidth: 1,
      fontSizeLG: 16,
      fontSize: 14,
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      lineHeight: 1.5714285714285714,
      fontFamily: 'SF Pro Text',
    },
    Descriptions: {
      paddingXS: 8,
      paddingSM: 12,
      paddingLG: 24,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      lineWidth: 1,
      lineHeightSM: 1.6666666666666667,
      lineHeightLG: 1.5,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeSM: 12,
      fontSizeLG: 16,
      fontSize: 14,
      borderRadiusLG: 8,
      colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
      colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      titleColor: 'rgba(0, 0, 0, 0.88)',
      labelBg: 'rgba(0, 0, 0, 0.02)',
      contentColor: 'rgba(0, 0, 0, 0.88)',
      fontFamily: 'SF Pro Text',
      labelColor: 'rgba(0, 0, 0, 0.45)',
    },
    DatePicker: {
      sizePopupArrow: 16,
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      padding: 16,
      marginXXS: 4,
      marginXS: 8,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeightLG: 1.5,
      lineHeight: 1.5714285714285714,
      fontWeightStrong: 600,
      fontSizeLG: 16,
      fontSize: 14,
      controlPaddingHorizontalSM: 8,
      controlPaddingHorizontal: 12,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusXS: 2,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
      colorWarningHover: '#ffd666',
      colorWarning: '#faad14',
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextLightSolid: '#ffffff',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorLinkHover: '#6b89ff',
      colorLinkActive: '#2d44d6',
      colorLink: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorErrorOutline: 'rgba(255, 38, 6, 0.06)',
      colorErrorHover: '#fa6e69',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      colorBgElevated: '#ffffff',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      hoverBorderColor: '#6b89ff',
      cellHoverBg: 'rgba(0, 0, 0, 0.04)',
      cellHeight: 24,
      activeBorderColor: '#4161fd',
      paddingInline: 11,
      paddingInlineSM: 7,
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
      colorErrorBg: '#fff2f0',
      colorWarningBg: '#fffbe6',
      colorWarningText: '#faad14',
      colorErrorText: '#ec3e3e',
      colorWarningBgHover: '#fff1b8',
      colorErrorBgHover: '#ffe9e6',
      activeBg: '#ffffff',
      hoverBg: '#ffffff',
      cellBgDisabled: 'rgba(0, 0, 0, 0.04)',
      cellActiveWithRangeBg: '#f0f5ff',
      cellHoverWithRangeBg: '#c8dfff',
      cellRangeBorderColor: '#7cb3ff',
      multipleItemBg: 'rgba(0, 0, 0, 0.06)',
      multipleItemBorderColor: 'rgba(0, 0, 0, 0)',
      multipleItemBorderColorDisabled: 'rgba(0, 0, 0, 0)',
      multipleItemColorDisabled: 'rgba(0, 0, 0, 0.25)',
      multipleSelectorBgDisabled: 'rgba(0, 0, 0, 0.04)',
      cellWidth: 36,
      multipleItemHeight: 24,
      multipleItemHeightLG: 32,
      multipleItemHeightSM: 16,
      paddingBlock: 4,
      paddingBlockLG: 7,
      paddingBlockSM: 0,
      'paddingInline 2': 11,
      presetsMaxWidth: 200,
      presetsWidth: 120,
      textHeight: 40,
      timeCellHeight: 28,
      timeColumnHeight: 224,
      timeColumnWidth: 56,
      withoutTimeCellHeight: 66,
      inputFontSize: 14,
      inputFontSizeLG: 16,
      inputFontSizeSM: 12,
      fontHeight: 22,
      fontHeightLG: 24,
      fontFamily: 'SF Pro Text',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
    },
    Collapse: {
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      paddingLG: 24,
      padding: 16,
      marginSM: 12,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSizeIcon: 12,
      fontSize: 14,
      borderRadiusLG: 8,
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorFillAlter: 'rgba(0, 0, 0, 0.02)',
      colorBorder: '#d9d9d9',
      colorBgContainer: '#ffffff',
      headerBg: 'rgba(0, 0, 0, 0.02)',
      contentBg: '#ffffff',
      fontHeight: 22,
      fontHeightLG: 24,
      lineHeightLG: 1.5,
      fontFamily: 'SF Pro Text',
    },
    Checkbox: {
      paddingXS: 8,
      marginXS: 8,
      lineWidthFocus: 4,
      lineWidthBold: 2,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      controlInteractiveSize: 16,
      borderRadiusSM: 4,
      colorWhite: '#ffffff',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorBorder: '#d9d9d9',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      fontFamily: 'SF Pro Text',
    },
    Breadcrumb: {
      paddingXXS: 4,
      marginXXS: 4,
      marginXS: 8,
      lineWidthFocus: 4,
      lineHeight: 1.5714285714285714,
      fontSizeIcon: 12,
      fontSize: 14,
      borderRadiusSM: 4,
      colorPrimaryBorder: '#bdceff',
      colorBgTextHover: 'rgba(0, 0, 0, 0.06)',
      separatorColor: 'rgba(0, 0, 0, 0.45)',
      linkHoverColor: 'rgba(0, 0, 0, 0.88)',
      linkColor: 'rgba(0, 0, 0, 0.45)',
      lastItemColor: 'rgba(0, 0, 0, 0.88)',
      itemColor: 'rgba(0, 0, 0, 0.45)',
      separatorMargin: 8,
      iconFontSize: 14,
      fontHeight: 22,
      fontFamily: 'SF Pro Text',
    },
    Anchor: {
      paddingXXS: 4,
      lineWidthBold: 2,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSize: 14,
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSplit: 'rgba(0, 0, 0, 0.08)',
      colorPrimary: '#4161fd',
      linkPaddingInlineStart: 16,
      linkPaddingBlock: 4,
      fontFamily: 'SF Pro Text',
    },
    Alert: {
      paddingMD: 20,
      paddingContentVerticalSM: 8,
      paddingContentHorizontalLG: 24,
      marginXS: 8,
      marginSM: 12,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      fontSizeLG: 16,
      fontSizeIcon: 12,
      fontSizeHeading3: 24,
      fontSize: 14,
      borderRadiusLG: 8,
      colorWarningBorder: '#ffe58f',
      colorWarningBg: '#fffbe6',
      colorWarning: '#faad14',
      colorTextHeading: 'rgba(0, 0, 0, 0.88)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorSuccessBorder: '#a2f095',
      colorSuccessBg: '#f3fff0',
      colorSuccess: '#25ca1d',
      colorInfoBorder: '#bdceff',
      colorInfoBg: '#f0f5ff',
      colorInfo: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorErrorBorder: '#ffc3bd',
      colorErrorBg: '#fff2f0',
      colorError: '#ec3e3e',
      withDescriptionIconSize: 24,
      fontFamily: 'SF Pro Text',
    },
    Space: {
      paddingXS: 8,
      paddingLG: 24,
      padding: 16,
    },
    AutoComplete: {
      paddingXXS: 4,
      paddingXS: 8,
      paddingSM: 12,
      lineWidth: 1,
      lineHeight: 1.5714285714285714,
      controlPaddingHorizontalSM: 8,
      controlPaddingHorizontal: 12,
      controlOutlineWidth: 2,
      controlOutline: 'rgba(65, 97, 253, 0.1)',
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      controlItemBgActive: '#f0f5ff',
      controlHeightXS: 16,
      controlHeightSM: 24,
      controlHeightLG: 40,
      controlHeight: 32,
      borderRadiusXS: 2,
      borderRadiusSM: 4,
      borderRadiusLG: 8,
      borderRadius: 6,
      colorWarningOutline: 'rgba(255, 215, 5, 0.1)',
      colorWarningHover: '#ffd666',
      colorWarning: '#faad14',
      colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
      colorTextQuaternary: 'rgba(0, 0, 0, 0.25)',
      colorTextPlaceholder: 'rgba(0, 0, 0, 0.25)',
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorPrimaryHover: '#6b89ff',
      colorPrimary: '#4161fd',
      colorIconHover: 'rgba(0, 0, 0, 0.88)',
      colorIcon: 'rgba(0, 0, 0, 0.45)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorErrorOutline: 'rgba(255, 38, 6, 0.06)',
      colorErrorHover: '#fa6e69',
      colorError: '#ec3e3e',
      colorBorder: '#d9d9d9',
      colorBgElevated: '#ffffff',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      optionActiveBg: 'rgba(0, 0, 0, 0.04)',
      optionHeight: 32,
      optionFontSize: 14,
      fontFamily: 'SF Pro Text',
      fontSize: 14,
      fontSizeIcon: 12,
      fontSizeLG: 16,
      fontSizeSM: 12,
    },
    Layout: {
      bodyBg: '#f5f5f5',
      footerBg: '#f5f5f5',
      headerBg: '#001529',
      headerColor: 'rgba(0, 0, 0, 0.88)',
      lightSiderBg: '#ffffff',
      lightTriggerBg: '#ffffff',
      lightTriggerColor: 'rgba(0, 0, 0, 0.88)',
      siderBg: '#001529',
      triggerBg: '#002140',
      triggerColor: '#ffffff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      headerHeight: 64,
      triggerHeight: 48,
      zeroTriggerHeight: 40,
      zeroTriggerWidth: 40,
      borderRadius: 6,
      fontSize: 14,
      fontSizeXL: 20,
    },
    Mentions: {
      fontFamily: 'SF Pro Text',
      fontSize: 14,
      lineHeight: 1.5714285714285714,
    },
    Splitter: {
      railSize: 4,
      handleSizeHover: 12,
      dotSize: 8,
      controlSize: 10,
      handleSize: 10,
      trackHoverBg: '#94adff',
      trackBgDisabled: 'rgba(0, 0, 0, 0.04)',
      trackBg: '#bdceff',
      railHoverBg: 'rgba(0, 0, 0, 0.06)',
      railBg: 'rgba(0, 0, 0, 0.04)',
      handleColor: '#bdceff',
      handleColorDisabled: '#bfbfbf',
      handleActiveColor: '#4161fd',
      dotBorderColor: '#f0f0f0',
      dotActiveBorderColor: '#bdceff',
      lineWidth: 1,
      controlHeightLG: 40,
      controlHeight: 32,
      colorTextDisabled: 'rgba(0, 0, 0, 0.25)',
      colorTextDescription: 'rgba(0, 0, 0, 0.45)',
      colorPrimaryBorderHover: '#94adff',
      colorPrimaryBorder: '#bdceff',
      colorPrimary: '#4161fd',
      colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
      colorFillSecondary: 'rgba(0, 0, 0, 0.06)',
      colorFillContentHover: 'rgba(0, 0, 0, 0.15)',
      colorBorderSecondary: '#f0f0f0',
      colorBgElevated: '#ffffff',
      colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
      colorBgContainer: '#ffffff',
      resizeSpinnerSize: 20,
      lineHeight: 1.5714285714285714,
      fontSize: 14,
      fontFamily: 'SF Pro Text',
      controlHeightSM: 24,
      borderRadiusXS: 2,
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorFill: 'rgba(0, 0, 0, 0.15)',
      controlItemBgActive: '#f0f5ff',
      controlItemBgActiveHover: '#e6edff',
      controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
      fontSizeSM: 12,
      splitBarSize: 2,
      splitTriggerSize: 6,
    },
  },
};
```

分 token 部分 components部分



token部分来源推测
1. 基础色部分
```
import { theme } from 'antd';

const { getDesignToken, defaultAlgorithm } = theme;

const globalToken = getDesignToken({
  token: {
        "blue": "#4161fd", // blue.6  
        // ...
  }
});

// 或者
defaultAlgorithm({
    'blue': "#4161fd"
})

```
需要对 getDesignToken 做改造 输出 blue.xx 结构   

2.需要到主题编辑器 确认 colorPrimary 等
会派生 colorPrimaryActive 等 
https://ant-design.antgroup.com/theme-editor-cn
```
import { theme } from 'antd';

const { getDesignToken, defaultAlgorithm } = theme;

const globalToken = getDesignToken({
  token: {
        "blue": "#4161fd",// blue.6  
        "colorPrimary": "#4161fd", // blue.6  
        // ...
  }
});

// 或者
defaultAlgorithm({
    'colorPrimary': "#4161fd"
})
```
得到
只有全局token部分

```
{
    "blue": "#4161fd",
    "purple": "#722ED1",
    "cyan": "#13C2C2",
    "green": "#52C41A",
    "magenta": "#EB2F96",
    "pink": "#EB2F96",
    "red": "#F5222D",
    "orange": "#FA8C16",
    "yellow": "#FADB14",
    "volcano": "#FA541C",
    "geekblue": "#2F54EB",
    "gold": "#FAAD14",
    "lime": "#A0D911",
    "colorPrimary": "#1677ff",
    "colorSuccess": "#52c41a",
    "colorWarning": "#faad14",
    "colorError": "#ff4d4f",
    "colorInfo": "#1677ff",
    "colorLink": "#1677ff",
    "colorTextBase": "#000",
    "colorBgBase": "#fff",
    "fontFamily": "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
    "fontFamilyCode": "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    "fontSize": 14,
    "lineWidth": 1,
    "lineType": "solid",
    "motionUnit": 0.1,
    "motionBase": 0,
    "motionEaseOutCirc": "cubic-bezier(0.08, 0.82, 0.17, 1)",
    "motionEaseInOutCirc": "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    "motionEaseOut": "cubic-bezier(0.215, 0.61, 0.355, 1)",
    "motionEaseInOut": "cubic-bezier(0.645, 0.045, 0.355, 1)",
    "motionEaseOutBack": "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    "motionEaseInBack": "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    "motionEaseInQuint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    "motionEaseOutQuint": "cubic-bezier(0.23, 1, 0.32, 1)",
    "borderRadius": 6,
    "sizeUnit": 4,
    "sizeStep": 4,
    "sizePopupArrow": 16,
    "controlHeight": 32,
    "zIndexBase": 0,
    "zIndexPopupBase": 1000,
    "opacityImage": 1,
    "wireframe": false,
    "motion": true,
    "blue-1": "#f0f5ff",
    "blue1": "#f0f5ff",
    "blue-2": "#e6edff",
    "blue2": "#e6edff",
    "blue-3": "#bdceff",
    "blue3": "#bdceff",
    "blue-4": "#94adff",
    "blue4": "#94adff",
    "blue-5": "#6b89ff",
    "blue5": "#6b89ff",
    "blue-6": "#4161fd",
    "blue6": "#4161fd",
    "blue-7": "#2d44d6",
    "blue7": "#2d44d6",
    "blue-8": "#1c2bb0",
    "blue8": "#1c2bb0",
    "blue-9": "#0f178a",
    "blue9": "#0f178a",
    "blue-10": "#0a0d63",
    "blue10": "#0a0d63",
    "purple-1": "#f9f0ff",
    "purple1": "#f9f0ff",
    "purple-2": "#efdbff",
    "purple2": "#efdbff",
    "purple-3": "#d3adf7",
    "purple3": "#d3adf7",
    "purple-4": "#b37feb",
    "purple4": "#b37feb",
    "purple-5": "#9254de",
    "purple5": "#9254de",
    "purple-6": "#722ed1",
    "purple6": "#722ed1",
    "purple-7": "#531dab",
    "purple7": "#531dab",
    "purple-8": "#391085",
    "purple8": "#391085",
    "purple-9": "#22075e",
    "purple9": "#22075e",
    "purple-10": "#120338",
    "purple10": "#120338",
    "cyan-1": "#e6fffb",
    "cyan1": "#e6fffb",
    "cyan-2": "#b5f5ec",
    "cyan2": "#b5f5ec",
    "cyan-3": "#87e8de",
    "cyan3": "#87e8de",
    "cyan-4": "#5cdbd3",
    "cyan4": "#5cdbd3",
    "cyan-5": "#36cfc9",
    "cyan5": "#36cfc9",
    "cyan-6": "#13c2c2",
    "cyan6": "#13c2c2",
    "cyan-7": "#08979c",
    "cyan7": "#08979c",
    "cyan-8": "#006d75",
    "cyan8": "#006d75",
    "cyan-9": "#00474f",
    "cyan9": "#00474f",
    "cyan-10": "#002329",
    "cyan10": "#002329",
    "green-1": "#f6ffed",
    "green1": "#f6ffed",
    "green-2": "#d9f7be",
    "green2": "#d9f7be",
    "green-3": "#b7eb8f",
    "green3": "#b7eb8f",
    "green-4": "#95de64",
    "green4": "#95de64",
    "green-5": "#73d13d",
    "green5": "#73d13d",
    "green-6": "#52c41a",
    "green6": "#52c41a",
    "green-7": "#389e0d",
    "green7": "#389e0d",
    "green-8": "#237804",
    "green8": "#237804",
    "green-9": "#135200",
    "green9": "#135200",
    "green-10": "#092b00",
    "green10": "#092b00",
    "magenta-1": "#fff0f6",
    "magenta1": "#fff0f6",
    "magenta-2": "#ffd6e7",
    "magenta2": "#ffd6e7",
    "magenta-3": "#ffadd2",
    "magenta3": "#ffadd2",
    "magenta-4": "#ff85c0",
    "magenta4": "#ff85c0",
    "magenta-5": "#f759ab",
    "magenta5": "#f759ab",
    "magenta-6": "#eb2f96",
    "magenta6": "#eb2f96",
    "magenta-7": "#c41d7f",
    "magenta7": "#c41d7f",
    "magenta-8": "#9e1068",
    "magenta8": "#9e1068",
    "magenta-9": "#780650",
    "magenta9": "#780650",
    "magenta-10": "#520339",
    "magenta10": "#520339",
    "pink-1": "#fff0f6",
    "pink1": "#fff0f6",
    "pink-2": "#ffd6e7",
    "pink2": "#ffd6e7",
    "pink-3": "#ffadd2",
    "pink3": "#ffadd2",
    "pink-4": "#ff85c0",
    "pink4": "#ff85c0",
    "pink-5": "#f759ab",
    "pink5": "#f759ab",
    "pink-6": "#eb2f96",
    "pink6": "#eb2f96",
    "pink-7": "#c41d7f",
    "pink7": "#c41d7f",
    "pink-8": "#9e1068",
    "pink8": "#9e1068",
    "pink-9": "#780650",
    "pink9": "#780650",
    "pink-10": "#520339",
    "pink10": "#520339",
    "red-1": "#fff1f0",
    "red1": "#fff1f0",
    "red-2": "#ffccc7",
    "red2": "#ffccc7",
    "red-3": "#ffa39e",
    "red3": "#ffa39e",
    "red-4": "#ff7875",
    "red4": "#ff7875",
    "red-5": "#ff4d4f",
    "red5": "#ff4d4f",
    "red-6": "#f5222d",
    "red6": "#f5222d",
    "red-7": "#cf1322",
    "red7": "#cf1322",
    "red-8": "#a8071a",
    "red8": "#a8071a",
    "red-9": "#820014",
    "red9": "#820014",
    "red-10": "#5c0011",
    "red10": "#5c0011",
    "orange-1": "#fff7e6",
    "orange1": "#fff7e6",
    "orange-2": "#ffe7ba",
    "orange2": "#ffe7ba",
    "orange-3": "#ffd591",
    "orange3": "#ffd591",
    "orange-4": "#ffc069",
    "orange4": "#ffc069",
    "orange-5": "#ffa940",
    "orange5": "#ffa940",
    "orange-6": "#fa8c16",
    "orange6": "#fa8c16",
    "orange-7": "#d46b08",
    "orange7": "#d46b08",
    "orange-8": "#ad4e00",
    "orange8": "#ad4e00",
    "orange-9": "#873800",
    "orange9": "#873800",
    "orange-10": "#612500",
    "orange10": "#612500",
    "yellow-1": "#feffe6",
    "yellow1": "#feffe6",
    "yellow-2": "#ffffb8",
    "yellow2": "#ffffb8",
    "yellow-3": "#fffb8f",
    "yellow3": "#fffb8f",
    "yellow-4": "#fff566",
    "yellow4": "#fff566",
    "yellow-5": "#ffec3d",
    "yellow5": "#ffec3d",
    "yellow-6": "#fadb14",
    "yellow6": "#fadb14",
    "yellow-7": "#d4b106",
    "yellow7": "#d4b106",
    "yellow-8": "#ad8b00",
    "yellow8": "#ad8b00",
    "yellow-9": "#876800",
    "yellow9": "#876800",
    "yellow-10": "#614700",
    "yellow10": "#614700",
    "volcano-1": "#fff2e8",
    "volcano1": "#fff2e8",
    "volcano-2": "#ffd8bf",
    "volcano2": "#ffd8bf",
    "volcano-3": "#ffbb96",
    "volcano3": "#ffbb96",
    "volcano-4": "#ff9c6e",
    "volcano4": "#ff9c6e",
    "volcano-5": "#ff7a45",
    "volcano5": "#ff7a45",
    "volcano-6": "#fa541c",
    "volcano6": "#fa541c",
    "volcano-7": "#d4380d",
    "volcano7": "#d4380d",
    "volcano-8": "#ad2102",
    "volcano8": "#ad2102",
    "volcano-9": "#871400",
    "volcano9": "#871400",
    "volcano-10": "#610b00",
    "volcano10": "#610b00",
    "geekblue-1": "#f0f5ff",
    "geekblue1": "#f0f5ff",
    "geekblue-2": "#d6e4ff",
    "geekblue2": "#d6e4ff",
    "geekblue-3": "#adc6ff",
    "geekblue3": "#adc6ff",
    "geekblue-4": "#85a5ff",
    "geekblue4": "#85a5ff",
    "geekblue-5": "#597ef7",
    "geekblue5": "#597ef7",
    "geekblue-6": "#2f54eb",
    "geekblue6": "#2f54eb",
    "geekblue-7": "#1d39c4",
    "geekblue7": "#1d39c4",
    "geekblue-8": "#10239e",
    "geekblue8": "#10239e",
    "geekblue-9": "#061178",
    "geekblue9": "#061178",
    "geekblue-10": "#030852",
    "geekblue10": "#030852",
    "gold-1": "#fffbe6",
    "gold1": "#fffbe6",
    "gold-2": "#fff1b8",
    "gold2": "#fff1b8",
    "gold-3": "#ffe58f",
    "gold3": "#ffe58f",
    "gold-4": "#ffd666",
    "gold4": "#ffd666",
    "gold-5": "#ffc53d",
    "gold5": "#ffc53d",
    "gold-6": "#faad14",
    "gold6": "#faad14",
    "gold-7": "#d48806",
    "gold7": "#d48806",
    "gold-8": "#ad6800",
    "gold8": "#ad6800",
    "gold-9": "#874d00",
    "gold9": "#874d00",
    "gold-10": "#613400",
    "gold10": "#613400",
    "lime-1": "#fcffe6",
    "lime1": "#fcffe6",
    "lime-2": "#f4ffb8",
    "lime2": "#f4ffb8",
    "lime-3": "#eaff8f",
    "lime3": "#eaff8f",
    "lime-4": "#d3f261",
    "lime4": "#d3f261",
    "lime-5": "#bae637",
    "lime5": "#bae637",
    "lime-6": "#a0d911",
    "lime6": "#a0d911",
    "lime-7": "#7cb305",
    "lime7": "#7cb305",
    "lime-8": "#5b8c00",
    "lime8": "#5b8c00",
    "lime-9": "#3f6600",
    "lime9": "#3f6600",
    "lime-10": "#254000",
    "lime10": "#254000",
    "colorText": "rgba(0,0,0,0.88)",
    "colorTextSecondary": "rgba(0,0,0,0.65)",
    "colorTextTertiary": "rgba(0,0,0,0.45)",
    "colorTextQuaternary": "rgba(0,0,0,0.25)",
    "colorFill": "rgba(0,0,0,0.15)",
    "colorFillSecondary": "rgba(0,0,0,0.06)",
    "colorFillTertiary": "rgba(0,0,0,0.04)",
    "colorFillQuaternary": "rgba(0,0,0,0.02)",
    "colorBgSolid": "rgb(0,0,0)",
    "colorBgSolidHover": "rgba(0,0,0,0.75)",
    "colorBgSolidActive": "rgba(0,0,0,0.95)",
    "colorBgLayout": "#f5f5f5",
    "colorBgContainer": "#ffffff",
    "colorBgElevated": "#ffffff",
    "colorBgSpotlight": "rgba(0,0,0,0.85)",
    "colorBgBlur": "transparent",
    "colorBorder": "#d9d9d9",
    "colorBorderSecondary": "#f0f0f0",
    "colorPrimaryBg": "#e6f4ff",
    "colorPrimaryBgHover": "#bae0ff",
    "colorPrimaryBorder": "#91caff",
    "colorPrimaryBorderHover": "#69b1ff",
    "colorPrimaryHover": "#4096ff",
    "colorPrimaryActive": "#0958d9",
    "colorPrimaryTextHover": "#4096ff",
    "colorPrimaryText": "#1677ff",
    "colorPrimaryTextActive": "#0958d9",
    "colorSuccessBg": "#f6ffed",
    "colorSuccessBgHover": "#d9f7be",
    "colorSuccessBorder": "#b7eb8f",
    "colorSuccessBorderHover": "#95de64",
    "colorSuccessHover": "#95de64",
    "colorSuccessActive": "#389e0d",
    "colorSuccessTextHover": "#73d13d",
    "colorSuccessText": "#52c41a",
    "colorSuccessTextActive": "#389e0d",
    "colorErrorBg": "#fff2f0",
    "colorErrorBgHover": "#fff1f0",
    "colorErrorBgFilledHover": "#ffdfdc",
    "colorErrorBgActive": "#ffccc7",
    "colorErrorBorder": "#ffccc7",
    "colorErrorBorderHover": "#ffa39e",
    "colorErrorHover": "#ff7875",
    "colorErrorActive": "#d9363e",
    "colorErrorTextHover": "#ff7875",
    "colorErrorText": "#ff4d4f",
    "colorErrorTextActive": "#d9363e",
    "colorWarningBg": "#fffbe6",
    "colorWarningBgHover": "#fff1b8",
    "colorWarningBorder": "#ffe58f",
    "colorWarningBorderHover": "#ffd666",
    "colorWarningHover": "#ffd666",
    "colorWarningActive": "#d48806",
    "colorWarningTextHover": "#ffc53d",
    "colorWarningText": "#faad14",
    "colorWarningTextActive": "#d48806",
    "colorInfoBg": "#e6f4ff",
    "colorInfoBgHover": "#bae0ff",
    "colorInfoBorder": "#91caff",
    "colorInfoBorderHover": "#69b1ff",
    "colorInfoHover": "#69b1ff",
    "colorInfoActive": "#0958d9",
    "colorInfoTextHover": "#4096ff",
    "colorInfoText": "#1677ff",
    "colorInfoTextActive": "#0958d9",
    "colorLinkHover": "#69b1ff",
    "colorLinkActive": "#0958d9",
    "colorBgMask": "rgba(0,0,0,0.45)",
    "colorWhite": "#fff",
    "fontSizeSM": 12,
    "fontSizeLG": 16,
    "fontSizeXL": 20,
    "fontSizeHeading1": 38,
    "fontSizeHeading2": 30,
    "fontSizeHeading3": 24,
    "fontSizeHeading4": 20,
    "fontSizeHeading5": 16,
    "lineHeight": 1.5714285714285714,
    "lineHeightLG": 1.5,
    "lineHeightSM": 1.6666666666666667,
    "fontHeight": 22,
    "fontHeightLG": 24,
    "fontHeightSM": 20,
    "lineHeightHeading1": 1.2105263157894737,
    "lineHeightHeading2": 1.2666666666666666,
    "lineHeightHeading3": 1.3333333333333333,
    "lineHeightHeading4": 1.4,
    "lineHeightHeading5": 1.5,
    "sizeXXL": 48,
    "sizeXL": 32,
    "sizeLG": 24,
    "sizeMD": 20,
    "sizeMS": 16,
    "size": 16,
    "sizeSM": 12,
    "sizeXS": 8,
    "sizeXXS": 4,
    "controlHeightSM": 24,
    "controlHeightXS": 16,
    "controlHeightLG": 40,
    "motionDurationFast": "0.1s",
    "motionDurationMid": "0.2s",
    "motionDurationSlow": "0.3s",
    "lineWidthBold": 2,
    "borderRadiusXS": 2,
    "borderRadiusSM": 4,
    "borderRadiusLG": 8,
    "borderRadiusOuter": 4,
    "colorFillContent": "rgba(0,0,0,0.06)",
    "colorFillContentHover": "rgba(0,0,0,0.15)",
    "colorFillAlter": "rgba(0,0,0,0.02)",
    "colorBgContainerDisabled": "rgba(0,0,0,0.04)",
    "colorBorderBg": "#ffffff",
    "colorSplit": "rgba(5,5,5,0.06)",
    "colorTextPlaceholder": "rgba(0,0,0,0.25)",
    "colorTextDisabled": "rgba(0,0,0,0.25)",
    "colorTextHeading": "rgba(0,0,0,0.88)",
    "colorTextLabel": "rgba(0,0,0,0.65)",
    "colorTextDescription": "rgba(0,0,0,0.45)",
    "colorTextLightSolid": "#fff",
    "colorHighlight": "#ff4d4f",
    "colorBgTextHover": "rgba(0,0,0,0.06)",
    "colorBgTextActive": "rgba(0,0,0,0.15)",
    "colorIcon": "rgba(0,0,0,0.45)",
    "colorIconHover": "rgba(0,0,0,0.88)",
    "colorErrorOutline": "rgba(255,38,5,0.06)",
    "colorWarningOutline": "rgba(255,215,5,0.1)",
    "fontSizeIcon": 12,
    "lineWidthFocus": 3,
    "controlOutlineWidth": 2,
    "controlInteractiveSize": 16,
    "controlItemBgHover": "rgba(0,0,0,0.04)",
    "controlItemBgActive": "#e6f4ff",
    "controlItemBgActiveHover": "#bae0ff",
    "controlItemBgActiveDisabled": "rgba(0,0,0,0.15)",
    "controlTmpOutline": "rgba(0,0,0,0.02)",
    "controlOutline": "rgba(5,145,255,0.1)",
    "fontWeightStrong": 600,
    "opacityLoading": 0.65,
    "linkDecoration": "none",
    "linkHoverDecoration": "none",
    "linkFocusDecoration": "none",
    "controlPaddingHorizontal": 12,
    "controlPaddingHorizontalSM": 8,
    "paddingXXS": 4,
    "paddingXS": 8,
    "paddingSM": 12,
    "padding": 16,
    "paddingMD": 20,
    "paddingLG": 24,
    "paddingXL": 32,
    "paddingContentHorizontalLG": 24,
    "paddingContentVerticalLG": 16,
    "paddingContentHorizontal": 16,
    "paddingContentVertical": 12,
    "paddingContentHorizontalSM": 16,
    "paddingContentVerticalSM": 8,
    "marginXXS": 4,
    "marginXS": 8,
    "marginSM": 12,
    "margin": 16,
    "marginMD": 20,
    "marginLG": 24,
    "marginXL": 32,
    "marginXXL": 48,
    "boxShadow": "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    "boxShadowSecondary": "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    "boxShadowTertiary": "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
    "screenXS": 480,
    "screenXSMin": 480,
    "screenXSMax": 575,
    "screenSM": 576,
    "screenSMMin": 576,
    "screenSMMax": 767,
    "screenMD": 768,
    "screenMDMin": 768,
    "screenMDMax": 991,
    "screenLG": 992,
    "screenLGMin": 992,
    "screenLGMax": 1199,
    "screenXL": 1200,
    "screenXLMin": 1200,
    "screenXLMax": 1599,
    "screenXXL": 1600,
    "screenXXLMin": 1600,
    "boxShadowPopoverArrow": "2px 2px 5px rgba(0, 0, 0, 0.05)",
    "boxShadowCard": "\n      0 1px 2px -2px rgba(0,0,0,0.16),\n      0 3px 6px 0 rgba(0,0,0,0.12),\n      0 5px 12px 4px rgba(0,0,0,0.09)\n    ",
    "boxShadowDrawerRight": "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    "boxShadowDrawerLeft": "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    "boxShadowDrawerUp": "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    "boxShadowDrawerDown": "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
    "boxShadowTabsOverflowLeft": "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    "boxShadowTabsOverflowRight": "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    "boxShadowTabsOverflowTop": "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    "boxShadowTabsOverflowBottom": "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
}
```

components 部分 生成方案推测

```
import tokenStatistic from 'antd/lib/version/token.json';
{
  "Upload": {
    "global": ["fontSizeHeading3", "fontHeight", "lineWidth", "controlHeightLG", "colorTextDisabled", "colorText", "fontSize", "lineHeight", "fontFamily", "colorFillAlter", "colorBorder", "borderRadiusLG", "motionDurationSlow", "padding", "lineWidthFocus", "colorPrimaryBorder", "colorPrimaryHover", "margin", "colorPrimary", "marginXXS", "colorTextHeading", "fontSizeLG", "colorTextDescription", "paddingXS", "lineType", "paddingSM", "fontSizeHeading2", "colorError", "colorErrorBg", "colorTextLightSolid", "marginXS", "colorBgMask", "marginXL", "borderRadiusSM", "controlItemBgHover", "colorIcon", "motionEaseInOutCirc", "motionDurationMid", "motionEaseInOut"],
    "component": {
      "actionsColor": "rgba(0,0,0,0.45)"
    }
  },
  "Tabs": {
    "global": ["paddingXXS", "lineHeightLG", "borderRadius", "marginSM", "marginXS", "marginXXS", "margin", "colorBorderSecondary", "lineWidth", "lineType", "lineWidthBold", "motionDurationSlow", "controlHeight", "boxShadowTabsOverflowLeft", "boxShadowTabsOverflowRight", "boxShadowTabsOverflowTop", "boxShadowTabsOverflowBottom", "colorBorder", "paddingLG", "colorText", "fontSize", "lineHeight", "fontFamily", "colorBgContainer", "borderRadiusLG", "boxShadowSecondary", "paddingSM", "colorIcon", "fontSizeSM", "controlItemBgHover", "colorTextDisabled", "motionEaseInOut", "lineWidthFocus", "colorPrimaryBorder", "controlHeightLG", "colorTextHeading", "motionDurationMid", "motionEaseOutQuint", "motionEaseInQuint"],
    "component": {
      "zIndexPopup": 1050,
      "cardBg": "rgba(0,0,0,0.02)",
      "cardHeight": 40,
      "cardHeightSM": 32,
      "cardHeightLG": 48,
      "cardPadding": "8px 16px",
      "cardPaddingSM": "4px 8px",
      "cardPaddingLG": "11px 16px",
      "titleFontSize": 14,
      "titleFontSizeLG": 16,
      "titleFontSizeSM": 14,
      "inkBarColor": "#1677ff",
      "horizontalMargin": "0 0 16px 0",
      "horizontalItemGutter": 32,
      "horizontalItemMargin": "",
      "horizontalItemMarginRTL": "",
      "horizontalItemPadding": "12px 0",
      "horizontalItemPaddingSM": "8px 0",
      "horizontalItemPaddingLG": "16px 0",
      "verticalItemPadding": "8px 24px",
      "verticalItemMargin": "16px 0 0 0",
      "itemColor": "rgba(0,0,0,0.88)",
      "itemSelectedColor": "#1677ff",
      "itemHoverColor": "#4096ff",
      "itemActiveColor": "#0958d9",
      "cardGutter": 2
    }
  },
  "Table": {
    "global": ["colorTextHeading", "colorSplit", "colorBgContainer", "controlInteractiveSize", "padding", "fontWeightStrong", "lineWidth", "lineType", "motionDurationMid", "colorText", "fontSize", "lineHeight", "fontFamily", "margin", "paddingXS", "marginXXS", "fontSizeIcon", "motionDurationSlow", "colorPrimary", "paddingXXS", "fontSizeSM", "borderRadius", "colorIcon", "colorTextDisabled", "controlItemBgHover", "controlItemBgActive", "boxShadowSecondary", "colorLink", "linkDecoration", "lineWidthFocus", "colorPrimaryBorder", "colorLinkHover", "linkHoverDecoration", "linkFocusDecoration", "colorLinkActive", "opacityLoading"],
    "component": {
      "headerBg": "#fafafa",
      "headerColor": "rgba(0,0,0,0.88)",
      "headerSortActiveBg": "#f0f0f0",
      "headerSortHoverBg": "#f0f0f0",
      "bodySortBg": "#fafafa",
      "rowHoverBg": "#fafafa",
      "rowSelectedBg": "#e6f4ff",
      "rowSelectedHoverBg": "#bae0ff",
      "rowExpandedBg": "rgba(0,0,0,0.02)",
      "cellPaddingBlock": 16,
      "cellPaddingInline": 16,
      "cellPaddingBlockMD": 12,
      "cellPaddingInlineMD": 8,
      "cellPaddingBlockSM": 8,
      "cellPaddingInlineSM": 8,
      "borderColor": "#f0f0f0",
      "headerBorderRadius": 8,
      "footerBg": "#fafafa",
      "footerColor": "rgba(0,0,0,0.88)",
      "cellFontSize": 14,
      "cellFontSizeMD": 14,
      "cellFontSizeSM": 14,
      "headerSplitColor": "#f0f0f0",
      "fixedHeaderSortActiveBg": "#f0f0f0",
      "headerFilterHoverBg": "rgba(0,0,0,0.06)",
      "filterDropdownMenuBg": "#ffffff",
      "filterDropdownBg": "#ffffff",
      "expandIconBg": "#ffffff",
      "selectionColumnWidth": 32,
      "stickyScrollBarBg": "rgba(0,0,0,0.25)",
      "stickyScrollBarBorderRadius": 100,
      "expandIconMarginTop": 2.5,
      "headerIconColor": "rgba(0,0,0,0.29250000000000004)",
      "headerIconHoverColor": "rgba(0,0,0,0.5720000000000001)",
      "expandIconHalfInner": 7,
      "expandIconSize": 17,
      "expandIconScale": 0.9411764705882353
    }
  },
  "Switch": {
    "global": ["motionDurationMid", "colorPrimary", "opacityLoading", "fontSizeIcon", "colorText", "fontSize", "lineHeight", "fontFamily", "colorTextQuaternary", "colorTextTertiary", "lineWidthFocus", "colorPrimaryBorder", "colorPrimaryHover", "colorTextLightSolid", "fontSizeSM", "marginXXS"],
    "component": {
      "trackHeight": 22,
      "trackHeightSM": 16,
      "trackMinWidth": 44,
      "trackMinWidthSM": 28,
      "trackPadding": 2,
      "handleBg": "#fff",
      "handleSize": 18,
      "handleSizeSM": 12,
      "handleShadow": "0 2px 4px 0 rgba(0,35,11,0.2)",
      "innerMinMargin": 9,
      "innerMaxMargin": 24,
      "innerMinMarginSM": 6,
      "innerMaxMarginSM": 18
    }
  },
  "Steps": {
    "global": ["colorTextDisabled", "controlHeightLG", "colorTextLightSolid", "colorText", "colorPrimary", "colorTextDescription", "colorTextQuaternary", "colorError", "colorBorderSecondary", "colorSplit", "fontSize", "lineHeight", "fontFamily", "motionDurationSlow", "lineWidthFocus", "colorPrimaryBorder", "marginXS", "lineWidth", "lineType", "padding", "fontSizeLG", "fontWeightStrong", "fontSizeSM", "paddingSM", "paddingXXS", "margin", "controlHeight", "marginXXS", "paddingLG", "marginSM", "paddingXS", "controlHeightSM", "fontSizeIcon", "lineWidthBold", "marginLG", "borderRadiusSM", "motionDurationMid", "controlItemBgHover", "lineHeightSM", "colorBorderBg"],
    "component": {
      "titleLineHeight": 32,
      "customIconSize": 32,
      "customIconTop": 0,
      "customIconFontSize": 24,
      "iconSize": 32,
      "iconTop": -0.5,
      "iconFontSize": 14,
      "iconSizeSM": 24,
      "dotSize": 8,
      "dotCurrentSize": 10,
      "navArrowColor": "rgba(0,0,0,0.25)",
      "navContentMaxWidth": "unset",
      "descriptionMaxWidth": 140,
      "waitIconColor": "rgba(0,0,0,0.25)",
      "waitIconBgColor": "#ffffff",
      "waitIconBorderColor": "rgba(0,0,0,0.25)",
      "finishIconBgColor": "#ffffff",
      "finishIconBorderColor": "#1677ff"
    }
  },
  "Splitter": {
    "global": ["colorFill", "controlItemBgHover", "controlItemBgActive", "controlItemBgActiveHover", "colorPrimary", "colorText", "fontSize", "lineHeight", "fontFamily", "zIndexPopupBase", "fontSizeSM", "borderRadiusXS", "controlHeightSM"],
    "component": {
      "splitBarSize": 2,
      "splitTriggerSize": 6,
      "splitBarDraggableSize": 20,
      "resizeSpinnerSize": 20
    }
  },
  "Spin": {
    "global": ["colorTextDescription", "colorText", "fontSize", "lineHeight", "fontFamily", "colorPrimary", "motionDurationSlow", "motionEaseInOutCirc", "colorBgMask", "zIndexPopupBase", "motionDurationMid", "colorWhite", "colorTextLightSolid", "colorBgContainer", "marginXXS", "colorFillSecondary"],
    "component": {
      "contentHeight": 400,
      "dotSize": 20,
      "dotSizeSM": 14,
      "dotSizeLG": 32
    }
  },
  "Space": {
    "global": ["paddingXS", "padding", "paddingLG"],
    "component": {}
  },
  "QRCode": {
    "global": ["colorText", "lineWidth", "lineType", "colorSplit", "fontSize", "lineHeight", "fontFamily", "paddingSM", "colorWhite", "borderRadiusLG", "marginXS", "controlHeight"],
    "component": {
      "QRCodeMaskBackgroundColor": "rgba(255,255,255,0.96)"
    }
  },
  "Progress": {
    "global": ["marginXXS", "colorText", "fontSize", "lineHeight", "fontFamily", "motionDurationSlow", "motionEaseInOutCirc", "colorWhite", "colorSuccess", "marginXS", "paddingXXS", "colorBgContainer", "motionEaseOutQuint", "colorError", "fontSizeSM"],
    "component": {
      "circleTextColor": "rgba(0,0,0,0.88)",
      "defaultColor": "#1677ff",
      "remainingColor": "rgba(0,0,0,0.06)",
      "lineBorderRadius": 100,
      "circleTextFontSize": "1em",
      "circleIconFontSize": "1.1666666666666667em"
    }
  },
  "Popover": {
    "global": ["colorBgElevated", "colorText", "fontWeightStrong", "boxShadowSecondary", "colorTextHeading", "borderRadiusLG", "fontSize", "lineHeight", "fontFamily", "boxShadowPopoverArrow", "sizePopupArrow", "borderRadiusXS", "blue6", "purple6", "cyan6", "green6", "magenta6", "pink6", "red6", "orange6", "yellow6", "volcano6", "geekblue6", "lime6", "gold6", "motionDurationMid", "motionEaseOutCirc", "motionEaseInOutCirc"],
    "component": {
      "titleMinWidth": 177,
      "zIndexPopup": 1030,
      "arrowShadowWidth": 8.970562748477143,
      "arrowPath": "path('M 0 8 A 4 4 0 0 0 2.82842712474619 6.82842712474619 L 6.585786437626905 3.0710678118654755 A 2 2 0 0 1 9.414213562373096 3.0710678118654755 L 13.17157287525381 6.82842712474619 A 4 4 0 0 0 16 8 Z')",
      "arrowPolygon": "polygon(1.6568542494923806px 100%, 50% 1.6568542494923806px, 14.34314575050762px 100%, 1.6568542494923806px 100%)",
      "arrowOffsetHorizontal": 12,
      "arrowOffsetVertical": 8,
      "innerPadding": 0,
      "titleMarginBottom": 0,
      "titlePadding": "5px 16px 4px",
      "titleBorderBottom": "1px solid rgba(5,5,5,0.06)",
      "innerContentPadding": "12px 16px"
    }
  },
  "Slider": {
    "global": ["controlHeight", "controlHeightLG", "colorFillContentHover", "motionDurationMid", "colorText", "fontSize", "lineHeight", "fontFamily", "borderRadiusXS", "colorPrimaryBorderHover", "colorBgElevated", "colorTextDescription", "motionDurationSlow"],
    "component": {
      "controlSize": 10,
      "railSize": 4,
      "handleSize": 10,
      "handleSizeHover": 12,
      "dotSize": 8,
      "handleLineWidth": 2,
      "handleLineWidthHover": 2.5,
      "railBg": "rgba(0,0,0,0.04)",
      "railHoverBg": "rgba(0,0,0,0.06)",
      "trackBg": "#91caff",
      "trackHoverBg": "#69b1ff",
      "handleColor": "#91caff",
      "handleActiveColor": "#1677ff",
      "handleActiveOutlineColor": "rgba(22,119,255,0.2)",
      "handleColorDisabled": "#bfbfbf",
      "dotBorderColor": "#f0f0f0",
      "dotActiveBorderColor": "#91caff",
      "trackBgDisabled": "rgba(0,0,0,0.04)"
    }
  },
  "Skeleton": {
    "global": ["controlHeight", "controlHeightLG", "controlHeightSM", "padding", "marginSM", "controlHeightXS", "borderRadiusSM"],
    "component": {
      "color": "rgba(0,0,0,0.06)",
      "colorGradientEnd": "rgba(0,0,0,0.15)",
      "gradientFromColor": "rgba(0,0,0,0.06)",
      "gradientToColor": "rgba(0,0,0,0.15)",
      "titleHeight": 16,
      "blockRadius": 4,
      "paragraphMarginTop": 28,
      "paragraphLiHeight": 16
    }
  },
  "Select": {
    "global": ["paddingSM", "controlHeight", "colorBgBase", "colorText", "fontSize", "lineHeight", "fontFamily", "motionDurationMid", "motionEaseInOut", "colorTextPlaceholder", "fontSizeIcon", "colorTextQuaternary", "motionDurationSlow", "colorIcon", "paddingXS", "controlPaddingHorizontalSM", "lineWidth", "borderRadius", "controlHeightSM", "borderRadiusSM", "fontSizeLG", "borderRadiusLG", "borderRadiusXS", "controlHeightLG", "controlPaddingHorizontal", "paddingXXS", "colorIconHover", "colorBgElevated", "boxShadowSecondary", "colorTextDescription", "fontSizeSM", "colorPrimary", "colorBgContainerDisabled", "colorTextDisabled", "motionEaseOutQuint", "motionEaseInQuint", "motionEaseOutCirc", "motionEaseInOutCirc", "colorBorder", "controlOutlineWidth", "lineType", "colorError", "colorErrorHover", "colorErrorOutline", "colorWarning", "colorWarningHover", "colorWarningOutline", "colorFillTertiary", "colorFillSecondary", "colorErrorBg", "colorErrorBgHover", "colorWarningBg", "colorWarningBgHover", "colorBgContainer", "colorSplit"],
    "component": {
      "INTERNAL_FIXED_ITEM_MARGIN": 2,
      "zIndexPopup": 1050,
      "optionSelectedColor": "rgba(0,0,0,0.88)",
      "optionSelectedFontWeight": 600,
      "optionSelectedBg": "#e6f4ff",
      "optionActiveBg": "rgba(0,0,0,0.04)",
      "optionPadding": "5px 12px",
      "optionFontSize": 14,
      "optionLineHeight": 1.5714285714285714,
      "optionHeight": 32,
      "selectorBg": "#ffffff",
      "clearBg": "#ffffff",
      "singleItemHeightLG": 40,
      "multipleItemBg": "rgba(0,0,0,0.06)",
      "multipleItemBorderColor": "transparent",
      "multipleItemHeight": 24,
      "multipleItemHeightSM": 16,
      "multipleItemHeightLG": 32,
      "multipleSelectorBgDisabled": "rgba(0,0,0,0.04)",
      "multipleItemColorDisabled": "rgba(0,0,0,0.25)",
      "multipleItemBorderColorDisabled": "transparent",
      "showArrowPaddingInlineEnd": 18,
      "hoverBorderColor": "#4096ff",
      "activeBorderColor": "#1677ff",
      "activeOutlineColor": "rgba(5,145,255,0.1)",
      "selectAffixPadding": 4
    }
  },
  "Segmented": {
    "global": ["lineWidth", "controlPaddingHorizontal", "controlPaddingHorizontalSM", "controlHeight", "controlHeightLG", "controlHeightSM", "colorText", "fontSize", "lineHeight", "fontFamily", "borderRadius", "motionDurationMid", "motionEaseInOut", "lineWidthFocus", "colorPrimaryBorder", "paddingXXS", "borderRadiusSM", "boxShadowTertiary", "marginSM", "motionDurationSlow", "borderRadiusLG", "fontSizeLG", "borderRadiusXS", "colorTextDisabled"],
    "component": {
      "trackPadding": 2,
      "trackBg": "#f5f5f5",
      "itemColor": "rgba(0,0,0,0.65)",
      "itemHoverColor": "rgba(0,0,0,0.88)",
      "itemHoverBg": "rgba(0,0,0,0.06)",
      "itemSelectedBg": "#ffffff",
      "itemActiveBg": "rgba(0,0,0,0.15)",
      "itemSelectedColor": "rgba(0,0,0,0.88)"
    }
  },
  "Statistic": {
    "global": ["marginXXS", "padding", "colorTextDescription", "colorTextHeading", "fontFamily", "colorText", "fontSize", "lineHeight"],
    "component": {
      "titleFontSize": 14,
      "contentFontSize": 24
    }
  },
  "Tree": {
    "global": ["controlInteractiveSize", "colorText", "fontSize", "lineHeight", "fontFamily", "marginXS", "borderRadiusSM", "lineWidthFocus", "colorPrimaryBorder", "colorBgContainer", "lineWidth", "lineType", "colorBorder", "motionDurationSlow", "lineWidthBold", "colorWhite", "motionDurationFast", "motionEaseInBack", "paddingXS", "colorPrimary", "colorPrimaryHover", "motionDurationMid", "motionEaseOutBack", "fontSizeLG", "colorBgContainerDisabled", "colorTextDisabled", "colorTextQuaternary", "controlItemBgActiveDisabled", "colorSplit", "borderRadius", "controlItemBgHover", "fontWeightStrong", "colorBgTextHover", "motionEaseInOut"],
    "component": {
      "titleHeight": 24,
      "indentSize": 24,
      "nodeHoverBg": "rgba(0,0,0,0.04)",
      "nodeHoverColor": "rgba(0,0,0,0.88)",
      "nodeSelectedBg": "#e6f4ff",
      "nodeSelectedColor": "rgba(0,0,0,0.88)",
      "directoryNodeSelectedColor": "#fff",
      "directoryNodeSelectedBg": "#1677ff"
    }
  },
  "Result": {
    "global": ["colorInfo", "colorError", "colorSuccess", "colorWarning", "lineHeightHeading3", "padding", "paddingXL", "paddingXS", "paddingLG", "marginXS", "lineHeight", "colorTextHeading", "colorTextDescription", "colorFillAlter"],
    "component": {
      "titleFontSize": 24,
      "subtitleFontSize": 14,
      "iconFontSize": 72,
      "extraMargin": "24px 0 0 0"
    }
  },
  "Rate": {
    "global": ["colorText", "fontSize", "lineHeight", "fontFamily", "marginXS", "motionDurationMid", "lineWidth"],
    "component": {
      "starColor": "#fadb14",
      "starSize": 20,
      "starHoverScale": "scale(1.1)",
      "starBg": "rgba(0,0,0,0.06)"
    }
  },
  "TreeSelect": {
    "global": ["colorBgElevated", "paddingXS", "colorTextQuaternary", "controlItemBgActiveDisabled", "colorText", "fontSize", "lineHeight", "fontFamily", "colorSplit", "borderRadius", "motionDurationSlow", "lineWidthFocus", "colorPrimaryBorder", "colorPrimary", "colorTextDisabled", "controlItemBgHover", "fontWeightStrong", "controlInteractiveSize", "colorBgTextHover", "colorBorder", "motionDurationMid", "lineWidthBold", "marginXS", "borderRadiusSM", "colorBgContainer", "lineWidth", "lineType", "colorWhite", "motionDurationFast", "motionEaseInBack", "colorPrimaryHover", "motionEaseOutBack", "fontSizeLG", "colorBgContainerDisabled"],
    "component": {
      "titleHeight": 24,
      "indentSize": 24,
      "nodeHoverBg": "rgba(0,0,0,0.04)",
      "nodeHoverColor": "rgba(0,0,0,0.88)",
      "nodeSelectedBg": "#e6f4ff",
      "nodeSelectedColor": "rgba(0,0,0,0.88)"
    }
  },
  "Typography": {
    "global": ["colorText", "lineHeight", "colorTextDescription", "colorSuccessText", "colorWarningText", "colorErrorText", "colorErrorTextActive", "colorErrorTextHover", "colorTextDisabled", "fontSizeHeading1", "lineHeightHeading1", "colorTextHeading", "fontWeightStrong", "fontSizeHeading2", "lineHeightHeading2", "fontSizeHeading3", "lineHeightHeading3", "fontSizeHeading4", "lineHeightHeading4", "fontSizeHeading5", "lineHeightHeading5", "fontFamilyCode", "colorLink", "linkDecoration", "motionDurationSlow", "lineWidthFocus", "colorPrimaryBorder", "colorLinkHover", "linkHoverDecoration", "linkFocusDecoration", "colorLinkActive", "marginXXS", "paddingSM", "marginXS", "colorIcon", "fontSize", "colorSuccess"],
    "component": {
      "titleMarginTop": "1.2em",
      "titleMarginBottom": "0.5em"
    }
  },
  "Radio": {
    "global": ["controlOutline", "controlOutlineWidth", "colorText", "fontSize", "lineHeight", "fontFamily", "colorPrimary", "motionDurationSlow", "motionDurationMid", "motionEaseInOutCirc", "colorBgContainer", "colorBorder", "lineWidth", "colorBgContainerDisabled", "colorTextDisabled", "paddingXS", "lineType", "lineWidthFocus", "colorPrimaryBorder", "controlHeight", "fontSizeLG", "controlHeightLG", "controlHeightSM", "borderRadius", "borderRadiusSM", "borderRadiusLG", "colorPrimaryHover", "colorPrimaryActive"],
    "component": {
      "radioSize": 16,
      "dotSize": 8,
      "dotColorDisabled": "rgba(0,0,0,0.25)",
      "buttonSolidCheckedColor": "#fff",
      "buttonSolidCheckedBg": "#1677ff",
      "buttonSolidCheckedHoverBg": "#4096ff",
      "buttonSolidCheckedActiveBg": "#0958d9",
      "buttonBg": "#ffffff",
      "buttonCheckedBg": "#ffffff",
      "buttonColor": "rgba(0,0,0,0.88)",
      "buttonCheckedBgDisabled": "rgba(0,0,0,0.15)",
      "buttonCheckedColorDisabled": "rgba(0,0,0,0.25)",
      "buttonPaddingInline": 15,
      "wrapperMarginInlineEnd": 8,
      "radioColor": "#1677ff",
      "radioBgColor": "#ffffff"
    }
  },
  "Transfer": {
    "global": ["marginXS", "marginXXS", "fontSizeIcon", "colorBgContainerDisabled", "colorText", "fontSize", "lineHeight", "fontFamily", "colorBorder", "colorSplit", "lineWidth", "controlItemBgActive", "colorTextDisabled", "colorTextSecondary", "paddingSM", "lineType", "motionDurationSlow", "controlItemBgHover", "borderRadiusLG", "colorBgContainer", "controlItemBgActiveHover", "colorLink", "linkDecoration", "lineWidthFocus", "colorPrimaryBorder", "colorLinkHover", "linkHoverDecoration", "linkFocusDecoration", "colorLinkActive", "paddingXS", "controlHeightLG", "colorError", "colorWarning"],
    "component": {
      "listWidth": 180,
      "listHeight": 200,
      "listWidthLG": 250,
      "headerHeight": 40,
      "itemHeight": 32,
      "itemPaddingBlock": 5,
      "transferHeaderVerticalPadding": 9
    }
  },
  "Tour": {
    "global": ["borderRadiusLG", "padding", "paddingXS", "borderRadius", "borderRadiusXS", "colorPrimary", "colorFill", "boxShadowTertiary", "colorBgElevated", "fontWeightStrong", "marginXS", "colorTextLightSolid", "colorWhite", "motionDurationSlow", "colorText", "fontSize", "lineHeight", "fontFamily", "colorIcon", "borderRadiusSM", "motionDurationMid", "colorIconHover", "colorBgTextHover", "colorBgTextActive", "lineWidthFocus", "colorPrimaryBorder", "boxShadowPopoverArrow", "sizePopupArrow"],
    "component": {
      "zIndexPopup": 1070,
      "closeBtnSize": 22,
      "primaryPrevBtnBg": "rgba(255,255,255,0.15)",
      "primaryNextBtnHoverBg": "rgb(240,240,240)",
      "arrowOffsetHorizontal": 12,
      "arrowOffsetVertical": 8,
      "arrowShadowWidth": 8.970562748477143,
      "arrowPath": "path('M 0 8 A 4 4 0 0 0 2.82842712474619 6.82842712474619 L 6.585786437626905 3.0710678118654755 A 2 2 0 0 1 9.414213562373096 3.0710678118654755 L 13.17157287525381 6.82842712474619 A 4 4 0 0 0 16 8 Z')",
      "arrowPolygon": "polygon(1.6568542494923806px 100%, 50% 1.6568542494923806px, 14.34314575050762px 100%, 1.6568542494923806px 100%)"
    }
  },
  "Tooltip": {
    "global": ["borderRadius", "colorTextLightSolid", "colorBgSpotlight", "controlHeight", "boxShadowSecondary", "paddingSM", "paddingXS", "sizePopupArrow", "colorText", "fontSize", "lineHeight", "fontFamily", "blue1", "blue3", "blue6", "blue7", "purple1", "purple3", "purple6", "purple7", "cyan1", "cyan3", "cyan6", "cyan7", "green1", "green3", "green6", "green7", "magenta1", "magenta3", "magenta6", "magenta7", "pink1", "pink3", "pink6", "pink7", "red1", "red3", "red6", "red7", "orange1", "orange3", "orange6", "orange7", "yellow1", "yellow3", "yellow6", "yellow7", "volcano1", "volcano3", "volcano6", "volcano7", "geekblue1", "geekblue3", "geekblue6", "geekblue7", "lime1", "lime3", "lime6", "lime7", "gold1", "gold3", "gold6", "gold7", "boxShadowPopoverArrow", "borderRadiusXS", "motionDurationFast", "motionEaseOutCirc", "motionEaseInOutCirc"],
    "component": {
      "zIndexPopup": 1070,
      "arrowOffsetHorizontal": 12,
      "arrowOffsetVertical": 8,
      "arrowShadowWidth": 8.970562748477143,
      "arrowPath": "path('M 0 8 A 4 4 0 0 0 2.82842712474619 6.82842712474619 L 6.585786437626905 3.0710678118654755 A 2 2 0 0 1 9.414213562373096 3.0710678118654755 L 13.17157287525381 6.82842712474619 A 4 4 0 0 0 16 8 Z')",
      "arrowPolygon": "polygon(1.6568542494923806px 100%, 50% 1.6568542494923806px, 14.34314575050762px 100%, 1.6568542494923806px 100%)"
    }
  },
  "Timeline": {
    "global": ["paddingXXS", "colorText", "fontSize", "lineHeight", "fontFamily", "lineType", "fontSizeSM", "colorPrimary", "colorError", "colorSuccess", "colorTextDisabled", "lineWidth", "margin", "controlHeightLG", "marginXXS", "marginSM", "marginXS"],
    "component": {
      "tailColor": "rgba(5,5,5,0.06)",
      "tailWidth": 2,
      "dotBorderWidth": 2,
      "dotBg": "#ffffff",
      "itemPaddingBottom": 20
    }
  },
  "Tag": {
    "global": ["lineWidth", "fontSizeIcon", "fontSizeSM", "lineHeightSM", "paddingXXS", "colorText", "fontSize", "lineHeight", "fontFamily", "marginXS", "lineType", "colorBorder", "borderRadiusSM", "motionDurationMid", "colorIcon", "colorTextHeading", "colorTextLightSolid", "colorPrimary", "colorFillSecondary", "colorPrimaryHover", "colorPrimaryActive"],
    "component": {
      "defaultBg": "#fafafa",
      "defaultColor": "rgba(0,0,0,0.88)"
    }
  },
  "Message": {
    "global": ["boxShadow", "colorText", "colorSuccess", "colorError", "colorWarning", "colorInfo", "fontSizeLG", "motionEaseInOutCirc", "motionDurationSlow", "marginXS", "paddingXS", "borderRadiusLG", "fontSize", "lineHeight", "fontFamily"],
    "component": {
      "zIndexPopup": 2010,
      "contentBg": "#ffffff",
      "contentPadding": "9px 12px"
    }
  },
  "Menu": {
    "global": ["colorBgElevated", "controlHeightLG", "fontSize", "motionDurationSlow", "motionDurationMid", "motionEaseInOut", "paddingXS", "padding", "colorSplit", "lineWidth", "borderRadiusLG", "lineType", "colorText", "lineHeight", "fontFamily", "motionEaseOut", "borderRadius", "margin", "colorTextLightSolid", "paddingXL", "fontSizeLG", "motionDurationFast", "boxShadowSecondary", "marginXS", "lineWidthFocus", "colorPrimaryBorder", "motionEaseOutQuint", "motionEaseInQuint", "motionEaseOutCirc", "motionEaseInOutCirc"],
    "component": {
      "dropdownWidth": 160,
      "zIndexPopup": 1050,
      "radiusItem": 8,
      "itemBorderRadius": 8,
      "radiusSubMenuItem": 4,
      "subMenuItemBorderRadius": 4,
      "colorItemText": "rgba(0,0,0,0.88)",
      "itemColor": "rgba(0,0,0,0.88)",
      "colorItemTextHover": "rgba(0,0,0,0.88)",
      "itemHoverColor": "rgba(0,0,0,0.88)",
      "colorItemTextHoverHorizontal": "#1677ff",
      "horizontalItemHoverColor": "#1677ff",
      "colorGroupTitle": "rgba(0,0,0,0.45)",
      "groupTitleColor": "rgba(0,0,0,0.45)",
      "colorItemTextSelected": "#1677ff",
      "itemSelectedColor": "#1677ff",
      "subMenuItemSelectedColor": "#1677ff",
      "colorItemTextSelectedHorizontal": "#1677ff",
      "horizontalItemSelectedColor": "#1677ff",
      "colorItemBg": "#ffffff",
      "itemBg": "#ffffff",
      "colorItemBgHover": "rgba(0,0,0,0.06)",
      "itemHoverBg": "rgba(0,0,0,0.06)",
      "colorItemBgActive": "rgba(0,0,0,0.06)",
      "itemActiveBg": "#e6f4ff",
      "colorSubItemBg": "rgba(0,0,0,0.02)",
      "subMenuItemBg": "rgba(0,0,0,0.02)",
      "colorItemBgSelected": "#e6f4ff",
      "itemSelectedBg": "#e6f4ff",
      "colorItemBgSelectedHorizontal": "transparent",
      "horizontalItemSelectedBg": "transparent",
      "colorActiveBarWidth": 0,
      "activeBarWidth": 0,
      "colorActiveBarHeight": 2,
      "activeBarHeight": 2,
      "colorActiveBarBorderSize": 1,
      "activeBarBorderWidth": 1,
      "colorItemTextDisabled": "rgba(0,0,0,0.25)",
      "itemDisabledColor": "rgba(0,0,0,0.25)",
      "colorDangerItemText": "#ff4d4f",
      "dangerItemColor": "#ff4d4f",
      "colorDangerItemTextHover": "#ff4d4f",
      "dangerItemHoverColor": "#ff4d4f",
      "colorDangerItemTextSelected": "#ff4d4f",
      "dangerItemSelectedColor": "#ff4d4f",
      "colorDangerItemBgActive": "#fff2f0",
      "dangerItemActiveBg": "#fff2f0",
      "colorDangerItemBgSelected": "#fff2f0",
      "dangerItemSelectedBg": "#fff2f0",
      "itemMarginInline": 4,
      "horizontalItemBorderRadius": 0,
      "horizontalItemHoverBg": "transparent",
      "itemHeight": 40,
      "groupTitleLineHeight": 1.5714285714285714,
      "collapsedWidth": 80,
      "popupBg": "#ffffff",
      "itemMarginBlock": 4,
      "itemPaddingInline": 16,
      "horizontalLineHeight": "46px",
      "iconSize": 14,
      "iconMarginInlineEnd": 10,
      "collapsedIconSize": 16,
      "groupTitleFontSize": 14,
      "darkItemDisabledColor": "rgba(255,255,255,0.25)",
      "darkItemColor": "rgba(255,255,255,0.65)",
      "darkDangerItemColor": "#ff4d4f",
      "darkItemBg": "#001529",
      "darkPopupBg": "#001529",
      "darkSubMenuItemBg": "#000c17",
      "darkItemSelectedColor": "#fff",
      "darkItemSelectedBg": "#1677ff",
      "darkDangerItemSelectedBg": "#ff4d4f",
      "darkItemHoverBg": "transparent",
      "darkGroupTitleColor": "rgba(255,255,255,0.65)",
      "darkItemHoverColor": "#fff",
      "darkDangerItemHoverColor": "#ff7875",
      "darkDangerItemSelectedColor": "#fff",
      "darkDangerItemActiveBg": "#ff4d4f",
      "itemWidth": "calc(100% - 8px)"
    }
  },
  "Grid": {
    "global": [],
    "component": {}
  },
  "Form": {
    "global": ["colorText", "fontSize", "lineHeight", "fontFamily", "marginLG", "colorTextDescription", "fontSizeLG", "lineWidth", "lineType", "colorBorder", "controlOutlineWidth", "controlOutline", "paddingSM", "controlHeightSM", "controlHeightLG", "colorError", "colorWarning", "marginXXS", "controlHeight", "motionDurationMid", "motionEaseOut", "motionEaseOutBack", "colorSuccess", "colorPrimary", "motionDurationFast", "motionEaseInOut", "margin", "screenXSMax", "screenSMMax", "screenMDMax", "screenLGMax"],
    "component": {
      "labelRequiredMarkColor": "#ff4d4f",
      "labelColor": "rgba(0,0,0,0.88)",
      "labelFontSize": 14,
      "labelHeight": 32,
      "labelColonMarginInlineStart": 2,
      "labelColonMarginInlineEnd": 8,
      "itemMarginBottom": 24,
      "verticalLabelPadding": "0 0 8px",
      "verticalLabelMargin": 0,
      "inlineItemMarginBottom": 0
    }
  },
  "FloatButton": {
    "global": ["colorTextLightSolid", "colorBgElevated", "controlHeightLG", "marginXXL", "marginLG", "fontSize", "fontSizeIcon", "controlItemBgHover", "paddingXXS", "margin", "borderRadiusLG", "borderRadiusSM", "zIndexPopupBase", "colorText", "lineHeight", "fontFamily", "lineWidth", "lineType", "colorSplit", "boxShadowSecondary", "motionDurationMid", "colorFillContent", "fontSizeLG", "fontSizeSM", "colorPrimary", "colorPrimaryHover", "motionDurationSlow", "motionEaseInOutCirc"],
    "component": {
      "dotOffsetInCircle": 5.857864376269049,
      "dotOffsetInSquare": 2.3431457505076194
    }
  },
  "Breadcrumb": {
    "global": ["colorText", "fontSize", "lineHeight", "fontFamily", "motionDurationMid", "paddingXXS", "borderRadiusSM", "fontHeight", "marginXXS", "colorBgTextHover", "lineWidthFocus", "colorPrimaryBorder", "fontSizeIcon"],
    "component": {
      "itemColor": "rgba(0,0,0,0.45)",
      "lastItemColor": "rgba(0,0,0,0.88)",
      "iconFontSize": 14,
      "linkColor": "rgba(0,0,0,0.45)",
      "linkHoverColor": "rgba(0,0,0,0.88)",
      "separatorColor": "rgba(0,0,0,0.45)",
      "separatorMargin": 8
    }
  },
  "Badge": {
    "global": ["fontHeight", "lineWidth", "marginXS", "colorBorderBg", "colorTextLightSolid", "colorError", "colorErrorHover", "blue1", "blue3", "blue6", "blue7", "purple1", "purple3", "purple6", "purple7", "cyan1", "cyan3", "cyan6", "cyan7", "green1", "green3", "green6", "green7", "magenta1", "magenta3", "magenta6", "magenta7", "pink1", "pink3", "pink6", "pink7", "red1", "red3", "red6", "red7", "orange1", "orange3", "orange6", "orange7", "yellow1", "yellow3", "yellow6", "yellow7", "volcano1", "volcano3", "volcano6", "volcano7", "geekblue1", "geekblue3", "geekblue6", "geekblue7", "lime1", "lime3", "lime6", "lime7", "gold1", "gold3", "gold6", "gold7", "colorText", "fontSize", "lineHeight", "fontFamily", "motionDurationMid", "paddingXS", "colorSuccess", "colorInfo", "colorTextPlaceholder", "colorWarning", "motionDurationSlow", "motionEaseOutBack"],
    "component": {
      "indicatorZIndex": "auto",
      "indicatorHeight": 20,
      "indicatorHeightSM": 14,
      "dotSize": 6,
      "textFontSize": 12,
      "textFontSizeSM": 12,
      "textFontWeight": "normal",
      "statusSize": 6
    }
  },
  "BackTop": {
    "global": ["fontSizeHeading3", "colorTextDescription", "colorTextLightSolid", "colorText", "controlHeightLG", "fontSize", "lineHeight", "fontFamily", "motionDurationMid", "screenMD", "screenXS"],
    "component": {
      "zIndexPopup": 10
    }
  },
  "Popconfirm": {
    "global": ["colorText", "colorWarning", "marginXXS", "marginXS", "fontSize", "fontWeightStrong", "colorTextHeading"],
    "component": {
      "zIndexPopup": 1060
    }
  },
  "Mentions": {
    "global": ["paddingXXS", "colorTextDisabled", "controlItemBgHover", "controlPaddingHorizontal", "colorText", "motionDurationSlow", "lineHeight", "controlHeight", "fontSize", "fontSizeIcon", "colorIcon", "colorTextQuaternary", "colorBgElevated", "borderRadius", "borderRadiusLG", "boxShadowSecondary", "fontFamily", "motionDurationMid", "colorTextPlaceholder", "lineHeightLG", "borderRadiusSM", "colorBorder", "colorBgContainer", "lineWidth", "lineType", "colorBgContainerDisabled", "colorError", "colorErrorBorderHover", "colorWarning", "colorWarningBorderHover", "colorFillTertiary", "colorFillSecondary", "colorErrorBg", "colorErrorBgHover", "colorErrorText", "colorWarningBg", "colorWarningBgHover", "colorWarningText", "marginXS", "fontWeightStrong"],
    "component": {
      "paddingBlock": 4,
      "paddingBlockSM": 0,
      "paddingBlockLG": 7,
      "paddingInline": 11,
      "paddingInlineSM": 7,
      "paddingInlineLG": 11,
      "addonBg": "rgba(0,0,0,0.02)",
      "activeBorderColor": "#1677ff",
      "hoverBorderColor": "#4096ff",
      "activeShadow": "0 0 0 2px rgba(5,145,255,0.1)",
      "errorActiveShadow": "0 0 0 2px rgba(255,38,5,0.06)",
      "warningActiveShadow": "0 0 0 2px rgba(255,215,5,0.1)",
      "hoverBg": "#ffffff",
      "activeBg": "#ffffff",
      "inputFontSize": 14,
      "inputFontSizeLG": 16,
      "inputFontSizeSM": 14,
      "dropdownHeight": 250,
      "controlItemWidth": 100,
      "zIndexPopup": 1050,
      "itemPaddingVertical": 5
    }
  },
  "List": {
    "global": ["controlHeightLG", "controlHeight", "paddingSM", "marginLG", "padding", "colorPrimary", "paddingXS", "margin", "colorText", "colorTextDescription", "motionDurationSlow", "lineWidth", "fontSize", "lineHeight", "fontFamily", "colorSplit", "marginXXS", "marginXXL", "fontHeight", "fontSizeSM", "colorTextDisabled", "fontSizeLG", "lineHeightLG", "lineType", "paddingLG", "borderRadiusLG", "colorBorder", "screenSM", "screenMD", "marginSM"],
    "component": {
      "contentWidth": 220,
      "itemPadding": "12px 0",
      "itemPaddingSM": "8px 16px",
      "itemPaddingLG": "16px 24px",
      "headerBg": "transparent",
      "footerBg": "transparent",
      "emptyTextPadding": 16,
      "metaMarginBottom": 16,
      "avatarMarginRight": 16,
      "titleMarginBottom": 12,
      "descriptionFontSize": 14
    }
  },
  "Layout": {
    "global": ["colorText", "fontSize"],
    "component": {
      "colorBgHeader": "#001529",
      "colorBgBody": "#f5f5f5",
      "colorBgTrigger": "#002140",
      "bodyBg": "#f5f5f5",
      "headerBg": "#001529",
      "headerHeight": 64,
      "headerPadding": "0 50px",
      "headerColor": "rgba(0,0,0,0.88)",
      "footerPadding": "24px 50px",
      "footerBg": "#f5f5f5",
      "siderBg": "#001529",
      "triggerHeight": 48,
      "triggerBg": "#002140",
      "triggerColor": "#fff",
      "zeroTriggerWidth": 40,
      "zeroTriggerHeight": 40,
      "lightSiderBg": "#ffffff",
      "lightTriggerBg": "#ffffff",
      "lightTriggerColor": "rgba(0,0,0,0.88)"
    }
  },
  "InputNumber": {
    "global": ["paddingXXS", "lineWidth", "lineType", "borderRadius", "controlHeightLG", "controlHeightSM", "colorError", "colorIcon", "motionDurationMid", "colorTextDisabled", "borderRadiusSM", "borderRadiusLG", "lineHeightLG", "colorText", "fontSize", "lineHeight", "fontFamily", "colorTextPlaceholder", "colorBorder", "colorBgContainer", "colorBgContainerDisabled", "colorErrorBorderHover", "colorWarning", "colorWarningBorderHover", "colorFillTertiary", "colorFillSecondary", "colorErrorBg", "colorErrorBgHover", "colorErrorText", "colorWarningBg", "colorWarningBgHover", "colorWarningText", "paddingXS", "motionDurationSlow", "fontSizeLG"],
    "component": {
      "paddingBlock": 4,
      "paddingBlockSM": 0,
      "paddingBlockLG": 7,
      "paddingInline": 11,
      "paddingInlineSM": 7,
      "paddingInlineLG": 11,
      "addonBg": "rgba(0,0,0,0.02)",
      "activeBorderColor": "#1677ff",
      "hoverBorderColor": "#4096ff",
      "activeShadow": "0 0 0 2px rgba(5,145,255,0.1)",
      "errorActiveShadow": "0 0 0 2px rgba(255,38,5,0.06)",
      "warningActiveShadow": "0 0 0 2px rgba(255,215,5,0.1)",
      "hoverBg": "#ffffff",
      "activeBg": "#ffffff",
      "inputFontSize": 14,
      "inputFontSizeLG": 16,
      "inputFontSizeSM": 14,
      "controlWidth": 90,
      "handleWidth": 22,
      "handleFontSize": 7,
      "handleVisible": "auto",
      "handleActiveBg": "rgba(0,0,0,0.02)",
      "handleBg": "#ffffff",
      "filledHandleBg": "#f0f0f0",
      "handleHoverColor": "#1677ff",
      "handleBorderColor": "#d9d9d9",
      "handleOpacity": 0,
      "handleVisibleWidth": 0
    }
  },
  "Flex": {
    "global": ["paddingXS", "padding", "paddingLG"],
    "component": {}
  },
  "Empty": {
    "global": ["controlHeightLG", "margin", "marginXS", "marginXL", "fontSize", "lineHeight", "opacityImage", "colorTextDescription"],
    "component": {}
  },
  "Dropdown": {
    "global": ["marginXXS", "sizePopupArrow", "paddingXXS", "motionDurationMid", "fontSize", "colorTextDisabled", "fontSizeIcon", "controlPaddingHorizontal", "colorBgElevated", "boxShadowPopoverArrow", "borderRadiusXS", "colorText", "lineHeight", "fontFamily", "borderRadiusLG", "boxShadowSecondary", "lineWidthFocus", "colorPrimaryBorder", "colorTextDescription", "marginXS", "fontSizeSM", "padding", "borderRadiusSM", "controlItemBgHover", "colorPrimary", "controlItemBgActive", "controlItemBgActiveHover", "colorSplit", "paddingXS", "colorIcon", "motionEaseOutQuint", "motionEaseInQuint", "motionEaseOutCirc", "motionEaseInOutCirc", "colorError", "colorTextLightSolid"],
    "component": {
      "zIndexPopup": 1050,
      "paddingBlock": 5,
      "arrowOffsetHorizontal": 12,
      "arrowOffsetVertical": 8,
      "arrowShadowWidth": 8.970562748477143,
      "arrowPath": "path('M 0 8 A 4 4 0 0 0 2.82842712474619 6.82842712474619 L 6.585786437626905 3.0710678118654755 A 2 2 0 0 1 9.414213562373096 3.0710678118654755 L 13.17157287525381 6.82842712474619 A 4 4 0 0 0 16 8 Z')",
      "arrowPolygon": "polygon(1.6568542494923806px 100%, 50% 1.6568542494923806px, 14.34314575050762px 100%, 1.6568542494923806px 100%)"
    }
  },
  "Checkbox": {
    "global": ["controlInteractiveSize", "colorText", "fontSize", "lineHeight", "fontFamily", "marginXS", "borderRadiusSM", "lineWidthFocus", "colorPrimaryBorder", "colorBgContainer", "lineWidth", "lineType", "colorBorder", "motionDurationSlow", "lineWidthBold", "colorWhite", "motionDurationFast", "motionEaseInBack", "paddingXS", "colorPrimary", "colorPrimaryHover", "motionDurationMid", "motionEaseOutBack", "fontSizeLG", "colorBgContainerDisabled", "colorTextDisabled"],
    "component": {}
  },
  "Cascader": {
    "global": ["controlInteractiveSize", "colorText", "fontSize", "lineHeight", "fontFamily", "marginXS", "borderRadiusSM", "lineWidthFocus", "colorPrimaryBorder", "colorBgContainer", "lineWidth", "lineType", "colorBorder", "motionDurationSlow", "lineWidthBold", "colorWhite", "motionDurationFast", "motionEaseInBack", "paddingXS", "colorPrimary", "colorPrimaryHover", "motionDurationMid", "motionEaseOutBack", "fontSizeLG", "colorBgContainerDisabled", "colorTextDisabled", "colorSplit", "controlItemBgHover", "paddingXXS", "colorIcon", "fontSizeIcon", "colorHighlight"],
    "component": {
      "controlWidth": 184,
      "controlItemWidth": 111,
      "dropdownHeight": 180,
      "optionSelectedBg": "#e6f4ff",
      "optionSelectedFontWeight": 600,
      "optionPadding": "5px 12px",
      "menuPadding": 4,
      "optionSelectedColor": "rgba(0,0,0,0.88)"
    }
  },
  "Pagination": {
    "global": ["controlHeightLG", "marginXXS", "marginSM", "paddingXXS", "colorText", "fontSize", "lineHeight", "fontFamily", "marginXS", "lineWidth", "lineType", "borderRadius", "motionDurationMid", "colorBgTextHover", "colorBgTextActive", "fontWeightStrong", "colorPrimary", "colorPrimaryHover", "fontSizeSM", "colorTextDisabled", "margin", "controlHeight", "colorTextPlaceholder", "lineHeightLG", "borderRadiusLG", "borderRadiusSM", "colorBorder", "colorBgContainer", "colorBgContainerDisabled", "controlOutlineWidth", "controlOutline", "controlHeightSM", "screenLG", "screenSM", "lineWidthFocus", "colorPrimaryBorder"],
    "component": {
      "itemBg": "#ffffff",
      "itemSize": 32,
      "itemSizeSM": 24,
      "itemActiveBg": "#ffffff",
      "itemLinkBg": "#ffffff",
      "itemActiveColorDisabled": "rgba(0,0,0,0.25)",
      "itemActiveBgDisabled": "rgba(0,0,0,0.15)",
      "itemInputBg": "#ffffff",
      "miniOptionsSizeChangerTop": 0,
      "paddingBlock": 4,
      "paddingBlockSM": 0,
      "paddingBlockLG": 7,
      "paddingInline": 11,
      "paddingInlineSM": 7,
      "paddingInlineLG": 11,
      "addonBg": "rgba(0,0,0,0.02)",
      "activeBorderColor": "#1677ff",
      "hoverBorderColor": "#4096ff",
      "activeShadow": "0 0 0 2px rgba(5,145,255,0.1)",
      "errorActiveShadow": "0 0 0 2px rgba(255,38,5,0.06)",
      "warningActiveShadow": "0 0 0 2px rgba(255,215,5,0.1)",
      "hoverBg": "#ffffff",
      "activeBg": "#ffffff",
      "inputFontSize": 14,
      "inputFontSizeLG": 16,
      "inputFontSizeSM": 14
    }
  },
  "Notification": {
    "global": ["paddingMD", "paddingLG", "colorBgElevated", "fontSizeLG", "lineHeightLG", "controlHeightLG", "margin", "paddingContentHorizontalLG", "marginLG", "colorPrimaryBorderHover", "colorPrimary", "motionDurationMid", "motionEaseInOut", "colorText", "fontSize", "lineHeight", "fontFamily", "boxShadow", "borderRadiusLG", "colorSuccess", "colorInfo", "colorWarning", "colorError", "colorTextHeading", "marginXS", "marginSM", "colorIcon", "borderRadiusSM", "colorIconHover", "colorBgTextHover", "colorBgTextActive", "lineWidthFocus", "colorPrimaryBorder", "motionDurationSlow", "colorBgBlur"],
    "component": {
      "zIndexPopup": 2050,
      "width": 384
    }
  },
  "Modal": {
    "global": ["padding", "fontSizeHeading5", "lineHeightHeading5", "colorSplit", "lineType", "lineWidth", "colorIcon", "colorIconHover", "controlHeight", "fontHeight", "screenSMMax", "marginXS", "colorText", "fontSize", "lineHeight", "fontFamily", "margin", "paddingLG", "fontWeightStrong", "borderRadiusLG", "boxShadow", "zIndexPopupBase", "borderRadiusSM", "motionDurationMid", "fontSizeLG", "colorBgTextHover", "colorBgTextActive", "lineWidthFocus", "colorPrimaryBorder", "motionDurationSlow", "colorBgMask", "motionEaseOutCirc", "motionEaseInOutCirc", "screenXSMin", "screenSMMin", "screenMDMin", "screenLGMin", "screenXLMin", "screenXXLMin"],
    "component": {
      "footerBg": "transparent",
      "headerBg": "#ffffff",
      "titleLineHeight": 1.5,
      "titleFontSize": 16,
      "contentBg": "#ffffff",
      "titleColor": "rgba(0,0,0,0.88)",
      "contentPadding": 0,
      "headerPadding": "16px 24px",
      "headerBorderBottom": "1px solid rgba(5,5,5,0.06)",
      "headerMarginBottom": 0,
      "bodyPadding": 24,
      "footerPadding": "8px 16px",
      "footerBorderTop": "1px solid rgba(5,5,5,0.06)",
      "footerBorderRadius": "0 0 8px 8px",
      "footerMarginTop": 0,
      "confirmBodyPadding": "32px 32px 24px",
      "confirmIconMarginInlineEnd": 16,
      "confirmBtnsMarginTop": 24
    }
  },
  "Avatar": {
    "global": ["colorTextLightSolid", "colorTextPlaceholder", "borderRadius", "borderRadiusLG", "borderRadiusSM", "lineWidth", "lineType", "colorText", "fontSize", "lineHeight", "fontFamily"],
    "component": {
      "containerSize": 32,
      "containerSizeLG": 40,
      "containerSizeSM": 24,
      "textFontSize": 14,
      "textFontSizeLG": 14,
      "textFontSizeSM": 14,
      "iconFontSize": 18,
      "iconFontSizeLG": 24,
      "iconFontSizeSM": 14,
      "groupSpace": 4,
      "groupOverlapping": -8,
      "groupBorderColor": "#ffffff"
    }
  },
  "App": {
    "global": ["colorText", "fontSize", "lineHeight", "fontFamily"],
    "component": {}
  },
  "Input": {
    "global": ["paddingXXS", "borderRadiusLG", "borderRadiusSM", "colorText", "fontSize", "lineHeight", "fontFamily", "paddingXS", "lineHeightLG", "controlHeightLG", "controlHeightSM", "borderRadius", "motionDurationSlow", "lineWidth", "lineType", "colorBorder", "colorError", "colorErrorText", "colorWarning", "colorWarningText", "colorTextDisabled", "colorBgContainerDisabled", "colorFillTertiary", "colorErrorBg", "colorWarningBg", "colorPrimaryHover", "controlHeight", "colorTextDescription", "colorPrimaryActive"],
    "component": {
      "paddingBlock": 4,
      "paddingBlockSM": 0,
      "paddingBlockLG": 7,
      "paddingInline": 11,
      "paddingInlineSM": 7,
      "paddingInlineLG": 11,
      "addonBg": "rgba(0,0,0,0.02)",
      "activeBorderColor": "#1677ff",
      "hoverBorderColor": "#4096ff",
      "activeShadow": "0 0 0 2px rgba(5,145,255,0.1)",
      "errorActiveShadow": "0 0 0 2px rgba(255,38,5,0.06)",
      "warningActiveShadow": "0 0 0 2px rgba(255,215,5,0.1)",
      "hoverBg": "#ffffff",
      "activeBg": "#ffffff",
      "inputFontSize": 14,
      "inputFontSizeLG": 16,
      "inputFontSizeSM": 14
    }
  },
  "Image": {
    "global": ["controlHeightLG", "colorBgContainerDisabled", "motionDurationSlow", "paddingXXS", "marginXXS", "colorTextLightSolid", "motionEaseOut", "paddingSM", "marginXL", "margin", "paddingLG", "marginSM", "zIndexPopupBase", "colorBgMask", "motionDurationMid", "motionEaseOutCirc", "motionEaseInOutCirc"],
    "component": {
      "zIndexPopup": 1080,
      "previewOperationColor": "rgba(255,255,255,0.65)",
      "previewOperationHoverColor": "rgba(255,255,255,0.85)",
      "previewOperationColorDisabled": "rgba(255,255,255,0.25)",
      "previewOperationSize": 18
    }
  },
  "Drawer": {
    "global": ["borderRadiusSM", "colorBgMask", "colorBgElevated", "motionDurationSlow", "motionDurationMid", "paddingXS", "padding", "paddingLG", "fontSizeLG", "lineHeightLG", "lineWidth", "lineType", "colorSplit", "marginXS", "colorIcon", "colorIconHover", "colorBgTextHover", "colorBgTextActive", "colorText", "fontWeightStrong", "boxShadowDrawerLeft", "boxShadowDrawerRight", "boxShadowDrawerUp", "boxShadowDrawerDown", "lineWidthFocus", "colorPrimaryBorder"],
    "component": {
      "zIndexPopup": 1000,
      "footerPaddingBlock": 8,
      "footerPaddingInline": 16
    }
  },
  "Divider": {
    "global": ["margin", "colorSplit", "lineWidth", "colorText", "fontSize", "lineHeight", "fontFamily", "marginLG", "colorTextHeading", "fontSizeLG", "marginXS"],
    "component": {
      "textPaddingInline": "1em",
      "orientationMargin": 0.05,
      "verticalMarginInline": 8
    }
  },
  "Descriptions": {
    "global": ["colorText", "fontSize", "lineHeight", "fontFamily", "lineWidth", "lineType", "colorSplit", "borderRadiusLG", "padding", "paddingLG", "colorTextSecondary", "paddingSM", "paddingXS", "fontWeightStrong", "fontSizeLG", "lineHeightLG"],
    "component": {
      "labelBg": "rgba(0,0,0,0.02)",
      "labelColor": "rgba(0,0,0,0.45)",
      "titleColor": "rgba(0,0,0,0.88)",
      "titleMarginBottom": 20,
      "itemPaddingBottom": 16,
      "itemPaddingEnd": 16,
      "colonMarginRight": 8,
      "colonMarginLeft": 2,
      "contentColor": "rgba(0,0,0,0.88)",
      "extraColor": "rgba(0,0,0,0.88)"
    }
  },
  "DatePicker": {
    "global": ["paddingXXS", "controlHeightLG", "padding", "paddingSM", "controlHeight", "lineWidth", "colorPrimary", "colorPrimaryBorder", "lineType", "colorSplit", "colorTextDisabled", "colorBorder", "borderRadius", "motionDurationMid", "colorTextPlaceholder", "fontSizeLG", "fontSizeSM", "controlHeightSM", "paddingXS", "marginXS", "colorIcon", "lineWidthBold", "motionDurationSlow", "sizePopupArrow", "colorBgElevated", "borderRadiusLG", "boxShadowSecondary", "borderRadiusSM", "boxShadowPopoverArrow", "fontHeight", "lineHeightLG", "colorText", "fontSize", "lineHeight", "fontFamily", "colorBgContainer", "colorTextHeading", "colorIconHover", "fontWeightStrong", "colorTextLightSolid", "controlItemBgActive", "marginXXS", "colorFillSecondary", "colorTextTertiary", "borderRadiusXS", "motionEaseOutQuint", "motionEaseInQuint", "motionEaseOutCirc", "motionEaseInOutCirc", "colorBgContainerDisabled", "colorError", "colorErrorBorderHover", "colorWarning", "colorWarningBorderHover", "colorFillTertiary", "colorErrorBg", "colorErrorBgHover", "colorErrorText", "colorWarningBg", "colorWarningBgHover", "colorWarningText"],
    "component": {
      "paddingBlock": 4,
      "paddingBlockSM": 0,
      "paddingBlockLG": 7,
      "paddingInline": 11,
      "paddingInlineSM": 7,
      "paddingInlineLG": 11,
      "addonBg": "rgba(0,0,0,0.02)",
      "activeBorderColor": "#1677ff",
      "hoverBorderColor": "#4096ff",
      "activeShadow": "0 0 0 2px rgba(5,145,255,0.1)",
      "errorActiveShadow": "0 0 0 2px rgba(255,38,5,0.06)",
      "warningActiveShadow": "0 0 0 2px rgba(255,215,5,0.1)",
      "hoverBg": "#ffffff",
      "activeBg": "#ffffff",
      "inputFontSize": 14,
      "inputFontSizeLG": 16,
      "inputFontSizeSM": 14,
      "INTERNAL_FIXED_ITEM_MARGIN": 2,
      "cellHoverBg": "rgba(0,0,0,0.04)",
      "cellActiveWithRangeBg": "#e6f4ff",
      "cellHoverWithRangeBg": "#cbe0fd",
      "cellRangeBorderColor": "#82b4f9",
      "cellBgDisabled": "rgba(0,0,0,0.04)",
      "timeColumnWidth": 56,
      "timeColumnHeight": 224,
      "timeCellHeight": 28,
      "cellWidth": 36,
      "cellHeight": 24,
      "textHeight": 40,
      "withoutTimeCellHeight": 66,
      "multipleItemBg": "rgba(0,0,0,0.06)",
      "multipleItemBorderColor": "transparent",
      "multipleItemHeight": 24,
      "multipleItemHeightSM": 16,
      "multipleItemHeightLG": 32,
      "multipleSelectorBgDisabled": "rgba(0,0,0,0.04)",
      "multipleItemColorDisabled": "rgba(0,0,0,0.25)",
      "multipleItemBorderColorDisabled": "transparent",
      "arrowShadowWidth": 8.970562748477143,
      "arrowPath": "path('M 0 8 A 4 4 0 0 0 2.82842712474619 6.82842712474619 L 6.585786437626905 3.0710678118654755 A 2 2 0 0 1 9.414213562373096 3.0710678118654755 L 13.17157287525381 6.82842712474619 A 4 4 0 0 0 16 8 Z')",
      "arrowPolygon": "polygon(1.6568542494923806px 100%, 50% 1.6568542494923806px, 14.34314575050762px 100%, 1.6568542494923806px 100%)",
      "presetsWidth": 120,
      "presetsMaxWidth": 200,
      "zIndexPopup": 1050
    }
  },
  "ColorPicker": {
    "global": ["colorTextQuaternary", "marginSM", "colorPrimary", "motionDurationMid", "colorBgElevated", "colorTextDisabled", "colorText", "colorBgContainerDisabled", "borderRadius", "marginXS", "controlHeight", "controlHeightSM", "colorBgTextActive", "lineWidth", "colorBorder", "paddingXXS", "fontSize", "colorPrimaryHover", "controlOutline", "controlHeightLG", "borderRadiusSM", "colorFillSecondary", "lineWidthBold", "colorPrimaryActive", "fontSizeSM", "lineHeightSM", "marginXXS", "fontSizeIcon", "paddingXS", "colorTextPlaceholder", "colorFill", "colorWhite", "fontHeightSM", "motionEaseInBack", "motionDurationFast", "motionEaseOutBack", "colorSplit", "red6", "controlOutlineWidth", "colorError", "colorWarning", "colorErrorHover", "colorWarningHover", "colorErrorOutline", "colorWarningOutline", "controlHeightXS", "borderRadiusXS", "borderRadiusLG", "fontSizeLG"],
    "component": {}
  },
  "Collapse": {
    "global": ["paddingXS", "paddingSM", "padding", "paddingLG", "borderRadiusLG", "lineWidth", "lineType", "colorBorder", "colorText", "colorTextHeading", "colorTextDisabled", "fontSizeLG", "lineHeight", "lineHeightLG", "marginSM", "motionDurationSlow", "fontSizeIcon", "fontHeight", "fontHeightLG", "fontSize", "fontFamily", "lineWidthFocus", "colorPrimaryBorder", "motionDurationMid", "motionEaseInOut"],
    "component": {
      "headerPadding": "12px 16px",
      "headerBg": "rgba(0,0,0,0.02)",
      "contentPadding": "16px 16px",
      "contentBg": "#ffffff",
      "borderlessContentPadding": "4px 16px 16px",
      "borderlessContentBg": "transparent"
    }
  },
  "Carousel": {
    "global": ["colorText", "fontSize", "lineHeight", "fontFamily", "motionDurationSlow", "colorBgContainer", "marginXXS"],
    "component": {
      "arrowSize": 16,
      "arrowOffset": 8,
      "dotWidth": 16,
      "dotHeight": 3,
      "dotGap": 4,
      "dotOffset": 12,
      "dotWidthActive": 24,
      "dotActiveWidth": 24
    }
  },
  "Card": {
    "global": ["boxShadowCard", "padding", "paddingLG", "fontSize", "colorBorderSecondary", "boxShadowTertiary", "colorText", "lineHeight", "fontFamily", "colorBgContainer", "borderRadiusLG", "colorTextHeading", "fontWeightStrong", "lineWidth", "lineType", "motionDurationMid", "colorTextDescription", "colorPrimary", "colorIcon", "fontHeight", "marginXXS", "marginXS", "fontSizeLG", "colorFillAlter"],
    "component": {
      "headerBg": "transparent",
      "headerFontSize": 16,
      "headerFontSizeSM": 14,
      "headerHeight": 56,
      "headerHeightSM": 38,
      "actionsBg": "#ffffff",
      "actionsLiMargin": "12px 0",
      "tabsMarginBottom": -17,
      "extraColor": "rgba(0,0,0,0.88)",
      "bodyPaddingSM": 12,
      "headerPaddingSM": 12,
      "bodyPadding": 24,
      "headerPadding": 24
    }
  },
  "Calendar": {
    "global": ["controlHeightLG", "paddingXXS", "padding", "controlHeightSM", "fontHeightSM", "marginXS", "lineWidth", "paddingSM", "paddingXS", "colorBgContainer", "lineType", "borderRadiusLG", "colorPrimary", "colorTextHeading", "colorSplit", "colorIcon", "motionDurationMid", "colorIconHover", "fontWeightStrong", "colorTextDisabled", "colorText", "fontSize", "motionDurationSlow", "borderRadiusSM", "colorTextLightSolid", "controlItemBgActive", "marginXXS", "colorFillSecondary", "colorTextTertiary", "lineHeight", "fontFamily", "lineWidthBold", "controlItemBgHover", "screenXS"],
    "component": {
      "fullBg": "#ffffff",
      "fullPanelBg": "#ffffff",
      "itemActiveBg": "#e6f4ff",
      "yearControlWidth": 80,
      "monthControlWidth": 70,
      "miniContentHeight": 256,
      "INTERNAL_FIXED_ITEM_MARGIN": 2,
      "cellHoverBg": "rgba(0,0,0,0.04)",
      "cellActiveWithRangeBg": "#e6f4ff",
      "cellHoverWithRangeBg": "#cbe0fd",
      "cellRangeBorderColor": "#82b4f9",
      "cellBgDisabled": "rgba(0,0,0,0.04)",
      "timeColumnWidth": 56,
      "timeColumnHeight": 224,
      "timeCellHeight": 28,
      "cellWidth": 36,
      "cellHeight": 24,
      "textHeight": 40,
      "withoutTimeCellHeight": 66,
      "multipleItemBg": "rgba(0,0,0,0.06)",
      "multipleItemBorderColor": "transparent",
      "multipleItemHeight": 24,
      "multipleItemHeightSM": 16,
      "multipleItemHeightLG": 32,
      "multipleSelectorBgDisabled": "rgba(0,0,0,0.04)",
      "multipleItemColorDisabled": "rgba(0,0,0,0.25)",
      "multipleItemBorderColorDisabled": "transparent"
    }
  },
  "Button": {
    "global": ["opacityLoading", "motionDurationSlow", "motionEaseInOut", "lineWidth", "lineType", "motionDurationMid", "colorText", "lineWidthFocus", "colorPrimaryBorder", "controlHeight", "borderRadius", "controlHeightSM", "paddingXS", "borderRadiusSM", "controlHeightLG", "borderRadiusLG", "colorBgSolid", "colorBgSolidHover", "colorBgSolidActive", "colorTextDisabled", "colorBgContainerDisabled", "colorFillTertiary", "colorFillSecondary", "colorFill", "colorBorder", "colorLinkHover", "colorLinkActive", "colorPrimary", "colorBgContainer", "colorPrimaryTextHover", "colorPrimaryHover", "colorPrimaryTextActive", "colorPrimaryActive", "colorPrimaryBg", "colorPrimaryBgHover", "colorPrimaryText", "colorError", "colorErrorHover", "colorErrorActive", "colorErrorBorderHover", "colorErrorBg", "colorErrorBgFilledHover", "colorErrorBgActive", "colorLink", "colorInfo", "colorInfoHover", "colorInfoActive", "blue6", "blue1", "blue5", "blue2", "blue3", "blue7", "colorTextLightSolid", "purple6", "purple1", "purple5", "purple2", "purple3", "purple7", "cyan6", "cyan1", "cyan5", "cyan2", "cyan3", "cyan7", "green6", "green1", "green5", "green2", "green3", "green7", "magenta6", "magenta1", "magenta5", "magenta2", "magenta3", "magenta7", "pink6", "pink1", "pink5", "pink2", "pink3", "pink7", "red6", "red1", "red5", "red2", "red3", "red7", "orange6", "orange1", "orange5", "orange2", "orange3", "orange7", "yellow6", "yellow1", "yellow5", "yellow2", "yellow3", "yellow7", "volcano6", "volcano1", "volcano5", "volcano2", "volcano3", "volcano7", "geekblue6", "geekblue1", "geekblue5", "geekblue2", "geekblue3", "geekblue7", "lime6", "lime1", "lime5", "lime2", "lime3", "lime7", "gold6", "gold1", "gold5", "gold2", "gold3", "gold7", "colorBgTextActive", "fontSize"],
    "component": {
      "blueShadowColor": "0 2px 0 rgba(5,145,255,0.1)",
      "purpleShadowColor": "0 2px 0 rgba(155,5,255,0.06)",
      "cyanShadowColor": "0 2px 0 rgba(5,255,215,0.1)",
      "greenShadowColor": "0 2px 0 rgba(142,255,30,0.08)",
      "magentaShadowColor": "0 2px 0 rgba(255,5,105,0.06)",
      "pinkShadowColor": "0 2px 0 rgba(255,5,105,0.06)",
      "redShadowColor": "0 2px 0 rgba(255,22,5,0.06)",
      "orangeShadowColor": "0 2px 0 rgba(255,175,5,0.1)",
      "yellowShadowColor": "0 2px 0 rgba(245,255,5,0.1)",
      "volcanoShadowColor": "0 2px 0 rgba(255,125,25,0.1)",
      "geekblueShadowColor": "0 2px 0 rgba(5,88,255,0.06)",
      "limeShadowColor": "0 2px 0 rgba(225,255,5,0.1)",
      "goldShadowColor": "0 2px 0 rgba(255,215,5,0.1)",
      "fontWeight": 400,
      "iconGap": 8,
      "defaultShadow": "0 2px 0 rgba(0,0,0,0.02)",
      "primaryShadow": "0 2px 0 rgba(5,145,255,0.1)",
      "dangerShadow": "0 2px 0 rgba(255,38,5,0.06)",
      "primaryColor": "#fff",
      "dangerColor": "#fff",
      "borderColorDisabled": "#d9d9d9",
      "defaultGhostColor": "#ffffff",
      "ghostBg": "transparent",
      "defaultGhostBorderColor": "#ffffff",
      "paddingInline": 15,
      "paddingInlineLG": 15,
      "paddingInlineSM": 7,
      "onlyIconSize": "inherit",
      "onlyIconSizeSM": "inherit",
      "onlyIconSizeLG": "inherit",
      "groupBorderColor": "#4096ff",
      "linkHoverBg": "transparent",
      "textTextColor": "rgba(0,0,0,0.88)",
      "textTextHoverColor": "rgba(0,0,0,0.88)",
      "textTextActiveColor": "rgba(0,0,0,0.88)",
      "textHoverBg": "rgba(0,0,0,0.04)",
      "defaultColor": "rgba(0,0,0,0.88)",
      "defaultBg": "#ffffff",
      "defaultBorderColor": "#d9d9d9",
      "defaultBorderColorDisabled": "#d9d9d9",
      "defaultHoverBg": "#ffffff",
      "defaultHoverColor": "#4096ff",
      "defaultHoverBorderColor": "#4096ff",
      "defaultActiveBg": "#ffffff",
      "defaultActiveColor": "#0958d9",
      "defaultActiveBorderColor": "#0958d9",
      "solidTextColor": "#fff",
      "contentFontSize": 14,
      "contentFontSizeSM": 14,
      "contentFontSizeLG": 16,
      "contentLineHeight": 1.5714285714285714,
      "contentLineHeightSM": 1.5714285714285714,
      "contentLineHeightLG": 1.5,
      "paddingBlock": 4,
      "paddingBlockSM": 0,
      "paddingBlockLG": 7
    }
  },
  "Anchor": {
    "global": ["fontSize", "fontSizeLG", "paddingXXS", "motionDurationSlow", "lineWidthBold", "colorPrimary", "lineType", "colorSplit", "colorText", "lineHeight", "fontFamily", "lineWidth"],
    "component": {
      "linkPaddingBlock": 4,
      "linkPaddingInlineStart": 16
    }
  },
  "Alert": {
    "global": ["motionDurationSlow", "marginXS", "marginSM", "fontSize", "fontSizeLG", "lineHeight", "borderRadiusLG", "motionEaseInOutCirc", "colorText", "colorTextHeading", "fontFamily", "colorSuccess", "colorSuccessBorder", "colorSuccessBg", "colorWarning", "colorWarningBorder", "colorWarningBg", "colorError", "colorErrorBorder", "colorErrorBg", "colorInfo", "colorInfoBorder", "colorInfoBg", "lineWidth", "lineType", "motionDurationMid", "fontSizeIcon", "colorIcon", "colorIconHover"],
    "component": {
      "withDescriptionIconSize": 24,
      "defaultPadding": "8px 12px",
      "withDescriptionPadding": "20px 24px"
    }
  },
  "Affix": {
    "global": [],
    "component": {
      "zIndexPopup": 10
    }
  }
}
```

global 部分 从上面拿  组件私有的从这里拿

```
/**
 * 将字符串转换为 SCSS 变量名的规范格式
 * @param str - 要转换的字符串
 * @returns 规范化后的 SCSS 变量名
 */
function normalizeScssVariableName(str: string): string {
  return str
    .replace(/\./g, '-') // 将点号转换为连字符
    .replace(/[^a-zA-Z0-9_-]/g, '-') // 将其他特殊字符转换为连字符
    .replace(/-+/g, '-') // 将多个连续连字符合并为一个
    .replace(/^-|-$/g, ''); // 移除开头和结尾的连字符
}

function convertToScssVariables(obj: any, prefix = ''): string {
  const variables: string[] = [];

  function traverse(currentObj: any, currentPrefix: string) {
    for (const [key, value] of Object.entries(currentObj)) {
      const normalizedKey = normalizeScssVariableName(key);
      const variableName = currentPrefix ? `${currentPrefix}-${normalizedKey}` : normalizedKey;

      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // 递归处理嵌套对象
        traverse(value, variableName);
      } else {
        // 处理叶子节点
        let scssValue: string;

        if (typeof value === 'string') {
          // 字符串值直接使用
          scssValue = value;
        } else if (typeof value === 'number') {
          // 数字值直接使用
          scssValue = value.toString();
        } else if (typeof value === 'boolean') {
          // 布尔值转换为字符串
          scssValue = value.toString();
        } else {
          // 其他类型转换为字符串
          scssValue = String(value);
        }

        // 生成 SCSS 变量声明
        variables.push(`$${variableName}: ${scssValue};`);
      }
    }
  }
  traverse(obj, prefix);
  return variables.join('');
}

const themeConfig = `${convertToScssVariables(theme.light, 'light')}${convertToScssVariables(theme.dark, 'dark')}`;
```

生成variables.scss
```
$light-token-blue-1: #f0f5ff;
$light-token-blue-2: #e6edff;
$light-token-blue-3: #bdceff;
$light-token-blue-4: #94adff;
$light-token-blue-5: #6b89ff;
$light-token-blue-6: #4161fd;
$light-token-blue-7: #2d44d6;
$light-token-blue-8: #1c2bb0;
$light-token-blue-9: #0f178a;
$light-token-blue-10: #0a0d63;
$light-token-cyan-1: #e6fffb;
$light-token-cyan-2: #b5f5ec;
$light-token-cyan-3: #87e8de;
$light-token-cyan-4: #5cdbd3;
$light-token-cyan-5: #36cfc9;
$light-token-cyan-6: #13c2c2;
$light-token-cyan-7: #08979c;
$light-token-cyan-8: #006d75;
$light-token-cyan-9: #00474f;
$light-token-cyan-10: #002329;
$light-token-geekblue-1: #f0f5ff;
$light-token-geekblue-2: #d6e4ff;
$light-token-geekblue-3: #adc6ff;
$light-token-geekblue-4: #85a5ff;
$light-token-geekblue-5: #597ef7;
$light-token-geekblue-6: #2f54eb;
$light-token-geekblue-7: #1d39c4;
$light-token-geekblue-8: #10239e;
$light-token-geekblue-9: #061178;
$light-token-geekblue-10: #030852;
$light-token-gold-1: #fffbe6;
$light-token-gold-2: #fff1b8;
$light-token-gold-3: #ffe58f;
$light-token-gold-4: #ffd666;
$light-token-gold-5: #ffc53d;
$light-token-gold-6: #faad14;
$light-token-gold-7: #d48806;
$light-token-gold-8: #ad6800;
$light-token-gold-9: #874d00;
$light-token-gold-10: #613400;
$light-token-green-1: #f3fff0;
$light-token-green-2: #cffcc5;
$light-token-green-3: #a2f095;
$light-token-green-4: #77e368;
$light-token-green-5: #4dd640;
$light-token-green-6: #25ca1d;
$light-token-green-7: #11a30f;
$light-token-green-8: #057d07;
$light-token-green-9: #005704;
$light-token-green-10: #003004;
$light-token-lime-1: #fcffe6;
$light-token-lime-2: #f4ffb8;
$light-token-lime-3: #eaff8f;
$light-token-lime-4: #d3f261;
$light-token-lime-5: #bae637;
$light-token-lime-6: #a0d911;
$light-token-lime-7: #7cb305;
$light-token-lime-8: #5b8c00;
$light-token-lime-9: #3f6600;
$light-token-lime-10: #254000;
$light-token-magenta-1: #fff0f6;
$light-token-magenta-2: #ffd6e7;
$light-token-magenta-3: #ffadd2;
$light-token-magenta-4: #ff85c0;
$light-token-magenta-5: #f759ab;
$light-token-magenta-6: #eb2f96;
$light-token-magenta-7: #c41d7f;
$light-token-magenta-8: #9e1068;
$light-token-magenta-9: #780650;
$light-token-magenta-10: #520339;
$light-token-orange-1: #fff7e6;
$light-token-orange-2: #ffe7ba;
$light-token-orange-3: #ffd591;
$light-token-orange-4: #ffc069;
$light-token-colorText: rgba(0, 0, 0, 0.88);
$light-token-colorTextSecondary: rgba(0, 0, 0, 0.65);
$light-token-orange-5: #ffa940;
$light-token-colorTextTertiary: rgba(0, 0, 0, 0.45);
$light-token-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-token-orange-6: #fa8c16;
$light-token-orange-7: #d46b08;
$light-token-colorTextLightSolid: #ffffff;
$light-token-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-token-colorTextLabel: rgba(0, 0, 0, 0.65);
$light-token-orange-8: #ad4e00;
$light-token-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-token-orange-9: #873800;
$light-token-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-token-orange-10: #612500;
$light-token-purple-1: #f9f0ff;
$light-token-purple-2: #efdbff;
$light-token-purple-3: #d3adf7;
$light-token-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-token-colorIcon: rgba(0, 0, 0, 0.45);
$light-token-purple-4: #b37feb;
$light-token-colorIconHover: rgba(0, 0, 0, 0.88);
$light-token-colorBgContainer: #ffffff;
$light-token-purple-5: #9254de;
$light-token-colorBgElevated: #ffffff;
$light-token-purple-6: #722ed1;
$light-token-colorBgLayout: #f5f5f5;
$light-token-purple-7: #531dab;
$light-token-colorBgMask: rgba(0, 0, 0, 0.45);
$light-token-purple-8: #391085;
$light-token-colorBgSpotlight: rgba(0, 0, 0, 0.85);
$light-token-purple-9: #22075e;
$light-token-colorBorder: #d9d9d9;
$light-token-purple-10: #120338;
$light-token-colorBorderSecondary: #f0f0f0;
$light-token-red-1: #fff2f0;
$light-token-colorFill: rgba(0, 0, 0, 0.15);
$light-token-red-2: #ffe9e6;
$light-token-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-token-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-token-colorFillQuaternary: rgba(0, 0, 0, 0.02);
$light-token-red-3: #ffc3bd;
$light-token-red-4: #ff9b94;
$light-token-colorWhite: #ffffff;
$light-token-red-5: #fa6e69;
$light-token-colorBgBase: #ffffff;
$light-token-red-6: #ec3e3e;
$light-token-colorTextBase: #000000;
$light-token-red-7: #c72a2f;
$light-token-red-8: #a11a23;
$light-token-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-token-red-9: #7a0d18;
$light-token-colorBgTextActive: rgba(0, 0, 0, 0.15);
$light-token-red-10: #540813;
$light-token-colorBgTextHover: rgba(0, 0, 0, 0.06);
$light-token-volcano-1: #fff2e8;
$light-token-colorBorderBg: #ffffff;
$light-token-volcano-2: #ffd8bf;
$light-token-colorFillContent: rgba(0, 0, 0, 0.06);
$light-token-volcano-3: #ffbb96;
$light-token-colorFillContentHover: rgba(0, 0, 0, 0.15);
$light-token-volcano-4: #ff9c6e;
$light-token-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-token-volcano-5: #ff7a45;
$light-token-volcano-6: #fa541c;
$light-token-volcano-7: #d4380d;
$light-token-transparent: rgba(0, 0, 0, 0);
$light-token-colorSplit: rgba(0, 0, 0, 0.08);
$light-token-yellow-1: #feffe6;
$light-token-volcano-8: #ad2102;
$light-token-yellow-2: #ffffb8;
$light-token-yellow-3: #fffb8f;
$light-token-volcano-9: #871400;
$light-token-yellow-4: #fff566;
$light-token-volcano-10: #610b00;
$light-token-yellow-5: #ffec3d;
$light-token-yellow-6: #fadb14;
$light-token-yellow-7: #d4b106;
$light-token-yellow-8: #ad8b00;
$light-token-yellow-9: #876800;
$light-token-yellow-10: #614700;
$light-token-colorPrimary: #4161fd;
$light-token-colorSuccess: #25ca1d;
$light-token-colorWarning: #faad14;
$light-token-colorInfo: #4161fd;
$light-token-colorError: #ec3e3e;
$light-token-colorLink: #4161fd;
$light-token-colorErrorBg: #fff2f0;
$light-token-colorErrorBgHover: #ffe9e6;
$light-token-colorErrorBorder: #ffc3bd;
$light-token-colorErrorBorderHover: #ff9b94;
$light-token-colorErrorHover: #fa6e69;
$light-token-colorErrorActive: #c72a2f;
$light-token-colorErrorTextHover: #fa6e69;
$light-token-colorErrorText: #ec3e3e;
$light-token-colorErrorTextActive: #c72a2f;
$light-token-colorLinkHover: #6b89ff;
$light-token-colorInfoBg: #f0f5ff;
$light-token-colorInfoBgHover: #e6edff;
$light-token-colorInfoBorder: #bdceff;
$light-token-colorInfoBorderHover: #94adff;
$light-token-colorInfoHover: #6b89ff;
$light-token-colorInfoActive: #2d44d6;
$light-token-colorInfoTextHover: #6b89ff;
$light-token-colorInfoText: #4161fd;
$light-token-colorInfoTextActive: #2d44d6;
$light-token-colorLinkActive: #2d44d6;
$light-token-colorPrimaryBg: #f0f5ff;
$light-token-colorPrimaryBgHover: #e6edff;
$light-token-colorPrimaryBorder: #bdceff;
$light-token-colorPrimaryBorderHover: #94adff;
$light-token-colorPrimaryHover: #6b89ff;
$light-token-colorPrimaryActive: #2d44d6;
$light-token-colorPrimaryTextHover: #6b89ff;
$light-token-colorPrimaryText: #4161fd;
$light-token-colorPrimaryTextActive: #2d44d6;
$light-token-colorSuccessBg: #f3fff0;
$light-token-colorSuccessBgHover: #cffcc5;
$light-token-colorSuccessBorder: #a2f095;
$light-token-colorSuccessBorderHover: #77e368;
$light-token-colorSuccessHover: #77e368;
$light-token-colorSuccessActive: #11a30f;
$light-token-colorSuccessTextHover: #4dd640;
$light-token-colorSuccessText: #25ca1d;
$light-token-colorSuccessTextActive: #11a30f;
$light-token-colorWarningBg: #fffbe6;
$light-token-colorWarningBgHover: #fff1b8;
$light-token-colorWarningBorder: #ffe58f;
$light-token-colorWarningBorderHover: #ffd666;
$light-token-colorWarningHover: #ffd666;
$light-token-colorWarningActive: #d48806;
$light-token-colorWarningTextHover: #ffc53d;
$light-token-colorWarningText: #faad14;
$light-token-colorWarningTextActive: #d48806;
$light-token-colorErrorOutline: rgba(255, 38, 6, 0.06);
$light-token-colorWarningOutline: rgba(255, 215, 5, 0.1);
$light-token-controlItemBgActive: #f0f5ff;
$light-token-controlItemBgActiveDisabled: rgba(0, 0, 0, 0.15);
$light-token-controlItemBgActiveHover: #e6edff;
$light-token-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-token-controlOutline: rgba(65, 97, 253, 0.1);
$light-token-controlTmpOutline: rgba(0, 0, 0, 0.02);
$light-token-borderRadius: 6;
$light-token-borderRadiusLG: 8;
$light-token-borderRadiusSM: 4;
$light-token-borderRadiusXS: 2;
$light-token-sizeStep: 4;
$light-token-sizeUnit: 4;
$light-token-controlInteractiveSize: 16;
$light-token-size: 16;
$light-token-sizeLG: 24;
$light-token-sizeMD: 20;
$light-token-sizeMS: 16;
$light-token-sizeSM: 12;
$light-token-sizeXL: 32;
$light-token-sizeXS: 8;
$light-token-sizeXXL: 48;
$light-token-controlHeight: 32;
$light-token-sizeXXS: 4;
$light-token-controlHeightLG: 40;
$light-token-controlHeightSM: 24;
$light-token-controlHeightXS: 16;
$light-token-lineWidth: 1;
$light-token-lineWidthBold: 2;
$light-token-lineWidthFocus: 4;
$light-token-controlOutlineWidth: 2;
$light-token-screenLG: 992;
$light-token-screenLGMax: 1199;
$light-token-screenLGMin: 992;
$light-token-screenMD: 768;
$light-token-screenMDMax: 991;
$light-token-screenMDMin: 768;
$light-token-screenSM: 576;
$light-token-screenSMMax: 767;
$light-token-screenSMMin: 576;
$light-token-screenXL: 1200;
$light-token-screenXLMax: 1599;
$light-token-screenXLMin: 1200;
$light-token-screenXS: 480;
$light-token-screenXSMax: 575;
$light-token-screenXSMin: 480;
$light-token-screenXXL: 1600;
$light-token-screenXXLMin: 1600;
$light-token-sizePopupArrow: 16;
$light-token-margin: 16;
$light-token-marginLG: 24;
$light-token-marginMD: 20;
$light-token-marginSM: 12;
$light-token-marginXL: 32;
$light-token-marginXS: 8;
$light-token-marginXXL: 48;
$light-token-marginXXS: 4;
$light-token-padding: 16;
$light-token-paddingLG: 24;
$light-token-paddingMD: 20;
$light-token-paddingSM: 12;
$light-token-paddingXL: 32;
$light-token-paddingXS: 8;
$light-token-paddingXXS: 4;
$light-token-paddingContentHorizontal: 16;
$light-token-paddingContentHorizontalLG: 24;
$light-token-paddingContentHorizontalSM: 16;
$light-token-paddingContentVertical: 12;
$light-token-paddingContentVerticalLG: 16;
$light-token-paddingContentVerticalSM: 8;
$light-token-controlPaddingHorizontal: 12;
$light-token-controlPaddingHorizontalSM: 8;
$light-token-fontFamily: SF Pro Text;
$light-token-fontFamilyCode: Courier Prime;
$light-token-fontSize: 14;
$light-token-fontSizeLG: 16;
$light-token-fontSizeSM: 12;
$light-token-fontSizeXL: 20;
$light-token-fontSizeHeading1: 38;
$light-token-fontSizeHeading2: 30;
$light-token-fontSizeHeading3: 24;
$light-token-fontSizeHeading4: 20;
$light-token-fontSizeHeading5: 16;
$light-token-lineHeight: 1.5714285714285714;
$light-token-lineHeightHeading1: 1.2105263157894737;
$light-token-lineHeightHeading2: 1.2666666666666666;
$light-token-lineHeightHeading3: 1.3333333333333333;
$light-token-lineHeightHeading4: 1.4;
$light-token-lineHeightHeading5: 1.5;
$light-token-lineHeightLG: 1.5;
$light-token-lineHeightSM: 1.6666666666666667;
$light-token-fontSizeIcon: 12;
$light-token-fontWeightStrong: 600;
$light-token-colorFillAlterSolid: #fafafa;
$light-token-fontWeightNormal: 400;
$light-token-colorFilledHandleBg: #f0f0f0;
$light-token-colorBgSolid: #000000;
$light-token-colorBgSolidActive: rgba(0, 0, 0, 0.95);
$light-token-colorBgSolidHover: rgba(0, 0, 0, 0.75);
$light-token-solidTextColor: #ffffff;
$light-token-pink-1: #fff0f6;
$light-token-pink-2: #ffd6e7;
$light-token-pink-3: #ffadd2;
$light-token-pink-4: #ff85c0;
$light-token-pink-5: #f759ab;
$light-token-pink-6: #eb2f96;
$light-token-pink-7: #c41d7f;
$light-token-pink-8: #9e1068;
$light-token-pink-9: #780650;
$light-token-pink-10: #520339;
$light-token-fontSizeXS: 10;
$light-token-lineHeightXS: 1.6;
$light-token-borderRadiusXL: 12;
$light-token-isDarkMode: false;
$light-token-isLightMode: true;
$light-token-borderRadiusXXL: 16;
$light-components-Input-paddingInlineSM: 7;
$light-components-Input-paddingInlineLG: 11;
$light-components-Input-paddingInline: 11;
$light-components-Input-paddingBlockSM: 0;
$light-components-Input-paddingBlockLG: 7;
$light-components-Input-paddingBlock: 4;
$light-components-Input-paddingXXS: 4;
$light-components-Input-paddingXS: 8;
$light-components-Input-paddingSM: 12;
$light-components-Input-paddingLG: 24;
$light-components-Input-lineWidth: 1;
$light-components-Input-lineHeightLG: 1.5;
$light-components-Input-lineHeight: 1.5714285714285714;
$light-components-Input-fontSizeLG: 16;
$light-components-Input-fontSizeIcon: 12;
$light-components-Input-fontSize: 14;
$light-components-Input-controlPaddingHorizontalSM: 8;
$light-components-Input-controlPaddingHorizontal: 12;
$light-components-Input-controlOutlineWidth: 2;
$light-components-Input-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-Input-controlHeightSM: 24;
$light-components-Input-controlHeightLG: 40;
$light-components-Input-controlHeight: 32;
$light-components-Input-borderRadiusSM: 4;
$light-components-Input-borderRadiusLG: 8;
$light-components-Input-borderRadius: 6;
$light-components-Input-colorWarningOutline: rgba(255, 215, 5, 0.1);
$light-components-Input-colorWarningBorderHover: #ffd666;
$light-components-Input-colorWarning: #faad14;
$light-components-Input-colorTextTertiary: rgba(0, 0, 0, 0.45);
$light-components-Input-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-components-Input-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-Input-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Input-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Input-colorText: rgba(0, 0, 0, 0.88);
$light-components-Input-colorPrimary: #4161fd;
$light-components-Input-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Input-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Input-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Input-colorErrorOutline: rgba(255, 38, 6, 0.06);
$light-components-Input-colorErrorBorderHover: #ff9b94;
$light-components-Input-colorError: #ec3e3e;
$light-components-Input-colorBorder: #d9d9d9;
$light-components-Input-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Input-colorBgContainer: #ffffff;
$light-components-Input-hoverBorderColor: #6b89ff;
$light-components-Input-addonBg: rgba(0, 0, 0, 0.02);
$light-components-Input-activeBorderColor: #4161fd;
$light-components-Input-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-Input-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Input-colorErrorBgHover: #ffe9e6;
$light-components-Input-colorErrorBg: #fff2f0;
$light-components-Input-colorWarningBg: #fffbe6;
$light-components-Input-colorWarningBgHover: #fff1b8;
$light-components-Input-colorWarningText: #faad14;
$light-components-Input-colorErrorText: #ec3e3e;
$light-components-Input-activeBg: #ffffff;
$light-components-Input-hoverBg: #ffffff;
$light-components-Input-inputFontSize: 14;
$light-components-Input-inputFontSizeLG: 16;
$light-components-Input-inputFontSizeSM: 12;
$light-components-Input-fontFamily: SF Pro Text;
$light-components-Transfer-listWidthLG: 250;
$light-components-Transfer-listWidth: 180;
$light-components-Transfer-listHeight: 200;
$light-components-Transfer-itemPaddingBlock: 5;
$light-components-Transfer-paddingXS: 8;
$light-components-Transfer-paddingSM: 12;
$light-components-Transfer-marginXXS: 4;
$light-components-Transfer-marginXS: 8;
$light-components-Transfer-margin: 16;
$light-components-Transfer-lineWidth: 1;
$light-components-Transfer-lineHeight: 1.5714285714285714;
$light-components-Transfer-fontSizeIcon: 12;
$light-components-Transfer-fontSize: 14;
$light-components-Transfer-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Transfer-controlItemBgActiveHover: #e6edff;
$light-components-Transfer-controlItemBgActive: #f0f5ff;
$light-components-Transfer-controlHeightLG: 40;
$light-components-Transfer-controlHeight: 32;
$light-components-Transfer-borderRadiusLG: 8;
$light-components-Transfer-colorWarning: #faad14;
$light-components-Transfer-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Transfer-colorText: rgba(0, 0, 0, 0.88);
$light-components-Transfer-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Transfer-colorLinkHover: #6b89ff;
$light-components-Transfer-colorError: #ec3e3e;
$light-components-Transfer-colorBorder: #d9d9d9;
$light-components-Transfer-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Transfer-colorBgContainer: #ffffff;
$light-components-Transfer-itemHeight: 32;
$light-components-Transfer-headerHeight: 40;
$light-components-Transfer-fontFamily: SF Pro Text;
$light-components-Segmented-segmentedBgColorSelected: #ffffff;
$light-components-Segmented-paddingXXS: 4;
$light-components-Segmented-marginSM: 12;
$light-components-Segmented-lineWidthBold: 2;
$light-components-Segmented-lineWidth: 1;
$light-components-Segmented-lineHeight: 1.5714285714285714;
$light-components-Segmented-fontSizeLG: 16;
$light-components-Segmented-fontSize: 14;
$light-components-Segmented-controlPaddingHorizontalSM: 8;
$light-components-Segmented-controlPaddingHorizontal: 12;
$light-components-Segmented-controlHeightSM: 24;
$light-components-Segmented-controlHeightLG: 40;
$light-components-Segmented-controlHeight: 32;
$light-components-Segmented-borderRadiusXS: 2;
$light-components-Segmented-borderRadiusSM: 4;
$light-components-Segmented-borderRadiusLG: 8;
$light-components-Segmented-borderRadius: 6;
$light-components-Segmented-colorTextLabel: rgba(0, 0, 0, 0.65);
$light-components-Segmented-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Segmented-colorText: rgba(0, 0, 0, 0.88);
$light-components-Segmented-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Segmented-colorFill: rgba(0, 0, 0, 0.15);
$light-components-Segmented-colorBgLayout: #f5f5f5;
$light-components-Segmented-colorBgElevated: #ffffff;
$light-components-Segmented-segmentedGroupBg: rgba(0, 0, 0, 0.04);
$light-components-Segmented-itemSelectedColor: rgba(0, 0, 0, 0.88);
$light-components-Segmented-itemSelectedBg: #ffffff;
$light-components-Segmented-itemHoverColor: rgba(0, 0, 0, 0.88);
$light-components-Segmented-itemHoverBg: rgba(0, 0, 0, 0.06);
$light-components-Segmented-itemColor: rgba(0, 0, 0, 0.65);
$light-components-Segmented-itemActiveBg: rgba(0, 0, 0, 0.15);
$light-components-Segmented-trackPadding: 2;
$light-components-Segmented-trackBg: #f5f5f5;
$light-components-Segmented-fontFamily: SF Pro Text;
$light-components-Switch-trackPadding: 2;
$light-components-Switch-trackMinWidthSM: 28;
$light-components-Switch-trackMinWidth: 44;
$light-components-Switch-trackHeightSM: 16;
$light-components-Switch-trackHeight: 22;
$light-components-Switch-handleSizeSM: 12;
$light-components-Switch-handleSize: 18;
$light-components-Switch-marginXXS: 4;
$light-components-Switch-lineWidthFocus: 4;
$light-components-Switch-lineHeight: 1.5714285714285714;
$light-components-Switch-fontSizeSM: 12;
$light-components-Switch-fontSizeIcon: 12;
$light-components-Switch-fontSize: 14;
$light-components-Switch-controlHeight: 32;
$light-components-Switch-colorWhite: #ffffff;
$light-components-Switch-colorTextTertiary: rgba(0, 0, 0, 0.45);
$light-components-Switch-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-components-Switch-colorTextLightSolid: #ffffff;
$light-components-Switch-colorText: rgba(0, 0, 0, 0.88);
$light-components-Switch-colorPrimaryHover: #6b89ff;
$light-components-Switch-colorPrimaryBorder: #bdceff;
$light-components-Switch-colorPrimary: #4161fd;
$light-components-Switch-handleBg: #ffffff;
$light-components-Switch-fontFamily: SF Pro Text;
$light-components-TimePicker-timeColumnWidth: 56;
$light-components-TimePicker-timeColumnHeight: 224;
$light-components-TimePicker-timeCellHeight: 28;
$light-components-TimePicker-borderRadiusSM: 4;
$light-components-TimePicker-borderRadiusLG: 8;
$light-components-TimePicker-sizePopupArrow: 16;
$light-components-TimePicker-paddingXXS: 4;
$light-components-TimePicker-paddingXS: 8;
$light-components-TimePicker-paddingSM: 12;
$light-components-TimePicker-padding: 16;
$light-components-TimePicker-marginXXS: 4;
$light-components-TimePicker-marginXS: 8;
$light-components-TimePicker-lineWidthBold: 2;
$light-components-TimePicker-lineWidth: 1;
$light-components-TimePicker-lineHeightLG: 1.5;
$light-components-TimePicker-lineHeight: 1.5714285714285714;
$light-components-TimePicker-fontWeightStrong: 600;
$light-components-TimePicker-fontSizeLG: 16;
$light-components-TimePicker-fontSize: 14;
$light-components-TimePicker-controlPaddingHorizontalSM: 8;
$light-components-TimePicker-controlPaddingHorizontal: 12;
$light-components-TimePicker-controlOutlineWidth: 2;
$light-components-TimePicker-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-TimePicker-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-TimePicker-controlItemBgActive: #f0f5ff;
$light-components-TimePicker-controlHeightSM: 24;
$light-components-TimePicker-controlHeightLG: 40;
$light-components-TimePicker-controlHeight: 32;
$light-components-TimePicker-borderRadiusXS: 2;
$light-components-TimePicker-borderRadius: 6;
$light-components-TimePicker-colorWarningOutline: rgba(255, 215, 5, 0.1);
$light-components-TimePicker-colorWarning: #faad14;
$light-components-TimePicker-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-components-TimePicker-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-TimePicker-colorTextLightSolid: #ffffff;
$light-components-TimePicker-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-TimePicker-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-TimePicker-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-TimePicker-colorText: rgba(0, 0, 0, 0.88);
$light-components-TimePicker-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-TimePicker-colorPrimaryHover: #6b89ff;
$light-components-TimePicker-colorPrimaryBorder: #bdceff;
$light-components-TimePicker-colorPrimary: #4161fd;
$light-components-TimePicker-colorLinkHover: #6b89ff;
$light-components-TimePicker-colorLinkActive: #2d44d6;
$light-components-TimePicker-colorLink: #4161fd;
$light-components-TimePicker-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-TimePicker-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-TimePicker-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-TimePicker-colorErrorOutline: rgba(255, 38, 6, 0.06);
$light-components-TimePicker-colorError: #ec3e3e;
$light-components-TimePicker-colorBorder: #d9d9d9;
$light-components-TimePicker-colorBgElevated: #ffffff;
$light-components-TimePicker-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-TimePicker-colorBgContainer: #ffffff;
$light-components-TimePicker-hoverBorderColor: #6b89ff;
$light-components-TimePicker-cellHoverBg: rgba(0, 0, 0, 0.04);
$light-components-TimePicker-cellHeight: 24;
$light-components-TimePicker-activeBorderColor: #4161fd;
$light-components-TimePicker-paddingInline: 11;
$light-components-TimePicker-paddingInlineLG: 11;
$light-components-TimePicker-paddingInlineSM: 7;
$light-components-TimePicker-activeBg: #ffffff;
$light-components-TimePicker-hoverBg: #ffffff;
$light-components-TimePicker-cellBgDisabled: rgba(0, 0, 0, 0.04);
$light-components-TimePicker-cellActiveWithRangeBg: #f0f5ff;
$light-components-TimePicker-cellHoverWithRangeBg: #c8dfff;
$light-components-TimePicker-cellRangeBorderColor: #7cb3ff;
$light-components-TimePicker-multipleItemBg: rgba(0, 0, 0, 0.06);
$light-components-TimePicker-multipleItemBorderColor: rgba(0, 0, 0, 0);
$light-components-TimePicker-multipleItemBorderColorDisabled: rgba(0, 0, 0, 0);
$light-components-TimePicker-multipleItemColorDisabled: rgba(0, 0, 0, 0.25);
$light-components-TimePicker-multipleSelectorBgDisabled: rgba(0, 0, 0, 0.04);
$light-components-TimePicker-cellWidth: 36;
$light-components-TimePicker-multipleItemHeight: 24;
$light-components-TimePicker-multipleItemHeightLG: 32;
$light-components-TimePicker-multipleItemHeightSM: 16;
$light-components-TimePicker-paddingBlock: 4;
$light-components-TimePicker-paddingBlockLG: 7;
$light-components-TimePicker-paddingBlockSM: 0;
$light-components-TimePicker-presetsMaxWidth: 200;
$light-components-TimePicker-presetsWidth: 120;
$light-components-TimePicker-textHeight: 40;
$light-components-TimePicker-withoutTimeCellHeight: 66;
$light-components-TimePicker-inputFontSize: 14;
$light-components-TimePicker-inputFontSizeLG: 16;
$light-components-TimePicker-inputFontSizeSM: 12;
$light-components-TimePicker-fontFamily: SF Pro Text;
$light-components-TimePicker-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-TimePicker-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-Timeline-itemPaddingBottom: 20;
$light-components-Timeline-paddingXXS: 4;
$light-components-Timeline-padding: 16;
$light-components-Timeline-marginXXS: 4;
$light-components-Timeline-marginXS: 8;
$light-components-Timeline-marginSM: 12;
$light-components-Timeline-margin: 16;
$light-components-Timeline-lineWidthBold: 2;
$light-components-Timeline-lineWidth: 1;
$light-components-Timeline-lineHeight: 1.5714285714285714;
$light-components-Timeline-fontSizeSM: 12;
$light-components-Timeline-fontSize: 14;
$light-components-Timeline-controlHeightLG: 40;
$light-components-Timeline-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Timeline-colorText: rgba(0, 0, 0, 0.88);
$light-components-Timeline-colorSuccess: #25ca1d;
$light-components-Timeline-colorPrimary: #4161fd;
$light-components-Timeline-colorError: #ec3e3e;
$light-components-Timeline-colorBgContainer: #ffffff;
$light-components-Timeline-tailColor: rgba(0, 0, 0, 0.08);
$light-components-Timeline-dotBg: #ffffff;
$light-components-Timeline-fontFamily: SF Pro Text;
$light-components-Tabs-horizontalItemGutter: 32;
$light-components-Tabs-cardGutter: 2;
$light-components-Tabs-paddingXXS: 4;
$light-components-Tabs-paddingXS: 8;
$light-components-Tabs-paddingSM: 12;
$light-components-Tabs-paddingLG: 24;
$light-components-Tabs-padding: 16;
$light-components-Tabs-marginXXS: 4;
$light-components-Tabs-marginXS: 8;
$light-components-Tabs-marginSM: 12;
$light-components-Tabs-margin: 16;
$light-components-Tabs-lineWidthFocus: 4;
$light-components-Tabs-lineWidthBold: 2;
$light-components-Tabs-lineWidth: 1;
$light-components-Tabs-lineHeight: 1.5714285714285714;
$light-components-Tabs-fontSizeSM: 12;
$light-components-Tabs-fontSizeLG: 16;
$light-components-Tabs-fontSize: 14;
$light-components-Tabs-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Tabs-controlHeightLG: 40;
$light-components-Tabs-controlHeight: 32;
$light-components-Tabs-borderRadiusLG: 8;
$light-components-Tabs-borderRadius: 6;
$light-components-Tabs-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Tabs-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Tabs-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Tabs-colorText: rgba(0, 0, 0, 0.88);
$light-components-Tabs-colorPrimaryHover: #6b89ff;
$light-components-Tabs-colorPrimaryBorder: #bdceff;
$light-components-Tabs-colorPrimaryActive: #2d44d6;
$light-components-Tabs-colorPrimary: #4161fd;
$light-components-Tabs-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Tabs-colorBorderSecondary: #f0f0f0;
$light-components-Tabs-colorBorder: #d9d9d9;
$light-components-Tabs-colorBgContainer: #ffffff;
$light-components-Tabs-itemSelectedColor: #4161fd;
$light-components-Tabs-itemHoverColor: #6b89ff;
$light-components-Tabs-itemColor: rgba(0, 0, 0, 0.88);
$light-components-Tabs-itemActiveColor: #2d44d6;
$light-components-Tabs-inkBarColor: #4161fd;
$light-components-Tabs-cardHeight: 40;
$light-components-Tabs-cardBg: rgba(0, 0, 0, 0.02);
$light-components-Tabs-titleFontSize: 14;
$light-components-Tabs-titleFontSizeLG: 16;
$light-components-Tabs-titleFontSizeSM: 14;
$light-components-Tabs-fontFamily: SF Pro Text;
$light-components-Table-stickyScrollBarBorderRadius: 100;
$light-components-Table-headerSplitColor: #f0f0f0;
$light-components-Table-headerBg: rgba(0, 0, 0, 0.02);
$light-components-Table-footerBg: rgba(0, 0, 0, 0.02);
$light-components-Table-paddingXXS: 4;
$light-components-Table-paddingXS: 8;
$light-components-Table-paddingSM: 12;
$light-components-Table-padding: 16;
$light-components-Table-marginXXS: 4;
$light-components-Table-margin: 16;
$light-components-Table-lineWidth: 1;
$light-components-Table-lineHeight: 1.5714285714285714;
$light-components-Table-fontWeightStrong: 600;
$light-components-Table-fontSizeSM: 12;
$light-components-Table-fontSizeIcon: 12;
$light-components-Table-fontSize: 14;
$light-components-Table-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Table-controlItemBgActiveHover: #e6edff;
$light-components-Table-controlItemBgActive: #f0f5ff;
$light-components-Table-controlInteractiveSize: 16;
$light-components-Table-controlHeight: 32;
$light-components-Table-borderRadiusLG: 8;
$light-components-Table-borderRadius: 6;
$light-components-Table-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-Table-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Table-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Table-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Table-colorText: rgba(0, 0, 0, 0.88);
$light-components-Table-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Table-colorPrimary: #4161fd;
$light-components-Table-colorLinkHover: #6b89ff;
$light-components-Table-colorLinkActive: #2d44d6;
$light-components-Table-colorLink: #4161fd;
$light-components-Table-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Table-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Table-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Table-colorFillContent: rgba(0, 0, 0, 0.06);
$light-components-Table-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Table-colorBorderSecondary: #f0f0f0;
$light-components-Table-colorBgContainer: #ffffff;
$light-components-Table-rowSelectedHoverBg: #e6edff;
$light-components-Table-headerFilterHoverBg: rgba(0, 0, 0, 0.06);
$light-components-Table-headerColor: rgba(0, 0, 0, 0.88);
$light-components-Table-headerBorderRadius: 8;
$light-components-Table-footerColor: rgba(0, 0, 0, 0.88);
$light-components-Table-filterDropdownMenuBg: #ffffff;
$light-components-Table-filterDropdownBg: #ffffff;
$light-components-Table-cellPaddingInlineSM: 8;
$light-components-Table-cellPaddingInlineMD: 8;
$light-components-Table-cellPaddingInline: 16;
$light-components-Table-cellPaddingBlockSM: 8;
$light-components-Table-cellPaddingBlockMD: 12;
$light-components-Table-cellPaddingBlock: 16;
$light-components-Table-borderColor: #f0f0f0;
$light-components-Table-rowHoverBg: #fafafa;
$light-components-Table-headerSortActiveBg: rgba(0, 0, 0, 0.06);
$light-components-Table-bodySortBg: #fafafa;
$light-components-Table-headerSortHoverBg: rgba(0, 0, 0, 0.06);
$light-components-Table-cellFontSize: 14;
$light-components-Table-cellFontSizeMD: 14;
$light-components-Table-cellFontSizeSM: 14;
$light-components-Table-fontFamily: SF Pro Text;
$light-components-Steps-dotSize: 8;
$light-components-Steps-dotCurrentSize: 10;
$light-components-Steps-descriptionMaxWidth: 140;
$light-components-Steps-paddingXXS: 4;
$light-components-Steps-paddingXS: 8;
$light-components-Steps-paddingSM: 12;
$light-components-Steps-paddingLG: 24;
$light-components-Steps-padding: 16;
$light-components-Steps-marginXXS: 4;
$light-components-Steps-marginXS: 8;
$light-components-Steps-marginSM: 12;
$light-components-Steps-marginLG: 24;
$light-components-Steps-margin: 16;
$light-components-Steps-lineWidthFocus: 4;
$light-components-Steps-lineWidthBold: 2;
$light-components-Steps-lineWidth: 1;
$light-components-Steps-lineHeightSM: 1.6666666666666667;
$light-components-Steps-lineHeight: 1.5714285714285714;
$light-components-Steps-fontWeightStrong: 600;
$light-components-Steps-fontSizeSM: 12;
$light-components-Steps-fontSizeLG: 16;
$light-components-Steps-fontSizeIcon: 12;
$light-components-Steps-fontSizeHeading3: 24;
$light-components-Steps-fontSize: 14;
$light-components-Steps-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Steps-controlItemBgActive: #f0f5ff;
$light-components-Steps-controlHeightLG: 40;
$light-components-Steps-borderRadiusSM: 4;
$light-components-Steps-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-components-Steps-colorTextLightSolid: #ffffff;
$light-components-Steps-colorTextLabel: rgba(0, 0, 0, 0.65);
$light-components-Steps-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Steps-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Steps-colorText: rgba(0, 0, 0, 0.88);
$light-components-Steps-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Steps-colorPrimaryBorder: #bdceff;
$light-components-Steps-colorPrimary: #4161fd;
$light-components-Steps-colorFillContent: rgba(0, 0, 0, 0.06);
$light-components-Steps-colorError: #ec3e3e;
$light-components-Steps-colorBorderSecondary: #f0f0f0;
$light-components-Steps-colorBorderBg: #ffffff;
$light-components-Steps-colorBgContainer: #ffffff;
$light-components-Steps-titleLineHeight: 32;
$light-components-Steps-iconSizeSM: 24;
$light-components-Steps-iconSize: 32;
$light-components-Steps-finishIconBorderColor: #1677ff;
$light-components-Steps-customIconFontSize: 24;
$light-components-Steps-iconFontSize: 14;
$light-components-Steps-fontFamily: SF Pro Text;
$light-components-Spin-dotSizeSM: 14;
$light-components-Spin-dotSize: 20;
$light-components-Spin-contentHeight: 400;
$light-components-Spin-marginXXS: 4;
$light-components-Spin-lineHeight: 1.5714285714285714;
$light-components-Spin-fontSize: 14;
$light-components-Spin-controlHeightLG: 40;
$light-components-Spin-controlHeight: 32;
$light-components-Spin-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Spin-colorText: rgba(0, 0, 0, 0.88);
$light-components-Spin-colorPrimary: #4161fd;
$light-components-Spin-colorBgContainer: #ffffff;
$light-components-Spin-dotSizeLG: 32;
$light-components-Spin-fontFamily: SF Pro Text;
$light-components-Slider-railSize: 4;
$light-components-Slider-handleSizeHover: 12;
$light-components-Slider-dotSize: 8;
$light-components-Slider-controlSize: 10;
$light-components-Slider-handleSize: 10;
$light-components-Slider-lineWidth: 1;
$light-components-Slider-lineHeight: 1.5714285714285714;
$light-components-Slider-fontSize: 14;
$light-components-Slider-controlHeightSM: 24;
$light-components-Slider-controlHeightLG: 40;
$light-components-Slider-controlHeight: 32;
$light-components-Slider-borderRadiusXS: 2;
$light-components-Slider-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Slider-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Slider-colorText: rgba(0, 0, 0, 0.88);
$light-components-Slider-colorPrimaryBorderHover: #94adff;
$light-components-Slider-colorPrimaryBorder: #bdceff;
$light-components-Slider-colorPrimary: #4161fd;
$light-components-Slider-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-Slider-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Slider-colorFillContentHover: rgba(0, 0, 0, 0.15);
$light-components-Slider-colorBorderSecondary: #f0f0f0;
$light-components-Slider-colorBgElevated: #ffffff;
$light-components-Slider-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Slider-colorBgContainer: #ffffff;
$light-components-Slider-trackHoverBg: #94adff;
$light-components-Slider-trackBgDisabled: rgba(0, 0, 0, 0.04);
$light-components-Slider-trackBg: #bdceff;
$light-components-Slider-railHoverBg: rgba(0, 0, 0, 0.06);
$light-components-Slider-railBg: rgba(0, 0, 0, 0.04);
$light-components-Slider-handleColor: #bdceff;
$light-components-Slider-handleActiveColor: #4161fd;
$light-components-Slider-dotBorderColor: #f0f0f0;
$light-components-Slider-dotActiveBorderColor: #bdceff;
$light-components-Slider-handleColorDisabled: #bfbfbf;
$light-components-Slider-fontFamily: SF Pro Text;
$light-components-Rate-rateStarSize: 20;
$light-components-Rate-marginXS: 8;
$light-components-Rate-lineWidth: 1;
$light-components-Rate-lineHeight: 1.5714285714285714;
$light-components-Rate-fontSize: 14;
$light-components-Rate-controlHeightLG: 40;
$light-components-Rate-colorText: rgba(0, 0, 0, 0.88);
$light-components-Rate-colorFillContent: rgba(0, 0, 0, 0.06);
$light-components-Rate-fontFamily: SF Pro Text;
$light-components-Radio-radioSize: 16;
$light-components-Radio-dotSize: 8;
$light-components-Radio-buttonPaddingInline: 15;
$light-components-Radio-paddingXS: 8;
$light-components-Radio-padding: 16;
$light-components-Radio-marginXS: 8;
$light-components-Radio-lineWidthFocus: 4;
$light-components-Radio-lineWidth: 1;
$light-components-Radio-lineHeight: 1.5714285714285714;
$light-components-Radio-fontSizeLG: 16;
$light-components-Radio-fontSize: 14;
$light-components-Radio-controlOutlineWidth: 2;
$light-components-Radio-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-Radio-controlItemBgActiveDisabled: rgba(0, 0, 0, 0.15);
$light-components-Radio-controlHeightSM: 24;
$light-components-Radio-controlHeightLG: 40;
$light-components-Radio-controlHeight: 32;
$light-components-Radio-borderRadiusSM: 4;
$light-components-Radio-borderRadiusLG: 8;
$light-components-Radio-borderRadius: 6;
$light-components-Radio-colorWhite: #ffffff;
$light-components-Radio-colorTextLightSolid: #ffffff;
$light-components-Radio-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Radio-colorText: rgba(0, 0, 0, 0.88);
$light-components-Radio-colorPrimaryHover: #6b89ff;
$light-components-Radio-colorPrimaryBorder: #bdceff;
$light-components-Radio-colorPrimaryActive: #2d44d6;
$light-components-Radio-colorPrimary: #4161fd;
$light-components-Radio-colorBorder: #d9d9d9;
$light-components-Radio-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Radio-colorBgContainer: #ffffff;
$light-components-Radio-wrapperMarginInlineEnd: 8;
$light-components-Radio-dotColorDisabled: rgba(0, 0, 0, 0.25);
$light-components-Radio-buttonSolidCheckedHoverBg: #6b89ff;
$light-components-Radio-buttonSolidCheckedColor: #ffffff;
$light-components-Radio-buttonSolidCheckedBg: #4161fd;
$light-components-Radio-buttonSolidCheckedActiveBg: #2d44d6;
$light-components-Radio-buttonColor: rgba(0, 0, 0, 0.88);
$light-components-Radio-buttonCheckedColorDisabled: rgba(0, 0, 0, 0.25);
$light-components-Radio-buttonCheckedBgDisabled: rgba(0, 0, 0, 0.15);
$light-components-Radio-buttonCheckedBg: #ffffff;
$light-components-Radio-buttonBg: #ffffff;
$light-components-Radio-fontFamily: SF Pro Text;
$light-components-Radio-radioBgColor: #4161fd;
$light-components-Radio-radioColor: #ffffff;
$light-components-Popover-titleMinWidth: 177;
$light-components-Popover-sizePopupArrow: 16;
$light-components-Popover-paddingSM: 12;
$light-components-Popover-padding: 16;
$light-components-Popover-marginXS: 8;
$light-components-Popover-lineWidth: 1;
$light-components-Popover-lineHeight: 1.5714285714285714;
$light-components-Popover-fontWeightStrong: 600;
$light-components-Popover-fontSize: 14;
$light-components-Popover-controlHeight: 32;
$light-components-Popover-borderRadiusXS: 2;
$light-components-Popover-borderRadiusLG: 8;
$light-components-Popover-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Popover-colorText: rgba(0, 0, 0, 0.88);
$light-components-Popover-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Popover-colorBgElevated: #ffffff;
$light-components-Popover-fontFamily: SF Pro Text;
$light-components-Notification-width: 384;
$light-components-Notification-paddingMD: 20;
$light-components-Notification-paddingLG: 24;
$light-components-Notification-paddingContentHorizontalLG: 24;
$light-components-Notification-marginXS: 8;
$light-components-Notification-marginSM: 12;
$light-components-Notification-marginLG: 24;
$light-components-Notification-margin: 16;
$light-components-Notification-lineHeight: 1.5714285714285714;
$light-components-Notification-fontSizeLG: 16;
$light-components-Notification-fontSize: 14;
$light-components-Notification-controlHeightLG: 40;
$light-components-Notification-borderRadiusSM: 4;
$light-components-Notification-borderRadiusLG: 8;
$light-components-Notification-colorWarning: #faad14;
$light-components-Notification-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Notification-colorText: rgba(0, 0, 0, 0.88);
$light-components-Notification-colorSuccess: #25ca1d;
$light-components-Notification-colorInfo: #4161fd;
$light-components-Notification-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Notification-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Notification-colorError: #ec3e3e;
$light-components-Notification-colorBgElevated: #ffffff;
$light-components-Notification-lineHeightLG: 1.5;
$light-components-Notification-lineWidthFocus: 4;
$light-components-Notification-fontFamily: SF Pro Text;
$light-components-Tooltip-paddingSM: 12;
$light-components-Tooltip-sizePopupArrow: 16;
$light-components-Tooltip-paddingXS: 8;
$light-components-Tooltip-lineHeight: 1.5714285714285714;
$light-components-Tooltip-fontSize: 14;
$light-components-Tooltip-controlHeight: 32;
$light-components-Tooltip-borderRadiusXS: 2;
$light-components-Tooltip-borderRadius: 6;
$light-components-Tooltip-colorTextLightSolid: #ffffff;
$light-components-Tooltip-colorText: rgba(0, 0, 0, 0.88);
$light-components-Tooltip-colorBgSpotlight: rgba(0, 0, 0, 0.85);
$light-components-Tooltip-fontFamily: SF Pro Text;
$light-components-Menu-subMenuItemBg: rgba(0, 0, 0, 0.02);
$light-components-Menu-darkSubMenuItemBg: #000c17;
$light-components-Menu-darkItemDisabledColor: rgba(255, 255, 255, 0.25);
$light-components-Menu-darkItemColor: rgba(255, 255, 255, 0.65);
$light-components-Menu-darkGroupTitleColor: rgba(255, 255, 255, 0.65);
$light-components-Menu-darkItemBg: #001529;
$light-components-Menu-paddingXS: 8;
$light-components-Menu-paddingXL: 32;
$light-components-Menu-padding: 16;
$light-components-Menu-marginXXS: 4;
$light-components-Menu-marginXS: 8;
$light-components-Menu-margin: 16;
$light-components-Menu-lineWidthFocus: 4;
$light-components-Menu-lineWidthBold: 2;
$light-components-Menu-lineWidth: 1;
$light-components-Menu-lineHeight: 1.8333333333333333;
$light-components-Menu-fontSizeLG: 16;
$light-components-Menu-fontSize: 12;
$light-components-Menu-controlItemBgActive: #f0f5ff;
$light-components-Menu-controlHeightSM: 24;
$light-components-Menu-controlHeightLG: 40;
$light-components-Menu-borderRadius: 6;
$light-components-Menu-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Menu-colorPrimaryBorder: #bdceff;
$light-components-Menu-colorPrimary: #4161fd;
$light-components-Menu-colorFillContent: rgba(0, 0, 0, 0.06);
$light-components-Menu-colorErrorHover: #fa6e69;
$light-components-Menu-colorErrorBg: #fff2f0;
$light-components-Menu-colorError: #ec3e3e;
$light-components-Menu-colorBgElevated: #ffffff;
$light-components-Menu-colorBgContainer: #ffffff;
$light-components-Menu-subMenuItemBorderRadius: 8;
$light-components-Menu-popupBg: #ffffff;
$light-components-Menu-itemSelectedColor: #4161fd;
$light-components-Menu-itemSelectedBg: #f0f5ff;
$light-components-Menu-itemHoverColor: rgba(0, 0, 0, 0.88);
$light-components-Menu-itemHoverBg: rgba(0, 0, 0, 0.06);
$light-components-Menu-itemHeight: 40;
$light-components-Menu-itemDisabledColor: rgba(0, 0, 0, 0.25);
$light-components-Menu-itemColor: rgba(0, 0, 0, 0.88);
$light-components-Menu-itemBorderRadius: 8;
$light-components-Menu-itemBg: #ffffff;
$light-components-Menu-iconSize: 24;
$light-components-Menu-horizontalItemSelectedColor: #4161fd;
$light-components-Menu-horizontalItemSelectedBg: rgba(0, 0, 0, 0);
$light-components-Menu-horizontalItemHoverColor: #4161fd;
$light-components-Menu-horizontalItemHoverBg: rgba(0, 0, 0, 0);
$light-components-Menu-groupTitleColor: rgba(0, 0, 0, 0.45);
$light-components-Menu-darkItemSelectedColor: #ffffff;
$light-components-Menu-darkItemSelectedBg: #4161fd;
$light-components-Menu-darkItemHoverColor: #ffffff;
$light-components-Menu-darkItemHoverBg: rgba(0, 0, 0, 0);
$light-components-Menu-collapsedIconSize: 16;
$light-components-Menu-darkPopupBg: #001529;
$light-components-Menu-activeBarBorderWidth: 1;
$light-components-Menu-collapsedWidth: 80;
$light-components-Menu-dropdownWidth: 160;
$light-components-Menu-itemMarginBlock: 8;
$light-components-Menu-itemMarginInline: 4;
$light-components-Menu-iconMarginInlineEnd: 8;
$light-components-Menu-groupTitleFontSize: 14;
$light-components-Menu-groupTitleLineHeight: 1.5714285714285714;
$light-components-Menu-fontFamily: SF Pro Text;
$light-components-Menu-subMenuItemSelectedColor: #4161fd;
$light-components-InputNumber-paddingInlineSM: 7;
$light-components-InputNumber-paddingInlineLG: 11;
$light-components-InputNumber-paddingInline: 11;
$light-components-InputNumber-paddingBlockSM: 0;
$light-components-InputNumber-paddingBlockLG: 7;
$light-components-InputNumber-paddingBlock: 4;
$light-components-InputNumber-handleWidth: 22;
$light-components-InputNumber-controlWidth: 90;
$light-components-InputNumber-paddingXXS: 4;
$light-components-InputNumber-paddingXS: 8;
$light-components-InputNumber-paddingSM: 12;
$light-components-InputNumber-lineWidth: 1;
$light-components-InputNumber-lineHeightLG: 1.5;
$light-components-InputNumber-lineHeight: 1.5714285714285714;
$light-components-InputNumber-fontSizeLG: 16;
$light-components-InputNumber-fontSize: 14;
$light-components-InputNumber-controlPaddingHorizontalSM: 8;
$light-components-InputNumber-controlPaddingHorizontal: 12;
$light-components-InputNumber-controlHeightSM: 24;
$light-components-InputNumber-controlHeightLG: 40;
$light-components-InputNumber-controlHeight: 32;
$light-components-InputNumber-borderRadiusSM: 4;
$light-components-InputNumber-borderRadiusLG: 8;
$light-components-InputNumber-borderRadius: 6;
$light-components-InputNumber-colorWarningBorderHover: #ffd666;
$light-components-InputNumber-colorWarning: #faad14;
$light-components-InputNumber-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-InputNumber-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-InputNumber-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-InputNumber-colorText: rgba(0, 0, 0, 0.88);
$light-components-InputNumber-colorPrimaryHover: #6b89ff;
$light-components-InputNumber-colorPrimary: #4161fd;
$light-components-InputNumber-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-InputNumber-colorErrorBorderHover: #ff9b94;
$light-components-InputNumber-colorError: #ec3e3e;
$light-components-InputNumber-colorBorder: #d9d9d9;
$light-components-InputNumber-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-InputNumber-colorBgContainer: #ffffff;
$light-components-InputNumber-hoverBorderColor: #6b89ff;
$light-components-InputNumber-handleHoverColor: #4161fd;
$light-components-InputNumber-handleBorderColor: #d9d9d9;
$light-components-InputNumber-handleBg: #ffffff;
$light-components-InputNumber-handleActiveBg: rgba(0, 0, 0, 0.02);
$light-components-InputNumber-addonBg: rgba(0, 0, 0, 0.02);
$light-components-InputNumber-activeBorderColor: #4161fd;
$light-components-InputNumber-activeBg: #ffffff;
$light-components-InputNumber-hoverBg: #ffffff;
$light-components-InputNumber-inputFontSize: 14;
$light-components-InputNumber-inputFontSizeLG: 16;
$light-components-InputNumber-inputFontSizeSM: 12;
$light-components-InputNumber-fontFamily: SF Pro Text;
$light-components-InputNumber-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-components-InputNumber-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-InputNumber-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-InputNumber-colorWarningBg: #fffbe6;
$light-components-InputNumber-colorWarningBgHover: #fff1b8;
$light-components-InputNumber-colorErrorBg: #fff2f0;
$light-components-InputNumber-colorErrorBgHover: #ffe9e6;
$light-components-InputNumber-filledHandleBg: #f0f0f0;
$light-components-InputNumber-colorErrorText: #ec3e3e;
$light-components-InputNumber-colorWarningText: #faad14;
$light-components-Image-previewOperationSize: 18;
$light-components-Image-previewOperationHoverColor: rgba(255, 255, 255, 0.85);
$light-components-Image-previewOperationColorDisabled: rgba(255, 255, 255, 0.25);
$light-components-Image-previewOperationColor: rgba(255, 255, 255, 0.65);
$light-components-Image-paddingXXS: 4;
$light-components-Image-paddingSM: 12;
$light-components-Image-paddingLG: 24;
$light-components-Image-marginXXS: 4;
$light-components-Image-marginXL: 32;
$light-components-Image-marginSM: 12;
$light-components-Image-margin: 16;
$light-components-Image-fontSizeIcon: 12;
$light-components-Image-controlHeightLG: 40;
$light-components-Image-colorTextLightSolid: #ffffff;
$light-components-Image-colorBgMask: rgba(0, 0, 0, 0.45);
$light-components-Image-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Card-headerHeightSM: 38;
$light-components-Card-headerHeight: 56;
$light-components-Card-paddingXS: 8;
$light-components-Card-paddingSM: 12;
$light-components-Card-paddingLG: 24;
$light-components-Card-padding: 16;
$light-components-Card-marginXXS: 4;
$light-components-Card-marginXS: 8;
$light-components-Card-lineWidth: 1;
$light-components-Card-lineHeightLG: 1.5;
$light-components-Card-lineHeight: 1.5714285714285714;
$light-components-Card-fontWeightStrong: 600;
$light-components-Card-fontSize: 14;
$light-components-Card-borderRadiusLG: 8;
$light-components-Card-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Card-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Card-colorText: rgba(0, 0, 0, 0.88);
$light-components-Card-colorPrimary: #4161fd;
$light-components-Card-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Card-colorBorderSecondary: #f0f0f0;
$light-components-Card-colorBgContainer: #ffffff;
$light-components-Card-headerBg: rgba(0, 0, 0, 0);
$light-components-Card-headerFontSize: 16;
$light-components-Card-headerFontSizeSM: 14;
$light-components-Card-fontHeight: 22;
$light-components-Card-fontSizeLG: 16;
$light-components-Card-fontFamily: SF Pro Text;
$light-components-Card-bodyPaddingSM: 12;
$light-components-Card-headerPaddingSM: 12;
$light-components-Card-bodyPadding: 24;
$light-components-Card-headerPadding: 24;
$light-components-Carousel-dotWidth: 16;
$light-components-Carousel-dotHeight: 3;
$light-components-Carousel-dotActiveWidth: 24;
$light-components-Carousel-marginXXS: 4;
$light-components-Carousel-lineHeight: 1.5714285714285714;
$light-components-Carousel-fontSize: 14;
$light-components-Carousel-controlHeightSM: 24;
$light-components-Carousel-controlHeightLG: 40;
$light-components-Carousel-colorText: rgba(0, 0, 0, 0.88);
$light-components-Carousel-colorBgContainer: #ffffff;
$light-components-Carousel-fontFamily: SF Pro Text;
$light-components-Cascader-dropdownHeight: 180;
$light-components-Cascader-controlWidth: 184;
$light-components-Cascader-controlItemWidth: 111;
$light-components-Cascader-paddingXXS: 4;
$light-components-Cascader-paddingXS: 8;
$light-components-Cascader-paddingSM: 12;
$light-components-Cascader-marginXS: 8;
$light-components-Cascader-lineWidthFocus: 4;
$light-components-Cascader-lineWidthBold: 2;
$light-components-Cascader-lineWidth: 1;
$light-components-Cascader-lineHeight: 1.5714285714285714;
$light-components-Cascader-fontWeightStrong: 600;
$light-components-Cascader-fontSizeLG: 16;
$light-components-Cascader-fontSizeIcon: 12;
$light-components-Cascader-fontSize: 14;
$light-components-Cascader-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Cascader-controlItemBgActive: #f0f5ff;
$light-components-Cascader-controlInteractiveSize: 16;
$light-components-Cascader-controlHeight: 32;
$light-components-Cascader-borderRadiusSM: 4;
$light-components-Cascader-colorWhite: #ffffff;
$light-components-Cascader-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Cascader-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Cascader-colorText: rgba(0, 0, 0, 0.88);
$light-components-Cascader-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Cascader-colorPrimaryHover: #6b89ff;
$light-components-Cascader-colorPrimaryBorder: #bdceff;
$light-components-Cascader-colorPrimary: #4161fd;
$light-components-Cascader-colorBorder: #d9d9d9;
$light-components-Cascader-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Cascader-colorBgContainer: #ffffff;
$light-components-Cascader-optionSelectedBg: #f0f5ff;
$light-components-Cascader-menuPadding: 4;
$light-components-Cascader-optionSelectedFontWeight: 600;
$light-components-Cascader-fontFamily: SF Pro Text;
$light-components-Cascader-borderRadiusLG: 8;
$light-components-Cascader-optionSelectedColor: rgba(0, 0, 0, 0.88);
$light-components-Calendar-yearControlWidth: 80;
$light-components-Calendar-monthControlWidth: 70;
$light-components-Calendar-controlHeight: 32;
$light-components-Calendar-screenXS: 480;
$light-components-Calendar-paddingXXS: 4;
$light-components-Calendar-paddingXS: 8;
$light-components-Calendar-paddingSM: 12;
$light-components-Calendar-padding: 16;
$light-components-Calendar-marginXXS: 4;
$light-components-Calendar-marginXS: 8;
$light-components-Calendar-lineWidthBold: 2;
$light-components-Calendar-lineWidth: 1;
$light-components-Calendar-lineHeightSM: 1.6666666666666667;
$light-components-Calendar-lineHeight: 1.5714285714285714;
$light-components-Calendar-fontWeightStrong: 600;
$light-components-Calendar-fontSizeSM: 12;
$light-components-Calendar-fontSize: 14;
$light-components-Calendar-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Calendar-controlItemBgActive: #f0f5ff;
$light-components-Calendar-controlHeightSM: 24;
$light-components-Calendar-controlHeightLG: 40;
$light-components-Calendar-borderRadiusSM: 4;
$light-components-Calendar-borderRadiusLG: 8;
$light-components-Calendar-colorTextLightSolid: #ffffff;
$light-components-Calendar-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Calendar-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Calendar-colorText: rgba(0, 0, 0, 0.88);
$light-components-Calendar-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Calendar-colorPrimary: #4161fd;
$light-components-Calendar-colorLinkHover: #6b89ff;
$light-components-Calendar-colorLinkActive: #2d44d6;
$light-components-Calendar-colorLink: #4161fd;
$light-components-Calendar-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Calendar-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Calendar-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Calendar-colorBgContainer: #ffffff;
$light-components-Calendar-itemActiveBg: #f0f5ff;
$light-components-Calendar-fullPanelBg: #ffffff;
$light-components-Calendar-fullBg: #ffffff;
$light-components-Calendar-fontHeightSM: 20;
$light-components-Calendar-fontFamily: SF Pro Text;
$light-components-Button-paddingInlineSM: 8;
$light-components-Button-paddingInlineLG: 12;
$light-components-Button-paddingInline: 10;
$light-components-Button-onlyIconSizeSM: 16;
$light-components-Button-onlyIconSizeLG: 22;
$light-components-Button-paddingXS: 8;
$light-components-Button-paddingContentHorizontal: 16;
$light-components-Button-marginXS: 8;
$light-components-Button-lineWidthFocus: 4;
$light-components-Button-lineWidth: 1;
$light-components-Button-contentLineHeight: 1.5714285714285714;
$light-components-Button-contentFontSizeLG: 16;
$light-components-Button-contentFontSize: 14;
$light-components-Button-controlOutlineWidth: 2;
$light-components-Button-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-Button-controlHeightSM: 24;
$light-components-Button-controlHeightLG: 40;
$light-components-Button-controlHeight: 32;
$light-components-Button-borderRadiusSM: 4;
$light-components-Button-borderRadiusLG: 8;
$light-components-Button-borderRadius: 6;
$light-components-Button-colorTextLightSolid: #ffffff;
$light-components-Button-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Button-colorText: rgba(0, 0, 0, 0.88);
$light-components-Button-colorPrimaryHover: #6b89ff;
$light-components-Button-colorPrimaryBorder: #bdceff;
$light-components-Button-colorPrimaryActive: #2d44d6;
$light-components-Button-colorPrimary: #4161fd;
$light-components-Button-colorLinkHover: #6b89ff;
$light-components-Button-colorLinkActive: #2d44d6;
$light-components-Button-colorLink: #4161fd;
$light-components-Button-colorErrorOutline: rgba(255, 38, 6, 0.06);
$light-components-Button-colorErrorHover: #fa6e69;
$light-components-Button-colorErrorBorderHover: #ff9b94;
$light-components-Button-colorErrorBg: #fff2f0;
$light-components-Button-colorErrorActive: #c72a2f;
$light-components-Button-colorError: #ec3e3e;
$light-components-Button-colorBorder: #d9d9d9;
$light-components-Button-colorBgTextActive: rgba(0, 0, 0, 0.15);
$light-components-Button-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Button-colorBgContainer: #ffffff;
$light-components-Button-textHoverBg: rgba(0, 0, 0, 0.06);
$light-components-Button-primaryColor: #ffffff;
$light-components-Button-onlyIconSize: 16;
$light-components-Button-linkHoverBg: rgba(0, 0, 0, 0);
$light-components-Button-groupBorderColor: #6b89ff;
$light-components-Button-ghostBg: rgba(0, 0, 0, 0);
$light-components-Button-defaultGhostColor: #ffffff;
$light-components-Button-defaultGhostBorderColor: #ffffff;
$light-components-Button-defaultColor: rgba(0, 0, 0, 0.88);
$light-components-Button-defaultBorderColor: #d9d9d9;
$light-components-Button-defaultBg: #ffffff;
$light-components-Button-dangerColor: #ffffff;
$light-components-Button-borderColorDisabled: #d9d9d9;
$light-components-Button-defaultHoverBg: #ffffff;
$light-components-Button-defaultHoverColor: #6b89ff;
$light-components-Button-defaultHoverBorderColor: #6b89ff;
$light-components-Button-defaultActiveBg: #ffffff;
$light-components-Button-defaultActiveColor: #2d44d6;
$light-components-Button-defaultActiveBorderColor: #2d44d6;
$light-components-Button-fontWeight: 400;
$light-components-Button-contentFontSizeSM: 12;
$light-components-Button-contentLineHeightLG: 1.5;
$light-components-Button-contentLineHeightSM: 1.8333333333333333;
$light-components-Button-textTextActiveColor: rgba(0, 0, 0, 0.88);
$light-components-Button-textTextHoverColor: rgba(0, 0, 0, 0.88);
$light-components-Button-textTextColor: rgba(0, 0, 0, 0.88);
$light-components-Button-colorPrimaryBg: #f0f5ff;
$light-components-Button-colorBgSolid: #000000;
$light-components-Button-colorBgSolidActive: rgba(0, 0, 0, 0.95);
$light-components-Button-colorBgSolidHover: rgba(0, 0, 0, 0.75);
$light-components-Button-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-Button-solidTextColor: #ffffff;
$light-components-Button-paddingInlineXS: 6;
$light-components-Button-contentFontSizeXS: 10;
$light-components-Button-contentLineHeightXS: 1.6;
$light-components-Button-onlyIconSizeXS: 12;
$light-components-Button-controlHeightXS: 16;
$light-components-Button-marginXXS: 4;
$light-components-Badge-statusSize: 6;
$light-components-Badge-indicatorHeight: 20;
$light-components-Badge-dotSize: 6;
$light-components-Badge-paddingXS: 8;
$light-components-Badge-marginXS: 8;
$light-components-Badge-lineWidth: 1;
$light-components-Badge-borderRadiusSM: 4;
$light-components-Badge-fontSizeSM: 12;
$light-components-Badge-fontSize: 14;
$light-components-Badge-colorWarning: #faad14;
$light-components-Badge-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-Badge-colorTextLightSolid: #ffffff;
$light-components-Badge-colorText: rgba(0, 0, 0, 0.88);
$light-components-Badge-colorSuccess: #25ca1d;
$light-components-Badge-colorPrimary: #4161fd;
$light-components-Badge-colorErrorHover: #fa6e69;
$light-components-Badge-colorError: #ec3e3e;
$light-components-Badge-colorBorderBg: #ffffff;
$light-components-Badge-colorBgContainer: #ffffff;
$light-components-Badge-indicatorHeightSM: 14;
$light-components-Badge-textFontSize: 12;
$light-components-Badge-textFontSizeSM: 12;
$light-components-Badge-fontHeight: 22;
$light-components-Badge-lineHeight: 1.5714285714285714;
$light-components-Badge-fontFamily: SF Pro Text;
$light-components-Form-screenXSMax: 575;
$light-components-Form-screenSMMax: 767;
$light-components-Form-screenMDMax: 991;
$light-components-Form-screenLGMax: 1199;
$light-components-Form-paddingXS: 8;
$light-components-Form-paddingSM: 12;
$light-components-Form-marginXXS: 4;
$light-components-Form-marginXS: 8;
$light-components-Form-marginLG: 24;
$light-components-Form-margin: 16;
$light-components-Form-lineWidth: 1;
$light-components-Form-lineHeight: 1.5714285714285714;
$light-components-Form-fontSizeLG: 16;
$light-components-Form-fontSize: 14;
$light-components-Form-controlOutlineWidth: 2;
$light-components-Form-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-Form-controlHeightSM: 24;
$light-components-Form-controlHeightLG: 40;
$light-components-Form-controlHeight: 32;
$light-components-Form-colorWarning: #faad14;
$light-components-Form-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Form-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Form-colorText: rgba(0, 0, 0, 0.88);
$light-components-Form-colorSuccess: #25ca1d;
$light-components-Form-colorPrimary: #4161fd;
$light-components-Form-colorError: #ec3e3e;
$light-components-Form-colorBorder: #d9d9d9;
$light-components-Form-labelRequiredMarkColor: #ec3e3e;
$light-components-Form-labelColor: rgba(0, 0, 0, 0.88);
$light-components-Form-itemMarginBottom: 24;
$light-components-Form-labelColonMarginInlineEnd: 8;
$light-components-Form-labelColonMarginInlineStart: 2;
$light-components-Form-labelHeight: 32;
$light-components-Form-labelFontSize: 14;
$light-components-Form-fontFamily: SF Pro Text;
$light-components-Avatar-marginXXS: 4;
$light-components-Avatar-marginXS: 8;
$light-components-Avatar-lineWidth: 1;
$light-components-Avatar-lineHeight: 1.5714285714285714;
$light-components-Avatar-fontSizeXL: 20;
$light-components-Avatar-fontSizeLG: 16;
$light-components-Avatar-fontSizeHeading3: 24;
$light-components-Avatar-fontSize: 14;
$light-components-Avatar-borderRadiusSM: 4;
$light-components-Avatar-borderRadiusLG: 8;
$light-components-Avatar-borderRadius: 6;
$light-components-Avatar-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-Avatar-colorTextLightSolid: #ffffff;
$light-components-Avatar-colorText: rgba(0, 0, 0, 0.88);
$light-components-Avatar-colorBorderBg: #ffffff;
$light-components-Avatar-containerSizeSM: 24;
$light-components-Avatar-containerSizeLG: 40;
$light-components-Avatar-containerSize: 32;
$light-components-Avatar-textFontSize: 18;
$light-components-Avatar-textFontSizeLG: 24;
$light-components-Avatar-textFontSizeSM: 14;
$light-components-Avatar-fontFamily: SF Pro Text;
$light-components-Tour-sizePopupArrow: 16;
$light-components-Tour-paddingXS: 8;
$light-components-Tour-padding: 16;
$light-components-Tour-marginXS: 8;
$light-components-Tour-lineHeight: 1.5714285714285714;
$light-components-Tour-fontWeightStrong: 600;
$light-components-Tour-fontSize: 14;
$light-components-Tour-borderRadiusXS: 2;
$light-components-Tour-borderRadiusSM: 4;
$light-components-Tour-borderRadiusLG: 8;
$light-components-Tour-borderRadius: 6;
$light-components-Tour-colorWhite: #ffffff;
$light-components-Tour-colorTextLightSolid: #ffffff;
$light-components-Tour-colorText: rgba(0, 0, 0, 0.88);
$light-components-Tour-colorPrimary: #4161fd;
$light-components-Tour-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Tour-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Tour-colorFill: rgba(0, 0, 0, 0.15);
$light-components-Tour-colorBgTextHover: rgba(0, 0, 0, 0.06);
$light-components-Tour-colorBgElevated: #ffffff;
$light-components-Tour-closeBtnSize: 22;
$light-components-Tour-primaryNextBtnHoverBg: #f0f0f0;
$light-components-Tour-primaryPrevBtnBg: rgba(255, 255, 255, 0.15);
$light-components-Tour-fontFamily: SF Pro Text;
$light-components-Tour-lineWidthFocus: 4;
$light-components-QRCode-paddingSM: 12;
$light-components-QRCode-marginXS: 8;
$light-components-QRCode-lineWidth: 1;
$light-components-QRCode-lineHeight: 1.5714285714285714;
$light-components-QRCode-fontSize: 14;
$light-components-QRCode-controlHeight: 32;
$light-components-QRCode-borderRadiusLG: 8;
$light-components-QRCode-colorWhite: #ffffff;
$light-components-QRCode-colorText: rgba(0, 0, 0, 0.88);
$light-components-QRCode-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-QRCode-fontFamily: SF Pro Text;
$light-components-Upload-paddingXS: 8;
$light-components-Upload-paddingSM: 12;
$light-components-Upload-padding: 16;
$light-components-Upload-marginXXS: 4;
$light-components-Upload-marginXS: 8;
$light-components-Upload-marginXL: 32;
$light-components-Upload-margin: 16;
$light-components-Upload-lineWidth: 1;
$light-components-Upload-lineHeight: 1.5714285714285714;
$light-components-Upload-fontSizeLG: 16;
$light-components-Upload-fontSizeHeading3: 24;
$light-components-Upload-fontSizeHeading2: 30;
$light-components-Upload-fontSize: 14;
$light-components-Upload-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Upload-controlHeightLG: 40;
$light-components-Upload-borderRadiusLG: 8;
$light-components-Upload-colorTextLightSolid: #ffffff;
$light-components-Upload-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Upload-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Upload-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Upload-colorText: rgba(0, 0, 0, 0.88);
$light-components-Upload-colorPrimaryHover: #6b89ff;
$light-components-Upload-colorPrimary: #4161fd;
$light-components-Upload-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Upload-colorErrorBg: #fff2f0;
$light-components-Upload-colorError: #ec3e3e;
$light-components-Upload-colorBorder: #d9d9d9;
$light-components-Upload-colorBgMask: rgba(0, 0, 0, 0.45);
$light-components-Upload-fontHeight: 22;
$light-components-Upload-fontHeightSM: 20;
$light-components-Upload-lineWidthFocus: 4;
$light-components-Upload-fontFamily: SF Pro Text;
$light-components-Typography-paddingSM: 12;
$light-components-Typography-marginXXS: 4;
$light-components-Typography-marginXS: 8;
$light-components-Typography-lineWidth: 1;
$light-components-Typography-lineHeightHeading5: 1.5;
$light-components-Typography-lineHeightHeading4: 1.4;
$light-components-Typography-lineHeightHeading3: 1.3333333333333333;
$light-components-Typography-lineHeightHeading2: 1.2666666666666666;
$light-components-Typography-lineHeightHeading1: 1.2105263157894737;
$light-components-Typography-lineHeight: 1.5714285714285714;
$light-components-Typography-fontWeightStrong: 600;
$light-components-Typography-fontSizeHeading5: 16;
$light-components-Typography-fontSizeHeading4: 20;
$light-components-Typography-fontSizeHeading3: 24;
$light-components-Typography-fontSizeHeading2: 30;
$light-components-Typography-fontSizeHeading1: 38;
$light-components-Typography-fontSize: 14;
$light-components-Typography-colorWarning: #faad14;
$light-components-Typography-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Typography-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Typography-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Typography-colorText: rgba(0, 0, 0, 0.88);
$light-components-Typography-colorSuccess: #25ca1d;
$light-components-Typography-colorLinkHover: #6b89ff;
$light-components-Typography-colorLinkActive: #2d44d6;
$light-components-Typography-colorLink: #4161fd;
$light-components-Typography-colorErrorHover: #fa6e69;
$light-components-Typography-colorErrorActive: #c72a2f;
$light-components-Typography-colorError: #ec3e3e;
$light-components-Typography-fontFamilyCode: Courier Prime;
$light-components-TreeSelect-paddingXS: 8;
$light-components-TreeSelect-marginXXS: 4;
$light-components-TreeSelect-marginXS: 8;
$light-components-TreeSelect-lineWidthFocus: 4;
$light-components-TreeSelect-lineWidthBold: 2;
$light-components-TreeSelect-lineWidth: 1;
$light-components-TreeSelect-lineHeight: 1.5714285714285714;
$light-components-TreeSelect-fontSizeLG: 16;
$light-components-TreeSelect-fontSize: 14;
$light-components-TreeSelect-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-TreeSelect-controlItemBgActive: #f0f5ff;
$light-components-TreeSelect-controlInteractiveSize: 16;
$light-components-TreeSelect-controlHeightSM: 24;
$light-components-TreeSelect-borderRadiusSM: 4;
$light-components-TreeSelect-borderRadius: 6;
$light-components-TreeSelect-colorWhite: #ffffff;
$light-components-TreeSelect-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-TreeSelect-colorText: rgba(0, 0, 0, 0.88);
$light-components-TreeSelect-colorPrimaryHover: #6b89ff;
$light-components-TreeSelect-colorPrimaryBorder: #bdceff;
$light-components-TreeSelect-colorPrimary: #4161fd;
$light-components-TreeSelect-colorBorder: #d9d9d9;
$light-components-TreeSelect-colorBgElevated: #ffffff;
$light-components-TreeSelect-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-TreeSelect-colorBgContainer: #ffffff;
$light-components-TreeSelect-titleHeight: 24;
$light-components-TreeSelect-nodeSelectedBg: #f0f5ff;
$light-components-TreeSelect-nodeHoverBg: rgba(0, 0, 0, 0.04);
$light-components-TreeSelect-fontFamily: SF Pro Text;
$light-components-TreeSelect-borderRadiusLG: 8;
$light-components-Tree-paddingSM: 12;
$light-components-Tree-borderRadiusLG: 8;
$light-components-Tree-paddingXS: 8;
$light-components-Tree-marginXXS: 4;
$light-components-Tree-marginXS: 8;
$light-components-Tree-lineWidthFocus: 4;
$light-components-Tree-lineWidthBold: 2;
$light-components-Tree-lineWidth: 1;
$light-components-Tree-lineHeight: 1.5714285714285714;
$light-components-Tree-fontSizeLG: 16;
$light-components-Tree-fontSize: 14;
$light-components-Tree-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Tree-controlItemBgActive: #f0f5ff;
$light-components-Tree-controlInteractiveSize: 16;
$light-components-Tree-controlHeightSM: 24;
$light-components-Tree-borderRadiusSM: 4;
$light-components-Tree-borderRadius: 6;
$light-components-Tree-colorWhite: #ffffff;
$light-components-Tree-colorTextLightSolid: #ffffff;
$light-components-Tree-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Tree-colorText: rgba(0, 0, 0, 0.88);
$light-components-Tree-colorPrimaryHover: #6b89ff;
$light-components-Tree-colorPrimaryBorder: #bdceff;
$light-components-Tree-colorPrimary: #4161fd;
$light-components-Tree-colorBorder: #d9d9d9;
$light-components-Tree-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Tree-colorBgContainer: #ffffff;
$light-components-Tree-titleHeight: 24;
$light-components-Tree-nodeSelectedBg: #f0f5ff;
$light-components-Tree-nodeHoverBg: rgba(0, 0, 0, 0.04);
$light-components-Tree-directoryNodeSelectedColor: #ffffff;
$light-components-Tree-directoryNodeSelectedBg: #4161fd;
$light-components-Tree-fontFamily: SF Pro Text;
$light-components-Tree-nodeHoverColor: rgba(0, 0, 0, 0.88);
$light-components-Tree-nodeSelectedColor: rgba(0, 0, 0, 0.88);
$light-components-Tree-indentSize: 24;
$light-components-Tag-paddingXXS: 4;
$light-components-Tag-marginXS: 8;
$light-components-Tag-lineWidth: 1;
$light-components-Tag-lineHeightSM: 1.6666666666666667;
$light-components-Tag-lineHeight: 1.5714285714285714;
$light-components-Tag-fontSizeSM: 12;
$light-components-Tag-fontSizeIcon: 12;
$light-components-Tag-fontSize: 14;
$light-components-Tag-borderRadiusSM: 4;
$light-components-Tag-colorTextLightSolid: #ffffff;
$light-components-Tag-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Tag-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Tag-colorText: rgba(0, 0, 0, 0.88);
$light-components-Tag-colorPrimaryHover: #6b89ff;
$light-components-Tag-colorPrimaryActive: #2d44d6;
$light-components-Tag-colorPrimary: #4161fd;
$light-components-Tag-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-Tag-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Tag-colorFillQuaternary: rgba(0, 0, 0, 0.02);
$light-components-Tag-colorBorder: #d9d9d9;
$light-components-Tag-colorWarningBorder: #ffe58f;
$light-components-Tag-colorWarningBg: #fffbe6;
$light-components-Tag-colorSuccessBorder: #a2f095;
$light-components-Tag-colorSuccessBg: #f3fff0;
$light-components-Tag-colorInfoBorder: #bdceff;
$light-components-Tag-colorInfoBg: #f0f5ff;
$light-components-Tag-colorErrorBorder: #ffc3bd;
$light-components-Tag-colorErrorBg: #fff2f0;
$light-components-Tag-defaultColor: rgba(0, 0, 0, 0.88);
$light-components-Tag-defaultBg: rgba(0, 0, 0, 0.02);
$light-components-Tag-fontFamily: SF Pro Text;
$light-components-Statistic-padding: 16;
$light-components-Statistic-marginXXS: 4;
$light-components-Statistic-lineHeight: 1.5714285714285714;
$light-components-Statistic-fontSizeHeading3: 24;
$light-components-Statistic-fontSize: 14;
$light-components-Statistic-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Statistic-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Statistic-colorText: rgba(0, 0, 0, 0.88);
$light-components-Statistic-contentFontSize: 24;
$light-components-Statistic-titleFontSize: 14;
$light-components-Statistic-fontFamily: SF Pro Text;
$light-components-Skeleton-padding: 16;
$light-components-Skeleton-marginXXS: 4;
$light-components-Skeleton-marginSM: 12;
$light-components-Skeleton-marginLG: 24;
$light-components-Skeleton-controlHeightXS: 16;
$light-components-Skeleton-controlHeightSM: 24;
$light-components-Skeleton-controlHeightLG: 40;
$light-components-Skeleton-controlHeight: 32;
$light-components-Skeleton-borderRadiusSM: 4;
$light-components-Skeleton-colorFillContent: rgba(0, 0, 0, 0.06);
$light-components-Skeleton-colorFill: rgba(0, 0, 0, 0.15);
$light-components-Select-paddingXXS: 4;
$light-components-Select-paddingXS: 8;
$light-components-Select-paddingSM: 12;
$light-components-Select-lineWidth: 1;
$light-components-Select-lineHeight: 1.5714285714285714;
$light-components-Select-fontWeightStrong: 600;
$light-components-Select-fontSizeSM: 12;
$light-components-Select-fontSizeLG: 16;
$light-components-Select-fontSizeIcon: 12;
$light-components-Select-fontSize: 14;
$light-components-Select-controlPaddingHorizontalSM: 8;
$light-components-Select-controlPaddingHorizontal: 12;
$light-components-Select-controlOutlineWidth: 2;
$light-components-Select-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-Select-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Select-controlItemBgActive: #f0f5ff;
$light-components-Select-controlHeightXS: 16;
$light-components-Select-controlHeightSM: 24;
$light-components-Select-controlHeightLG: 40;
$light-components-Select-controlHeight: 32;
$light-components-Select-borderRadiusXS: 2;
$light-components-Select-borderRadiusSM: 4;
$light-components-Select-borderRadiusLG: 8;
$light-components-Select-borderRadius: 6;
$light-components-Select-colorWarningOutline: rgba(255, 215, 5, 0.1);
$light-components-Select-colorWarningHover: #ffd666;
$light-components-Select-colorTextTertiary: rgba(0, 0, 0, 0.45);
$light-components-Select-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-components-Select-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-Select-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Select-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Select-colorText: rgba(0, 0, 0, 0.88);
$light-components-Select-colorPrimaryHover: #6b89ff;
$light-components-Select-colorPrimary: #4161fd;
$light-components-Select-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Select-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Select-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Select-colorErrorOutline: rgba(255, 38, 6, 0.06);
$light-components-Select-colorErrorHover: #fa6e69;
$light-components-Select-colorBorder: #d9d9d9;
$light-components-Select-colorBgElevated: #ffffff;
$light-components-Select-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Select-colorBgContainer: #ffffff;
$light-components-Select-singleItemHeightLG: 40;
$light-components-Select-selectorBg: #ffffff;
$light-components-Select-optionSelectedColor: rgba(0, 0, 0, 0.88);
$light-components-Select-optionSelectedBg: #f0f5ff;
$light-components-Select-optionHeight: 32;
$light-components-Select-optionActiveBg: rgba(0, 0, 0, 0.04);
$light-components-Select-multipleSelectorBgDisabled: rgba(0, 0, 0, 0.04);
$light-components-Select-multipleItemHeightLG: 32;
$light-components-Select-multipleItemHeight: 24;
$light-components-Select-multipleItemColorDisabled: rgba(0, 0, 0, 0.25);
$light-components-Select-multipleItemBorderColorDisabled: rgba(0, 0, 0, 0);
$light-components-Select-multipleItemBorderColor: rgba(0, 0, 0, 0);
$light-components-Select-multipleItemBg: rgba(0, 0, 0, 0.06);
$light-components-Select-clearBg: #ffffff;
$light-components-Select-optionSelectedFontWeight: 600;
$light-components-Select-fontFamily: SF Pro Text;
$light-components-Select-showArrowPaddingInlineEnd: 18;
$light-components-Select-activeBorderColor: #4161fd;
$light-components-Select-hoverBorderColor: #6b89ff;
$light-components-Select-colorErrorBg: #fff2f0;
$light-components-Select-colorErrorBgHover: #ffe9e6;
$light-components-Select-colorWarningBg: #fffbe6;
$light-components-Select-colorWarningBgHover: #fff1b8;
$light-components-Select-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-Select-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Select-colorWarning: #faad14;
$light-components-Select-colorError: #ec3e3e;
$light-components-Result-paddingXS: 8;
$light-components-Result-paddingXL: 32;
$light-components-Result-paddingLG: 24;
$light-components-Result-padding: 16;
$light-components-Result-marginXS: 8;
$light-components-Result-lineHeightHeading3: 1.3333333333333333;
$light-components-Result-lineHeight: 1.5714285714285714;
$light-components-Result-fontSizeHeading3: 24;
$light-components-Result-fontSize: 14;
$light-components-Result-colorWarning: #faad14;
$light-components-Result-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Result-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Result-colorSuccess: #25ca1d;
$light-components-Result-colorInfo: #4161fd;
$light-components-Result-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Result-colorError: #ec3e3e;
$light-components-Result-iconFontSize: 72;
$light-components-Result-subtitleFontSize: 14;
$light-components-Result-titleFontSize: 24;
$light-components-Progress-paddingXS: 8;
$light-components-Progress-marginXXS: 4;
$light-components-Progress-marginXS: 8;
$light-components-Progress-lineHeight: 1.5714285714285714;
$light-components-Progress-fontSizeSM: 12;
$light-components-Progress-fontSize: 14;
$light-components-Progress-colorText: rgba(0, 0, 0, 0.88);
$light-components-Progress-colorSuccess: #25ca1d;
$light-components-Progress-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Progress-colorError: #ec3e3e;
$light-components-Progress-colorBgContainer: #ffffff;
$light-components-Progress-remainingColor: rgba(0, 0, 0, 0.06);
$light-components-Progress-defaultColor: #4161fd;
$light-components-Progress-circleTextColor: rgba(0, 0, 0, 0.88);
$light-components-Progress-fontFamily: SF Pro Text;
$light-components-Popconfirm-marginXXS: 4;
$light-components-Popconfirm-marginXS: 8;
$light-components-Popconfirm-fontWeightStrong: 600;
$light-components-Popconfirm-fontSize: 14;
$light-components-Popconfirm-colorWarning: #faad14;
$light-components-Popconfirm-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Popconfirm-colorText: rgba(0, 0, 0, 0.88);
$light-components-Pagination-screenSM: 576;
$light-components-Pagination-screenLG: 992;
$light-components-Pagination-paddingXXS: 4;
$light-components-Pagination-paddingSM: 12;
$light-components-Pagination-marginXXS: 4;
$light-components-Pagination-marginXS: 8;
$light-components-Pagination-marginSM: 12;
$light-components-Pagination-margin: 16;
$light-components-Pagination-lineWidthFocus: 4;
$light-components-Pagination-lineWidth: 1;
$light-components-Pagination-lineHeightLG: 1.5;
$light-components-Pagination-lineHeight: 1.5714285714285714;
$light-components-Pagination-fontWeightStrong: 600;
$light-components-Pagination-fontSizeSM: 12;
$light-components-Pagination-fontSizeLG: 16;
$light-components-Pagination-fontSize: 14;
$light-components-Pagination-controlPaddingHorizontalSM: 8;
$light-components-Pagination-controlPaddingHorizontal: 12;
$light-components-Pagination-controlOutlineWidth: 2;
$light-components-Pagination-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-Pagination-controlItemBgActiveDisabled: rgba(0, 0, 0, 0.15);
$light-components-Pagination-controlHeightSM: 24;
$light-components-Pagination-controlHeightLG: 40;
$light-components-Pagination-controlHeight: 32;
$light-components-Pagination-borderRadiusSM: 4;
$light-components-Pagination-borderRadiusLG: 8;
$light-components-Pagination-borderRadius: 6;
$light-components-Pagination-colorWarningOutline: rgba(255, 215, 5, 0.1);
$light-components-Pagination-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-Pagination-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Pagination-colorText: rgba(0, 0, 0, 0.88);
$light-components-Pagination-colorPrimaryHover: #6b89ff;
$light-components-Pagination-colorPrimaryBorder: #bdceff;
$light-components-Pagination-colorPrimary: #4161fd;
$light-components-Pagination-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Pagination-colorErrorOutline: rgba(255, 38, 6, 0.06);
$light-components-Pagination-colorBorder: #d9d9d9;
$light-components-Pagination-colorBgTextHover: rgba(0, 0, 0, 0.06);
$light-components-Pagination-colorBgTextActive: rgba(0, 0, 0, 0.15);
$light-components-Pagination-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Pagination-colorBgContainer: #ffffff;
$light-components-Pagination-itemSizeSM: 24;
$light-components-Pagination-itemSize: 32;
$light-components-Pagination-itemLinkBg: #ffffff;
$light-components-Pagination-itemInputBg: #ffffff;
$light-components-Pagination-itemBg: #ffffff;
$light-components-Pagination-itemActiveColorDisabled: rgba(0, 0, 0, 0.25);
$light-components-Pagination-itemActiveBgDisabled: rgba(0, 0, 0, 0.15);
$light-components-Pagination-itemActiveBg: #ffffff;
$light-components-Pagination-fontFamily: SF Pro Text;
$light-components-Modal-screenSMMax: 767;
$light-components-Modal-paddingXS: 8;
$light-components-Modal-paddingMD: 20;
$light-components-Modal-paddingLG: 24;
$light-components-Modal-paddingContentHorizontalLG: 24;
$light-components-Modal-padding: 16;
$light-components-Modal-marginXS: 8;
$light-components-Modal-marginSM: 12;
$light-components-Modal-marginLG: 24;
$light-components-Modal-margin: 16;
$light-components-Modal-lineWidthFocus: 4;
$light-components-Modal-lineWidth: 1;
$light-components-Modal-lineHeightHeading5: 1.5;
$light-components-Modal-lineHeight: 1.5714285714285714;
$light-components-Modal-fontWeightStrong: 600;
$light-components-Modal-fontSizeLG: 16;
$light-components-Modal-fontSizeHeading5: 16;
$light-components-Modal-fontSize: 14;
$light-components-Modal-borderRadiusSM: 4;
$light-components-Modal-borderRadiusLG: 8;
$light-components-Modal-colorWarning: #faad14;
$light-components-Modal-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Modal-colorText: rgba(0, 0, 0, 0.88);
$light-components-Modal-colorSuccess: #25ca1d;
$light-components-Modal-colorPrimaryBorder: #bdceff;
$light-components-Modal-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Modal-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Modal-colorBgMask: rgba(0, 0, 0, 0.45);
$light-components-Modal-titleColor: rgba(0, 0, 0, 0.88);
$light-components-Modal-headerBg: #ffffff;
$light-components-Modal-footerBg: rgba(0, 0, 0, 0);
$light-components-Modal-contentBg: #ffffff;
$light-components-Modal-titleFontSize: 16;
$light-components-Modal-titleLineHeight: 1.375;
$light-components-Modal-fontHeight: 22;
$light-components-Modal-fontFamily: SF Pro Text;
$light-components-Message-paddingXS: 8;
$light-components-Message-paddingSM: 12;
$light-components-Message-marginXS: 8;
$light-components-Message-lineHeight: 1.5714285714285714;
$light-components-Message-fontSizeLG: 16;
$light-components-Message-fontSize: 14;
$light-components-Message-controlHeightLG: 40;
$light-components-Message-borderRadiusLG: 8;
$light-components-Message-colorWarning: #faad14;
$light-components-Message-colorText: rgba(0, 0, 0, 0.88);
$light-components-Message-colorSuccess: #25ca1d;
$light-components-Message-colorInfo: #4161fd;
$light-components-Message-colorError: #ec3e3e;
$light-components-Message-contentBg: #ffffff;
$light-components-Message-fontFamily: SF Pro Text;
$light-components-List-screenSM: 576;
$light-components-List-screenMD: 768;
$light-components-List-paddingXS: 8;
$light-components-List-paddingSM: 12;
$light-components-List-paddingLG: 24;
$light-components-List-paddingContentVerticalSM: 8;
$light-components-List-paddingContentVerticalLG: 16;
$light-components-List-paddingContentVertical: 12;
$light-components-List-paddingContentHorizontalLG: 24;
$light-components-List-paddingContentHorizontal: 16;
$light-components-List-padding: 16;
$light-components-List-marginXXS: 4;
$light-components-List-marginXXL: 48;
$light-components-List-marginSM: 12;
$light-components-List-marginLG: 24;
$light-components-List-margin: 16;
$light-components-List-lineWidth: 1;
$light-components-List-lineHeightLG: 1.5;
$light-components-List-lineHeight: 1.5714285714285714;
$light-components-List-fontSizeSM: 12;
$light-components-List-fontSizeLG: 16;
$light-components-List-fontSize: 14;
$light-components-List-controlHeightLG: 40;
$light-components-List-controlHeight: 32;
$light-components-List-borderRadiusLG: 8;
$light-components-List-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-List-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-List-colorText: rgba(0, 0, 0, 0.88);
$light-components-List-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-List-colorPrimary: #4161fd;
$light-components-List-colorBorder: #d9d9d9;
$light-components-List-headerBg: rgba(0, 0, 0, 0);
$light-components-List-footerBg: rgba(0, 0, 0, 0);
$light-components-List-avatarMarginRight: 16;
$light-components-List-descriptionFontSize: 14;
$light-components-List-fontFamily: SF Pro Text;
$light-components-FloatButton-paddingXXS: 4;
$light-components-FloatButton-marginXXL: 48;
$light-components-FloatButton-marginLG: 24;
$light-components-FloatButton-margin: 16;
$light-components-FloatButton-lineWidth: 1;
$light-components-FloatButton-lineHeight: 1.5714285714285714;
$light-components-FloatButton-fontSizeSM: 12;
$light-components-FloatButton-fontSizeLG: 16;
$light-components-FloatButton-fontSizeIcon: 12;
$light-components-FloatButton-fontSize: 14;
$light-components-FloatButton-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-FloatButton-controlHeightLG: 40;
$light-components-FloatButton-borderRadiusSM: 4;
$light-components-FloatButton-borderRadiusLG: 8;
$light-components-FloatButton-colorTextLightSolid: #ffffff;
$light-components-FloatButton-colorText: rgba(0, 0, 0, 0.88);
$light-components-FloatButton-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-FloatButton-colorPrimaryHover: #6b89ff;
$light-components-FloatButton-colorPrimary: #4161fd;
$light-components-FloatButton-colorFillContent: rgba(0, 0, 0, 0.06);
$light-components-FloatButton-colorBgElevated: #ffffff;
$light-components-FloatButton-fontFamily: SF Pro Text;
$light-components-Empty-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Empty-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Empty-fontSize: 14;
$light-components-Empty-lineHeight: 1.5714285714285714;
$light-components-Dropdown-sizePopupArrow: 16;
$light-components-Dropdown-paddingXXS: 4;
$light-components-Dropdown-paddingXS: 8;
$light-components-Dropdown-marginXXS: 4;
$light-components-Dropdown-marginXS: 8;
$light-components-Dropdown-lineWidthFocus: 4;
$light-components-Dropdown-lineHeight: 1.5714285714285714;
$light-components-Dropdown-fontSizeSM: 12;
$light-components-Dropdown-fontSizeIcon: 12;
$light-components-Dropdown-fontSize: 14;
$light-components-Dropdown-controlPaddingHorizontal: 12;
$light-components-Dropdown-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Dropdown-controlItemBgActiveHover: #e6edff;
$light-components-Dropdown-controlItemBgActive: #f0f5ff;
$light-components-Dropdown-controlHeight: 32;
$light-components-Dropdown-borderRadiusXS: 2;
$light-components-Dropdown-borderRadiusSM: 4;
$light-components-Dropdown-borderRadiusLG: 8;
$light-components-Dropdown-colorTextLightSolid: #ffffff;
$light-components-Dropdown-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Dropdown-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Dropdown-colorText: rgba(0, 0, 0, 0.88);
$light-components-Dropdown-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Dropdown-colorPrimaryBorder: #bdceff;
$light-components-Dropdown-colorPrimary: #4161fd;
$light-components-Dropdown-colorError: #ec3e3e;
$light-components-Dropdown-colorBgElevated: #ffffff;
$light-components-Dropdown-paddingBlock: 5;
$light-components-Dropdown-fontFamily: SF Pro Text;
$light-components-Drawer-paddingXS: 8;
$light-components-Drawer-paddingLG: 24;
$light-components-Drawer-padding: 16;
$light-components-Drawer-marginSM: 12;
$light-components-Drawer-lineWidth: 1;
$light-components-Drawer-lineHeightLG: 1.5;
$light-components-Drawer-fontWeightStrong: 600;
$light-components-Drawer-fontSizeLG: 16;
$light-components-Drawer-colorText: rgba(0, 0, 0, 0.88);
$light-components-Drawer-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Drawer-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Drawer-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Drawer-colorBgMask: rgba(0, 0, 0, 0.45);
$light-components-Drawer-colorBgElevated: #ffffff;
$light-components-Drawer-lineWidthFocus: 4;
$light-components-Divider-marginXS: 8;
$light-components-Divider-marginLG: 24;
$light-components-Divider-margin: 16;
$light-components-Divider-lineWidth: 1;
$light-components-Divider-fontSizeLG: 16;
$light-components-Divider-fontSize: 14;
$light-components-Divider-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Divider-colorText: rgba(0, 0, 0, 0.88);
$light-components-Divider-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Divider-lineHeight: 1.5714285714285714;
$light-components-Divider-fontFamily: SF Pro Text;
$light-components-Descriptions-paddingXS: 8;
$light-components-Descriptions-paddingSM: 12;
$light-components-Descriptions-paddingLG: 24;
$light-components-Descriptions-padding: 16;
$light-components-Descriptions-marginXXS: 4;
$light-components-Descriptions-marginXS: 8;
$light-components-Descriptions-lineWidth: 1;
$light-components-Descriptions-lineHeightSM: 1.6666666666666667;
$light-components-Descriptions-lineHeightLG: 1.5;
$light-components-Descriptions-lineHeight: 1.5714285714285714;
$light-components-Descriptions-fontWeightStrong: 600;
$light-components-Descriptions-fontSizeSM: 12;
$light-components-Descriptions-fontSizeLG: 16;
$light-components-Descriptions-fontSize: 14;
$light-components-Descriptions-borderRadiusLG: 8;
$light-components-Descriptions-colorTextTertiary: rgba(0, 0, 0, 0.45);
$light-components-Descriptions-colorTextSecondary: rgba(0, 0, 0, 0.65);
$light-components-Descriptions-colorText: rgba(0, 0, 0, 0.88);
$light-components-Descriptions-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Descriptions-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Descriptions-titleColor: rgba(0, 0, 0, 0.88);
$light-components-Descriptions-labelBg: rgba(0, 0, 0, 0.02);
$light-components-Descriptions-contentColor: rgba(0, 0, 0, 0.88);
$light-components-Descriptions-fontFamily: SF Pro Text;
$light-components-Descriptions-labelColor: rgba(0, 0, 0, 0.45);
$light-components-DatePicker-sizePopupArrow: 16;
$light-components-DatePicker-paddingXXS: 4;
$light-components-DatePicker-paddingXS: 8;
$light-components-DatePicker-paddingSM: 12;
$light-components-DatePicker-padding: 16;
$light-components-DatePicker-marginXXS: 4;
$light-components-DatePicker-marginXS: 8;
$light-components-DatePicker-lineWidthBold: 2;
$light-components-DatePicker-lineWidth: 1;
$light-components-DatePicker-lineHeightLG: 1.5;
$light-components-DatePicker-lineHeight: 1.5714285714285714;
$light-components-DatePicker-fontWeightStrong: 600;
$light-components-DatePicker-fontSizeLG: 16;
$light-components-DatePicker-fontSize: 14;
$light-components-DatePicker-controlPaddingHorizontalSM: 8;
$light-components-DatePicker-controlPaddingHorizontal: 12;
$light-components-DatePicker-controlOutlineWidth: 2;
$light-components-DatePicker-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-DatePicker-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-DatePicker-controlItemBgActive: #f0f5ff;
$light-components-DatePicker-controlHeightSM: 24;
$light-components-DatePicker-controlHeightLG: 40;
$light-components-DatePicker-controlHeight: 32;
$light-components-DatePicker-borderRadiusXS: 2;
$light-components-DatePicker-borderRadiusSM: 4;
$light-components-DatePicker-borderRadiusLG: 8;
$light-components-DatePicker-borderRadius: 6;
$light-components-DatePicker-colorWarningOutline: rgba(255, 215, 5, 0.1);
$light-components-DatePicker-colorWarningHover: #ffd666;
$light-components-DatePicker-colorWarning: #faad14;
$light-components-DatePicker-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-components-DatePicker-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-DatePicker-colorTextLightSolid: #ffffff;
$light-components-DatePicker-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-DatePicker-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-DatePicker-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-DatePicker-colorText: rgba(0, 0, 0, 0.88);
$light-components-DatePicker-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-DatePicker-colorPrimaryHover: #6b89ff;
$light-components-DatePicker-colorPrimaryBorder: #bdceff;
$light-components-DatePicker-colorPrimary: #4161fd;
$light-components-DatePicker-colorLinkHover: #6b89ff;
$light-components-DatePicker-colorLinkActive: #2d44d6;
$light-components-DatePicker-colorLink: #4161fd;
$light-components-DatePicker-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-DatePicker-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-DatePicker-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-DatePicker-colorErrorOutline: rgba(255, 38, 6, 0.06);
$light-components-DatePicker-colorErrorHover: #fa6e69;
$light-components-DatePicker-colorError: #ec3e3e;
$light-components-DatePicker-colorBorder: #d9d9d9;
$light-components-DatePicker-colorBgElevated: #ffffff;
$light-components-DatePicker-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-DatePicker-colorBgContainer: #ffffff;
$light-components-DatePicker-hoverBorderColor: #6b89ff;
$light-components-DatePicker-cellHoverBg: rgba(0, 0, 0, 0.04);
$light-components-DatePicker-cellHeight: 24;
$light-components-DatePicker-activeBorderColor: #4161fd;
$light-components-DatePicker-paddingInline: 11;
$light-components-DatePicker-paddingInlineSM: 7;
$light-components-DatePicker-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-DatePicker-colorErrorBg: #fff2f0;
$light-components-DatePicker-colorWarningBg: #fffbe6;
$light-components-DatePicker-colorWarningText: #faad14;
$light-components-DatePicker-colorErrorText: #ec3e3e;
$light-components-DatePicker-colorWarningBgHover: #fff1b8;
$light-components-DatePicker-colorErrorBgHover: #ffe9e6;
$light-components-DatePicker-activeBg: #ffffff;
$light-components-DatePicker-hoverBg: #ffffff;
$light-components-DatePicker-cellBgDisabled: rgba(0, 0, 0, 0.04);
$light-components-DatePicker-cellActiveWithRangeBg: #f0f5ff;
$light-components-DatePicker-cellHoverWithRangeBg: #c8dfff;
$light-components-DatePicker-cellRangeBorderColor: #7cb3ff;
$light-components-DatePicker-multipleItemBg: rgba(0, 0, 0, 0.06);
$light-components-DatePicker-multipleItemBorderColor: rgba(0, 0, 0, 0);
$light-components-DatePicker-multipleItemBorderColorDisabled: rgba(0, 0, 0, 0);
$light-components-DatePicker-multipleItemColorDisabled: rgba(0, 0, 0, 0.25);
$light-components-DatePicker-multipleSelectorBgDisabled: rgba(0, 0, 0, 0.04);
$light-components-DatePicker-cellWidth: 36;
$light-components-DatePicker-multipleItemHeight: 24;
$light-components-DatePicker-multipleItemHeightLG: 32;
$light-components-DatePicker-multipleItemHeightSM: 16;
$light-components-DatePicker-paddingBlock: 4;
$light-components-DatePicker-paddingBlockLG: 7;
$light-components-DatePicker-paddingBlockSM: 0;
$light-components-DatePicker-paddingInline-2: 11;
$light-components-DatePicker-presetsMaxWidth: 200;
$light-components-DatePicker-presetsWidth: 120;
$light-components-DatePicker-textHeight: 40;
$light-components-DatePicker-timeCellHeight: 28;
$light-components-DatePicker-timeColumnHeight: 224;
$light-components-DatePicker-timeColumnWidth: 56;
$light-components-DatePicker-withoutTimeCellHeight: 66;
$light-components-DatePicker-inputFontSize: 14;
$light-components-DatePicker-inputFontSizeLG: 16;
$light-components-DatePicker-inputFontSizeSM: 12;
$light-components-DatePicker-fontHeight: 22;
$light-components-DatePicker-fontHeightLG: 24;
$light-components-DatePicker-fontFamily: SF Pro Text;
$light-components-DatePicker-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Collapse-paddingXXS: 4;
$light-components-Collapse-paddingXS: 8;
$light-components-Collapse-paddingSM: 12;
$light-components-Collapse-paddingLG: 24;
$light-components-Collapse-padding: 16;
$light-components-Collapse-marginSM: 12;
$light-components-Collapse-lineWidth: 1;
$light-components-Collapse-lineHeight: 1.5714285714285714;
$light-components-Collapse-fontSizeLG: 16;
$light-components-Collapse-fontSizeIcon: 12;
$light-components-Collapse-fontSize: 14;
$light-components-Collapse-borderRadiusLG: 8;
$light-components-Collapse-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Collapse-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Collapse-colorText: rgba(0, 0, 0, 0.88);
$light-components-Collapse-colorFillAlter: rgba(0, 0, 0, 0.02);
$light-components-Collapse-colorBorder: #d9d9d9;
$light-components-Collapse-colorBgContainer: #ffffff;
$light-components-Collapse-headerBg: rgba(0, 0, 0, 0.02);
$light-components-Collapse-contentBg: #ffffff;
$light-components-Collapse-fontHeight: 22;
$light-components-Collapse-fontHeightLG: 24;
$light-components-Collapse-lineHeightLG: 1.5;
$light-components-Collapse-fontFamily: SF Pro Text;
$light-components-Checkbox-paddingXS: 8;
$light-components-Checkbox-marginXS: 8;
$light-components-Checkbox-lineWidthFocus: 4;
$light-components-Checkbox-lineWidthBold: 2;
$light-components-Checkbox-lineWidth: 1;
$light-components-Checkbox-lineHeight: 1.5714285714285714;
$light-components-Checkbox-fontSizeLG: 16;
$light-components-Checkbox-fontSize: 14;
$light-components-Checkbox-controlInteractiveSize: 16;
$light-components-Checkbox-borderRadiusSM: 4;
$light-components-Checkbox-colorWhite: #ffffff;
$light-components-Checkbox-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Checkbox-colorText: rgba(0, 0, 0, 0.88);
$light-components-Checkbox-colorPrimaryHover: #6b89ff;
$light-components-Checkbox-colorPrimaryBorder: #bdceff;
$light-components-Checkbox-colorPrimary: #4161fd;
$light-components-Checkbox-colorBorder: #d9d9d9;
$light-components-Checkbox-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Checkbox-colorBgContainer: #ffffff;
$light-components-Checkbox-fontFamily: SF Pro Text;
$light-components-Breadcrumb-paddingXXS: 4;
$light-components-Breadcrumb-marginXXS: 4;
$light-components-Breadcrumb-marginXS: 8;
$light-components-Breadcrumb-lineWidthFocus: 4;
$light-components-Breadcrumb-lineHeight: 1.5714285714285714;
$light-components-Breadcrumb-fontSizeIcon: 12;
$light-components-Breadcrumb-fontSize: 14;
$light-components-Breadcrumb-borderRadiusSM: 4;
$light-components-Breadcrumb-colorPrimaryBorder: #bdceff;
$light-components-Breadcrumb-colorBgTextHover: rgba(0, 0, 0, 0.06);
$light-components-Breadcrumb-separatorColor: rgba(0, 0, 0, 0.45);
$light-components-Breadcrumb-linkHoverColor: rgba(0, 0, 0, 0.88);
$light-components-Breadcrumb-linkColor: rgba(0, 0, 0, 0.45);
$light-components-Breadcrumb-lastItemColor: rgba(0, 0, 0, 0.88);
$light-components-Breadcrumb-itemColor: rgba(0, 0, 0, 0.45);
$light-components-Breadcrumb-separatorMargin: 8;
$light-components-Breadcrumb-iconFontSize: 14;
$light-components-Breadcrumb-fontHeight: 22;
$light-components-Breadcrumb-fontFamily: SF Pro Text;
$light-components-Anchor-paddingXXS: 4;
$light-components-Anchor-lineWidthBold: 2;
$light-components-Anchor-lineHeight: 1.5714285714285714;
$light-components-Anchor-fontSizeLG: 16;
$light-components-Anchor-fontSize: 14;
$light-components-Anchor-colorText: rgba(0, 0, 0, 0.88);
$light-components-Anchor-colorSplit: rgba(0, 0, 0, 0.08);
$light-components-Anchor-colorPrimary: #4161fd;
$light-components-Anchor-linkPaddingInlineStart: 16;
$light-components-Anchor-linkPaddingBlock: 4;
$light-components-Anchor-fontFamily: SF Pro Text;
$light-components-Alert-paddingMD: 20;
$light-components-Alert-paddingContentVerticalSM: 8;
$light-components-Alert-paddingContentHorizontalLG: 24;
$light-components-Alert-marginXS: 8;
$light-components-Alert-marginSM: 12;
$light-components-Alert-lineWidth: 1;
$light-components-Alert-lineHeight: 1.5714285714285714;
$light-components-Alert-fontSizeLG: 16;
$light-components-Alert-fontSizeIcon: 12;
$light-components-Alert-fontSizeHeading3: 24;
$light-components-Alert-fontSize: 14;
$light-components-Alert-borderRadiusLG: 8;
$light-components-Alert-colorWarningBorder: #ffe58f;
$light-components-Alert-colorWarningBg: #fffbe6;
$light-components-Alert-colorWarning: #faad14;
$light-components-Alert-colorTextHeading: rgba(0, 0, 0, 0.88);
$light-components-Alert-colorText: rgba(0, 0, 0, 0.88);
$light-components-Alert-colorSuccessBorder: #a2f095;
$light-components-Alert-colorSuccessBg: #f3fff0;
$light-components-Alert-colorSuccess: #25ca1d;
$light-components-Alert-colorInfoBorder: #bdceff;
$light-components-Alert-colorInfoBg: #f0f5ff;
$light-components-Alert-colorInfo: #4161fd;
$light-components-Alert-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-Alert-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-Alert-colorErrorBorder: #ffc3bd;
$light-components-Alert-colorErrorBg: #fff2f0;
$light-components-Alert-colorError: #ec3e3e;
$light-components-Alert-withDescriptionIconSize: 24;
$light-components-Alert-fontFamily: SF Pro Text;
$light-components-Space-paddingXS: 8;
$light-components-Space-paddingLG: 24;
$light-components-Space-padding: 16;
$light-components-AutoComplete-paddingXXS: 4;
$light-components-AutoComplete-paddingXS: 8;
$light-components-AutoComplete-paddingSM: 12;
$light-components-AutoComplete-lineWidth: 1;
$light-components-AutoComplete-lineHeight: 1.5714285714285714;
$light-components-AutoComplete-controlPaddingHorizontalSM: 8;
$light-components-AutoComplete-controlPaddingHorizontal: 12;
$light-components-AutoComplete-controlOutlineWidth: 2;
$light-components-AutoComplete-controlOutline: rgba(65, 97, 253, 0.1);
$light-components-AutoComplete-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-AutoComplete-controlItemBgActive: #f0f5ff;
$light-components-AutoComplete-controlHeightXS: 16;
$light-components-AutoComplete-controlHeightSM: 24;
$light-components-AutoComplete-controlHeightLG: 40;
$light-components-AutoComplete-controlHeight: 32;
$light-components-AutoComplete-borderRadiusXS: 2;
$light-components-AutoComplete-borderRadiusSM: 4;
$light-components-AutoComplete-borderRadiusLG: 8;
$light-components-AutoComplete-borderRadius: 6;
$light-components-AutoComplete-colorWarningOutline: rgba(255, 215, 5, 0.1);
$light-components-AutoComplete-colorWarningHover: #ffd666;
$light-components-AutoComplete-colorWarning: #faad14;
$light-components-AutoComplete-colorTextTertiary: rgba(0, 0, 0, 0.45);
$light-components-AutoComplete-colorTextQuaternary: rgba(0, 0, 0, 0.25);
$light-components-AutoComplete-colorTextPlaceholder: rgba(0, 0, 0, 0.25);
$light-components-AutoComplete-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-AutoComplete-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-AutoComplete-colorText: rgba(0, 0, 0, 0.88);
$light-components-AutoComplete-colorPrimaryHover: #6b89ff;
$light-components-AutoComplete-colorPrimary: #4161fd;
$light-components-AutoComplete-colorIconHover: rgba(0, 0, 0, 0.88);
$light-components-AutoComplete-colorIcon: rgba(0, 0, 0, 0.45);
$light-components-AutoComplete-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-AutoComplete-colorErrorOutline: rgba(255, 38, 6, 0.06);
$light-components-AutoComplete-colorErrorHover: #fa6e69;
$light-components-AutoComplete-colorError: #ec3e3e;
$light-components-AutoComplete-colorBorder: #d9d9d9;
$light-components-AutoComplete-colorBgElevated: #ffffff;
$light-components-AutoComplete-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-AutoComplete-colorBgContainer: #ffffff;
$light-components-AutoComplete-optionActiveBg: rgba(0, 0, 0, 0.04);
$light-components-AutoComplete-optionHeight: 32;
$light-components-AutoComplete-optionFontSize: 14;
$light-components-AutoComplete-fontFamily: SF Pro Text;
$light-components-AutoComplete-fontSize: 14;
$light-components-AutoComplete-fontSizeIcon: 12;
$light-components-AutoComplete-fontSizeLG: 16;
$light-components-AutoComplete-fontSizeSM: 12;
$light-components-Layout-bodyBg: #f5f5f5;
$light-components-Layout-footerBg: #f5f5f5;
$light-components-Layout-headerBg: #001529;
$light-components-Layout-headerColor: rgba(0, 0, 0, 0.88);
$light-components-Layout-lightSiderBg: #ffffff;
$light-components-Layout-lightTriggerBg: #ffffff;
$light-components-Layout-lightTriggerColor: rgba(0, 0, 0, 0.88);
$light-components-Layout-siderBg: #001529;
$light-components-Layout-triggerBg: #002140;
$light-components-Layout-triggerColor: #ffffff;
$light-components-Layout-colorText: rgba(0, 0, 0, 0.88);
$light-components-Layout-headerHeight: 64;
$light-components-Layout-triggerHeight: 48;
$light-components-Layout-zeroTriggerHeight: 40;
$light-components-Layout-zeroTriggerWidth: 40;
$light-components-Layout-borderRadius: 6;
$light-components-Layout-fontSize: 14;
$light-components-Layout-fontSizeXL: 20;
$light-components-Mentions-fontFamily: SF Pro Text;
$light-components-Mentions-fontSize: 14;
$light-components-Mentions-lineHeight: 1.5714285714285714;
$light-components-Splitter-railSize: 4;
$light-components-Splitter-handleSizeHover: 12;
$light-components-Splitter-dotSize: 8;
$light-components-Splitter-controlSize: 10;
$light-components-Splitter-handleSize: 10;
$light-components-Splitter-trackHoverBg: #94adff;
$light-components-Splitter-trackBgDisabled: rgba(0, 0, 0, 0.04);
$light-components-Splitter-trackBg: #bdceff;
$light-components-Splitter-railHoverBg: rgba(0, 0, 0, 0.06);
$light-components-Splitter-railBg: rgba(0, 0, 0, 0.04);
$light-components-Splitter-handleColor: #bdceff;
$light-components-Splitter-handleColorDisabled: #bfbfbf;
$light-components-Splitter-handleActiveColor: #4161fd;
$light-components-Splitter-dotBorderColor: #f0f0f0;
$light-components-Splitter-dotActiveBorderColor: #bdceff;
$light-components-Splitter-lineWidth: 1;
$light-components-Splitter-controlHeightLG: 40;
$light-components-Splitter-controlHeight: 32;
$light-components-Splitter-colorTextDisabled: rgba(0, 0, 0, 0.25);
$light-components-Splitter-colorTextDescription: rgba(0, 0, 0, 0.45);
$light-components-Splitter-colorPrimaryBorderHover: #94adff;
$light-components-Splitter-colorPrimaryBorder: #bdceff;
$light-components-Splitter-colorPrimary: #4161fd;
$light-components-Splitter-colorFillTertiary: rgba(0, 0, 0, 0.04);
$light-components-Splitter-colorFillSecondary: rgba(0, 0, 0, 0.06);
$light-components-Splitter-colorFillContentHover: rgba(0, 0, 0, 0.15);
$light-components-Splitter-colorBorderSecondary: #f0f0f0;
$light-components-Splitter-colorBgElevated: #ffffff;
$light-components-Splitter-colorBgContainerDisabled: rgba(0, 0, 0, 0.04);
$light-components-Splitter-colorBgContainer: #ffffff;
$light-components-Splitter-resizeSpinnerSize: 20;
$light-components-Splitter-lineHeight: 1.5714285714285714;
$light-components-Splitter-fontSize: 14;
$light-components-Splitter-fontFamily: SF Pro Text;
$light-components-Splitter-controlHeightSM: 24;
$light-components-Splitter-borderRadiusXS: 2;
$light-components-Splitter-colorText: rgba(0, 0, 0, 0.88);
$light-components-Splitter-colorFill: rgba(0, 0, 0, 0.15);
$light-components-Splitter-controlItemBgActive: #f0f5ff;
$light-components-Splitter-controlItemBgActiveHover: #e6edff;
$light-components-Splitter-controlItemBgHover: rgba(0, 0, 0, 0.04);
$light-components-Splitter-fontSizeSM: 12;
$light-components-Splitter-splitBarSize: 2;
$light-components-Splitter-splitTriggerSize: 6;
$dark-token-blue-1: #15172b;
$dark-token-blue-2: #1a2045;
$dark-token-blue-3: #222b5a;
$dark-token-blue-4: #28377d;
$dark-token-blue-5: #3146ab;
$dark-token-blue-6: #3a55da;
$dark-token-blue-7: #627de8;
$dark-token-blue-8: #8ea5f3;
$dark-token-blue-9: #b8c8f8;
$dark-token-blue-10: #e2e9fa;
$dark-token-cyan-1: #112123;
$dark-token-cyan-2: #113536;
$dark-token-cyan-3: #144848;
$dark-token-cyan-4: #146262;
$dark-token-cyan-5: #138585;
$dark-token-cyan-6: #13a8a8;
$dark-token-cyan-7: #33bcb7;
$dark-token-cyan-8: #58d1c9;
$dark-token-cyan-9: #84e2d8;
$dark-token-cyan-10: #b2f1e8;
$dark-token-geekblue-1: #131629;
$dark-token-geekblue-2: #161d40;
$dark-token-geekblue-3: #1c2755;
$dark-token-geekblue-4: #203175;
$dark-token-geekblue-5: #263ea0;
$dark-token-geekblue-6: #2b4acb;
$dark-token-geekblue-7: #5273e0;
$dark-token-geekblue-8: #7f9ef3;
$dark-token-geekblue-9: #a8c1f8;
$dark-token-geekblue-10: #d2e0fa;
$dark-token-gold-1: #2b2111;
$dark-token-gold-2: #443111;
$dark-token-gold-3: #594214;
$dark-token-gold-4: #7c5914;
$dark-token-gold-5: #aa7714;
$dark-token-gold-6: #d89614;
$dark-token-gold-7: #e8b339;
$dark-token-gold-8: #f3cc62;
$dark-token-gold-9: #f8df8b;
$dark-token-gold-10: #faedb5;
$dark-token-green-1: #122412;
$dark-token-green-2: #133813;
$dark-token-green-3: #194b17;
$dark-token-green-4: #1c6618;
$dark-token-green-5: #1f8a1a;
$dark-token-green-6: #22af1c;
$dark-token-green-7: #47c33c;
$dark-token-green-8: #72d964;
$dark-token-green-9: #9ee991;
$dark-token-green-10: #cbf7c1;
$dark-token-lime-1: #1f2611;
$dark-token-lime-2: #2e3c10;
$dark-token-lime-3: #3e4f13;
$dark-token-lime-4: #536d13;
$dark-token-lime-5: #6f9412;
$dark-token-lime-6: #8bbb11;
$dark-token-lime-7: #a9d134;
$dark-token-lime-8: #c9e75d;
$dark-token-lime-9: #e4f88b;
$dark-token-lime-10: #f0fab5;
$dark-token-magenta-1: #291321;
$dark-token-magenta-2: #40162f;
$dark-token-magenta-3: #551c3b;
$dark-token-magenta-4: #75204f;
$dark-token-magenta-5: #a02669;
$dark-token-magenta-6: #cb2b83;
$dark-token-magenta-7: #e0529c;
$dark-token-magenta-8: #f37fb7;
$dark-token-magenta-9: #f8a8cc;
$dark-token-magenta-10: #fad2e3;
$dark-token-orange-1: #2b1d11;
$dark-token-orange-2: #442a11;
$dark-token-orange-3: #593815;
$dark-token-orange-4: #7c4a15;
$dark-token-colorText: rgba(255, 255, 255, 0.85);
$dark-token-colorTextSecondary: rgba(255, 255, 255, 0.65);
$dark-token-orange-5: #aa6215;
$dark-token-colorTextTertiary: rgba(255, 255, 255, 0.45);
$dark-token-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-token-orange-6: #d87a16;
$dark-token-orange-7: #e89a3c;
$dark-token-colorTextLightSolid: #ffffff;
$dark-token-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-token-colorTextLabel: rgba(255, 255, 255, 0.65);
$dark-token-orange-8: #f3b765;
$dark-token-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-token-orange-9: #f8cf8d;
$dark-token-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-token-orange-10: #fae3b7;
$dark-token-purple-1: #1a1325;
$dark-token-purple-2: #24163a;
$dark-token-purple-3: #301c4d;
$dark-token-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-token-colorIcon: rgba(255, 255, 255, 0.45);
$dark-token-purple-4: #3e2069;
$dark-token-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-token-colorBgContainer: #141414;
$dark-token-purple-5: #51258f;
$dark-token-colorBgElevated: #1f1f1f;
$dark-token-purple-6: #642ab5;
$dark-token-colorBgLayout: #000000;
$dark-token-purple-7: #854eca;
$dark-token-colorBgMask: rgba(0, 0, 0, 0.45);
$dark-token-purple-8: #ab7ae0;
$dark-token-colorBgSpotlight: #424242;
$dark-token-purple-9: #cda8f0;
$dark-token-colorBorder: #424242;
$dark-token-purple-10: #ebd7fa;
$dark-token-colorBorderSecondary: #303030;
$dark-token-red-1: #291516;
$dark-token-colorFill: rgba(255, 255, 255, 0.18);
$dark-token-red-2: #411a1b;
$dark-token-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-token-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-token-colorFillQuaternary: rgba(255, 255, 255, 0.04);
$dark-token-red-3: #552121;
$dark-token-red-4: #752727;
$dark-token-colorWhite: #ffffff;
$dark-token-red-5: #a02f2f;
$dark-token-colorBgBase: #000000;
$dark-token-red-6: #cc3838;
$dark-token-colorTextBase: #ffffff;
$dark-token-red-7: #e36561;
$dark-token-red-8: #f3948e;
$dark-token-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-token-red-9: #f8beb8;
$dark-token-colorBgTextActive: rgba(255, 255, 255, 0.18);
$dark-token-red-10: #fae5e2;
$dark-token-colorBgTextHover: rgba(255, 255, 255, 0.12);
$dark-token-volcano-1: #2b1611;
$dark-token-colorBorderBg: #141414;
$dark-token-volcano-2: #441d12;
$dark-token-colorFillContent: rgba(255, 255, 255, 0.12);
$dark-token-volcano-3: #592716;
$dark-token-colorFillContentHover: rgba(255, 255, 255, 0.18);
$dark-token-volcano-4: #7c3118;
$dark-token-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-token-volcano-5: #aa3e19;
$dark-token-volcano-6: #d84a1b;
$dark-token-volcano-7: #e87040;
$dark-token-transparent: rgba(255, 255, 255, 0);
$dark-token-colorSplit: rgba(255, 255, 255, 0.1);
$dark-token-yellow-1: #2b2611;
$dark-token-volcano-8: #f3956a;
$dark-token-yellow-2: #443b11;
$dark-token-yellow-3: #595014;
$dark-token-volcano-9: #f8b692;
$dark-token-yellow-4: #7c6e14;
$dark-token-volcano-10: #fad4bc;
$dark-token-yellow-5: #aa9514;
$dark-token-yellow-6: #d8bd14;
$dark-token-yellow-7: #e8d639;
$dark-token-yellow-8: #f3ea62;
$dark-token-yellow-9: #f8f48b;
$dark-token-yellow-10: #fafab5;
$dark-token-colorPrimary: #3a55da;
$dark-token-colorSuccess: #22af1c;
$dark-token-colorWarning: #d89614;
$dark-token-colorInfo: #3a55da;
$dark-token-colorError: #cc3838;
$dark-token-colorLink: #3a55da;
$dark-token-colorErrorBg: #291516;
$dark-token-colorErrorBgHover: #411a1b;
$dark-token-colorErrorBorder: #552121;
$dark-token-colorErrorBorderHover: #752727;
$dark-token-colorErrorHover: #e36561;
$dark-token-colorErrorActive: #a02f2f;
$dark-token-colorErrorTextHover: #e36561;
$dark-token-colorErrorText: #cc3838;
$dark-token-colorErrorTextActive: #a02f2f;
$dark-token-colorLinkHover: #627de8;
$dark-token-colorInfoBg: #15172b;
$dark-token-colorInfoBgHover: #1a2045;
$dark-token-colorInfoBorder: #222b5a;
$dark-token-colorInfoBorderHover: #627de8;
$dark-token-colorInfoHover: #627de8;
$dark-token-colorInfoActive: #3146ab;
$dark-token-colorInfoTextHover: #627de8;
$dark-token-colorInfoText: #3a55da;
$dark-token-colorInfoTextActive: #3146ab;
$dark-token-colorLinkActive: #3146ab;
$dark-token-colorPrimaryBg: #15172b;
$dark-token-colorPrimaryBgHover: #1a2045;
$dark-token-colorPrimaryBorder: #222b5a;
$dark-token-colorPrimaryBorderHover: #28377d;
$dark-token-colorPrimaryHover: #627de8;
$dark-token-colorPrimaryActive: #3146ab;
$dark-token-colorPrimaryTextHover: #627de8;
$dark-token-colorPrimaryText: #3a55da;
$dark-token-colorPrimaryTextActive: #3146ab;
$dark-token-colorSuccessBg: #122412;
$dark-token-colorSuccessBgHover: #133813;
$dark-token-colorSuccessBorder: #194b17;
$dark-token-colorSuccessBorderHover: #1c6618;
$dark-token-colorSuccessHover: #1c6618;
$dark-token-colorSuccessActive: #1f8a1a;
$dark-token-colorSuccessTextHover: #47c33c;
$dark-token-colorSuccessText: #22af1c;
$dark-token-colorSuccessTextActive: #1f8a1a;
$dark-token-colorWarningBg: #2b2111;
$dark-token-colorWarningBgHover: #443111;
$dark-token-colorWarningBorder: #594214;
$dark-token-colorWarningBorderHover: #7c5914;
$dark-token-colorWarningHover: #7c5914;
$dark-token-colorWarningActive: #aa7714;
$dark-token-colorWarningTextHover: #e8b339;
$dark-token-colorWarningText: #d89614;
$dark-token-colorWarningTextActive: #aa7714;
$dark-token-colorErrorOutline: rgba(238, 38, 56, 0.11);
$dark-token-colorWarningOutline: rgba(173, 107, 0, 0.15);
$dark-token-controlItemBgActive: #1a2045;
$dark-token-controlItemBgActiveDisabled: rgba(255, 255, 255, 0.18);
$dark-token-controlItemBgActiveHover: #1a2045;
$dark-token-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-token-controlOutline: rgba(0, 60, 180, 0.15);
$dark-token-controlTmpOutline: rgba(255, 255, 255, 0.04);
$dark-token-borderRadius: 6;
$dark-token-borderRadiusLG: 8;
$dark-token-borderRadiusSM: 4;
$dark-token-borderRadiusXS: 2;
$dark-token-sizeStep: 4;
$dark-token-sizeUnit: 4;
$dark-token-controlInteractiveSize: 16;
$dark-token-size: 16;
$dark-token-sizeLG: 24;
$dark-token-sizeMD: 20;
$dark-token-sizeMS: 16;
$dark-token-sizeSM: 12;
$dark-token-sizeXL: 32;
$dark-token-sizeXS: 8;
$dark-token-sizeXXL: 48;
$dark-token-controlHeight: 32;
$dark-token-sizeXXS: 4;
$dark-token-controlHeightLG: 40;
$dark-token-controlHeightSM: 24;
$dark-token-controlHeightXS: 16;
$dark-token-lineWidth: 1;
$dark-token-lineWidthBold: 2;
$dark-token-lineWidthFocus: 4;
$dark-token-controlOutlineWidth: 2;
$dark-token-screenLG: 992;
$dark-token-screenLGMax: 1199;
$dark-token-screenLGMin: 992;
$dark-token-screenMD: 768;
$dark-token-screenMDMax: 991;
$dark-token-screenMDMin: 768;
$dark-token-screenSM: 576;
$dark-token-screenSMMax: 767;
$dark-token-screenSMMin: 576;
$dark-token-screenXL: 1200;
$dark-token-screenXLMax: 1599;
$dark-token-screenXLMin: 1200;
$dark-token-screenXS: 480;
$dark-token-screenXSMax: 575;
$dark-token-screenXSMin: 480;
$dark-token-screenXXL: 1600;
$dark-token-screenXXLMin: 1600;
$dark-token-sizePopupArrow: 16;
$dark-token-margin: 16;
$dark-token-marginLG: 24;
$dark-token-marginMD: 20;
$dark-token-marginSM: 12;
$dark-token-marginXL: 32;
$dark-token-marginXS: 8;
$dark-token-marginXXL: 48;
$dark-token-marginXXS: 4;
$dark-token-padding: 16;
$dark-token-paddingLG: 24;
$dark-token-paddingMD: 20;
$dark-token-paddingSM: 12;
$dark-token-paddingXL: 32;
$dark-token-paddingXS: 8;
$dark-token-paddingXXS: 4;
$dark-token-paddingContentHorizontal: 16;
$dark-token-paddingContentHorizontalLG: 24;
$dark-token-paddingContentHorizontalSM: 16;
$dark-token-paddingContentVertical: 12;
$dark-token-paddingContentVerticalLG: 16;
$dark-token-paddingContentVerticalSM: 8;
$dark-token-controlPaddingHorizontal: 12;
$dark-token-controlPaddingHorizontalSM: 8;
$dark-token-fontFamily: SF Pro;
$dark-token-fontFamilyCode: Courier Prime;
$dark-token-fontSize: 14;
$dark-token-fontSizeLG: 16;
$dark-token-fontSizeSM: 12;
$dark-token-fontSizeXL: 20;
$dark-token-fontSizeHeading1: 38;
$dark-token-fontSizeHeading2: 30;
$dark-token-fontSizeHeading3: 24;
$dark-token-fontSizeHeading4: 20;
$dark-token-fontSizeHeading5: 16;
$dark-token-lineHeight: 1.5714285714285714;
$dark-token-lineHeightHeading1: 1.2105263157894737;
$dark-token-lineHeightHeading2: 1.2666666666666666;
$dark-token-lineHeightHeading3: 1.3333333333333333;
$dark-token-lineHeightHeading4: 1.4;
$dark-token-lineHeightHeading5: 1.5;
$dark-token-lineHeightLG: 1.5;
$dark-token-lineHeightSM: 1.6666666666666667;
$dark-token-fontSizeIcon: 12;
$dark-token-fontWeightStrong: 600;
$dark-token-colorFillAlterSolid: #1d1d1d;
$dark-token-fontWeightNormal: 400;
$dark-token-colorFilledHandleBg: #303030;
$dark-token-colorBgSolid: rgba(255, 255, 255, 0.95);
$dark-token-colorBgSolidActive: rgba(255, 255, 255, 0.9);
$dark-token-colorBgSolidHover: #ffffff;
$dark-token-solidTextColor: #000000;
$dark-token-pink-1: #291321;
$dark-token-pink-2: #40162f;
$dark-token-pink-3: #551c3b;
$dark-token-pink-4: #75204f;
$dark-token-pink-5: #a02669;
$dark-token-pink-6: #cb2b83;
$dark-token-pink-7: #e0529c;
$dark-token-pink-8: #f37fb7;
$dark-token-pink-9: #f8a8cc;
$dark-token-pink-10: #fad2e3;
$dark-token-fontSizeXS: 10;
$dark-token-lineHeightXS: 1.6;
$dark-token-borderRadiusXL: 12;
$dark-token-isDarkMode: true;
$dark-token-isLightMode: false;
$dark-token-borderRadiusXXL: 16;
$dark-token-colorBgElevatadTrans: rgba(0, 0, 0, 0.6);
$dark-components-Input-paddingInlineSM: 7;
$dark-components-Input-paddingInlineLG: 11;
$dark-components-Input-paddingInline: 11;
$dark-components-Input-paddingBlockSM: 0;
$dark-components-Input-paddingBlockLG: 7;
$dark-components-Input-paddingBlock: 4;
$dark-components-Input-paddingXXS: 4;
$dark-components-Input-paddingXS: 8;
$dark-components-Input-paddingSM: 12;
$dark-components-Input-paddingLG: 24;
$dark-components-Input-lineWidth: 1;
$dark-components-Input-lineHeightLG: 1.5;
$dark-components-Input-lineHeight: 1.5714285714285714;
$dark-components-Input-fontSizeLG: 16;
$dark-components-Input-fontSizeIcon: 12;
$dark-components-Input-fontSize: 14;
$dark-components-Input-controlPaddingHorizontalSM: 8;
$dark-components-Input-controlPaddingHorizontal: 12;
$dark-components-Input-controlOutlineWidth: 2;
$dark-components-Input-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-Input-controlHeightSM: 24;
$dark-components-Input-controlHeightLG: 40;
$dark-components-Input-controlHeight: 32;
$dark-components-Input-borderRadiusSM: 4;
$dark-components-Input-borderRadiusLG: 8;
$dark-components-Input-borderRadius: 6;
$dark-components-Input-colorWarningOutline: rgba(173, 107, 0, 0.15);
$dark-components-Input-colorWarningBorderHover: #7c5914;
$dark-components-Input-colorWarning: #d89614;
$dark-components-Input-colorTextTertiary: rgba(255, 255, 255, 0.45);
$dark-components-Input-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-components-Input-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-Input-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Input-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Input-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Input-colorPrimary: #3a55da;
$dark-components-Input-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Input-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Input-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Input-colorErrorOutline: rgba(238, 38, 56, 0.11);
$dark-components-Input-colorErrorBorderHover: #752727;
$dark-components-Input-colorError: #cc3838;
$dark-components-Input-colorBorder: #424242;
$dark-components-Input-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Input-colorBgContainer: #141414;
$dark-components-Input-hoverBorderColor: #627de8;
$dark-components-Input-addonBg: rgba(255, 255, 255, 0.04);
$dark-components-Input-activeBorderColor: #3a55da;
$dark-components-Input-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-Input-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Input-colorErrorBgHover: #411a1b;
$dark-components-Input-colorErrorBg: #291516;
$dark-components-Input-colorWarningBg: #2b2111;
$dark-components-Input-colorWarningBgHover: #443111;
$dark-components-Input-colorWarningText: #d89614;
$dark-components-Input-colorErrorText: #cc3838;
$dark-components-Input-activeBg: #141414;
$dark-components-Input-hoverBg: #141414;
$dark-components-Input-inputFontSize: 14;
$dark-components-Input-inputFontSizeLG: 16;
$dark-components-Input-inputFontSizeSM: 12;
$dark-components-Input-fontFamily: SF Pro;
$dark-components-Transfer-listWidthLG: 250;
$dark-components-Transfer-listWidth: 180;
$dark-components-Transfer-listHeight: 200;
$dark-components-Transfer-itemPaddingBlock: 5;
$dark-components-Transfer-paddingXS: 8;
$dark-components-Transfer-paddingSM: 12;
$dark-components-Transfer-marginXXS: 4;
$dark-components-Transfer-marginXS: 8;
$dark-components-Transfer-margin: 16;
$dark-components-Transfer-lineWidth: 1;
$dark-components-Transfer-lineHeight: 1.5714285714285714;
$dark-components-Transfer-fontSizeIcon: 12;
$dark-components-Transfer-fontSize: 14;
$dark-components-Transfer-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Transfer-controlItemBgActiveHover: #1a2045;
$dark-components-Transfer-controlItemBgActive: #1a2045;
$dark-components-Transfer-controlHeightLG: 40;
$dark-components-Transfer-controlHeight: 32;
$dark-components-Transfer-borderRadiusLG: 8;
$dark-components-Transfer-colorWarning: #d89614;
$dark-components-Transfer-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Transfer-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Transfer-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Transfer-colorLinkHover: #627de8;
$dark-components-Transfer-colorError: #cc3838;
$dark-components-Transfer-colorBorder: #424242;
$dark-components-Transfer-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Transfer-colorBgContainer: #141414;
$dark-components-Transfer-itemHeight: 32;
$dark-components-Transfer-headerHeight: 40;
$dark-components-Transfer-fontFamily: SF Pro;
$dark-components-Segmented-segmentedBgColorSelected: #ffffff;
$dark-components-Segmented-paddingXXS: 4;
$dark-components-Segmented-marginSM: 12;
$dark-components-Segmented-lineWidthBold: 2;
$dark-components-Segmented-lineWidth: 1;
$dark-components-Segmented-lineHeight: 1.7142857142857142;
$dark-components-Segmented-fontSizeLG: 16;
$dark-components-Segmented-fontSize: 14;
$dark-components-Segmented-controlPaddingHorizontalSM: 8;
$dark-components-Segmented-controlPaddingHorizontal: 12;
$dark-components-Segmented-controlHeightSM: 24;
$dark-components-Segmented-controlHeightLG: 40;
$dark-components-Segmented-controlHeight: 40;
$dark-components-Segmented-borderRadiusXS: 2;
$dark-components-Segmented-borderRadiusSM: 4;
$dark-components-Segmented-borderRadiusLG: 8;
$dark-components-Segmented-borderRadius: 6;
$dark-components-Segmented-colorTextLabel: rgba(255, 255, 255, 0.65);
$dark-components-Segmented-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Segmented-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Segmented-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Segmented-colorFill: rgba(255, 255, 255, 0.18);
$dark-components-Segmented-colorBgLayout: #000000;
$dark-components-Segmented-colorBgElevated: #1f1f1f;
$dark-components-Segmented-segmentedGroupBg: rgba(255, 255, 255, 0.08);
$dark-components-Segmented-itemSelectedColor: rgba(255, 255, 255, 0.85);
$dark-components-Segmented-itemSelectedBg: #1f1f1f;
$dark-components-Segmented-itemHoverColor: rgba(255, 255, 255, 0.85);
$dark-components-Segmented-itemHoverBg: rgba(255, 255, 255, 0.12);
$dark-components-Segmented-itemColor: rgba(255, 255, 255, 0.65);
$dark-components-Segmented-itemActiveBg: rgba(255, 255, 255, 0.18);
$dark-components-Segmented-trackPadding: 2;
$dark-components-Segmented-trackBg: rgba(255, 255, 255, 0.12);
$dark-components-Segmented-fontFamily: SF Pro;
$dark-components-Switch-trackPadding: 2;
$dark-components-Switch-trackMinWidthSM: 28;
$dark-components-Switch-trackMinWidth: 44;
$dark-components-Switch-trackHeightSM: 16;
$dark-components-Switch-trackHeight: 22;
$dark-components-Switch-handleSizeSM: 12;
$dark-components-Switch-handleSize: 18;
$dark-components-Switch-marginXXS: 4;
$dark-components-Switch-lineWidthFocus: 4;
$dark-components-Switch-lineHeight: 1.5714285714285714;
$dark-components-Switch-fontSizeSM: 12;
$dark-components-Switch-fontSizeIcon: 12;
$dark-components-Switch-fontSize: 14;
$dark-components-Switch-controlHeight: 32;
$dark-components-Switch-colorWhite: #ffffff;
$dark-components-Switch-colorTextTertiary: rgba(255, 255, 255, 0.45);
$dark-components-Switch-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-components-Switch-colorTextLightSolid: #ffffff;
$dark-components-Switch-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Switch-colorPrimaryHover: #627de8;
$dark-components-Switch-colorPrimaryBorder: #222b5a;
$dark-components-Switch-colorPrimary: #3a55da;
$dark-components-Switch-handleBg: #ffffff;
$dark-components-Switch-fontFamily: SF Pro;
$dark-components-TimePicker-timeColumnWidth: 56;
$dark-components-TimePicker-timeColumnHeight: 224;
$dark-components-TimePicker-timeCellHeight: 28;
$dark-components-TimePicker-borderRadiusSM: 4;
$dark-components-TimePicker-borderRadiusLG: 8;
$dark-components-TimePicker-sizePopupArrow: 16;
$dark-components-TimePicker-paddingXXS: 4;
$dark-components-TimePicker-paddingXS: 8;
$dark-components-TimePicker-paddingSM: 12;
$dark-components-TimePicker-padding: 16;
$dark-components-TimePicker-marginXXS: 4;
$dark-components-TimePicker-marginXS: 8;
$dark-components-TimePicker-lineWidthBold: 2;
$dark-components-TimePicker-lineWidth: 1;
$dark-components-TimePicker-lineHeightLG: 1.5;
$dark-components-TimePicker-lineHeight: 1.5714285714285714;
$dark-components-TimePicker-fontWeightStrong: 600;
$dark-components-TimePicker-fontSizeLG: 16;
$dark-components-TimePicker-fontSize: 14;
$dark-components-TimePicker-controlPaddingHorizontalSM: 8;
$dark-components-TimePicker-controlPaddingHorizontal: 12;
$dark-components-TimePicker-controlOutlineWidth: 2;
$dark-components-TimePicker-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-TimePicker-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-TimePicker-controlItemBgActive: #1a2045;
$dark-components-TimePicker-controlHeightSM: 24;
$dark-components-TimePicker-controlHeightLG: 40;
$dark-components-TimePicker-controlHeight: 32;
$dark-components-TimePicker-borderRadiusXS: 2;
$dark-components-TimePicker-borderRadius: 6;
$dark-components-TimePicker-colorWarningOutline: rgba(173, 107, 0, 0.15);
$dark-components-TimePicker-colorWarning: #d89614;
$dark-components-TimePicker-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-components-TimePicker-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-TimePicker-colorTextLightSolid: #ffffff;
$dark-components-TimePicker-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-TimePicker-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-TimePicker-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-TimePicker-colorText: rgba(255, 255, 255, 0.85);
$dark-components-TimePicker-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-TimePicker-colorPrimaryHover: #627de8;
$dark-components-TimePicker-colorPrimaryBorder: #222b5a;
$dark-components-TimePicker-colorPrimary: #3a55da;
$dark-components-TimePicker-colorLinkHover: #627de8;
$dark-components-TimePicker-colorLinkActive: #3146ab;
$dark-components-TimePicker-colorLink: #3a55da;
$dark-components-TimePicker-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-TimePicker-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-TimePicker-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-TimePicker-colorErrorOutline: rgba(238, 38, 56, 0.11);
$dark-components-TimePicker-colorError: #cc3838;
$dark-components-TimePicker-colorBorder: #424242;
$dark-components-TimePicker-colorBgElevated: #1f1f1f;
$dark-components-TimePicker-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-TimePicker-colorBgContainer: #141414;
$dark-components-TimePicker-hoverBorderColor: #627de8;
$dark-components-TimePicker-cellHoverBg: rgba(255, 255, 255, 0.08);
$dark-components-TimePicker-cellHeight: 24;
$dark-components-TimePicker-activeBorderColor: #3a55da;
$dark-components-TimePicker-paddingInline: 11;
$dark-components-TimePicker-paddingInlineLG: 11;
$dark-components-TimePicker-paddingInlineSM: 7;
$dark-components-TimePicker-activeBg: #141414;
$dark-components-TimePicker-hoverBg: #141414;
$dark-components-TimePicker-cellBgDisabled: rgba(255, 255, 255, 0.08);
$dark-components-TimePicker-cellActiveWithRangeBg: #1a2045;
$dark-components-TimePicker-cellHoverWithRangeBg: #c8dfff;
$dark-components-TimePicker-cellRangeBorderColor: #7cb3ff;
$dark-components-TimePicker-multipleItemBg: rgba(255, 255, 255, 0.12);
$dark-components-TimePicker-multipleItemBorderColor: rgba(255, 255, 255, 0);
$dark-components-TimePicker-multipleItemBorderColorDisabled: rgba(255, 255, 255, 0);
$dark-components-TimePicker-multipleItemColorDisabled: rgba(255, 255, 255, 0.25);
$dark-components-TimePicker-multipleSelectorBgDisabled: rgba(255, 255, 255, 0.08);
$dark-components-TimePicker-cellWidth: 36;
$dark-components-TimePicker-multipleItemHeight: 24;
$dark-components-TimePicker-multipleItemHeightLG: 32;
$dark-components-TimePicker-multipleItemHeightSM: 16;
$dark-components-TimePicker-paddingBlock: 4;
$dark-components-TimePicker-paddingBlockLG: 7;
$dark-components-TimePicker-paddingBlockSM: 0;
$dark-components-TimePicker-presetsMaxWidth: 200;
$dark-components-TimePicker-presetsWidth: 120;
$dark-components-TimePicker-textHeight: 40;
$dark-components-TimePicker-withoutTimeCellHeight: 66;
$dark-components-TimePicker-inputFontSize: 14;
$dark-components-TimePicker-inputFontSizeLG: 16;
$dark-components-TimePicker-inputFontSizeSM: 12;
$dark-components-TimePicker-fontFamily: SF Pro;
$dark-components-TimePicker-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-TimePicker-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-Timeline-itemPaddingBottom: 20;
$dark-components-Timeline-paddingXXS: 4;
$dark-components-Timeline-padding: 16;
$dark-components-Timeline-marginXXS: 4;
$dark-components-Timeline-marginXS: 8;
$dark-components-Timeline-marginSM: 12;
$dark-components-Timeline-margin: 16;
$dark-components-Timeline-lineWidthBold: 2;
$dark-components-Timeline-lineWidth: 1;
$dark-components-Timeline-lineHeight: 1.5714285714285714;
$dark-components-Timeline-fontSizeSM: 12;
$dark-components-Timeline-fontSize: 14;
$dark-components-Timeline-controlHeightLG: 40;
$dark-components-Timeline-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Timeline-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Timeline-colorSuccess: #22af1c;
$dark-components-Timeline-colorPrimary: #3a55da;
$dark-components-Timeline-colorError: #cc3838;
$dark-components-Timeline-colorBgContainer: #141414;
$dark-components-Timeline-tailColor: rgba(255, 255, 255, 0.1);
$dark-components-Timeline-dotBg: #141414;
$dark-components-Timeline-fontFamily: SF Pro;
$dark-components-Tabs-horizontalItemGutter: 32;
$dark-components-Tabs-cardGutter: 2;
$dark-components-Tabs-paddingXXS: 4;
$dark-components-Tabs-paddingXS: 8;
$dark-components-Tabs-paddingSM: 12;
$dark-components-Tabs-paddingLG: 24;
$dark-components-Tabs-padding: 16;
$dark-components-Tabs-marginXXS: 4;
$dark-components-Tabs-marginXS: 8;
$dark-components-Tabs-marginSM: 12;
$dark-components-Tabs-margin: 16;
$dark-components-Tabs-lineWidthFocus: 4;
$dark-components-Tabs-lineWidthBold: 2;
$dark-components-Tabs-lineWidth: 1;
$dark-components-Tabs-lineHeight: 1.5714285714285714;
$dark-components-Tabs-fontSizeSM: 12;
$dark-components-Tabs-fontSizeLG: 16;
$dark-components-Tabs-fontSize: 14;
$dark-components-Tabs-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Tabs-controlHeightLG: 40;
$dark-components-Tabs-controlHeight: 32;
$dark-components-Tabs-borderRadiusLG: 8;
$dark-components-Tabs-borderRadius: 6;
$dark-components-Tabs-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Tabs-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Tabs-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Tabs-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Tabs-colorPrimaryHover: #627de8;
$dark-components-Tabs-colorPrimaryBorder: #222b5a;
$dark-components-Tabs-colorPrimaryActive: #3146ab;
$dark-components-Tabs-colorPrimary: #3a55da;
$dark-components-Tabs-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Tabs-colorBorderSecondary: #303030;
$dark-components-Tabs-colorBorder: #424242;
$dark-components-Tabs-colorBgContainer: #141414;
$dark-components-Tabs-itemSelectedColor: #3a55da;
$dark-components-Tabs-itemHoverColor: #627de8;
$dark-components-Tabs-itemColor: rgba(255, 255, 255, 0.85);
$dark-components-Tabs-itemActiveColor: #3146ab;
$dark-components-Tabs-inkBarColor: #3a55da;
$dark-components-Tabs-cardHeight: 40;
$dark-components-Tabs-cardBg: rgba(255, 255, 255, 0.04);
$dark-components-Tabs-titleFontSize: 14;
$dark-components-Tabs-titleFontSizeLG: 16;
$dark-components-Tabs-titleFontSizeSM: 14;
$dark-components-Tabs-fontFamily: SF Pro;
$dark-components-Table-stickyScrollBarBorderRadius: 100;
$dark-components-Table-headerSplitColor: #303030;
$dark-components-Table-headerBg: rgba(255, 255, 255, 0.04);
$dark-components-Table-footerBg: rgba(255, 255, 255, 0.04);
$dark-components-Table-paddingXXS: 4;
$dark-components-Table-paddingXS: 8;
$dark-components-Table-paddingSM: 12;
$dark-components-Table-padding: 16;
$dark-components-Table-marginXXS: 4;
$dark-components-Table-margin: 16;
$dark-components-Table-lineWidth: 1;
$dark-components-Table-lineHeight: 1.5714285714285714;
$dark-components-Table-fontWeightStrong: 600;
$dark-components-Table-fontSizeSM: 12;
$dark-components-Table-fontSizeIcon: 12;
$dark-components-Table-fontSize: 14;
$dark-components-Table-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Table-controlItemBgActiveHover: #1a2045;
$dark-components-Table-controlItemBgActive: #1a2045;
$dark-components-Table-controlInteractiveSize: 16;
$dark-components-Table-controlHeight: 32;
$dark-components-Table-borderRadiusLG: 8;
$dark-components-Table-borderRadius: 6;
$dark-components-Table-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-Table-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Table-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Table-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Table-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Table-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Table-colorPrimary: #3a55da;
$dark-components-Table-colorLinkHover: #627de8;
$dark-components-Table-colorLinkActive: #3146ab;
$dark-components-Table-colorLink: #3a55da;
$dark-components-Table-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Table-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Table-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Table-colorFillContent: rgba(255, 255, 255, 0.12);
$dark-components-Table-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Table-colorBorderSecondary: #303030;
$dark-components-Table-colorBgContainer: #141414;
$dark-components-Table-rowSelectedHoverBg: #1a2045;
$dark-components-Table-headerFilterHoverBg: rgba(255, 255, 255, 0.12);
$dark-components-Table-headerColor: rgba(255, 255, 255, 0.85);
$dark-components-Table-headerBorderRadius: 8;
$dark-components-Table-footerColor: rgba(255, 255, 255, 0.85);
$dark-components-Table-filterDropdownMenuBg: #141414;
$dark-components-Table-filterDropdownBg: #141414;
$dark-components-Table-cellPaddingInlineSM: 8;
$dark-components-Table-cellPaddingInlineMD: 8;
$dark-components-Table-cellPaddingInline: 16;
$dark-components-Table-cellPaddingBlockSM: 8;
$dark-components-Table-cellPaddingBlockMD: 12;
$dark-components-Table-cellPaddingBlock: 16;
$dark-components-Table-borderColor: #303030;
$dark-components-Table-rowHoverBg: #1d1d1d;
$dark-components-Table-headerSortActiveBg: rgba(255, 255, 255, 0.12);
$dark-components-Table-bodySortBg: #1d1d1d;
$dark-components-Table-headerSortHoverBg: rgba(255, 255, 255, 0.12);
$dark-components-Table-cellFontSize: 14;
$dark-components-Table-cellFontSizeMD: 14;
$dark-components-Table-cellFontSizeSM: 14;
$dark-components-Table-fontFamily: SF Pro;
$dark-components-Steps-dotSize: 8;
$dark-components-Steps-dotCurrentSize: 10;
$dark-components-Steps-descriptionMaxWidth: 140;
$dark-components-Steps-paddingXXS: 4;
$dark-components-Steps-paddingXS: 8;
$dark-components-Steps-paddingSM: 12;
$dark-components-Steps-paddingLG: 24;
$dark-components-Steps-padding: 16;
$dark-components-Steps-marginXXS: 4;
$dark-components-Steps-marginXS: 8;
$dark-components-Steps-marginSM: 12;
$dark-components-Steps-marginLG: 24;
$dark-components-Steps-margin: 16;
$dark-components-Steps-lineWidthFocus: 4;
$dark-components-Steps-lineWidthBold: 2;
$dark-components-Steps-lineWidth: 1;
$dark-components-Steps-lineHeightSM: 1.6666666666666667;
$dark-components-Steps-lineHeight: 1.5714285714285714;
$dark-components-Steps-fontWeightStrong: 600;
$dark-components-Steps-fontSizeSM: 12;
$dark-components-Steps-fontSizeLG: 16;
$dark-components-Steps-fontSizeIcon: 12;
$dark-components-Steps-fontSizeHeading3: 24;
$dark-components-Steps-fontSize: 14;
$dark-components-Steps-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Steps-controlItemBgActive: #1a2045;
$dark-components-Steps-controlHeightLG: 40;
$dark-components-Steps-borderRadiusSM: 4;
$dark-components-Steps-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-components-Steps-colorTextLightSolid: #ffffff;
$dark-components-Steps-colorTextLabel: rgba(255, 255, 255, 0.65);
$dark-components-Steps-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Steps-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Steps-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Steps-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Steps-colorPrimaryBorder: #222b5a;
$dark-components-Steps-colorPrimary: #3a55da;
$dark-components-Steps-colorFillContent: rgba(255, 255, 255, 0.12);
$dark-components-Steps-colorError: #cc3838;
$dark-components-Steps-colorBorderSecondary: #303030;
$dark-components-Steps-colorBorderBg: #141414;
$dark-components-Steps-colorBgContainer: #141414;
$dark-components-Steps-titleLineHeight: 32;
$dark-components-Steps-iconSizeSM: 24;
$dark-components-Steps-iconSize: 32;
$dark-components-Steps-finishIconBorderColor: #1677ff;
$dark-components-Steps-customIconFontSize: 24;
$dark-components-Steps-iconFontSize: 14;
$dark-components-Steps-fontFamily: SF Pro;
$dark-components-Spin-dotSizeSM: 14;
$dark-components-Spin-dotSize: 20;
$dark-components-Spin-contentHeight: 400;
$dark-components-Spin-marginXXS: 4;
$dark-components-Spin-lineHeight: 1.5714285714285714;
$dark-components-Spin-fontSize: 14;
$dark-components-Spin-controlHeightLG: 40;
$dark-components-Spin-controlHeight: 32;
$dark-components-Spin-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Spin-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Spin-colorPrimary: #3a55da;
$dark-components-Spin-colorBgContainer: #141414;
$dark-components-Spin-dotSizeLG: 32;
$dark-components-Spin-fontFamily: SF Pro;
$dark-components-Slider-railSize: 4;
$dark-components-Slider-handleSizeHover: 12;
$dark-components-Slider-dotSize: 8;
$dark-components-Slider-controlSize: 10;
$dark-components-Slider-handleSize: 10;
$dark-components-Slider-lineWidth: 1;
$dark-components-Slider-lineHeight: 1.5714285714285714;
$dark-components-Slider-fontSize: 14;
$dark-components-Slider-controlHeightSM: 24;
$dark-components-Slider-controlHeightLG: 40;
$dark-components-Slider-controlHeight: 32;
$dark-components-Slider-borderRadiusXS: 2;
$dark-components-Slider-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Slider-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Slider-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Slider-colorPrimaryBorderHover: #28377d;
$dark-components-Slider-colorPrimaryBorder: #222b5a;
$dark-components-Slider-colorPrimary: #3a55da;
$dark-components-Slider-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-Slider-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Slider-colorFillContentHover: rgba(255, 255, 255, 0.18);
$dark-components-Slider-colorBorderSecondary: #303030;
$dark-components-Slider-colorBgElevated: #1f1f1f;
$dark-components-Slider-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Slider-colorBgContainer: #141414;
$dark-components-Slider-trackHoverBg: #28377d;
$dark-components-Slider-trackBgDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Slider-trackBg: #222b5a;
$dark-components-Slider-railHoverBg: rgba(255, 255, 255, 0.12);
$dark-components-Slider-railBg: rgba(255, 255, 255, 0.08);
$dark-components-Slider-handleColor: #222b5a;
$dark-components-Slider-handleActiveColor: #3a55da;
$dark-components-Slider-dotBorderColor: #303030;
$dark-components-Slider-dotActiveBorderColor: #222b5a;
$dark-components-Slider-handleColorDisabled: #bfbfbf;
$dark-components-Slider-fontFamily: SF Pro;
$dark-components-Rate-rateStarSize: 20;
$dark-components-Rate-marginXS: 8;
$dark-components-Rate-lineWidth: 1;
$dark-components-Rate-lineHeight: 1.5714285714285714;
$dark-components-Rate-fontSize: 14;
$dark-components-Rate-controlHeightLG: 40;
$dark-components-Rate-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Rate-colorFillContent: rgba(255, 255, 255, 0.12);
$dark-components-Rate-fontFamily: SF Pro;
$dark-components-Radio-radioSize: 16;
$dark-components-Radio-dotSize: 8;
$dark-components-Radio-buttonPaddingInline: 15;
$dark-components-Radio-paddingXS: 8;
$dark-components-Radio-padding: 16;
$dark-components-Radio-marginXS: 8;
$dark-components-Radio-lineWidthFocus: 4;
$dark-components-Radio-lineWidth: 1;
$dark-components-Radio-lineHeight: 1.5714285714285714;
$dark-components-Radio-fontSizeLG: 16;
$dark-components-Radio-fontSize: 14;
$dark-components-Radio-controlOutlineWidth: 2;
$dark-components-Radio-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-Radio-controlItemBgActiveDisabled: rgba(255, 255, 255, 0.18);
$dark-components-Radio-controlHeightSM: 24;
$dark-components-Radio-controlHeightLG: 40;
$dark-components-Radio-controlHeight: 32;
$dark-components-Radio-borderRadiusSM: 4;
$dark-components-Radio-borderRadiusLG: 8;
$dark-components-Radio-borderRadius: 6;
$dark-components-Radio-colorWhite: #ffffff;
$dark-components-Radio-colorTextLightSolid: #ffffff;
$dark-components-Radio-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Radio-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Radio-colorPrimaryHover: #627de8;
$dark-components-Radio-colorPrimaryBorder: #222b5a;
$dark-components-Radio-colorPrimaryActive: #3146ab;
$dark-components-Radio-colorPrimary: #3a55da;
$dark-components-Radio-colorBorder: #424242;
$dark-components-Radio-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Radio-colorBgContainer: #141414;
$dark-components-Radio-wrapperMarginInlineEnd: 8;
$dark-components-Radio-dotColorDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Radio-buttonSolidCheckedHoverBg: #627de8;
$dark-components-Radio-buttonSolidCheckedColor: #ffffff;
$dark-components-Radio-buttonSolidCheckedBg: #3a55da;
$dark-components-Radio-buttonSolidCheckedActiveBg: #3146ab;
$dark-components-Radio-buttonColor: rgba(255, 255, 255, 0.85);
$dark-components-Radio-buttonCheckedColorDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Radio-buttonCheckedBgDisabled: rgba(255, 255, 255, 0.18);
$dark-components-Radio-buttonCheckedBg: #141414;
$dark-components-Radio-buttonBg: #141414;
$dark-components-Radio-fontFamily: SF Pro;
$dark-components-Radio-radioBgColor: #3a55da;
$dark-components-Radio-radioColor: #ffffff;
$dark-components-Popover-titleMinWidth: 177;
$dark-components-Popover-sizePopupArrow: 16;
$dark-components-Popover-paddingSM: 12;
$dark-components-Popover-padding: 16;
$dark-components-Popover-marginXS: 8;
$dark-components-Popover-lineWidth: 1;
$dark-components-Popover-lineHeight: 1.5714285714285714;
$dark-components-Popover-fontWeightStrong: 600;
$dark-components-Popover-fontSize: 14;
$dark-components-Popover-controlHeight: 32;
$dark-components-Popover-borderRadiusXS: 2;
$dark-components-Popover-borderRadiusLG: 8;
$dark-components-Popover-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Popover-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Popover-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Popover-colorBgElevated: #1f1f1f;
$dark-components-Popover-fontFamily: SF Pro;
$dark-components-Notification-width: 384;
$dark-components-Notification-paddingMD: 20;
$dark-components-Notification-paddingLG: 24;
$dark-components-Notification-paddingContentHorizontalLG: 24;
$dark-components-Notification-marginXS: 8;
$dark-components-Notification-marginSM: 12;
$dark-components-Notification-marginLG: 24;
$dark-components-Notification-margin: 16;
$dark-components-Notification-lineHeight: 1.5714285714285714;
$dark-components-Notification-fontSizeLG: 16;
$dark-components-Notification-fontSize: 14;
$dark-components-Notification-controlHeightLG: 40;
$dark-components-Notification-borderRadiusSM: 4;
$dark-components-Notification-borderRadiusLG: 8;
$dark-components-Notification-colorWarning: #d89614;
$dark-components-Notification-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Notification-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Notification-colorSuccess: #22af1c;
$dark-components-Notification-colorInfo: #3a55da;
$dark-components-Notification-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Notification-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Notification-colorError: #cc3838;
$dark-components-Notification-colorBgElevated: #1f1f1f;
$dark-components-Notification-lineHeightLG: 1.5;
$dark-components-Notification-lineWidthFocus: 4;
$dark-components-Notification-fontFamily: SF Pro;
$dark-components-Tooltip-paddingSM: 12;
$dark-components-Tooltip-sizePopupArrow: 16;
$dark-components-Tooltip-paddingXS: 8;
$dark-components-Tooltip-lineHeight: 1.5714285714285714;
$dark-components-Tooltip-fontSize: 14;
$dark-components-Tooltip-controlHeight: 32;
$dark-components-Tooltip-borderRadiusXS: 2;
$dark-components-Tooltip-borderRadius: 6;
$dark-components-Tooltip-colorTextLightSolid: #ffffff;
$dark-components-Tooltip-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Tooltip-colorBgSpotlight: #424242;
$dark-components-Tooltip-fontFamily: SF Pro;
$dark-components-Menu-subMenuItemBg: rgba(0, 0, 0, 0.02);
$dark-components-Menu-darkSubMenuItemBg: #000c17;
$dark-components-Menu-darkItemDisabledColor: rgba(255, 255, 255, 0.25);
$dark-components-Menu-darkItemColor: rgba(255, 255, 255, 0.65);
$dark-components-Menu-darkGroupTitleColor: rgba(255, 255, 255, 0.65);
$dark-components-Menu-darkItemBg: #001529;
$dark-components-Menu-paddingXS: 8;
$dark-components-Menu-paddingXL: 32;
$dark-components-Menu-padding: 16;
$dark-components-Menu-marginXXS: 4;
$dark-components-Menu-marginXS: 8;
$dark-components-Menu-margin: 16;
$dark-components-Menu-lineWidthFocus: 4;
$dark-components-Menu-lineWidthBold: 2;
$dark-components-Menu-lineWidth: 1;
$dark-components-Menu-lineHeight: 1.8333333333333333;
$dark-components-Menu-fontSizeLG: 16;
$dark-components-Menu-fontSize: 12;
$dark-components-Menu-controlItemBgActive: #1a2045;
$dark-components-Menu-controlHeightSM: 24;
$dark-components-Menu-controlHeightLG: 40;
$dark-components-Menu-borderRadius: 6;
$dark-components-Menu-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Menu-colorPrimaryBorder: #222b5a;
$dark-components-Menu-colorPrimary: #3a55da;
$dark-components-Menu-colorFillContent: rgba(255, 255, 255, 0.12);
$dark-components-Menu-colorErrorHover: #e36561;
$dark-components-Menu-colorErrorBg: #291516;
$dark-components-Menu-colorError: #cc3838;
$dark-components-Menu-colorBgElevated: #1f1f1f;
$dark-components-Menu-colorBgContainer: #141414;
$dark-components-Menu-subMenuItemBorderRadius: 8;
$dark-components-Menu-popupBg: #1f1f1f;
$dark-components-Menu-itemSelectedColor: #3a55da;
$dark-components-Menu-itemSelectedBg: #1a2045;
$dark-components-Menu-itemHoverColor: rgba(255, 255, 255, 0.85);
$dark-components-Menu-itemHoverBg: rgba(255, 255, 255, 0.12);
$dark-components-Menu-itemHeight: 40;
$dark-components-Menu-itemDisabledColor: rgba(255, 255, 255, 0.25);
$dark-components-Menu-itemColor: rgba(255, 255, 255, 0.85);
$dark-components-Menu-itemBorderRadius: 8;
$dark-components-Menu-itemBg: #141414;
$dark-components-Menu-iconSize: 24;
$dark-components-Menu-horizontalItemSelectedColor: #3a55da;
$dark-components-Menu-horizontalItemSelectedBg: rgba(255, 255, 255, 0);
$dark-components-Menu-horizontalItemHoverColor: #3a55da;
$dark-components-Menu-horizontalItemHoverBg: rgba(255, 255, 255, 0);
$dark-components-Menu-groupTitleColor: rgba(255, 255, 255, 0.45);
$dark-components-Menu-darkItemSelectedColor: #ffffff;
$dark-components-Menu-darkItemSelectedBg: #3a55da;
$dark-components-Menu-darkItemHoverColor: #ffffff;
$dark-components-Menu-darkItemHoverBg: rgba(255, 255, 255, 0);
$dark-components-Menu-collapsedIconSize: 16;
$dark-components-Menu-darkPopupBg: #001529;
$dark-components-Menu-activeBarBorderWidth: 1;
$dark-components-Menu-collapsedWidth: 80;
$dark-components-Menu-dropdownWidth: 160;
$dark-components-Menu-itemMarginBlock: 8;
$dark-components-Menu-itemMarginInline: 4;
$dark-components-Menu-iconMarginInlineEnd: 8;
$dark-components-Menu-groupTitleFontSize: 14;
$dark-components-Menu-groupTitleLineHeight: 1.5714285714285714;
$dark-components-Menu-fontFamily: SF Pro;
$dark-components-Menu-subMenuItemSelectedColor: #3a55da;
$dark-components-InputNumber-paddingInlineSM: 7;
$dark-components-InputNumber-paddingInlineLG: 11;
$dark-components-InputNumber-paddingInline: 11;
$dark-components-InputNumber-paddingBlockSM: 0;
$dark-components-InputNumber-paddingBlockLG: 7;
$dark-components-InputNumber-paddingBlock: 4;
$dark-components-InputNumber-handleWidth: 22;
$dark-components-InputNumber-controlWidth: 90;
$dark-components-InputNumber-paddingXXS: 4;
$dark-components-InputNumber-paddingXS: 8;
$dark-components-InputNumber-paddingSM: 12;
$dark-components-InputNumber-lineWidth: 1;
$dark-components-InputNumber-lineHeightLG: 1.5;
$dark-components-InputNumber-lineHeight: 1.5714285714285714;
$dark-components-InputNumber-fontSizeLG: 16;
$dark-components-InputNumber-fontSize: 14;
$dark-components-InputNumber-controlPaddingHorizontalSM: 8;
$dark-components-InputNumber-controlPaddingHorizontal: 12;
$dark-components-InputNumber-controlHeightSM: 24;
$dark-components-InputNumber-controlHeightLG: 40;
$dark-components-InputNumber-controlHeight: 32;
$dark-components-InputNumber-borderRadiusSM: 4;
$dark-components-InputNumber-borderRadiusLG: 8;
$dark-components-InputNumber-borderRadius: 6;
$dark-components-InputNumber-colorWarningBorderHover: #7c5914;
$dark-components-InputNumber-colorWarning: #d89614;
$dark-components-InputNumber-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-InputNumber-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-InputNumber-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-InputNumber-colorText: rgba(255, 255, 255, 0.85);
$dark-components-InputNumber-colorPrimaryHover: #627de8;
$dark-components-InputNumber-colorPrimary: #3a55da;
$dark-components-InputNumber-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-InputNumber-colorErrorBorderHover: #752727;
$dark-components-InputNumber-colorError: #cc3838;
$dark-components-InputNumber-colorBorder: #424242;
$dark-components-InputNumber-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-InputNumber-colorBgContainer: #141414;
$dark-components-InputNumber-hoverBorderColor: #627de8;
$dark-components-InputNumber-handleHoverColor: #3a55da;
$dark-components-InputNumber-handleBorderColor: #424242;
$dark-components-InputNumber-handleBg: #141414;
$dark-components-InputNumber-handleActiveBg: rgba(255, 255, 255, 0.04);
$dark-components-InputNumber-addonBg: rgba(255, 255, 255, 0.04);
$dark-components-InputNumber-activeBorderColor: #3a55da;
$dark-components-InputNumber-activeBg: #141414;
$dark-components-InputNumber-hoverBg: #141414;
$dark-components-InputNumber-inputFontSize: 14;
$dark-components-InputNumber-inputFontSizeLG: 16;
$dark-components-InputNumber-inputFontSizeSM: 12;
$dark-components-InputNumber-fontFamily: SF Pro;
$dark-components-InputNumber-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-components-InputNumber-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-InputNumber-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-InputNumber-colorWarningBg: #2b2111;
$dark-components-InputNumber-colorWarningBgHover: #443111;
$dark-components-InputNumber-colorErrorBg: #291516;
$dark-components-InputNumber-colorErrorBgHover: #411a1b;
$dark-components-InputNumber-filledHandleBg: #303030;
$dark-components-InputNumber-colorErrorText: #cc3838;
$dark-components-InputNumber-colorWarningText: #d89614;
$dark-components-Image-previewOperationSize: 18;
$dark-components-Image-previewOperationHoverColor: rgba(255, 255, 255, 0.85);
$dark-components-Image-previewOperationColorDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Image-previewOperationColor: rgba(255, 255, 255, 0.65);
$dark-components-Image-paddingXXS: 4;
$dark-components-Image-paddingSM: 12;
$dark-components-Image-paddingLG: 24;
$dark-components-Image-marginXXS: 4;
$dark-components-Image-marginXL: 32;
$dark-components-Image-marginSM: 12;
$dark-components-Image-margin: 16;
$dark-components-Image-fontSizeIcon: 12;
$dark-components-Image-controlHeightLG: 40;
$dark-components-Image-colorTextLightSolid: #ffffff;
$dark-components-Image-colorBgMask: rgba(0, 0, 0, 0.45);
$dark-components-Image-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Card-headerHeightSM: 38;
$dark-components-Card-headerHeight: 56;
$dark-components-Card-paddingXS: 8;
$dark-components-Card-paddingSM: 12;
$dark-components-Card-paddingLG: 24;
$dark-components-Card-padding: 16;
$dark-components-Card-marginXXS: 4;
$dark-components-Card-marginXS: 8;
$dark-components-Card-lineWidth: 1;
$dark-components-Card-lineHeightLG: 1.5;
$dark-components-Card-lineHeight: 1.5714285714285714;
$dark-components-Card-fontWeightStrong: 600;
$dark-components-Card-fontSize: 14;
$dark-components-Card-borderRadiusLG: 8;
$dark-components-Card-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Card-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Card-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Card-colorPrimary: #3a55da;
$dark-components-Card-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Card-colorBorderSecondary: #303030;
$dark-components-Card-colorBgContainer: #141414;
$dark-components-Card-headerBg: rgba(255, 255, 255, 0);
$dark-components-Card-headerFontSize: 16;
$dark-components-Card-headerFontSizeSM: 14;
$dark-components-Card-fontHeight: 22;
$dark-components-Card-fontSizeLG: 16;
$dark-components-Card-fontFamily: SF Pro;
$dark-components-Card-bodyPaddingSM: 12;
$dark-components-Card-headerPaddingSM: 12;
$dark-components-Card-bodyPadding: 24;
$dark-components-Card-headerPadding: 24;
$dark-components-Carousel-dotWidth: 16;
$dark-components-Carousel-dotHeight: 3;
$dark-components-Carousel-dotActiveWidth: 24;
$dark-components-Carousel-marginXXS: 4;
$dark-components-Carousel-lineHeight: 1.5714285714285714;
$dark-components-Carousel-fontSize: 14;
$dark-components-Carousel-controlHeightSM: 24;
$dark-components-Carousel-controlHeightLG: 40;
$dark-components-Carousel-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Carousel-colorBgContainer: #141414;
$dark-components-Carousel-fontFamily: SF Pro;
$dark-components-Cascader-dropdownHeight: 180;
$dark-components-Cascader-controlWidth: 184;
$dark-components-Cascader-controlItemWidth: 111;
$dark-components-Cascader-paddingXXS: 4;
$dark-components-Cascader-paddingXS: 8;
$dark-components-Cascader-paddingSM: 12;
$dark-components-Cascader-marginXS: 8;
$dark-components-Cascader-lineWidthFocus: 4;
$dark-components-Cascader-lineWidthBold: 2;
$dark-components-Cascader-lineWidth: 1;
$dark-components-Cascader-lineHeight: 1.5714285714285714;
$dark-components-Cascader-fontWeightStrong: 600;
$dark-components-Cascader-fontSizeLG: 16;
$dark-components-Cascader-fontSizeIcon: 12;
$dark-components-Cascader-fontSize: 14;
$dark-components-Cascader-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Cascader-controlItemBgActive: #1a2045;
$dark-components-Cascader-controlInteractiveSize: 16;
$dark-components-Cascader-controlHeight: 32;
$dark-components-Cascader-borderRadiusSM: 4;
$dark-components-Cascader-colorWhite: #ffffff;
$dark-components-Cascader-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Cascader-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Cascader-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Cascader-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Cascader-colorPrimaryHover: #627de8;
$dark-components-Cascader-colorPrimaryBorder: #222b5a;
$dark-components-Cascader-colorPrimary: #3a55da;
$dark-components-Cascader-colorBorder: #424242;
$dark-components-Cascader-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Cascader-colorBgContainer: #141414;
$dark-components-Cascader-optionSelectedBg: #1a2045;
$dark-components-Cascader-menuPadding: 4;
$dark-components-Cascader-optionSelectedFontWeight: 600;
$dark-components-Cascader-fontFamily: SF Pro;
$dark-components-Cascader-borderRadiusLG: 8;
$dark-components-Cascader-optionSelectedColor: rgba(255, 255, 255, 0.85);
$dark-components-Calendar-yearControlWidth: 80;
$dark-components-Calendar-monthControlWidth: 70;
$dark-components-Calendar-controlHeight: 32;
$dark-components-Calendar-screenXS: 480;
$dark-components-Calendar-paddingXXS: 4;
$dark-components-Calendar-paddingXS: 8;
$dark-components-Calendar-paddingSM: 12;
$dark-components-Calendar-padding: 16;
$dark-components-Calendar-marginXXS: 4;
$dark-components-Calendar-marginXS: 8;
$dark-components-Calendar-lineWidthBold: 2;
$dark-components-Calendar-lineWidth: 1;
$dark-components-Calendar-lineHeightSM: 1.6666666666666667;
$dark-components-Calendar-lineHeight: 1.5714285714285714;
$dark-components-Calendar-fontWeightStrong: 600;
$dark-components-Calendar-fontSizeSM: 12;
$dark-components-Calendar-fontSize: 14;
$dark-components-Calendar-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Calendar-controlItemBgActive: #1a2045;
$dark-components-Calendar-controlHeightSM: 24;
$dark-components-Calendar-controlHeightLG: 40;
$dark-components-Calendar-borderRadiusSM: 4;
$dark-components-Calendar-borderRadiusLG: 8;
$dark-components-Calendar-colorTextLightSolid: #ffffff;
$dark-components-Calendar-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Calendar-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Calendar-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Calendar-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Calendar-colorPrimary: #3a55da;
$dark-components-Calendar-colorLinkHover: #627de8;
$dark-components-Calendar-colorLinkActive: #3146ab;
$dark-components-Calendar-colorLink: #3a55da;
$dark-components-Calendar-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Calendar-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Calendar-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Calendar-colorBgContainer: #141414;
$dark-components-Calendar-itemActiveBg: #1a2045;
$dark-components-Calendar-fullPanelBg: #141414;
$dark-components-Calendar-fullBg: #141414;
$dark-components-Calendar-fontHeightSM: 20;
$dark-components-Calendar-fontFamily: SF Pro;
$dark-components-Button-paddingInlineSM: 8;
$dark-components-Button-paddingInlineLG: 12;
$dark-components-Button-paddingInline: 10;
$dark-components-Button-onlyIconSizeSM: 16;
$dark-components-Button-onlyIconSizeLG: 22;
$dark-components-Button-paddingXS: 8;
$dark-components-Button-paddingContentHorizontal: 16;
$dark-components-Button-marginXS: 8;
$dark-components-Button-lineWidthFocus: 4;
$dark-components-Button-lineWidth: 1;
$dark-components-Button-contentLineHeight: 1.5714285714285714;
$dark-components-Button-contentFontSizeLG: 16;
$dark-components-Button-contentFontSize: 14;
$dark-components-Button-controlOutlineWidth: 2;
$dark-components-Button-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-Button-controlHeightSM: 24;
$dark-components-Button-controlHeightLG: 40;
$dark-components-Button-controlHeight: 32;
$dark-components-Button-borderRadiusSM: 4;
$dark-components-Button-borderRadiusLG: 8;
$dark-components-Button-borderRadius: 6;
$dark-components-Button-colorTextLightSolid: #ffffff;
$dark-components-Button-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Button-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Button-colorPrimaryHover: #627de8;
$dark-components-Button-colorPrimaryBorder: #222b5a;
$dark-components-Button-colorPrimaryActive: #3146ab;
$dark-components-Button-colorPrimary: #3a55da;
$dark-components-Button-colorLinkHover: #627de8;
$dark-components-Button-colorLinkActive: #3146ab;
$dark-components-Button-colorLink: #3a55da;
$dark-components-Button-colorErrorOutline: rgba(238, 38, 56, 0.11);
$dark-components-Button-colorErrorHover: #e36561;
$dark-components-Button-colorErrorBorderHover: #752727;
$dark-components-Button-colorErrorBg: #291516;
$dark-components-Button-colorErrorActive: #a02f2f;
$dark-components-Button-colorError: #cc3838;
$dark-components-Button-colorBorder: #424242;
$dark-components-Button-colorBgTextActive: rgba(255, 255, 255, 0.18);
$dark-components-Button-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Button-colorBgContainer: #141414;
$dark-components-Button-textHoverBg: rgba(255, 255, 255, 0.12);
$dark-components-Button-primaryColor: #ffffff;
$dark-components-Button-onlyIconSize: 16;
$dark-components-Button-linkHoverBg: rgba(255, 255, 255, 0);
$dark-components-Button-groupBorderColor: #627de8;
$dark-components-Button-ghostBg: rgba(255, 255, 255, 0);
$dark-components-Button-defaultGhostColor: #141414;
$dark-components-Button-defaultGhostBorderColor: #141414;
$dark-components-Button-defaultColor: rgba(255, 255, 255, 0.85);
$dark-components-Button-defaultBorderColor: #424242;
$dark-components-Button-defaultBg: #141414;
$dark-components-Button-dangerColor: #ffffff;
$dark-components-Button-borderColorDisabled: #424242;
$dark-components-Button-defaultHoverBg: #141414;
$dark-components-Button-defaultHoverColor: #627de8;
$dark-components-Button-defaultHoverBorderColor: #627de8;
$dark-components-Button-defaultActiveBg: #141414;
$dark-components-Button-defaultActiveColor: #3146ab;
$dark-components-Button-defaultActiveBorderColor: #3146ab;
$dark-components-Button-fontWeight: 400;
$dark-components-Button-contentFontSizeSM: 12;
$dark-components-Button-contentLineHeightLG: 1.5;
$dark-components-Button-contentLineHeightSM: 1.8333333333333333;
$dark-components-Button-textTextActiveColor: rgba(255, 255, 255, 0.85);
$dark-components-Button-textTextHoverColor: rgba(255, 255, 255, 0.85);
$dark-components-Button-textTextColor: rgba(255, 255, 255, 0.85);
$dark-components-Button-colorPrimaryBg: #15172b;
$dark-components-Button-colorBgSolid: rgba(255, 255, 255, 0.95);
$dark-components-Button-colorBgSolidActive: rgba(255, 255, 255, 0.9);
$dark-components-Button-colorBgSolidHover: #ffffff;
$dark-components-Button-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-Button-solidTextColor: #000000;
$dark-components-Button-paddingInlineXS: 6;
$dark-components-Button-contentFontSizeXS: 10;
$dark-components-Button-contentLineHeightXS: 1.6;
$dark-components-Button-onlyIconSizeXS: 12;
$dark-components-Button-controlHeightXS: 16;
$dark-components-Button-marginXXS: 4;
$dark-components-Badge-statusSize: 6;
$dark-components-Badge-indicatorHeight: 20;
$dark-components-Badge-dotSize: 6;
$dark-components-Badge-paddingXS: 8;
$dark-components-Badge-marginXS: 8;
$dark-components-Badge-lineWidth: 1;
$dark-components-Badge-borderRadiusSM: 4;
$dark-components-Badge-fontSizeSM: 12;
$dark-components-Badge-fontSize: 14;
$dark-components-Badge-colorWarning: #d89614;
$dark-components-Badge-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-Badge-colorTextLightSolid: #ffffff;
$dark-components-Badge-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Badge-colorSuccess: #22af1c;
$dark-components-Badge-colorPrimary: #3a55da;
$dark-components-Badge-colorErrorHover: #e36561;
$dark-components-Badge-colorError: #cc3838;
$dark-components-Badge-colorBorderBg: #141414;
$dark-components-Badge-colorBgContainer: #141414;
$dark-components-Badge-indicatorHeightSM: 14;
$dark-components-Badge-textFontSize: 12;
$dark-components-Badge-textFontSizeSM: 12;
$dark-components-Badge-fontHeight: 22;
$dark-components-Badge-lineHeight: 1.5714285714285714;
$dark-components-Badge-fontFamily: SF Pro;
$dark-components-Form-screenXSMax: 575;
$dark-components-Form-screenSMMax: 767;
$dark-components-Form-screenMDMax: 991;
$dark-components-Form-screenLGMax: 1199;
$dark-components-Form-paddingXS: 8;
$dark-components-Form-paddingSM: 12;
$dark-components-Form-marginXXS: 4;
$dark-components-Form-marginXS: 8;
$dark-components-Form-marginLG: 24;
$dark-components-Form-margin: 16;
$dark-components-Form-lineWidth: 1;
$dark-components-Form-lineHeight: 1.5714285714285714;
$dark-components-Form-fontSizeLG: 16;
$dark-components-Form-fontSize: 14;
$dark-components-Form-controlOutlineWidth: 2;
$dark-components-Form-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-Form-controlHeightSM: 24;
$dark-components-Form-controlHeightLG: 40;
$dark-components-Form-controlHeight: 32;
$dark-components-Form-colorWarning: #d89614;
$dark-components-Form-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Form-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Form-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Form-colorSuccess: #22af1c;
$dark-components-Form-colorPrimary: #3a55da;
$dark-components-Form-colorError: #cc3838;
$dark-components-Form-colorBorder: #424242;
$dark-components-Form-labelRequiredMarkColor: #cc3838;
$dark-components-Form-labelColor: rgba(255, 255, 255, 0.85);
$dark-components-Form-itemMarginBottom: 24;
$dark-components-Form-labelColonMarginInlineEnd: 8;
$dark-components-Form-labelColonMarginInlineStart: 2;
$dark-components-Form-labelHeight: 32;
$dark-components-Form-labelFontSize: 14;
$dark-components-Form-fontFamily: SF Pro;
$dark-components-Avatar-marginXXS: 4;
$dark-components-Avatar-marginXS: 8;
$dark-components-Avatar-lineWidth: 1;
$dark-components-Avatar-lineHeight: 1.5714285714285714;
$dark-components-Avatar-fontSizeXL: 20;
$dark-components-Avatar-fontSizeLG: 16;
$dark-components-Avatar-fontSizeHeading3: 24;
$dark-components-Avatar-fontSize: 14;
$dark-components-Avatar-borderRadiusSM: 4;
$dark-components-Avatar-borderRadiusLG: 8;
$dark-components-Avatar-borderRadius: 6;
$dark-components-Avatar-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-Avatar-colorTextLightSolid: #ffffff;
$dark-components-Avatar-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Avatar-colorBorderBg: #141414;
$dark-components-Avatar-containerSizeSM: 24;
$dark-components-Avatar-containerSizeLG: 40;
$dark-components-Avatar-containerSize: 32;
$dark-components-Avatar-textFontSize: 18;
$dark-components-Avatar-textFontSizeLG: 24;
$dark-components-Avatar-textFontSizeSM: 14;
$dark-components-Avatar-fontFamily: SF Pro;
$dark-components-Tour-sizePopupArrow: 16;
$dark-components-Tour-paddingXS: 8;
$dark-components-Tour-padding: 16;
$dark-components-Tour-marginXS: 8;
$dark-components-Tour-lineHeight: 1.5714285714285714;
$dark-components-Tour-fontWeightStrong: 600;
$dark-components-Tour-fontSize: 14;
$dark-components-Tour-borderRadiusXS: 2;
$dark-components-Tour-borderRadiusSM: 4;
$dark-components-Tour-borderRadiusLG: 8;
$dark-components-Tour-borderRadius: 6;
$dark-components-Tour-colorWhite: #ffffff;
$dark-components-Tour-colorTextLightSolid: #ffffff;
$dark-components-Tour-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Tour-colorPrimary: #3a55da;
$dark-components-Tour-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Tour-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Tour-colorFill: rgba(255, 255, 255, 0.18);
$dark-components-Tour-colorBgTextHover: rgba(255, 255, 255, 0.12);
$dark-components-Tour-colorBgElevated: #1f1f1f;
$dark-components-Tour-closeBtnSize: 22;
$dark-components-Tour-primaryNextBtnHoverBg: #f0f0f0;
$dark-components-Tour-primaryPrevBtnBg: rgba(255, 255, 255, 0.15);
$dark-components-Tour-fontFamily: SF Pro;
$dark-components-Tour-lineWidthFocus: 4;
$dark-components-QRCode-paddingSM: 12;
$dark-components-QRCode-marginXS: 8;
$dark-components-QRCode-lineWidth: 1;
$dark-components-QRCode-lineHeight: 1.5714285714285714;
$dark-components-QRCode-fontSize: 14;
$dark-components-QRCode-controlHeight: 32;
$dark-components-QRCode-borderRadiusLG: 8;
$dark-components-QRCode-colorWhite: #ffffff;
$dark-components-QRCode-colorText: rgba(255, 255, 255, 0.85);
$dark-components-QRCode-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-QRCode-fontFamily: SF Pro;
$dark-components-Upload-paddingXS: 8;
$dark-components-Upload-paddingSM: 12;
$dark-components-Upload-padding: 16;
$dark-components-Upload-marginXXS: 4;
$dark-components-Upload-marginXS: 8;
$dark-components-Upload-marginXL: 32;
$dark-components-Upload-margin: 16;
$dark-components-Upload-lineWidth: 1;
$dark-components-Upload-lineHeight: 1.3333333333333333;
$dark-components-Upload-fontSizeLG: 16;
$dark-components-Upload-fontSizeHeading3: 24;
$dark-components-Upload-fontSizeHeading2: 30;
$dark-components-Upload-fontSize: 12;
$dark-components-Upload-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Upload-controlHeightLG: 40;
$dark-components-Upload-borderRadiusLG: 8;
$dark-components-Upload-colorTextLightSolid: #ffffff;
$dark-components-Upload-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Upload-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Upload-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Upload-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Upload-colorPrimaryHover: #627de8;
$dark-components-Upload-colorPrimary: #3a55da;
$dark-components-Upload-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Upload-colorErrorBg: #291516;
$dark-components-Upload-colorError: #cc3838;
$dark-components-Upload-colorBorder: #424242;
$dark-components-Upload-colorBgMask: rgba(0, 0, 0, 0.45);
$dark-components-Upload-fontHeight: 22;
$dark-components-Upload-fontHeightSM: 20;
$dark-components-Upload-lineWidthFocus: 4;
$dark-components-Upload-fontFamily: SF Pro;
$dark-components-Typography-paddingSM: 12;
$dark-components-Typography-marginXXS: 4;
$dark-components-Typography-marginXS: 8;
$dark-components-Typography-lineWidth: 1;
$dark-components-Typography-lineHeightHeading5: 1.5;
$dark-components-Typography-lineHeightHeading4: 1.4;
$dark-components-Typography-lineHeightHeading3: 1.3333333333333333;
$dark-components-Typography-lineHeightHeading2: 1.2666666666666666;
$dark-components-Typography-lineHeightHeading1: 1.2105263157894737;
$dark-components-Typography-lineHeight: 1.5714285714285714;
$dark-components-Typography-fontWeightStrong: 600;
$dark-components-Typography-fontSizeHeading5: 16;
$dark-components-Typography-fontSizeHeading4: 20;
$dark-components-Typography-fontSizeHeading3: 24;
$dark-components-Typography-fontSizeHeading2: 30;
$dark-components-Typography-fontSizeHeading1: 38;
$dark-components-Typography-fontSize: 14;
$dark-components-Typography-colorWarning: #d89614;
$dark-components-Typography-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Typography-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Typography-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Typography-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Typography-colorSuccess: #22af1c;
$dark-components-Typography-colorLinkHover: #627de8;
$dark-components-Typography-colorLinkActive: #3146ab;
$dark-components-Typography-colorLink: #3a55da;
$dark-components-Typography-colorErrorHover: #e36561;
$dark-components-Typography-colorErrorActive: #a02f2f;
$dark-components-Typography-colorError: #cc3838;
$dark-components-Typography-fontFamilyCode: Courier Prime;
$dark-components-TreeSelect-paddingXS: 8;
$dark-components-TreeSelect-marginXXS: 4;
$dark-components-TreeSelect-marginXS: 8;
$dark-components-TreeSelect-lineWidthFocus: 4;
$dark-components-TreeSelect-lineWidthBold: 2;
$dark-components-TreeSelect-lineWidth: 1;
$dark-components-TreeSelect-lineHeight: 1.5714285714285714;
$dark-components-TreeSelect-fontSizeLG: 16;
$dark-components-TreeSelect-fontSize: 14;
$dark-components-TreeSelect-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-TreeSelect-controlItemBgActive: #1a2045;
$dark-components-TreeSelect-controlInteractiveSize: 16;
$dark-components-TreeSelect-controlHeightSM: 24;
$dark-components-TreeSelect-borderRadiusSM: 4;
$dark-components-TreeSelect-borderRadius: 6;
$dark-components-TreeSelect-colorWhite: #ffffff;
$dark-components-TreeSelect-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-TreeSelect-colorText: rgba(255, 255, 255, 0.85);
$dark-components-TreeSelect-colorPrimaryHover: #627de8;
$dark-components-TreeSelect-colorPrimaryBorder: #222b5a;
$dark-components-TreeSelect-colorPrimary: #3a55da;
$dark-components-TreeSelect-colorBorder: #424242;
$dark-components-TreeSelect-colorBgElevated: #1f1f1f;
$dark-components-TreeSelect-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-TreeSelect-colorBgContainer: #141414;
$dark-components-TreeSelect-titleHeight: 24;
$dark-components-TreeSelect-nodeSelectedBg: #1a2045;
$dark-components-TreeSelect-nodeHoverBg: rgba(255, 255, 255, 0.08);
$dark-components-TreeSelect-fontFamily: SF Pro;
$dark-components-TreeSelect-borderRadiusLG: 8;
$dark-components-Tree-paddingSM: 12;
$dark-components-Tree-borderRadiusLG: 8;
$dark-components-Tree-paddingXS: 8;
$dark-components-Tree-marginXXS: 4;
$dark-components-Tree-marginXS: 8;
$dark-components-Tree-lineWidthFocus: 4;
$dark-components-Tree-lineWidthBold: 2;
$dark-components-Tree-lineWidth: 1;
$dark-components-Tree-lineHeight: 1.5714285714285714;
$dark-components-Tree-fontSizeLG: 16;
$dark-components-Tree-fontSize: 14;
$dark-components-Tree-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Tree-controlItemBgActive: #1a2045;
$dark-components-Tree-controlInteractiveSize: 16;
$dark-components-Tree-controlHeightSM: 24;
$dark-components-Tree-borderRadiusSM: 4;
$dark-components-Tree-borderRadius: 6;
$dark-components-Tree-colorWhite: #ffffff;
$dark-components-Tree-colorTextLightSolid: #ffffff;
$dark-components-Tree-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Tree-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Tree-colorPrimaryHover: #627de8;
$dark-components-Tree-colorPrimaryBorder: #222b5a;
$dark-components-Tree-colorPrimary: #3a55da;
$dark-components-Tree-colorBorder: #424242;
$dark-components-Tree-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Tree-colorBgContainer: #141414;
$dark-components-Tree-titleHeight: 24;
$dark-components-Tree-nodeSelectedBg: #1a2045;
$dark-components-Tree-nodeHoverBg: rgba(255, 255, 255, 0.08);
$dark-components-Tree-directoryNodeSelectedColor: #ffffff;
$dark-components-Tree-directoryNodeSelectedBg: #3a55da;
$dark-components-Tree-fontFamily: SF Pro;
$dark-components-Tree-nodeHoverColor: rgba(255, 255, 255, 0.85);
$dark-components-Tree-nodeSelectedColor: rgba(255, 255, 255, 0.85);
$dark-components-Tree-indentSize: 24;
$dark-components-Tag-paddingXXS: 4;
$dark-components-Tag-marginXS: 8;
$dark-components-Tag-lineWidth: 1;
$dark-components-Tag-lineHeightSM: 1.6666666666666667;
$dark-components-Tag-lineHeight: 1.5714285714285714;
$dark-components-Tag-fontSizeSM: 12;
$dark-components-Tag-fontSizeIcon: 12;
$dark-components-Tag-fontSize: 14;
$dark-components-Tag-borderRadiusSM: 4;
$dark-components-Tag-colorTextLightSolid: #ffffff;
$dark-components-Tag-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Tag-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Tag-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Tag-colorPrimaryHover: #627de8;
$dark-components-Tag-colorPrimaryActive: #3146ab;
$dark-components-Tag-colorPrimary: #3a55da;
$dark-components-Tag-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-Tag-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Tag-colorFillQuaternary: rgba(255, 255, 255, 0.04);
$dark-components-Tag-colorBorder: #424242;
$dark-components-Tag-colorWarningBorder: #594214;
$dark-components-Tag-colorWarningBg: #2b2111;
$dark-components-Tag-colorSuccessBorder: #194b17;
$dark-components-Tag-colorSuccessBg: #122412;
$dark-components-Tag-colorInfoBorder: #222b5a;
$dark-components-Tag-colorInfoBg: #15172b;
$dark-components-Tag-colorErrorBorder: #552121;
$dark-components-Tag-colorErrorBg: #291516;
$dark-components-Tag-defaultColor: rgba(255, 255, 255, 0.85);
$dark-components-Tag-defaultBg: rgba(255, 255, 255, 0.04);
$dark-components-Tag-fontFamily: SF Pro;
$dark-components-Statistic-padding: 16;
$dark-components-Statistic-marginXXS: 4;
$dark-components-Statistic-lineHeight: 1.5714285714285714;
$dark-components-Statistic-fontSizeHeading3: 24;
$dark-components-Statistic-fontSize: 14;
$dark-components-Statistic-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Statistic-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Statistic-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Statistic-contentFontSize: 24;
$dark-components-Statistic-titleFontSize: 14;
$dark-components-Statistic-fontFamily: SF Pro;
$dark-components-Skeleton-padding: 16;
$dark-components-Skeleton-marginXXS: 4;
$dark-components-Skeleton-marginSM: 12;
$dark-components-Skeleton-marginLG: 24;
$dark-components-Skeleton-controlHeightXS: 16;
$dark-components-Skeleton-controlHeightSM: 24;
$dark-components-Skeleton-controlHeightLG: 40;
$dark-components-Skeleton-controlHeight: 32;
$dark-components-Skeleton-borderRadiusSM: 4;
$dark-components-Skeleton-colorFillContent: rgba(255, 255, 255, 0.12);
$dark-components-Skeleton-colorFill: rgba(255, 255, 255, 0.18);
$dark-components-Select-paddingXXS: 4;
$dark-components-Select-paddingXS: 8;
$dark-components-Select-paddingSM: 12;
$dark-components-Select-lineWidth: 1;
$dark-components-Select-lineHeight: 1.5714285714285714;
$dark-components-Select-fontWeightStrong: 600;
$dark-components-Select-fontSizeSM: 12;
$dark-components-Select-fontSizeLG: 16;
$dark-components-Select-fontSizeIcon: 12;
$dark-components-Select-fontSize: 14;
$dark-components-Select-controlPaddingHorizontalSM: 8;
$dark-components-Select-controlPaddingHorizontal: 12;
$dark-components-Select-controlOutlineWidth: 2;
$dark-components-Select-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-Select-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Select-controlItemBgActive: #1a2045;
$dark-components-Select-controlHeightXS: 16;
$dark-components-Select-controlHeightSM: 24;
$dark-components-Select-controlHeightLG: 40;
$dark-components-Select-controlHeight: 32;
$dark-components-Select-borderRadiusXS: 2;
$dark-components-Select-borderRadiusSM: 4;
$dark-components-Select-borderRadiusLG: 8;
$dark-components-Select-borderRadius: 6;
$dark-components-Select-colorWarningOutline: rgba(173, 107, 0, 0.15);
$dark-components-Select-colorWarningHover: #7c5914;
$dark-components-Select-colorTextTertiary: rgba(255, 255, 255, 0.45);
$dark-components-Select-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-components-Select-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-Select-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Select-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Select-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Select-colorPrimaryHover: #627de8;
$dark-components-Select-colorPrimary: #3a55da;
$dark-components-Select-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Select-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Select-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Select-colorErrorOutline: rgba(238, 38, 56, 0.11);
$dark-components-Select-colorErrorHover: #e36561;
$dark-components-Select-colorBorder: #424242;
$dark-components-Select-colorBgElevated: #1f1f1f;
$dark-components-Select-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Select-colorBgContainer: #141414;
$dark-components-Select-singleItemHeightLG: 40;
$dark-components-Select-selectorBg: #141414;
$dark-components-Select-optionSelectedColor: rgba(255, 255, 255, 0.85);
$dark-components-Select-optionSelectedBg: #1a2045;
$dark-components-Select-optionHeight: 32;
$dark-components-Select-optionActiveBg: rgba(255, 255, 255, 0.08);
$dark-components-Select-multipleSelectorBgDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Select-multipleItemHeightLG: 32;
$dark-components-Select-multipleItemHeight: 24;
$dark-components-Select-multipleItemColorDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Select-multipleItemBorderColorDisabled: rgba(255, 255, 255, 0);
$dark-components-Select-multipleItemBorderColor: rgba(255, 255, 255, 0);
$dark-components-Select-multipleItemBg: rgba(255, 255, 255, 0.12);
$dark-components-Select-clearBg: #141414;
$dark-components-Select-optionSelectedFontWeight: 600;
$dark-components-Select-fontFamily: SF Pro;
$dark-components-Select-showArrowPaddingInlineEnd: 18;
$dark-components-Select-activeBorderColor: #3a55da;
$dark-components-Select-hoverBorderColor: #627de8;
$dark-components-Select-colorErrorBg: #291516;
$dark-components-Select-colorErrorBgHover: #411a1b;
$dark-components-Select-colorWarningBg: #2b2111;
$dark-components-Select-colorWarningBgHover: #443111;
$dark-components-Select-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-Select-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Select-colorWarning: #d89614;
$dark-components-Select-colorError: #cc3838;
$dark-components-Result-paddingXS: 8;
$dark-components-Result-paddingXL: 32;
$dark-components-Result-paddingLG: 24;
$dark-components-Result-padding: 16;
$dark-components-Result-marginXS: 8;
$dark-components-Result-lineHeightHeading3: 1.3333333333333333;
$dark-components-Result-lineHeight: 1.5714285714285714;
$dark-components-Result-fontSizeHeading3: 24;
$dark-components-Result-fontSize: 14;
$dark-components-Result-colorWarning: #d89614;
$dark-components-Result-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Result-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Result-colorSuccess: #22af1c;
$dark-components-Result-colorInfo: #3a55da;
$dark-components-Result-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Result-colorError: #cc3838;
$dark-components-Result-iconFontSize: 72;
$dark-components-Result-subtitleFontSize: 14;
$dark-components-Result-titleFontSize: 24;
$dark-components-Progress-paddingXS: 8;
$dark-components-Progress-marginXXS: 4;
$dark-components-Progress-marginXS: 8;
$dark-components-Progress-lineHeight: 1.5714285714285714;
$dark-components-Progress-fontSizeSM: 12;
$dark-components-Progress-fontSize: 14;
$dark-components-Progress-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Progress-colorSuccess: #22af1c;
$dark-components-Progress-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Progress-colorError: #cc3838;
$dark-components-Progress-colorBgContainer: #141414;
$dark-components-Progress-remainingColor: rgba(255, 255, 255, 0.12);
$dark-components-Progress-defaultColor: #3a55da;
$dark-components-Progress-circleTextColor: rgba(255, 255, 255, 0.85);
$dark-components-Progress-fontFamily: SF Pro;
$dark-components-Popconfirm-marginXXS: 4;
$dark-components-Popconfirm-marginXS: 8;
$dark-components-Popconfirm-fontWeightStrong: 600;
$dark-components-Popconfirm-fontSize: 14;
$dark-components-Popconfirm-colorWarning: #d89614;
$dark-components-Popconfirm-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Popconfirm-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Pagination-screenSM: 576;
$dark-components-Pagination-screenLG: 992;
$dark-components-Pagination-paddingXXS: 4;
$dark-components-Pagination-paddingSM: 12;
$dark-components-Pagination-marginXXS: 4;
$dark-components-Pagination-marginXS: 8;
$dark-components-Pagination-marginSM: 12;
$dark-components-Pagination-margin: 16;
$dark-components-Pagination-lineWidthFocus: 4;
$dark-components-Pagination-lineWidth: 1;
$dark-components-Pagination-lineHeightLG: 1.5;
$dark-components-Pagination-lineHeight: 1.5714285714285714;
$dark-components-Pagination-fontWeightStrong: 600;
$dark-components-Pagination-fontSizeSM: 12;
$dark-components-Pagination-fontSizeLG: 16;
$dark-components-Pagination-fontSize: 14;
$dark-components-Pagination-controlPaddingHorizontalSM: 8;
$dark-components-Pagination-controlPaddingHorizontal: 12;
$dark-components-Pagination-controlOutlineWidth: 2;
$dark-components-Pagination-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-Pagination-controlItemBgActiveDisabled: rgba(255, 255, 255, 0.18);
$dark-components-Pagination-controlHeightSM: 24;
$dark-components-Pagination-controlHeightLG: 40;
$dark-components-Pagination-controlHeight: 32;
$dark-components-Pagination-borderRadiusSM: 4;
$dark-components-Pagination-borderRadiusLG: 8;
$dark-components-Pagination-borderRadius: 6;
$dark-components-Pagination-colorWarningOutline: rgba(173, 107, 0, 0.15);
$dark-components-Pagination-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-Pagination-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Pagination-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Pagination-colorPrimaryHover: #627de8;
$dark-components-Pagination-colorPrimaryBorder: #222b5a;
$dark-components-Pagination-colorPrimary: #3a55da;
$dark-components-Pagination-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Pagination-colorErrorOutline: rgba(238, 38, 56, 0.11);
$dark-components-Pagination-colorBorder: #424242;
$dark-components-Pagination-colorBgTextHover: rgba(255, 255, 255, 0.12);
$dark-components-Pagination-colorBgTextActive: rgba(255, 255, 255, 0.18);
$dark-components-Pagination-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Pagination-colorBgContainer: #141414;
$dark-components-Pagination-itemSizeSM: 24;
$dark-components-Pagination-itemSize: 32;
$dark-components-Pagination-itemLinkBg: #141414;
$dark-components-Pagination-itemInputBg: #141414;
$dark-components-Pagination-itemBg: #141414;
$dark-components-Pagination-itemActiveColorDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Pagination-itemActiveBgDisabled: rgba(255, 255, 255, 0.18);
$dark-components-Pagination-itemActiveBg: #141414;
$dark-components-Pagination-fontFamily: SF Pro;
$dark-components-Modal-screenSMMax: 767;
$dark-components-Modal-paddingXS: 8;
$dark-components-Modal-paddingMD: 20;
$dark-components-Modal-paddingLG: 24;
$dark-components-Modal-paddingContentHorizontalLG: 24;
$dark-components-Modal-padding: 16;
$dark-components-Modal-marginXS: 8;
$dark-components-Modal-marginSM: 12;
$dark-components-Modal-marginLG: 24;
$dark-components-Modal-margin: 16;
$dark-components-Modal-lineWidthFocus: 4;
$dark-components-Modal-lineWidth: 1;
$dark-components-Modal-lineHeightHeading5: 1.5;
$dark-components-Modal-lineHeight: 1.5714285714285714;
$dark-components-Modal-fontWeightStrong: 600;
$dark-components-Modal-fontSizeLG: 16;
$dark-components-Modal-fontSizeHeading5: 16;
$dark-components-Modal-fontSize: 14;
$dark-components-Modal-borderRadiusSM: 4;
$dark-components-Modal-borderRadiusLG: 8;
$dark-components-Modal-colorWarning: #d89614;
$dark-components-Modal-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Modal-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Modal-colorSuccess: #22af1c;
$dark-components-Modal-colorPrimaryBorder: #222b5a;
$dark-components-Modal-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Modal-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Modal-colorBgMask: rgba(0, 0, 0, 0.45);
$dark-components-Modal-titleColor: rgba(255, 255, 255, 0.85);
$dark-components-Modal-headerBg: #1f1f1f;
$dark-components-Modal-footerBg: rgba(255, 255, 255, 0);
$dark-components-Modal-contentBg: #1f1f1f;
$dark-components-Modal-titleFontSize: 16;
$dark-components-Modal-titleLineHeight: 1.375;
$dark-components-Modal-fontHeight: 22;
$dark-components-Modal-fontFamily: SF Pro;
$dark-components-Message-paddingXS: 8;
$dark-components-Message-paddingSM: 12;
$dark-components-Message-marginXS: 8;
$dark-components-Message-lineHeight: 1.5714285714285714;
$dark-components-Message-fontSizeLG: 16;
$dark-components-Message-fontSize: 14;
$dark-components-Message-controlHeightLG: 40;
$dark-components-Message-borderRadiusLG: 8;
$dark-components-Message-colorWarning: #d89614;
$dark-components-Message-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Message-colorSuccess: #22af1c;
$dark-components-Message-colorInfo: #3a55da;
$dark-components-Message-colorError: #cc3838;
$dark-components-Message-contentBg: #1f1f1f;
$dark-components-Message-fontFamily: SF Pro;
$dark-components-List-screenSM: 576;
$dark-components-List-screenMD: 768;
$dark-components-List-paddingXS: 8;
$dark-components-List-paddingSM: 12;
$dark-components-List-paddingLG: 24;
$dark-components-List-paddingContentVerticalSM: 8;
$dark-components-List-paddingContentVerticalLG: 16;
$dark-components-List-paddingContentVertical: 12;
$dark-components-List-paddingContentHorizontalLG: 24;
$dark-components-List-paddingContentHorizontal: 16;
$dark-components-List-padding: 16;
$dark-components-List-marginXXS: 4;
$dark-components-List-marginXXL: 48;
$dark-components-List-marginSM: 12;
$dark-components-List-marginLG: 24;
$dark-components-List-margin: 16;
$dark-components-List-lineWidth: 1;
$dark-components-List-lineHeightLG: 1.5;
$dark-components-List-lineHeight: 1.5714285714285714;
$dark-components-List-fontSizeSM: 12;
$dark-components-List-fontSizeLG: 16;
$dark-components-List-fontSize: 14;
$dark-components-List-controlHeightLG: 40;
$dark-components-List-controlHeight: 32;
$dark-components-List-borderRadiusLG: 8;
$dark-components-List-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-List-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-List-colorText: rgba(255, 255, 255, 0.85);
$dark-components-List-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-List-colorPrimary: #3a55da;
$dark-components-List-colorBorder: #424242;
$dark-components-List-headerBg: rgba(255, 255, 255, 0);
$dark-components-List-footerBg: rgba(255, 255, 255, 0);
$dark-components-List-avatarMarginRight: 8;
$dark-components-List-descriptionFontSize: 12;
$dark-components-List-fontFamily: SF Pro;
$dark-components-FloatButton-paddingXXS: 4;
$dark-components-FloatButton-marginXXL: 48;
$dark-components-FloatButton-marginLG: 24;
$dark-components-FloatButton-margin: 16;
$dark-components-FloatButton-lineWidth: 1;
$dark-components-FloatButton-lineHeight: 1.5714285714285714;
$dark-components-FloatButton-fontSizeSM: 12;
$dark-components-FloatButton-fontSizeLG: 16;
$dark-components-FloatButton-fontSizeIcon: 12;
$dark-components-FloatButton-fontSize: 14;
$dark-components-FloatButton-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-FloatButton-controlHeightLG: 40;
$dark-components-FloatButton-borderRadiusSM: 4;
$dark-components-FloatButton-borderRadiusLG: 8;
$dark-components-FloatButton-colorTextLightSolid: #ffffff;
$dark-components-FloatButton-colorText: rgba(255, 255, 255, 0.85);
$dark-components-FloatButton-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-FloatButton-colorPrimaryHover: #627de8;
$dark-components-FloatButton-colorPrimary: #3a55da;
$dark-components-FloatButton-colorFillContent: rgba(255, 255, 255, 0.12);
$dark-components-FloatButton-colorBgElevated: #1f1f1f;
$dark-components-FloatButton-fontFamily: SF Pro;
$dark-components-Empty-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Empty-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Empty-fontSize: 14;
$dark-components-Empty-lineHeight: 1.5714285714285714;
$dark-components-Dropdown-sizePopupArrow: 16;
$dark-components-Dropdown-paddingXXS: 4;
$dark-components-Dropdown-paddingXS: 8;
$dark-components-Dropdown-marginXXS: 4;
$dark-components-Dropdown-marginXS: 8;
$dark-components-Dropdown-lineWidthFocus: 4;
$dark-components-Dropdown-lineHeight: 1.5714285714285714;
$dark-components-Dropdown-fontSizeSM: 12;
$dark-components-Dropdown-fontSizeIcon: 12;
$dark-components-Dropdown-fontSize: 14;
$dark-components-Dropdown-controlPaddingHorizontal: 12;
$dark-components-Dropdown-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Dropdown-controlItemBgActiveHover: #1a2045;
$dark-components-Dropdown-controlItemBgActive: #1a2045;
$dark-components-Dropdown-controlHeight: 32;
$dark-components-Dropdown-borderRadiusXS: 2;
$dark-components-Dropdown-borderRadiusSM: 4;
$dark-components-Dropdown-borderRadiusLG: 8;
$dark-components-Dropdown-colorTextLightSolid: #ffffff;
$dark-components-Dropdown-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Dropdown-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Dropdown-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Dropdown-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Dropdown-colorPrimaryBorder: #222b5a;
$dark-components-Dropdown-colorPrimary: #3a55da;
$dark-components-Dropdown-colorError: #cc3838;
$dark-components-Dropdown-colorBgElevated: #1f1f1f;
$dark-components-Dropdown-paddingBlock: 5;
$dark-components-Dropdown-fontFamily: SF Pro;
$dark-components-Drawer-paddingXS: 8;
$dark-components-Drawer-paddingLG: 24;
$dark-components-Drawer-padding: 16;
$dark-components-Drawer-marginSM: 12;
$dark-components-Drawer-lineWidth: 1;
$dark-components-Drawer-lineHeightLG: 1.5;
$dark-components-Drawer-fontWeightStrong: 600;
$dark-components-Drawer-fontSizeLG: 16;
$dark-components-Drawer-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Drawer-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Drawer-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Drawer-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Drawer-colorBgMask: rgba(0, 0, 0, 0.45);
$dark-components-Drawer-colorBgElevated: #1f1f1f;
$dark-components-Drawer-lineWidthFocus: 4;
$dark-components-Divider-marginXS: 8;
$dark-components-Divider-marginLG: 24;
$dark-components-Divider-margin: 16;
$dark-components-Divider-lineWidth: 1;
$dark-components-Divider-fontSizeLG: 16;
$dark-components-Divider-fontSize: 14;
$dark-components-Divider-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Divider-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Divider-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Divider-lineHeight: 1.5714285714285714;
$dark-components-Divider-fontFamily: SF Pro;
$dark-components-Descriptions-paddingXS: 8;
$dark-components-Descriptions-paddingSM: 12;
$dark-components-Descriptions-paddingLG: 24;
$dark-components-Descriptions-padding: 16;
$dark-components-Descriptions-marginXXS: 4;
$dark-components-Descriptions-marginXS: 8;
$dark-components-Descriptions-lineWidth: 1;
$dark-components-Descriptions-lineHeightSM: 1.6666666666666667;
$dark-components-Descriptions-lineHeightLG: 1.5;
$dark-components-Descriptions-lineHeight: 1.5714285714285714;
$dark-components-Descriptions-fontWeightStrong: 600;
$dark-components-Descriptions-fontSizeSM: 12;
$dark-components-Descriptions-fontSizeLG: 16;
$dark-components-Descriptions-fontSize: 14;
$dark-components-Descriptions-borderRadiusLG: 8;
$dark-components-Descriptions-colorTextTertiary: rgba(255, 255, 255, 0.45);
$dark-components-Descriptions-colorTextSecondary: rgba(255, 255, 255, 0.65);
$dark-components-Descriptions-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Descriptions-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Descriptions-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Descriptions-titleColor: rgba(255, 255, 255, 0.85);
$dark-components-Descriptions-labelBg: rgba(255, 255, 255, 0.04);
$dark-components-Descriptions-contentColor: rgba(255, 255, 255, 0.85);
$dark-components-Descriptions-fontFamily: SF Pro;
$dark-components-Descriptions-labelColor: rgba(255, 255, 255, 0.45);
$dark-components-DatePicker-sizePopupArrow: 16;
$dark-components-DatePicker-paddingXXS: 4;
$dark-components-DatePicker-paddingXS: 8;
$dark-components-DatePicker-paddingSM: 12;
$dark-components-DatePicker-padding: 16;
$dark-components-DatePicker-marginXXS: 4;
$dark-components-DatePicker-marginXS: 8;
$dark-components-DatePicker-lineWidthBold: 2;
$dark-components-DatePicker-lineWidth: 1;
$dark-components-DatePicker-lineHeightLG: 1.5;
$dark-components-DatePicker-lineHeight: 1.5714285714285714;
$dark-components-DatePicker-fontWeightStrong: 600;
$dark-components-DatePicker-fontSizeLG: 16;
$dark-components-DatePicker-fontSize: 14;
$dark-components-DatePicker-controlPaddingHorizontalSM: 8;
$dark-components-DatePicker-controlPaddingHorizontal: 12;
$dark-components-DatePicker-controlOutlineWidth: 2;
$dark-components-DatePicker-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-DatePicker-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-DatePicker-controlItemBgActive: #1a2045;
$dark-components-DatePicker-controlHeightSM: 24;
$dark-components-DatePicker-controlHeightLG: 40;
$dark-components-DatePicker-controlHeight: 32;
$dark-components-DatePicker-borderRadiusXS: 2;
$dark-components-DatePicker-borderRadiusSM: 4;
$dark-components-DatePicker-borderRadiusLG: 8;
$dark-components-DatePicker-borderRadius: 6;
$dark-components-DatePicker-colorWarningOutline: rgba(173, 107, 0, 0.15);
$dark-components-DatePicker-colorWarningHover: #7c5914;
$dark-components-DatePicker-colorWarning: #d89614;
$dark-components-DatePicker-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-components-DatePicker-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-DatePicker-colorTextLightSolid: #ffffff;
$dark-components-DatePicker-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-DatePicker-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-DatePicker-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-DatePicker-colorText: rgba(255, 255, 255, 0.85);
$dark-components-DatePicker-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-DatePicker-colorPrimaryHover: #627de8;
$dark-components-DatePicker-colorPrimaryBorder: #222b5a;
$dark-components-DatePicker-colorPrimary: #3a55da;
$dark-components-DatePicker-colorLinkHover: #627de8;
$dark-components-DatePicker-colorLinkActive: #3146ab;
$dark-components-DatePicker-colorLink: #3a55da;
$dark-components-DatePicker-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-DatePicker-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-DatePicker-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-DatePicker-colorErrorOutline: rgba(238, 38, 56, 0.11);
$dark-components-DatePicker-colorErrorHover: #e36561;
$dark-components-DatePicker-colorError: #cc3838;
$dark-components-DatePicker-colorBorder: #424242;
$dark-components-DatePicker-colorBgElevated: #1f1f1f;
$dark-components-DatePicker-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-DatePicker-colorBgContainer: #141414;
$dark-components-DatePicker-hoverBorderColor: #627de8;
$dark-components-DatePicker-cellHoverBg: rgba(255, 255, 255, 0.08);
$dark-components-DatePicker-cellHeight: 24;
$dark-components-DatePicker-activeBorderColor: #3a55da;
$dark-components-DatePicker-paddingInline: 11;
$dark-components-DatePicker-paddingInlineSM: 7;
$dark-components-DatePicker-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-DatePicker-colorErrorBg: #291516;
$dark-components-DatePicker-colorWarningBg: #2b2111;
$dark-components-DatePicker-colorWarningText: #d89614;
$dark-components-DatePicker-colorErrorText: #cc3838;
$dark-components-DatePicker-colorWarningBgHover: #443111;
$dark-components-DatePicker-colorErrorBgHover: #411a1b;
$dark-components-DatePicker-activeBg: #141414;
$dark-components-DatePicker-hoverBg: #141414;
$dark-components-DatePicker-cellBgDisabled: rgba(255, 255, 255, 0.08);
$dark-components-DatePicker-cellActiveWithRangeBg: #1a2045;
$dark-components-DatePicker-cellHoverWithRangeBg: #c8dfff;
$dark-components-DatePicker-cellRangeBorderColor: #7cb3ff;
$dark-components-DatePicker-multipleItemBg: rgba(255, 255, 255, 0.12);
$dark-components-DatePicker-multipleItemBorderColor: rgba(255, 255, 255, 0);
$dark-components-DatePicker-multipleItemBorderColorDisabled: rgba(255, 255, 255, 0);
$dark-components-DatePicker-multipleItemColorDisabled: rgba(255, 255, 255, 0.25);
$dark-components-DatePicker-multipleSelectorBgDisabled: rgba(255, 255, 255, 0.08);
$dark-components-DatePicker-cellWidth: 36;
$dark-components-DatePicker-multipleItemHeight: 24;
$dark-components-DatePicker-multipleItemHeightLG: 32;
$dark-components-DatePicker-multipleItemHeightSM: 16;
$dark-components-DatePicker-paddingBlock: 4;
$dark-components-DatePicker-paddingBlockLG: 7;
$dark-components-DatePicker-paddingBlockSM: 0;
$dark-components-DatePicker-paddingInline-2: 11;
$dark-components-DatePicker-presetsMaxWidth: 200;
$dark-components-DatePicker-presetsWidth: 120;
$dark-components-DatePicker-textHeight: 40;
$dark-components-DatePicker-timeCellHeight: 28;
$dark-components-DatePicker-timeColumnHeight: 224;
$dark-components-DatePicker-timeColumnWidth: 56;
$dark-components-DatePicker-withoutTimeCellHeight: 66;
$dark-components-DatePicker-inputFontSize: 14;
$dark-components-DatePicker-inputFontSizeLG: 16;
$dark-components-DatePicker-inputFontSizeSM: 12;
$dark-components-DatePicker-fontHeight: 22;
$dark-components-DatePicker-fontHeightLG: 24;
$dark-components-DatePicker-fontFamily: SF Pro;
$dark-components-DatePicker-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Collapse-paddingXXS: 4;
$dark-components-Collapse-paddingXS: 8;
$dark-components-Collapse-paddingSM: 12;
$dark-components-Collapse-paddingLG: 24;
$dark-components-Collapse-padding: 16;
$dark-components-Collapse-marginSM: 12;
$dark-components-Collapse-lineWidth: 1;
$dark-components-Collapse-lineHeight: 1.5714285714285714;
$dark-components-Collapse-fontSizeLG: 16;
$dark-components-Collapse-fontSizeIcon: 12;
$dark-components-Collapse-fontSize: 14;
$dark-components-Collapse-borderRadiusLG: 8;
$dark-components-Collapse-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Collapse-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Collapse-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Collapse-colorFillAlter: rgba(255, 255, 255, 0.04);
$dark-components-Collapse-colorBorder: #424242;
$dark-components-Collapse-colorBgContainer: #141414;
$dark-components-Collapse-headerBg: rgba(255, 255, 255, 0.04);
$dark-components-Collapse-contentBg: #141414;
$dark-components-Collapse-fontHeight: 22;
$dark-components-Collapse-fontHeightLG: 24;
$dark-components-Collapse-lineHeightLG: 1.5;
$dark-components-Collapse-fontFamily: SF Pro;
$dark-components-Checkbox-paddingXS: 8;
$dark-components-Checkbox-marginXS: 8;
$dark-components-Checkbox-lineWidthFocus: 4;
$dark-components-Checkbox-lineWidthBold: 2;
$dark-components-Checkbox-lineWidth: 1;
$dark-components-Checkbox-lineHeight: 1.5714285714285714;
$dark-components-Checkbox-fontSizeLG: 16;
$dark-components-Checkbox-fontSize: 14;
$dark-components-Checkbox-controlInteractiveSize: 16;
$dark-components-Checkbox-borderRadiusSM: 4;
$dark-components-Checkbox-colorWhite: #ffffff;
$dark-components-Checkbox-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Checkbox-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Checkbox-colorPrimaryHover: #627de8;
$dark-components-Checkbox-colorPrimaryBorder: #222b5a;
$dark-components-Checkbox-colorPrimary: #3a55da;
$dark-components-Checkbox-colorBorder: #424242;
$dark-components-Checkbox-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Checkbox-colorBgContainer: #141414;
$dark-components-Checkbox-fontFamily: SF Pro;
$dark-components-Breadcrumb-paddingXXS: 4;
$dark-components-Breadcrumb-marginXXS: 4;
$dark-components-Breadcrumb-marginXS: 8;
$dark-components-Breadcrumb-lineWidthFocus: 4;
$dark-components-Breadcrumb-lineHeight: 1.5714285714285714;
$dark-components-Breadcrumb-fontSizeIcon: 12;
$dark-components-Breadcrumb-fontSize: 14;
$dark-components-Breadcrumb-borderRadiusSM: 4;
$dark-components-Breadcrumb-colorPrimaryBorder: #222b5a;
$dark-components-Breadcrumb-colorBgTextHover: rgba(255, 255, 255, 0.12);
$dark-components-Breadcrumb-separatorColor: rgba(255, 255, 255, 0.45);
$dark-components-Breadcrumb-linkHoverColor: rgba(255, 255, 255, 0.85);
$dark-components-Breadcrumb-linkColor: rgba(255, 255, 255, 0.45);
$dark-components-Breadcrumb-lastItemColor: rgba(255, 255, 255, 0.85);
$dark-components-Breadcrumb-itemColor: rgba(255, 255, 255, 0.45);
$dark-components-Breadcrumb-separatorMargin: 8;
$dark-components-Breadcrumb-iconFontSize: 14;
$dark-components-Breadcrumb-fontHeight: 22;
$dark-components-Breadcrumb-fontFamily: SF Pro;
$dark-components-Anchor-paddingXXS: 4;
$dark-components-Anchor-lineWidthBold: 2;
$dark-components-Anchor-lineHeight: 1.5714285714285714;
$dark-components-Anchor-fontSizeLG: 16;
$dark-components-Anchor-fontSize: 14;
$dark-components-Anchor-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Anchor-colorSplit: rgba(255, 255, 255, 0.1);
$dark-components-Anchor-colorPrimary: #3a55da;
$dark-components-Anchor-linkPaddingInlineStart: 16;
$dark-components-Anchor-linkPaddingBlock: 4;
$dark-components-Anchor-fontFamily: SF Pro;
$dark-components-Alert-paddingMD: 20;
$dark-components-Alert-paddingContentVerticalSM: 8;
$dark-components-Alert-paddingContentHorizontalLG: 24;
$dark-components-Alert-marginXS: 8;
$dark-components-Alert-marginSM: 12;
$dark-components-Alert-lineWidth: 1;
$dark-components-Alert-lineHeight: 1.5714285714285714;
$dark-components-Alert-fontSizeLG: 16;
$dark-components-Alert-fontSizeIcon: 12;
$dark-components-Alert-fontSizeHeading3: 24;
$dark-components-Alert-fontSize: 14;
$dark-components-Alert-borderRadiusLG: 8;
$dark-components-Alert-colorWarningBorder: #594214;
$dark-components-Alert-colorWarningBg: #2b2111;
$dark-components-Alert-colorWarning: #d89614;
$dark-components-Alert-colorTextHeading: rgba(255, 255, 255, 0.85);
$dark-components-Alert-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Alert-colorSuccessBorder: #194b17;
$dark-components-Alert-colorSuccessBg: #122412;
$dark-components-Alert-colorSuccess: #22af1c;
$dark-components-Alert-colorInfoBorder: #222b5a;
$dark-components-Alert-colorInfoBg: #15172b;
$dark-components-Alert-colorInfo: #3a55da;
$dark-components-Alert-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-Alert-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-Alert-colorErrorBorder: #552121;
$dark-components-Alert-colorErrorBg: #291516;
$dark-components-Alert-colorError: #cc3838;
$dark-components-Alert-withDescriptionIconSize: 24;
$dark-components-Alert-fontFamily: SF Pro;
$dark-components-Space-paddingXS: 8;
$dark-components-Space-paddingLG: 24;
$dark-components-Space-padding: 16;
$dark-components-AutoComplete-paddingXXS: 4;
$dark-components-AutoComplete-paddingXS: 8;
$dark-components-AutoComplete-paddingSM: 12;
$dark-components-AutoComplete-lineWidth: 1;
$dark-components-AutoComplete-lineHeight: 1.5714285714285714;
$dark-components-AutoComplete-controlPaddingHorizontalSM: 8;
$dark-components-AutoComplete-controlPaddingHorizontal: 12;
$dark-components-AutoComplete-controlOutlineWidth: 2;
$dark-components-AutoComplete-controlOutline: rgba(0, 60, 180, 0.15);
$dark-components-AutoComplete-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-AutoComplete-controlItemBgActive: #1a2045;
$dark-components-AutoComplete-controlHeightXS: 16;
$dark-components-AutoComplete-controlHeightSM: 24;
$dark-components-AutoComplete-controlHeightLG: 40;
$dark-components-AutoComplete-controlHeight: 32;
$dark-components-AutoComplete-borderRadiusXS: 2;
$dark-components-AutoComplete-borderRadiusSM: 4;
$dark-components-AutoComplete-borderRadiusLG: 8;
$dark-components-AutoComplete-borderRadius: 6;
$dark-components-AutoComplete-colorWarningOutline: rgba(173, 107, 0, 0.15);
$dark-components-AutoComplete-colorWarningHover: #7c5914;
$dark-components-AutoComplete-colorWarning: #d89614;
$dark-components-AutoComplete-colorTextTertiary: rgba(255, 255, 255, 0.45);
$dark-components-AutoComplete-colorTextQuaternary: rgba(255, 255, 255, 0.25);
$dark-components-AutoComplete-colorTextPlaceholder: rgba(255, 255, 255, 0.25);
$dark-components-AutoComplete-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-AutoComplete-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-AutoComplete-colorText: rgba(255, 255, 255, 0.85);
$dark-components-AutoComplete-colorPrimaryHover: #627de8;
$dark-components-AutoComplete-colorPrimary: #3a55da;
$dark-components-AutoComplete-colorIconHover: rgba(255, 255, 255, 0.85);
$dark-components-AutoComplete-colorIcon: rgba(255, 255, 255, 0.45);
$dark-components-AutoComplete-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-AutoComplete-colorErrorOutline: rgba(238, 38, 56, 0.11);
$dark-components-AutoComplete-colorErrorHover: #e36561;
$dark-components-AutoComplete-colorError: #cc3838;
$dark-components-AutoComplete-colorBorder: #424242;
$dark-components-AutoComplete-colorBgElevated: #1f1f1f;
$dark-components-AutoComplete-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-AutoComplete-colorBgContainer: #141414;
$dark-components-AutoComplete-optionActiveBg: rgba(0, 0, 0, 0.04);
$dark-components-AutoComplete-optionHeight: 32;
$dark-components-AutoComplete-optionFontSize: 14;
$dark-components-AutoComplete-fontFamily: SF Pro;
$dark-components-AutoComplete-fontSize: 14;
$dark-components-AutoComplete-fontSizeIcon: 12;
$dark-components-AutoComplete-fontSizeLG: 16;
$dark-components-AutoComplete-fontSizeSM: 12;
$dark-components-Layout-bodyBg: #000000;
$dark-components-Layout-footerBg: #000000;
$dark-components-Layout-headerBg: #001529;
$dark-components-Layout-headerColor: rgba(255, 255, 255, 0.85);
$dark-components-Layout-lightSiderBg: #141414;
$dark-components-Layout-lightTriggerBg: #141414;
$dark-components-Layout-lightTriggerColor: rgba(255, 255, 255, 0.85);
$dark-components-Layout-siderBg: #001529;
$dark-components-Layout-triggerBg: #002140;
$dark-components-Layout-triggerColor: #ffffff;
$dark-components-Layout-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Layout-headerHeight: 64;
$dark-components-Layout-triggerHeight: 48;
$dark-components-Layout-zeroTriggerHeight: 40;
$dark-components-Layout-zeroTriggerWidth: 40;
$dark-components-Layout-borderRadius: 6;
$dark-components-Layout-fontSize: 14;
$dark-components-Layout-fontSizeXL: 20;
$dark-components-Mentions-fontFamily: SF Pro;
$dark-components-Mentions-fontSize: 14;
$dark-components-Mentions-lineHeight: 1.5714285714285714;
$dark-components-Splitter-railSize: 4;
$dark-components-Splitter-handleSizeHover: 12;
$dark-components-Splitter-dotSize: 8;
$dark-components-Splitter-controlSize: 10;
$dark-components-Splitter-handleSize: 10;
$dark-components-Splitter-trackHoverBg: #28377d;
$dark-components-Splitter-trackBgDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Splitter-trackBg: #222b5a;
$dark-components-Splitter-railHoverBg: rgba(255, 255, 255, 0.12);
$dark-components-Splitter-railBg: rgba(255, 255, 255, 0.08);
$dark-components-Splitter-handleColor: #222b5a;
$dark-components-Splitter-handleColorDisabled: #bfbfbf;
$dark-components-Splitter-handleActiveColor: #3a55da;
$dark-components-Splitter-dotBorderColor: #303030;
$dark-components-Splitter-dotActiveBorderColor: #222b5a;
$dark-components-Splitter-lineWidth: 1;
$dark-components-Splitter-controlHeightLG: 40;
$dark-components-Splitter-controlHeight: 32;
$dark-components-Splitter-colorTextDisabled: rgba(255, 255, 255, 0.25);
$dark-components-Splitter-colorTextDescription: rgba(255, 255, 255, 0.45);
$dark-components-Splitter-colorPrimaryBorderHover: #28377d;
$dark-components-Splitter-colorPrimaryBorder: #222b5a;
$dark-components-Splitter-colorPrimary: #3a55da;
$dark-components-Splitter-colorFillTertiary: rgba(255, 255, 255, 0.08);
$dark-components-Splitter-colorFillSecondary: rgba(255, 255, 255, 0.12);
$dark-components-Splitter-colorFillContentHover: rgba(255, 255, 255, 0.18);
$dark-components-Splitter-colorBorderSecondary: #303030;
$dark-components-Splitter-colorBgElevated: #1f1f1f;
$dark-components-Splitter-colorBgContainerDisabled: rgba(255, 255, 255, 0.08);
$dark-components-Splitter-colorBgContainer: #141414;
$dark-components-Splitter-resizeSpinnerSize: 20;
$dark-components-Splitter-lineHeight: 1.5714285714285714;
$dark-components-Splitter-fontSize: 14;
$dark-components-Splitter-fontFamily: SF Pro;
$dark-components-Splitter-controlHeightSM: 24;
$dark-components-Splitter-borderRadiusXS: 2;
$dark-components-Splitter-colorText: rgba(255, 255, 255, 0.85);
$dark-components-Splitter-colorFill: rgba(255, 255, 255, 0.18);
$dark-components-Splitter-controlItemBgActive: #1a2045;
$dark-components-Splitter-controlItemBgActiveHover: #1a2045;
$dark-components-Splitter-controlItemBgHover: rgba(255, 255, 255, 0.08);
$dark-components-Splitter-fontSizeSM: 12;
$dark-components-Splitter-splitBarSize: 2;
$dark-components-Splitter-splitTriggerSize: 6;

```
最终顶层

```
/* 基础变量和工具 */
// @use './variables.scss' as *;
// @use './z-index.scss' as *;
// @use './animations.scss' as *;

// /* 组件样式 */
// @use './components/terminal.scss' as *;
// @use './components/resize-handle.scss' as *;
// @use './components/code.scss' as *;
// @use './components/editor.scss' as *;
// @use './components/toast.scss' as *;

@import './variables.scss';

// 确保层级定义先于其他样式导入
// @import './reset-layer.css';

// @import './reset-custom.css';

/* Tailwind和Ant Design样式兼容 */
// @import './antd-tailwind-layer.scss';

/* Color Tokens Light Theme */
:root,
:root[data-theme='light'] {
  --bolt-elements-borderColor: #{$light-components-Button-defaultBorderColor};
  --bolt-elements-borderColorActive: theme('colors.accent.600'
    );
  --bolt-colorPrimaryBorderHover: #{$light-token-colorPrimaryBorderHover};
  --bolt-colorPrimary: #{$light-token-colorPrimary};
  --bolt-colorFillContentHover: #{$light-token-colorFillContentHover};
  --bolt-colorPrimaryBgHover: #{$light-token-colorPrimaryBgHover};

  border-radius: var(--Border-Radius-borderRadiusLG, 8px);
  background: var(--Components-Menu-Component-itemHoverBg, rgba(0, 0, 0, 0.06));
  --bolt-colorTextHeading: #{$light-token-colorTextHeading};
  --bolt-colorFillContent: #{$light-token-colorFillContent};
  --bolt-colorTextSecondary: #{$light-token-colorTextSecondary};
  --bolt-colorFillSecondary: #{$light-token-colorFillSecondary};
  --bolt-colorFilledHandleBg: #{$light-token-colorFilledHandleBg};
  --bolt-Base-Purple-2: #{$light-token-purple-2};
  --bolt-Base-Purple-6: #{$light-token-purple-6};
  --bolt-text-colorText: #{$light-token-colorText};
  --bolt-controlTmpOutline: #{$light-token-controlTmpOutline};
  --bolt-Padding-paddingXS: #{$light-token-paddingXS};
  --bolt-colorFillTertiary: #{$light-token-colorFillTertiary};
  --bolt-colorTextTertiary: #{$light-token-colorTextTertiary};
  --bolt-colorText: #{$light-token-colorText};
  --bolt-colorBgContainer: #{$light-token-colorBgContainer};
  --bolt-Gradient-MessageMask: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  --bolt-colorFillSecondary: #{$light-token-colorFillSecondary};
  --bolt-Gradient-Index: linear-gradient(180deg, #f4f8ff 0%, #d1e7ff 100%);
  --bolt-colorPrimaryBorderHover: #{$light-token-colorPrimaryBorderHover};
  --bolt-elements-bg-depth-1: theme('colors.white');
  --bolt-elements-bg-depth-2: #{$light-components-Menu-itemHoverBg};
  --bolt-elements-bg-depth-3: theme('colors.gray.200');
  --bolt-elements-bg-depth-4: theme('colors.alpha.gray.5');

  --bolt-elements-textPrimary: #{$light-components-List-colorText};
  --bolt-elements-textSecondary: #{$light-components-List-colorTextDescription};
  --bolt-elements-textTertiary: theme('colors.gray.500');

  --bolt-elements-code-background: theme('colors.gray.100');
  --bolt-elements-code-text: theme('colors.gray.950');

  --bolt-elements-button-primary-background: theme('colors.alpha.accent.10');
  --bolt-elements-button-primary-backgroundHover: theme('colors.alpha.accent.20');
  --bolt-elements-button-primary-text: theme('colors.accent.500');

  --bolt-elements-button-secondary-background: theme('colors.alpha.gray.5');
  --bolt-elements-button-secondary-backgroundHover: theme('colors.alpha.gray.10');
  --bolt-elements-button-secondary-text: theme('colors.gray.950');

  --bolt-elements-button-danger-background: theme('colors.alpha.red.10');
  --bolt-elements-button-danger-backgroundHover: theme('colors.alpha.red.20');
  --bolt-elements-button-danger-text: theme('colors.red.500');

  --bolt-elements-item-contentDefault: theme('colors.alpha.gray.50');
  --bolt-elements-item-contentActive: theme('colors.gray.950');
  --bolt-elements-item-contentAccent: theme('colors.accent.700');
  --bolt-elements-item-contentDanger: theme('colors.red.500');
  --bolt-elements-item-backgroundDefault: rgba(0, 0, 0, 0);
  --bolt-elements-item-backgroundActive: theme('colors.alpha.gray.5');
  --bolt-elements-item-backgroundAccent: theme('colors.alpha.accent.10');
  --bolt-elements-item-backgroundDanger: theme('colors.alpha.red.10');

  --bolt-elements-loader-background: theme('colors.alpha.gray.10');
  --bolt-elements-loader-progress: theme('colors.accent.500');

  --bolt-elements-artifacts-background: theme('colors.white');
  --bolt-elements-artifacts-backgroundHover: theme('colors.alpha.gray.2');
  --bolt-elements-artifacts-borderColor: var(--bolt-elements-borderColor);
  --bolt-elements-artifacts-inlineCode-background: theme('colors.gray.100');
  --bolt-elements-artifacts-inlineCode-text: var(--bolt-elements-textPrimary);

  --bolt-elements-actions-background: theme('colors.white');
  --bolt-elements-actions-code-background: theme('colors.gray.800');

  --bolt-elements-messages-background: theme('colors.gray.100');
  --bolt-elements-messages-linkColor: theme('colors.accent.500');
  --bolt-elements-messages-code-background: theme('colors.gray.800');
  --bolt-elements-messages-inlineCode-background: theme('colors.gray.200');
  --bolt-elements-messages-inlineCode-text: theme('colors.gray.800');

  --bolt-elements-icon-success: theme('colors.green.500');
  --bolt-elements-icon-error: theme('colors.red.500');
  --bolt-elements-icon-primary: theme('colors.gray.950');
  --bolt-elements-icon-secondary: theme('colors.gray.600');
  --bolt-elements-icon-tertiary: theme('colors.gray.500');

  --bolt-elements-dividerColor: theme('colors.gray.100');

  --bolt-elements-prompt-background: theme('colors.alpha.white.80');

  --bolt-elements-sidebar-dropdownShadow: theme('colors.alpha.gray.10');
  --bolt-elements-sidebar-buttonBackgroundDefault: theme('colors.alpha.accent.10');
  --bolt-elements-sidebar-buttonBackgroundHover: theme('colors.alpha.accent.20');
  --bolt-elements-sidebar-buttonText: theme('colors.accent.700');

  --bolt-elements-preview-addressBar-background: theme('colors.gray.100');
  --bolt-elements-preview-addressBar-backgroundHover: theme('colors.alpha.gray.5');
  --bolt-elements-preview-addressBar-backgroundActive: theme('colors.white');
  --bolt-elements-preview-addressBar-text: var(--bolt-elements-textSecondary);
  --bolt-elements-preview-addressBar-textActive: var(--bolt-elements-textPrimary);

  --bolt-elements-terminals-background: theme('colors.white');
  --bolt-elements-terminals-buttonBackground: var(--bolt-elements-bg-depth-4);

  --bolt-elements-cta-background: theme('colors.gray.100');
  --bolt-elements-cta-text: theme('colors.gray.950');
  /* 新增 xinzeng */
  --bolt-colors-Blue-1: #{$light-token-blue-1};
  --bolt-elements-Tag-lineWidth: #{$light-components-Tag-lineWidth};
  --bolt-elements-List-colorText: #{$light-components-List-colorText};
  --bolt-elements-List-colorTextDescription: #{$light-components-List-colorTextDescription};

  --bolt-elements-Input-colorTextPlaceholder: #{$light-components-Input-colorTextPlaceholder};
  --bolt-elements-Input-colorFillTertiary: #{$light-components-Input-colorFillTertiary};
  --bolt-elements-Input-paddingInline: #{$light-components-Input-paddingInline};
  --bolt-elements-Input-colorBgContainer: #{$light-components-Input-colorBgContainer};
  --bolt-elements-Input-colorBorder: #{$light-components-Input-colorBorder};
  --bolt-elements-Icon-colorIconHover: #{$dark-token-colorIconHover};

  --bolt-elements-Button-textTextColor: #{$light-components-Button-textTextColor};
  --bolt-elements-Button-defaultBg: #{$light-components-Button-defaultBg};
  --bolt-elements-Button-colorFillTertiary: #{$light-components-Button-colorFillTertiary};
  --bolt-elements-Button-textTextHoverColor: #{$light-components-Button-textTextHoverColor};
  --bolt-elements-Button-textHoverBg: #{$light-components-Button-textHoverBg};
  --bolt-elements-Button-lineWidth: #{$light-components-Button-lineWidth};
  --bolt-elements-Button-defaultBorderColor: #{$light-components-Button-defaultBorderColor};
  --bolt-elements-Button-defaultColor: #{$light-components-Button-defaultColor};
  --bolt-elements-Button-colorBgSolid: #{$light-components-Button-colorBgSolid};
  --bolt-colorTextDescription: #{$light-token-colorTextDescription};

  --bolt-elements-Menu-itemBg: #{$light-components-Menu-itemBg};
  --bolt-elements-Menu-itemHoverBg: #{$light-components-Menu-itemHoverBg};
  --bolt-elements-Menu-itemSelectedBg: #{$light-components-Menu-itemSelectedBg};
  --bolt-elements-Menu-iconSize: #{$light-components-Menu-iconSize};
  --bolt-elements-Menu-itemSelectedColor: #{$light-components-Menu-itemSelectedColor};

  --bolt-elements-colorIcon: #{$light-token-colorIcon};

  --bolt-elements-Drawer-colorBgElevated: #{$light-components-Drawer-colorBgElevated};
  --bolt-elements-Drawer-colorText: #{$light-components-Drawer-colorText};

  --bolt-elements-Tag-colorBorder: #{$light-components-Tag-colorBorder};
  --bolt-elements-Tag-defaultColor: #{$light-components-Tag-defaultColor};
  --bolt-elements-Tag-colorPrimary: #{$light-components-Tag-colorPrimary};
  /* Terminal Colors */
  --bolt-terminal-background: var(--bolt-elements-terminals-background);
  --bolt-terminal-foreground: #333;
  --bolt-terminal-selection-background: #00000040;
  --bolt-terminal-black: #000;
  --bolt-terminal-red: #cd3131;
  --bolt-terminal-green: #00bc00;
  --bolt-terminal-yellow: #949800;
  --bolt-terminal-blue: #0451a5;
  --bolt-terminal-magenta: #bc05bc;
  --bolt-terminal-cyan: #0598bc;
  --bolt-terminal-white: #555;
  --bolt-terminal-brightBlack: #686868;
  --bolt-terminal-brightRed: #cd3131;
  --bolt-terminal-brightGreen: #00bc00;
  --bolt-terminal-brightYellow: #949800;
  --bolt-terminal-brightBlue: #0451a5;
  --bolt-terminal-brightMagenta: #bc05bc;
  --bolt-terminal-brightCyan: #0598bc;
  --bolt-terminal-brightWhite: #a5a5a5;
}

/* Color Tokens Dark Theme */
// :root,
// :root[data-theme='dark'] {
//   --bolt-elements-borderColor: #{$dark-components-Button-defaultBorderColor};
//   --bolt-colorPrimary: #{$dark-token-colorPrimary};
//   --bolt-elements-borderColorActive: theme('colors.accent.500');
//   --bolt-colorFillContent: #{$dark-token-colorFillContent};
//   --bolt-colorTextHeading: #{$dark-token-colorTextHeading};
//   --bolt-colorPrimaryBorderHover: #{$dark-token-colorPrimaryBorderHover};
//   --bolt-colorFillContentHover: #{$dark-token-colorFillContentHover};
//   --bolt-colorPrimaryBgHover: #{$dark-token-colorPrimaryBgHover};

//   --bolt-colorFillSecondary: #{$dark-token-colorFillSecondary};
//   --bolt-colorFilledHandleBg: #{$dark-token-colorFilledHandleBg};
//   --bolt-Base-Purple-2: #{$dark-token-purple-2};
//   --bolt-Base-Purple-6: #{$dark-token-purple-6};
//   --bolt-colorTextDescription: #{$dark-token-colorTextDescription};
//   --bolt-colorFillSecondary: #{$dark-token-colorFillSecondary};
//   --bolt-colorBgContainer: #{$dark-token-colorBgContainer};
//   --bolt-Gradient-Index: #{$dark-token-colorBgContainer};
//   --bolt-colorPrimaryBorderHover: #{$dark-token-colorPrimaryBorderHover};

//   --bolt-controlTmpOutline: #{$dark-token-controlTmpOutline};
//   --bolt-colorTextTertiary: #{$dark-token-colorTextTertiary};
//   --bolt-colorText: #{$dark-token-colorText};
//   --bolt-Padding-paddingXS: #{$dark-token-paddingXS};
//   --bolt-colorFillTertiary: #{$dark-token-colorFillTertiary};
//   --bolt-elements-Icon-colorIconHover: #{$dark-token-colorIconHover};
//   --bolt-Gradient-MessageMask: linear-gradient(180deg,
//       rgba(20, 20, 20, 0) 0%,
//       rgba(20, 20, 20, 0.8) 100%);

//   --bolt-text-colorText: #{$dark-token-colorText};
//   --bolt-elements-bg-depth-1: theme('colors.gray.950');
//   --bolt-elements-bg-depth-2: #{$dark-components-Menu-itemHoverBg};
//   --bolt-elements-bg-depth-3: theme('colors.gray.800');
//   --bolt-elements-bg-depth-4: theme('colors.alpha.white.5');

//   --bolt-elements-textPrimary: #{$dark-components-List-colorText};
//   --bolt-elements-textSecondary: #{$dark-components-List-colorTextDescription};
//   --bolt-elements-textTertiary: theme('colors.gray.500');

//   --bolt-elements-code-background: theme('colors.gray.800');
//   --bolt-elements-code-text: theme('colors.white');

//   --bolt-elements-button-primary-background: theme('colors.alpha.accent.10');
//   --bolt-elements-button-primary-backgroundHover: theme('colors.alpha.accent.20');
//   --bolt-elements-button-primary-text: theme('colors.accent.500');

//   --bolt-elements-button-secondary-background: theme('colors.alpha.white.5');
//   --bolt-elements-button-secondary-backgroundHover: theme('colors.alpha.white.10');
//   --bolt-elements-button-secondary-text: theme('colors.white');

//   --bolt-elements-button-danger-background: theme('colors.alpha.red.10');
//   --bolt-elements-button-danger-backgroundHover: theme('colors.alpha.red.20');
//   --bolt-elements-button-danger-text: theme('colors.red.500');

//   --bolt-elements-item-contentDefault: theme('colors.alpha.white.50');
//   --bolt-elements-item-contentActive: theme('colors.white');
//   --bolt-elements-item-contentAccent: theme('colors.accent.500');
//   --bolt-elements-item-contentDanger: theme('colors.red.500');
//   --bolt-elements-item-backgroundDefault: rgba(255, 255, 255, 0);
//   --bolt-elements-item-backgroundActive: theme('colors.alpha.white.10');
//   --bolt-elements-item-backgroundAccent: theme('colors.alpha.accent.10');
//   --bolt-elements-item-backgroundDanger: theme('colors.alpha.red.10');

//   --bolt-elements-loader-background: theme('colors.alpha.gray.10');
//   --bolt-elements-loader-progress: theme('colors.accent.500');

//   --bolt-elements-artifacts-background: theme('colors.gray.900');
//   --bolt-elements-artifacts-backgroundHover: theme('colors.alpha.white.5');
//   --bolt-elements-artifacts-borderColor: var(--bolt-elements-borderColor);
//   --bolt-elements-artifacts-inlineCode-background: theme('colors.gray.800');
//   --bolt-elements-artifacts-inlineCode-text: theme('colors.white');

//   --bolt-elements-actions-background: theme('colors.gray.900');
//   --bolt-elements-actions-code-background: theme('colors.gray.800');

//   --bolt-elements-messages-background: theme('colors.gray.800');
//   --bolt-elements-messages-linkColor: theme('colors.accent.500');
//   --bolt-elements-messages-code-background: theme('colors.gray.900');
//   --bolt-elements-messages-inlineCode-background: theme('colors.gray.700');
//   --bolt-elements-messages-inlineCode-text: var(--bolt-elements-textPrimary);

//   --bolt-elements-icon-success: theme('colors.green.400');
//   --bolt-elements-icon-error: theme('colors.red.400');
//   --bolt-elements-icon-primary: theme('colors.white');
//   --bolt-elements-icon-secondary: theme('colors.gray.400');
//   --bolt-elements-icon-tertiary: theme('colors.gray.500');

//   --bolt-elements-dividerColor: theme('colors.gray.100');

//   --bolt-elements-prompt-background: theme('colors.alpha.gray.80');

//   --bolt-elements-sidebar-dropdownShadow: theme('colors.alpha.gray.30');
//   --bolt-elements-sidebar-buttonBackgroundDefault: theme('colors.alpha.accent.10');
//   --bolt-elements-sidebar-buttonBackgroundHover: theme('colors.alpha.accent.20');
//   --bolt-elements-sidebar-buttonText: theme('colors.accent.500');

//   --bolt-elements-preview-addressBar-background: var(--bolt-elements-bg-depth-1);
//   --bolt-elements-preview-addressBar-backgroundHover: theme('colors.alpha.white.5');
//   --bolt-elements-preview-addressBar-backgroundActive: var(--bolt-elements-bg-depth-1);
//   --bolt-elements-preview-addressBar-text: #{$dark-components-List-colorTextDescription};
//   --bolt-elements-preview-addressBar-textActive: var(--bolt-elements-textPrimary);

//   --bolt-elements-terminals-background: var(--bolt-elements-bg-depth-1);
//   --bolt-elements-terminals-buttonBackground: var(--bolt-elements-bg-depth-3);

//   --bolt-elements-cta-background: theme('colors.alpha.white.10');
//   --bolt-elements-cta-text: theme('colors.white');

//   // 新增 xinzeng
//   --bolt-colors-Blue-1: #{$dark-token-blue-1};
//   --bolt-elements-Tag-lineWidth: #{$dark-components-Tag-lineWidth};

//   --bolt-elements-List-colorText: #{$dark-components-List-colorText};
//   --bolt-elements-List-colorTextDescription: #{$dark-components-List-colorTextDescription};

//   --bolt-elements-Input-colorTextPlaceholder: #{$dark-components-Input-colorTextPlaceholder};
//   --bolt-elements-Input-colorFillTertiary: #{$dark-components-Input-colorFillTertiary};
//   --bolt-elements-Input-paddingInline: #{$dark-components-Input-paddingInline};
//   --bolt-elements-Input-colorBgContainer: #{$dark-components-Input-colorBgContainer};
//   --bolt-elements-Input-colorBorder: #{$dark-components-Input-colorBorder};

//   --bolt-elements-Button-textTextColor: #{$dark-components-Button-textTextColor};
//   --bolt-elements-Button-defaultBg: #{$dark-components-Button-defaultBg};
//   --bolt-elements-Button-colorFillTertiary: #{$dark-components-Button-colorFillTertiary};
//   --bolt-elements-Button-textTextHoverColor: #{$dark-components-Button-textTextHoverColor};
//   --bolt-elements-Button-textHoverBg: #{$dark-components-Button-textHoverBg};
//   --bolt-elements-Button-lineWidth: #{$dark-components-Button-lineWidth};
//   --bolt-elements-Button-defaultBorderColor: #{$dark-components-Button-defaultBorderColor};
//   --bolt-elements-Button-defaultColor: #{$dark-components-Button-defaultColor};

//   --bolt-elements-Menu-itemBg: #{$dark-components-Menu-itemBg};
//   --bolt-elements-Menu-itemHoverBg: #{$dark-components-Menu-itemHoverBg};
//   --bolt-elements-Menu-itemSelectedBg: #{$dark-components-Menu-itemSelectedBg};
//   --bolt-elements-Menu-iconSize: #{$dark-components-Menu-iconSize};
//   --bolt-elements-Menu-itemSelectedColor: #{$dark-components-Menu-itemSelectedColor};

//   --bolt-elements-colorIcon: #{$dark-token-colorIcon};
//   --bolt-elements-Drawer-colorBgElevated: #{$dark-components-Drawer-colorBgElevated};
//   --bolt-elements-Drawer-colorText: #{$dark-components-Drawer-colorText};
//   --bolt-elements-Button-colorBgSolid: #{$dark-components-Button-colorBgSolid};

//   --bolt-elements-Tag-colorBorder: #{$dark-components-Tag-colorBorder};
//   --bolt-elements-Tag-defaultColor: #{$dark-components-Tag-defaultColor};
//   --bolt-elements-Tag-colorPrimary: #{$dark-components-Tag-colorPrimary};
//   /* Terminal Colors */
//   --bolt-terminal-background: var(--bolt-elements-terminals-background);
//   --bolt-terminal-foreground: #eff0eb;
//   --bolt-terminal-selection-background: #97979b33;
//   --bolt-terminal-black: #000;
//   --bolt-terminal-red: #ff5c57;
//   --bolt-terminal-green: #5af78e;
//   --bolt-terminal-yellow: #f3f99d;
//   --bolt-terminal-blue: #57c7ff;
//   --bolt-terminal-magenta: #ff6ac1;
//   --bolt-terminal-cyan: #9aedfe;
//   --bolt-terminal-white: #f1f1f0;
//   --bolt-terminal-brightBlack: #686868;
//   --bolt-terminal-brightRed: #ff5c57;
//   --bolt-terminal-brightGreen: #5af78e;
//   --bolt-terminal-brightYellow: #f3f99d;
//   --bolt-terminal-brightBlue: #57c7ff;
//   --bolt-terminal-brightMagenta: #ff6ac1;
//   --bolt-terminal-brightCyan: #9aedfe;
//   --bolt-terminal-brightWhite: #f1f1f0;
// }


:root {
  --header-height: 54px;
  --chat-max-width: 37rem;
  --chat-min-width: 640px;
  --workbench-width: min(calc(100% - var(--chat-min-width)), 1536px);
  --workbench-inner-width: var(--workbench-width);
  --workbench-left: calc(100% - var(--workbench-width));

  /* Toasts */
  --toastify-color-progress-success: var(--bolt-elements-icon-success);
  --toastify-color-progress-error: var(--bolt-elements-icon-error);

  /* Terminal */
  --bolt-elements-terminal-backgroundColor: var(--bolt-terminal-background);
  --bolt-elements-terminal-textColor: var(--bolt-terminal-foreground);
  --bolt-elements-terminal-cursorColor: var(--bolt-terminal-foreground);
  --bolt-elements-terminal-selection-backgroundColor: var(--bolt-terminal-selection-background);
  --bolt-elements-terminal-color-black: var(--bolt-terminal-black);
  --bolt-elements-terminal-color-red: var(--bolt-terminal-red);
  --bolt-elements-terminal-color-green: var(--bolt-terminal-green);
  --bolt-elements-terminal-color-yellow: var(--bolt-terminal-yellow);
  --bolt-elements-terminal-color-blue: var(--bolt-terminal-blue);
  --bolt-elements-terminal-color-magenta: var(--bolt-terminal-magenta);
  --bolt-elements-terminal-color-cyan: var(--bolt-terminal-cyan);
  --bolt-elements-terminal-color-white: var(--bolt-terminal-white);
  --bolt-elements-terminal-color-brightBlack: var(--bolt-terminal-brightBlack);
  --bolt-elements-terminal-color-brightRed: var(--bolt-terminal-brightRed);
  --bolt-elements-terminal-color-brightGreen: var(--bolt-terminal-brightGreen);
  --bolt-elements-terminal-color-brightYellow: var(--bolt-terminal-brightYellow);
  --bolt-elements-terminal-color-brightBlue: var(--bolt-terminal-brightBlue);
  --bolt-elements-terminal-color-brightMagenta: var(--bolt-terminal-brightMagenta);
  --bolt-elements-terminal-color-brightCyan: var(--bolt-terminal-brightCyan);
  --bolt-elements-terminal-color-brightWhite: var(--bolt-terminal-brightWhite);
}

```

使用
```
    border: 1px solid var(--bolt-elements-borderColor);


<html data-theme='light'> 

const theme = 'light';  
document.documentElement.setAttribute('data-theme', theme);  

// 或者

document.querySelector('html')?.setAttribute('data-theme', effectiveTheme);

localstorage也要存一份 

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}


```

```
<html data-theme='light'> 

const theme = 'light';  
document.documentElement.setAttribute('data-theme', theme);  

// 或者

document.querySelector('html')?.setAttribute('data-theme', effectiveTheme);

localstorage也要存一份 

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

```


antd部分

顶层入口 

```
import { ConfigProvider } from 'antd';

import { ThemeProvider } from 'antd-style';

const theme = {
  light,
  dark 
}
  
const themeConfig = theme[currentThemeState as keyof typeof theme];

<ConfigProvider
            locale={$i18n.getLang() === 'en-US' ? enUS : zhCN}
            theme={themeConfig}
            wave={{ disabled: true }}
          >
            <ThemeProvider theme={themeConfig} appearance={'light'}>
              <App />
              <div data-modal-root ref={appRef.node} />
              <ModalContainer />
              {contextHolder}
              {messageContextHolder}
            </ThemeProvider>
          </ConfigProvider>

```


实际效果也不太好  太多细节的地方需要兼容   投再多的人日  基建做的再厚   也很难最好体验
而且运维成本加一倍    架构阶段应该积极否决这种需求

tailwind and 
tailwind in scss

tailwind.config.js 

```
module.exports = {
  "shortcuts": {
    "bolt-ease-cubic-bezier": "ease-[cubic-bezier(0.4,0,0.2,1)]",
    "transition-theme": "transition-[background-color,border-color,color] duration-150 bolt-ease-cubic-bezier",
    "kdb": "bg-bolt-elements-code-background text-bolt-elements-code-text py-1 px-1.5 rounded-md",
    "max-w-chat": "max-w-[var(--chat-max-width)]"
  },
  "rules": [
    ["b", {}]
  ],
  "theme": {
    "colors": {
      "white": "#FFFFFF",
      "gray": {
        "50": "#FAFAFA",
        "100": "#F5F5F5",
        "200": "#E5E5E5",
        "300": "#D4D4D4",
        "400": "#A3A3A3",
        "500": "#737373",
        "600": "#525252",
        "700": "#404040",
        "800": "#262626",
        "900": "#171717",
        "950": "#0A0A0A"
      },
      "accent": {
        "50": "#EEF9FF",
        "100": "#D8F1FF",
        "200": "#BAE7FF",
        "300": "#8ADAFF",
        "400": "#53C4FF",
        "500": "#2BA6FF",
        "600": "#1488FC",
        "700": "#0D6FE8",
        "800": "#1259BB",
        "900": "#154E93",
        "950": "#122F59"
      },
      "green": {
        "50": "#F0FDF4",
        "100": "#DCFCE7",
        "200": "#BBF7D0",
        "300": "#86EFAC",
        "400": "#4ADE80",
        "500": "#22C55E",
        "600": "#16A34A",
        "700": "#15803D",
        "800": "#166534",
        "900": "#14532D",
        "950": "#052E16"
      },
      "orange": {
        "50": "#FFFAEB",
        "100": "#FEEFC7",
        "200": "#FEDF89",
        "300": "#FEC84B",
        "400": "#FDB022",
        "500": "#F79009",
        "600": "#DC6803",
        "700": "#B54708",
        "800": "#93370D",
        "900": "#792E0D"
      },
      "red": {
        "50": "#FEF2F2",
        "100": "#FEE2E2",
        "200": "#FECACA",
        "300": "#FCA5A5",
        "400": "#F87171",
        "500": "#EF4444",
        "600": "#DC2626",
        "700": "#B91C1C",
        "800": "#991B1B",
        "900": "#7F1D1D",
        "950": "#450A0A"
      },
      "alpha": {
        "white": {
          "1": "#FFFFFF03",
          "2": "#FFFFFF05",
          "3": "#FFFFFF08",
          "4": "#FFFFFF0a",
          "5": "#FFFFFF0d",
          "10": "#FFFFFF1a",
          "20": "#FFFFFF33",
          "30": "#FFFFFF4d",
          "40": "#FFFFFF66",
          "50": "#FFFFFF80",
          "60": "#FFFFFF99",
          "70": "#FFFFFFb3",
          "80": "#FFFFFFcc",
          "90": "#FFFFFFe6",
          "100": "#FFFFFFff"
        },
        "gray": {
          "1": "#17171703",
          "2": "#17171705",
          "3": "#17171708",
          "4": "#1717170a",
          "5": "#1717170d",
          "10": "#1717171a",
          "20": "#17171733",
          "30": "#1717174d",
          "40": "#17171766",
          "50": "#17171780",
          "60": "#17171799",
          "70": "#171717b3",
          "80": "#171717cc",
          "90": "#171717e6",
          "100": "#171717ff"
        },
        "red": {
          "1": "#EF444403",
          "2": "#EF444405",
          "3": "#EF444408",
          "4": "#EF44440a",
          "5": "#EF44440d",
          "10": "#EF44441a",
          "20": "#EF444433",
          "30": "#EF44444d",
          "40": "#EF444466",
          "50": "#EF444480",
          "60": "#EF444499",
          "70": "#EF4444b3",
          "80": "#EF4444cc",
          "90": "#EF4444e6",
          "100": "#EF4444ff"
        },
        "accent": {
          "1": "#2BA6FF03",
          "2": "#2BA6FF05",
          "3": "#2BA6FF08",
          "4": "#2BA6FF0a",
          "5": "#2BA6FF0d",
          "10": "#2BA6FF1a",
          "20": "#2BA6FF33",
          "30": "#2BA6FF4d",
          "40": "#2BA6FF66",
          "50": "#2BA6FF80",
          "60": "#2BA6FF99",
          "70": "#2BA6FFb3",
          "80": "#2BA6FFcc",
          "90": "#2BA6FFe6",
          "100": "#2BA6FFff"
        }
      },
      "bolt": {
        "elements": {
          "Input": {
            "colorTextPlaceholder": "var(--bolt-elements-Input-colorTextPlaceholder)",
            "colorFillTertiary": " var(--bolt-elements-Input-colorFillTertiary)",
            "paddingLine": "var(--bolt-elements-Input-paddingLine)"
          },
          "Button": {
            "textTextColor": "var(--bolt-elements-Button-textTextColor)"
          },
          "Menu": {
            "itemBg": "var(--bolt-elements-Menu-itemBg)"
          },
          "borderColor": "var(--bolt-elements-borderColor)",
          "borderColorActive": "var(--bolt-elements-borderColorActive)",
          "background": {
            "depth": {
              "1": "var(--bolt-elements-bg-depth-1)",
              "2": "var(--bolt-elements-bg-depth-2)",
              "3": "var(--bolt-elements-bg-depth-3)",
              "4": "var(--bolt-elements-bg-depth-4)"
            }
          },
          "textPrimary": "var(--bolt-elements-textPrimary)",
          "textSecondary": "var(--bolt-elements-textSecondary)",
          "textTertiary": "var(--bolt-elements-textTertiary)",
          "code": {
            "background": "var(--bolt-elements-code-background)",
            "text": "var(--bolt-elements-code-text)"
          },
          "button": {
            "primary": {
              "background": "var(--bolt-elements-button-primary-background)",
              "backgroundHover": "var(--bolt-elements-button-primary-backgroundHover)",
              "text": "var(--bolt-elements-button-primary-text)"
            },
            "secondary": {
              "background": "var(--bolt-elements-button-secondary-background)",
              "backgroundHover": "var(--bolt-elements-button-secondary-backgroundHover)",
              "text": "var(--bolt-elements-button-secondary-text)"
            },
            "danger": {
              "background": "var(--bolt-elements-button-danger-background)",
              "backgroundHover": "var(--bolt-elements-button-danger-backgroundHover)",
              "text": "var(--bolt-elements-button-danger-text)"
            }
          },
          "item": {
            "contentDefault": "var(--bolt-elements-item-contentDefault)",
            "contentActive": "var(--bolt-elements-item-contentActive)",
            "contentAccent": "var(--bolt-elements-item-contentAccent)",
            "contentDanger": "var(--bolt-elements-item-contentDanger)",
            "backgroundDefault": "var(--bolt-elements-item-backgroundDefault)",
            "backgroundActive": "var(--bolt-elements-item-backgroundActive)",
            "backgroundAccent": "var(--bolt-elements-item-backgroundAccent)",
            "backgroundDanger": "var(--bolt-elements-item-backgroundDanger)"
          },
          "actions": {
            "background": "var(--bolt-elements-actions-background)",
            "code": {
              "background": "var(--bolt-elements-actions-code-background)"
            }
          },
          "artifacts": {
            "background": "var(--bolt-elements-artifacts-background)",
            "backgroundHover": "var(--bolt-elements-artifacts-backgroundHover)",
            "borderColor": "var(--bolt-elements-artifacts-borderColor)",
            "inlineCode": {
              "background": "var(--bolt-elements-artifacts-inlineCode-background)",
              "text": "var(--bolt-elements-artifacts-inlineCode-text)"
            }
          },
          "messages": {
            "background": "var(--bolt-elements-messages-background)",
            "linkColor": "var(--bolt-elements-messages-linkColor)",
            "code": {
              "background": "var(--bolt-elements-messages-code-background)"
            },
            "inlineCode": {
              "background": "var(--bolt-elements-messages-inlineCode-background)",
              "text": "var(--bolt-elements-messages-inlineCode-text)"
            }
          },
          "icon": {
            "success": "var(--bolt-elements-icon-success)",
            "error": "var(--bolt-elements-icon-error)",
            "primary": "var(--bolt-elements-icon-primary)",
            "secondary": "var(--bolt-elements-icon-secondary)",
            "tertiary": "var(--bolt-elements-icon-tertiary)"
          },
          "preview": {
            "addressBar": {
              "background": "var(--bolt-elements-preview-addressBar-background)",
              "backgroundHover": "var(--bolt-elements-preview-addressBar-backgroundHover)",
              "backgroundActive": "var(--bolt-elements-preview-addressBar-backgroundActive)",
              "text": "var(--bolt-elements-preview-addressBar-text)",
              "textActive": "var(--bolt-elements-preview-addressBar-textActive)"
            }
          },
          "terminals": {
            "background": "var(--bolt-elements-terminals-background)",
            "buttonBackground": "var(--bolt-elements-terminals-buttonBackground)"
          },
          "dividerColor": "var(--bolt-elements-dividerColor)",
          "loader": {
            "background": "var(--bolt-elements-loader-background)",
            "progress": "var(--bolt-elements-loader-progress)"
          },
          "prompt": {
            "background": "var(--bolt-elements-prompt-background)"
          },
          "sidebar": {
            "dropdownShadow": "var(--bolt-elements-sidebar-dropdownShadow)",
            "buttonBackgroundDefault": "var(--bolt-elements-sidebar-buttonBackgroundDefault)",
            "buttonBackgroundHover": "var(--bolt-elements-sidebar-buttonBackgroundHover)",
            "buttonText": "var(--bolt-elements-sidebar-buttonText)"
          },
          "cta": {
            "background": "var(--bolt-elements-cta-background)",
            "text": "var(--bolt-elements-cta-text)"
          }
        }
      }
    },
    "breakpoints": {
      "sm": "420px",
      "mid": "800px"
    }
  },
  "transformers": [{
    "name": "@unocss/transformer-directives"
  }],
  "presets": [{
    "name": "@unocss/preset-uno",
    "theme": {
      "width": {
        "auto": "auto",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vw"
      },
      "height": {
        "auto": "auto",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vh"
      },
      "maxWidth": {
        "none": "none",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vw"
      },
      "maxHeight": {
        "none": "none",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vh"
      },
      "minWidth": {
        "none": "none",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vw"
      },
      "minHeight": {
        "none": "none",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vh"
      },
      "inlineSize": {
        "auto": "auto",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vi"
      },
      "blockSize": {
        "auto": "auto",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vb"
      },
      "maxInlineSize": {
        "none": "none",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vi"
      },
      "maxBlockSize": {
        "none": "none",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vb"
      },
      "minInlineSize": {
        "none": "none",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vi"
      },
      "minBlockSize": {
        "none": "none",
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch",
        "screen": "100vb"
      },
      "colors": {
        "inherit": "inherit",
        "current": "currentColor",
        "transparent": "transparent",
        "black": "#000",
        "white": "#fff",
        "rose": {
          "1": "#ffe4e6",
          "2": "#fecdd3",
          "3": "#fda4af",
          "4": "#fb7185",
          "5": "#f43f5e",
          "6": "#e11d48",
          "7": "#be123c",
          "8": "#9f1239",
          "9": "#881337",
          "50": "#fff1f2",
          "100": "#ffe4e6",
          "200": "#fecdd3",
          "300": "#fda4af",
          "400": "#fb7185",
          "500": "#f43f5e",
          "600": "#e11d48",
          "700": "#be123c",
          "800": "#9f1239",
          "900": "#881337",
          "950": "#4c0519",
          "DEFAULT": "#fb7185"
        },
        "pink": {
          "1": "#fce7f3",
          "2": "#fbcfe8",
          "3": "#f9a8d4",
          "4": "#f472b6",
          "5": "#ec4899",
          "6": "#db2777",
          "7": "#be185d",
          "8": "#9d174d",
          "9": "#831843",
          "50": "#fdf2f8",
          "100": "#fce7f3",
          "200": "#fbcfe8",
          "300": "#f9a8d4",
          "400": "#f472b6",
          "500": "#ec4899",
          "600": "#db2777",
          "700": "#be185d",
          "800": "#9d174d",
          "900": "#831843",
          "950": "#500724",
          "DEFAULT": "#f472b6"
        },
        "fuchsia": {
          "1": "#fae8ff",
          "2": "#f5d0fe",
          "3": "#f0abfc",
          "4": "#e879f9",
          "5": "#d946ef",
          "6": "#c026d3",
          "7": "#a21caf",
          "8": "#86198f",
          "9": "#701a75",
          "50": "#fdf4ff",
          "100": "#fae8ff",
          "200": "#f5d0fe",
          "300": "#f0abfc",
          "400": "#e879f9",
          "500": "#d946ef",
          "600": "#c026d3",
          "700": "#a21caf",
          "800": "#86198f",
          "900": "#701a75",
          "950": "#4a044e",
          "DEFAULT": "#e879f9"
        },
        "purple": {
          "1": "#f3e8ff",
          "2": "#e9d5ff",
          "3": "#d8b4fe",
          "4": "#c084fc",
          "5": "#a855f7",
          "6": "#9333ea",
          "7": "#7e22ce",
          "8": "#6b21a8",
          "9": "#581c87",
          "50": "#faf5ff",
          "100": "#f3e8ff",
          "200": "#e9d5ff",
          "300": "#d8b4fe",
          "400": "#c084fc",
          "500": "#a855f7",
          "600": "#9333ea",
          "700": "#7e22ce",
          "800": "#6b21a8",
          "900": "#581c87",
          "950": "#3b0764",
          "DEFAULT": "#c084fc"
        },
        "violet": {
          "1": "#ede9fe",
          "2": "#ddd6fe",
          "3": "#c4b5fd",
          "4": "#a78bfa",
          "5": "#8b5cf6",
          "6": "#7c3aed",
          "7": "#6d28d9",
          "8": "#5b21b6",
          "9": "#4c1d95",
          "50": "#f5f3ff",
          "100": "#ede9fe",
          "200": "#ddd6fe",
          "300": "#c4b5fd",
          "400": "#a78bfa",
          "500": "#8b5cf6",
          "600": "#7c3aed",
          "700": "#6d28d9",
          "800": "#5b21b6",
          "900": "#4c1d95",
          "950": "#2e1065",
          "DEFAULT": "#a78bfa"
        },
        "indigo": {
          "1": "#e0e7ff",
          "2": "#c7d2fe",
          "3": "#a5b4fc",
          "4": "#818cf8",
          "5": "#6366f1",
          "6": "#4f46e5",
          "7": "#4338ca",
          "8": "#3730a3",
          "9": "#312e81",
          "50": "#eef2ff",
          "100": "#e0e7ff",
          "200": "#c7d2fe",
          "300": "#a5b4fc",
          "400": "#818cf8",
          "500": "#6366f1",
          "600": "#4f46e5",
          "700": "#4338ca",
          "800": "#3730a3",
          "900": "#312e81",
          "950": "#1e1b4b",
          "DEFAULT": "#818cf8"
        },
        "blue": {
          "1": "#dbeafe",
          "2": "#bfdbfe",
          "3": "#93c5fd",
          "4": "#60a5fa",
          "5": "#3b82f6",
          "6": "#2563eb",
          "7": "#1d4ed8",
          "8": "#1e40af",
          "9": "#1e3a8a",
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
          "DEFAULT": "#60a5fa"
        },
        "sky": {
          "1": "#e0f2fe",
          "2": "#bae6fd",
          "3": "#7dd3fc",
          "4": "#38bdf8",
          "5": "#0ea5e9",
          "6": "#0284c7",
          "7": "#0369a1",
          "8": "#075985",
          "9": "#0c4a6e",
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e",
          "950": "#082f49",
          "DEFAULT": "#38bdf8"
        },
        "cyan": {
          "1": "#cffafe",
          "2": "#a5f3fc",
          "3": "#67e8f9",
          "4": "#22d3ee",
          "5": "#06b6d4",
          "6": "#0891b2",
          "7": "#0e7490",
          "8": "#155e75",
          "9": "#164e63",
          "50": "#ecfeff",
          "100": "#cffafe",
          "200": "#a5f3fc",
          "300": "#67e8f9",
          "400": "#22d3ee",
          "500": "#06b6d4",
          "600": "#0891b2",
          "700": "#0e7490",
          "800": "#155e75",
          "900": "#164e63",
          "950": "#083344",
          "DEFAULT": "#22d3ee"
        },
        "teal": {
          "1": "#ccfbf1",
          "2": "#99f6e4",
          "3": "#5eead4",
          "4": "#2dd4bf",
          "5": "#14b8a6",
          "6": "#0d9488",
          "7": "#0f766e",
          "8": "#115e59",
          "9": "#134e4a",
          "50": "#f0fdfa",
          "100": "#ccfbf1",
          "200": "#99f6e4",
          "300": "#5eead4",
          "400": "#2dd4bf",
          "500": "#14b8a6",
          "600": "#0d9488",
          "700": "#0f766e",
          "800": "#115e59",
          "900": "#134e4a",
          "950": "#042f2e",
          "DEFAULT": "#2dd4bf"
        },
        "emerald": {
          "1": "#d1fae5",
          "2": "#a7f3d0",
          "3": "#6ee7b7",
          "4": "#34d399",
          "5": "#10b981",
          "6": "#059669",
          "7": "#047857",
          "8": "#065f46",
          "9": "#064e3b",
          "50": "#ecfdf5",
          "100": "#d1fae5",
          "200": "#a7f3d0",
          "300": "#6ee7b7",
          "400": "#34d399",
          "500": "#10b981",
          "600": "#059669",
          "700": "#047857",
          "800": "#065f46",
          "900": "#064e3b",
          "950": "#022c22",
          "DEFAULT": "#34d399"
        },
        "green": {
          "1": "#dcfce7",
          "2": "#bbf7d0",
          "3": "#86efac",
          "4": "#4ade80",
          "5": "#22c55e",
          "6": "#16a34a",
          "7": "#15803d",
          "8": "#166534",
          "9": "#14532d",
          "50": "#f0fdf4",
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efac",
          "400": "#4ade80",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d",
          "800": "#166534",
          "900": "#14532d",
          "950": "#052e16",
          "DEFAULT": "#4ade80"
        },
        "lime": {
          "1": "#ecfccb",
          "2": "#d9f99d",
          "3": "#bef264",
          "4": "#a3e635",
          "5": "#84cc16",
          "6": "#65a30d",
          "7": "#4d7c0f",
          "8": "#3f6212",
          "9": "#365314",
          "50": "#f7fee7",
          "100": "#ecfccb",
          "200": "#d9f99d",
          "300": "#bef264",
          "400": "#a3e635",
          "500": "#84cc16",
          "600": "#65a30d",
          "700": "#4d7c0f",
          "800": "#3f6212",
          "900": "#365314",
          "950": "#1a2e05",
          "DEFAULT": "#a3e635"
        },
        "yellow": {
          "1": "#fef9c3",
          "2": "#fef08a",
          "3": "#fde047",
          "4": "#facc15",
          "5": "#eab308",
          "6": "#ca8a04",
          "7": "#a16207",
          "8": "#854d0e",
          "9": "#713f12",
          "50": "#fefce8",
          "100": "#fef9c3",
          "200": "#fef08a",
          "300": "#fde047",
          "400": "#facc15",
          "500": "#eab308",
          "600": "#ca8a04",
          "700": "#a16207",
          "800": "#854d0e",
          "900": "#713f12",
          "950": "#422006",
          "DEFAULT": "#facc15"
        },
        "amber": {
          "1": "#fef3c7",
          "2": "#fde68a",
          "3": "#fcd34d",
          "4": "#fbbf24",
          "5": "#f59e0b",
          "6": "#d97706",
          "7": "#b45309",
          "8": "#92400e",
          "9": "#78350f",
          "50": "#fffbeb",
          "100": "#fef3c7",
          "200": "#fde68a",
          "300": "#fcd34d",
          "400": "#fbbf24",
          "500": "#f59e0b",
          "600": "#d97706",
          "700": "#b45309",
          "800": "#92400e",
          "900": "#78350f",
          "950": "#451a03",
          "DEFAULT": "#fbbf24"
        },
        "orange": {
          "1": "#ffedd5",
          "2": "#fed7aa",
          "3": "#fdba74",
          "4": "#fb923c",
          "5": "#f97316",
          "6": "#ea580c",
          "7": "#c2410c",
          "8": "#9a3412",
          "9": "#7c2d12",
          "50": "#fff7ed",
          "100": "#ffedd5",
          "200": "#fed7aa",
          "300": "#fdba74",
          "400": "#fb923c",
          "500": "#f97316",
          "600": "#ea580c",
          "700": "#c2410c",
          "800": "#9a3412",
          "900": "#7c2d12",
          "950": "#431407",
          "DEFAULT": "#fb923c"
        },
        "red": {
          "1": "#fee2e2",
          "2": "#fecaca",
          "3": "#fca5a5",
          "4": "#f87171",
          "5": "#ef4444",
          "6": "#dc2626",
          "7": "#b91c1c",
          "8": "#991b1b",
          "9": "#7f1d1d",
          "50": "#fef2f2",
          "100": "#fee2e2",
          "200": "#fecaca",
          "300": "#fca5a5",
          "400": "#f87171",
          "500": "#ef4444",
          "600": "#dc2626",
          "700": "#b91c1c",
          "800": "#991b1b",
          "900": "#7f1d1d",
          "950": "#450a0a",
          "DEFAULT": "#f87171"
        },
        "gray": {
          "1": "#f3f4f6",
          "2": "#e5e7eb",
          "3": "#d1d5db",
          "4": "#9ca3af",
          "5": "#6b7280",
          "6": "#4b5563",
          "7": "#374151",
          "8": "#1f2937",
          "9": "#111827",
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
          "DEFAULT": "#9ca3af"
        },
        "slate": {
          "1": "#f1f5f9",
          "2": "#e2e8f0",
          "3": "#cbd5e1",
          "4": "#94a3b8",
          "5": "#64748b",
          "6": "#475569",
          "7": "#334155",
          "8": "#1e293b",
          "9": "#0f172a",
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a",
          "950": "#020617",
          "DEFAULT": "#94a3b8"
        },
        "zinc": {
          "1": "#f4f4f5",
          "2": "#e4e4e7",
          "3": "#d4d4d8",
          "4": "#a1a1aa",
          "5": "#71717a",
          "6": "#52525b",
          "7": "#3f3f46",
          "8": "#27272a",
          "9": "#18181b",
          "50": "#fafafa",
          "100": "#f4f4f5",
          "200": "#e4e4e7",
          "300": "#d4d4d8",
          "400": "#a1a1aa",
          "500": "#71717a",
          "600": "#52525b",
          "700": "#3f3f46",
          "800": "#27272a",
          "900": "#18181b",
          "950": "#09090b",
          "DEFAULT": "#a1a1aa"
        },
        "neutral": {
          "1": "#f5f5f5",
          "2": "#e5e5e5",
          "3": "#d4d4d4",
          "4": "#a3a3a3",
          "5": "#737373",
          "6": "#525252",
          "7": "#404040",
          "8": "#262626",
          "9": "#171717",
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#e5e5e5",
          "300": "#d4d4d4",
          "400": "#a3a3a3",
          "500": "#737373",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
          "950": "#0a0a0a",
          "DEFAULT": "#a3a3a3"
        },
        "stone": {
          "1": "#f5f5f4",
          "2": "#e7e5e4",
          "3": "#d6d3d1",
          "4": "#a8a29e",
          "5": "#78716c",
          "6": "#57534e",
          "7": "#44403c",
          "8": "#292524",
          "9": "#1c1917",
          "50": "#fafaf9",
          "100": "#f5f5f4",
          "200": "#e7e5e4",
          "300": "#d6d3d1",
          "400": "#a8a29e",
          "500": "#78716c",
          "600": "#57534e",
          "700": "#44403c",
          "800": "#292524",
          "900": "#1c1917",
          "950": "#0c0a09",
          "DEFAULT": "#a8a29e"
        },
        "light": {
          "1": "#fcfcfc",
          "2": "#fafafa",
          "3": "#f8f9fa",
          "4": "#f6f6f6",
          "5": "#f2f2f2",
          "6": "#f1f3f5",
          "7": "#e9ecef",
          "8": "#dee2e6",
          "9": "#dde1e3",
          "50": "#fdfdfd",
          "100": "#fcfcfc",
          "200": "#fafafa",
          "300": "#f8f9fa",
          "400": "#f6f6f6",
          "500": "#f2f2f2",
          "600": "#f1f3f5",
          "700": "#e9ecef",
          "800": "#dee2e6",
          "900": "#dde1e3",
          "950": "#d8dcdf",
          "DEFAULT": "#f6f6f6"
        },
        "dark": {
          "1": "#3c3c3c",
          "2": "#323232",
          "3": "#2d2d2d",
          "4": "#222222",
          "5": "#1f1f1f",
          "6": "#1c1c1e",
          "7": "#1b1b1b",
          "8": "#181818",
          "9": "#0f0f0f",
          "50": "#4a4a4a",
          "100": "#3c3c3c",
          "200": "#323232",
          "300": "#2d2d2d",
          "400": "#222222",
          "500": "#1f1f1f",
          "600": "#1c1c1e",
          "700": "#1b1b1b",
          "800": "#181818",
          "900": "#0f0f0f",
          "950": "#080808",
          "DEFAULT": "#222222"
        },
        "lightblue": {
          "1": "#e0f2fe",
          "2": "#bae6fd",
          "3": "#7dd3fc",
          "4": "#38bdf8",
          "5": "#0ea5e9",
          "6": "#0284c7",
          "7": "#0369a1",
          "8": "#075985",
          "9": "#0c4a6e",
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e",
          "950": "#082f49",
          "DEFAULT": "#38bdf8"
        },
        "lightBlue": {
          "1": "#e0f2fe",
          "2": "#bae6fd",
          "3": "#7dd3fc",
          "4": "#38bdf8",
          "5": "#0ea5e9",
          "6": "#0284c7",
          "7": "#0369a1",
          "8": "#075985",
          "9": "#0c4a6e",
          "50": "#f0f9ff",
          "100": "#e0f2fe",
          "200": "#bae6fd",
          "300": "#7dd3fc",
          "400": "#38bdf8",
          "500": "#0ea5e9",
          "600": "#0284c7",
          "700": "#0369a1",
          "800": "#075985",
          "900": "#0c4a6e",
          "950": "#082f49",
          "DEFAULT": "#38bdf8"
        },
        "warmgray": {
          "1": "#f5f5f4",
          "2": "#e7e5e4",
          "3": "#d6d3d1",
          "4": "#a8a29e",
          "5": "#78716c",
          "6": "#57534e",
          "7": "#44403c",
          "8": "#292524",
          "9": "#1c1917",
          "50": "#fafaf9",
          "100": "#f5f5f4",
          "200": "#e7e5e4",
          "300": "#d6d3d1",
          "400": "#a8a29e",
          "500": "#78716c",
          "600": "#57534e",
          "700": "#44403c",
          "800": "#292524",
          "900": "#1c1917",
          "950": "#0c0a09",
          "DEFAULT": "#a8a29e"
        },
        "warmGray": {
          "1": "#f5f5f4",
          "2": "#e7e5e4",
          "3": "#d6d3d1",
          "4": "#a8a29e",
          "5": "#78716c",
          "6": "#57534e",
          "7": "#44403c",
          "8": "#292524",
          "9": "#1c1917",
          "50": "#fafaf9",
          "100": "#f5f5f4",
          "200": "#e7e5e4",
          "300": "#d6d3d1",
          "400": "#a8a29e",
          "500": "#78716c",
          "600": "#57534e",
          "700": "#44403c",
          "800": "#292524",
          "900": "#1c1917",
          "950": "#0c0a09",
          "DEFAULT": "#a8a29e"
        },
        "truegray": {
          "1": "#f5f5f5",
          "2": "#e5e5e5",
          "3": "#d4d4d4",
          "4": "#a3a3a3",
          "5": "#737373",
          "6": "#525252",
          "7": "#404040",
          "8": "#262626",
          "9": "#171717",
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#e5e5e5",
          "300": "#d4d4d4",
          "400": "#a3a3a3",
          "500": "#737373",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
          "950": "#0a0a0a",
          "DEFAULT": "#a3a3a3"
        },
        "trueGray": {
          "1": "#f5f5f5",
          "2": "#e5e5e5",
          "3": "#d4d4d4",
          "4": "#a3a3a3",
          "5": "#737373",
          "6": "#525252",
          "7": "#404040",
          "8": "#262626",
          "9": "#171717",
          "50": "#fafafa",
          "100": "#f5f5f5",
          "200": "#e5e5e5",
          "300": "#d4d4d4",
          "400": "#a3a3a3",
          "500": "#737373",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
          "950": "#0a0a0a",
          "DEFAULT": "#a3a3a3"
        },
        "coolgray": {
          "1": "#f3f4f6",
          "2": "#e5e7eb",
          "3": "#d1d5db",
          "4": "#9ca3af",
          "5": "#6b7280",
          "6": "#4b5563",
          "7": "#374151",
          "8": "#1f2937",
          "9": "#111827",
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
          "DEFAULT": "#9ca3af"
        },
        "coolGray": {
          "1": "#f3f4f6",
          "2": "#e5e7eb",
          "3": "#d1d5db",
          "4": "#9ca3af",
          "5": "#6b7280",
          "6": "#4b5563",
          "7": "#374151",
          "8": "#1f2937",
          "9": "#111827",
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
          "DEFAULT": "#9ca3af"
        },
        "bluegray": {
          "1": "#f1f5f9",
          "2": "#e2e8f0",
          "3": "#cbd5e1",
          "4": "#94a3b8",
          "5": "#64748b",
          "6": "#475569",
          "7": "#334155",
          "8": "#1e293b",
          "9": "#0f172a",
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a",
          "950": "#020617",
          "DEFAULT": "#94a3b8"
        },
        "blueGray": {
          "1": "#f1f5f9",
          "2": "#e2e8f0",
          "3": "#cbd5e1",
          "4": "#94a3b8",
          "5": "#64748b",
          "6": "#475569",
          "7": "#334155",
          "8": "#1e293b",
          "9": "#0f172a",
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "200": "#e2e8f0",
          "300": "#cbd5e1",
          "400": "#94a3b8",
          "500": "#64748b",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a",
          "950": "#020617",
          "DEFAULT": "#94a3b8"
        }
      },
      "fontFamily": {
        "sans": "ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"",
        "serif": "ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif",
        "mono": "ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace"
      },
      "fontSize": {
        "xs": ["0.75rem", "1rem"],
        "sm": ["0.875rem", "1.25rem"],
        "base": ["1rem", "1.5rem"],
        "lg": ["1.125rem", "1.75rem"],
        "xl": ["1.25rem", "1.75rem"],
        "2xl": ["1.5rem", "2rem"],
        "3xl": ["1.875rem", "2.25rem"],
        "4xl": ["2.25rem", "2.5rem"],
        "5xl": ["3rem", "1"],
        "6xl": ["3.75rem", "1"],
        "7xl": ["4.5rem", "1"],
        "8xl": ["6rem", "1"],
        "9xl": ["8rem", "1"]
      },
      "fontWeight": {
        "thin": "100",
        "extralight": "200",
        "light": "300",
        "normal": "400",
        "medium": "500",
        "semibold": "600",
        "bold": "700",
        "extrabold": "800",
        "black": "900"
      },
      "breakpoints": {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      "verticalBreakpoints": {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      "borderRadius": {
        "DEFAULT": "0.25rem",
        "none": "0",
        "sm": "0.125rem",
        "md": "0.375rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "full": "9999px"
      },
      "lineHeight": {
        "none": "1",
        "tight": "1.25",
        "snug": "1.375",
        "normal": "1.5",
        "relaxed": "1.625",
        "loose": "2"
      },
      "letterSpacing": {
        "tighter": "-0.05em",
        "tight": "-0.025em",
        "normal": "0em",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em"
      },
      "wordSpacing": {
        "tighter": "-0.05em",
        "tight": "-0.025em",
        "normal": "0em",
        "wide": "0.025em",
        "wider": "0.05em",
        "widest": "0.1em"
      },
      "boxShadow": {
        "DEFAULT": ["var(--un-shadow-inset) 0 1px 3px 0 rgb(0 0 0 / 0.1)",
          "var(--un-shadow-inset) 0 1px 2px -1px rgb(0 0 0 / 0.1)"
        ],
        "none": "0 0 rgb(0 0 0 / 0)",
        "sm": "var(--un-shadow-inset) 0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "md": ["var(--un-shadow-inset) 0 4px 6px -1px rgb(0 0 0 / 0.1)",
          "var(--un-shadow-inset) 0 2px 4px -2px rgb(0 0 0 / 0.1)"
        ],
        "lg": ["var(--un-shadow-inset) 0 10px 15px -3px rgb(0 0 0 / 0.1)",
          "var(--un-shadow-inset) 0 4px 6px -4px rgb(0 0 0 / 0.1)"
        ],
        "xl": ["var(--un-shadow-inset) 0 20px 25px -5px rgb(0 0 0 / 0.1)",
          "var(--un-shadow-inset) 0 8px 10px -6px rgb(0 0 0 / 0.1)"
        ],
        "2xl": "var(--un-shadow-inset) 0 25px 50px -12px rgb(0 0 0 / 0.25)",
        "inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)"
      },
      "textIndent": {
        "DEFAULT": "1.5rem",
        "xs": "0.5rem",
        "sm": "1rem",
        "md": "1.5rem",
        "lg": "2rem",
        "xl": "2.5rem",
        "2xl": "3rem",
        "3xl": "4rem"
      },
      "textShadow": {
        "DEFAULT": ["0 0 1px rgb(0 0 0 / 0.2)", "0 0 1px rgb(1 0 5 / 0.1)"],
        "none": "0 0 rgb(0 0 0 / 0)",
        "sm": "1px 1px 3px rgb(36 37 47 / 0.25)",
        "md": ["0 1px 2px rgb(30 29 39 / 0.19)", "1px 2px 4px rgb(54 64 147 / 0.18)"],
        "lg": ["3px 3px 6px rgb(0 0 0 / 0.26)", "0 0 5px rgb(15 3 86 / 0.22)"],
        "xl": ["1px 1px 3px rgb(0 0 0 / 0.29)", "2px 4px 7px rgb(73 64 125 / 0.35)"]
      },
      "textStrokeWidth": {
        "DEFAULT": "1.5rem",
        "none": "0",
        "sm": "thin",
        "md": "medium",
        "lg": "thick"
      },
      "blur": {
        "0": "0",
        "DEFAULT": "8px",
        "sm": "4px",
        "md": "12px",
        "lg": "16px",
        "xl": "24px",
        "2xl": "40px",
        "3xl": "64px"
      },
      "dropShadow": {
        "DEFAULT": ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
        "sm": "0 1px 1px rgb(0 0 0 / 0.05)",
        "md": ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
        "lg": ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
        "xl": ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
        "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
        "none": "0 0 rgb(0 0 0 / 0)"
      },
      "easing": {
        "DEFAULT": "cubic-bezier(0.4, 0, 0.2, 1)",
        "linear": "linear",
        "in": "cubic-bezier(0.4, 0, 1, 1)",
        "out": "cubic-bezier(0, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
      },
      "transitionProperty": {
        "none": "none",
        "all": "all",
        "colors": "color,background-color,border-color,text-decoration-color,fill,stroke",
        "opacity": "opacity",
        "shadow": "box-shadow",
        "transform": "transform",
        "DEFAULT": "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter"
      },
      "lineWidth": {
        "DEFAULT": "1px",
        "none": "0"
      },
      "spacing": {
        "DEFAULT": "1rem",
        "none": "0",
        "xs": "0.75rem",
        "sm": "0.875rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem"
      },
      "duration": {
        "75": "75ms",
        "100": "100ms",
        "150": "150ms",
        "200": "200ms",
        "300": "300ms",
        "500": "500ms",
        "700": "700ms",
        "1000": "1000ms",
        "DEFAULT": "150ms",
        "none": "0s"
      },
      "ringWidth": {
        "DEFAULT": "3px",
        "none": "0"
      },
      "preflightBase": {
        "--un-rotate": 0,
        "--un-rotate-x": 0,
        "--un-rotate-y": 0,
        "--un-rotate-z": 0,
        "--un-scale-x": 1,
        "--un-scale-y": 1,
        "--un-scale-z": 1,
        "--un-skew-x": 0,
        "--un-skew-y": 0,
        "--un-translate-x": 0,
        "--un-translate-y": 0,
        "--un-translate-z": 0,
        "--un-pan-x": " ",
        "--un-pan-y": " ",
        "--un-pinch-zoom": " ",
        "--un-scroll-snap-strictness": "proximity",
        "--un-ordinal": " ",
        "--un-slashed-zero": " ",
        "--un-numeric-figure": " ",
        "--un-numeric-spacing": " ",
        "--un-numeric-fraction": " ",
        "--un-border-spacing-x": 0,
        "--un-border-spacing-y": 0,
        "--un-ring-offset-shadow": "0 0 rgb(0 0 0 / 0)",
        "--un-ring-shadow": "0 0 rgb(0 0 0 / 0)",
        "--un-shadow-inset": " ",
        "--un-shadow": "0 0 rgb(0 0 0 / 0)",
        "--un-ring-inset": " ",
        "--un-ring-offset-width": "0px",
        "--un-ring-offset-color": "#fff",
        "--un-ring-width": "0px",
        "--un-ring-color": "rgb(147 197 253 / 0.5)",
        "--un-blur": " ",
        "--un-brightness": " ",
        "--un-contrast": " ",
        "--un-drop-shadow": " ",
        "--un-grayscale": " ",
        "--un-hue-rotate": " ",
        "--un-invert": " ",
        "--un-saturate": " ",
        "--un-sepia": " ",
        "--un-backdrop-blur": " ",
        "--un-backdrop-brightness": " ",
        "--un-backdrop-contrast": " ",
        "--un-backdrop-grayscale": " ",
        "--un-backdrop-hue-rotate": " ",
        "--un-backdrop-invert": " ",
        "--un-backdrop-opacity": " ",
        "--un-backdrop-saturate": " ",
        "--un-backdrop-sepia": " "
      },
      "containers": {
        "xs": "20rem",
        "sm": "24rem",
        "md": "28rem",
        "lg": "32rem",
        "xl": "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "prose": "65ch"
      },
      "zIndex": {
        "auto": "auto"
      },
      "media": {
        "portrait": "(orientation: portrait)",
        "landscape": "(orientation: landscape)",
        "os_dark": "(prefers-color-scheme: dark)",
        "os_light": "(prefers-color-scheme: light)",
        "motion_ok": "(prefers-reduced-motion: no-preference)",
        "motion_not_ok": "(prefers-reduced-motion: reduce)",
        "high_contrast": "(prefers-contrast: high)",
        "low_contrast": "(prefers-contrast: low)",
        "opacity_ok": "(prefers-reduced-transparency: no-preference)",
        "opacity_not_ok": "(prefers-reduced-transparency: reduce)",
        "use_data_ok": "(prefers-reduced-data: no-preference)",
        "use_data_not_ok": "(prefers-reduced-data: reduce)",
        "touch": "(hover: none) and (pointer: coarse)",
        "stylus": "(hover: none) and (pointer: fine)",
        "pointer": "(hover) and (pointer: coarse)",
        "mouse": "(hover) and (pointer: fine)",
        "hd_color": "(dynamic-range: high)"
      },
      "aria": {
        "busy": "busy=\"true\"",
        "checked": "checked=\"true\"",
        "disabled": "disabled=\"true\"",
        "expanded": "expanded=\"true\"",
        "hidden": "hidden=\"true\"",
        "pressed": "pressed=\"true\"",
        "readonly": "readonly=\"true\"",
        "required": "required=\"true\"",
        "selected": "selected=\"true\""
      },
      "animation": {
        "keyframes": {
          "pulse": "{0%, 100% {opacity:1} 50% {opacity:.5}}",
          "bounce": "{0%, 100% {transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1)} 50% {transform:translateY(0);animation-timing-function:cubic-bezier(0,0,0.2,1)}}",
          "spin": "{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
          "ping": "{0%{transform:scale(1);opacity:1}75%,100%{transform:scale(2);opacity:0}}",
          "bounce-alt": "{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,0.05,0.855,0.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}",
          "flash": "{from,50%,to{opacity:1}25%,75%{opacity:0}}",
          "pulse-alt": "{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scale3d(1,1,1)}}",
          "rubber-band": "{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,0.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,0.85,1)}65%{transform:scale3d(0.95,1.05,1)}75%{transform:scale3d(1.05,0.95,1)}to{transform:scale3d(1,1,1)}}",
          "shake-x": "{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}",
          "shake-y": "{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(0,-10px,0)}20%,40%,60%,80%{transform:translate3d(0,10px,0)}}",
          "head-shake": "{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}",
          "swing": "{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}to{transform:rotate3d(0,0,1,0deg)}}",
          "tada": "{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(0.9,0.9,0.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{transform:scale3d(1,1,1)}}",
          "wobble": "{from{transform:translate3d(0,0,0)}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{transform:translate3d(0,0,0)}}",
          "jello": "{from,11.1%,to{transform:translate3d(0,0,0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg)skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}",
          "heart-beat": "{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}",
          "hinge": "{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;animation-timing-function:ease-in-out}to{transform:translate3d(0,700px,0);opacity:0}}",
          "jack-in-the-box": "{from{opacity:0;transform-origin:center bottom;transform:scale(0.1) rotate(30deg)}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{transform:scale(1)}}",
          "light-speed-in-left": "{from{opacity:0;transform:translate3d(-100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
          "light-speed-in-right": "{from{opacity:0;transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}",
          "light-speed-out-left": "{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0) skewX(30deg)}}",
          "light-speed-out-right": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}",
          "flip": "{from{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);animation-timing-function:ease-out}40%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(0.95,0.95,0.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);animation-timing-function:ease-in}}",
          "flip-in-x": "{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{transform:perspective(400px)}}",
          "flip-in-y": "{from{transform:perspective(400px) rotate3d(0,1,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{transform:perspective(400px)}}",
          "flip-out-x": "{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}",
          "flip-out-y": "{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}",
          "rotate-in": "{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}to{transform-origin:center;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-in-down-left": "{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}to{transform-origin:left bottom;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-in-down-right": "{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-in-up-left": "{from{transform-origin:left top;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:left top;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-in-up-right": "{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}",
          "rotate-out": "{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}",
          "rotate-out-down-left": "{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}",
          "rotate-out-down-right": "{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
          "rotate-out-up-left": "{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}",
          "rotate-out-up-right": "{from{transform-origin:right bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}",
          "roll-in": "{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "roll-out": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}",
          "zoom-in": "{from{opacity:0;transform:scale3d(0.3,0.3,0.3)}50%{opacity:1}}",
          "zoom-in-down": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-in-left": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-in-right": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-in-up": "{from{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}60%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-out": "{from{opacity:1}50%{opacity:0;transform:scale3d(0.3,0.3,0.3)}to{opacity:0}}",
          "zoom-out-down": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "zoom-out-left": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(-2000px,0,0);transform-origin:left center}}",
          "zoom-out-right": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(0.1) translate3d(2000px,0,0);transform-origin:right center}}",
          "zoom-out-up": "{40%{opacity:1;transform:scale3d(0.475,0.475,0.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.55,0.055,0.675,0.19)}to{opacity:0;transform:scale3d(0.1,0.1,0.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.32,1)}}",
          "bounce-in": "{from,20%,40%,60%,80%,to{animation-timing-function:ease-in-out}0%{opacity:0;transform:scale3d(0.3,0.3,0.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(0.9,0.9,0.9)}60%{transform:scale3d(1.03,1.03,1.03);opacity:1}80%{transform:scale3d(0.97,0.97,0.97)}to{opacity:1;transform:scale3d(1,1,1)}}",
          "bounce-in-down": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translate3d(0,0,0)}}",
          "bounce-in-left": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translate3d(0,0,0)}}",
          "bounce-in-right": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translate3d(0,0,0)}}",
          "bounce-in-up": "{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.61,0.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}",
          "bounce-out": "{20%{transform:scale3d(0.9,0.9,0.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(0.3,0.3,0.3)}}",
          "bounce-out-down": "{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}",
          "bounce-out-left": "{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
          "bounce-out-right": "{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}",
          "bounce-out-up": "{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
          "slide-in-down": "{from{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
          "slide-in-left": "{from{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
          "slide-in-right": "{from{transform:translate3d(100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
          "slide-in-up": "{from{transform:translate3d(0,100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}",
          "slide-out-down": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}",
          "slide-out-left": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}",
          "slide-out-right": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}",
          "slide-out-up": "{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}",
          "fade-in": "{from{opacity:0}to{opacity:1}}",
          "fade-in-down": "{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-down-big": "{from{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-left": "{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-left-big": "{from{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-right": "{from{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-right-big": "{from{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-up": "{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-up-big": "{from{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-top-left": "{from{opacity:0;transform:translate3d(-100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-top-right": "{from{opacity:0;transform:translate3d(100%,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-bottom-left": "{from{opacity:0;transform:translate3d(-100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-in-bottom-right": "{from{opacity:0;transform:translate3d(100%,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}",
          "fade-out": "{from{opacity:1}to{opacity:0}}",
          "fade-out-down": "{from{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}",
          "fade-out-down-big": "{from{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}",
          "fade-out-left": "{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}",
          "fade-out-left-big": "{from{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}",
          "fade-out-right": "{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}",
          "fade-out-right-big": "{from{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}",
          "fade-out-up": "{from{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}",
          "fade-out-up-big": "{from{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}",
          "fade-out-top-left": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,-100%,0)}}",
          "fade-out-top-right": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,-100%,0)}}",
          "fade-out-bottom-left": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(-100%,100%,0)}}",
          "fade-out-bottom-right": "{from{opacity:1;transform:translate3d(0,0,0)}to{opacity:0;transform:translate3d(100%,100%,0)}}",
          "back-in-up": "{0%{opacity:0.7;transform:translateY(1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
          "back-in-down": "{0%{opacity:0.7;transform:translateY(-1200px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
          "back-in-right": "{0%{opacity:0.7;transform:translateX(2000px) scale(0.7)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
          "back-in-left": "{0%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}80%{opacity:0.7;transform:translateX(0px) scale(0.7)}100%{opacity:1;transform:scale(1)}}",
          "back-out-up": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}",
          "back-out-down": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateY(700px) scale(0.7)}}",
          "back-out-right": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateY(0px) scale(0.7)}100%{opacity:0.7;transform:translateX(2000px) scale(0.7)}}",
          "back-out-left": "{0%{opacity:1;transform:scale(1)}80%{opacity:0.7;transform:translateX(-2000px) scale(0.7)}100%{opacity:0.7;transform:translateY(-700px) scale(0.7)}}"
        },
        "durations": {
          "pulse": "2s",
          "heart-beat": "1.3s",
          "bounce-in": "0.75s",
          "bounce-out": "0.75s",
          "flip-out-x": "0.75s",
          "flip-out-y": "0.75s",
          "hinge": "2s"
        },
        "timingFns": {
          "pulse": "cubic-bezier(0.4,0,.6,1)",
          "ping": "cubic-bezier(0,0,.2,1)",
          "head-shake": "ease-in-out",
          "heart-beat": "ease-in-out",
          "pulse-alt": "ease-in-out",
          "light-speed-in-left": "ease-out",
          "light-speed-in-right": "ease-out",
          "light-speed-out-left": "ease-in",
          "light-speed-out-right": "ease-in"
        },
        "properties": {
          "bounce-alt": {
            "transform-origin": "center bottom"
          },
          "jello": {
            "transform-origin": "center"
          },
          "swing": {
            "transform-origin": "top center"
          },
          "flip": {
            "backface-visibility": "visible"
          },
          "flip-in-x": {
            "backface-visibility": "visible !important"
          },
          "flip-in-y": {
            "backface-visibility": "visible !important"
          },
          "flip-out-x": {
            "backface-visibility": "visible !important"
          },
          "flip-out-y": {
            "backface-visibility": "visible !important"
          },
          "rotate-in": {
            "transform-origin": "center"
          },
          "rotate-in-down-left": {
            "transform-origin": "left bottom"
          },
          "rotate-in-down-right": {
            "transform-origin": "right bottom"
          },
          "rotate-in-up-left": {
            "transform-origin": "left bottom"
          },
          "rotate-in-up-right": {
            "transform-origin": "right bottom"
          },
          "rotate-out": {
            "transform-origin": "center"
          },
          "rotate-out-down-left": {
            "transform-origin": "left bottom"
          },
          "rotate-out-down-right": {
            "transform-origin": "right bottom"
          },
          "rotate-out-up-left": {
            "transform-origin": "left bottom"
          },
          "rotate-out-up-right": {
            "transform-origin": "right bottom"
          },
          "hinge": {
            "transform-origin": "top left"
          },
          "zoom-out-down": {
            "transform-origin": "center bottom"
          },
          "zoom-out-left": {
            "transform-origin": "left center"
          },
          "zoom-out-right": {
            "transform-origin": "right center"
          },
          "zoom-out-up": {
            "transform-origin": "center bottom"
          }
        },
        "counts": {
          "spin": "infinite",
          "ping": "infinite",
          "pulse": "infinite",
          "pulse-alt": "infinite",
          "bounce": "infinite",
          "bounce-alt": "infinite"
        },
        "category": {
          "pulse": "Attention Seekers",
          "bounce": "Attention Seekers",
          "spin": "Attention Seekers",
          "ping": "Attention Seekers",
          "bounce-alt": "Attention Seekers",
          "flash": "Attention Seekers",
          "pulse-alt": "Attention Seekers",
          "rubber-band": "Attention Seekers",
          "shake-x": "Attention Seekers",
          "shake-y": "Attention Seekers",
          "head-shake": "Attention Seekers",
          "swing": "Attention Seekers",
          "tada": "Attention Seekers",
          "wobble": "Attention Seekers",
          "jello": "Attention Seekers",
          "heart-beat": "Attention Seekers",
          "hinge": "Specials",
          "jack-in-the-box": "Specials",
          "light-speed-in-left": "Lightspeed",
          "light-speed-in-right": "Lightspeed",
          "light-speed-out-left": "Lightspeed",
          "light-speed-out-right": "Lightspeed",
          "flip": "Flippers",
          "flip-in-x": "Flippers",
          "flip-in-y": "Flippers",
          "flip-out-x": "Flippers",
          "flip-out-y": "Flippers",
          "rotate-in": "Rotating Entrances",
          "rotate-in-down-left": "Rotating Entrances",
          "rotate-in-down-right": "Rotating Entrances",
          "rotate-in-up-left": "Rotating Entrances",
          "rotate-in-up-right": "Rotating Entrances",
          "rotate-out": "Rotating Exits",
          "rotate-out-down-left": "Rotating Exits",
          "rotate-out-down-right": "Rotating Exits",
          "rotate-out-up-left": "Rotating Exits",
          "rotate-out-up-right": "Rotating Exits",
          "roll-in": "Specials",
          "roll-out": "Specials",
          "zoom-in": "Zooming Entrances",
          "zoom-in-down": "Zooming Entrances",
          "zoom-in-left": "Zooming Entrances",
          "zoom-in-right": "Zooming Entrances",
          "zoom-in-up": "Zooming Entrances",
          "zoom-out": "Zooming Exits",
          "zoom-out-down": "Zooming Exits",
          "zoom-out-left": "Zooming Exits",
          "zoom-out-right": "Zooming Exits",
          "zoom-out-up": "Zooming Exits",
          "bounce-in": "Bouncing Entrances",
          "bounce-in-down": "Bouncing Entrances",
          "bounce-in-left": "Bouncing Entrances",
          "bounce-in-right": "Bouncing Entrances",
          "bounce-in-up": "Bouncing Entrances",
          "bounce-out": "Bouncing Exits",
          "bounce-out-down": "Bouncing Exits",
          "bounce-out-left": "Bouncing Exits",
          "bounce-out-right": "Bouncing Exits",
          "bounce-out-up": "Bouncing Exits",
          "slide-in-down": "Sliding Entrances",
          "slide-in-left": "Sliding Entrances",
          "slide-in-right": "Sliding Entrances",
          "slide-in-up": "Sliding Entrances",
          "slide-out-down": "Sliding Exits",
          "slide-out-left": "Sliding Exits",
          "slide-out-right": "Sliding Exits",
          "slide-out-up": "Sliding Exits",
          "fade-in": "Fading Entrances",
          "fade-in-down": "Fading Entrances",
          "fade-in-down-big": "Fading Entrances",
          "fade-in-left": "Fading Entrances",
          "fade-in-left-big": "Fading Entrances",
          "fade-in-right": "Fading Entrances",
          "fade-in-right-big": "Fading Entrances",
          "fade-in-up": "Fading Entrances",
          "fade-in-up-big": "Fading Entrances",
          "fade-in-top-left": "Fading Entrances",
          "fade-in-top-right": "Fading Entrances",
          "fade-in-bottom-left": "Fading Entrances",
          "fade-in-bottom-right": "Fading Entrances",
          "fade-out": "Fading Exits",
          "fade-out-down": "Fading Exits",
          "fade-out-down-big": "Fading Exits",
          "fade-out-left": "Fading Exits",
          "fade-out-left-big": "Fading Exits",
          "fade-out-right": "Fading Exits",
          "fade-out-right-big": "Fading Exits",
          "fade-out-up": "Fading Exits",
          "fade-out-up-big": "Fading Exits",
          "fade-out-top-left": "Fading Exits",
          "fade-out-top-right": "Fading Exits",
          "fade-out-bottom-left": "Fading Exits",
          "fade-out-bottom-right": "Fading Exits",
          "back-in-up": "Back Entrances",
          "back-in-down": "Back Entrances",
          "back-in-right": "Back Entrances",
          "back-in-left": "Back Entrances",
          "back-out-up": "Back Exits",
          "back-out-down": "Back Exits",
          "back-out-right": "Back Exits",
          "back-out-left": "Back Exits"
        }
      },
      "supports": {
        "grid": "(display: grid)"
      }
    },
    "rules": [
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "internal": true
      }],
      [{}, null],
      ["sr-only", {
        "position": "absolute",
        "width": "1px",
        "height": "1px",
        "padding": "0",
        "margin": "-1px",
        "overflow": "hidden",
        "clip": "rect(0,0,0,0)",
        "white-space": "nowrap",
        "border-width": 0
      }],
      ["not-sr-only", {
        "position": "static",
        "width": "auto",
        "height": "auto",
        "padding": "0",
        "margin": "0",
        "overflow": "visible",
        "clip": "auto",
        "white-space": "normal"
      }],
      ["pointer-events-auto", {
        "pointer-events": "auto"
      }],
      ["pointer-events-none", {
        "pointer-events": "none"
      }],
      ["pointer-events-inherit", {
        "pointer-events": "inherit"
      }],
      ["pointer-events-initial", {
        "pointer-events": "initial"
      }],
      ["pointer-events-revert", {
        "pointer-events": "revert"
      }],
      ["pointer-events-revert-layer", {
        "pointer-events": "revert-layer"
      }],
      ["pointer-events-unset", {
        "pointer-events": "unset"
      }],
      ["visible", {
        "visibility": "visible"
      }],
      ["invisible", {
        "visibility": "hidden"
      }],
      ["backface-visible", {
        "backface-visibility": "visible"
      }],
      ["backface-hidden", {
        "backface-visibility": "hidden"
      }],
      ["backface-inherit", {
        "backface-visibility": "inherit"
      }],
      ["backface-initial", {
        "backface-visibility": "initial"
      }],
      ["backface-revert", {
        "backface-visibility": "revert"
      }],
      ["backface-revert-layer", {
        "backface-visibility": "revert-layer"
      }],
      ["backface-unset", {
        "backface-visibility": "unset"
      }],
      [{}, null, {
        "autocomplete": ["(position|pos)-<position>", "(position|pos)-<globalKeyword>",
          "<position>"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": ["(position|pos)-inset-<directions>-$spacing",
          "(position|pos)-inset-(block|inline)-$spacing",
          "(position|pos)-inset-(bs|be|is|ie)-$spacing",
          "(position|pos)-(top|left|right|bottom)-$spacing"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": ["line-clamp", "line-clamp-<num>"]
      }],
      ["line-clamp-none", {
        "overflow": "visible",
        "display": "block",
        "-webkit-box-orient": "horizontal",
        "-webkit-line-clamp": "none",
        "line-clamp": "none"
      }],
      ["line-clamp-inherit", {
        "overflow": "visible",
        "display": "block",
        "-webkit-box-orient": "horizontal",
        "-webkit-line-clamp": "inherit",
        "line-clamp": "inherit"
      }],
      ["line-clamp-initial", {
        "overflow": "visible",
        "display": "block",
        "-webkit-box-orient": "horizontal",
        "-webkit-line-clamp": "initial",
        "line-clamp": "initial"
      }],
      ["line-clamp-revert", {
        "overflow": "visible",
        "display": "block",
        "-webkit-box-orient": "horizontal",
        "-webkit-line-clamp": "revert",
        "line-clamp": "revert"
      }],
      ["line-clamp-revert-layer", {
        "overflow": "visible",
        "display": "block",
        "-webkit-box-orient": "horizontal",
        "-webkit-line-clamp": "revert-layer",
        "line-clamp": "revert-layer"
      }],
      ["line-clamp-unset", {
        "overflow": "visible",
        "display": "block",
        "-webkit-box-orient": "horizontal",
        "-webkit-line-clamp": "unset",
        "line-clamp": "unset"
      }],
      ["isolate", {
        "isolation": "isolate"
      }],
      ["isolate-auto", {
        "isolation": "auto"
      }],
      ["isolation-auto", {
        "isolation": "auto"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": "z-<num>"
      }],
      [{}, null],
      ["order-first", {
        "order": "-9999"
      }],
      ["order-last", {
        "order": "9999"
      }],
      ["order-none", {
        "order": "0"
      }],
      ["grid", {
        "display": "grid"
      }],
      ["inline-grid", {
        "display": "inline-grid"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": "(grid-row|grid-col|row|col)-span-<num>"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": "(grid-row|grid-col|row|col)-(start|end)-<num>"
      }],
      [{}, null, {
        "autocomplete": "(grid-auto|auto)-(rows|cols)-<num>"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": [
          "(grid-auto-flow|auto-flow|grid-flow)-(row|col|dense|row-dense|col-dense)"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": "(grid-rows|grid-cols|rows|cols)-<num>"
      }],
      [{}, null],
      ["grid-rows-none", {
        "grid-template-rows": "none"
      }],
      ["grid-cols-none", {
        "grid-template-columns": "none"
      }],
      ["grid-rows-subgrid", {
        "grid-template-rows": "subgrid"
      }],
      ["grid-cols-subgrid", {
        "grid-template-columns": "subgrid"
      }],
      ["float-left", {
        "float": "left"
      }],
      ["float-right", {
        "float": "right"
      }],
      ["float-start", {
        "float": "inline-start"
      }],
      ["float-end", {
        "float": "inline-end"
      }],
      ["float-none", {
        "float": "none"
      }],
      ["float-inherit", {
        "float": "inherit"
      }],
      ["float-initial", {
        "float": "initial"
      }],
      ["float-revert", {
        "float": "revert"
      }],
      ["float-revert-layer", {
        "float": "revert-layer"
      }],
      ["float-unset", {
        "float": "unset"
      }],
      ["clear-left", {
        "clear": "left"
      }],
      ["clear-right", {
        "clear": "right"
      }],
      ["clear-both", {
        "clear": "both"
      }],
      ["clear-start", {
        "clear": "inline-start"
      }],
      ["clear-end", {
        "clear": "inline-end"
      }],
      ["clear-none", {
        "clear": "none"
      }],
      ["clear-inherit", {
        "clear": "inherit"
      }],
      ["clear-initial", {
        "clear": "initial"
      }],
      ["clear-revert", {
        "clear": "revert"
      }],
      ["clear-revert-layer", {
        "clear": "revert-layer"
      }],
      ["clear-unset", {
        "clear": "unset"
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      ["box-border", {
        "box-sizing": "border-box"
      }],
      ["box-content", {
        "box-sizing": "content-box"
      }],
      ["box-inherit", {
        "box-sizing": "inherit"
      }],
      ["box-initial", {
        "box-sizing": "initial"
      }],
      ["box-revert", {
        "box-sizing": "revert"
      }],
      ["box-revert-layer", {
        "box-sizing": "revert-layer"
      }],
      ["box-unset", {
        "box-sizing": "unset"
      }],
      ["inline", {
        "display": "inline"
      }],
      ["block", {
        "display": "block"
      }],
      ["inline-block", {
        "display": "inline-block"
      }],
      ["contents", {
        "display": "contents"
      }],
      ["flow-root", {
        "display": "flow-root"
      }],
      ["list-item", {
        "display": "list-item"
      }],
      ["hidden", {
        "display": "none"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": ["aspect-(square|video|ratio)", "aspect-ratio-(square|video)"]
      }],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": [
          "(w|h)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
          "(block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
          "(max|min)-(w|h|block|inline)",
          "(max|min)-(w|h|block|inline)-$width|height|maxWidth|maxHeight|minWidth|minHeight|inlineSize|blockSize|maxInlineSize|maxBlockSize|minInlineSize|minBlockSize",
          "(w|h)-full", "(max|min)-(w|h)-full"
        ]
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": ["(w|h)-screen", "(min|max)-(w|h)-screen",
          "h-screen-$verticalBreakpoints", "(min|max)-h-screen-$verticalBreakpoints",
          "w-screen-$breakpoints", "(min|max)-w-screen-$breakpoints"
        ]
      }],
      ["flex", {
        "display": "flex"
      }],
      ["inline-flex", {
        "display": "inline-flex"
      }],
      ["flex-inline", {
        "display": "inline-flex"
      }],
      [{}, null],
      ["flex-1", {
        "flex": "1 1 0%"
      }],
      ["flex-auto", {
        "flex": "1 1 auto"
      }],
      ["flex-initial", {
        "flex": "0 1 auto"
      }],
      ["flex-none", {
        "flex": "none"
      }],
      [{}, null, {
        "autocomplete": ["flex-shrink-<num>", "shrink-<num>"]
      }],
      [{}, null, {
        "autocomplete": ["flex-grow-<num>", "grow-<num>"]
      }],
      [{}, null, {
        "autocomplete": ["flex-basis-$spacing", "basis-$spacing"]
      }],
      ["flex-row", {
        "flex-direction": "row"
      }],
      ["flex-row-reverse", {
        "flex-direction": "row-reverse"
      }],
      ["flex-col", {
        "flex-direction": "column"
      }],
      ["flex-col-reverse", {
        "flex-direction": "column-reverse"
      }],
      ["flex-wrap", {
        "flex-wrap": "wrap"
      }],
      ["flex-wrap-reverse", {
        "flex-wrap": "wrap-reverse"
      }],
      ["flex-nowrap", {
        "flex-wrap": "nowrap"
      }],
      ["inline-table", {
        "display": "inline-table"
      }],
      ["table", {
        "display": "table"
      }],
      ["table-caption", {
        "display": "table-caption"
      }],
      ["table-cell", {
        "display": "table-cell"
      }],
      ["table-column", {
        "display": "table-column"
      }],
      ["table-column-group", {
        "display": "table-column-group"
      }],
      ["table-footer-group", {
        "display": "table-footer-group"
      }],
      ["table-header-group", {
        "display": "table-header-group"
      }],
      ["table-row", {
        "display": "table-row"
      }],
      ["table-row-group", {
        "display": "table-row-group"
      }],
      ["border-collapse", {
        "border-collapse": "collapse"
      }],
      ["border-separate", {
        "border-collapse": "separate"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-border-spacing-x", "--un-border-spacing-y"]
        },
        "autocomplete": ["border-spacing", "border-spacing-$spacing"]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-border-spacing-x", "--un-border-spacing-y"]
        },
        "autocomplete": ["border-spacing-(x|y)", "border-spacing-(x|y)-$spacing"]
      }],
      ["caption-top", {
        "caption-side": "top"
      }],
      ["caption-bottom", {
        "caption-side": "bottom"
      }],
      ["table-auto", {
        "table-layout": "auto"
      }],
      ["table-fixed", {
        "table-layout": "fixed"
      }],
      ["table-empty-cells-visible", {
        "empty-cells": "show"
      }],
      ["table-empty-cells-hidden", {
        "empty-cells": "hide"
      }],
      [{}, null, {
        "autocomplete": [
          "transform-origin-(top|top-center|top-left|top-right|bottom|bottom-center|bottom-left|bottom-right|left|left-center|left-top|left-bottom|right|right-center|right-top|right-bottom|center|center-top|center-bottom|center-left|center-right|center-center|t|tc|tl|tr|b|bc|bl|br|l|lc|lt|lb|r|rc|rt|rb|c|ct|cb|cl|cr|cc)",
          "origin-(top|top-center|top-left|top-right|bottom|bottom-center|bottom-left|bottom-right|left|left-center|left-top|left-bottom|right|right-center|right-top|right-bottom|center|center-top|center-bottom|center-left|center-right|center-center|t|tc|tl|tr|b|bc|bl|br|l|lc|lt|lb|r|rc|rt|rb|c|ct|cb|cl|cr|cc)"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        }
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        }
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        }
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        }
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        }
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        },
        "autocomplete": ["transform-skew-(x|y)-<percent>", "skew-(x|y)-<percent>"]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        }
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        },
        "autocomplete": ["transform-(translate|rotate|scale)-<percent>",
          "transform-(translate|rotate|scale)-(x|y|z)-<percent>",
          "(translate|rotate|scale)-<percent>",
          "(translate|rotate|scale)-(x|y|z)-<percent>"
        ]
      }],
      [{}, null],
      [{}, null],
      ["transform", {
        "transform": "translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))"
      }, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        }
      }],
      ["transform-cpu", {
        "transform": "translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) rotate(var(--un-rotate)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y))"
      }, {
        "custom": {
          "preflightKeys": ["--un-translate-x", "--un-translate-y", "--un-rotate",
            "--un-rotate-z", "--un-skew-x", "--un-skew-y", "--un-scale-x", "--un-scale-y"
          ]
        }
      }],
      ["transform-gpu", {
        "transform": "translate3d(var(--un-translate-x), var(--un-translate-y), var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z))"
      }, {
        "custom": {
          "preflightKeys": ["--un-rotate", "--un-rotate-x", "--un-rotate-y",
            "--un-rotate-z", "--un-scale-x", "--un-scale-y", "--un-scale-z",
            "--un-skew-x", "--un-skew-y", "--un-translate-x", "--un-translate-y",
            "--un-translate-z"
          ]
        }
      }],
      ["transform-none", {
        "transform": "none"
      }],
      ["transform-inherit", {
        "transform": "inherit"
      }],
      ["transform-initial", {
        "transform": "initial"
      }],
      ["transform-revert", {
        "transform": "revert"
      }],
      ["transform-revert-layer", {
        "transform": "revert-layer"
      }],
      ["transform-unset", {
        "transform": "unset"
      }],
      [{}, null, {
        "autocomplete": ["animate-keyframes-$animation.keyframes",
          "keyframes-$animation.keyframes"
        ]
      }],
      [{}, null, {
        "autocomplete": "animate-$animation.keyframes"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": ["animate-duration", "animate-duration-$duration"]
      }],
      [{}, null, {
        "autocomplete": ["animate-delay", "animate-delay-$duration"]
      }],
      [{}, null, {
        "autocomplete": ["animate-ease", "animate-ease-$easing"]
      }],
      [{}, null, {
        "autocomplete": ["animate-(fill|mode|fill-mode)",
          "animate-(fill|mode|fill-mode)-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)",
          "animate-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)"
        ]
      }],
      [{}, null, {
        "autocomplete": ["animate-direction",
          "animate-direction-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)",
          "animate-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)"
        ]
      }],
      [{}, null, {
        "autocomplete": ["animate-(iteration|count|iteration-count)",
          "animate-(iteration|count|iteration-count)-<num>"
        ]
      }],
      [{}, null, {
        "autocomplete": ["animate-(play|state|play-state)",
          "animate-(play|state|play-state)-(paused|running|inherit|initial|revert|revert-layer|unset)",
          "animate-(paused|running|inherit|initial|revert|revert-layer|unset)"
        ]
      }],
      ["animate-none", {
        "animation": "none"
      }],
      ["animate-inherit", {
        "animation": "inherit"
      }],
      ["animate-initial", {
        "animation": "initial"
      }],
      ["animate-revert", {
        "animation": "revert"
      }],
      ["animate-revert-layer", {
        "animation": "revert-layer"
      }],
      ["animate-unset", {
        "animation": "unset"
      }],
      [{}, null],
      ["cursor-auto", {
        "cursor": "auto"
      }],
      ["cursor-default", {
        "cursor": "default"
      }],
      ["cursor-none", {
        "cursor": "none"
      }],
      ["cursor-context-menu", {
        "cursor": "context-menu"
      }],
      ["cursor-help", {
        "cursor": "help"
      }],
      ["cursor-pointer", {
        "cursor": "pointer"
      }],
      ["cursor-progress", {
        "cursor": "progress"
      }],
      ["cursor-wait", {
        "cursor": "wait"
      }],
      ["cursor-cell", {
        "cursor": "cell"
      }],
      ["cursor-crosshair", {
        "cursor": "crosshair"
      }],
      ["cursor-text", {
        "cursor": "text"
      }],
      ["cursor-vertical-text", {
        "cursor": "vertical-text"
      }],
      ["cursor-alias", {
        "cursor": "alias"
      }],
      ["cursor-copy", {
        "cursor": "copy"
      }],
      ["cursor-move", {
        "cursor": "move"
      }],
      ["cursor-no-drop", {
        "cursor": "no-drop"
      }],
      ["cursor-not-allowed", {
        "cursor": "not-allowed"
      }],
      ["cursor-grab", {
        "cursor": "grab"
      }],
      ["cursor-grabbing", {
        "cursor": "grabbing"
      }],
      ["cursor-all-scroll", {
        "cursor": "all-scroll"
      }],
      ["cursor-col-resize", {
        "cursor": "col-resize"
      }],
      ["cursor-row-resize", {
        "cursor": "row-resize"
      }],
      ["cursor-n-resize", {
        "cursor": "n-resize"
      }],
      ["cursor-e-resize", {
        "cursor": "e-resize"
      }],
      ["cursor-s-resize", {
        "cursor": "s-resize"
      }],
      ["cursor-w-resize", {
        "cursor": "w-resize"
      }],
      ["cursor-ne-resize", {
        "cursor": "ne-resize"
      }],
      ["cursor-nw-resize", {
        "cursor": "nw-resize"
      }],
      ["cursor-se-resize", {
        "cursor": "se-resize"
      }],
      ["cursor-sw-resize", {
        "cursor": "sw-resize"
      }],
      ["cursor-ew-resize", {
        "cursor": "ew-resize"
      }],
      ["cursor-ns-resize", {
        "cursor": "ns-resize"
      }],
      ["cursor-nesw-resize", {
        "cursor": "nesw-resize"
      }],
      ["cursor-nwse-resize", {
        "cursor": "nwse-resize"
      }],
      ["cursor-zoom-in", {
        "cursor": "zoom-in"
      }],
      ["cursor-zoom-out", {
        "cursor": "zoom-out"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-pan-x", "--un-pan-y", "--un-pinch-zoom"]
        },
        "autocomplete": ["touch-pan", "touch-pan-(x|left|right|y|up|down)"]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-pan-x", "--un-pan-y", "--un-pinch-zoom"]
        }
      }],
      ["touch-pinch-zoom", {
        "--un-pinch-zoom": "pinch-zoom",
        "touch-action": "var(--un-pan-x) var(--un-pan-y) var(--un-pinch-zoom)"
      }, {
        "custom": {
          "preflightKeys": ["--un-pan-x", "--un-pan-y", "--un-pinch-zoom"]
        }
      }],
      ["touch-auto", {
        "touch-action": "auto"
      }],
      ["touch-manipulation", {
        "touch-action": "manipulation"
      }],
      ["touch-none", {
        "touch-action": "none"
      }],
      ["touch-inherit", {
        "touch-action": "inherit"
      }],
      ["touch-initial", {
        "touch-action": "initial"
      }],
      ["touch-revert", {
        "touch-action": "revert"
      }],
      ["touch-revert-layer", {
        "touch-action": "revert-layer"
      }],
      ["touch-unset", {
        "touch-action": "unset"
      }],
      ["select-auto", {
        "-webkit-user-select": "auto",
        "user-select": "auto"
      }],
      ["select-all", {
        "-webkit-user-select": "all",
        "user-select": "all"
      }],
      ["select-text", {
        "-webkit-user-select": "text",
        "user-select": "text"
      }],
      ["select-none", {
        "-webkit-user-select": "none",
        "user-select": "none"
      }],
      ["select-inherit", {
        "user-select": "inherit"
      }],
      ["select-initial", {
        "user-select": "initial"
      }],
      ["select-revert", {
        "user-select": "revert"
      }],
      ["select-revert-layer", {
        "user-select": "revert-layer"
      }],
      ["select-unset", {
        "user-select": "unset"
      }],
      ["resize-x", {
        "resize": "horizontal"
      }],
      ["resize-y", {
        "resize": "vertical"
      }],
      ["resize", {
        "resize": "both"
      }],
      ["resize-none", {
        "resize": "none"
      }],
      ["resize-inherit", {
        "resize": "inherit"
      }],
      ["resize-initial", {
        "resize": "initial"
      }],
      ["resize-revert", {
        "resize": "revert"
      }],
      ["resize-revert-layer", {
        "resize": "revert-layer"
      }],
      ["resize-unset", {
        "resize": "unset"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-scroll-snap-strictness"]
        },
        "autocomplete": "snap-(x|y|both)"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-scroll-snap-strictness"]
        }
      }],
      ["snap-mandatory", {
        "--un-scroll-snap-strictness": "mandatory"
      }],
      ["snap-proximity", {
        "--un-scroll-snap-strictness": "proximity"
      }],
      ["snap-none", {
        "scroll-snap-type": "none"
      }],
      ["snap-start", {
        "scroll-snap-align": "start"
      }],
      ["snap-end", {
        "scroll-snap-align": "end"
      }],
      ["snap-center", {
        "scroll-snap-align": "center"
      }],
      ["snap-align-none", {
        "scroll-snap-align": "none"
      }],
      ["snap-normal", {
        "scroll-snap-stop": "normal"
      }],
      ["snap-always", {
        "scroll-snap-stop": "always"
      }],
      [{}, null, {
        "autocomplete": ["scroll-(m|p|ma|pa|block|inline)",
          "scroll-(m|p|ma|pa|block|inline)-$spacing",
          "scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)",
          "scroll-(m|p|ma|pa|block|inline)-(x|y|r|l|t|b|bs|be|is|ie)-$spacing"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": [
          "list-(disc|circle|square|decimal|zero-decimal|greek|roman|upper-roman|alpha|upper-alpha|latin|upper-latin)",
          "list-(disc|circle|square|decimal|zero-decimal|greek|roman|upper-roman|alpha|upper-alpha|latin|upper-latin)-(outside|inside)"
        ]
      }],
      ["list-outside", {
        "list-style-position": "outside"
      }],
      ["list-inside", {
        "list-style-position": "inside"
      }],
      ["list-none", {
        "list-style-type": "none"
      }],
      [{}, null],
      ["list-image-none", {
        "list-style-image": "none"
      }],
      ["list-inherit", {
        "list-style-type": "inherit"
      }],
      ["list-initial", {
        "list-style-type": "initial"
      }],
      ["list-revert", {
        "list-style-type": "revert"
      }],
      ["list-revert-layer", {
        "list-style-type": "revert-layer"
      }],
      ["list-unset", {
        "list-style-type": "unset"
      }],
      ["appearance-auto", {
        "-webkit-appearance": "auto",
        "appearance": "auto"
      }],
      ["appearance-none", {
        "-webkit-appearance": "none",
        "appearance": "none"
      }],
      [{}, null, {
        "autocomplete": "columns-<num>"
      }],
      ["break-before-auto", {
        "break-before": "auto"
      }],
      ["break-before-avoid", {
        "break-before": "avoid"
      }],
      ["break-before-all", {
        "break-before": "all"
      }],
      ["break-before-avoid-page", {
        "break-before": "avoid-page"
      }],
      ["break-before-page", {
        "break-before": "page"
      }],
      ["break-before-left", {
        "break-before": "left"
      }],
      ["break-before-right", {
        "break-before": "right"
      }],
      ["break-before-column", {
        "break-before": "column"
      }],
      ["break-before-inherit", {
        "break-before": "inherit"
      }],
      ["break-before-initial", {
        "break-before": "initial"
      }],
      ["break-before-revert", {
        "break-before": "revert"
      }],
      ["break-before-revert-layer", {
        "break-before": "revert-layer"
      }],
      ["break-before-unset", {
        "break-before": "unset"
      }],
      ["break-inside-auto", {
        "break-inside": "auto"
      }],
      ["break-inside-avoid", {
        "break-inside": "avoid"
      }],
      ["break-inside-avoid-page", {
        "break-inside": "avoid-page"
      }],
      ["break-inside-avoid-column", {
        "break-inside": "avoid-column"
      }],
      ["break-inside-inherit", {
        "break-inside": "inherit"
      }],
      ["break-inside-initial", {
        "break-inside": "initial"
      }],
      ["break-inside-revert", {
        "break-inside": "revert"
      }],
      ["break-inside-revert-layer", {
        "break-inside": "revert-layer"
      }],
      ["break-inside-unset", {
        "break-inside": "unset"
      }],
      ["break-after-auto", {
        "break-after": "auto"
      }],
      ["break-after-avoid", {
        "break-after": "avoid"
      }],
      ["break-after-all", {
        "break-after": "all"
      }],
      ["break-after-avoid-page", {
        "break-after": "avoid-page"
      }],
      ["break-after-page", {
        "break-after": "page"
      }],
      ["break-after-left", {
        "break-after": "left"
      }],
      ["break-after-right", {
        "break-after": "right"
      }],
      ["break-after-column", {
        "break-after": "column"
      }],
      ["break-after-inherit", {
        "break-after": "inherit"
      }],
      ["break-after-initial", {
        "break-after": "initial"
      }],
      ["break-after-revert", {
        "break-after": "revert"
      }],
      ["break-after-revert-layer", {
        "break-after": "revert-layer"
      }],
      ["break-after-unset", {
        "break-after": "unset"
      }],
      ["place-content-center", {
        "place-content": "center"
      }],
      ["place-content-start", {
        "place-content": "start"
      }],
      ["place-content-end", {
        "place-content": "end"
      }],
      ["place-content-between", {
        "place-content": "space-between"
      }],
      ["place-content-around", {
        "place-content": "space-around"
      }],
      ["place-content-evenly", {
        "place-content": "space-evenly"
      }],
      ["place-content-stretch", {
        "place-content": "stretch"
      }],
      ["place-content-baseline", {
        "place-content": "baseline"
      }],
      ["place-content-center-safe", {
        "place-content": "safe center"
      }],
      ["place-content-end-safe", {
        "place-content": "safe flex-end"
      }],
      ["place-content-inherit", {
        "place-content": "inherit"
      }],
      ["place-content-initial", {
        "place-content": "initial"
      }],
      ["place-content-revert", {
        "place-content": "revert"
      }],
      ["place-content-revert-layer", {
        "place-content": "revert-layer"
      }],
      ["place-content-unset", {
        "place-content": "unset"
      }],
      ["place-items-start", {
        "place-items": "start"
      }],
      ["place-items-end", {
        "place-items": "end"
      }],
      ["place-items-center", {
        "place-items": "center"
      }],
      ["place-items-stretch", {
        "place-items": "stretch"
      }],
      ["place-items-baseline", {
        "place-items": "baseline"
      }],
      ["place-items-center-safe", {
        "place-items": "safe center"
      }],
      ["place-items-end-safe", {
        "place-items": "safe flex-end"
      }],
      ["place-items-inherit", {
        "place-items": "inherit"
      }],
      ["place-items-initial", {
        "place-items": "initial"
      }],
      ["place-items-revert", {
        "place-items": "revert"
      }],
      ["place-items-revert-layer", {
        "place-items": "revert-layer"
      }],
      ["place-items-unset", {
        "place-items": "unset"
      }],
      ["place-self-auto", {
        "place-self": "auto"
      }],
      ["place-self-start", {
        "place-self": "start"
      }],
      ["place-self-end", {
        "place-self": "end"
      }],
      ["place-self-center", {
        "place-self": "center"
      }],
      ["place-self-stretch", {
        "place-self": "stretch"
      }],
      ["place-self-center-safe", {
        "place-self": "safe center"
      }],
      ["place-self-end-safe", {
        "place-self": "safe flex-end"
      }],
      ["place-self-inherit", {
        "place-self": "inherit"
      }],
      ["place-self-initial", {
        "place-self": "initial"
      }],
      ["place-self-revert", {
        "place-self": "revert"
      }],
      ["place-self-revert-layer", {
        "place-self": "revert-layer"
      }],
      ["place-self-unset", {
        "place-self": "unset"
      }],
      ["content-center", {
        "align-content": "center"
      }],
      ["content-start", {
        "align-content": "flex-start"
      }],
      ["content-end", {
        "align-content": "flex-end"
      }],
      ["content-between", {
        "align-content": "space-between"
      }],
      ["content-around", {
        "align-content": "space-around"
      }],
      ["content-evenly", {
        "align-content": "space-evenly"
      }],
      ["content-baseline", {
        "align-content": "baseline"
      }],
      ["content-center-safe", {
        "align-content": "safe center"
      }],
      ["content-end-safe", {
        "align-content": "safe flex-end"
      }],
      ["content-stretch", {
        "align-content": "stretch"
      }],
      ["content-normal", {
        "align-content": "normal"
      }],
      ["content-inherit", {
        "align-content": "inherit"
      }],
      ["content-initial", {
        "align-content": "initial"
      }],
      ["content-revert", {
        "align-content": "revert"
      }],
      ["content-revert-layer", {
        "align-content": "revert-layer"
      }],
      ["content-unset", {
        "align-content": "unset"
      }],
      ["items-start", {
        "align-items": "flex-start"
      }],
      ["items-end", {
        "align-items": "flex-end"
      }],
      ["items-center", {
        "align-items": "center"
      }],
      ["items-baseline", {
        "align-items": "baseline"
      }],
      ["items-stretch", {
        "align-items": "stretch"
      }],
      ["items-baseline-last", {
        "align-items": "last baseline"
      }],
      ["items-center-safe", {
        "align-items": "safe center"
      }],
      ["items-end-safe", {
        "align-items": "safe flex-end"
      }],
      ["items-inherit", {
        "align-items": "inherit"
      }],
      ["items-initial", {
        "align-items": "initial"
      }],
      ["items-revert", {
        "align-items": "revert"
      }],
      ["items-revert-layer", {
        "align-items": "revert-layer"
      }],
      ["items-unset", {
        "align-items": "unset"
      }],
      ["self-auto", {
        "align-self": "auto"
      }],
      ["self-start", {
        "align-self": "flex-start"
      }],
      ["self-end", {
        "align-self": "flex-end"
      }],
      ["self-center", {
        "align-self": "center"
      }],
      ["self-stretch", {
        "align-self": "stretch"
      }],
      ["self-baseline", {
        "align-self": "baseline"
      }],
      ["self-baseline-last", {
        "align-self": "last baseline"
      }],
      ["self-center-safe", {
        "align-self": "safe center"
      }],
      ["self-end-safe", {
        "align-self": "safe flex-end"
      }],
      ["self-inherit", {
        "align-self": "inherit"
      }],
      ["self-initial", {
        "align-self": "initial"
      }],
      ["self-revert", {
        "align-self": "revert"
      }],
      ["self-revert-layer", {
        "align-self": "revert-layer"
      }],
      ["self-unset", {
        "align-self": "unset"
      }],
      ["justify-start", {
        "justify-content": "flex-start"
      }],
      ["justify-end", {
        "justify-content": "flex-end"
      }],
      ["justify-center", {
        "justify-content": "center"
      }],
      ["justify-between", {
        "justify-content": "space-between"
      }],
      ["justify-around", {
        "justify-content": "space-around"
      }],
      ["justify-evenly", {
        "justify-content": "space-evenly"
      }],
      ["justify-stretch", {
        "justify-content": "stretch"
      }],
      ["justify-left", {
        "justify-content": "left"
      }],
      ["justify-right", {
        "justify-content": "right"
      }],
      ["justify-center-safe", {
        "justify-content": "safe center"
      }],
      ["justify-end-safe", {
        "justify-content": "safe flex-end"
      }],
      ["justify-normal", {
        "justify-content": "normal"
      }],
      ["justify-inherit", {
        "justify-content": "inherit"
      }],
      ["justify-initial", {
        "justify-content": "initial"
      }],
      ["justify-revert", {
        "justify-content": "revert"
      }],
      ["justify-revert-layer", {
        "justify-content": "revert-layer"
      }],
      ["justify-unset", {
        "justify-content": "unset"
      }],
      ["justify-items-start", {
        "justify-items": "start"
      }],
      ["justify-items-end", {
        "justify-items": "end"
      }],
      ["justify-items-center", {
        "justify-items": "center"
      }],
      ["justify-items-stretch", {
        "justify-items": "stretch"
      }],
      ["justify-items-center-safe", {
        "justify-items": "safe center"
      }],
      ["justify-items-end-safe", {
        "justify-items": "safe flex-end"
      }],
      ["justify-items-inherit", {
        "justify-items": "inherit"
      }],
      ["justify-items-initial", {
        "justify-items": "initial"
      }],
      ["justify-items-revert", {
        "justify-items": "revert"
      }],
      ["justify-items-revert-layer", {
        "justify-items": "revert-layer"
      }],
      ["justify-items-unset", {
        "justify-items": "unset"
      }],
      ["justify-self-auto", {
        "justify-self": "auto"
      }],
      ["justify-self-start", {
        "justify-self": "start"
      }],
      ["justify-self-end", {
        "justify-self": "end"
      }],
      ["justify-self-center", {
        "justify-self": "center"
      }],
      ["justify-self-stretch", {
        "justify-self": "stretch"
      }],
      ["justify-self-baseline", {
        "justify-self": "baseline"
      }],
      ["justify-self-center-safe", {
        "justify-self": "safe center"
      }],
      ["justify-self-end-safe", {
        "justify-self": "safe flex-end"
      }],
      ["justify-self-inherit", {
        "justify-self": "inherit"
      }],
      ["justify-self-initial", {
        "justify-self": "initial"
      }],
      ["justify-self-revert", {
        "justify-self": "revert"
      }],
      ["justify-self-revert-layer", {
        "justify-self": "revert-layer"
      }],
      ["justify-self-unset", {
        "justify-self": "unset"
      }],
      [{}, null, {
        "autocomplete": ["gap-$spacing", "gap-<num>"]
      }],
      [{}, null, {
        "autocomplete": ["gap-(x|y)-$spacing", "gap-(x|y)-<num>"]
      }],
      [{}, null, {
        "autocomplete": ["gap-(col|row)-$spacing", "gap-(col|row)-<num>"]
      }],
      ["flex-justify-start", {
        "justify-content": "flex-start"
      }],
      ["grid-justify-start", {
        "justify-content": "flex-start"
      }],
      ["flex-justify-end", {
        "justify-content": "flex-end"
      }],
      ["grid-justify-end", {
        "justify-content": "flex-end"
      }],
      ["flex-justify-center", {
        "justify-content": "center"
      }],
      ["grid-justify-center", {
        "justify-content": "center"
      }],
      ["flex-justify-between", {
        "justify-content": "space-between"
      }],
      ["grid-justify-between", {
        "justify-content": "space-between"
      }],
      ["flex-justify-around", {
        "justify-content": "space-around"
      }],
      ["grid-justify-around", {
        "justify-content": "space-around"
      }],
      ["flex-justify-evenly", {
        "justify-content": "space-evenly"
      }],
      ["grid-justify-evenly", {
        "justify-content": "space-evenly"
      }],
      ["flex-justify-stretch", {
        "justify-content": "stretch"
      }],
      ["grid-justify-stretch", {
        "justify-content": "stretch"
      }],
      ["flex-justify-left", {
        "justify-content": "left"
      }],
      ["grid-justify-left", {
        "justify-content": "left"
      }],
      ["flex-justify-right", {
        "justify-content": "right"
      }],
      ["grid-justify-right", {
        "justify-content": "right"
      }],
      ["flex-justify-center-safe", {
        "justify-content": "safe center"
      }],
      ["grid-justify-center-safe", {
        "justify-content": "safe center"
      }],
      ["flex-justify-end-safe", {
        "justify-content": "safe flex-end"
      }],
      ["grid-justify-end-safe", {
        "justify-content": "safe flex-end"
      }],
      ["flex-justify-normal", {
        "justify-content": "normal"
      }],
      ["grid-justify-normal", {
        "justify-content": "normal"
      }],
      ["flex-justify-inherit", {
        "justify-content": "inherit"
      }],
      ["grid-justify-inherit", {
        "justify-content": "inherit"
      }],
      ["flex-justify-initial", {
        "justify-content": "initial"
      }],
      ["grid-justify-initial", {
        "justify-content": "initial"
      }],
      ["flex-justify-revert", {
        "justify-content": "revert"
      }],
      ["grid-justify-revert", {
        "justify-content": "revert"
      }],
      ["flex-justify-revert-layer", {
        "justify-content": "revert-layer"
      }],
      ["grid-justify-revert-layer", {
        "justify-content": "revert-layer"
      }],
      ["flex-justify-unset", {
        "justify-content": "unset"
      }],
      ["grid-justify-unset", {
        "justify-content": "unset"
      }],
      ["flex-justify-items-start", {
        "justify-items": "start"
      }],
      ["grid-justify-items-start", {
        "justify-items": "start"
      }],
      ["flex-justify-items-end", {
        "justify-items": "end"
      }],
      ["grid-justify-items-end", {
        "justify-items": "end"
      }],
      ["flex-justify-items-center", {
        "justify-items": "center"
      }],
      ["grid-justify-items-center", {
        "justify-items": "center"
      }],
      ["flex-justify-items-stretch", {
        "justify-items": "stretch"
      }],
      ["grid-justify-items-stretch", {
        "justify-items": "stretch"
      }],
      ["flex-justify-items-center-safe", {
        "justify-items": "safe center"
      }],
      ["grid-justify-items-center-safe", {
        "justify-items": "safe center"
      }],
      ["flex-justify-items-end-safe", {
        "justify-items": "safe flex-end"
      }],
      ["grid-justify-items-end-safe", {
        "justify-items": "safe flex-end"
      }],
      ["flex-justify-items-inherit", {
        "justify-items": "inherit"
      }],
      ["grid-justify-items-inherit", {
        "justify-items": "inherit"
      }],
      ["flex-justify-items-initial", {
        "justify-items": "initial"
      }],
      ["grid-justify-items-initial", {
        "justify-items": "initial"
      }],
      ["flex-justify-items-revert", {
        "justify-items": "revert"
      }],
      ["grid-justify-items-revert", {
        "justify-items": "revert"
      }],
      ["flex-justify-items-revert-layer", {
        "justify-items": "revert-layer"
      }],
      ["grid-justify-items-revert-layer", {
        "justify-items": "revert-layer"
      }],
      ["flex-justify-items-unset", {
        "justify-items": "unset"
      }],
      ["grid-justify-items-unset", {
        "justify-items": "unset"
      }],
      ["flex-justify-self-auto", {
        "justify-self": "auto"
      }],
      ["grid-justify-self-auto", {
        "justify-self": "auto"
      }],
      ["flex-justify-self-start", {
        "justify-self": "start"
      }],
      ["grid-justify-self-start", {
        "justify-self": "start"
      }],
      ["flex-justify-self-end", {
        "justify-self": "end"
      }],
      ["grid-justify-self-end", {
        "justify-self": "end"
      }],
      ["flex-justify-self-center", {
        "justify-self": "center"
      }],
      ["grid-justify-self-center", {
        "justify-self": "center"
      }],
      ["flex-justify-self-stretch", {
        "justify-self": "stretch"
      }],
      ["grid-justify-self-stretch", {
        "justify-self": "stretch"
      }],
      ["flex-justify-self-baseline", {
        "justify-self": "baseline"
      }],
      ["grid-justify-self-baseline", {
        "justify-self": "baseline"
      }],
      ["flex-justify-self-center-safe", {
        "justify-self": "safe center"
      }],
      ["grid-justify-self-center-safe", {
        "justify-self": "safe center"
      }],
      ["flex-justify-self-end-safe", {
        "justify-self": "safe flex-end"
      }],
      ["grid-justify-self-end-safe", {
        "justify-self": "safe flex-end"
      }],
      ["flex-justify-self-inherit", {
        "justify-self": "inherit"
      }],
      ["grid-justify-self-inherit", {
        "justify-self": "inherit"
      }],
      ["flex-justify-self-initial", {
        "justify-self": "initial"
      }],
      ["grid-justify-self-initial", {
        "justify-self": "initial"
      }],
      ["flex-justify-self-revert", {
        "justify-self": "revert"
      }],
      ["grid-justify-self-revert", {
        "justify-self": "revert"
      }],
      ["flex-justify-self-revert-layer", {
        "justify-self": "revert-layer"
      }],
      ["grid-justify-self-revert-layer", {
        "justify-self": "revert-layer"
      }],
      ["flex-justify-self-unset", {
        "justify-self": "unset"
      }],
      ["grid-justify-self-unset", {
        "justify-self": "unset"
      }],
      ["flex-content-center", {
        "align-content": "center"
      }],
      ["grid-content-center", {
        "align-content": "center"
      }],
      ["flex-content-start", {
        "align-content": "flex-start"
      }],
      ["grid-content-start", {
        "align-content": "flex-start"
      }],
      ["flex-content-end", {
        "align-content": "flex-end"
      }],
      ["grid-content-end", {
        "align-content": "flex-end"
      }],
      ["flex-content-between", {
        "align-content": "space-between"
      }],
      ["grid-content-between", {
        "align-content": "space-between"
      }],
      ["flex-content-around", {
        "align-content": "space-around"
      }],
      ["grid-content-around", {
        "align-content": "space-around"
      }],
      ["flex-content-evenly", {
        "align-content": "space-evenly"
      }],
      ["grid-content-evenly", {
        "align-content": "space-evenly"
      }],
      ["flex-content-baseline", {
        "align-content": "baseline"
      }],
      ["grid-content-baseline", {
        "align-content": "baseline"
      }],
      ["flex-content-center-safe", {
        "align-content": "safe center"
      }],
      ["grid-content-center-safe", {
        "align-content": "safe center"
      }],
      ["flex-content-end-safe", {
        "align-content": "safe flex-end"
      }],
      ["grid-content-end-safe", {
        "align-content": "safe flex-end"
      }],
      ["flex-content-stretch", {
        "align-content": "stretch"
      }],
      ["grid-content-stretch", {
        "align-content": "stretch"
      }],
      ["flex-content-normal", {
        "align-content": "normal"
      }],
      ["grid-content-normal", {
        "align-content": "normal"
      }],
      ["flex-content-inherit", {
        "align-content": "inherit"
      }],
      ["grid-content-inherit", {
        "align-content": "inherit"
      }],
      ["flex-content-initial", {
        "align-content": "initial"
      }],
      ["grid-content-initial", {
        "align-content": "initial"
      }],
      ["flex-content-revert", {
        "align-content": "revert"
      }],
      ["grid-content-revert", {
        "align-content": "revert"
      }],
      ["flex-content-revert-layer", {
        "align-content": "revert-layer"
      }],
      ["grid-content-revert-layer", {
        "align-content": "revert-layer"
      }],
      ["flex-content-unset", {
        "align-content": "unset"
      }],
      ["grid-content-unset", {
        "align-content": "unset"
      }],
      ["flex-items-start", {
        "align-items": "flex-start"
      }],
      ["grid-items-start", {
        "align-items": "flex-start"
      }],
      ["flex-items-end", {
        "align-items": "flex-end"
      }],
      ["grid-items-end", {
        "align-items": "flex-end"
      }],
      ["flex-items-center", {
        "align-items": "center"
      }],
      ["grid-items-center", {
        "align-items": "center"
      }],
      ["flex-items-baseline", {
        "align-items": "baseline"
      }],
      ["grid-items-baseline", {
        "align-items": "baseline"
      }],
      ["flex-items-stretch", {
        "align-items": "stretch"
      }],
      ["grid-items-stretch", {
        "align-items": "stretch"
      }],
      ["flex-items-baseline-last", {
        "align-items": "last baseline"
      }],
      ["grid-items-baseline-last", {
        "align-items": "last baseline"
      }],
      ["flex-items-center-safe", {
        "align-items": "safe center"
      }],
      ["grid-items-center-safe", {
        "align-items": "safe center"
      }],
      ["flex-items-end-safe", {
        "align-items": "safe flex-end"
      }],
      ["grid-items-end-safe", {
        "align-items": "safe flex-end"
      }],
      ["flex-items-inherit", {
        "align-items": "inherit"
      }],
      ["grid-items-inherit", {
        "align-items": "inherit"
      }],
      ["flex-items-initial", {
        "align-items": "initial"
      }],
      ["grid-items-initial", {
        "align-items": "initial"
      }],
      ["flex-items-revert", {
        "align-items": "revert"
      }],
      ["grid-items-revert", {
        "align-items": "revert"
      }],
      ["flex-items-revert-layer", {
        "align-items": "revert-layer"
      }],
      ["grid-items-revert-layer", {
        "align-items": "revert-layer"
      }],
      ["flex-items-unset", {
        "align-items": "unset"
      }],
      ["grid-items-unset", {
        "align-items": "unset"
      }],
      ["flex-self-auto", {
        "align-self": "auto"
      }],
      ["grid-self-auto", {
        "align-self": "auto"
      }],
      ["flex-self-start", {
        "align-self": "flex-start"
      }],
      ["grid-self-start", {
        "align-self": "flex-start"
      }],
      ["flex-self-end", {
        "align-self": "flex-end"
      }],
      ["grid-self-end", {
        "align-self": "flex-end"
      }],
      ["flex-self-center", {
        "align-self": "center"
      }],
      ["grid-self-center", {
        "align-self": "center"
      }],
      ["flex-self-stretch", {
        "align-self": "stretch"
      }],
      ["grid-self-stretch", {
        "align-self": "stretch"
      }],
      ["flex-self-baseline", {
        "align-self": "baseline"
      }],
      ["grid-self-baseline", {
        "align-self": "baseline"
      }],
      ["flex-self-baseline-last", {
        "align-self": "last baseline"
      }],
      ["grid-self-baseline-last", {
        "align-self": "last baseline"
      }],
      ["flex-self-center-safe", {
        "align-self": "safe center"
      }],
      ["grid-self-center-safe", {
        "align-self": "safe center"
      }],
      ["flex-self-end-safe", {
        "align-self": "safe flex-end"
      }],
      ["grid-self-end-safe", {
        "align-self": "safe flex-end"
      }],
      ["flex-self-inherit", {
        "align-self": "inherit"
      }],
      ["grid-self-inherit", {
        "align-self": "inherit"
      }],
      ["flex-self-initial", {
        "align-self": "initial"
      }],
      ["grid-self-initial", {
        "align-self": "initial"
      }],
      ["flex-self-revert", {
        "align-self": "revert"
      }],
      ["grid-self-revert", {
        "align-self": "revert"
      }],
      ["flex-self-revert-layer", {
        "align-self": "revert-layer"
      }],
      ["grid-self-revert-layer", {
        "align-self": "revert-layer"
      }],
      ["flex-self-unset", {
        "align-self": "unset"
      }],
      ["grid-self-unset", {
        "align-self": "unset"
      }],
      ["flex-place-content-center", {
        "place-content": "center"
      }],
      ["grid-place-content-center", {
        "place-content": "center"
      }],
      ["flex-place-content-start", {
        "place-content": "start"
      }],
      ["grid-place-content-start", {
        "place-content": "start"
      }],
      ["flex-place-content-end", {
        "place-content": "end"
      }],
      ["grid-place-content-end", {
        "place-content": "end"
      }],
      ["flex-place-content-between", {
        "place-content": "space-between"
      }],
      ["grid-place-content-between", {
        "place-content": "space-between"
      }],
      ["flex-place-content-around", {
        "place-content": "space-around"
      }],
      ["grid-place-content-around", {
        "place-content": "space-around"
      }],
      ["flex-place-content-evenly", {
        "place-content": "space-evenly"
      }],
      ["grid-place-content-evenly", {
        "place-content": "space-evenly"
      }],
      ["flex-place-content-stretch", {
        "place-content": "stretch"
      }],
      ["grid-place-content-stretch", {
        "place-content": "stretch"
      }],
      ["flex-place-content-baseline", {
        "place-content": "baseline"
      }],
      ["grid-place-content-baseline", {
        "place-content": "baseline"
      }],
      ["flex-place-content-center-safe", {
        "place-content": "safe center"
      }],
      ["grid-place-content-center-safe", {
        "place-content": "safe center"
      }],
      ["flex-place-content-end-safe", {
        "place-content": "safe flex-end"
      }],
      ["grid-place-content-end-safe", {
        "place-content": "safe flex-end"
      }],
      ["flex-place-content-inherit", {
        "place-content": "inherit"
      }],
      ["grid-place-content-inherit", {
        "place-content": "inherit"
      }],
      ["flex-place-content-initial", {
        "place-content": "initial"
      }],
      ["grid-place-content-initial", {
        "place-content": "initial"
      }],
      ["flex-place-content-revert", {
        "place-content": "revert"
      }],
      ["grid-place-content-revert", {
        "place-content": "revert"
      }],
      ["flex-place-content-revert-layer", {
        "place-content": "revert-layer"
      }],
      ["grid-place-content-revert-layer", {
        "place-content": "revert-layer"
      }],
      ["flex-place-content-unset", {
        "place-content": "unset"
      }],
      ["grid-place-content-unset", {
        "place-content": "unset"
      }],
      ["flex-place-items-start", {
        "place-items": "start"
      }],
      ["grid-place-items-start", {
        "place-items": "start"
      }],
      ["flex-place-items-end", {
        "place-items": "end"
      }],
      ["grid-place-items-end", {
        "place-items": "end"
      }],
      ["flex-place-items-center", {
        "place-items": "center"
      }],
      ["grid-place-items-center", {
        "place-items": "center"
      }],
      ["flex-place-items-stretch", {
        "place-items": "stretch"
      }],
      ["grid-place-items-stretch", {
        "place-items": "stretch"
      }],
      ["flex-place-items-baseline", {
        "place-items": "baseline"
      }],
      ["grid-place-items-baseline", {
        "place-items": "baseline"
      }],
      ["flex-place-items-center-safe", {
        "place-items": "safe center"
      }],
      ["grid-place-items-center-safe", {
        "place-items": "safe center"
      }],
      ["flex-place-items-end-safe", {
        "place-items": "safe flex-end"
      }],
      ["grid-place-items-end-safe", {
        "place-items": "safe flex-end"
      }],
      ["flex-place-items-inherit", {
        "place-items": "inherit"
      }],
      ["grid-place-items-inherit", {
        "place-items": "inherit"
      }],
      ["flex-place-items-initial", {
        "place-items": "initial"
      }],
      ["grid-place-items-initial", {
        "place-items": "initial"
      }],
      ["flex-place-items-revert", {
        "place-items": "revert"
      }],
      ["grid-place-items-revert", {
        "place-items": "revert"
      }],
      ["flex-place-items-revert-layer", {
        "place-items": "revert-layer"
      }],
      ["grid-place-items-revert-layer", {
        "place-items": "revert-layer"
      }],
      ["flex-place-items-unset", {
        "place-items": "unset"
      }],
      ["grid-place-items-unset", {
        "place-items": "unset"
      }],
      ["flex-place-self-auto", {
        "place-self": "auto"
      }],
      ["grid-place-self-auto", {
        "place-self": "auto"
      }],
      ["flex-place-self-start", {
        "place-self": "start"
      }],
      ["grid-place-self-start", {
        "place-self": "start"
      }],
      ["flex-place-self-end", {
        "place-self": "end"
      }],
      ["grid-place-self-end", {
        "place-self": "end"
      }],
      ["flex-place-self-center", {
        "place-self": "center"
      }],
      ["grid-place-self-center", {
        "place-self": "center"
      }],
      ["flex-place-self-stretch", {
        "place-self": "stretch"
      }],
      ["grid-place-self-stretch", {
        "place-self": "stretch"
      }],
      ["flex-place-self-center-safe", {
        "place-self": "safe center"
      }],
      ["grid-place-self-center-safe", {
        "place-self": "safe center"
      }],
      ["flex-place-self-end-safe", {
        "place-self": "safe flex-end"
      }],
      ["grid-place-self-end-safe", {
        "place-self": "safe flex-end"
      }],
      ["flex-place-self-inherit", {
        "place-self": "inherit"
      }],
      ["grid-place-self-inherit", {
        "place-self": "inherit"
      }],
      ["flex-place-self-initial", {
        "place-self": "initial"
      }],
      ["grid-place-self-initial", {
        "place-self": "initial"
      }],
      ["flex-place-self-revert", {
        "place-self": "revert"
      }],
      ["grid-place-self-revert", {
        "place-self": "revert"
      }],
      ["flex-place-self-revert-layer", {
        "place-self": "revert-layer"
      }],
      ["grid-place-self-revert-layer", {
        "place-self": "revert-layer"
      }],
      ["flex-place-self-unset", {
        "place-self": "unset"
      }],
      ["grid-place-self-unset", {
        "place-self": "unset"
      }],
      [{}, null, {
        "autocomplete": ["space-(x|y|block|inline)", "space-(x|y|block|inline)-reverse",
          "space-(x|y|block|inline)-$spacing"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": ["divide-(x|y|block|inline)", "divide-(x|y|block|inline)-reverse",
          "divide-(x|y|block|inline)-$lineWidth"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": "divide-$colors"
      }],
      [{}, null, {
        "autocomplete": ["divide-(op|opacity)", "divide-(op|opacity)-<percent>"]
      }],
      ["divide-solid", {
        "border-style": "solid"
      }],
      ["divide-dashed", {
        "border-style": "dashed"
      }],
      ["divide-dotted", {
        "border-style": "dotted"
      }],
      ["divide-double", {
        "border-style": "double"
      }],
      ["divide-hidden", {
        "border-style": "hidden"
      }],
      ["divide-none", {
        "border-style": "none"
      }],
      ["divide-groove", {
        "border-style": "groove"
      }],
      ["divide-ridge", {
        "border-style": "ridge"
      }],
      ["divide-inset", {
        "border-style": "inset"
      }],
      ["divide-outset", {
        "border-style": "outset"
      }],
      ["divide-inherit", {
        "border-style": "inherit"
      }],
      ["divide-initial", {
        "border-style": "initial"
      }],
      ["divide-revert", {
        "border-style": "revert"
      }],
      ["divide-revert-layer", {
        "border-style": "revert-layer"
      }],
      ["divide-unset", {
        "border-style": "unset"
      }],
      [{}, null, {
        "autocomplete": [
          "(overflow|of)-(auto|hidden|clip|visible|scroll|overlay|inherit|initial|revert|revert-layer|unset)",
          "(overflow|of)-(x|y)-(auto|hidden|clip|visible|scroll|overlay|inherit|initial|revert|revert-layer|unset)"
        ]
      }],
      [{}, null],
      ["overscroll-auto", {
        "overscroll-behavior": "auto"
      }],
      ["overscroll-contain", {
        "overscroll-behavior": "contain"
      }],
      ["overscroll-none", {
        "overscroll-behavior": "none"
      }],
      ["overscroll-inherit", {
        "overscroll-behavior": "inherit"
      }],
      ["overscroll-initial", {
        "overscroll-behavior": "initial"
      }],
      ["overscroll-revert", {
        "overscroll-behavior": "revert"
      }],
      ["overscroll-revert-layer", {
        "overscroll-behavior": "revert-layer"
      }],
      ["overscroll-unset", {
        "overscroll-behavior": "unset"
      }],
      ["overscroll-x-auto", {
        "overscroll-behavior-x": "auto"
      }],
      ["overscroll-x-contain", {
        "overscroll-behavior-x": "contain"
      }],
      ["overscroll-x-none", {
        "overscroll-behavior-x": "none"
      }],
      ["overscroll-x-inherit", {
        "overscroll-behavior-x": "inherit"
      }],
      ["overscroll-x-initial", {
        "overscroll-behavior-x": "initial"
      }],
      ["overscroll-x-revert", {
        "overscroll-behavior-x": "revert"
      }],
      ["overscroll-x-revert-layer", {
        "overscroll-behavior-x": "revert-layer"
      }],
      ["overscroll-x-unset", {
        "overscroll-behavior-x": "unset"
      }],
      ["overscroll-y-auto", {
        "overscroll-behavior-y": "auto"
      }],
      ["overscroll-y-contain", {
        "overscroll-behavior-y": "contain"
      }],
      ["overscroll-y-none", {
        "overscroll-behavior-y": "none"
      }],
      ["overscroll-y-inherit", {
        "overscroll-behavior-y": "inherit"
      }],
      ["overscroll-y-initial", {
        "overscroll-behavior-y": "initial"
      }],
      ["overscroll-y-revert", {
        "overscroll-behavior-y": "revert"
      }],
      ["overscroll-y-revert-layer", {
        "overscroll-behavior-y": "revert-layer"
      }],
      ["overscroll-y-unset", {
        "overscroll-behavior-y": "unset"
      }],
      ["scroll-auto", {
        "scroll-behavior": "auto"
      }],
      ["scroll-smooth", {
        "scroll-behavior": "smooth"
      }],
      ["scroll-inherit", {
        "scroll-behavior": "inherit"
      }],
      ["scroll-initial", {
        "scroll-behavior": "initial"
      }],
      ["scroll-revert", {
        "scroll-behavior": "revert"
      }],
      ["scroll-revert-layer", {
        "scroll-behavior": "revert-layer"
      }],
      ["scroll-unset", {
        "scroll-behavior": "unset"
      }],
      ["truncate", {
        "overflow": "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap"
      }],
      ["text-truncate", {
        "overflow": "hidden",
        "text-overflow": "ellipsis",
        "white-space": "nowrap"
      }],
      ["text-ellipsis", {
        "text-overflow": "ellipsis"
      }],
      ["text-clip", {
        "text-overflow": "clip"
      }],
      [{}, null, {
        "autocomplete": "(whitespace|ws)-(normal|nowrap|pre|pre-line|pre-wrap|break-spaces)"
      }],
      ["break-normal", {
        "overflow-wrap": "normal",
        "word-break": "normal"
      }],
      ["break-words", {
        "overflow-wrap": "break-word"
      }],
      ["break-all", {
        "word-break": "break-all"
      }],
      ["break-keep", {
        "word-break": "keep-all"
      }],
      ["break-anywhere", {
        "overflow-wrap": "anywhere"
      }],
      [{}, null, {
        "autocomplete": "(border|b)-<directions>"
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": ["(border|b)-<num>", "(border|b)-<directions>-<num>"]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": ["(border|b)-$colors", "(border|b)-<directions>-$colors"]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": "(border|b)-(op|opacity)-<percent>"
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": ["(border|b)-(rounded|rd)", "(border|b)-(rounded|rd)-$borderRadius",
          "(rounded|rd)", "(rounded|rd)-$borderRadius"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": ["(border|b)-style",
          "(border|b)-(solid|dashed|dotted|double|hidden|none|groove|ridge|inset|outset|inherit|initial|revert|revert-layer|unset)",
          "(border|b)-<directions>-style",
          "(border|b)-<directions>-(solid|dashed|dotted|double|hidden|none|groove|ridge|inset|outset|inherit|initial|revert|revert-layer|unset)",
          "(border|b)-<directions>-style-(solid|dashed|dotted|double|hidden|none|groove|ridge|inset|outset|inherit|initial|revert|revert-layer|unset)",
          "(border|b)-style-(solid|dashed|dotted|double|hidden|none|groove|ridge|inset|outset|inherit|initial|revert|revert-layer|unset)"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": "bg-$colors"
      }],
      [{}, null, {
        "autocomplete": "bg-(op|opacity)-<percent>"
      }],
      [{}, null, {
        "autocomplete": ["bg-gradient", "bg-gradient-(from|to|via)",
          "bg-gradient-(from|to|via)-$colors", "bg-gradient-(from|to|via)-(op|opacity)",
          "bg-gradient-(from|to|via)-(op|opacity)-<percent>"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null],
      [{}, null, {
        "autocomplete": ["bg-gradient-repeating", "bg-gradient-(linear|radial|conic)",
          "bg-gradient-repeating-(linear|radial|conic)"
        ]
      }],
      [{}, null, {
        "autocomplete": "bg-gradient-to-(t|tl|tr|b|bl|br|l|lt|lb|r|rt|rb)"
      }],
      [{}, null, {
        "autocomplete": ["bg-gradient-shape",
          "bg-gradient-shape-(top|top-center|top-left|top-right|bottom|bottom-center|bottom-left|bottom-right|left|left-center|left-top|left-bottom|right|right-center|right-top|right-bottom|center|center-top|center-bottom|center-left|center-right|center-center|t|tc|tl|tr|b|bc|bl|br|l|lc|lt|lb|r|rc|rt|rb|c|ct|cb|cl|cr|cc)",
          "shape-(top|top-center|top-left|top-right|bottom|bottom-center|bottom-left|bottom-right|left|left-center|left-top|left-bottom|right|right-center|right-top|right-bottom|center|center-top|center-bottom|center-left|center-right|center-center|t|tc|tl|tr|b|bc|bl|br|l|lc|lt|lb|r|rc|rt|rb|c|ct|cb|cl|cr|cc)"
        ]
      }],
      ["bg-none", {
        "background-image": "none"
      }],
      ["box-decoration-slice", {
        "box-decoration-break": "slice"
      }],
      ["box-decoration-clone", {
        "box-decoration-break": "clone"
      }],
      ["box-decoration-inherit", {
        "box-decoration-break": "inherit"
      }],
      ["box-decoration-initial", {
        "box-decoration-break": "initial"
      }],
      ["box-decoration-revert", {
        "box-decoration-break": "revert"
      }],
      ["box-decoration-revert-layer", {
        "box-decoration-break": "revert-layer"
      }],
      ["box-decoration-unset", {
        "box-decoration-break": "unset"
      }],
      ["bg-auto", {
        "background-size": "auto"
      }],
      ["bg-cover", {
        "background-size": "cover"
      }],
      ["bg-contain", {
        "background-size": "contain"
      }],
      ["bg-fixed", {
        "background-attachment": "fixed"
      }],
      ["bg-local", {
        "background-attachment": "local"
      }],
      ["bg-scroll", {
        "background-attachment": "scroll"
      }],
      ["bg-clip-border", {
        "-webkit-background-clip": "border-box",
        "background-clip": "border-box"
      }],
      ["bg-clip-content", {
        "-webkit-background-clip": "content-box",
        "background-clip": "content-box"
      }],
      ["bg-clip-padding", {
        "-webkit-background-clip": "padding-box",
        "background-clip": "padding-box"
      }],
      ["bg-clip-text", {
        "-webkit-background-clip": "text",
        "background-clip": "text"
      }],
      ["bg-clip-inherit", {
        "-webkit-background-clip": "inherit",
        "background-clip": "inherit"
      }],
      ["bg-clip-initial", {
        "-webkit-background-clip": "initial",
        "background-clip": "initial"
      }],
      ["bg-clip-revert", {
        "-webkit-background-clip": "revert",
        "background-clip": "revert"
      }],
      ["bg-clip-revert-layer", {
        "-webkit-background-clip": "revert-layer",
        "background-clip": "revert-layer"
      }],
      ["bg-clip-unset", {
        "-webkit-background-clip": "unset",
        "background-clip": "unset"
      }],
      [{}, null],
      ["bg-repeat", {
        "background-repeat": "repeat"
      }],
      ["bg-no-repeat", {
        "background-repeat": "no-repeat"
      }],
      ["bg-repeat-x", {
        "background-repeat": "repeat-x"
      }],
      ["bg-repeat-y", {
        "background-repeat": "repeat-y"
      }],
      ["bg-repeat-round", {
        "background-repeat": "round"
      }],
      ["bg-repeat-space", {
        "background-repeat": "space"
      }],
      ["bg-repeat-inherit", {
        "background-repeat": "inherit"
      }],
      ["bg-repeat-initial", {
        "background-repeat": "initial"
      }],
      ["bg-repeat-revert", {
        "background-repeat": "revert"
      }],
      ["bg-repeat-revert-layer", {
        "background-repeat": "revert-layer"
      }],
      ["bg-repeat-unset", {
        "background-repeat": "unset"
      }],
      ["bg-origin-border", {
        "background-origin": "border-box"
      }],
      ["bg-origin-padding", {
        "background-origin": "padding-box"
      }],
      ["bg-origin-content", {
        "background-origin": "content-box"
      }],
      ["bg-origin-inherit", {
        "background-origin": "inherit"
      }],
      ["bg-origin-initial", {
        "background-origin": "initial"
      }],
      ["bg-origin-revert", {
        "background-origin": "revert"
      }],
      ["bg-origin-revert-layer", {
        "background-origin": "revert-layer"
      }],
      ["bg-origin-unset", {
        "background-origin": "unset"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": "fill-$colors"
      }],
      [{}, null, {
        "autocomplete": "fill-(op|opacity)-<percent>"
      }],
      ["fill-none", {
        "fill": "none"
      }],
      [{}, null, {
        "autocomplete": ["stroke-width-$lineWidth", "stroke-size-$lineWidth"]
      }],
      [{}, null, {
        "autocomplete": "stroke-dash-<num>"
      }],
      [{}, null, {
        "autocomplete": "stroke-offset-$lineWidth"
      }],
      [{}, null, {
        "autocomplete": "stroke-$colors"
      }],
      [{}, null, {
        "autocomplete": "stroke-(op|opacity)-<percent>"
      }],
      ["stroke-cap-square", {
        "stroke-linecap": "square"
      }],
      ["stroke-cap-round", {
        "stroke-linecap": "round"
      }],
      ["stroke-cap-auto", {
        "stroke-linecap": "butt"
      }],
      ["stroke-join-arcs", {
        "stroke-linejoin": "arcs"
      }],
      ["stroke-join-bevel", {
        "stroke-linejoin": "bevel"
      }],
      ["stroke-join-clip", {
        "stroke-linejoin": "miter-clip"
      }],
      ["stroke-join-round", {
        "stroke-linejoin": "round"
      }],
      ["stroke-join-auto", {
        "stroke-linejoin": "miter"
      }],
      ["stroke-none", {
        "stroke": "none"
      }],
      ["object-cover", {
        "object-fit": "cover"
      }],
      ["object-contain", {
        "object-fit": "contain"
      }],
      ["object-fill", {
        "object-fit": "fill"
      }],
      ["object-scale-down", {
        "object-fit": "scale-down"
      }],
      ["object-none", {
        "object-fit": "none"
      }],
      [{}, null, {
        "autocomplete": "object-(top|top-center|top-left|top-right|bottom|bottom-center|bottom-left|bottom-right|left|left-center|left-top|left-bottom|right|right-center|right-top|right-bottom|center|center-top|center-bottom|center-left|center-right|center-center|t|tc|tl|tr|b|bc|bl|br|l|lc|lt|lb|r|rc|rt|rb|c|ct|cb|cl|cr|cc)"
      }],
      [{}, null, {
        "autocomplete": ["(m|p)<num>", "(m|p)-<num>"]
      }],
      [{}, null, {
        "autocomplete": "(m|p)-(xy)"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": "(m|p)<directions>-<num>"
      }],
      [{}, null, {
        "autocomplete": "(m|p)-(block|inline)-<num>"
      }],
      [{}, null, {
        "autocomplete": "(m|p)-(bs|be|is|ie)-<num>"
      }],
      ["text-center", {
        "text-align": "center"
      }],
      ["text-left", {
        "text-align": "left"
      }],
      ["text-right", {
        "text-align": "right"
      }],
      ["text-justify", {
        "text-align": "justify"
      }],
      ["text-start", {
        "text-align": "start"
      }],
      ["text-end", {
        "text-align": "end"
      }],
      ["text-align-inherit", {
        "text-align": "inherit"
      }],
      ["text-align-initial", {
        "text-align": "initial"
      }],
      ["text-align-revert", {
        "text-align": "revert"
      }],
      ["text-align-revert-layer", {
        "text-align": "revert-layer"
      }],
      ["text-align-unset", {
        "text-align": "unset"
      }],
      ["text-align-center", {
        "text-align": "center"
      }],
      ["text-align-left", {
        "text-align": "left"
      }],
      ["text-align-right", {
        "text-align": "right"
      }],
      ["text-align-justify", {
        "text-align": "justify"
      }],
      ["text-align-start", {
        "text-align": "start"
      }],
      ["text-align-end", {
        "text-align": "end"
      }],
      [{}, null, {
        "autocomplete": "indent-$textIndent"
      }],
      ["text-wrap", {
        "text-wrap": "wrap"
      }],
      ["text-nowrap", {
        "text-wrap": "nowrap"
      }],
      ["text-balance", {
        "text-wrap": "balance"
      }],
      ["text-pretty", {
        "text-wrap": "pretty"
      }],
      [{}, null, {
        "autocomplete": [
          "(vertical|align|v)-(mid|base|btm|baseline|top|start|middle|bottom|end|text-top|text-bottom|sub|super|inherit|initial|revert|revert-layer|unset)",
          "(vertical|align|v)-<percentage>"
        ]
      }],
      [{}, null, {
        "autocomplete": "text-$fontSize"
      }],
      [{}, null, {
        "autocomplete": "text-size-$fontSize"
      }],
      [{}, null, {
        "autocomplete": "text-$colors"
      }],
      [{}, null, {
        "autocomplete": "(color|c)-$colors"
      }],
      [{}, null, {
        "autocomplete": "(text|color|c)-(inherit|initial|revert|revert-layer|unset)"
      }],
      [{}, null, {
        "autocomplete": "(text|color|c)-(op|opacity)-<percent>"
      }],
      [{}, null, {
        "autocomplete": ["(font|fw)-(100|200|300|400|500|600|700|800|900)",
          "(font|fw)-$fontWeight"
        ]
      }],
      [{}, null, {
        "autocomplete": "(leading|lh|line-height)-$lineHeight"
      }],
      ["font-synthesis-weight", {
        "font-synthesis": "weight"
      }],
      ["font-synthesis-style", {
        "font-synthesis": "style"
      }],
      ["font-synthesis-small-caps", {
        "font-synthesis": "small-caps"
      }],
      ["font-synthesis-none", {
        "font-synthesis": "none"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": "tracking-$letterSpacing"
      }],
      [{}, null, {
        "autocomplete": "word-spacing-$wordSpacing"
      }],
      ["font-stretch-normal", {
        "font-stretch": "normal"
      }],
      ["font-stretch-ultra-condensed", {
        "font-stretch": "ultra-condensed"
      }],
      ["font-stretch-extra-condensed", {
        "font-stretch": "extra-condensed"
      }],
      ["font-stretch-condensed", {
        "font-stretch": "condensed"
      }],
      ["font-stretch-semi-condensed", {
        "font-stretch": "semi-condensed"
      }],
      ["font-stretch-semi-expanded", {
        "font-stretch": "semi-expanded"
      }],
      ["font-stretch-expanded", {
        "font-stretch": "expanded"
      }],
      ["font-stretch-extra-expanded", {
        "font-stretch": "extra-expanded"
      }],
      ["font-stretch-ultra-expanded", {
        "font-stretch": "ultra-expanded"
      }],
      [{}, null, {
        "autocomplete": "font-stretch-<percentage>"
      }],
      [{}, null, {
        "autocomplete": "font-$fontFamily"
      }],
      ["case-upper", {
        "text-transform": "uppercase"
      }],
      ["case-lower", {
        "text-transform": "lowercase"
      }],
      ["case-capital", {
        "text-transform": "capitalize"
      }],
      ["case-normal", {
        "text-transform": "none"
      }],
      ["case-inherit", {
        "text-transform": "inherit"
      }],
      ["case-initial", {
        "text-transform": "initial"
      }],
      ["case-revert", {
        "text-transform": "revert"
      }],
      ["case-revert-layer", {
        "text-transform": "revert-layer"
      }],
      ["case-unset", {
        "text-transform": "unset"
      }],
      ["uppercase", {
        "text-transform": "uppercase"
      }],
      ["lowercase", {
        "text-transform": "lowercase"
      }],
      ["capitalize", {
        "text-transform": "capitalize"
      }],
      ["normal-case", {
        "text-transform": "none"
      }],
      ["italic", {
        "font-style": "italic"
      }],
      ["not-italic", {
        "font-style": "normal"
      }],
      ["font-italic", {
        "font-style": "italic"
      }],
      ["font-not-italic", {
        "font-style": "normal"
      }],
      ["oblique", {
        "font-style": "oblique"
      }],
      ["not-oblique", {
        "font-style": "normal"
      }],
      ["font-oblique", {
        "font-style": "oblique"
      }],
      ["font-not-oblique", {
        "font-style": "normal"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ordinal", "--un-slashed-zero", "--un-numeric-figure",
            "--un-numeric-spacing", "--un-numeric-fraction"
          ]
        },
        "autocomplete": "ordinal"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ordinal", "--un-slashed-zero", "--un-numeric-figure",
            "--un-numeric-spacing", "--un-numeric-fraction"
          ]
        },
        "autocomplete": "slashed-zero"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ordinal", "--un-slashed-zero", "--un-numeric-figure",
            "--un-numeric-spacing", "--un-numeric-fraction"
          ]
        },
        "autocomplete": "lining-nums"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ordinal", "--un-slashed-zero", "--un-numeric-figure",
            "--un-numeric-spacing", "--un-numeric-fraction"
          ]
        },
        "autocomplete": "oldstyle-nums"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ordinal", "--un-slashed-zero", "--un-numeric-figure",
            "--un-numeric-spacing", "--un-numeric-fraction"
          ]
        },
        "autocomplete": "proportional-nums"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ordinal", "--un-slashed-zero", "--un-numeric-figure",
            "--un-numeric-spacing", "--un-numeric-fraction"
          ]
        },
        "autocomplete": "tabular-nums"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ordinal", "--un-slashed-zero", "--un-numeric-figure",
            "--un-numeric-spacing", "--un-numeric-fraction"
          ]
        },
        "autocomplete": "diagonal-fractions"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ordinal", "--un-slashed-zero", "--un-numeric-figure",
            "--un-numeric-spacing", "--un-numeric-fraction"
          ]
        },
        "autocomplete": "stacked-fractions"
      }],
      ["normal-nums", {
        "font-variant-numeric": "normal"
      }],
      [{}, null, {
        "autocomplete": "decoration-(underline|overline|line-through)"
      }],
      [{}, null, {
        "autocomplete": "(underline|decoration)-<num>"
      }],
      [{}, null, {
        "autocomplete": "(underline|decoration)-(auto|from-font)"
      }],
      [{}, null, {
        "autocomplete": "(underline|decoration)-$colors"
      }],
      [{}, null, {
        "autocomplete": "(underline|decoration)-(op|opacity)-<percent>"
      }],
      [{}, null, {
        "autocomplete": "(underline|decoration)-(offset)-<num>"
      }],
      ["underline-solid", {
        "text-decoration-style": "solid"
      }],
      ["underline-double", {
        "text-decoration-style": "double"
      }],
      ["underline-dotted", {
        "text-decoration-style": "dotted"
      }],
      ["underline-dashed", {
        "text-decoration-style": "dashed"
      }],
      ["underline-wavy", {
        "text-decoration-style": "wavy"
      }],
      ["underline-inherit", {
        "text-decoration-style": "inherit"
      }],
      ["underline-initial", {
        "text-decoration-style": "initial"
      }],
      ["underline-revert", {
        "text-decoration-style": "revert"
      }],
      ["underline-revert-layer", {
        "text-decoration-style": "revert-layer"
      }],
      ["underline-unset", {
        "text-decoration-style": "unset"
      }],
      ["decoration-solid", {
        "text-decoration-style": "solid"
      }],
      ["decoration-double", {
        "text-decoration-style": "double"
      }],
      ["decoration-dotted", {
        "text-decoration-style": "dotted"
      }],
      ["decoration-dashed", {
        "text-decoration-style": "dashed"
      }],
      ["decoration-wavy", {
        "text-decoration-style": "wavy"
      }],
      ["decoration-inherit", {
        "text-decoration-style": "inherit"
      }],
      ["decoration-initial", {
        "text-decoration-style": "initial"
      }],
      ["decoration-revert", {
        "text-decoration-style": "revert"
      }],
      ["decoration-revert-layer", {
        "text-decoration-style": "revert-layer"
      }],
      ["decoration-unset", {
        "text-decoration-style": "unset"
      }],
      ["no-underline", {
        "text-decoration": "none"
      }],
      ["decoration-none", {
        "text-decoration": "none"
      }],
      ["antialiased", {
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale"
      }],
      ["subpixel-antialiased", {
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": "text-stroke-$textStrokeWidth"
      }],
      [{}, null, {
        "autocomplete": "text-stroke-$colors"
      }],
      [{}, null, {
        "autocomplete": "text-stroke-(op|opacity)-<percent>"
      }],
      [{}, null, {
        "autocomplete": "text-shadow-$textShadow"
      }],
      [{}, null, {
        "autocomplete": "text-shadow-color-$colors"
      }],
      [{}, null, {
        "autocomplete": "text-shadow-color-(op|opacity)-<percent>"
      }],
      ["hyphens-manual", {
        "-webkit-hyphens": "manual",
        "-ms-hyphens": "manual",
        "hyphens": "manual"
      }],
      ["hyphens-auto", {
        "-webkit-hyphens": "auto",
        "-ms-hyphens": "auto",
        "hyphens": "auto"
      }],
      ["hyphens-none", {
        "-webkit-hyphens": "none",
        "-ms-hyphens": "none",
        "hyphens": "none"
      }],
      ["hyphens-inherit", {
        "-webkit-hyphens": "inherit",
        "-ms-hyphens": "inherit",
        "hyphens": "inherit"
      }],
      ["hyphens-initial", {
        "-webkit-hyphens": "initial",
        "-ms-hyphens": "initial",
        "hyphens": "initial"
      }],
      ["hyphens-revert", {
        "-webkit-hyphens": "revert",
        "-ms-hyphens": "revert",
        "hyphens": "revert"
      }],
      ["hyphens-revert-layer", {
        "-webkit-hyphens": "revert-layer",
        "-ms-hyphens": "revert-layer",
        "hyphens": "revert-layer"
      }],
      ["hyphens-unset", {
        "-webkit-hyphens": "unset",
        "-ms-hyphens": "unset",
        "hyphens": "unset"
      }],
      ["write-vertical-right", {
        "writing-mode": "vertical-rl"
      }],
      ["write-vertical-left", {
        "writing-mode": "vertical-lr"
      }],
      ["write-normal", {
        "writing-mode": "horizontal-tb"
      }],
      ["write-inherit", {
        "writing-mode": "inherit"
      }],
      ["write-initial", {
        "writing-mode": "initial"
      }],
      ["write-revert", {
        "writing-mode": "revert"
      }],
      ["write-revert-layer", {
        "writing-mode": "revert-layer"
      }],
      ["write-unset", {
        "writing-mode": "unset"
      }],
      ["write-orient-mixed", {
        "text-orientation": "mixed"
      }],
      ["write-orient-sideways", {
        "text-orientation": "sideways"
      }],
      ["write-orient-upright", {
        "text-orientation": "upright"
      }],
      ["write-orient-inherit", {
        "text-orientation": "inherit"
      }],
      ["write-orient-initial", {
        "text-orientation": "initial"
      }],
      ["write-orient-revert", {
        "text-orientation": "revert"
      }],
      ["write-orient-revert-layer", {
        "text-orientation": "revert-layer"
      }],
      ["write-orient-unset", {
        "text-orientation": "unset"
      }],
      [{}, null, {
        "autocomplete": "caret-$colors"
      }],
      [{}, null, {
        "autocomplete": ["caret-(op|opacity)", "caret-(op|opacity)-<percent>"]
      }],
      [{}, null, {
        "autocomplete": "accent-$colors"
      }],
      [{}, null, {
        "autocomplete": ["accent-(op|opacity)", "accent-(op|opacity)-<percent>"]
      }],
      [{}, null],
      ["bg-blend-multiply", {
        "background-blend-mode": "multiply"
      }],
      ["bg-blend-screen", {
        "background-blend-mode": "screen"
      }],
      ["bg-blend-overlay", {
        "background-blend-mode": "overlay"
      }],
      ["bg-blend-darken", {
        "background-blend-mode": "darken"
      }],
      ["bg-blend-lighten", {
        "background-blend-mode": "lighten"
      }],
      ["bg-blend-color-dodge", {
        "background-blend-mode": "color-dodge"
      }],
      ["bg-blend-color-burn", {
        "background-blend-mode": "color-burn"
      }],
      ["bg-blend-hard-light", {
        "background-blend-mode": "hard-light"
      }],
      ["bg-blend-soft-light", {
        "background-blend-mode": "soft-light"
      }],
      ["bg-blend-difference", {
        "background-blend-mode": "difference"
      }],
      ["bg-blend-exclusion", {
        "background-blend-mode": "exclusion"
      }],
      ["bg-blend-hue", {
        "background-blend-mode": "hue"
      }],
      ["bg-blend-saturation", {
        "background-blend-mode": "saturation"
      }],
      ["bg-blend-color", {
        "background-blend-mode": "color"
      }],
      ["bg-blend-luminosity", {
        "background-blend-mode": "luminosity"
      }],
      ["bg-blend-normal", {
        "background-blend-mode": "normal"
      }],
      ["bg-blend-inherit", {
        "background-blend": "inherit"
      }],
      ["bg-blend-initial", {
        "background-blend": "initial"
      }],
      ["bg-blend-revert", {
        "background-blend": "revert"
      }],
      ["bg-blend-revert-layer", {
        "background-blend": "revert-layer"
      }],
      ["bg-blend-unset", {
        "background-blend": "unset"
      }],
      ["mix-blend-multiply", {
        "mix-blend-mode": "multiply"
      }],
      ["mix-blend-screen", {
        "mix-blend-mode": "screen"
      }],
      ["mix-blend-overlay", {
        "mix-blend-mode": "overlay"
      }],
      ["mix-blend-darken", {
        "mix-blend-mode": "darken"
      }],
      ["mix-blend-lighten", {
        "mix-blend-mode": "lighten"
      }],
      ["mix-blend-color-dodge", {
        "mix-blend-mode": "color-dodge"
      }],
      ["mix-blend-color-burn", {
        "mix-blend-mode": "color-burn"
      }],
      ["mix-blend-hard-light", {
        "mix-blend-mode": "hard-light"
      }],
      ["mix-blend-soft-light", {
        "mix-blend-mode": "soft-light"
      }],
      ["mix-blend-difference", {
        "mix-blend-mode": "difference"
      }],
      ["mix-blend-exclusion", {
        "mix-blend-mode": "exclusion"
      }],
      ["mix-blend-hue", {
        "mix-blend-mode": "hue"
      }],
      ["mix-blend-saturation", {
        "mix-blend-mode": "saturation"
      }],
      ["mix-blend-color", {
        "mix-blend-mode": "color"
      }],
      ["mix-blend-luminosity", {
        "mix-blend-mode": "luminosity"
      }],
      ["mix-blend-plus-lighter", {
        "mix-blend-mode": "plus-lighter"
      }],
      ["mix-blend-normal", {
        "mix-blend-mode": "normal"
      }],
      ["mix-blend-inherit", {
        "mix-blend": "inherit"
      }],
      ["mix-blend-initial", {
        "mix-blend": "initial"
      }],
      ["mix-blend-revert", {
        "mix-blend": "revert"
      }],
      ["mix-blend-revert-layer", {
        "mix-blend": "revert-layer"
      }],
      ["mix-blend-unset", {
        "mix-blend": "unset"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ring-offset-shadow", "--un-ring-shadow",
            "--un-shadow-inset", "--un-shadow"
          ]
        },
        "autocomplete": ["shadow-$colors", "shadow-$boxShadow"]
      }],
      [{}, null, {
        "autocomplete": "shadow-(op|opacity)-<percent>"
      }],
      ["shadow-inset", {
        "--un-shadow-inset": "inset"
      }],
      [{}, null, {
        "autocomplete": "outline-(width|size)-<num>"
      }],
      [{}, null, {
        "autocomplete": "outline-$colors"
      }],
      [{}, null, {
        "autocomplete": "outline-(offset)-<num>"
      }],
      ["outline", {
        "outline-style": "solid"
      }],
      ["outline-auto", {
        "outline-style": "auto"
      }],
      ["outline-dashed", {
        "outline-style": "dashed"
      }],
      ["outline-dotted", {
        "outline-style": "dotted"
      }],
      ["outline-double", {
        "outline-style": "double"
      }],
      ["outline-hidden", {
        "outline-style": "hidden"
      }],
      ["outline-solid", {
        "outline-style": "solid"
      }],
      ["outline-groove", {
        "outline-style": "groove"
      }],
      ["outline-ridge", {
        "outline-style": "ridge"
      }],
      ["outline-inset", {
        "outline-style": "inset"
      }],
      ["outline-outset", {
        "outline-style": "outset"
      }],
      ["outline-inherit", {
        "outline-style": "inherit"
      }],
      ["outline-initial", {
        "outline-style": "initial"
      }],
      ["outline-revert", {
        "outline-style": "revert"
      }],
      ["outline-revert-layer", {
        "outline-style": "revert-layer"
      }],
      ["outline-unset", {
        "outline-style": "unset"
      }],
      ["outline-none", {
        "outline": "2px solid transparent",
        "outline-offset": "2px"
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-ring-inset", "--un-ring-offset-width",
            "--un-ring-offset-color", "--un-ring-width", "--un-ring-color", "--un-shadow"
          ]
        },
        "autocomplete": "ring-$ringWidth"
      }],
      [{}, null, {
        "autocomplete": "ring-(width|size)-$lineWidth"
      }],
      ["ring-offset", {
        "--un-ring-offset-width": "1px"
      }],
      [{}, null, {
        "autocomplete": "ring-offset-(width|size)-$lineWidth"
      }],
      [{}, null, {
        "autocomplete": "ring-$colors"
      }],
      [{}, null, {
        "autocomplete": "ring-(op|opacity)-<percent>"
      }],
      [{}, null, {
        "autocomplete": "ring-offset-$colors"
      }],
      [{}, null, {
        "autocomplete": "ring-offset-(op|opacity)-<percent>"
      }],
      ["ring-inset", {
        "--un-ring-inset": "inset"
      }],
      ["image-render-auto", {
        "image-rendering": "auto"
      }],
      ["image-render-edge", {
        "image-rendering": "crisp-edges"
      }],
      ["image-render-pixel", [
        ["-ms-interpolation-mode", "nearest-neighbor"],
        ["image-rendering", "-webkit-optimize-contrast"],
        ["image-rendering", "-moz-crisp-edges"],
        ["image-rendering", "-o-pixelated"],
        ["image-rendering", "pixelated"]
      ]],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        },
        "autocomplete": ["(backdrop|filter)-blur-$blur", "blur-$blur", "filter-blur"]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        },
        "autocomplete": ["(backdrop|filter)-brightness-<percent>", "brightness-<percent>"]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        },
        "autocomplete": ["(backdrop|filter)-contrast-<percent>", "contrast-<percent>"]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia"
          ]
        },
        "autocomplete": ["filter-drop", "filter-drop-shadow", "filter-drop-shadow-color",
          "drop-shadow", "drop-shadow-color", "filter-drop-shadow-$dropShadow",
          "drop-shadow-$dropShadow", "filter-drop-shadow-color-$colors",
          "drop-shadow-color-$colors", "filter-drop-shadow-color-(op|opacity)",
          "drop-shadow-color-(op|opacity)",
          "filter-drop-shadow-color-(op|opacity)-<percent>",
          "drop-shadow-color-(op|opacity)-<percent>"
        ]
      }],
      [{}, null],
      [{}, null],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        },
        "autocomplete": ["(backdrop|filter)-grayscale",
          "(backdrop|filter)-grayscale-<percent>", "grayscale-<percent>"
        ]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        }
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        },
        "autocomplete": ["(backdrop|filter)-invert", "(backdrop|filter)-invert-<percent>",
          "invert-<percent>"
        ]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        },
        "autocomplete": ["backdrop-(op|opacity)", "backdrop-(op|opacity)-<percent>"]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        },
        "autocomplete": ["(backdrop|filter)-saturate",
          "(backdrop|filter)-saturate-<percent>", "saturate-<percent>"
        ]
      }],
      [{}, null, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia", "--un-backdrop-blur",
            "--un-backdrop-brightness", "--un-backdrop-contrast",
            "--un-backdrop-grayscale", "--un-backdrop-hue-rotate", "--un-backdrop-invert",
            "--un-backdrop-opacity", "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        },
        "autocomplete": ["(backdrop|filter)-sepia", "(backdrop|filter)-sepia-<percent>",
          "sepia-<percent>"
        ]
      }],
      ["filter", {
        "filter": "var(--un-blur) var(--un-brightness) var(--un-contrast) var(--un-drop-shadow) var(--un-grayscale) var(--un-hue-rotate) var(--un-invert) var(--un-saturate) var(--un-sepia)"
      }, {
        "custom": {
          "preflightKeys": ["--un-blur", "--un-brightness", "--un-contrast",
            "--un-drop-shadow", "--un-grayscale", "--un-hue-rotate", "--un-invert",
            "--un-saturate", "--un-sepia"
          ]
        }
      }],
      ["backdrop-filter", {
        "-webkit-backdrop-filter": "var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)",
        "backdrop-filter": "var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia)"
      }, {
        "custom": {
          "preflightKeys": ["--un-backdrop-blur", "--un-backdrop-brightness",
            "--un-backdrop-contrast", "--un-backdrop-grayscale",
            "--un-backdrop-hue-rotate", "--un-backdrop-invert", "--un-backdrop-opacity",
            "--un-backdrop-saturate", "--un-backdrop-sepia"
          ]
        }
      }],
      ["filter-none", {
        "filter": "none"
      }],
      ["backdrop-filter-none", {
        "-webkit-backdrop-filter": "none",
        "backdrop-filter": "none"
      }],
      ["filter-inherit", {
        "filter": "inherit"
      }],
      ["filter-initial", {
        "filter": "initial"
      }],
      ["filter-revert", {
        "filter": "revert"
      }],
      ["filter-revert-layer", {
        "filter": "revert-layer"
      }],
      ["filter-unset", {
        "filter": "unset"
      }],
      ["backdrop-filter-inherit", {
        "-webkit-backdrop-filter": "inherit",
        "backdrop-filter": "inherit"
      }],
      ["backdrop-filter-initial", {
        "-webkit-backdrop-filter": "initial",
        "backdrop-filter": "initial"
      }],
      ["backdrop-filter-revert", {
        "-webkit-backdrop-filter": "revert",
        "backdrop-filter": "revert"
      }],
      ["backdrop-filter-revert-layer", {
        "-webkit-backdrop-filter": "revert-layer",
        "backdrop-filter": "revert-layer"
      }],
      ["backdrop-filter-unset", {
        "-webkit-backdrop-filter": "unset",
        "backdrop-filter": "unset"
      }],
      [{}, null, {
        "autocomplete": "transition-$transitionProperty-$duration"
      }],
      [{}, null, {
        "autocomplete": ["transition-duration-$duration", "duration-$duration"]
      }],
      [{}, null, {
        "autocomplete": ["transition-delay-$duration", "delay-$duration"]
      }],
      [{}, null, {
        "autocomplete": ["transition-ease-(linear|in|out|in-out|DEFAULT)",
          "ease-(linear|in|out|in-out|DEFAULT)"
        ]
      }],
      [{}, null, {
        "autocomplete": ["transition-property-(inherit|initial|revert|revert-layer|unset)",
          "transition-property-$transitionProperty", "property-$transitionProperty"
        ]
      }],
      ["transition-none", {
        "transition": "none"
      }],
      ["transition-inherit", {
        "transition": "inherit"
      }],
      ["transition-initial", {
        "transition": "initial"
      }],
      ["transition-revert", {
        "transition": "revert"
      }],
      ["transition-revert-layer", {
        "transition": "revert-layer"
      }],
      ["transition-unset", {
        "transition": "unset"
      }],
      ["transition-discrete", {
        "transition-behavior": "allow-discrete"
      }],
      ["transition-normal", {
        "transition-behavior": "normal"
      }],
      [{}, null],
      [{}, null, {
        "autocomplete": "intrinsic-size-<num>"
      }],
      ["content-visibility-visible", {
        "content-visibility": "visible"
      }],
      ["content-visibility-hidden", {
        "content-visibility": "hidden"
      }],
      ["content-visibility-auto", {
        "content-visibility": "auto"
      }],
      ["content-visibility-inherit", {
        "content-visibility": "inherit"
      }],
      ["content-visibility-initial", {
        "content-visibility": "initial"
      }],
      ["content-visibility-revert", {
        "content-visibility": "revert"
      }],
      ["content-visibility-revert-layer", {
        "content-visibility": "revert-layer"
      }],
      ["content-visibility-unset", {
        "content-visibility": "unset"
      }],
      [{}, null],
      ["content-empty", {
        "content": "\"\""
      }],
      ["content-none", {
        "content": "none"
      }],
      [{}, null, {
        "autocomplete": "placeholder-$colors"
      }],
      [{}, null, {
        "autocomplete": ["placeholder-(op|opacity)", "placeholder-(op|opacity)-<percent>"]
      }],
      [{}, null],
      [{}, null],
      ["min-h-dvh", {
        "min-height": "100dvh"
      }],
      ["min-h-svh", {
        "min-height": "100svh"
      }],
      ["min-h-lvh", {
        "min-height": "100lvh"
      }],
      ["h-dvh", {
        "height": "100dvh"
      }],
      ["h-svh", {
        "height": "100svh"
      }],
      ["h-lvh", {
        "height": "100lvh"
      }],
      ["max-h-dvh", {
        "max-height": "100dvh"
      }],
      ["max-h-svh", {
        "max-height": "100svh"
      }],
      ["max-h-lvh", {
        "max-height": "100lvh"
      }],
      ["field-sizing-fixed", {
        "field-sizing": "fixed"
      }],
      ["field-sizing-content", {
        "field-sizing": "content"
      }],
      [{}, null]
    ],
    "variants": [null, null, {
      "name": "aria",
      "multiPass": true
    }, {
      "name": "data",
      "multiPass": true
    }, {
      "name": "layer"
    }, {
      "name": "selector"
    }, {
      "name": "uno-layer"
    }, {
      "name": "negative"
    }, {
      "name": "starting"
    }, {
      "name": "important"
    }, {
      "name": "supports",
      "multiPass": true
    }, {
      "name": "print",
      "autocomplete": "print:"
    }, {
      "name": "media",
      "multiPass": true
    }, {
      "name": "breakpoints",
      "multiPass": true,
      "autocomplete": "(at-|lt-|max-|)$breakpoints:"
    }, {
      "name": "combinator:all",
      "multiPass": true
    }, {
      "name": "combinator:children",
      "multiPass": true
    }, {
      "name": "combinator:next",
      "multiPass": true
    }, {
      "name": "combinator:sibling",
      "multiPass": true
    }, {
      "name": "combinator:siblings",
      "multiPass": true
    }, {
      "name": "pseudo",
      "multiPass": true,
      "autocomplete": "(placeholder-shown|backdrop-element|indeterminate|focus-visible|first-of-type|first-letter|user-invalid|out-of-range|focus-within|popover-open|even-of-type|last-of-type|only-of-type|odd-of-type|placeholder|first-line|user-valid|read-write|only-child|read-only|any-link|autofill|optional|required|in-range|disabled|visited|default|checked|invalid|enabled|target|active|before|valid|empty|hover|focus|first|after|link|open|root|even|last|file|odd|nth|backdrop):"
    }, {
      "name": "pseudo:multi",
      "multiPass": false,
      "autocomplete": "(selection|marker):"
    }, {
      "multiPass": true,
      "autocomplete": "(not|is|where|has)-(placeholder-shown|indeterminate|focus-visible|first-of-type|user-invalid|out-of-range|focus-within|popover-open|even-of-type|last-of-type|only-of-type|odd-of-type|user-valid|read-write|only-child|read-only|any-link|autofill|optional|required|in-range|disabled|visited|default|checked|invalid|enabled|target|active|valid|empty|hover|focus|first|link|open|root|even|last|odd|nth|):"
    }, {
      "name": "pseudo:group",
      "multiPass": true
    }, {
      "name": "pseudo:peer",
      "multiPass": true
    }, {
      "name": "pseudo:parent",
      "multiPass": true
    }, {
      "name": "pseudo:previous",
      "multiPass": true
    }, {
      "multiPass": true
    }, {
      "name": "dark",
      "autocomplete": "dark:"
    }, {
      "name": "light",
      "autocomplete": "light:"
    }, {
      "name": "rtl",
      "autocomplete": "rtl:"
    }, {
      "name": "ltr",
      "autocomplete": "ltr:"
    }, {
      "name": "scope"
    }, {
      "name": "*",
      "autocomplete": "*:"
    }, {
      "name": "@",
      "multiPass": true
    }, {
      "name": "variables",
      "multiPass": true
    }, {
      "name": "group-data",
      "multiPass": true
    }, {
      "name": "peer-data",
      "multiPass": true
    }, {
      "name": "parent-data",
      "multiPass": true
    }, {
      "name": "previous-data",
      "multiPass": true
    }, {
      "name": "has-data",
      "multiPass": true
    }, {
      "name": "group-aria",
      "multiPass": true
    }, {
      "name": "peer-aria",
      "multiPass": true
    }, {
      "name": "parent-aria",
      "multiPass": true
    }, {
      "name": "previous-aria",
      "multiPass": true
    }, {
      "name": "has-aria",
      "multiPass": true
    }, {
      "name": "theme-variables"
    }, {
      "name": "contrast-more",
      "autocomplete": "contrast-more:"
    }, {
      "name": "contrast-less",
      "autocomplete": "contrast-less:"
    }, {
      "name": "landscape",
      "autocomplete": "landscape:"
    }, {
      "name": "portrait",
      "autocomplete": "portrait:"
    }, {
      "name": "motion-reduce",
      "autocomplete": "motion-reduce:"
    }, {
      "name": "motion-safe",
      "autocomplete": "motion-safe:"
    }, {
      "name": "svg",
      "autocomplete": "svg:"
    }, {
      "name": ".dark",
      "autocomplete": ".dark:"
    }, {
      "name": ".light",
      "autocomplete": ".light:"
    }, {
      "name": "@dark",
      "autocomplete": "@dark:"
    }, {
      "name": "@light",
      "autocomplete": "@light:"
    }, {
      "name": "@hover",
      "autocomplete": "@hover:"
    }, {
      "name": "mix"
    }],
    "options": {
      "important": false,
      "dark": "class",
      "attributifyPseudo": false,
      "preflight": true,
      "variablePrefix": "un-"
    },
    "postprocess": [],
    "preflights": [{
      "layer": "preflights"
    }],
    "extractorDefault": {
      "name": "@unocss/extractor-arbitrary-variants",
      "order": 0
    },
    "autocomplete": {
      "shorthands": {
        "position": ["relative", "absolute", "fixed", "sticky", "static"],
        "globalKeyword": ["inherit", "initial", "revert", "revert-layer", "unset"]
      }
    },
    "shortcuts": [
      [{}, null]
    ]
  }, {
    "name": "@unocss/preset-icons",
    "enforce": "pre",
    "options": {
      "scale": 1.2,
      "extraProperties": {
        "display": "inline-block",
        "vertical-align": "middle"
      },
      "collections": {}
    },
    "layers": {
      "icons": -30
    },
    "api": {},
    "rules": [
      [{}, null, {
        "layer": "icons",
        "prefix": "i-"
      }]
    ]
  }]
}
```

构建方法
```

/**
 * Generates an alpha palette for a given hex color.
 *
 * @param hex - The hex color code (without alpha) to generate the palette from.
 * @returns An object where keys are opacity percentages and values are hex colors with alpha.
 *
 * Example:
 *
 * ```
 * {
 *   '1': '#FFFFFF03',
 *   '2': '#FFFFFF05',
 *   '3': '#FFFFFF08',
 * }
 * ```
 */
function generateAlphaPalette(hex: string) {
  return [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reduce(
    (acc, opacity) => {
      const alpha = Math.round((opacity / 100) * 255)
        .toString(16)
        .padStart(2, '0');

      (acc as Record<number, string>)[opacity] = `${hex}${alpha}`;

      return acc;
    },
    {} satisfies Record<number, string>,
  );
}

const BASE_COLORS = {
  white: '#FFFFFF',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  accent: {
    50: '#EEF9FF',
    100: '#D8F1FF',
    200: '#BAE7FF',
    300: '#8ADAFF',
    400: '#53C4FF',
    500: '#2BA6FF',
    600: '#1488FC',
    700: '#0D6FE8',
    800: '#1259BB',
    900: '#154E93',
    950: '#122F59',
  },
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },
  orange: {
    50: '#FFFAEB',
    100: '#FEEFC7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#792E0D',
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
};

const COLOR_PRIMITIVES = {
  ...BASE_COLORS,
  alpha: {
    white: generateAlphaPalette(BASE_COLORS.white),
    gray: generateAlphaPalette(BASE_COLORS.gray[900]),
    red: generateAlphaPalette(BASE_COLORS.red[500]),
    accent: generateAlphaPalette(BASE_COLORS.accent[500]),
  },
};


// twilwind.config.js
{
  shortcuts: {
    'bolt-ease-cubic-bezier': 'ease-[cubic-bezier(0.4,0,0.2,1)]',
    'transition-theme':
      'transition-[background-color,border-color,color] duration-150 bolt-ease-cubic-bezier',
    kdb: 'bg-bolt-elements-code-background text-bolt-elements-code-text py-1 px-1.5 rounded-md',
    'max-w-chat': 'max-w-[var(--chat-max-width)]',
  },
  rules: [
    /**
     * This shorthand doesn't exist in Tailwind and we overwrite it to avoid
     * any conflicts with minified CSS classes.
     */
    ['b', {}],
  ],
  theme: {
    colors: {
      ...COLOR_PRIMITIVES,
      bolt: {
        elements: {
          Input: {
            colorTextPlaceholder: 'var(--bolt-elements-Input-colorTextPlaceholder)',
            colorFillTertiary: ' var(--bolt-elements-Input-colorFillTertiary)',
            paddingLine: 'var(--bolt-elements-Input-paddingLine)',
          },
          Button: {
            textTextColor: 'var(--bolt-elements-Button-textTextColor)',
          },
          Menu: {
            itemBg: 'var(--bolt-elements-Menu-itemBg)',
          },
          borderColor: 'var(--bolt-elements-borderColor)',
          borderColorActive: 'var(--bolt-elements-borderColorActive)',
          background: {
            depth: {
              1: 'var(--bolt-elements-bg-depth-1)',
              2: 'var(--bolt-elements-bg-depth-2)',
              3: 'var(--bolt-elements-bg-depth-3)',
              4: 'var(--bolt-elements-bg-depth-4)',
            },
          },
          textPrimary: 'var(--bolt-elements-textPrimary)',
          textSecondary: 'var(--bolt-elements-textSecondary)',
          textTertiary: 'var(--bolt-elements-textTertiary)',
          code: {
            background: 'var(--bolt-elements-code-background)',
            text: 'var(--bolt-elements-code-text)',
          },
          button: {
            primary: {
              background: 'var(--bolt-elements-button-primary-background)',
              backgroundHover: 'var(--bolt-elements-button-primary-backgroundHover)',
              text: 'var(--bolt-elements-button-primary-text)',
            },
            secondary: {
              background: 'var(--bolt-elements-button-secondary-background)',
              backgroundHover: 'var(--bolt-elements-button-secondary-backgroundHover)',
              text: 'var(--bolt-elements-button-secondary-text)',
            },
            danger: {
              background: 'var(--bolt-elements-button-danger-background)',
              backgroundHover: 'var(--bolt-elements-button-danger-backgroundHover)',
              text: 'var(--bolt-elements-button-danger-text)',
            },
          },
          item: {
            contentDefault: 'var(--bolt-elements-item-contentDefault)',
            contentActive: 'var(--bolt-elements-item-contentActive)',
            contentAccent: 'var(--bolt-elements-item-contentAccent)',
            contentDanger: 'var(--bolt-elements-item-contentDanger)',
            backgroundDefault: 'var(--bolt-elements-item-backgroundDefault)',
            backgroundActive: 'var(--bolt-elements-item-backgroundActive)',
            backgroundAccent: 'var(--bolt-elements-item-backgroundAccent)',
            backgroundDanger: 'var(--bolt-elements-item-backgroundDanger)',
          },
          actions: {
            background: 'var(--bolt-elements-actions-background)',
            code: {
              background: 'var(--bolt-elements-actions-code-background)',
            },
          },
          artifacts: {
            background: 'var(--bolt-elements-artifacts-background)',
            backgroundHover: 'var(--bolt-elements-artifacts-backgroundHover)',
            borderColor: 'var(--bolt-elements-artifacts-borderColor)',
            inlineCode: {
              background: 'var(--bolt-elements-artifacts-inlineCode-background)',
              text: 'var(--bolt-elements-artifacts-inlineCode-text)',
            },
          },
          messages: {
            background: 'var(--bolt-elements-messages-background)',
            linkColor: 'var(--bolt-elements-messages-linkColor)',
            code: {
              background: 'var(--bolt-elements-messages-code-background)',
            },
            inlineCode: {
              background: 'var(--bolt-elements-messages-inlineCode-background)',
              text: 'var(--bolt-elements-messages-inlineCode-text)',
            },
          },
          icon: {
            success: 'var(--bolt-elements-icon-success)',
            error: 'var(--bolt-elements-icon-error)',
            primary: 'var(--bolt-elements-icon-primary)',
            secondary: 'var(--bolt-elements-icon-secondary)',
            tertiary: 'var(--bolt-elements-icon-tertiary)',
          },
          preview: {
            addressBar: {
              background: 'var(--bolt-elements-preview-addressBar-background)',
              backgroundHover: 'var(--bolt-elements-preview-addressBar-backgroundHover)',
              backgroundActive: 'var(--bolt-elements-preview-addressBar-backgroundActive)',
              text: 'var(--bolt-elements-preview-addressBar-text)',
              textActive: 'var(--bolt-elements-preview-addressBar-textActive)',
            },
          },
          terminals: {
            background: 'var(--bolt-elements-terminals-background)',
            buttonBackground: 'var(--bolt-elements-terminals-buttonBackground)',
          },
          dividerColor: 'var(--bolt-elements-dividerColor)',
          loader: {
            background: 'var(--bolt-elements-loader-background)',
            progress: 'var(--bolt-elements-loader-progress)',
          },
          prompt: {
            background: 'var(--bolt-elements-prompt-background)',
          },
          sidebar: {
            dropdownShadow: 'var(--bolt-elements-sidebar-dropdownShadow)',
            buttonBackgroundDefault: 'var(--bolt-elements-sidebar-buttonBackgroundDefault)',
            buttonBackgroundHover: 'var(--bolt-elements-sidebar-buttonBackgroundHover)',
            buttonText: 'var(--bolt-elements-sidebar-buttonText)',
          },
          cta: {
            background: 'var(--bolt-elements-cta-background)',
            text: 'var(--bolt-elements-cta-text)',
          },
        },
      },
    },
    breakpoints: {
      sm: '420px',
      mid: '800px',
    },
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        ...customIconCollection,
      },
    }),
  ],
}

```
用法
// index.scss
:root,
:root[data-theme='light'] {
  --bolt-elements-borderColor: #{$light-components-Button-defaultBorderColor};
  --bolt-elements-borderColorActive: theme('colors.accent.600');
  // theme 就是tailwind变量

```
:root,
:root[data-theme='light'] {
  --bolt-elements-borderColor: #{$light-components-Button-defaultBorderColor};
  --bolt-elements-borderColorActive: theme('colors.accent.600');
  // theme 就是tailwind变量
```
classname也能用 colors.accent.600


字体加载
放项目入口里

```
const fonts = `
@font-face {
  font-family: 'Alibaba PuHuiTi 3.0';
  font-weight: 700;
  src: url('https://xxcdn/code/npm/@xx/xx/1.4.0/AlibabaPuHuiTi-3-85-Bold.woff2')
    format('woff2');
  font-display: swap;
}

@font-face {
  font-family: AlibabaPuHuiTi-3-85-Bold;
  font-weight: 700;
  src: url('https://xxcdn/code/npm/@xx/xx/1.4.0/AlibabaPuHuiTi-3-85-Bold.woff2')
    format('woff2');
  font-display: swap;
}

@font-face {
  font-family: AlibabaPuHuiTi-3-55-Regular;
  src: url('https://xxcdn/code/npm/@xx/xx/1.4.0/AlibabaPuHuiTi-3-55-Regular.woff2')
    format('woff2');
  font-display: swap;
}

@font-face {
  font-family: SmileySans-Oblique;
  src: url('https://xxcdn/code/npm/@xx/xx/1.4.0/SmileySans-Oblique.ttf.woff2')
    format('woff2');
  font-display: swap;
}
`;

export function loadCustomFonts() {
  const style = document.createElement('style');
  style.innerHTML = fonts;
  document.head.appendChild(style);
}

```