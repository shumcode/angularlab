(function () {
  function FormController () {
    var vm = this;
    vm.tasks = [];
    vm.addTask = function(index) {
      vm.tasks.push(index);
      console.log(vm.tasks);
    }
    vm.removeTask = function(index) {
      vm.tasks.splice(index, 1);
    }
  }

  angular
    .module("app")
    .controller("FormController", FormController);
})();