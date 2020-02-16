//import angular from 'angular';

angular
  .module('plunker', [], $interpolateProvider => {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  })
  .controller('MainCtrl', function($scope) {

  function share(t) {
    var text_to_share = t;

    // create temp element
    var copyElement = document.createElement('span');
    copyElement.appendChild(document.createTextNode(text_to_share));
    copyElement.id = 'tempCopyToClipboard';
    angular.element(document.body.append(copyElement));

    // select the text
    var range = document.createRange();
    range.selectNode(copyElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // copy & cleanup
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    copyElement.remove();
  }

  $scope.move = (note, dir) => {

  };

  $scope.saveNote = () => {
    console.log('here');
    $scope.notes.push({
      title: $scope.selectedNote.title,
      body: $scope.selectedNote.body,
      order: 3
    });
    $scope.selectedNote = {};
  };

  $scope.addNote = () => {
    $scope.selectedNote = {};
  };

  $scope.copyNote = n => {
    share(n.body)
  };

  $scope.editNote = n => {
    console.log(n);
    $scope.selectedNote = n;
  };

  $scope.deleteNote = n => {
    $scope.notes.splice($scope.notes.indexOf(n), 1);
  };

  $scope.notes = [
    {
      title: 'Check-up',
      body: 'some sample text',
      order: 0
    },
    {
      title: 'Emergency',
      body: 'something about a filling.',
      order: 1
    },
  ];
});
