exports.version = 1.2
exports.apiRequired = 8.1
exports.repo = "Hug3O/AdminThemeCustomizer"
exports.description = "Customize Admin Panel with theme color selector"
exports.config = {
    themeColor: {
        type: 'select',
        defaultValue: 'orange',
        options: { 'Orange Theme': 'orange', 'Green Theme': 'green' },
        label: "Theme Color",
        helperText: "Select the theme color for the Admin Panel",
        frontend: false
    }
}

exports.init = api => ({
    // 後台管理界面自定義主題
    async middleware(ctx) {
        if (ctx.path.startsWith('/~/admin')) {
            return async () => {
                const themeColor = api.getConfig('themeColor') || 'orange';
                
                if (ctx.type === 'text/html' && ctx.body) {
                    // 定義橙色主題變數
                    const orangeTheme = `
                        /* 橙色主題變數 */
                        --orange-bg: rgb(8, 5, 0);
                        --orange-text: #ff9900;
                        --orange-good-contrast: #ff9900;
                        --orange-button-bg-hover: #16141198;
                        --orange-button-text: #ff9900;
                        --orange-button-bg:rgb(17, 17, 15);
                        --orange-ghost-contrast: rgba(48, 48, 48, 0.36);
                        --orange-faint-contrast: rgba(106, 106, 106, 0.6);
                        --orange-mild-contrast:rgba(255, 153, 0, 0.09);
                        --orange-comment-contrast: rgba(158, 158, 158, 0.65);
                        --orange-grid-contrast: rgb(48, 48, 48);
                        --orange-focus-color: #ff9900;
                        --orange-text-high-contrast: #ff9900;
                        --orange-success: #0b0a09ab;
                        --orange-warning: #0b0a09ab;
                        --orange-link: #ff9900;
                        --orange-deepprevew:rgb(8, 7, 4);
                        --orange-disabled: rgba(128, 128, 128, 0.3);
                        --orange-inactive: rgba(255, 153, 0, 0.3);
                        --orange-danger: rgba(128, 128, 128, 0.3);
                        --orange-danger-hover: rgba(255, 153, 0, 0.3);
                        --orange-switch-track: rgba(255, 153, 0, 0.2);
                        --orange-switch-track-checked: #ff9900;
                        --orange-switch-thumb: #ff9900;
                        --orange-switch-thumb-disabled: rgba(128, 128, 128, 0.5);
                    `;
                    
                    // 定義綠色主題變數
                    const greenTheme = `
                        /* 綠色主題變數 */
                        --green-bg: rgb(10, 12, 0);
                        --green-text: #b6ce00;
                        --green-good-contrast: #b6ce00be;
                        --green-button-bg-hover: #b9ce002b;
                        --green-button-text: #b6ce00;
                        --green-button-bg: #18191100;
                        --green-ghost-contrast: #b6ce002b;
                        --green-faint-contrast: #b6ce007b;
                        --green-mild-contrast:rgba(182, 206, 0, 0.24);
                        --green-comment-contrast: #b6ce007a;
                        --green-grid-contrast: #b6ce0055;
                        --green-focus-color: #b6ce00b8;
                        --green-text-high-contrast: #b6ce00;
                        --green-success: #0b0c09ab;
                        --green-warning: #43470bab;
                        --green-link: #b6ce00;
                        --green-deepprevew: #000000f6;
                        --green-disabled: rgba(128, 128, 128, 0.3);
                        --green-inactive: rgba(182, 206, 0, 0.3);
                        --green-danger: rgba(128, 128, 128, 0.3);
                        --green-danger-hover: rgba(182, 206, 0, 0.3);
                        --green-switch-track: rgba(182, 206, 0, 0.2);
                        --green-switch-track-checked: #b6ce00;
                        --green-switch-thumb: #b6ce00;
                        --green-switch-thumb-disabled: rgba(128, 128, 128, 0.5);
                    `;
                    
                    const customThemeCSS = `
                    <style>
                        :root {
                            ${orangeTheme}
                            ${greenTheme}
                        }
                        
                        /* 根據選擇的主題應用顏色 */
                        body.theme-orange {
                            --active-bg: var(--orange-bg);
                            --active-text: var(--orange-text);
                            --active-good-contrast: var(--orange-good-contrast);
                            --active-button-bg-hover: var(--orange-button-bg-hover);
                            --active-button-text: var(--orange-button-text);
                            --active-button-bg: var(--orange-button-bg);
                            --active-ghost-contrast: var(--orange-ghost-contrast);
                            --active-faint-contrast: var(--orange-faint-contrast);
                            --active-mild-contrast: var(--orange-mild-contrast);
                            --active-comment-contrast: var(--orange-comment-contrast);
                            --active-grid-contrast: var(--orange-grid-contrast);
                            --active-focus-color: var(--orange-focus-color);
                            --active-text-high-contrast: var(--orange-text-high-contrast);
                            --active-success: var(--orange-success);
                            --active-warning: var(--orange-warning);
                            --active-link: var(--orange-link);
                            --active-deepprevew: var(--orange-deepprevew);
                            --active-disabled: var(--orange-disabled);
                            --active-inactive: var(--orange-inactive);
                            --active-danger: var(--orange-danger);
                            --active-danger-hover: var(--orange-danger-hover);
                            --active-switch-track: var(--orange-switch-track);
                            --active-switch-track-checked: var(--orange-switch-track-checked);
                            --active-switch-thumb: var(--orange-switch-thumb);
                            --active-switch-thumb-disabled: var(--orange-switch-thumb-disabled);
                        }
                        
                        body.theme-green {
                            --active-bg: var(--green-bg);
                            --active-text: var(--green-text);
                            --active-good-contrast: var(--green-good-contrast);
                            --active-button-bg-hover: var(--green-button-bg-hover);
                            --active-button-text: var(--green-button-text);
                            --active-button-bg: var(--green-button-bg);
                            --active-ghost-contrast: var(--green-ghost-contrast);
                            --active-faint-contrast: var(--green-faint-contrast);
                            --active-mild-contrast: var(--green-mild-contrast);
                            --active-comment-contrast: var(--green-comment-contrast);
                            --active-grid-contrast: var(--green-grid-contrast);
                            --active-focus-color: var(--green-focus-color);
                            --active-text-high-contrast: var(--green-text-high-contrast);
                            --active-success: var(--green-success);
                            --active-warning: var(--green-warning);
                            --active-link: var(--green-link);
                            --active-deepprevew: var(--green-deepprevew);
                            --active-disabled: var(--green-disabled);
                            --active-inactive: var(--green-inactive);
                            --active-danger: var(--green-danger);
                            --active-danger-hover: var(--green-danger-hover);
                            --active-switch-track: var(--green-switch-track);
                            --active-switch-track-checked: var(--green-switch-track-checked);
                            --active-switch-thumb: var(--green-switch-thumb);
                            --active-switch-thumb-disabled: var(--green-switch-thumb-disabled);
                        }
                        
                        /* ===== 整體背景和文字 ===== */
                        body.theme-${themeColor} {
                            background: var(--active-bg) !important;
                            color: var(--active-text) !important;
                        }
            
                        body.theme-${themeColor} * {
                            background-color: transparent !important;
                            color: inherit !important;
                            border-color: var(--active-grid-contrast) !important;
                        }
                        

                        /* ===== 窄屏界面 System integration 按鈕完全隱藏 ===== */
                        @media (max-width: 600px) {
                            /* 針對所有可能的 ID 變化 */
                            button[id^=":r"][id$="c:"]:has(img[alt="Windows icon"]),
                            button:has(img[alt="Windows icon"]),
                            button:has(img[title="Windows"]),
                            button.MuiButton-root:has(span:has(img[alt="Windows icon"])) span:contains("System integration"),
                            button.MuiButton-root:has(img[alt="Windows icon"]) {
                                display: none !important;
                                visibility: hidden !important;
                                opacity: 0 !important;
                                width: 0 !important;
                                height: 0 !important;
                                padding: 0 !important;
                                margin: 0 !important;
                                border: none !important;
                                overflow: hidden !important;
                                position: absolute !important;
                                pointer-events: none !important;
                            }
                            
                            /* 更通用的選擇器 - 匹配任何包含 Windows 圖標的按鈕 */
                            button img[alt="Windows icon"],
                            button img[title="Windows"] {
                                display: none !important;
                            }
                            
                            /* 針對特定的 System integration 文字 */
                            button.MuiButton-root:has(span:contains("System integration")) {
                                display: none !important;
                            }
                            
                            /* 備用方案 - 隱藏所有可能包含 System integration 的按鈕 */
                            button.MuiButton-root .MuiButton-startIcon + span {
                                display: none !important;
                            }
                            
                            /* 強制隱藏 */
                            button[id=":r1c:"],
                            button[id=":r1u:"],
                            button[id*=":r"][id*="c:"] {
                                display: none !important;
                            }
                        }
                        

                        /* ===== 開關按鈕修復 ===== */
                        /* 開關軌道 - 未啟用狀態 */
                        body.theme-${themeColor} .MuiSwitch-track {
                            background-color: var(--active-switch-track) !important;
                            opacity: 0.8 !important;
                            border: 1px solid var(--active-grid-contrast) !important;
                        }
                        
                        /* 開關軌道 - 啟用狀態 */
                        body.theme-${themeColor} .Mui-checked + .MuiSwitch-track {
                            background-color: var(--active-switch-track-checked) !important;
                            opacity: 0.9 !important;
                            border-color: var(--active-text) !important;
                        }
                        
                        /* 開關圓鈕 - 未啟用狀態 */
                        body.theme-${themeColor} .MuiSwitch-thumb {
                            background-color: var(--active-faint-contrast) !important;
                        }
                        
                        /* 開關圓鈕 - 啟用狀態 */
                        body.theme-${themeColor} .Mui-checked .MuiSwitch-thumb {
                            background-color: var(--active-switch-thumb) !important;
                        }
                        
                        /* 開關圓鈕 - 禁用狀態 */
                        body.theme-${themeColor} .MuiSwitch-switchBase.Mui-disabled .MuiSwitch-thumb {
                            background-color: var(--active-switch-thumb-disabled) !important;
                            opacity: 0.5 !important;
                        }
                        
                        /* 標籤文字 */
                        body.theme-${themeColor} .MuiFormControlLabel-label {
                            color: var(--active-text) !important;
                        }
                        
                        /* ===== 頂部導航欄 ===== */
                        body.theme-${themeColor} header, 
                        body.theme-${themeColor} .MuiAppBar-root, 
                        body.theme-${themeColor} .MuiToolbar-root {
                            background: var(--active-deepprevew) !important;
                            border-bottom: 1px solid var(--active-grid-contrast) !important;
                        }
                        
                        /* ===== 按鈕樣式 ===== */
                        body.theme-${themeColor} button, 
                        body.theme-${themeColor} .MuiButton-root, 
                        body.theme-${themeColor} .MuiButton-contained, 
                        body.theme-${themeColor} .MuiButton-outlined,
                        body.theme-${themeColor} .MuiIconButton-root {
                            background: var(--active-button-bg) !important;
                            color: var(--active-button-text) !important;
                            /*border: 1px solid var(--active-mild-contrast) !important;*/
                            border-radius: 6px !important;
                        }
                        
                        body.theme-${themeColor} button:hover, 
                        body.theme-${themeColor} .MuiButton-root:hover,
                        body.theme-${themeColor} .MuiIconButton-root:hover {
                            background: var(--active-button-bg-hover) !important;
                            border-color: var(--active-text) !important;
                        }
                        
                        /* ===== 垃圾桶圖標 (刪除操作) ===== */
                        body.theme-${themeColor} svg[data-testid="DeleteIcon"],
                        body.theme-${themeColor} svg[data-testid="DeleteOutlineIcon"],
                        body.theme-${themeColor} svg[data-testid="DeleteForeverIcon"],
                        body.theme-${themeColor} button svg[data-testid="DeleteIcon"],
                        body.theme-${themeColor} button svg[data-testid="DeleteOutlineIcon"],
                        body.theme-${themeColor} button svg[data-testid="DeleteForeverIcon"] {
                            color: var(--active-danger) !important;
                            fill: var(--active-danger) !important;
                            opacity: 0.9 !important;
                        }
                        
                        body.theme-${themeColor} button:hover svg[data-testid="DeleteIcon"],
                        body.theme-${themeColor} button:hover svg[data-testid="DeleteOutlineIcon"],
                        body.theme-${themeColor} button:hover svg[data-testid="DeleteForeverIcon"] {
                            color: var(--active-danger-hover) !important;
                            fill: var(--active-danger-hover) !important;
                        }
                        
                        /* 垃圾桶圖標的禁用狀態 */
                        body.theme-${themeColor} button.Mui-disabled svg[data-testid="DeleteIcon"],
                        body.theme-${themeColor} button.Mui-disabled svg[data-testid="DeleteOutlineIcon"],
                        body.theme-${themeColor} button.Mui-disabled svg[data-testid="DeleteForeverIcon"] {
                            color: var(--active-disabled) !important;
                            fill: var(--active-disabled) !important;
                            opacity: 0.4 !important;
                        }
                        
                        /* ===== 代碼編輯器文字顏色修復 ===== */
                        body.theme-${themeColor} .npm__react-simple-code-editor__textarea,
                        body.theme-${themeColor} textarea[class*="code-editor"],
                        body.theme-${themeColor} textarea[class*="CodeEditor"],
                        body.theme-${themeColor} .code-editor textarea,
                        body.theme-${themeColor} div[role="textbox"][contenteditable="true"] {
                            -webkit-text-fill-color: var(--active-text) !important;
                        }
                        
                        /* ===== 按鈕狀態樣式 ===== */
                        
                        /* 1. 不可用按鈕 (disabled) */
                        body.theme-${themeColor} button.Mui-disabled,
                        body.theme-${themeColor} .MuiButton-root.Mui-disabled,
                        body.theme-${themeColor} .MuiIconButton-root.Mui-disabled,
                        body.theme-${themeColor} [aria-disabled="true"] button,
                        body.theme-${themeColor} [aria-disabled="true"] .MuiButton-root,
                        body.theme-${themeColor} [aria-disabled="true"] .MuiIconButton-root {
                            opacity: 0.4 !important;
                            background: var(--active-disabled) !important;
                            color: var(--active-faint-contrast) !important;
                            border-color: var(--active-disabled) !important;
                            cursor: not-allowed !important;
                            pointer-events: none !important;
                        }
                        
                        body.theme-${themeColor} button.Mui-disabled svg,
                        body.theme-${themeColor} .MuiButton-root.Mui-disabled svg,
                        body.theme-${themeColor} .MuiIconButton-root.Mui-disabled svg,
                        body.theme-${themeColor} [aria-disabled="true"] svg {
                            color: var(--active-faint-contrast) !important;
                            fill: var(--active-faint-contrast) !important;
                            opacity: 0.4 !important;
                        }
                        
                        /* 2. 沒有啟用的按鈕 (PlayCircleIcon - 停止狀態) */
                        body.theme-${themeColor} svg[data-testid="PlayCircleIcon"],
                        body.theme-${themeColor} button:not(.Mui-disabled) svg[data-testid="PlayCircleIcon"] {
                            color: var(--active-inactive) !important;
                            fill: var(--active-inactive) !important;
                            opacity: 0.6 !important;
                        }
                        
                        /* 3. 啟用中的按鈕 (StopCircleIcon - 運行狀態) */
                        body.theme-${themeColor} svg[data-testid="StopCircleIcon"],
                        body.theme-${themeColor} button:not(.Mui-disabled) svg[data-testid="StopCircleIcon"] {
                            color: var(--active-text) !important;
                            fill: var(--active-text) !important;
                            opacity: 1 !important;
                        }
                        
                        /* 4. 設置按鈕 (SettingsIcon - 正常狀態) */
                        body.theme-${themeColor} svg[data-testid="SettingsIcon"],
                        body.theme-${themeColor} button:not(.Mui-disabled) svg[data-testid="SettingsIcon"] {
                            color: var(--active-text) !important;
                            fill: var(--active-text) !important;
                            opacity: 0.8 !important;
                        }
                        
                        /* 5. 設置按鈕的禁用狀態 */
                        body.theme-${themeColor} .Mui-disabled svg[data-testid="SettingsIcon"],
                        body.theme-${themeColor} [aria-disabled="true"] svg[data-testid="SettingsIcon"] {
                            color: var(--active-faint-contrast) !important;
                            fill: var(--active-faint-contrast) !important;
                            opacity: 0.3 !important;
                        }
                        
                        /* 6. 包含設置按鈕的禁用容器 */
                        body.theme-${themeColor} span[role="button"][aria-disabled="true"] {
                            cursor: not-allowed !important;
                        }
                        
                        /* ===== 主要按鈕 ===== */
                        body.theme-${themeColor} .MuiButton-containedPrimary, 
                        body.theme-${themeColor} .MuiButton-containedSecondary {
                            background: var(--active-mild-contrast) !important;
                            border: 1px solid var(--active-good-contrast) !important;
                        }
                        
                        /* ===== 輸入框 ===== */
                        body.theme-${themeColor} input, 
                        body.theme-${themeColor} textarea, 
                        body.theme-${themeColor} .MuiInputBase-root, 
                        body.theme-${themeColor} .MuiOutlinedInput-root, 
                        body.theme-${themeColor} .MuiFilledInput-root {
                            background: var(--active-deepprevew) !important;
                            color: var(--active-text) !important;
                            /*border: 1px solid var(--active-mild-contrast) !important;*/
                            border-radius: 6px !important;
                        }
                        
                        body.theme-${themeColor} .MuiInputBase-input, 
                        body.theme-${themeColor} .MuiOutlinedInput-input, 
                        body.theme-${themeColor} .MuiFilledInput-input {
                            color: var(--active-text) !important;
                        }
                        
                        body.theme-${themeColor} .MuiInputLabel-root, 
                        body.theme-${themeColor} .MuiFormLabel-root {
                            color: var(--active-faint-contrast) !important;
                        }
                        
                        body.theme-${themeColor} .MuiInput-underline:before,
                        body.theme-${themeColor} .MuiInput-underline:after,
                        body.theme-${themeColor} .MuiFilledInput-underline:before,
                        body.theme-${themeColor} .MuiFilledInput-underline:after,
                        body.theme-${themeColor} .MuiOutlinedInput-notchedOutline {
                            border-color: var(--active-mild-contrast) !important;
                        }
                        
                        /* 輸入框焦點狀態 */
                        body.theme-${themeColor} .Mui-focused .MuiOutlinedInput-notchedOutline {
                            border-color: var(--active-focus-color) !important;
                        }
                        
                        body.theme-${themeColor} .MuiInput-underline:after,
                        body.theme-${themeColor} .MuiFilledInput-underline:after {
                            border-bottom-color: var(--active-focus-color) !important;
                        }
                        
                        /* ===== 表格 ===== */
                        body.theme-${themeColor} table, 
                        body.theme-${themeColor} .MuiTable-root {
                            background: var(--active-deepprevew) !important;
                        }
                        
                        body.theme-${themeColor} .MuiTableHead-root, 
                        body.theme-${themeColor} thead {
                            background: var(--active-bg) !important;
                        }
                        
                        body.theme-${themeColor} .MuiTableRow-root, 
                        body.theme-${themeColor} tr {
                            border-bottom: 1px solid var(--active-grid-contrast) !important;
                        }
                        
                        body.theme-${themeColor} .MuiTableCell-root, 
                        body.theme-${themeColor} th, 
                        body.theme-${themeColor} td {
                            color: var(--active-text) !important;
                            border-bottom: 1px solid var(--active-grid-contrast) !important;
                        }
                        
                        body.theme-${themeColor} .MuiTableSortLabel-root {
                            color: var(--active-text) !important;
                        }
                        
                        body.theme-${themeColor} .MuiTableSortLabel-root:hover {
                            color: var(--active-text) !important;
                        }
                        
                        /* ===== 左側菜單 ===== */
                        body.theme-${themeColor} .sidebar, 
                        body.theme-${themeColor} .MuiDrawer-paper, 
                        body.theme-${themeColor} .MuiDrawer-root {
                            background: var(--active-deepprevew) !important;
                        }
                        
                        body.theme-${themeColor} .MuiListItem-root, 
                        body.theme-${themeColor} .MuiMenuItem-root {
                            color: var(--active-text) !important;
                        }
                        
                        body.theme-${themeColor} .MuiListItem-root:hover, 
                        body.theme-${themeColor} .MuiMenuItem-root:hover {
                            background: var(--active-button-bg-hover) !important;
                        }
                        
                        body.theme-${themeColor} .Mui-selected, 
                        body.theme-${themeColor} .MuiListItem-root.Mui-selected {
                            background: var(--active-mild-contrast) !important;
                        }
                        
                        /* ===== 滾動條 ===== */
                        body.theme-${themeColor} ::-webkit-scrollbar-track {
                            background: var(--active-deepprevew) !important;
                        }
                        
                        body.theme-${themeColor} ::-webkit-scrollbar-thumb {
                            background: var(--active-text) !important;
                            border-radius: 4px !important;
                        }
                        
                        body.theme-${themeColor} ::-webkit-scrollbar-thumb:hover {
                            background: var(--active-good-contrast) !important;
                        }
                        
                        /* ===== 卡片面板 ===== */
                        body.theme-${themeColor} .MuiPaper-root, 
                        body.theme-${themeColor} .MuiCard-root, 
                        body.theme-${themeColor} .MuiCardContent-root {
                            background: var(--active-deepprevew) !important;
                            border: 1px solid var(--active-faint-contrast) !important;
                            border-radius: 6px !important;
                            color: var(--active-text) !important;
                        }
                        
                        .css-1mx8kby {
                        border: 1px solid var(--active-faint-contrast) !important;
                        }

                        /* ===== 提示框 ===== */
                        body.theme-${themeColor} .MuiTooltip-tooltip, 
                        body.theme-${themeColor} .MuiPopover-paper {
                            background: var(--active-deepprevew) !important;
                            color: var(--active-text) !important;
                            border: 1px solid var(--active-text) !important;
                        }
                        
                        /* ===== 對話框 ===== */
                        body.theme-${themeColor} .MuiDialog-paper, 
                        body.theme-${themeColor} .MuiDialogContent-root, 
                        body.theme-${themeColor} .MuiDialogTitle-root {
                            background: var(--active-deepprevew) !important;
                            color: var(--active-text) !important;
                        }
                        
                        body.theme-${themeColor} .MuiDialogTitle-root {
                            border-bottom: 1px solid var(--active-grid-contrast) !important;
                        }
                        
                        body.theme-${themeColor} .MuiDialogActions-root {
                            border-top: 1px solid var(--active-grid-contrast) !important;
                        }
                        


                        /* ===== 鏈接 ===== */
                        body.theme-${themeColor} a, 
                        body.theme-${themeColor} .MuiLink-root, 
                        body.theme-${themeColor} .MuiTypography-root a {
                            color: var(--active-link) !important;
                            text-decoration: none !important;
                        }
                        
                        body.theme-${themeColor} a:hover, 
                        body.theme-${themeColor} .MuiLink-root:hover {
                            color: var(--active-text) !important;
                            text-decoration: underline !important;
                        }
                        
                        /* ===== 圖標 ===== */
                        body.theme-${themeColor} .MuiSvgIcon-root, 
                        body.theme-${themeColor} .MuiIcon-root {
                            color: var(--active-text) !important;
                            fill: var(--active-text) !important;
                        }
                        
                        /* ===== 選擇框 ===== */
                        body.theme-${themeColor} .MuiSelect-root, 
                        body.theme-${themeColor} .MuiSelect-icon {
                            color: var(--active-text) !important;
                        }
                        
                        /* ===== 複選框和單選按鈕 ===== */
                        body.theme-${themeColor} .MuiCheckbox-root, 
                        body.theme-${themeColor} .MuiRadio-root {
                            color: var(--active-faint-contrast) !important;
                        }
                        
                        body.theme-${themeColor} .Mui-checked, 
                        body.theme-${themeColor} .MuiCheckbox-root.Mui-checked {
                            color: var(--active-text) !important;
                        }
                        
                        /* ===== 開關 ===== */
                        /* 這部分已在上方詳細定義 */
                        
                        /* ===== 標籤頁 ===== */
                        body.theme-${themeColor} .MuiTabs-root {
                            border-bottom: 1px solid var(--active-grid-contrast) !important;
                        }
                        
                        body.theme-${themeColor} .MuiTab-root {
                            color: var(--active-faint-contrast) !important;
                        }
                        
                        body.theme-${themeColor} .MuiTab-root.Mui-selected {
                            color: var(--active-text) !important;
                        }
                        
                        body.theme-${themeColor} .MuiTabs-indicator {
                            background-color: var(--active-text) !important;
                        }
                        
                        /* ===== 進度條 ===== */
                        body.theme-${themeColor} .MuiLinearProgress-root, 
                        body.theme-${themeColor} .MuiCircularProgress-root {
                            color: var(--active-text) !important;
                        }
                        
                        body.theme-${themeColor} .MuiLinearProgress-bar, 
                        body.theme-${themeColor} .MuiCircularProgress-circle {
                            background-color: var(--active-text) !important;
                        }
                        
                        /* ===== 警告提示 ===== */
                        body.theme-${themeColor} .MuiAlert-root {
                            background: var(--active-deepprevew) !important;
                            color: var(--active-text) !important;
                            border: 1px solid var(--active-text) !important;
                        }
                        
                        body.theme-${themeColor} .MuiAlert-icon {
                            color: var(--active-text) !important;
                        }
                        
                        /* ===== 徽章 ===== */
                        body.theme-${themeColor} .MuiBadge-badge {
                            background: var(--active-text) !important;
                            color: var(--active-deepprevew) !important;
                        }
                        
                        /* ===== 分隔線 ===== */
                        body.theme-${themeColor} hr, 
                        body.theme-${themeColor} .MuiDivider-root {
                            background: var(--active-grid-contrast) !important;
                        }
                        
                        /* ===== 選單 ===== */
                        body.theme-${themeColor} .MuiMenu-paper, 
                        body.theme-${themeColor} .MuiMenu-list {
                            background: var(--active-deepprevew) !important;
                        }
                        
                        /* ===== 佔位文字 ===== */
                        body.theme-${themeColor} ::placeholder, 
                        body.theme-${themeColor} .MuiInputBase-input::placeholder {
                            color: var(--active-comment-contrast) !important;
                            opacity: 1 !important;
                        }
                        
                        /* ===== 選中文字 ===== */
                        body.theme-${themeColor} ::selection {
                            background-color: var(--active-text) !important;
                            color: var(--active-deepprevew) !important;
                        }
                        
                        /* ===== 所有文字元素 ===== */
                        body.theme-${themeColor} h1, 
                        body.theme-${themeColor} h2, 
                        body.theme-${themeColor} h3, 
                        body.theme-${themeColor} h4, 
                        body.theme-${themeColor} h5, 
                        body.theme-${themeColor} h6, 
                        body.theme-${themeColor} p, 
                        body.theme-${themeColor} span, 
                        body.theme-${themeColor} div, 
                        body.theme-${themeColor} label, 
                        body.theme-${themeColor} .MuiTypography-root {
                            color: var(--active-text) !important;
                        }
                        
                        /* ===== 次要文字 ===== */
                        body.theme-${themeColor} .MuiTypography-caption, 
                        body.theme-${themeColor} .MuiTypography-body2, 
                        body.theme-${themeColor} .text-secondary, 
                        body.theme-${themeColor} .MuiFormHelperText-root {
                            color: var(--active-faint-contrast) !important;
                        }
                        
                        /* ===== 邊框顏色 ===== */
                        body.theme-${themeColor} * {
                            border-color: var(--active-grid-contrast) !important;
                        }
                        
                        /* ===== 修改您指定的特定類別 ===== */
                        body.theme-${themeColor} .css-15xk0ok {
                            background-color: var(--active-good-contrast) !important;
                            color: var(--active-deepprevew) !important;
                        }
                        
                        /* ===== 表格排序圖標 ===== */
                        body.theme-${themeColor} .MuiTableSortLabel-icon {
                            color: var(--active-text) !important;
                        }
                        
                        /* ===== 日期選擇器 ===== */
                        body.theme-${themeColor} .MuiPickersDay-root {
                            color: var(--active-text) !important;
                        }
                        
                        body.theme-${themeColor} .MuiPickersDay-root.Mui-selected {
                            background: var(--active-text) !important;
                            color: var(--active-deepprevew) !important;
                        }
                        
                        body.theme-${themeColor} .MuiCalendarPicker-root {
                            background: var(--active-deepprevew) !important;
                        }
                        
                        /* ===== 頭像 ===== */
                        body.theme-${themeColor} .MuiAvatar-root {
                            background: var(--active-mild-contrast) !important;
                            color: var(--active-text) !important;
                        }
                        
                        /* ===== 深色背景容器 ===== */
                        body.theme-${themeColor} .MuiContainer-root, 
                        body.theme-${themeColor} .MuiBox-root, 
                        body.theme-${themeColor} .MuiGrid-root {
                            background: transparent !important;
                        }
                        
                        /* ===== 修復背景繼承問題 ===== */
                        body.theme-${themeColor} div[class*="Mui"]:not([class*="Paper"]):not([class*="Card"]):not([class*="Dialog"]) {
                            background: transparent !important;
                        }

                        body.theme-orange .css-1imevbh {
                            box-shadow: none !important;
                        }

.css-1yssiyv .MuiDataGrid-columnHeaders {
    backdrop-filter: blur(4px);
    box-shadow: none;
}

.css-zgbb4g {
    backdrop-filter: blur(4px);
    box-shadow: none;
}

.css-1ut7fhz {
    backdrop-filter: blur(4px);
    box-shadow: none;
}
svg path[d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M9.5 16.5v-9l7 4.5z"] {
                            fill:var(--active-faint-contrast) !important;
}
svg path[d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"] {
                            fill:var(--active-faint-contrast) !important;
}

                    </style>`;
                    
                    // 插入到 head 最後，確保覆蓋原有樣式
                    ctx.body = String(ctx.body).replace('</head>', `${customThemeCSS}</head>`);
                    
                    // 添加主題類別到 body
                    ctx.body = String(ctx.body).replace('<body', `<body class="theme-${themeColor}"`);
                }
            };
        }
    },

    // 前端不修改
    customHtml: () => {
        return {};
    }
})