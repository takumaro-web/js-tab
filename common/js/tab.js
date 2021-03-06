// Generated by CoffeeScript 1.6.3
(function() {
  $(function() {
    var Tab, tab;
    Tab = (function() {
      var num;

      num = 2;

      Tab.prototype.defalut = {
        tabWrap: ".warp-tab",
        tabNav: "list-tab",
        tabID: "#tab",
        currentClass: "current",
        showAnime: true
      };

      function Tab(tabWrap, tabNav, tabID, currentClass, showAnime) {
        this.tabWrap = tabWrap;
        this.tabNav = tabNav;
        this.currentClass = currentClass;
        this.tabID = tabID;
        this.showAnime = showAnime;
        this.stanbyFunc();
        this.selectTabFunc();
      }

      Tab.prototype.stanbyFunc = function() {
        var i, _i, _ref, _results;
        this.elItem = $(this.tabNav).find("li").length;
        _results = [];
        for (i = _i = 0, _ref = this.elItem; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
          $(this.tabWrap).find(this.tabID + num).hide();
          _results.push(num++);
        }
        return _results;
      };

      Tab.prototype.selectTabFunc = function() {
        var flag,
          _this = this;
        flag = this.showAnime;
        return $(this.tabNav).find("li").find("a").click(function(e) {
          var i, idName, target, _i, _ref;
          target = $(e.currentTarget);
          $(_this.tabNav).find("li").removeClass(_this.currentClass);
          idName = target.attr("href");
          target.parent("li").addClass(_this.currentClass);
          for (i = _i = 0, _ref = _this.elItem; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
            $(_this.tabWrap).find(_this.tabID + i).hide();
          }
          if (flag === true) {
            return $(_this.tabWrap).find(idName).fadeIn(500);
          } else if (flag === false) {
            return $(_this.tabWrap).find(idName).show();
          } else {
            return alert("error");
          }
        });
      };

      return Tab;

    })();
    return tab = new Tab(".warp-tab", ".list-tab", "#tab", "current", false);
  });

  /*	
  	num = 2
  	elItem = $(".list-tab").find("li").length
  	for i in [0..elItem]
  		$(".warp-tab").find("#tab"+num).hide()
  		num++
  
  	$(".list-tab").find("li").find("a").click ->
  		$(".list-tab").find("li").removeClass("current")
  		$(@).parent("li").addClass("current")
  		idName = $(@).attr("href")
  		for i in [0..elItem]
  			$(".warp-tab").find("#tab"+i).hide()						
  		
  		#$(".warp-tab").find(idName).fadeIn(1000)
  		$(".warp-tab").find(idName).show()
  */


}).call(this);
