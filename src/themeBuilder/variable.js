export default {
// -------- Colors -----------
  'primary-color': {
    default: '#108ee9',
    type: ''
  },
  'info-color': {
    default: '#108ee9',
    type: ''
  },
  'success-color': {
    default: '#00a854',
    type: ''
  },
  'error-color': {
    default: '#f04134',
    type: ''
  },
  'highlight-color': {
    default: '#f04134',
    type: ''
  },
  'warning-color': {
    default: '#ffbf00',
    type: ''
  },
  'normal-color': {
    default: '#d9d9d9',
    type: ''
  },

// Base Scaffolding Variables
// ---

// Background color for `<body>`
  'body-background': {
    default: '#fff',
    type: ''
  },
// Base background color for most components
  'component-background': {
    default: '#fff',
    type: ''
  },
  'font-family': {
    default: '"Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif',
    type: ''
  },
  'code-family': {
    default: 'Consolas, Menlo, Courier, monospace',
    type: ''
  },
  'heading-color': {
    default: 'fade(#000, 85%)',
    type: ''
  },
  'text-color': {
    default: 'fade(#000, 65%)',
    type: ''
  },
  'text-color-secondary': {
    default: 'fade(#000, 43%)',
    type: ''
  },
  'heading-color-dark': {
    default: 'fade(#fff, 97%)',
    type: ''
  },
  'text-color-dark': {
    default: 'fade(#fff, 91%)',
    type: ''
  },
  'text-color-secondary-dark': {
    default: 'fade(#fff, 67%)',
    type: ''
  },
  'font-size-base': {
    default: '12px',
    type: ''
  },
  'font-size-lg': {
    default: '@font-size-base + 2px',
    type: ''
  },
  'line-height-base': {
    default: '1.5',
    type: ''
  },
  'border-radius-base': {
    default: '4px',
    type: ''
  },
  'border-radius-sm': {
    default: '2px',
    type: ''
  },

// Border color
  'border-color-base': {
    default: '#d9d9d9',
    type: ''
  },        // base border outline a component
  'border-color-split': {
    default: '#e9e9e9',
    type: ''
  },        // split border inside a component
  'border-width-base': {
    default: '1px',
    type: ''
  },            // width of the border for a component
  'border-style-base': {
    default: 'solid',
    type: ''
  },          // style of a components border

// Outline
  'outline-blur-size': {
    default: '0',
    type: ''
  },
  'outline-width': {
    default: '2px',
    type: ''
  },

// Default background color for disabled states, Collapse wrappers,
// and several active and hover states.
  'background-color-base': {
    default: '#f7f7f7',
    type: ''
  },
  'background-color-active': {
    default: '#eee',
    type: ''
  },

// Disabled states
  'disabled-color': {
    default: 'fade(#000, 25%)',
    type: ''
  },
  'disabled-bg': {
    default: '@background-color-base',
    type: ''
  },
  'disabled-color-dark': {
    default: 'fade(#fff, 35%)',
    type: ''
  },

// Shadow
  'shadow-color': {
    default: 'rgba(0, 0, 0, .2)',
    type: ''
  },

// Buttons
  'btn-font-weight': {
    default: '500',
    type: ''
  },

  'btn-primary-color': {
    default: '#fff',
    type: ''
  },

  'btn-default-bg': {
    default: '#fff',
    type: ''
  },


  'btn-padding-base': {
    default: '0 15px',
    type: ''
  },
  'btn-padding-sm': {
    default: '0 7px',
    type: ''
  },

  'btn-height-base': {
    default: '28px',
    type: ''
  },
  'btn-height-lg': {
    default: '32px',
    type: ''
  },
  'btn-height-sm': {
    default: '22px',
    type: ''
  },

// Media queries breakpoints
// Extra small screen / phone
  'screen-xs': {
    default: '480px',
    type: ''
  },

// Small screen / tablet
  'screen-sm': {
    default: '768px',
    type: ''
  },

// Medium screen / desktop
  'screen-md': {
    default: '992px',
    type: ''
  },

// Large screen / wide desktop
  'screen-lg': {
    default: '1200px',
    type: ''
  },

// Extra Large screen / full hd
  'screen-xl': {
    default: '1600px',
    type: ''
  },

// Grid system
  'grid-columns': {
    default: '24',
    type: ''
  },
  'grid-gutter-width': {
    default: '0',
    type: ''
  },

// Layout
  'layout-body-background': {
    default: '#ececec',
    type: ''
  },
  'layout-header-background': {
    default: '#404040',
    type: ''
  },
  'layout-header-height': {
    default: '64px',
    type: ''
  },
  'layout-header-padding': {
    default: '0 50px',
    type: ''
  },
  'layout-footer-padding': {
    default: '24px 50px',
    type: ''
  },
  'layout-sider-background': {
    default: '@layout-header-background',
    type: ''
  },
  'layout-trigger-height': {
    default: '48px',
    type: ''
  },
  'layout-zero-trigger-width': {
    default: '36px',
    type: ''
  },
  'layout-zero-trigger-height': {
    default: '42px',
    type: ''
  },

// z-index list
  'zindex-affix': {
    default: '10',
    type: ''
  },
  'zindex-back-top': {
    default: '10',
    type: ''
  },
  'zindex-modal-mask': {
    default: '1000',
    type: ''
  },
  'zindex-modal': {
    default: '1000',
    type: ''
  },
  'zindex-notification': {
    default: '1010',
    type: ''
  },
  'zindex-message': {
    default: '1010',
    type: ''
  },
  'zindex-popover': {
    default: '1030',
    type: ''
  },
  'zindex-picker': {
    default: '1050',
    type: ''
  },
  'zindex-dropdown': {
    default: '1050',
    type: ''
  },
  'zindex-tooltip': {
    default: '1060',
    type: ''
  },

// Animation
  'animation-duration-slow': {
    default: '.3s',
    type: ''
  }, // Modal
  'animation-duration-base': {
    default: '.2s',
    type: ''
  },
  'animation-duration-fast': {
    default: '.1s',
    type: ''
  }, // Tooltip

// Form
// ---
  'label-required-color': {
    default: '@highlight-color',
    type: ''
  },
  'label-color': {
    default: '@heading-color',
    type: ''
  },
  'form-item-margin-bottom': {
    default: '24px',
    type: ''
  },
  'form-item-trailing-colon': {
    default: 'true',
    type: ''
  },

// Input
// ---
  'input-height-base': {
    default: '28px',
    type: ''
  },
  'input-height-lg': {
    default: '32px',
    type: ''
  },
  'input-height-sm': {
    default: '22px',
    type: ''
  },
  'input-padding-horizontal': {
    default: '7px',
    type: ''
  },
  'input-padding-vertical-base': {
    default: '4px',
    type: ''
  },
  'input-padding-vertical-sm': {
    default: '1px',
    type: ''
  },
  'input-padding-vertical-lg': {
    default: '6px',
    type: ''
  },
  'input-bg': {
    default: '#fff',
    type: ''
  },
  'input-addon-bg': {
    default: '#eee',
    type: ''
  },

// Tooltip
// ---
//* Tooltip max width
  'tooltip-max-width': {
    default: '250px',
    type: ''
  },
//** Tooltip text color
  'tooltip-color': {
    default: '#fff',
    type: ''
  },
//** Tooltip background color
  'tooltip-bg': {
    default: 'rgba(64, 64, 64, .85)',
    type: ''
  },
//** Tooltip arrow width
  'tooltip-arrow-width': {
    default: '5px',
    type: ''
  },
//** Tooltip distance with trigger

// Popover
// ---
//** Popover body background color
  'popover-bg': {
    default: '#fff',
    type: ''
  },
//** Popover maximum width
  'popover-min-width': {
    default: '177px',
    type: ''
  },
//** Popover arrow width
  'popover-arrow-width': {
    default: '4px',
    type: ''
  },

// Modal
// --
  'modal-mask-bg': {
    default: 'rgba(55, 55, 55, 0.6)',
    type: ''
  },


// Menu
// ---
  'menu-dark-submenu-bg': {
    default: '#333',
    type: ''
  },

// Spin
// ---
  'spin-dot-size-sm': {
    default: '14px',
    type: ''
  },
  'spin-dot-size': {
    default: '20px',
    type: ''
  },
  'spin-dot-size-lg': {
    default: '32px',
    type: ''
  },

// Table
// --
  'table-selected-row-bg': {
    default: '#fafafa',
    type: ''
  },
  'table-padding-vertical': {
    default: '16px',
    type: ''
  },
  'table-padding-horizontal': {
    default: '8px',
    type: ''
  },

// Tag
// --
  'tag-default-bg': {
    default: '#f3f3f3',
    type: ''
  },

// TimePicker
// ---
  'time-picker-panel-column-width': {
    default: '56px',
    type: ''
  },

// Carousel
// ---
  'carousel-dot-width': {
    default: '16px',
    type: ''
  },
  'carousel-dot-height': {
    default: '3px',
    type: ''
  },
  'carousel-dot-active-width': {
    default: '24px',
    type: ''
  },

// Badge
// ---
  'badge-height': {
    default: '20px',
    type: ''
  },
  'badge-dot-size': {
    default: '8px',
    type: ''
  },

// Rate
// ---
  'rate-star-color': {
    default: '#f5a623',
    type: ''
  },
  'rate-star-bg': {
    default: '#e9e9e9',
    type: ''
  },

// Card
// ---
  'card-head-height': {
    default: '48px',
    type: ''
  },

// Tabs
// ---
  'tabs-card-head-background': {
    default: '#f9f9f9',
    type: ''
  },

// BackTop
  'back-top-color': {
    default: '#fff',
    type: ''
  },
  'back-top-bg': {
    default: 'rgba(64, 64, 64, 0.4)',
    type: ''
  },
  'back-top-hover-bg': {
    default: 'rgba(64, 64, 64, 0.6)',
    type: ''
  },

// Avatar
  'avatar-size-base': {
    default: '32px',
    type: ''
  },
  'avatar-size-lg': {
    default: '40px',
    type: ''
  },
  'avatar-size-sm': {
    default: '24px',
    type: ''
  },
  'avatar-font-size-base': {
    default: '18px',
    type: ''
  },
  'avatar-font-size-lg': {
    default: '24px',
    type: ''
  },
  'avatar-font-size-sm': {
    default: '14px',
    type: ''
  },
  'avatar-bg': {
    default: '#ccc',
    type: ''
  },
  'avatar-color': {
    default: '#fff',
    type: ''
  },
}


