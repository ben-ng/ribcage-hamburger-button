
var ButtonBase = require('ribcage-button')
  , HamburgerButton = ButtonBase.extend({
      className: 'ribcage-hamburger-btn'
    , afterInit: function () {
        this.label = '';
        this.icon = null;
      }
    });

module.exports = HamburgerButton;
