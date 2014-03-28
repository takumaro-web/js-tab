$ ->
	class Tab
		num = 2 #初期値表示
		defalut:
			tabWrap: ".warp-tab"
			tabNav: "list-tab"
			tabID: "#tab"
			currentClass : "current"
			showAnime : true

		constructor: (tabWrap,tabNav,tabID,currentClass,showAnime) ->
			@tabWrap = tabWrap
			@tabNav = tabNav
			@currentClass = currentClass
			@tabID = tabID
			@showAnime = showAnime
			#関数呼び出し
			@stanbyFunc()
			@selectTabFunc()

		stanbyFunc:() ->
			@elItem = $(@tabNav).find("li").length
			for i in [0..@elItem]
				$(@tabWrap).find(@tabID+num).hide()
				num++

		selectTabFunc:() ->
			flag = @showAnime
			
			$(@tabNav).find("li").find("a").click (e) =>
				target = $(e.currentTarget)
				$(@tabNav).find("li").removeClass(@currentClass)
				idName = target.attr("href")
				target.parent("li").addClass(@currentClass)

				for i in [0..@elItem]
					$(@tabWrap).find(@tabID+i).hide()

				if flag is true
					 $(@tabWrap).find(idName).fadeIn(500)
				else if  flag is false
					$(@tabWrap).find(idName).show()
				else
					alert "error"
	
	tab = new Tab(".warp-tab",".list-tab","#tab","current",false)
	#tab.stanbyFunc ".list-tab"


###	
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
###