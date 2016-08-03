angular.module("lifeblue").controller("homeCtrl", function($scope, $state) {


  $scope.toggleSignup = true;
  $scope.archivesCopy = angular.copy($scope.archives);


  $scope.archives = [{
    title: "Let's Talk Depression",
    author: "Kevin Spacey",
    date: "12 July 2012",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/pug.jpeg",
    link: "https://geordyn.com",
    views: "10",
    comments: "123",
    shares: "200",
    year: "2012",
    tags: ["cool", "celebrity", "happy", "design"]
  }, {
    title: "This Year's Fall Trends",
    author: "Kevin Spacey",
    date: "12 July 2014",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/cornfield.jpeg",
    link: "https://geordyn.com",
    views: "9",
    comments: "50",
    shares: "29",
    year: "2014"

  }, {
    title: "End of Summer Activities",
    author: "Kevin Spacey",
    date: "12 July 2016",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/water.jpeg",
    link: "https://geordyn.com",
    views: "8",
    comments: "90",
    shares: "68",
    year: "2016"

  }, {
    title: "Get the Most Out of Tech",
    author: "Kevin Spacey",
    date: "12 July 2013",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/watch.jpeg",
    link: "https://geordyn.com",
    views: "7",
    comments: "100",
    shares: "90",
    year: "2013"

  }, {
    title: "Millenials and Business",
    author: "Kevin Spacey",
    date: "12 July 2012",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/suit.jpeg",
    link: "https://geordyn.com",
    views: "6",
    comments: "88",
    shares: "48",
    year: "2012"

  }, {
    title: "Bonfires, Beer, and Bacon",
    author: "Kevin Spacey",
    date: "12 July 2014",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/fire.jpeg",
    link: "https://geordyn.com",
    views: "9",
    comments: "50",
    shares: "29",
    year: "2014"

}, {
    title: "The Power of A Blueberry",
    author: "Kevin Spacey",
    date: "12 July 2012",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/blueberries.jpeg",
    link: "https://geordyn.com",
    views: "535",
    comments: "454",
    shares: "185",
    year: "2012"

  }, {
    title: "Upcoming Shoe Trends",
    author: "Kevin Spacey",
    date: "12 July 2014",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/shoes.jpeg",
    link: "https://geordyn.com",
    views: "436",
    comments: "243",
    shares: "432",
    year: "2014"

  }, {
    title: "Thank The Skin You're In",
    author: "Kevin Spacey",
    date: "12 July 2016",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/skin.jpeg",
    link: "https://geordyn.com",
    views: "5",
    comments: "235",
    shares: "653",
    year: "2016"

  }, {
    title: "All About Lush",
    author: "Kevin Spacey",
    date: "12 July 2015",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/lush.jpeg",
    link: "https://geordyn.com",
    views: "6",
    comments: "88",
    shares: "48",
    year: "2015"

  }, {
    title: "Travel Hot Spot: Croatia",
    author: "Kevin Spacey",
    date: "12 July 2014",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/travel.jpeg",
    link: "https://geordyn.com",
    views: "436",
    comments: "243",
    shares: "432",
    year: "2014"

}, {
    title: "Time to Move Aside, SanFran",
    author: "Kevin Spacey",
    date: "12 July 2013",
    summary: "this is the summary. this is the summary. this is the summary. this is the summary.",
    imgurl: "../../styles/imgs/ggbridge.jpeg",
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
