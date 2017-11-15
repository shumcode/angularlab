(function () {
  function hoverButton () {
    return {
      controller: "FormController as form",
      link: function ($scope, $element, $attrs) {
        $element.on("mouseenter", function (index) {
          $element.css("background-color", "#ff1493");
        });
        $element.on("mouseleave", function (index) {
          $element.css("background-color", "#ff69b4");
        });
      }
    };
  }
    
  
    angular
      .module("app")
      .directive("hoverButton", hoverButton);
  })();