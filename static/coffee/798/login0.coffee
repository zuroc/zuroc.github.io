document.write "<link rel=\"stylesheet\" href=\"/static/css/_base/typed.css\"><style>/* line 2, ../../scss/798/login0.scss */\nbody {\n  background-image: -webkit-radial-gradient(rgba(0, 0, 0, 0.29804), rgba(0, 0, 0, 0.95294));\n  background-image: radial-gradient(rgba(0, 0, 0, 0.29804), rgba(0, 0, 0, 0.95294));\n  background-color: #008;\n}\n\n/* line 6, ../../scss/798/login0.scss */\n#particles-js {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n/* line 11, ../../scss/798/login0.scss */\n#_798 {\n  -webkit-user-select: none;\n          user-select: none;\n  height: 100%;\n  width: 100%;\n}\n/* line 16, ../../scss/798/login0.scss */\n#_798 .head {\n  height: 100%;\n  width: 100%;\n  color: #fff;\n  text-align: center;\n}\n/* line 22, ../../scss/798/login0.scss */\n#_798 .head .input {\n  left: 50%;\n  margin-left: -136px;\n  margin-top: 3em;\n}\n/* line 26, ../../scss/798/login0.scss */\n#_798 .head .input input {\n  width: 190px;\n  padding: 1em;\n  border: 0;\n}\n/* line 33, ../../scss/798/login0.scss */\n#_798 .head h1 {\n  font-size: 4.72em;\n}\n/* line 34, ../../scss/798/login0.scss */\n#_798 .head h2 {\n  font-size: 2.29em;\n}\n/* line 35, ../../scss/798/login0.scss */\n#_798 .head h1, #_798 .head h2 {\n  font-weight: normal;\n}\n/* line 36, ../../scss/798/login0.scss */\n#_798 .head h3, #_798 .head h2 {\n  visibility: hidden;\n}\n/* line 37, ../../scss/798/login0.scss */\n#_798 .head h1 {\n  text-shadow: 3px -3px 0px rgba(155, 155, 155, 0.5);\n}\n/* line 40, ../../scss/798/login0.scss */\n#_798 .head h2 {\n  text-shadow: 2px -2px 0px rgba(155, 155, 155, 0.5);\n}\n/* line 43, ../../scss/798/login0.scss */\n#_798 .head h1 span, #_798 .head h2 span, #_798 .head h3 span {\n  cursor: normal;\n}\n/* line 46, ../../scss/798/login0.scss */\n#_798 .head h3 {\n  opacity: .8;\n  font-size: 1.04em;\n}\n/* line 47, ../../scss/798/login0.scss */\n#_798 .head .bar {\n  margin-top: 3.6em;\n  margin-left: 10px;\n}\n/* line 50, ../../scss/798/login0.scss */\n#_798 .head .bar b {\n  font-weight: normal;\n  margin: 0 19px;\n  color: #999;\n}\n/* line 51, ../../scss/798/login0.scss */\n#_798 .head .bar a {\n  color: #fff;\n}\n/* line 52, ../../scss/798/login0.scss */\n#_798 .head .bar .primary, #_798 .head .bar .basic {\n  width: 170px;\n  height: 46px;\n  padding: 0;\n  vertical-align: top;\n  line-height: 44px;\n  position: relative;\n  z-index: 1;\n}\n/* line 61, ../../scss/798/login0.scss */\n#_798 .head .bar .ui.button.basic {\n  margin-left: 1.55em;\n}\n/* line 64, ../../scss/798/login0.scss */\n#_798 .head .bar .link:hover {\n  border-bottom: 2px solid #fff;\n  padding-bottom: 10px;\n}\n</style><div id=\"particles-js\"></div><div style=\"display:none\" id=\"_798\"><div class=\"head vc2\"><div class=\"vc1\"><div class=\"vc0\"><h1>797.SPACE</h1><h2>打造你自己的垂直社区</h2><h3><span>&nbsp;</span></h3><div class=\"bar\"><a data-wow-delay=\"1s\" href=\"javascript:$$('SSO/auth.new');void(0)\" class=\"ui primary button wow bounceInRight\">注册</a><a data-wow-delay=\"1s\" href=\"javascript:$$('SSO/auth.login');void(0)\" class=\"ui basic button wow bounceInLeft\">登录</a></div></div></div></div></div>"

require_async(
    "/lib/wow /lib/jquery.lettering /lib/jquery.textillate /lib/jquery.typed".split(" ")
    ->
        _798 = $("#_798").show()

        _798.find('h1').textillate({ in: { effect: 'bounceInDown'}})
        setTimeout(
            ->
                _798.find('h2').css('visibility','visible').textillate({ in: { effect: 'rollIn'} })
                setTimeout(
                    ->
                        h3 = _798.find("h3").css('visibility','visible')
                        h3.find("span").typed({
                            strings: ["创建独一无二的博客、论坛 和 SNS 就是如此简单"]
                            typeSpeed: 100
                        })
                    1000
                )
            1600
        )
        new WOW().init()
)
require_async(
    "/lib/particles"
    ->
        $ ->

            win = $ window
            win_size = win.height() * win.width()
            win_point_base= parseInt(win_size/22000)
            particlesJS('particles-js', {
              particles: {
                color: '#fff',
                color_random: false,
                shape: 'circle', # "circle", "edge" or "triangle"
                opacity: {
                  opacity: .3,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0,
                    sync: false
                  }
                },
                size: 2.5,
                size_random: true,
                nb: win_point_base*3,
                line_linked: {
                  enable_auto: true,
                  distance: 130,
                  color: '#fff',
                  opacity: .7,
                  width: 1,
                  condensed_mode: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 600
                  }
                },
                anim: {
                  enable: true,
                  speed: 1
                }
              },
              interactivity: {
                enable: true,
                mouse: {
                  distance: 250
                },
                detect_on: 'canvas', # "canvas" or "window"
                mode: 'grab', # "grab" of false
                line_linked: {
                  opacity: .5
                },
                events: {
                  onclick: {
                    enable: true,
                    mode: 'push', # "push" or "remove"
                    nb: 4
                  },
                  onresize: {
                    enable: true,
                    mode: 'out', # "out" or "bounce"
                    density_auto: false,
                    density_area: 800 # nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
                  }
                }
              },
              retina_detect: true
            })

)

