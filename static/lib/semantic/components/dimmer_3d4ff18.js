!function(e,i,n,t){"use strict";e.fn.dimmer=function(i){var o,a=e(this),r=(new Date).getTime(),m=[],s=arguments[0],d="string"==typeof s,c=[].slice.call(arguments,1);return a.each(function(){var u,l,f,g=e.isPlainObject(i)?e.extend(!0,{},e.fn.dimmer.settings,i):e.extend({},e.fn.dimmer.settings),p=g.selector,h=g.namespace,b=g.className,v=g.error,y="."+h,C="module-"+h,w=a.selector||"",S="ontouchstart"in n.documentElement?"touchstart":"click",D=e(this),T=this,N=D.data(C);f={preinitialize:function(){f.is.dimmer()?(l=D.parent(),u=D):(l=D,u=f.has.dimmer()?g.dimmerName?l.children(p.dimmer).filter("."+g.dimmerName):l.children(p.dimmer):f.create())},initialize:function(){f.debug("Initializing dimmer",g),"hover"==g.on?l.on("mouseenter"+y,f.show).on("mouseleave"+y,f.hide):"click"==g.on&&l.on(S+y,f.toggle),f.is.page()&&(f.debug("Setting as a page dimmer",l),f.set.pageDimmer()),f.is.closable()&&(f.verbose("Adding dimmer close event",u),u.on(S+y,f.event.click)),f.set.dimmable(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),N=f,D.data(C,N)},destroy:function(){f.verbose("Destroying previous module",u),D.removeData(C),l.off(y),u.off(y)},event:{click:function(i){f.verbose("Determining if event occured on dimmer",i),(0===u.find(i.target).length||e(i.target).is(p.content))&&(f.hide(),i.stopImmediatePropagation())}},addContent:function(i){var n=e(i);f.debug("Add content to dimmer",n),n.parent()[0]!==u[0]&&n.detach().appendTo(u)},create:function(){var i=e(g.template.dimmer());return g.variation&&(f.debug("Creating dimmer with variation",g.variation),i.addClass(g.variation)),g.dimmerName&&(f.debug("Creating named dimmer",g.dimmerName),i.addClass(g.dimmerName)),i.appendTo(l),i},show:function(i){i=e.isFunction(i)?i:function(){},f.debug("Showing dimmer",u,g),f.is.dimmed()&&!f.is.animating()||!f.is.enabled()?f.debug("Dimmer is already shown or disabled"):(f.animate.show(i),g.onShow.call(T),g.onChange.call(T))},hide:function(i){i=e.isFunction(i)?i:function(){},f.is.dimmed()||f.is.animating()?(f.debug("Hiding dimmer",u),f.animate.hide(i),g.onHide.call(T),g.onChange.call(T)):f.debug("Dimmer is not visible")},toggle:function(){f.verbose("Toggling dimmer visibility",u),f.is.dimmed()?f.hide():f.show()},animate:{show:function(i){i=e.isFunction(i)?i:function(){},g.useCSS&&e.fn.transition!==t&&u.transition("is supported")?("auto"!==g.opacity&&f.set.opacity(),u.transition({animation:g.transition+" in",queue:!1,duration:f.get.duration(),useFailSafe:!0,onStart:function(){f.set.dimmed()},onComplete:function(){f.set.active(),i()}})):(f.verbose("Showing dimmer animation with javascript"),f.set.dimmed(),"auto"==g.opacity&&(g.opacity=.8),u.stop().css({opacity:0,width:"100%",height:"100%"}).fadeTo(f.get.duration(),g.opacity,function(){u.removeAttr("style"),f.set.active(),i()}))},hide:function(i){i=e.isFunction(i)?i:function(){},g.useCSS&&e.fn.transition!==t&&u.transition("is supported")?(f.verbose("Hiding dimmer with css"),u.transition({animation:g.transition+" out",queue:!1,duration:f.get.duration(),useFailSafe:!0,onStart:function(){f.remove.dimmed()},onComplete:function(){f.remove.active(),i()}})):(f.verbose("Hiding dimmer with javascript"),f.remove.dimmed(),u.stop().fadeOut(f.get.duration(),function(){f.remove.active(),u.removeAttr("style"),i()}))}},get:{dimmer:function(){return u},duration:function(){return"object"==typeof g.duration?f.is.active()?g.duration.hide:g.duration.show:g.duration}},has:{dimmer:function(){return g.dimmerName?D.children(p.dimmer).filter("."+g.dimmerName).length>0:D.children(p.dimmer).length>0}},is:{active:function(){return u.hasClass(b.active)},animating:function(){return u.is(":animated")||u.hasClass(b.animating)},closable:function(){return"auto"==g.closable?"hover"==g.on?!1:!0:g.closable},dimmer:function(){return D.is(p.dimmer)},dimmable:function(){return D.is(p.dimmable)},dimmed:function(){return l.hasClass(b.dimmed)},disabled:function(){return l.hasClass(b.disabled)},enabled:function(){return!f.is.disabled()},page:function(){return l.is("body")},pageDimmer:function(){return u.hasClass(b.pageDimmer)}},can:{show:function(){return!u.hasClass(b.disabled)}},set:{opacity:function(e){var e=g.opacity||e,i=u.css("background-color"),n=i.split(","),t=n&&4==n.length;t?(n[3]=e+")",i=n.join(",")):i="rgba(0, 0, 0, "+e+")",f.debug("Setting opacity to",e),u.css("background-color",i)},active:function(){u.addClass(b.active)},dimmable:function(){l.addClass(b.dimmable)},dimmed:function(){l.addClass(b.dimmed)},pageDimmer:function(){u.addClass(b.pageDimmer)},disabled:function(){u.addClass(b.disabled)}},remove:{active:function(){u.removeClass(b.active)},dimmed:function(){l.removeClass(b.dimmed)},disabled:function(){u.removeClass(b.disabled)}},setting:function(i,n){if(f.debug("Changing setting",i,n),e.isPlainObject(i))e.extend(!0,g,i);else{if(n===t)return g[i];g[i]=n}},internal:function(i,n){if(e.isPlainObject(i))e.extend(!0,f,i);else{if(n===t)return f[i];f[i]=n}},debug:function(){g.debug&&(g.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,g.name+":"),f.debug.apply(console,arguments)))},verbose:function(){g.verbose&&g.debug&&(g.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),f.verbose.apply(console,arguments)))},error:function(){f.error=Function.prototype.bind.call(console.error,console,g.name+":"),f.error.apply(console,arguments)},performance:{log:function(e){var i,n,t;g.performance&&(i=(new Date).getTime(),t=r||i,n=i-t,r=i,m.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:T,"Execution Time":n})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,100)},display:function(){var i=g.name+":",n=0;r=!1,clearTimeout(f.performance.timer),e.each(m,function(e,i){n+=i["Execution Time"]}),i+=" "+n+"ms",w&&(i+=" '"+w+"'"),a.length>1&&(i+=" ("+a.length+")"),(console.group!==t||console.table!==t)&&m.length>0&&(console.groupCollapsed(i),console.table?console.table(m):e.each(m,function(e,i){console.log(i.Name+": "+i["Execution Time"]+"ms")}),console.groupEnd()),m=[]}},invoke:function(i,n,a){var r,m,s,d=N;return n=n||c,a=T||a,"string"==typeof i&&d!==t&&(i=i.split(/[\. ]/),r=i.length-1,e.each(i,function(n,o){var a=n!=r?o+i[n+1].charAt(0).toUpperCase()+i[n+1].slice(1):i;if(e.isPlainObject(d[a])&&n!=r)d=d[a];else{if(d[a]!==t)return m=d[a],!1;if(!e.isPlainObject(d[o])||n==r)return d[o]!==t?(m=d[o],!1):(f.error(v.method,i),!1);d=d[o]}})),e.isFunction(m)?s=m.apply(a,n):m!==t&&(s=m),e.isArray(o)?o.push(s):o!==t?o=[o,s]:s!==t&&(o=s),m}},f.preinitialize(),d?(N===t&&f.initialize(),f.invoke(s)):(N!==t&&N.invoke("destroy"),f.initialize())}),o!==t?o:this},e.fn.dimmer.settings={name:"Dimmer",namespace:"dimmer",debug:!1,verbose:!0,performance:!0,dimmerName:!1,variation:!1,closable:"auto",useCSS:!0,transition:"fade",on:!1,opacity:"auto",duration:{show:500,hide:500},onChange:function(){},onShow:function(){},onHide:function(){},error:{method:"The method you called is not defined."},selector:{dimmable:".dimmable",dimmer:".ui.dimmer",content:".ui.dimmer > .content, .ui.dimmer > .content > .center"},template:{dimmer:function(){return e("<div />").attr("class","ui dimmer")}},className:{active:"active",animating:"animating",dimmable:"dimmable",dimmed:"dimmed",disabled:"disabled",hide:"hide",pageDimmer:"page",show:"show"}}}(jQuery,window,document);