(function(){
var app = angular.module("teamManagement", []);

app.directive("teamControl",function() {
  return {
    restrict: "E",
    templateUrl: 'http://localhost:8000/app/partials/teams/team-control.html',
    controller: function() {
      this.teams = teams;
      this.need = [];
      this.employee = [];
      this.trace = "";

      this.addEmployee = function(team){
        team.employees.push(this.employee);
        this.employee = {};
      };
      this.addNeed = function(team){
        team.needs.push(this.need);
        this.need = {};
      };
    },
    controllerAs: "teamCtrl"
  };
});

app.directive("needs",function() {
  return {
    restrict: "E",
    templateUrl: 'http://localhost:8000/app/partials/needs/needs.html',
  };
});


app.directive("needForm",function() {
  return {
    restrict: "E",
    templateUrl: 'http://localhost:8000/app/partials/needs/need-form.html',
    controller: function() {

      this.isTracker = function(teamCtrl, team){
          return teamCtrl.trace === team.name;
      };

      this.setTracker = function(teamCtrl, team){
          teamCtrl.trace = team.name;
          teamCtrl.need = {};
      };
    },
    controllerAs: "trackCtrl"
  };
});

app.directive("employees",function() {
  return {
    restrict: "E",
    templateUrl: 'http://localhost:8000/app/partials/employees/employees.html',
  };
});

  var teams = [
    {
      name: "Aquistions",
      employees : [{
            name: "Jonathan"
      }],
      needs: [{
            need: "We need all the help we can get!",
            author: "ryan@wpengine.com"
      }]
    },
    {
      name: "Install Base",
      employees : [{
            name: "Ryan"
      }],
      needs: [{
            need: "We need to find out if we can sell support as a product",
            author: "dustin@wpengine.com"
      }]
    }
  ];

})();
