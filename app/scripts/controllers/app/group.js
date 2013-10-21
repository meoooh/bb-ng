'use strict';

angular.module('bbNgApp')
  .controller('AppGroupCtrl', function ($scope, $state, GroupService) {
    $scope.group = GroupService.get({ id:$state.params.group_id });

    // 그룹 정보 편집
    $scope.editGroupForm = {};
    $scope.showEditGroup = function(group) {
      $scope.editGroupForm = angular.copy($scope.group);
      $('.edit.group.modal')
        .modal('setting', 'selector', {
          close : '.close, .actions .cancel.button'
        })
        .modal('setting', 'transition', 'fade up')
        .modal('show');
    }

    $scope.editGroup = function() {
      if($.trim($scope.group.name) == "") {
        alert("그룹명을 입력해주세요.");
      } else {
        $scope.editGroupForm.$update(function(data) {
          $scope.group = data;
          $('.edit.group.modal').modal('hideDimmer');
        });
      }
    }
  });
