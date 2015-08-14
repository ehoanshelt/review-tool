var app = angular.module('team-directives', []);

app.directive("teamControl",function() {
  return {
    restrict: "E",
    templateUrl: 'http://localhost:8000/app/partials/teams/team-control.html',
    controller: function() {
      this.teams = teams;
      this.need = [];
      this.trace = "";

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
