$(document).ready(function() {
  'use strict'
  // Your custom JavaScript goes here

  /**
   * ScrollReveal
   */
  window.sr = ScrollReveal()
  // sr.reveal('.card', {
  //   delay: 0,
  //   origin: 'left'
  // }, 800)

  /**
   * navbar
   */
  $('.ui.navbar .search-icon > i')
    .click(function() {
      let icon = $(this)
      if (icon.text() === 'search') {
        icon.text('close').parents('.content').addClass('searching')
        $('.ui.input input')[0].focus()
      } else {
        icon.text('search').parents('.content').removeClass('searching')
        $('.ui.input input')[0].blur()
      }
    })

  $('.ui.sub.navbar')
    .visibility({
      type: 'fixed'
    })

  $('.ui.sub.navbar .menu .item')
    .click(function() {
      let id = $(this)[0].hash
      let $element = $(id)
      let position = $element.offset().top

      $('html, body')
        .animate({
          scrollTop: position
        }, 500)
    })

  /**
   * search
   */

  $.fn.api.settings.api = {
    posts: 'https://chinafilm.ferer.net/wp-json/wp/v2/posts/{/id}',
    search: 'https://chinafilm.ferer.net/wp-json/wp/v2/posts/?filter[s]={query}'
  }

  $('.ui.search').search({
    type: 'category',
    apiSettings: {
      onResponse: function(wpResponse) {
        var query = $('.ui.search').search('get value')

        var response = {
          results: {},
          action: {
            url: 'https://chinafilm.ferer.net/?s=' + query,
            text: '继续搜索 ' + query
          }
        }

        $.each(wpResponse, function(index, item) {
          var type = item.format || '其他'

          if (response.results[type] === undefined) {
            response.results[type] = {
              name: type,
              results: []
            }
          }

          response.results[type].results.push({
            title: item.title.rendered,
            // description: item.excerpt.plaintext,
            url: item.link
          })
        })

        return response
      }
    }
  })

  /**
   * sidebar
   */
  $('.ui.sidebar')
    .sidebar({
      transition: 'push'
    })
    .sidebar('setting', 'dimPage', true)
    .sidebar('attach events', '.ui.navbar .menu-icon')
    .sidebar('attach events', '.ui.sidebar .close-icon')

  $('#navigation .menu')
    .clone()
    .appendTo('.ui.sidebar')

  /**
   * hero
   */
  $('.ui.hero.carousel video.image')
    .visibility({
      once: false,
      continuous: true,
      onPassing(calculations) {
        // if (calculations.percentagePassed >= 0.3) {
        //   $(this).get(0).pause()
        // } else {
        //   $(this).get(0).play()
        // }
      }
    })

  /**
   * slick carousel
   */
  $('.ui.hero.carousel')
    .slick({
      arrows: true,
      autoplay: true,
      autoplaySpeed: 8000,
      dots: true,
      prevArrow: '<button class="ui prev bottom button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next bottom button"><i class="material-icons">chevron_right</i></button>',

      responsive: [{
        breakpoint: 767,
        settings: {
          dots: false,
          autoplay: true
        }
      }]
    })

  $('.ads-banner.carousel')
    .slick({
      arrows: false,
      cssEase: 'ease',
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      fade: true
    })

  $('.header-page.carousel')
    .slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      fade: true
    })

  /**
   * 热映影片 即将上映
   */
  $('.slick.movies .big-card-component .carousel')
    .slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      dots: false,
      autoplay: false,
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',

      responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1921,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 2561,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 2881,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7
          }
        }
      ]
    })

  /**
   * 即将上映
   */
  $('.slick .small-card-component .carousel')
    .slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      dots: false,
      autoplay: false,
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',

      responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7
          }
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7
          }
        },
        {
          breakpoint: 2560,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7
          }
        },
        {
          breakpoint: 2880,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8
          }
        }
      ]
    })

  /**
   * 片单
   */
  $('.slick-ten .small-card-component .carousel')
    .slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 300,
      dots: false,
      autoplay: false,
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',

      responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 10
          }
        },
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 10
          }
        },
        {
          breakpoint: 2560,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7
          }
        },
        {
          breakpoint: 2880,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8
          }
        }
      ]
    })

  /**
   * 原创
   */
  $('.lists.slick.originals .carousel')
    .slick({
      arrows: true,
      dots: true,
      infinite: false,
      // slidesToShow: 1,
      autoplaySpeed: 6000,
      centerMode: false,
      dots: false,
      autoplay: true,
      centerPadding: '100px',
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',

      responsive: [{
        breakpoint: 767,
        settings: {
          dots: false,
          autoplay: true,
          centerPadding: '0',
          arrows: false
        }
      }]
    })

  $('.metrics.example.carousel')
    .slick({
      arrows: false,
      cssEase: 'ease',
      autoplay: true,
      autoplaySpeed: 6000,
      dots: false,
      fade: true
    })

  if ($('.ui.hero.carousel .item.slick-active').children('video.image').get(0)) {
    $('.ui.hero.carousel .item.slick-active').children('video.image').get(0).play()
  }

  $('.ui.hero.carousel').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.ui.hero.carousel .item.slick-active').children('video.image').get(0).play()
    $('.ui.hero.carousel .item.slick-active').prev().find('video.image').get(0).pause()
  })

  $('.ui.vertical.story .ui.carousel.for')
    .slick({
      asNavFor: '.ui.vertical.story .ui.carousel.nav',
      arrows: false,
      // slidesToShow: 1,
      responsive: [{
        settings: {
          autoplay: true,
          dots: true
        }
      }]
    })

  $('.ui.vertical.story .ui.carousel.nav')
    .slick({
      asNavFor: '.ui.vertical.story .ui.carousel.for',
      // slidesToShow: 3,
      prevArrow: '<button class="ui prev button"><i class="material-icons">chevron_left</i></button>',
      nextArrow: '<button class="ui next button"><i class="material-icons">chevron_right</i></button>',
      centerMode: false,
      responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 1
        }
      }],
    })

  /**
   * bottom
   */
  enquire.register("screen and (max-width: 767px)", {
    match() {
      $('.ui.bottom')
        .addClass('accordion')
        .accordion({
          selector: {
            title: '.header',
            trigger: '.header',
            content: '.content'
          }
        })
    },
    unmatch() {
      $('.ui.bottom')
        .removeClass('accordion')
    }
  })

  $('.ui.sticky')
    .sticky()

  /**
   * Baidu Auto Push
   */
  // var bp = document.createElement('script')
  // var curProtocol = window.location.protocol.split(':')[0]
  // if (curProtocol === 'https') {
  //   bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
  // } else {
  //   bp.src = 'http://push.zhanzhang.baidu.com/push.js'
  // }
  // var s = document.getElementsByTagName("script")[0]
  // s.parentNode.insertBefore(bp, s)

})
