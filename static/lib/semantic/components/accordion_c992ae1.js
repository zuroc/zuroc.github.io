!function(e,n,t,i){"use strict";e.fn.accordion=function(t){{var o,a=e(this),s=(new Date).getTime(),r=[],c=arguments[0],l="string"==typeof c,u=[].slice.call(arguments,1);n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||n.msRequestAnimationFrame||function(e){setTimeout(e,0)}}return a.each(function(){var d,m,g=e.isPlainObject(t)?e.extend(!0,{},e.fn.accordion.settings,t):e.extend({},e.fn.accordion.settings),f=g.className,p=g.namespace,v=g.selector,h=g.error,b="."+p,y="module-"+p,C=a.selector||"",O=e(this),x=O.find(v.title),F=O.find(v.content),T=this,q=O.data(y);m={initialize:function(){m.debug("Initializing",O),m.bind.events(),m.observeChanges(),m.instantiate()},instantiate:function(){q=m,O.data(y,m)},destroy:function(){m.debug("Destroying previous instance",O),O.off(b).removeData(y)},refresh:function(){x=O.find(v.title),F=O.find(v.content)},observeChanges:function(){"MutationObserver"in n&&(d=new MutationObserver(function(){m.debug("DOM tree modified, updating selector cache"),m.refresh()}),d.observe(T,{childList:!0,subtree:!0}),m.debug("Setting up mutation observer",d))},bind:{events:function(){m.debug("Binding delegated events"),O.on("click"+b,v.trigger,m.event.click)}},event:{click:function(){m.toggle.call(this)}},toggle:function(n){var t=n!==i?"number"==typeof n?x.eq(n):e(n).closest(v.title):e(this).closest(v.title),o=t.next(F),a=o.hasClass(f.animating),s=o.hasClass(f.active),r=s&&!a,c=!s&&a;m.debug("Toggling visibility of content",t),r||c?g.collapsible?m.close.call(t):m.debug("Cannot close accordion content collapsing is disabled"):m.open.call(t)},open:function(n){var t=n!==i?"number"==typeof n?x.eq(n):e(n).closest(v.title):e(this).closest(v.title),o=t.next(F),a=o.hasClass(f.animating),s=o.hasClass(f.active),r=!s&&!a;r&&(m.debug("Opening accordion content",t),g.exclusive&&m.closeOthers.call(t),t.addClass(f.active),o.addClass(f.animating),g.animateChildren&&(e.fn.transition!==i&&O.transition("is supported")?o.children().transition({animation:"fade in",queue:!1,useFailSafe:!0,debug:g.debug,verbose:g.verbose,duration:g.duration}):o.children().stop(!0).animate({opacity:1},g.duration,m.resetOpacity)),o.stop(!0).slideDown(g.duration,g.easing,function(){o.removeClass(f.animating).addClass(f.active),m.reset.display.call(this),g.onOpen.call(this),g.onChange.call(this)}))},close:function(n){var t=n!==i?"number"==typeof n?x.eq(n):e(n).closest(v.title):e(this).closest(v.title),o=t.next(F),a=o.hasClass(f.animating),s=o.hasClass(f.active),r=!s&&a,c=s&&a;!s&&!r||c||(m.debug("Closing accordion content",o),t.removeClass(f.active),o.addClass(f.animating),g.animateChildren&&(e.fn.transition!==i&&O.transition("is supported")?o.children().transition({animation:"fade out",queue:!1,useFailSafe:!0,debug:g.debug,verbose:g.verbose,duration:g.duration}):o.children().stop(!0).animate({opacity:0},g.duration,m.resetOpacity)),o.stop(!0).slideUp(g.duration,g.easing,function(){o.removeClass(f.animating).removeClass(f.active),m.reset.display.call(this),g.onClose.call(this),g.onChange.call(this)}))},closeOthers:function(n){var t,o,a,s=n!==i?x.eq(n):e(this).closest(v.title),r=s.parents(v.content).prev(v.title),c=s.closest(v.accordion),l=v.title+"."+f.active+":visible",u=v.content+"."+f.active+":visible";g.closeNested?(t=c.find(l).not(r),a=t.next(F)):(t=c.find(l).not(r),o=c.find(u).find(l).not(r),t=t.not(o),a=t.next(F)),t.length>0&&(m.debug("Exclusive enabled, closing other content",t),t.removeClass(f.active),g.animateChildren&&(e.fn.transition!==i&&O.transition("is supported")?a.children().transition({animation:"fade out",useFailSafe:!0,debug:g.debug,verbose:g.verbose,duration:g.duration}):a.children().stop().animate({opacity:0},g.duration,m.resetOpacity)),a.stop().slideUp(g.duration,g.easing,function(){e(this).removeClass(f.active),m.reset.display.call(this)}))},reset:{display:function(){m.verbose("Removing inline display from element",this),e(this).css("display",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")},opacity:function(){m.verbose("Removing inline opacity from element",this),e(this).css("opacity",""),""===e(this).attr("style")&&e(this).attr("style","").removeAttr("style")}},setting:function(n,t){if(m.debug("Changing setting",n,t),e.isPlainObject(n))e.extend(!0,g,n);else{if(t===i)return g[n];g[n]=t}},internal:function(n,t){return m.debug("Changing internal",n,t),t===i?m[n]:void(e.isPlainObject(n)?e.extend(!0,m,n):m[n]=t)},debug:function(){g.debug&&(g.performance?m.performance.log(arguments):(m.debug=Function.prototype.bind.call(console.info,console,g.name+":"),m.debug.apply(console,arguments)))},verbose:function(){g.verbose&&g.debug&&(g.performance?m.performance.log(arguments):(m.verbose=Function.prototype.bind.call(console.info,console,g.name+":"),m.verbose.apply(console,arguments)))},error:function(){m.error=Function.prototype.bind.call(console.error,console,g.name+":"),m.error.apply(console,arguments)},performance:{log:function(e){var n,t,i;g.performance&&(n=(new Date).getTime(),i=s||n,t=n-i,s=n,r.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:T,"Execution Time":t})),clearTimeout(m.performance.timer),m.performance.timer=setTimeout(m.performance.display,100)},display:function(){var n=g.name+":",t=0;s=!1,clearTimeout(m.performance.timer),e.each(r,function(e,n){t+=n["Execution Time"]}),n+=" "+t+"ms",C&&(n+=" '"+C+"'"),(console.group!==i||console.table!==i)&&r.length>0&&(console.groupCollapsed(n),console.table?console.table(r):e.each(r,function(e,n){console.log(n.Name+": "+n["Execution Time"]+"ms")}),console.groupEnd()),r=[]}},invoke:function(n,t,a){var s,r,c,l=q;return t=t||u,a=T||a,"string"==typeof n&&l!==i&&(n=n.split(/[\. ]/),s=n.length-1,e.each(n,function(t,o){var a=t!=s?o+n[t+1].charAt(0).toUpperCase()+n[t+1].slice(1):n;if(e.isPlainObject(l[a])&&t!=s)l=l[a];else{if(l[a]!==i)return r=l[a],!1;if(!e.isPlainObject(l[o])||t==s)return l[o]!==i?(r=l[o],!1):(m.error(h.method,n),!1);l=l[o]}})),e.isFunction(r)?c=r.apply(a,t):r!==i&&(c=r),e.isArray(o)?o.push(c):o!==i?o=[o,c]:c!==i&&(o=c),r}},l?(q===i&&m.initialize(),m.invoke(c)):(q!==i&&q.invoke("destroy"),m.initialize())}),o!==i?o:this},e.fn.accordion.settings={name:"Accordion",namespace:"accordion",debug:!1,verbose:!0,performance:!0,exclusive:!0,collapsible:!0,closeNested:!1,animateChildren:!0,duration:350,easing:"easeOutQuad",onOpen:function(){},onClose:function(){},onChange:function(){},error:{method:"The method you called is not defined"},className:{active:"active",animating:"animating"},selector:{accordion:".accordion",title:".title",trigger:".title",content:".content"}},e.extend(e.easing,{easeOutQuad:function(e,n,t,i,o){return-i*(n/=o)*(n-2)+t}})}(jQuery,window,document);