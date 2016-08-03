angular.module("lifeblue").controller("homeCtrl", function($scope, $state) {


  $scope.toggleSignup = true;
  $scope.archivesCopy = angular.copy($scope.archives);


  $scope.archives = [{
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2012",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/workout1.jpg",
    link: "https://geordyn.com",
    views: "10",
    comments: "123",
    shares: "200",
    year: "2012",
    tags: ["cool", "celebrity", "happy", "design"]
  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2014",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/lifeblue1.jpg",
    link: "https://geordyn.com",
    views: "9",
    comments: "50",
    shares: "29",
    year: "2014"

  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2016",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/paint.jpg",
    link: "https://geordyn.com",
    views: "8",
    comments: "90",
    shares: "68",
    year: "2016"

  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2013",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/flowers.jpg",
    link: "https://geordyn.com",
    views: "7",
    comments: "100",
    shares: "90",
    year: "2013"

  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2012",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/dog.jpg",
    link: "https://geordyn.com",
    views: "6",
    comments: "88",
    shares: "48",
    year: "2012"

  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2014",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/lifeblue1.jpg",
    link: "https://geordyn.com",
    views: "9",
    comments: "50",
    shares: "29",
    year: "2014"

}, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2012",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/pineapple.jpg",
    link: "https://geordyn.com",
    views: "535",
    comments: "454",
    shares: "185",
    year: "2012"

  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2014",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/dog.jpg",
    link: "https://geordyn.com",
    views: "436",
    comments: "243",
    shares: "432",
    year: "2014"

  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2016",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/pineapple.jpg",
    link: "https://geordyn.com",
    views: "5",
    comments: "235",
    shares: "653",
    year: "2016"

  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2015",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/dog.jpg",
    link: "https://geordyn.com",
    views: "6",
    comments: "88",
    shares: "48",
    year: "2015"

  }, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2014",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/dog.jpg",
    link: "https://geordyn.com",
    views: "436",
    comments: "243",
    shares: "432",
    year: "2014"

}, {
    title: "The Sample Title",
    author: "Kevin Spacey",
    date: "12 July 2013",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/pineapple.jpg",
    link: "https://geordyn.com",
    views: "5",
    comments: "44",
    shares: "185",
    year: "2013"

  }];



  $scope.parseObj = function(val) {
    val.views = parseInt(val.views);
    val.comments = parseInt(val.comments);
    val.shares = parseInt(val.shares);
  }

  $scope.search = function(search) {
    $scope.searching = [];
    $scope.archivesCopy.forEach(function(article) {
      if (article.year === search.year) {
        $scope.searching.push(article);
      }
      $scope.archives = $scope.searching;
  });
  }


  //// JQUERY ////

  $(document).ready(function() {

    $('body').addClass('js');

    var $menu = $('#menu'),
      $menulink = $('.menu-link'),
      $eyebrow = $('#eyebrowNav'),
      $contact = $('.l-contact'),
      $contactLi = $('#contactLi');

      $eyebrow.hide();

    $scope.mobileMenu = function() {
      $menulink.toggleClass('active');
      $menu.toggleClass('active');
      return false;
    }


    $contact.hover( function(){
        $eyebrow.fadeIn();
    }, function(){
        // $eyebrow.fadeOut();
    })

    $eyebrow.hover( function(){
        $eyebrow.show();
    }, function(){
        $eyebrow.fadeOut();
    })



    $(function () {
        $(window).resize(function () {
            $eyebrow.fadeOut();
            $menu.removeClass('active');
        }).resize(); //call resize function
    });


  });
  // end ctrl
});
