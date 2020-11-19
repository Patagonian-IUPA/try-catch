const Utils = (function () {
  function _getAllButtons() {
    return document.querySelectorAll('button');
  }

  function _setAllButtonsDisabeld(disabled) {
    _getAllButtons().forEach(btn => btn.disabled = disabled);
  }

  function enableAll() {
    setTimeout(() => _setAllButtonsDisabeld(false), 1000);
  }

  function disableAll() {
    _setAllButtonsDisabeld(true);
  }

  return {
    enableAll,
    disableAll,
  };
})();
