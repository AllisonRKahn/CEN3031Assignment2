angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    // var codeField = $('#code-field');
    // var nameField = $('#name-field');
    // var addressField = $('#address-field');
    // var latField = $('#lat-field');
    // var longField = $('#long-field');

    //var saveAs= "!!!!";
    //$scope.saveAs = saveAs;

    $scope.addListing = function() {
      // var txt;
      // var code = prompt("Please enter code:", "Code");
      // var name = prompt("Please enter name:", "Building name");
      // var latitude = prompt("Please enter latitude");
      // var longitude = prompt("Please enter longitude");
      // var address = prompt("Please enter address", "Address");


			Listings.push({'code' : $scope.code, 'name': $scope.name, 'coordinates.latitude' : $scope.latitude,
          'coordinates.longitude' : $scope.longitude, 'address' : $scope.address});
      $scope.code = ''
      $scope.name = ''
      $scope.address = ''
      $scope.longitude = ''
      $scope.latitude = ''

    };
    $scope.deleteListing = function(name) {
      var index = $scope.listings.findIndex(x => x.name === name)
      Listings.splice(index, 1);
    };
    $scope.showDetails = function(name) {
      // alert($scope.listings.indexOf("Academic Advisement - Farrior Hall"));
      var index = $scope.listings.findIndex(x => x.name === name)
      saveAs = ("Name: " + $scope.listings[index].name);
      if($scope.listings[index].address !== undefined)
      {
        maybeAdd = ("\nAddress: " + $scope.listings[index].address +
        "\nCoordinates: "  +
        "Lat: " + $scope.listings[index].coordinates.latitude +
        " Long: " + $scope.listings[index].coordinates.longitude);
        saveAs = saveAs + maybeAdd;
      }

      $scope.saveAs = saveAs;

    };

  }
]);
