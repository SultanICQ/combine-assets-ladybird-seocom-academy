/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(a){var e,t,n,i;function r(e,t){var n,i,r,o=e.nodeName.toLowerCase();return"area"===o?(i=(n=e.parentNode).name,!(!e.href||!i||"map"!==n.nodeName.toLowerCase())&&(!!(r=a("img[usemap='#"+i+"']")[0])&&s(r))):(/^(input|select|textarea|button|object)$/.test(o)?!e.disabled:"a"===o&&e.href||t)&&s(e)}function s(e){return a.expr.filters.visible(e)&&!a(e).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(e){var t=this.css("position"),n="absolute"===t,i=e?/(auto|scroll|hidden)/:/(auto|scroll)/,r=this.parents().filter(function(){var e=a(this);return(!n||"static"!==e.css("position"))&&i.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0);return"fixed"!==t&&r.length?r:a(this[0].ownerDocument||document)},uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(t){return function(e){return!!a.data(e,t)}}):function(e,t,n){return!!a.data(e,n[3])},focusable:function(e){return r(e,!isNaN(a.attr(e,"tabindex")))},tabbable:function(e){var t=a.attr(e,"tabindex"),n=isNaN(t);return(n||0<=t)&&r(e,!n)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(e,n){var r="Width"===n?["Left","Right"]:["Top","Bottom"],i=n.toLowerCase(),o={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};function s(e,t,n,i){return a.each(r,function(){t-=parseFloat(a.css(e,"padding"+this))||0,n&&(t-=parseFloat(a.css(e,"border"+this+"Width"))||0),i&&(t-=parseFloat(a.css(e,"margin"+this))||0)}),t}a.fn["inner"+n]=function(e){return void 0===e?o["inner"+n].call(this):this.each(function(){a(this).css(i,s(this,e)+"px")})},a.fn["outer"+n]=function(e,t){return"number"!=typeof e?o["outer"+n].call(this,e):this.each(function(){a(this).css(i,s(this,e,!0,t)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=(t=a.fn.removeData,function(e){return arguments.length?t.call(this,a.camelCase(e)):t.call(this)})),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:(i=a.fn.focus,function(t,n){return"number"==typeof t?this.each(function(){var e=this;setTimeout(function(){a(e).focus(),n&&n.call(e)},t)}):i.apply(this,arguments)}),disableSelection:(n="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.bind(n+".ui-disableSelection",function(e){e.preventDefault()})}),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(e){if(void 0!==e)return this.css("zIndex",e);if(this.length)for(var t,n,i=a(this[0]);i.length&&i[0]!==document;){if(("absolute"===(t=i.css("position"))||"relative"===t||"fixed"===t)&&(n=parseInt(i.css("zIndex"),10),!isNaN(n)&&0!==n))return n;i=i.parent()}return 0}}),a.ui.plugin={add:function(e,t,n){var i,r=a.ui[e].prototype;for(i in n)r.plugins[i]=r.plugins[i]||[],r.plugins[i].push([t,n[i]])},call:function(e,t,n,i){var r,o=e.plugins[t];if(o&&(i||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(r=0;r<o.length;r++)e.options[o[r][0]]&&o[r][1].apply(e.element,n)}}});/*!
 * jQuery UI Widget 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/jQuery.widget/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(h){var s,i=0,a=Array.prototype.slice;return h.cleanData=(s=h.cleanData,function(t){var e,i,n;for(n=0;null!=(i=t[n]);n++)try{(e=h._data(i,"events"))&&e.remove&&h(i).triggerHandler("remove")}catch(t){}s(t)}),h.widget=function(t,i,e){var n,s,o,r,a={},u=t.split(".")[0];return t=t.split(".")[1],n=u+"-"+t,e||(e=i,i=h.Widget),h.expr[":"][n.toLowerCase()]=function(t){return!!h.data(t,n)},h[u]=h[u]||{},s=h[u][t],o=h[u][t]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},h.extend(o,s,{version:e.version,_proto:h.extend({},e),_childConstructors:[]}),(r=new i).options=h.widget.extend({},r.options),h.each(e,function(e,n){function s(){return i.prototype[e].apply(this,arguments)}function o(t){return i.prototype[e].apply(this,t)}h.isFunction(n)?a[e]=function(){var t,e=this._super,i=this._superApply;return this._super=s,this._superApply=o,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}:a[e]=n}),o.prototype=h.widget.extend(r,{widgetEventPrefix:s&&r.widgetEventPrefix||t},a,{constructor:o,namespace:u,widgetName:t,widgetFullName:n}),s?(h.each(s._childConstructors,function(t,e){var i=e.prototype;h.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete s._childConstructors):i._childConstructors.push(o),h.widget.bridge(t,o),o},h.widget.extend=function(t){for(var e,i,n=a.call(arguments,1),s=0,o=n.length;s<o;s++)for(e in n[s])i=n[s][e],n[s].hasOwnProperty(e)&&void 0!==i&&(h.isPlainObject(i)?t[e]=h.isPlainObject(t[e])?h.widget.extend({},t[e],i):h.widget.extend({},i):t[e]=i);return t},h.widget.bridge=function(o,e){var r=e.prototype.widgetFullName||o;h.fn[o]=function(i){var t="string"==typeof i,n=a.call(arguments,1),s=this;return t?this.each(function(){var t,e=h.data(this,r);return"instance"===i?(s=e,!1):e?h.isFunction(e[i])&&"_"!==i.charAt(0)?(t=e[i].apply(e,n))!==e&&void 0!==t?(s=t&&t.jquery?s.pushStack(t.get()):t,!1):void 0:h.error("no such method '"+i+"' for "+o+" widget instance"):h.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):(n.length&&(i=h.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=h.data(this,r);t?(t.option(i||{}),t._init&&t._init()):h.data(this,r,new e(i,this))})),s}},h.Widget=function(){},h.Widget._childConstructors=[],h.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,e){e=h(e||this.defaultElement||this)[0],this.element=h(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=h(),this.hoverable=h(),this.focusable=h(),e!==this&&(h.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=h(e.style?e.ownerDocument:e.document||e),this.window=h(this.document[0].defaultView||this.document[0].parentWindow)),this.options=h.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:h.noop,_getCreateEventData:h.noop,_create:h.noop,_init:h.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(h.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:h.noop,widget:function(){return this.element},option:function(t,e){var i,n,s,o=t;if(0===arguments.length)return h.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(n=o[t]=h.widget.extend({},this.options[t]),s=0;s<i.length-1;s++)n[i[s]]=n[i[s]]||{},n=n[i[s]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!e),e&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(r,a,t){var u,d=this;"boolean"!=typeof r&&(t=a,a=r,r=!1),t?(a=u=h(a),this.bindings=this.bindings.add(a)):(t=a,a=this.element,u=this.widget()),h.each(t,function(t,e){function i(){if(r||!0!==d.options.disabled&&!h(this).hasClass("ui-state-disabled"))return("string"==typeof e?d[e]:e).apply(d,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||h.guid++);var n=t.match(/^([\w:-]*)\s*(.*)$/),s=n[1]+d.eventNamespace,o=n[2];o?u.delegate(o,s,i):a.bind(s,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e),this.bindings=h(this.bindings.not(t).get()),this.focusable=h(this.focusable.not(t).get()),this.hoverable=h(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){h(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){h(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){h(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){h(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,e,i){var n,s,o=this.options[t];if(i=i||{},(e=h.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],s=e.originalEvent)for(n in s)n in e||(e[n]=s[n]);return this.element.trigger(e,i),!(h.isFunction(o)&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},h.each({show:"fadeIn",hide:"fadeOut"},function(o,r){h.Widget.prototype["_"+o]=function(e,t,i){"string"==typeof t&&(t={effect:t});var n,s=t?!0===t||"number"==typeof t?r:t.effect||r:o;"number"==typeof(t=t||{})&&(t={duration:t}),n=!h.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&h.effects&&h.effects.effect[s]?e[o](t):s!==o&&e[s]?e[s](t.duration,t.easing,i):e.queue(function(t){h(this)[o](),i&&i.call(e[0]),t()})}}),h.widget});/*!
 * jQuery UI Mouse 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/mouse/
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./widget"],e):e(jQuery)}(function(o){var u=!1;return o(document).mouseup(function(){u=!1}),o.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(e){if(!0===o.data(e.target,t.widgetName+".preventClickEvent"))return o.removeData(e.target,t.widgetName+".preventClickEvent"),e.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!u){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var t=this,s=1===e.which,i=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&o(e.target).closest(this.options.cancel).length;return!(s&&!i&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){t.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(!0===o.data(e.target,this.widgetName+".preventClickEvent")&&o.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return t._mouseMove(e)},this._mouseUpDelegate=function(e){return t._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),u=!0))}},_mouseMove:function(e){if(this._mouseMoved){if(o.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);if(!e.which)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&o.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),u=!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})});/*!
 * jQuery UI Resizable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/resizable/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],t):t(jQuery)}(function(w){return w.widget("ui.resizable",w.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseInt(t,10)||0},_isNumber:function(t){return!isNaN(parseInt(t,10))},_hasScroll:function(t,i){if("hidden"===w(t).css("overflow"))return!1;var e,s=i&&"left"===i?"scrollLeft":"scrollTop";return 0<t[s]||(t[s]=1,e=0<t[s],t[s]=0,e)},_create:function(){var t,i,e,s,n=this,h=this.options;if(this.element.addClass("ui-resizable"),w.extend(this,{_aspectRatio:!!h.aspectRatio,aspectRatio:h.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:h.helper||h.ghost||h.animate?h.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(w("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=h.handles||(w(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=w(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;i<t.length;i++)e=w.trim(t[i]),(s=w("<div class='ui-resizable-handle "+("ui-resizable-"+e)+"'></div>")).css({zIndex:h.zIndex}),"se"===e&&s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[e]=".ui-resizable-"+e,this.element.append(s);this._renderAxis=function(t){var i,e,s,h;for(i in t=t||this.element,this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=w(this.handles[i]),this._on(this.handles[i],{mousedown:n._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(e=w(this.handles[i],this.element),h=/sw|ne|nw|se|n|s/.test(i)?e.outerHeight():e.outerWidth(),s=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(s,h),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){n.resizing||(this.className&&(s=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),n.axis=s&&s[1]?s[1]:"se")}),h.autoHide&&(this._handles.hide(),w(this.element).addClass("ui-resizable-autohide").mouseenter(function(){h.disabled||(w(this).removeClass("ui-resizable-autohide"),n._handles.show())}).mouseleave(function(){h.disabled||n.resizing||(w(this).addClass("ui-resizable-autohide"),n._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();function t(t){w(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()}var i;return this.elementIsWrapper&&(t(this.element),i=this.element,this.originalElement.css({position:i.css("position"),width:i.outerWidth(),height:i.outerHeight(),top:i.css("top"),left:i.css("left")}).insertAfter(i),i.remove()),this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_mouseCapture:function(t){var i,e,s=!1;for(i in this.handles)(e=w(this.handles[i])[0])!==t.target&&!w.contains(e,t.target)||(s=!0);return!this.options.disabled&&s},_mouseStart:function(t){var i,e,s,h=this.options,n=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),e=this._num(this.helper.css("top")),h.containment&&(i+=w(h.containment).scrollLeft()||0,e+=w(h.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:e},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:n.width(),height:n.height()},this.originalSize=this._helper?{width:n.outerWidth(),height:n.outerHeight()}:{width:n.width(),height:n.height()},this.sizeDiff={width:n.outerWidth()-n.width(),height:n.outerHeight()-n.height()},this.originalPosition={left:i,top:e},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof h.aspectRatio?h.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=w(".ui-resizable-"+this.axis).css("cursor"),w("body").css("cursor","auto"===s?this.axis+"-resize":s),n.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,e,s=this.originalMousePosition,h=this.axis,n=t.pageX-s.left||0,o=t.pageY-s.top||0,a=this._change[h];return this._updatePrevProperties(),a&&(i=a.apply(this,[t,n,o]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),e=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),w.isEmptyObject(e)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges())),!1},_mouseStop:function(t){this.resizing=!1;var i,e,s,h,n,o,a,l=this.options,r=this;return this._helper&&(s=(e=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],"left")?0:r.sizeDiff.height,h=e?0:r.sizeDiff.width,n={width:r.helper.width()-h,height:r.helper.height()-s},o=parseInt(r.element.css("left"),10)+(r.position.left-r.originalPosition.left)||null,a=parseInt(r.element.css("top"),10)+(r.position.top-r.originalPosition.top)||null,l.animate||this.element.css(w.extend(n,{top:a,left:o})),r.helper.height(r.size.height),r.helper.width(r.size.width),this._helper&&!l.animate&&this._proportionallyResize()),w("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var i,e,s,h,n,o=this.options;n={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||t)&&(i=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,e=n.maxHeight*this.aspectRatio,h=n.maxWidth/this.aspectRatio,i>n.minWidth&&(n.minWidth=i),s>n.minHeight&&(n.minHeight=s),e<n.maxWidth&&(n.maxWidth=e),h<n.maxHeight&&(n.maxHeight=h)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var i=this.position,e=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=i.left+(e.width-t.width),t.top=null),"nw"===s&&(t.top=i.top+(e.height-t.height),t.left=i.left+(e.width-t.width)),t},_respectSize:function(t){var i=this._vBoundaries,e=this.axis,s=this._isNumber(t.width)&&i.maxWidth&&i.maxWidth<t.width,h=this._isNumber(t.height)&&i.maxHeight&&i.maxHeight<t.height,n=this._isNumber(t.width)&&i.minWidth&&i.minWidth>t.width,o=this._isNumber(t.height)&&i.minHeight&&i.minHeight>t.height,a=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,r=/sw|nw|w/.test(e),p=/nw|ne|n/.test(e);return n&&(t.width=i.minWidth),o&&(t.height=i.minHeight),s&&(t.width=i.maxWidth),h&&(t.height=i.maxHeight),n&&r&&(t.left=a-i.minWidth),s&&r&&(t.left=a-i.maxWidth),o&&p&&(t.top=l-i.minHeight),h&&p&&(t.top=l-i.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var i=0,e=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],h=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];i<4;i++)e[i]=parseInt(s[i],10)||0,e[i]+=parseInt(h[i],10)||0;return{height:e[0]+e[2],width:e[1]+e[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,i=0,e=this.helper||this.element;i<this._proportionallyResizeElements.length;i++)t=this._proportionallyResizeElements[i],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:e.height()-this.outerDimensions.height||0,width:e.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||w("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,i){return{width:this.originalSize.width+i}},w:function(t,i){var e=this.originalSize;return{left:this.originalPosition.left+i,width:e.width-i}},n:function(t,i,e){var s=this.originalSize;return{top:this.originalPosition.top+e,height:s.height-e}},s:function(t,i,e){return{height:this.originalSize.height+e}},se:function(t,i,e){return w.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,e]))},sw:function(t,i,e){return w.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,e]))},ne:function(t,i,e){return w.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,e]))},nw:function(t,i,e){return w.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,e]))}},_propagate:function(t,i){w.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),w.ui.plugin.add("resizable","animate",{stop:function(i){var e=w(this).resizable("instance"),t=e.options,s=e._proportionallyResizeElements,h=s.length&&/textarea/i.test(s[0].nodeName),n=h&&e._hasScroll(s[0],"left")?0:e.sizeDiff.height,o=h?0:e.sizeDiff.width,a={width:e.size.width-o,height:e.size.height-n},l=parseInt(e.element.css("left"),10)+(e.position.left-e.originalPosition.left)||null,r=parseInt(e.element.css("top"),10)+(e.position.top-e.originalPosition.top)||null;e.element.animate(w.extend(a,r&&l?{top:r,left:l}:{}),{duration:t.animateDuration,easing:t.animateEasing,step:function(){var t={width:parseInt(e.element.css("width"),10),height:parseInt(e.element.css("height"),10),top:parseInt(e.element.css("top"),10),left:parseInt(e.element.css("left"),10)};s&&s.length&&w(s[0]).css({width:t.width,height:t.height}),e._updateCache(t),e._propagate("resize",i)}})}}),w.ui.plugin.add("resizable","containment",{start:function(){var e,s,t,i,h,n,o,a=w(this).resizable("instance"),l=a.options,r=a.element,p=l.containment,d=p instanceof w?p.get(0):/parent/.test(p)?r.parent().get(0):p;d&&(a.containerElement=w(d),/document/.test(p)||p===document?(a.containerOffset={left:0,top:0},a.containerPosition={left:0,top:0},a.parentData={element:w(document),left:0,top:0,width:w(document).width(),height:w(document).height()||document.body.parentNode.scrollHeight}):(e=w(d),s=[],w(["Top","Right","Left","Bottom"]).each(function(t,i){s[t]=a._num(e.css("padding"+i))}),a.containerOffset=e.offset(),a.containerPosition=e.position(),a.containerSize={height:e.innerHeight()-s[3],width:e.innerWidth()-s[1]},t=a.containerOffset,i=a.containerSize.height,h=a.containerSize.width,n=a._hasScroll(d,"left")?d.scrollWidth:h,o=a._hasScroll(d)?d.scrollHeight:i,a.parentData={element:d,left:t.left,top:t.top,width:n,height:o}))},resize:function(t){var i,e,s,h,n=w(this).resizable("instance"),o=n.options,a=n.containerOffset,l=n.position,r=n._aspectRatio||t.shiftKey,p={top:0,left:0},d=n.containerElement,g=!0;d[0]!==document&&/static/.test(d.css("position"))&&(p=a),l.left<(n._helper?a.left:0)&&(n.size.width=n.size.width+(n._helper?n.position.left-a.left:n.position.left-p.left),r&&(n.size.height=n.size.width/n.aspectRatio,g=!1),n.position.left=o.helper?a.left:0),l.top<(n._helper?a.top:0)&&(n.size.height=n.size.height+(n._helper?n.position.top-a.top:n.position.top),r&&(n.size.width=n.size.height*n.aspectRatio,g=!1),n.position.top=n._helper?a.top:0),s=n.containerElement.get(0)===n.element.parent().get(0),h=/relative|absolute/.test(n.containerElement.css("position")),s&&h?(n.offset.left=n.parentData.left+n.position.left,n.offset.top=n.parentData.top+n.position.top):(n.offset.left=n.element.offset().left,n.offset.top=n.element.offset().top),i=Math.abs(n.sizeDiff.width+(n._helper?n.offset.left-p.left:n.offset.left-a.left)),e=Math.abs(n.sizeDiff.height+(n._helper?n.offset.top-p.top:n.offset.top-a.top)),i+n.size.width>=n.parentData.width&&(n.size.width=n.parentData.width-i,r&&(n.size.height=n.size.width/n.aspectRatio,g=!1)),e+n.size.height>=n.parentData.height&&(n.size.height=n.parentData.height-e,r&&(n.size.width=n.size.height*n.aspectRatio,g=!1)),g||(n.position.left=n.prevPosition.left,n.position.top=n.prevPosition.top,n.size.width=n.prevSize.width,n.size.height=n.prevSize.height)},stop:function(){var t=w(this).resizable("instance"),i=t.options,e=t.containerOffset,s=t.containerPosition,h=t.containerElement,n=w(t.helper),o=n.offset(),a=n.outerWidth()-t.sizeDiff.width,l=n.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(h.css("position"))&&w(this).css({left:o.left-s.left-e.left,width:a,height:l}),t._helper&&!i.animate&&/static/.test(h.css("position"))&&w(this).css({left:o.left-s.left-e.left,width:a,height:l})}}),w.ui.plugin.add("resizable","alsoResize",{start:function(){var t=w(this).resizable("instance").options;w(t.alsoResize).each(function(){var t=w(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,e){var i=w(this).resizable("instance"),s=i.options,h=i.originalSize,n=i.originalPosition,o={height:i.size.height-h.height||0,width:i.size.width-h.width||0,top:i.position.top-n.top||0,left:i.position.left-n.left||0};w(s.alsoResize).each(function(){var t=w(this),s=w(this).data("ui-resizable-alsoresize"),h={},i=t.parents(e.originalElement[0]).length?["width","height"]:["width","height","top","left"];w.each(i,function(t,i){var e=(s[i]||0)+(o[i]||0);e&&0<=e&&(h[i]=e||null)}),t.css(h)})},stop:function(){w(this).removeData("resizable-alsoresize")}}),w.ui.plugin.add("resizable","ghost",{start:function(){var t=w(this).resizable("instance"),i=t.options,e=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=w(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=w(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),w.ui.plugin.add("resizable","grid",{resize:function(){var t,i=w(this).resizable("instance"),e=i.options,s=i.size,h=i.originalSize,n=i.originalPosition,o=i.axis,a="number"==typeof e.grid?[e.grid,e.grid]:e.grid,l=a[0]||1,r=a[1]||1,p=Math.round((s.width-h.width)/l)*l,d=Math.round((s.height-h.height)/r)*r,g=h.width+p,u=h.height+d,m=e.maxWidth&&e.maxWidth<g,f=e.maxHeight&&e.maxHeight<u,c=e.minWidth&&e.minWidth>g,z=e.minHeight&&e.minHeight>u;e.grid=a,c&&(g+=l),z&&(u+=r),m&&(g-=l),f&&(u-=r),/^(se|s|e)$/.test(o)?(i.size.width=g,i.size.height=u):/^(ne)$/.test(o)?(i.size.width=g,i.size.height=u,i.position.top=n.top-d):/^(sw)$/.test(o)?(i.size.width=g,i.size.height=u,i.position.left=n.left-p):((u-r<=0||g-l<=0)&&(t=i._getPaddingPlusBorderDimensions(this)),0<u-r?(i.size.height=u,i.position.top=n.top-d):(u=r-t.height,i.size.height=u,i.position.top=n.top+h.height-u),0<g-l?(i.size.width=g,i.position.left=n.left-p):(g=l-t.width,i.size.width=g,i.position.left=n.left+h.width-g))}}),w.ui.resizable});/*!
 * jQuery UI Draggable 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/draggable/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],t):t(jQuery)}(function(P){return P.widget("ui.draggable",P.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(t){var e=this.options;return this._blurActiveElement(t),!(this.helper||e.disabled||0<P(t.target).closest(".ui-resizable-handle").length)&&(this.handle=this._getHandle(t),!!this.handle&&(this._blockFrames(!0===e.iframeFix?"iframe":e.iframeFix),!0))},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=P(this);return P("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var e=this.document[0];if(this.handleElement.is(t.target))try{e.activeElement&&"body"!==e.activeElement.nodeName.toLowerCase()&&P(e.activeElement).blur()}catch(t){}},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),P.ui.ddmanager&&(P.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===P(this).css("position")}).length,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),P.ui.ddmanager&&!e.dropBehaviour&&P.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),P.ui.ddmanager&&P.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(t,e){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!e){var s=this._uiHash();if(!1===this._trigger("drag",t,s))return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",P.ui.ddmanager&&P.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,s=!1;return P.ui.ddmanager&&!this.options.dropBehaviour&&(s=P.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||!0===this.options.revert||P.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?P(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),P.ui.ddmanager&&P.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),P.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!P(t.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var e=this.options,s=P.isFunction(e.helper),i=s?P(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return i.parents("body").length||i.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),s&&i[0]===this.element[0]&&this._setPositionRelative(),i[0]===this.element[0]||/(fixed|absolute)/.test(i.css("position"))||i.css("position","absolute"),i},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),P.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),e=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==e&&P.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,s,i=this.options,o=this.document[0];this.relativeContainer=null,i.containment?"window"!==i.containment?"document"!==i.containment?i.containment.constructor!==Array?("parent"===i.containment&&(i.containment=this.helper[0].parentNode),(s=(e=P(i.containment))[0])&&(t=/(scroll|auto)/.test(e.css("overflow")),this.containment=[(parseInt(e.css("borderLeftWidth"),10)||0)+(parseInt(e.css("paddingLeft"),10)||0),(parseInt(e.css("borderTopWidth"),10)||0)+(parseInt(e.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(e.css("borderRightWidth"),10)||0)-(parseInt(e.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(e.css("borderBottomWidth"),10)||0)-(parseInt(e.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=e)):this.containment=i.containment:this.containment=[0,0,P(o).width()-this.helperProportions.width-this.margins.left,(P(o).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[P(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,P(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,P(window).scrollLeft()+P(window).width()-this.helperProportions.width-this.margins.left,P(window).scrollTop()+(P(window).height()||o.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e=e||this.position;var s="absolute"===t?1:-1,i=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.offset.scroll.top:i?0:this.offset.scroll.top)*s,left:e.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.offset.scroll.left:i?0:this.offset.scroll.left)*s}},_generatePosition:function(t,e){var s,i,o,n,r=this.options,l=this._isRootNode(this.scrollParent[0]),a=t.pageX,h=t.pageY;return l&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(s=this.relativeContainer?(i=this.relativeContainer.offset(),[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):this.containment,t.pageX-this.offset.click.left<s[0]&&(a=s[0]+this.offset.click.left),t.pageY-this.offset.click.top<s[1]&&(h=s[1]+this.offset.click.top),t.pageX-this.offset.click.left>s[2]&&(a=s[2]+this.offset.click.left),t.pageY-this.offset.click.top>s[3]&&(h=s[3]+this.offset.click.top)),r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,h=s?o-this.offset.click.top>=s[1]||o-this.offset.click.top>s[3]?o:o-this.offset.click.top>=s[1]?o-r.grid[1]:o+r.grid[1]:o,n=r.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,a=s?n-this.offset.click.left>=s[0]||n-this.offset.click.left>s[2]?n:n-this.offset.click.left>=s[0]?n-r.grid[0]:n+r.grid[0]:n),"y"===r.axis&&(a=this.originalPageX),"x"===r.axis&&(h=this.originalPageY)),{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:l?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:l?0:this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,e,s){return s=s||this._uiHash(),P.ui.plugin.call(this,t,[e,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),P.Widget.prototype._trigger.call(this,t,e,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),P.ui.plugin.add("draggable","connectToSortable",{start:function(e,t,s){var i=P.extend({},t,{item:s.element});s.sortables=[],P(s.options.connectToSortable).each(function(){var t=P(this).sortable("instance");t&&!t.options.disabled&&(s.sortables.push(t),t.refreshPositions(),t._trigger("activate",e,i))})},stop:function(e,t,s){var i=P.extend({},t,{item:s.element});s.cancelHelperRemoval=!1,P.each(s.sortables,function(){var t=this;t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,i))})},drag:function(s,i,o){P.each(o.sortables,function(){var t=!1,e=this;e.positionAbs=o.positionAbs,e.helperProportions=o.helperProportions,e.offset.click=o.offset.click,e._intersectsWith(e.containerCache)&&(t=!0,P.each(o.sortables,function(){return this.positionAbs=o.positionAbs,this.helperProportions=o.helperProportions,this.offset.click=o.offset.click,this!==e&&this._intersectsWith(this.containerCache)&&P.contains(e.element[0],this.element[0])&&(t=!1),t})),t?(e.isOver||(e.isOver=1,o._parent=i.helper.parent(),e.currentItem=i.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return i.helper[0]},s.target=e.currentItem[0],e._mouseCapture(s,!0),e._mouseStart(s,!0,!0),e.offset.click.top=o.offset.click.top,e.offset.click.left=o.offset.click.left,e.offset.parent.left-=o.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=o.offset.parent.top-e.offset.parent.top,o._trigger("toSortable",s),o.dropped=e.element,P.each(o.sortables,function(){this.refreshPositions()}),o.currentItem=o.element,e.fromOutside=o),e.currentItem&&(e._mouseDrag(s),i.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",s,e._uiHash(e)),e._mouseStop(s,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),i.helper.appendTo(o._parent),o._refreshOffsets(s),i.position=o._generatePosition(s,!0),o._trigger("fromSortable",s),o.dropped=!1,P.each(o.sortables,function(){this.refreshPositions()}))})}}),P.ui.plugin.add("draggable","cursor",{start:function(t,e,s){var i=P("body"),o=s.options;i.css("cursor")&&(o._cursor=i.css("cursor")),i.css("cursor",o.cursor)},stop:function(t,e,s){var i=s.options;i._cursor&&P("body").css("cursor",i._cursor)}}),P.ui.plugin.add("draggable","opacity",{start:function(t,e,s){var i=P(e.helper),o=s.options;i.css("opacity")&&(o._opacity=i.css("opacity")),i.css("opacity",o.opacity)},stop:function(t,e,s){var i=s.options;i._opacity&&P(e.helper).css("opacity",i._opacity)}}),P.ui.plugin.add("draggable","scroll",{start:function(t,e,s){s.scrollParentNotHidden||(s.scrollParentNotHidden=s.helper.scrollParent(!1)),s.scrollParentNotHidden[0]!==s.document[0]&&"HTML"!==s.scrollParentNotHidden[0].tagName&&(s.overflowOffset=s.scrollParentNotHidden.offset())},drag:function(t,e,s){var i=s.options,o=!1,n=s.scrollParentNotHidden[0],r=s.document[0];n!==r&&"HTML"!==n.tagName?(i.axis&&"x"===i.axis||(s.overflowOffset.top+n.offsetHeight-t.pageY<i.scrollSensitivity?n.scrollTop=o=n.scrollTop+i.scrollSpeed:t.pageY-s.overflowOffset.top<i.scrollSensitivity&&(n.scrollTop=o=n.scrollTop-i.scrollSpeed)),i.axis&&"y"===i.axis||(s.overflowOffset.left+n.offsetWidth-t.pageX<i.scrollSensitivity?n.scrollLeft=o=n.scrollLeft+i.scrollSpeed:t.pageX-s.overflowOffset.left<i.scrollSensitivity&&(n.scrollLeft=o=n.scrollLeft-i.scrollSpeed))):(i.axis&&"x"===i.axis||(t.pageY-P(r).scrollTop()<i.scrollSensitivity?o=P(r).scrollTop(P(r).scrollTop()-i.scrollSpeed):P(window).height()-(t.pageY-P(r).scrollTop())<i.scrollSensitivity&&(o=P(r).scrollTop(P(r).scrollTop()+i.scrollSpeed))),i.axis&&"y"===i.axis||(t.pageX-P(r).scrollLeft()<i.scrollSensitivity?o=P(r).scrollLeft(P(r).scrollLeft()-i.scrollSpeed):P(window).width()-(t.pageX-P(r).scrollLeft())<i.scrollSensitivity&&(o=P(r).scrollLeft(P(r).scrollLeft()+i.scrollSpeed)))),!1!==o&&P.ui.ddmanager&&!i.dropBehaviour&&P.ui.ddmanager.prepareOffsets(s,t)}}),P.ui.plugin.add("draggable","snap",{start:function(t,e,s){var i=s.options;s.snapElements=[],P(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var t=P(this),e=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e,s){var i,o,n,r,l,a,h,p,c,f,d=s.options,g=d.snapTolerance,u=e.offset.left,m=u+s.helperProportions.width,v=e.offset.top,_=v+s.helperProportions.height;for(c=s.snapElements.length-1;0<=c;c--)a=(l=s.snapElements[c].left-s.margins.left)+s.snapElements[c].width,p=(h=s.snapElements[c].top-s.margins.top)+s.snapElements[c].height,m<l-g||a+g<u||_<h-g||p+g<v||!P.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,P.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==d.snapMode&&(i=Math.abs(h-_)<=g,o=Math.abs(p-v)<=g,n=Math.abs(l-m)<=g,r=Math.abs(a-u)<=g,i&&(e.position.top=s._convertPositionTo("relative",{top:h-s.helperProportions.height,left:0}).top),o&&(e.position.top=s._convertPositionTo("relative",{top:p,left:0}).top),n&&(e.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),r&&(e.position.left=s._convertPositionTo("relative",{top:0,left:a}).left)),f=i||o||n||r,"outer"!==d.snapMode&&(i=Math.abs(h-v)<=g,o=Math.abs(p-_)<=g,n=Math.abs(l-u)<=g,r=Math.abs(a-m)<=g,i&&(e.position.top=s._convertPositionTo("relative",{top:h,left:0}).top),o&&(e.position.top=s._convertPositionTo("relative",{top:p-s.helperProportions.height,left:0}).top),n&&(e.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),r&&(e.position.left=s._convertPositionTo("relative",{top:0,left:a-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(i||o||n||r||f)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,P.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=i||o||n||r||f)}}),P.ui.plugin.add("draggable","stack",{start:function(t,e,s){var i,o=s.options,n=P.makeArray(P(o.stack)).sort(function(t,e){return(parseInt(P(t).css("zIndex"),10)||0)-(parseInt(P(e).css("zIndex"),10)||0)});n.length&&(i=parseInt(P(n[0]).css("zIndex"),10)||0,P(n).each(function(t){P(this).css("zIndex",i+t)}),this.css("zIndex",i+n.length))}}),P.ui.plugin.add("draggable","zIndex",{start:function(t,e,s){var i=P(e.helper),o=s.options;i.css("zIndex")&&(o._zIndex=i.css("zIndex")),i.css("zIndex",o.zIndex)},stop:function(t,e,s){var i=s.options;i._zIndex&&P(e.helper).css("zIndex",i._zIndex)}}),P.ui.draggable});/*!
 * jQuery UI Button 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/button/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./core","./widget"],t):t(jQuery)}(function(o){function n(){var t=o(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)}function a(t){var e=t.name,i=t.form,s=o([]);return e&&(e=e.replace(/'/g,"\\'"),s=i?o(i).find("[name='"+e+"'][type=radio]"):o("[name='"+e+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),s}var u,r="ui-button ui-widget ui-state-default ui-corner-all",l="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only";return o.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,n),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var e=this,i=this.options,t="checkbox"===this.type||"radio"===this.type,s=t?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(r).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===u&&o(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||o(this).removeClass(s)}).bind("click"+this.eventNamespace,function(t){i.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),t&&this.element.bind("change"+this.eventNamespace,function(){e.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;o(this).addClass("ui-state-active"),e.buttonElement.attr("aria-pressed","true");var t=e.element[0];a(t).not(t).map(function(){return o(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(i.disabled)return!1;o(this).addClass("ui-state-active"),u=this,e.document.one("mouseup",function(){u=null})}).bind("mouseup"+this.eventNamespace,function(){if(i.disabled)return!1;o(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(i.disabled)return!1;t.keyCode!==o.ui.keyCode.SPACE&&t.keyCode!==o.ui.keyCode.ENTER||o(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){o(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===o.ui.keyCode.SPACE&&o(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var t,e,i;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button","checkbox"===this.type||"radio"===this.type?(t=this.element.parents().last(),e="label[for='"+this.element.attr("id")+"']",this.buttonElement=t.find(e),this.buttonElement.length||(t=t.length?t.siblings():this.element.siblings(),this.buttonElement=t.filter(e),this.buttonElement.length||(this.buttonElement=t.find(e))),this.element.addClass("ui-helper-hidden-accessible"),(i=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(r+" ui-state-active "+l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(t,e){if(this._super(t,e),"disabled"===t)return this.widget().toggleClass("ui-state-disabled",!!e),this.element.prop("disabled",!!e),void(e&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")));this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?a(this.element[0]).each(function(){o(this).is(":checked")?o(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):o(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"!==this.type){var t=this.buttonElement.removeClass(l),e=o("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),i=this.options.icons,s=i.primary&&i.secondary,n=[];i.primary||i.secondary?(this.options.text&&n.push("ui-button-text-icon"+(s?"s":i.primary?"-primary":"-secondary")),i.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+i.primary+"'></span>"),i.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+i.secondary+"'></span>"),this.options.text||(n.push(s?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",o.trim(e)))):n.push("ui-button-text-only"),t.addClass(n.join(" "))}else this.options.label&&this.element.val(this.options.label)}}),o.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(t,e){"disabled"===t&&this.buttons.button("option",t,e),this._super(t,e)},refresh:function(){var t="rtl"===this.element.css("direction"),e=this.element.find(this.options.items),i=e.filter(":ui-button");e.not(":ui-button").button(),i.button("refresh"),this.buttons=e.map(function(){return o(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return o(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),o.ui.button});/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(I){return function(){I.ui=I.ui||{};var n,H,x=Math.max,T=Math.abs,L=Math.round,o=/left|center|right/,l=/top|center|bottom/,f=/[\+\-]\d+(\.[\d]+)?%?/,s=/^\w+/,h=/%$/,i=I.fn.position;function P(t,i,e){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?e/100:1)]}function D(t,i){return parseInt(I.css(t,i),10)||0}I.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,e=I("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=e.children()[0];return I("body").append(e),t=o.offsetWidth,e.css("overflow","scroll"),t===(i=o.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),e=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),o="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth;return{width:"scroll"===e||"auto"===e&&t.height<t.element[0].scrollHeight?I.position.scrollbarWidth():0,height:o?I.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=I(t||window),e=I.isWindow(i[0]),o=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:e,isDocument:o,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:e||o?i.width():i.outerWidth(),height:e||o?i.height():i.outerHeight()}}},I.fn.position=function(c){if(!c||!c.of)return i.apply(this,arguments);c=I.extend({},c);var d,a,g,u,m,t,w=I(c.of),W=I.position.getWithinInfo(c.within),v=I.position.getScrollInfo(W),y=(c.collision||"flip").split(" "),b={};return t=function(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:I.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}(w),w[0].preventDefault&&(c.at="left top"),a=t.width,g=t.height,u=t.offset,m=I.extend({},u),I.each(["my","at"],function(){var t,i,e=(c[this]||"").split(" ");1===e.length&&(e=o.test(e[0])?e.concat(["center"]):l.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=l.test(e[1])?e[1]:"center",t=f.exec(e[0]),i=f.exec(e[1]),b[this]=[t?t[0]:0,i?i[0]:0],c[this]=[s.exec(e[0])[0],s.exec(e[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===c.at[0]?m.left+=a:"center"===c.at[0]&&(m.left+=a/2),"bottom"===c.at[1]?m.top+=g:"center"===c.at[1]&&(m.top+=g/2),d=P(b.at,a,g),m.left+=d[0],m.top+=d[1],this.each(function(){var e,t,f=I(this),s=f.outerWidth(),h=f.outerHeight(),i=D(this,"marginLeft"),o=D(this,"marginTop"),n=s+i+D(this,"marginRight")+v.width,l=h+o+D(this,"marginBottom")+v.height,r=I.extend({},m),p=P(b.my,f.outerWidth(),f.outerHeight());"right"===c.my[0]?r.left-=s:"center"===c.my[0]&&(r.left-=s/2),"bottom"===c.my[1]?r.top-=h:"center"===c.my[1]&&(r.top-=h/2),r.left+=p[0],r.top+=p[1],H||(r.left=L(r.left),r.top=L(r.top)),e={marginLeft:i,marginTop:o},I.each(["left","top"],function(t,i){I.ui.position[y[t]]&&I.ui.position[y[t]][i](r,{targetWidth:a,targetHeight:g,elemWidth:s,elemHeight:h,collisionPosition:e,collisionWidth:n,collisionHeight:l,offset:[d[0]+p[0],d[1]+p[1]],my:c.my,at:c.at,within:W,elem:f})}),c.using&&(t=function(t){var i=u.left-r.left,e=i+a-s,o=u.top-r.top,n=o+g-h,l={target:{element:w,left:u.left,top:u.top,width:a,height:g},element:{element:f,left:r.left,top:r.top,width:s,height:h},horizontal:e<0?"left":0<i?"right":"center",vertical:n<0?"top":0<o?"bottom":"middle"};a<s&&T(i+e)<a&&(l.horizontal="center"),g<h&&T(o+n)<g&&(l.vertical="middle"),x(T(i),T(e))>x(T(o),T(n))?l.important="horizontal":l.important="vertical",c.using.call(this,t,l)}),f.offset(I.extend(r,{using:t}))})},I.ui.position={fit:{left:function(t,i){var e,o=i.within,n=o.isWindow?o.scrollLeft:o.offset.left,l=o.width,f=t.left-i.collisionPosition.marginLeft,s=n-f,h=f+i.collisionWidth-l-n;i.collisionWidth>l?0<s&&h<=0?(e=t.left+s+i.collisionWidth-l-n,t.left+=s-e):t.left=0<h&&s<=0?n:h<s?n+l-i.collisionWidth:n:0<s?t.left+=s:0<h?t.left-=h:t.left=x(t.left-f,t.left)},top:function(t,i){var e,o=i.within,n=o.isWindow?o.scrollTop:o.offset.top,l=i.within.height,f=t.top-i.collisionPosition.marginTop,s=n-f,h=f+i.collisionHeight-l-n;i.collisionHeight>l?0<s&&h<=0?(e=t.top+s+i.collisionHeight-l-n,t.top+=s-e):t.top=0<h&&s<=0?n:h<s?n+l-i.collisionHeight:n:0<s?t.top+=s:0<h?t.top-=h:t.top=x(t.top-f,t.top)}},flip:{left:function(t,i){var e,o,n=i.within,l=n.offset.left+n.scrollLeft,f=n.width,s=n.isWindow?n.scrollLeft:n.offset.left,h=t.left-i.collisionPosition.marginLeft,r=h-s,p=h+i.collisionWidth-f-s,c="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,a=-2*i.offset[0];r<0?((e=t.left+c+d+a+i.collisionWidth-f-l)<0||e<T(r))&&(t.left+=c+d+a):0<p&&(0<(o=t.left-i.collisionPosition.marginLeft+c+d+a-s)||T(o)<p)&&(t.left+=c+d+a)},top:function(t,i){var e,o,n=i.within,l=n.offset.top+n.scrollTop,f=n.height,s=n.isWindow?n.scrollTop:n.offset.top,h=t.top-i.collisionPosition.marginTop,r=h-s,p=h+i.collisionHeight-f-s,c="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,d="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,a=-2*i.offset[1];r<0?((o=t.top+c+d+a+i.collisionHeight-f-l)<0||o<T(r))&&(t.top+=c+d+a):0<p&&(0<(e=t.top-i.collisionPosition.marginTop+c+d+a-s)||T(e)<p)&&(t.top+=c+d+a)}},flipfit:{left:function(){I.ui.position.flip.left.apply(this,arguments),I.ui.position.fit.left.apply(this,arguments)},top:function(){I.ui.position.flip.top.apply(this,arguments),I.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,e,o,n,l=document.getElementsByTagName("body")[0],f=document.createElement("div");for(n in t=document.createElement(l?"div":"body"),e={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},l&&I.extend(e,{position:"absolute",left:"-1000px",top:"-1000px"}),e)t.style[n]=e[n];t.appendChild(f),(i=l||document.documentElement).insertBefore(t,i.firstChild),f.style.cssText="position: absolute; left: 10.7432222px;",o=I(f).offset().left,H=10<o&&o<11,t.innerHTML="",i.removeChild(t)}()}(),I.ui.position});/*!
 * jQuery UI Dialog 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/dialog/
 */
!function(i){"function"==typeof define&&define.amd?define(["jquery","./core","./widget","./button","./draggable","./mouse","./position","./resizable"],i):i(jQuery)}(function(h){return h.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(i){var t=h(this).css(i).offset().top;t<0&&h(this).css("top",i.top-t)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&h.fn.draggable&&this._makeDraggable(),this.options.resizable&&h.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var i=this.options.appendTo;return i&&(i.jquery||i.nodeType)?h(i):this.document.find(i||"body").eq(0)},_destroy:function(){var i,t=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(i=t.parent.children().eq(t.index)).length&&i[0]!==this.element[0]?i.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:h.noop,enable:h.noop,close:function(i){var t,e=this;if(this._isOpen&&!1!==this._trigger("beforeClose",i)){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{(t=this.document[0].activeElement)&&"body"!==t.nodeName.toLowerCase()&&h(t).blur()}catch(i){}this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",i)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(i,t){var e=!1,o=this.uiDialog.siblings(".ui-front:visible").map(function(){return+h(this).css("z-index")}).get(),s=Math.max.apply(null,o);return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),e=!0),e&&!t&&this._trigger("focus",i),e},open:function(){var i=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=h(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){i._focusTabbable(),i._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var i=this._focusedElement;(i=i||this.element.find("[autofocus]")).length||(i=this.element.find(":tabbable")),i.length||(i=this.uiDialogButtonPane.find(":tabbable")),i.length||(i=this.uiDialogTitlebarClose.filter(":tabbable")),i.length||(i=this.uiDialog),i.eq(0).focus()},_keepFocus:function(i){function t(){var i=this.document[0].activeElement;this.uiDialog[0]===i||h.contains(this.uiDialog[0],i)||this._focusTabbable()}i.preventDefault(),t.call(this),this._delay(t)},_createWrapper:function(){this.uiDialog=h("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(i){if(this.options.closeOnEscape&&!i.isDefaultPrevented()&&i.keyCode&&i.keyCode===h.ui.keyCode.ESCAPE)return i.preventDefault(),void this.close(i);if(i.keyCode===h.ui.keyCode.TAB&&!i.isDefaultPrevented()){var t=this.uiDialog.find(":tabbable"),e=t.filter(":first"),o=t.filter(":last");i.target!==o[0]&&i.target!==this.uiDialog[0]||i.shiftKey?i.target!==e[0]&&i.target!==this.uiDialog[0]||!i.shiftKey||(this._delay(function(){o.focus()}),i.preventDefault()):(this._delay(function(){e.focus()}),i.preventDefault())}},mousedown:function(i){this._moveToTop(i)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var i;this.uiDialogTitlebar=h("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(i){h(i.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=h("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(i){i.preventDefault(),this.close(i)}}),i=h("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(i),this.uiDialog.attr({"aria-labelledby":i.attr("id")})},_title:function(i){this.options.title||i.html("&#160;"),i.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=h("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=h("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var s=this,i=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),h.isEmptyObject(i)||h.isArray(i)&&!i.length?this.uiDialog.removeClass("ui-dialog-buttons"):(h.each(i,function(i,t){var e,o;t=h.isFunction(t)?{click:t,text:i}:t,t=h.extend({type:"button"},t),e=t.click,t.click=function(){e.apply(s.element[0],arguments)},o={icons:t.icons,text:t.showText},delete t.icons,delete t.showText,h("<button></button>",t).button(o).appendTo(s.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var s=this,n=this.options;function a(i){return{position:i.position,offset:i.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(i,t){h(this).addClass("ui-dialog-dragging"),s._blockFrames(),s._trigger("dragStart",i,a(t))},drag:function(i,t){s._trigger("drag",i,a(t))},stop:function(i,t){var e=t.offset.left-s.document.scrollLeft(),o=t.offset.top-s.document.scrollTop();n.position={my:"left top",at:"left"+(0<=e?"+":"")+e+" top"+(0<=o?"+":"")+o,of:s.window},h(this).removeClass("ui-dialog-dragging"),s._unblockFrames(),s._trigger("dragStop",i,a(t))}})},_makeResizable:function(){var n=this,a=this.options,i=a.resizable,t=this.uiDialog.css("position"),e="string"==typeof i?i:"n,e,s,w,se,sw,ne,nw";function l(i){return{originalPosition:i.originalPosition,originalSize:i.originalSize,position:i.position,size:i.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:a.maxWidth,maxHeight:a.maxHeight,minWidth:a.minWidth,minHeight:this._minHeight(),handles:e,start:function(i,t){h(this).addClass("ui-dialog-resizing"),n._blockFrames(),n._trigger("resizeStart",i,l(t))},resize:function(i,t){n._trigger("resize",i,l(t))},stop:function(i,t){var e=n.uiDialog.offset(),o=e.left-n.document.scrollLeft(),s=e.top-n.document.scrollTop();a.height=n.uiDialog.height(),a.width=n.uiDialog.width(),a.position={my:"left top",at:"left"+(0<=o?"+":"")+o+" top"+(0<=s?"+":"")+s,of:n.window},h(this).removeClass("ui-dialog-resizing"),n._unblockFrames(),n._trigger("resizeStop",i,l(t))}}).css("position",t)},_trackFocus:function(){this._on(this.widget(),{focusin:function(i){this._makeFocusTarget(),this._focusedElement=h(i.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var i=this._trackingInstances(),t=h.inArray(this,i);-1!==t&&i.splice(t,1)},_trackingInstances:function(){var i=this.document.data("ui-dialog-instances");return i||(i=[],this.document.data("ui-dialog-instances",i)),i},_minHeight:function(){var i=this.options;return"auto"===i.height?i.minHeight:Math.min(i.minHeight,i.height)},_position:function(){var i=this.uiDialog.is(":visible");i||this.uiDialog.show(),this.uiDialog.position(this.options.position),i||this.uiDialog.hide()},_setOptions:function(i){var e=this,o=!1,s={};h.each(i,function(i,t){e._setOption(i,t),i in e.sizeRelatedOptions&&(o=!0),i in e.resizableRelatedOptions&&(s[i]=t)}),o&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",s)},_setOption:function(i,t){var e,o,s=this.uiDialog;"dialogClass"===i&&s.removeClass(this.options.dialogClass).addClass(t),"disabled"!==i&&(this._super(i,t),"appendTo"===i&&this.uiDialog.appendTo(this._appendTo()),"buttons"===i&&this._createButtons(),"closeText"===i&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===i&&((e=s.is(":data(ui-draggable)"))&&!t&&s.draggable("destroy"),!e&&t&&this._makeDraggable()),"position"===i&&this._position(),"resizable"===i&&((o=s.is(":data(ui-resizable)"))&&!t&&s.resizable("destroy"),o&&"string"==typeof t&&s.resizable("option","handles",t),o||!1===t||this._makeResizable()),"title"===i&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var i,t,e,o=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),o.minWidth>o.width&&(o.width=o.minWidth),i=this.uiDialog.css({height:"auto",width:o.width}).outerHeight(),t=Math.max(0,o.minHeight-i),e="number"==typeof o.maxHeight?Math.max(0,o.maxHeight-i):"none","auto"===o.height?this.element.css({minHeight:t,maxHeight:e,height:"auto"}):this.element.height(Math.max(0,o.height-i)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var i=h(this);return h("<div>").css({position:"absolute",width:i.outerWidth(),height:i.outerHeight()}).appendTo(i.parent()).offset(i.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(i){return!!h(i.target).closest(".ui-dialog").length||!!h(i.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(i){t||this._allowInteraction(i)||(i.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=h("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var i=this.document.data("ui-dialog-overlays")-1;i?this.document.data("ui-dialog-overlays",i):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}})});(function($) {

    $(document).ready(function() {

        var referrer = document.referrer;
        var whitelistedUrls = ['login.php', '/sign-in-register/', '/create-new-password'];

        if((referrer.indexOf('prhladybird.staging.wpengine.com') > -1) || (referrer.indexOf('ladybirdeducation.co.uk') > -1)) {
            if (!$.inArray(referrer, whitelistedUrls)) {
                localStorage.setItem('pageReferrer', referrer);
            };
        }

        if (window.location.hash) {

            if (window.location.href.indexOf('/blog-authors') === -1) {
                window.location.href = window.location.origin + '/my-library';
            };

        }

        if (window.performance) {

            if (performance.navigation.type == 2) {

                /* Check for click on book in series page, and push state */

                if (window.location.pathname.indexOf('/books/') > -1) {
                 
                    if (('localStorage' in window) && window['localStorage'] !== null) {
                        prevData = localStorage.getItem('prevData');
                        if (prevData) {
                            $('.results').html(prevData);
                        };
                    };
                };
            }
        };

        var domain = 'ladybird-education.eu.auth0.com';
        var client = 'ZZ63o1A45zobQTprRhO7zX4RHUEtwRtg';

        var webAuth = new auth0.WebAuth({
            domain: domain,
            clientID: client,
            responseType: 'token',
            scope: 'openid profile',
            redirectUri: window.location.origin + '/login.php'
        }, function(err) {

        });

        webAuth.checkSession({}, function(err, authResult) {
            if (authResult && authResult.accessToken) {
                setSession(authResult);
            }
        });

        function setSession(authResult) {
            var expiresAt = JSON.stringify(
                authResult.expiresIn * 1000 + new Date().getTime()
            );
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);
        }

        // toggle parent class mobile nav

        $('.navbar-toggler').on('click', function() {
            $('.navbar-reveal').toggleClass('is-active');
            $('.navbar').toggleClass('is-active');
            // toggle aria expanded value
            $(this).attr('aria-expanded', function(i, attr) {
                return attr == 'true' ? 'false' : 'true'
            });
        });

        // Get button type when user unlocks book

        $('a.link-button').on('click', function(){

            if ($(this).find('.link-icon__text').html('Unlock Book')) {

                var dataButtonType = $(this).data('button-type');

                if (dataButtonType == 'unlock-book-header') {

                    var buttonType = 'Header';

                } else if (dataButtonType == 'unlock-book-page') {

                    var buttonType = 'Book page';

                } else {

                    var buttonType = 'Page';

                };

                localStorage.setItem('buttonType', buttonType);

            };

        });


        // activate nav dropdown menu on hover
        $('body').on('mouseenter mouseleave', '.dropdown', function(e) {
            var _d = $(e.target).closest('.dropdown');
            _d.addClass('show');
            setTimeout(function() {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
                $('[data-toggle="dropdown"]', _d).attr('aria-expanded', _d.is(':hover'));
            }, 300);
        });

        // init slick slider and options for home slider
        if ($('.home-slider').length > 0) {
            $('.home-slider').slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 2000,
                arrows: true,
                dots: true,
                nextArrow: '<button class="slick-arrow slick-next"><span class="icon icon-arrow-right" aria-hidden="true"></span></button>',
                prevArrow: '<button class="slick-arrow slick-prev"><span class="icon icon-arrow-left" aria-hidden="true"></span></button>',
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }]
            });

            // home slider image height match text content
            $(window).resize(function() {
                if ($(window).width() < 992) {
                    var slideTextHeight = $('.slide-text').height();

                    $('.slide-img').height(slideTextHeight);
                }

                // make slide text height 50% when text and image are stacked
                if ($(window).width() < 992) {
                    $('.slide-text').height('50%');
                } else {
                    $('.slide-text').height('100%');
                }
            });

            $(window).trigger('resize');
        }

        // init slick slider and options for books slider
        if ($('.books-slider').length > 0) {
            $('.books-slider').slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: true,
                dots: true,
                nextArrow: '<button class="slick-arrow slick-next"><span class="icon icon-arrow-right" aria-hidden="true"></span></button>',
                prevArrow: '<button class="slick-arrow slick-prev"><span class="icon icon-arrow-left" aria-hidden="true"></span></button>',
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }]
            });

            // toggle active class for like button
            $(document).on('click', '.slide-button', function() {
                $(this).toggleClass('is-active');
            });
        }

        // toggle active class for like button
        $(document).on('click', '.like-button', function() {
            $(this).toggleClass('is-active');
        });

        // init tooltips
        if ($('.info-tooltip').length > 0) {
            $(function() {
                $('[data-toggle="tooltip"]').tooltip();
            })
        }

        // smooth scroll anchor links
        $(document).on('click', 'a.scroll-down[href^="#"]', function(event) {
            event.preventDefault();
            if ($(window).width() > 768) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 110
                }, 500);
            } else {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - 80
                }, 500);
            }
        });

        $('#role').on('change', function() {
            if ($(this).val() == 'parent') {
                $('#your-school').removeAttr('required').parents('.field-wrapper').fadeOut('slow');
                $('#school-city').removeAttr('required').parents('.field-wrapper').fadeOut('slow');
                $('#ages legend').text('What age are your children?');
            } else {
                $('#your-school').attr('required', 'required').parents('.field-wrapper').fadeIn('slow');
                $('#school-city').attr('required', 'required').parents('.field-wrapper').fadeIn('slow');
                $('#ages legend').text('What age do you teach?');
            }
        })

        // TEMPORARY CODE TO ASTERIX FOR FRONT END
        $(function() {
            $('.field-wrapper:has(input[required="required"]) label').append(' <span class="required">*</span>');
            $('.field-wrapper:has(select[required="required"]) > label').append(' <span class="required">*</span>');
            $('.field-wrapper:has(textarea[required="required"]) label').append(' <span class="required">*</span>');
        })

        // Change filter expand button text when expanded
        $('.filter-expand-button').on('click', function() {
            var filterExpandButtonText = $('.filter-expand-button-text');
            $(this).toggleClass('is-open');
            if ($(this).hasClass('is-open')) {
                filterExpandButtonText.text('Close Filters');
            } else {
                filterExpandButtonText.text('More Filters');
            }
        });

        // Pause YouTube Video when closing modal
        $('.modal-close').on('click', function() {
            $(this).parents('.videoModel').find('video').trigger('pause');
        });

        $('.book-cta-filter-select').on('click', function() {
            $('.error-box').hide();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var level = $(this).data('level');
            $('.fav-book').fadeOut('slow').removeClass('visible');
            $('.fav-book').promise().done(function() {
                $('.fav-book').each(function() {
                    if (level == 'all') {
                        $(this).fadeIn('slow');
                        $(this).addClass('visible');
                    } else {
                        if ($(this).hasClass(level)) {
                            $(this).fadeIn('slow');
                            $(this).addClass('visible');
                        }

                    }
                })
            });
            $('.fav-book').promise().done(function() {
                if ($('.visible').length <= 0) {
                    $('.error-box').html('Sorry, you don\'t currently have any books of this level in your favourites').show();
                }
            })

        });


        /**
         * Ajax functions for distributors
         * @author IB
         */

        $('#country-select').on('change', function() {

            var country = $(this).val();
            var page = $('main');
            var book = page[0].id;
            var queryData = new FormData();

            queryData.append('country', country);
            queryData.append('book', book);
            queryData.append('action', 'get_distributors');

            $.ajax({
                url: ladybird.ajax_url,
                data: queryData,
                contentType: false,
                processData: false,
                type: 'post',
                success: function(data, textStatus, XMLHttpRequest) {
                    $('.country-address').html(data);
                }
            })
        })


        /**
         * Ajax functions for book series
         * @author IB
         */


        var size_li = $('.book-cta-load-more .book-cta-wrapper').size();
        var x = 8;
        $('.book-cta-load-more .book-cta-wrapper:lt(' + x + ')').show();

        $('#load-more-books-button').on('click', function(event) {
            event.preventDefault();
            bookFilterAjax('load-more');
        });

        $('.quick-filter').on('change', function() {
            bookFilterAjax('filter');
        });

        if ($('.input-checkbox-button').is(':checked')) {
            bookFilterAjax('filter');
        };

        $('#sort-select').on('change', function() {
            bookFilterAjax('filter');
        });

        $('#submit-main-filter').on('click', function() {
            bookFilterAjax('filter');
            $('html, body').animate({
                scrollTop: $(".results").offset().top - 110
            }, 500);
        });

        $('.link-reset').on('click', function() {
            $('input').prop('checked', false);
            bookFilterAjax('filter');
        });


        function bookFilterAjax(queryType) {

            var queryForm = $('#filters')[0];
            var queryData = new FormData(queryForm);
            var page = $('main');
            var pageID = page[0].id;
            var search = $('#search-input').val()

            queryData.append('posts_per_page', x + 4);
            queryData.append('page', pageID);
            queryData.append('action', 'filter_book_series');
            queryData.append('query_type', queryType);

            if (search) {
                queryData.append('s', search);
            }

            $.ajax({
                url: ladybird.ajax_url,
                data: queryData,
                contentType: false,
                processData: false,
                type: 'post',
                success: function(data, textStatus, XMLHttpRequest) {

                    if (queryType == 'load-more') {
                        $('.results').append(data);
                        size_li = $('.book-cta-load-more .book-cta-wrapper').size();
                        x = (x + 4 <= size_li) ? x + 4 : size_li;
                    } else {
                        $('.results').html(data);
                        if (('localStorage' in window) && window['localStorage'] !== null) {
                            localStorage.setItem('prevData', data);
                        };
                        size_li = $('.book-cta-load-more .book-cta-wrapper').size();
                    }
                    $('.book-cta-load-more .book-cta-wrapper:lt(' + x + ')').fadeIn();
                    if (x >= size_li) {
                        $('.load-more-button').fadeOut();
                    } else {
                        $('.load-more-button').fadeIn();
                    }
                }

            });
        }


        /**
         * Ajax functions for learning materials loadmore
         * @author IB
         */


        var size_li = $('.learning-mats-cta-load-more .learning-mats-cta-wrapper').size();
        var y = 4;

        if (y >= size_li) {
            $('#load-more-learning-mats-button').hide();
        }


        $('.learning-mats-cta-load-more .learning-mats-cta-wrapper:lt(' + y + ')').show();

        $('#load-more-learning-mats-button').on('click', function(event) {
            event.preventDefault();
            learningMatsAjax();
        });

        function learningMatsAjax() {

            var queryData = new FormData();
            var page = $('main');
            var pageID = page[0].id;

            queryData.append('posts_per_page', y + 4);
            queryData.append('page', pageID);
            queryData.append('action', 'load_more_learning_mats');

            $.ajax({
                url: ladybird.ajax_url,
                data: queryData,
                contentType: false,
                processData: false,
                type: 'post',
                success: function(data, textStatus, XMLHttpRequest) {
                    $('.learning-mats-results').append(data);
                    size_li = $('.learning-mats-cta-load-more .learning-mats-cta-wrapper').size();
                    y = (y + 4 <= size_li) ? y + 4 : size_li;

                    $('.learning-mats-cta-load-more .learning-mats-cta-wrapper:lt(' + y + ')').fadeIn();
                    if (y >= size_li) {
                        $('#load-more-learning-mats-button').fadeOut();
                    } else {
                        $('#load-more-learning-mats-button').fadeIn();
                    }

                }

            });
        }


        /**
         * Ajax functions for user login and registration
         * @author IB
         */


        $('#signup-button').on('click', function(event) {
            event.preventDefault();
            userAjax($(this).parents('form'), webAuth);
        });

        $('#signin-button').on('click', function(event) {
            event.preventDefault();
            userAjax($(this).parents('form'), webAuth);
        });

        $('#change-password').on('click', function(event) {
            event.preventDefault();
            userAjax($(this).parents('form'), webAuth);
        });

        $('#update-user').on('click', function(event) {
            event.preventDefault();
            userAjax($(this).parents('form'), webAuth);
        });

        $('#delete-user').on('click', function(event) {
            event.preventDefault();
            if ($(this).hasClass('ready')) {
                userAjax($(this).parents('form'), webAuth);
            } else {
                deleteUser(this);
            }
        });

        $('[data-action="cancel-delete-account"]').on('click', function(event){
            event.preventDefault();
            cancelDeleteUser();
        });

        function deleteUser(trigger) {
            $('.message--user-confirm-delete').removeClass('invisible');
            $(trigger).val('Yes, delete my account');
            $(trigger).addClass('ready');
            $('[data-action="cancel-delete-account"]').removeClass('invisible');
        }

        function cancelDeleteUser(trigger) {
            $('.message--user-confirm-delete').addClass('invisible');
            $('#delete-user').val('Delete');
            $('#delete-user').removeClass('ready');
            $('[data-action="cancel-delete-account"]').addClass('invisible');
        }

        $('#newsletter-signup').on('click', function(event) {
            event.preventDefault();
            userAjax($(this).parents('form'), webAuth);

        });

        $('#password_reset').on('click', function(event) {
            event.preventDefault();
            var form = $(this).parents('form')
            var queryData = new FormData(form[0]);
            action = $(form).attr('action');
            queryData.append('action', action)
            $.ajax({
                url: ladybird.ajax_url,
                data: queryData,
                contentType: false,
                processData: false,
                type: 'post',
                success: function(response, textStatus, XMLHttpRequest) {
                    window.location.href = response;
                }
            })
        });


        $('#resetpass-button').on('click', function(event) {
            event.preventDefault();
            var validatePassword = true;
            var passwordPattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$');

            $(form).find('.field-error-msg').html('');

            if (!$('#pass1').val().match(passwordPattern)) {
                $('.field-error-msg').html('Your password should be at least 8 characters long and include lower case (a), upper case  (A) and numbers.');
                validatePassword = false;
                $('#pass1, #pass2').addClass('invalid');
            }

            if ($('#pass1').val() != $('#pass2').val()) {
                $('.field-error-msg').html('Passwords don\'t match');
                validatePassword = false;
                $('#pass1, #pass2').addClass('invalid');
            }

            if (validatePassword) {
                var form = $(this).parents('form')
                var queryData = new FormData(form[0]);
                action = $(form).attr('action');
                queryData.append('action', action)
                $.ajax({
                    url: ladybird.ajax_url,
                    data: queryData,
                    contentType: false,
                    processData: false,
                    type: 'post',
                    success: function(response, textStatus, XMLHttpRequest) {
                        var result = JSON.parse(response);
                        if (result.url) {
                            window.location.href = result.url;
                        } else {
                            if (result.auth0Error) {
                                if (result.auth0Error == "invalid_body") {
                                    $(form).find('.field-error-msg').html("Please enter a valid email address");
                                }
                                if (result.auth0Error == "auth0_idp_error") {
                                    $(form).find('.field-error-msg').html("Your password should be at least 8 characters long and include lower case (a), upper case  (A) and numbers.");
                                }
                                if (result.auth0Error == "PasswordStrengthError: Password is too weak") {
                                    $(form).find('.field-error-msg').html('Your password should be at least 8 characters long and include lower case (a), upper case  (A) and numbers.');
                                }
                            }
                        }
                    }
                })
            }
        });




        function userAjax(form, webAuth) {

            var validate = true;
            var validatePassword = true;
            var auth0Error = true;
            var action = $(form).attr('action');
            var auth0 = true;
            var passwordPattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$');

            $('.update-message').hide();
            $('.newsletter-message').hide();
            $('.password-change-message').hide();
            $(form).find('p.field-error-msg').html('');

            $(form).find('input, select').each(function() {
                $(this).removeClass('invalid');
                $(this).siblings('.field-error-msg').html(' ');
                if ($(this).attr('required')) {
                    if (!$(this).val()) {
                        $(this).addClass('invalid');
                        $(this).siblings('.field-error-msg').html('Please fill in this field');
                        validate = false;
                    }

                    if ($(this).attr('name') === 'create-password' && !$(this).val().match(passwordPattern)) {
                        $(this).addClass('invalid');
                        $(this).siblings('.field-error-msg').html('Your password must be at least 8 characters long and include: lower case (a), upper case (A), and a number (e.g. 0-9).');
                        validate = false;
                        validatePassword = false;
                    }

                    if ($(this).attr('name') == 'new-password' || $(this).attr('name') == 'create-password') {
                        if ($(this).val() != $('#confirm-password').val()) {
                            $(this).addClass('invalid');
                            $(this).siblings('.field-error-msg').html('Passwords don\'t match');
                            validate = false;
                            validatePassword = false;
                        }
                    }
                }

            });
            if ($('.invalid')[0]) {
                $('html, body').animate({
                    scrollTop: $('.invalid').eq(0).offset().top - 150
                }, 500);
            }

            if (!validatePassword) {
                $('#confirm-password').addClass('invalid');
            }
            if (validate && validatePassword) {

                if (action == 'user_signin') {

                    auth0 = false;
                    localStorage.setItem('email', $('#email-address').val());
                    localStorage.setItem('password', $('#password').val());
                    localStorage.setItem('type', 'login');
                    webAuth.login({
                        realm: 'Username-Password-Authentication',
                        username: localStorage.email,
                        password: localStorage.password,
                    }, function(err, res) {
                        if (err) {

                            localStorage.removeItem('email');
                            localStorage.removeItem('password');
                            localStorage.removeItem('type');
                            localStorage.removeItem('referrer');

                            switch (err.code) {
                                case 'access_denied':
                                    $(form).find('p.field-error-msg').html('Username or password not found');
                                    break;
                                case 'unauthorized':
                                    $(form).find('p.field-error-msg').html('User has been blocked');
                                    break;
                                case 'password_leaked':
                                    $(form).find('p.field-error-msg').html('The password has been leaked, please reset it');
                                    break;
                                case 'invalid_user_password':
                                    $(form).find('p.field-error-msg').html('Username or password not found');
                                    break;
                            }
                        }
                    });
                }

                /* Newsletter on and off */

                if (action == 'newsletter_signup') {

                    /* get user email and connect to adestra to subscribe user via AJAX */

                    var email = $('#email-address-reg').val();

                    if ($('input.input-checkbox').prop('checked')) {

                        $.ajax({
                            url: 'https://www.ladybirdeducation.co.uk/wp-content/themes/ladybird/inc/adestra-proxy-subscribe.php',
                            data: 'email_5837=' + email,
                            type: 'post',
                            success: function(response) {
                            },
                            error: function(jqXHR, exception) {
                                var msg = '';
                                if (jqXHR.status === 0) {
                                    msg = 'Not connect.\n Verify Network.';
                                } else if (jqXHR.status == 404) {
                                    msg = 'Requested page not found. [404]';
                                } else if (jqXHR.status == 500) {
                                    msg = 'Internal Server Error [500].';
                                } else if (exception === 'parsererror') {
                                    msg = 'Requested JSON parse failed.';
                                } else if (exception === 'timeout') {
                                    msg = 'Time out error.';
                                } else if (exception === 'abort') {
                                    msg = 'Ajax request aborted.';
                                } else {
                                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                                }
                            }
                        });

                    } else {

                        // If newsletter box is not ticked

                        /* Unsubscribe user from Adestra via ajax */

                        $.ajax({
                            url: 'https://www.ladybirdeducation.co.uk/wp-content/themes/ladybird/inc/adestra-proxy-unsubscribe.php',
                            data: 'email_5938=' + email,
                            type: 'post',
                            success: function(response) {
                            },
                            error: function(jqXHR, exception) {
                                var msg = '';
                                if (jqXHR.status === 0) {
                                    msg = 'Not connect.\n Verify Network.';
                                } else if (jqXHR.status == 404) {
                                    msg = 'Requested page not found. [404]';
                                } else if (jqXHR.status == 500) {
                                    msg = 'Internal Server Error [500].';
                                } else if (exception === 'parsererror') {
                                    msg = 'Requested JSON parse failed.';
                                } else if (exception === 'timeout') {
                                    msg = 'Time out error.';
                                } else if (exception === 'abort') {
                                    msg = 'Ajax request aborted.';
                                } else {
                                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                                }
                            }
                        });

                    };

                };

                /* End newsletter on and off */

                if (action == 'user_signup') {
                    auth0 = false;
                    var email = $('#email-address-reg').val();
                    var password = $('#create-password').val();

                    webAuth.signup({
                        connection: 'Username-Password-Authentication',
                        email: email,
                        password: password,
                    }, function(err, res) {
                        if (err) {

                            switch (err.code) {
                                case 'user_exists':
                                    $(form).find('p.field-error-msg').html('The user you are attempting to sign up has already signed up');
                                    break;
                                case 'unauthorized':
                                    $(form).find('p.field-error-msg').html('If you cannot sign up for this application. May have to do with the violation of a specific rule');
                                    break;
                                case 'username_exists':
                                    $(form).find('p.field-error-msg').html('The username you are attempting to sign up with is already in use');
                                    break;
                                case 'invalid_password':
                                    $(form).find('p.field-error-msg').html('Your password must be at least 8 characters long and include: lower case (a), upper case (A), and a number (e.g. 0-9).');
                                    break;
                                case 'password_dictionary_error':
                                    $(form).find('p.field-error-msg').html('The chosen password is too common');
                                    break;
                                case 'password_no_user_info_error':
                                    $(form).find('p.field-error-msg').html('The chosen password is based on user information');
                                    break;
                                case 'invalid_user_password':
                                    $(form).find('p.field-error-msg').html('Your password must be at least 8 characters long and include: lower case (a), upper case (A), and a number (e.g. 0-9).');
                                    break;
                                case 'invalid email address':
                                    $(form).find('p.field-error-msg').html('The email address is invalid');
                                    break;
                            }

                        } else {
                            var queryData = new FormData(form[0]);
                            queryData.append('action', action);

                            $.ajax({
                                url: ladybird.ajax_url,
                                data: queryData,
                                contentType: false,
                                processData: false,
                                type: 'post',
                                success: function(response, textStatus, XMLHttpRequest) {

                                    var result = JSON.parse(response);
                                    if (result.validation_errors) {
                                        result.validation_errors.forEach(function(error) {
                                            $('#' + error).addClass('invalid');
                                            if (error == 'match-password') {
                                                $('#confirm-password').addClass('invalid');
                                                $('#create-password').addClass('invalid');
                                                $('#create-password').siblings('.field-error-msg').html('Passwords don\'t match');
                                            } else {
                                                $('#' + error).siblings('.field-error-msg').html('Please fill in this field');
                                            }
                                        });
                                    }
                                    if (result.wp_error) {
                                        if (result.wp_error == 'invalid_email') {
                                            $(form).find('p.field-error-msg').html('Email not found, please use the form to register');
                                        }
                                        if (result.wp_error == 'incorrect_password') {
                                            $(form).find('p.field-error-msg').html('The password is incorrect, if you have forgotten your password, click the <a class="forgot-password" href="#">link</a>.');
                                        }
                                        if (result.wp_error == 'existing_user_login') {
                                            $(form).find('p.field-error-msg').html('The email is already registered. If you need to reset your password, click the <a class="forgot-password" href="#">link</a>.');
                                        }
                                    }

                                    /* Adestra signup */

                                    if ((!result.wp_error) && (result.user_newsletter_signup == 1)) {

                                        /* Send user data to Adestra via PHP proxy */

                                        $.ajax({
                                            url: 'https://www.ladybirdeducation.co.uk/wp-content/themes/ladybird/inc/adestra-proxy-subscribe.php',
                                            data: 'email_5837=' + email,
                                            type: 'post',
                                            success: function(response) {
                                            },
                                            error: function(jqXHR, textStatus, errorThrown) {
                                                console.log(jqXHR);
                                            }
                                        });

                                    }

                                    if (result.success_signup) {
                                        webAuth.login({
                                            realm: 'Username-Password-Authentication',
                                            username: email,
                                            password: password,
                                        }, function(err, res) {
                                            if (err) {

                                                auth0 = false;
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    });
                }

                if (auth0) {
                    var queryData = new FormData(form[0]);
                    queryData.append('action', action);
                    queryData.append('access_token', localStorage.access_token);

                    $.ajax({
                        url: ladybird.ajax_url,
                        data: queryData,
                        contentType: false,
                        processData: false,
                        type: 'post',
                        success: function(response, textStatus, XMLHttpRequest) {
                            console.log(response);
                            var result = JSON.parse(response);
                            if (result.validation_errors) {
                                result.validation_errors.forEach(function(error) {
                                    $('#' + error).addClass('invalid');
                                    if (error == 'match-password') {
                                        $('#confirm-password').addClass('invalid');
                                        $('#create-password').addClass('invalid');
                                        $('#create-password').siblings('.field-error-msg').html('Passwords don\'t match');
                                    } else {
                                        $('#' + error).siblings('.field-error-msg').html('Please fill in this field');
                                    }
                                });
                            }

                            if (result.auth0Error) {
                                if (result.auth0Error == "invalid_body") {
                                    $(form).find('p.field-error-msg').html("Please enter a valid email address");
                                }
                                if (result.auth0Error == "auth0_idp_error") {
                                    $(form).find('p.field-error-msg').html("The email address is already assigned to an account.");
                                }
                                if (result.auth0Error == "Password is too weak") {
                                    $(form).find('p.field-error-msg').html('Your password must be at least 8 characters long and include: lower case (a), upper case (A), and a number (e.g. 0-9).');
                                }
                            } else {

                                if (result.wp_error) {
                                    if (result.wp_error == 'invalid_email') {
                                        $(form).find('p.field-error-msg').html('Email not found, please use the form to register');
                                    }
                                    if (result.wp_error == 'incorrect_password') {
                                        $(form).find('p.field-error-msg').html('The password is incorrect, if you have forgotten your password, click the <a class="forgot-password" href="#">link</a>.');
                                    }
                                    if (result.wp_error == 'existing_user_login') {
                                        $(form).find('p.field-error-msg').html('The email is already registered. If you need to reset your password, click the <a class="forgot-password" href="#">link</a>.');
                                    }
                                }
                            }
                            if (result.success_signup) {
                                webAuth.login({
                                    realm: 'Username-Password-Authentication',
                                    username: email,
                                    password: password,
                                }, function(err, res) {
                                    if (err) {
                                        auth0 = false;

                                    }
                                });
                            }
                            if (result.success_login) {
                                window.location.href = window.location.origin + '/my-library/';
                            }
                            if (result.success_update_details) {
                                $('.update-message').text(result.success_update_details).fadeIn('slow');
                            }
                            if (result.newsletter) {
                                $('.newsletter-message').text(result.newsletter).fadeIn('slow');
                            }
                            if (result.password_change_success) {
                                $('.password-change-message').text(result.password_change_success).fadeIn('slow');
                            }
                            if (result.password_change_error) {
                                $(form).find('p.field-error-msg').html('Password entered is incorrect');
                            }

                            if (result.success_delete_details) {
                                $('.message--user-confirm-delete').addClass('invisible');
                                $('.message--confirm-deletion').removeClass('invisible');
                                $('.delete-account .field-wrapper').addClass('invisible');
                                window.location.href="/account-deleted";
                            }
                        }
                    });
                }

            }
        }


        /**
         * Ajax functions for series videos
         * @author IB
         */


        var size_li = $('.videos-cta-load-more .videos-cta-wrapper').size();
        var z = 3;
        $('.videos-cta-load-more .videos-cta-wrapper:lt(' + z + ')').show();

        if (z >= size_li) {
            $('#load-more-videos-button').hide();
        }

        $('#load-more-videos-button').on('click', function(event) {
            event.preventDefault();
            videosFilterAjax('load-more');
        });

        $('#lang-select').on('change', function() {
            videosFilterAjax('filter');
        });

        function videosFilterAjax(queryType) {

            var queryData = new FormData();
            var page = $('main');
            var pageID = page[0].id;

            queryData.append('posts_per_page', z + 3);
            queryData.append('page', pageID);
            queryData.append('action', 'filter_videos');
            if ($('#lang-select').val()) {
                queryData.append('lang', $('#lang-select').val());
            }
            queryData.append('query_type', queryType);


            $.ajax({
                url: ladybird.ajax_url,
                data: queryData,
                contentType: false,
                processData: false,
                type: 'post',
                success: function(data, textStatus, XMLHttpRequest) {

                    if (queryType == 'load-more') {
                        $('.video-results').append(data);
                        size_li = $('.videos-cta-load-more .videos-cta-wrapper').size();
                        z = (z + 3 <= size_li) ? z + 3 : size_li;
                    } else {
                        $('.video-results').html(data);
                        size_li = $('.videos-cta-load-more .videos-cta-wrapper').size();
                    }
                    $('.videos-cta-load-more .videos-cta-wrapper:lt(' + z + ')').fadeIn();
                    if (z >= size_li) {
                        $('#load-more-videos-button').fadeOut();
                    } else {
                        $('#load-more-videos-button').fadeIn();
                    }



                }

            });
        }

        /**
         * Ajax functions for liking books
         * @author IB
         */


        $(document).on('click', '.like-button', function() {
            likeBookAjax(this);

        });

        $(document).on('click', '.slide-button', function() {
            likeBookAjax(this);
        });

        function likeBookAjax(book) {
            var queryData = new FormData();
            var liked = false;
            var bookID = $(book).data('book');
            if ($(book).hasClass('is-active')) {
                liked = true;
            } else {
                var parentBook = $(book).parents('.fav-book');
                if ($(parentBook).hasClass('featured')) {
                    $(parentBook).removeClass('fav-book').fadeOut('slow');
                } else {
                    $(parentBook).addClass('fav-book').fadeIn('slow');
                }
            }

            queryData.append('action', 'update_liked_books');
            queryData.append('status', liked);
            queryData.append('book_id', bookID);

            $.ajax({
                url: ladybird.ajax_url,
                data: queryData,
                contentType: false,
                processData: false,
                type: 'post',
                success: function(response, textStatus, XMLHttpRequest) {

                }
            });

        }

        /**
         * Ajax functions for logging out
         * @author IB
         */

        $('.logout').on('click', function(event) {
            event.preventDefault();
            logoutAjax();
        });

        function logoutAjax() {

            var queryData = new FormData();
            queryData.append('action', 'logout');

            $.ajax({
                url: ladybird.ajax_url,
                data: queryData,
                contentType: false,
                processData: false,
                type: 'post',
                success: function(response, textStatus, XMLHttpRequest) {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('id_token');
                    localStorage.removeItem('expires_at');
                    webAuth.logout({
                        returnTo: window.location.origin,
                        clientID: client,
                    });
                }
            });

        }

        /**
         * Ajax functions for unlocking books
         * @author IB
         */


        $('.modal').on('keyup', '.enter-word', function() {
            if ($(this).val().length > 0) {
                $('.unlock-book-button').fadeIn('slow');
            } else {
                $('.unlock-book-button').fadeOut('slow');
            }
        })

        $('.modal').on('click', '.unlock-book-button', function(event) {
            event.preventDefault();
            unlockBookAjax($(this).parents('form'));
        });

        $('.modal').on('click', '#find-book', function(event) {
            event.preventDefault();
            findBookAjax($(this).parents('form'));
        });

        function findBookAjax(form) {

            var validate = true;

            $(form).find('input').each(function() {
                $(this).removeClass('invalid');
                $(this).siblings('.field-error-msg').html(' ');
                if ($(this).attr('required')) {
                    if (!$(this).val()) {
                        $(this).addClass('invalid');
                        $(this).siblings('.field-error-msg').html('Please fill in this field');
                        validate = false;
                    }

                }

            })

            if (validate) {

                var action = $(form).attr('action');
                var data = new FormData(form[0]);
                data.append('action', action);

                $.ajax({
                    url: ladybird.ajax_url,
                    data: data,
                    contentType: false,
                    processData: false,
                    type: 'post',
                    success: function(response, textStatus, XMLHttpRequest) {

                        $('.modal').html(response);
                    }
                });
            }
        }

        function unlockBookAjax(form) {

            var validate = true;

            if (validate) {

                var action = $(form).attr('action');
                var data = new FormData(form[0]);
                data.append('action', action);

                $.ajax({
                    url: ladybird.ajax_url,
                    data: data,
                    contentType: false,
                    processData: false,
                    type: 'post',
                    success: function(response, textStatus, XMLHttpRequest) {
                        var result = JSON.parse(response);

                        if (result.error == 'empty_fields') {
                            $('#enter-code').addClass('invalid');
                            $('.field-error-msg').text('Please fill in this field');
                            validate = false;

                        }
                        if (result.error == 'not_logged') {
                            document.location.href = "/sign-in-register/";
                        }

                        if (result.error == 'already_unlocked') {
                            $('.field-error-msg').text('This book is already in your library');
                        }

                        if (result.error == 'book_not_available') {
                            $('.field-error-msg').text('Code not recognised');
                        }

                        if (result.success == 'true') {

                            var buttonType = localStorage.getItem('buttonType');

                            $('.unlock-step-word').fadeOut('slow');
                            $('.unlock-step-word').promise().done(function() {

                                var selector = '.unlock-step-unlocked';
                                if(result.sample === true){
                                    selector = selector+'-sample';
                                } else {
                                    selector = selector+'-real';
                                }

                                $(selector).fadeIn('slow');
                                /* Track unlocking */
                                var unlockedBook = $(selector+' h2.section-title').data('title');
                                ga('send', {
                                  hitType: 'event',
                                  eventCategory: 'Unlock book',
                                  eventAction: unlockedBook,
                                  eventLabel: buttonType,
                                });
                            })
                        }
                    }
                });
            }
        }

        /**
         * Functions for resetting password
         * @author IB
         */

        $('body').on('click', '.forgot-password', function(event) {
            event.preventDefault();
            $('.sign-in').fadeOut('slow');
            $('.sign-in').promise().done(function() {
                $('.password-reset').fadeIn('slow');
            })
        })

        $('body').on('click', '.return-to-login', function(event) {
            event.preventDefault();
            $('.password-reset').fadeOut('slow');
            $('.password-reset').promise().done(function() {
                $('.sign-in').fadeIn('slow');
            })
        })

    })


    if (localStorage.email && localStorage.password) {
        var queryData = new FormData();
        queryData.append('action', 'user_signin');
        queryData.append('email-address', localStorage.email);
        queryData.append('password', localStorage.password);
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('type');

        $.ajax({
            url: ladybird.ajax_url,
            data: queryData,
            contentType: false,
            processData: false,
            type: 'post',
            success: function(response, textStatus, XMLHttpRequest) {

                if (response) {
                    var result = JSON.parse(response);
                    if (result.validation_errors) {
                        result.validation_errors.forEach(function(error) {
                            $('#' + error).addClass('invalid');
                            if (error == 'match-password') {
                                $('#confirm-password').addClass('invalid');
                                $('#create-password').addClass('invalid');
                                $('#create-password').siblings('.field-error-msg').html('Passwords don\'t match');
                            } else {
                                $('#' + error).siblings('.field-error-msg').html('Please fill in this field');
                            }
                        });
                    }
                    if (result.wp_error) {

                        if (result.wp_error == 'invalid_email') {
                            $(form).find('p.field-error-msg').html('Email not found, please use the form to register');
                        }
                        if (result.wp_error == 'incorrect_password') {
                            $(form).find('p.field-error-msg').html('The password is incorrect, if you have forgotten your password, click the <a class="forgot-password" href="#">link</a>.');
                        }
                        if (result.wp_error == 'existing_user_login') {
                            $(form).find('p.field-error-msg').html('The email is already registered. If you need to reset your password, click the <a class="forgot-password" href="#">link</a>.');
                        }
                    }
                    if (result.success_signup) {
                        webAuth.login({
                            realm: 'Username-Password-Authentication',
                            username: email,
                            password: password,
                        }, function(err, res) {
                            if (err) {
                                auth0 = false;
                            }
                        });
                    }
                    if (result.success_login) {

                        if (localStorage.getItem('pageReferrer')) {

                            window.location.href = localStorage.getItem('pageReferrer');

                        } else {

                            window.location.href = window.location.origin + '/my-library/';

                        };

                        
                    }
                    if (result.success_update_details) {
                        $('.update-message').text(result.success_update_details).fadeIn('slow');
                    }
                    if (result.newsletter) {
                        $('.newsletter-message').text(result.newsletter).fadeIn('slow');
                    }
                    if (result.password_change_success) {
                        $('.password-change-message').text(result.password_change_success).fadeIn('slow');
                    }
                    if (result.password_change_error) {
                        $(form).find('p.field-error-msg').html('Password entered is incorrect');
                    }

                } else {
                    window.location.href = window.location.origin + '/my-library/';
                }
            }
        });
    }

    /** Pull auth0 ID from auth0
     * Set a time out to allow time for auth0 to login
     */

    setTimeout(function() {
        data = new FormData();
        data.append('action', 'set_user_id');
        data.append('access', localStorage.access_token)

        $.ajax({
            url: ladybird.ajax_url,
            data: data,
            contentType: false,
            processData: false,
            type: 'post',
            success: function(response, textStatus, XMLHttpRequest) {

            }
        })
    }, 750);

    /* Testing bootstrap page open on tab */


    $('.post-grid-item-poster').click(function(){
        var href = $(this).data('href');
        window.location.href = href;
    });

})(jQuery);/* v 3.4.11
author http://codecanyon.net/user/creativeinteractivemedia/portfolio?ref=creativeinteractivemedia
*/
var FLIPBOOK=FLIPBOOK||{};!function(k,w,v,a){k.fn.flipBook=function(e){return new FLIPBOOK.Main(e,this)},k.fn.swipeBook=function(e){return e.viewMode="swipe",new FLIPBOOK.Main(e,this)},k.fn.flipBook.options={name:"",pages:[],tableOfContent:[],tableOfContentCloseOnClick:!1,deeplinkingEnabled:!1,deeplinkingPrefix:"",assets:{preloader:"images/preloader.jpg",overlay:"images/overlay.png",flipMp3:"mp3/turnPage.mp3",spinner:"images/spinner.gif"},pdfUrl:null,pdfBrowserViewerIfMobile:!1,pdfBrowserViewerFullscreen:!0,pdfBrowserViewerFullscreenTarget:"_blank",pdfPageScale:2,htmlLayer:!0,rightToLeft:!1,startPage:0,sound:!0,backgroundColor:"rgb(81, 85, 88)",backgroundImage:"",backgroundPattern:"",backgroundTransparent:!1,pageWidth:null,pageHeight:null,thumbSize:130,thumbQuality:1,loadAllPages:!1,loadPagesF:2,loadPagesB:1,currentPage:{enabled:!0,title:"Current page"},btnNext:{enabled:!0,title:"Next page",icon:"fa-angle-right",icon2:"navigate_next"},btnLast:{enabled:!1,title:"Last page",icon:"fa-angle-double-right",icon2:"last_page"},btnPrev:{enabled:!0,title:"Previous page",icon:"fa-angle-left",icon2:"navigate_before"},btnFirst:{enabled:!1,title:"First page",icon:"fa-angle-double-left",icon2:"first_page"},btnZoomIn:{enabled:!0,title:"Zoom in",icon:"fa-plus",icon2:"zoom_in"},btnZoomOut:{enabled:!0,title:"Zoom out",icon:"fa-minus",icon2:"zoom_out"},btnToc:{enabled:!0,title:"Table of content",icon:"fa-list-ol",icon2:"toc"},btnThumbs:{enabled:!0,title:"Pages",icon:"fa-th-large",icon2:"view_comfy"},btnShare:{enabled:!0,title:"Share",icon:"fa-link",icon2:"share"},btnDownloadPages:{enabled:!0,title:"Download pages",icon:"fa-download",icon2:"file_download",url:"images/pages.zip",name:"allPages.zip"},btnDownloadPdf:{forceDownload:!1,enabled:!0,title:"Download PDF",icon:"fa-file",icon2:"picture_as_pdf",url:null,openInNewWindow:!0,name:"allPages.pdf"},btnSound:{enabled:!0,title:"Volume",icon:"fa-volume-up",iconAlt:"fa-volume-off",icon2:"volume_up"},btnExpand:{enabled:!0,title:"Toggle fullscreen",icon:"fa-expand",icon2:"fullscreen",iconAlt:"fa-compress",iconAlt2:"fullscreen_exit"},btnSlideshow:{enabled:!1,title:"Toggle slideshow",icon:"fa-play",iconAlt:"fa-pause"},btnPrint:{enabled:!0,title:"Print",icon:"fa-print",icon2:"print"},btnAutoplay:{enabled:!0,title:"Autoplay",icon:"fa-play",iconAlt:"fa-pause"},btnSearch:{enabled:!1,title:"Search",icon:"fas fa-search",icon2:"search"},btnBookmark:{enabled:!1,title:"Bookmark",icon:"fas fa-bookmark",icon2:"fas fa-bookmark"},btnSelect:{enabled:!1,title:"Select tool",icon:"fas fa-i-cursor"},autoplayOnStart:!1,autoplayInterval:3e3,btnTocIfMobile:!0,btnThumbsIfMobile:!0,btnShareIfMobile:!1,btnDownloadPagesIfMobile:!0,btnDownloadPdfIfMobile:!0,btnSoundIfMobile:!1,btnExpandIfMobile:!0,btnPrintIfMobile:!1,sideNavigationButtons:!0,hideMenu:!1,google_plus:{enabled:!0,url:null},twitter:{enabled:!0,url:null,description:null},facebook:{enabled:!0,load_sdk:!0,url:null,app_id:null,title:null,caption:null,description:null,image:null},pinterest:{enabled:!0,url:null,image:null,description:null},email:{enabled:!0,title:null,description:null},pdf:{annotationLayer:!1},pageTextureSize:2048,minPageTextureSize:512,viewMode:"webgl",singlePageMode:!1,singlePageModeIfMobile:!1,zoomMin:.85,zoomSize:null,zoomStep:2,wheelDisabled:!0,arrowsDisabled:!0,responsiveView:!0,responsiveViewTreshold:768,minPixelRatio:1,skin:"light",pageFlipDuration:1,contentOnStart:!1,thumbnailsOnStart:!1,sideMenuOverBook:!0,lightBox:!1,lightBoxOpened:!1,lightBoxFullscreen:!1,lightboxCloseOnClick:!1,lightboxResetOnOpen:!0,lightboxBackground:null,lightboxStartPage:null,lightboxMarginV:"0",lightboxMarginH:"0",lightboxCSS:"",lightboxPreload:!1,pan:0,panMax:10,panMax2:2,panMin:-10,panMin2:-2,tilt:0,tiltMax:0,tiltMax2:0,tiltMin:-20,tiltMin2:-5,rotateCameraOnMouseMove:!1,rotateCameraOnMouseDrag:!0,lights:!0,lightColor:16777215,lightPositionX:0,lightPositionZ:1400,lightPositionY:350,lightIntensity:.6,shadows:!0,shadowMapSize:1024,shadowOpacity:.2,shadowDistance:15,pageRoughness:1,pageMetalness:0,pageHardness:2,coverHardness:2,pageSegmentsW:5,pageSegmentsH:1,pageMiddleShadowSize:2,pageMiddleShadowColorL:"#999999",pageMiddleShadowColorR:"#777777",antialias:!1,menuMargin:0,menuPadding:0,menuAlignHorizontal:"center",menuShadow:"",menuBackground:"",menuOverBook:!1,btnSize:16,btnRadius:4,btnMargin:4,btnPaddingV:10,btnPaddingH:10,btnShadow:"",btnTextShadow:"",btnBorder:"",btnColor:"",btnColorHover:"",btnBackground:"",btnBackgroundHover:"",sideBtnSize:30,sideBtnRadius:0,sideBtnMargin:0,sideBtnPaddingV:5,sideBtnPaddingH:5,sideBtnShadow:"",sideBtnTextShadow:"",sideBtnBorder:"",sideBtnColor:"#FFF",sideBtnBackground:"rgba(0,0,0,.3)",currentPagePositionV:"top",currentPagePositionH:"left",currentPageMarginV:5,currentPageMarginH:5,closeBtnSize:20,closeBtnRadius:0,closeBtnMargin:0,closeBtnPadding:10,closeBtnTextShadow:"",closeBtnColor:"#FFF",closeBtnBackground:"rgba(0,0,0,.3)",closeBtnBorder:"",preloaderText:"",fillPreloader:{enabled:!1,imgEmpty:"images/logo_light.png",imgFull:"images/logo_dark.png"},logoImg:"",logoUrl:"",logoCSS:"position:absolute;",logoHideOnMobile:!1,printMenu:!0,downloadMenu:!0,backCover:!0,textLayer:!1,strings:{print:"Print",printLeftPage:"Print left page",printRightPage:"Print right page",printCurrentPage:"Print current page",printAllPages:"Print all pages",download:"Download",downloadLeftPage:"Download left page",downloadRightPage:"Download right page",downloadCurrentPage:"Download current page",downloadAllPages:"Download all pages",bookmarks:"Bookmarks",bookmarkLeftPage:"Bookmark left page",bookmarkRightPage:"Bookmark right page",bookmarkCurrentPage:"Bookmark current page",search:"Search",findInDocument:"Find in document",pagesFoundContaining:"pages found containing",thumbnails:"Thumbnails",tableOfContent:"Table of content",share:"Share",pressEscToClose:"Press ESC to close"},mobile:{}},FLIPBOOK.Main=function(e,t){var o=this;this.elem=t,this.$elem=k(t),this.$body=k("body"),this.$window=k(w),this.bodyHasVerticalScrollbar=function(){return o.$body.height()>o.$window.height()},this.isZoomed=function(){return 1<this.zoom},this.options={};this.model={_events:{},on:function(e,t){this._events[e]||(this._events[e]=[]),this._events[e].push(t)},off:function(e,t){if(this._events[e]){var o=this._events[e].indexOf(t);-1<o&&this._events[e].splice(o,1)}},trigger:function(e){if(this._events[e]){var t=0,o=this._events[e].length;if(o)for(;t<o;t++)this._events[e][t].apply(this,[].slice.call(arguments,1))}}};var n,s,a,r=v.createElement("div").style,l=function(){for(var e="t,webkitT,MozT,msT,OT".split(","),t=0,o=e.length;t<o;t++)if(e[t]+"ransform"in r)return e[t].substr(0,e[t].length-1);return!1}(),p=/android/gi.test(navigator.appVersion),d=/iphone|ipad/gi.test(navigator.appVersion),c=(n="perspective",(""===l?n:(n=n.charAt(0).toUpperCase()+n.substr(1),l+n))in r);if(this.msie=w.navigator.userAgent.indexOf("MSIE "),o.isAndroid=p,o.has3d=c,o.hasWebGl=function(e){if(w.WebGLRenderingContext){for(var t=v.createElement("canvas"),o=["webgl","experimental-webgl","moz-webgl","webkit-3d"],i=!1,n=0;n<4;n++)try{if((i=t.getContext(o[n]))&&"function"==typeof i.getParameter)return!e||{name:o[n],gl:i}}catch(e){}return!1}return!1}(),o.thumbsShowing=!1,o.tocShowing=!1,o.menuShowing=!0,o.fullscreenActive=!1,o.model.on("toolSelect",function(){o.bookLayer.removeClass("flipbook-move"),o.btnSelect&&o.btnSelect.addClass("flipbook-btn-active")}),o.model.on("toolMove",function(){o.bookLayer.addClass("flipbook-move"),o.btnSelect&&o.btnSelect.removeClass("flipbook-btn-active")}),o.options=k.extend({},k.fn.flipBook.options,e),o.options.isMobile=k.browser.mobile||d||p,o.options.isMobile)for(var h in o.options.mobile)o.options[h]=o.options.mobile[h];if(this.strings=this.options.strings,o.options.pageShininess=o.options.pageShininess/2,o.s=0,e.lightBox&&(k(this).bind("lightboxLoadingStarted",function(){}),k(this).bind("lightboxOpened",function(){})),k("head").append("<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />"),o.options.isMobile&&(o.options.singlePageMode=!!o.options.singlePageModeIfMobile||o.options.singlePageMode,o.options.viewModeMobile&&(o.options.viewMode=o.options.viewModeMobile),o.options.pageTextureSizeMobile&&(o.options.pageTextureSize=o.options.pageTextureSizeMobile)),"3dSinglePage"==o.options.viewMode&&(o.options.singlePageMode=!0),"2dSinglePage"==o.options.viewMode&&(o.options.singlePageMode=!0,o.options.viewMode="2d"),o.options.singlePageMode&&"2d"!=o.options.viewMode&&"swipe"!=o.options.viewMode&&(o.options.viewMode="3d"),this.options.singlePageMode&&(o.options.rightToLeft=!1),"webgl"==o.options.viewMode&&(!o.hasWebGl||parseFloat(!!(a=(s=(s||navigator.userAgent).toLowerCase()).match(/android\s([0-9\.]*)/))&&a[1])<4.4&&o.isAndroid)&&(o.options.viewMode="3d"),"3d"!=o.options.viewMode||o.has3d||(o.options.viewMode="2d"),o.webgl="webgl"==o.options.viewMode,o.options.isMobile&&e.pdfBrowserViewerIfMobile&&o.options.pdfUrl)o.options.lightBox&&!o.options.lightBoxOpened?o.$elem.on("touched click",function(){f()}).css("cursor","pointer"):f();else{o.options.pdfMode=Boolean(o.options.pdfUrl&&""!=o.options.pdfUrl);var u=o.options.zoomLevels;if(u){for("string"==typeof u&&(u=u.split(",")),i=0;i<u.length;i++)u[i]=Number(u[i]);o.options.zoomLevels=u,o.options.zoomMin=u[0]}if(o.options.backgroundTransparent&&(o.options.backgroundColor="none"),o.options.deeplinking||(o.options.deeplinking={enabled:o.options.deeplinkingEnabled,prefix:o.options.deeplinkingPrefix}),o.wrapper=k(v.createElement("div")).addClass("flipbook-main-wrapper"),""!=o.options.backgroundColor&&o.wrapper.css("background",o.options.backgroundColor),""!=o.options.backgroundPattern&&o.wrapper.css("background","url("+o.options.backgroundPattern+") repeat"),""!=o.options.backgroundImage&&(o.wrapper.css("background","url("+o.options.backgroundImage+") no-repeat"),o.wrapper.css("background-size","cover")),o.bookLayer=k(v.createElement("div")).addClass("flipbook-bookLayer").appendTo(o.wrapper),o.options.hideMenu&&o.bookLayer.css("bottom","0"),o.book=k(v.createElement("div")).addClass("book").appendTo(o.bookLayer),this.options.preloader?this.preloader=this.options.preloader:this.preloader=k('<div class="cssload-container"><div class="cssload-speeding-wheel"/><div class="flipbook-loading-text">'+this.options.preloaderText+'</div><div class="flipbook-loading-bg"></div></div>'),this.setLoadingProgress(0),o.options.deeplinking.enabled&&(void 0===o.options.deeplinking.prefix&&(o.options.deeplinking.prefix=""),k(w).bind("hashchange",function(e){if(o.Book&&o.Book.enabled){var t=o.getPageFromHash();t=o.options.rightToLeft?o.options.pages.length-t+1:t,o.options.singlePageMode&&t--,0<=t&&o.Book.goToPage(t,!0)}}),this.options.startPage<=2)){var g=this.getPageFromHash();1<g&&(this.options.lightBoxOpened=!0),this.options.startPage=g}this.options.startPage=this.options.singlePageMode?this.options.startPage-1:this.options.startPage,(this.options.main=this).options.lightBox?(this.lightbox=new FLIPBOOK.Lightbox(this,this.wrapper,this.options),this.wrapper.css("background","none"),this.bookLayer.css("background","none"),this.book.css("background","none"),this.preloader.appendTo(k("body")).css("position","fixed"),this.$elem.css("cursor","pointer").bind("tap click",function(e){o.started?(o.lightboxStart(),o.options.lightBoxFullscreen&&setTimeout(function(){o.toggleExpand()},0)):(b(),o.options.lightBoxFullscreen&&setTimeout(function(){o.toggleExpand()},100))}),this.options.lightBoxOpened?(b(),k(this).trigger("lightboxLoadingStarted")):this.options.lightboxPreload&&("undefined"!=typeof IScroll||FLIPBOOK.scriptsAdded[FLIPBOOK.iscrollSrc]||o.loadScript(FLIPBOOK.iscrollSrc,function(){}),o.options.pdfMode&&("undefined"!=typeof PDFJS||FLIPBOOK.scriptsAdded[FLIPBOOK.pdfjsSrc]||o.loadScript(FLIPBOOK.pdfjsSrc,function(){}),void 0!==FLIPBOOK.PdfService||FLIPBOOK.scriptsAdded[FLIPBOOK.pdfServiceSrc]||o.loadScript(FLIPBOOK.pdfServiceSrc,function(){}),o.options.btnSearch.enabled&&(FLIPBOOK.scriptsAdded[FLIPBOOK.markSrc]||o.loadScript(FLIPBOOK.markSrc,function(){}))),"webgl"==o.options.viewMode&&("undefined"!=typeof THREE||FLIPBOOK.scriptsAdded[FLIPBOOK.threejsSrc]||o.loadScript(FLIPBOOK.threejsSrc,function(){})))):(this.preloader.appendTo(this.wrapper),this.wrapper.appendTo(this.$elem),b())}function f(){o.options.pdfBrowserViewerFullscreen?w.open(o.options.pdfUrl,o.options.pdfBrowserViewerFullscreenTarget):k('<object type="application/pdf"/>').width("100%").height("100%").attr("data",o.options.pdfUrl).appendTo(o.$elem)}function b(){if(o.options.fillPreloader.enabled){o.$fillPreloader=k("<div>").addClass("flipbook-fillPreloader");var t=new Image;t.src=o.options.fillPreloader.imgEmpty,t.onload=function(){var e=new Image;e.src=o.options.fillPreloader.imgFull,e.onload=function(){k(t).appendTo(o.$fillPreloader),o.$fillPreloaderImg=k(e).appendTo(o.$fillPreloader),o.$fillPreloader.appendTo(o.wrapper),m()}}}else o.setFillPreloaderProgress(.1),m()}function m(){o.flipsound=v.createElement("audio"),o.flipsound.setAttribute("src",o.options.assets.flipMp3),o.flipsound.setAttribute("type","audio/mpeg"),o.options.pdfMode?o.initPdf(o.options.btnSearch.enabled):(o.options.btnSearch.enabled=!1,o.initJpg())}},FLIPBOOK.Main.prototype={start:function(){this.options.dp&&(this.options.doublePage=!0,this.options.pageMode="doubleWithCover"),this.started||(this.model.pageW=this.options.pageWidth,this.model.bookW=2*this.options.pageWidth,this.model.pageH=this.options.pageHeight,this.model.bookH=this.options.pageHeight,1==this.options.numPages&&(this.options.viewMode="3d",this.webgl=!1),this.options.numPages%2==0?this.options.numSheets=(this.options.numPages+2)/2:this.options.numSheets=(this.options.numPages+1)/2,this.started=!0,this.options.lightBox&&(this.lightbox.openLightbox(),this.lightboxStart()),this.setFillPreloaderProgress(.7),this.createBook())},lightboxStart:function(){var e=this;this.started||this.start(),void 0!==this.Book?(this.Book.enable(),this.options.contentOnStart&&this.toggleToc(!0),this.options.thumbnailsOnStart&&this.toggleThumbs(!0),e.updateCurrentPage(),e.initColors(),e.resize(),k(this).trigger("lightboxOpened")):setTimeout(function(){e.lightboxStart()},100)},setHash:function(e){e<1&&(e=1),k("body").trigger({type:"updatePage",page:e,name:this.options.name}),this.options.deeplinking.enabled&&this.Book.enabled&&(w.location.hash="#"+this.options.deeplinking.prefix+String(e))},clearHash:function(){this.options.deeplinking.enabled&&(w.location.hash="")},getPageFromHash:function(){var e=parseInt(w.location.hash.replace(/#/g,"").replace(this.options.deeplinking.prefix,""));return isNaN(e)&&(e=0),e},initColors:function(){this.wrapper.find(".skin-color-bg").removeClass("flipbook-bg-light").removeClass("flipbook-bg-dark").addClass("flipbook-bg-"+this.options.skin),this.wrapper.find(".skin-color").removeClass("flipbook-color-light").removeClass("flipbook-color-dark").addClass("flipbook-color-"+this.options.skin)},lightboxEnd:function(){screenfull.exit(),w.location.hash&&this.clearHash(),this.setLoadingProgress(1),this.Book.disable()},turnPageComplete:function(){this.animating=!1,this.updateCurrentPage();var e=this.Book.rightIndex||0;this.options.rightToLeft&&(e=this.options.pages.length-e),this.pdfService&&this.pdfService.setRightIndex(e)},updateCurrentPage:function(e){if(void 0!==this.currentPage){var t,o=this.options.rightToLeft,i=this.options.numPages,n=this.Book.rightIndex||0;if(this.options.singlePageMode)return this.options.rightToLeft&&(n=this.options.pages.length-n),this.currentPage.attr("value",String(n+1)),this.currentPage.text(String(n+1)+" / "+String(i)),this.enablePrev(0<n),this.enableNext(n<this.options.pages.length-1),this.currentPageNumber=n,this.setHash(this.currentPageNumber+1),this.cPage=[this.currentPageNumber],this.wrapper.find(".c-l-p").show(),this.wrapper.find(".c-r-p").show(),void this.wrapper.find(".c-p").hide();if(this.Book.singlePage)return t=o?this.options.pages.length-n:n+1,this.currentPage.attr("value",t),this.currentPage.text(t+" / "+i),this.enablePrev(0<n),this.enableNext(n<this.options.pages.length-1),this.currentPageNumber=n,this.setHash(this.currentPageNumber+1),this.cPage=[this.currentPageNumber],this.wrapper.find(".c-l-p").show(),this.wrapper.find(".c-r-p").show(),void this.wrapper.find(".c-p").hide();void 0!==e&&(n=e);var s=o?this.options.pages.length-n:n;i<s||s==i&&i%2==0?(t=i,this.cPage=[i-1]):s<1?(t=1,this.cPage=[0]):(t=String(s)+"-"+String(s+1),this.cPage=[s-1,s]),2==this.cPage.length?(this.wrapper.find(".c-l-p").show(),this.wrapper.find(".c-r-p").show(),this.wrapper.find(".c-p").hide()):(this.wrapper.find(".c-l-p").hide(),this.wrapper.find(".c-r-p").hide(),this.wrapper.find(".c-p").show()),t+=" / "+i,this.currentPage.attr("value",String(s)),this.currentPage.text(String(t)),this.s&&0<this.options.pdfPageScale&&this.Book.goToPage(0),i%2!=0&&i--,o?(this.enablePrev(s<i),this.enableNext(1<s)):(this.enablePrev(1<s),this.enableNext(s<i)),this.setHash(s)}},initJpg:function(){var n=this;n.setFillPreloaderProgress(.1),this.loadPage(0,this.options.pageTextureSize,function(){n.setFillPreloaderProgress(.5),n.loadPage(1,n.options.pageTextureSize,function(){var e=n.options.pages[0].img,t=n.options.pages[1].img,o=e.width/e.height,i=t.width/t.height;n.options.pageWidth||(n.options.pageWidth=parseInt(1e3*e.width/e.height)),n.options.pageHeight||(n.options.pageHeight=1e3),n.options.pageMode=1.5<i/o?"doubleWithCover":"singlePage",n.options.doublePage=1.5<i/o,n.options.zoomSize=n.options.zoomSize||e.height,n.setLoadingProgress(.7),n.start()})})},initPdf:function(e){if(!this.started){("swipe"==this.options.viewMode||this.options.btnSearch.enabled)&&(this.options.textLayer=!0),this.$fillPreloader?this.setFillPreloaderProgress(.1):this.setLoadingProgress(.1);var n=this;if("undefined"==typeof PDFJS){if(!FLIPBOOK.scriptsAdded[FLIPBOOK.pdfjsSrc])return void n.loadScript(FLIPBOOK.pdfjsSrc,function(){n.initPdf(e)});if(!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfjsSrc])return void setTimeout(function(){n.initPdf(e)},100)}if(n.setFillPreloaderProgress(.2),void 0===FLIPBOOK.PdfService){if(!FLIPBOOK.scriptsAdded[FLIPBOOK.pdfServiceSrc])return void n.loadScript(FLIPBOOK.pdfServiceSrc,function(){n.initPdf(e)});if(!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfServiceSrc])return void setTimeout(function(){n.initPdf(e)},100)}n.setFillPreloaderProgress(.3),PDFJS.externalLinkTarget=PDFJS.LinkTarget.BLANK,PDFJS.workerSrc=this.options.pdfjsworkerSrc||FLIPBOOK.pdfjsworkerSrc,PDFJS.disableAutoFetch=!0,PDFJS.disableStream=!0,PDFJS.cMapUrl="cmaps/",PDFJS.cMapPacked=!0,PDFJS.getDocument({url:n.options.pdfUrl,rangeChunkSize:524288}).then(function(i){n.pdfDocument=i,n.pdfService=new FLIPBOOK.PdfService(i,n.model,n.options),n.options.pageLoaded=function(e,t){n.Book.onPageLoaded&&n.Book.onPageLoaded(e,t),n.searchingString&&n.mark(n.searchingString)},n.options.thumbLoaded=function(e){n.options.thumbs=n.options.thumbs||[],n.options.thumbs[e.index]=e},n.options.pageUnloaded=function(e){e.forEach(function(e){n.Book.onPageUnloaded&&n.Book.onPageUnloaded(e.index,e.size)})},n.setFillPreloaderProgress(.5);n.pdfService.init(function(){n.options.pageMode=this.double?"doubleWithCover":"singlePage",n.options.doublePage=this.double,n.viewportOriginal=this.viewports[0],n.options.firstPage={width:this.viewports[0].width,height:this.viewports[0].height,ratio:this.viewports[0].width/this.viewports[0].height},1<i.pdfInfo.numPages&&(n.options.secondPage={width:this.viewports[1].width,height:this.viewports[1].height,ratio:this.viewports[1].width/this.viewports[1].height}),n.options.numPages=i.pdfInfo.numPages;for(var e=[],t=0;t<n.options.numPages;t++){var o={canvas:{}};n.options.pages&&n.options.pages[t]?k.extend(o,n.options.pages[t]):o.title=t+1,e[t]=o}n.options.pages=e;n.book.height();n.options.pageWidth=parseInt(1e3*n.viewportOriginal.width/n.viewportOriginal.height),n.options.pageHeight=1e3,n.options.zoomSize=n.options.zoomSize||n.options.pageTextureSize,n.start()},e)})}},loadPage:function(t,o,i){var n=this;if(this.options.pdfMode)this.loadPageFromPdf(t,o,i);else{n=this;this.options.pages[t].img?this.options.pages[t].imgLoaded?n.pageLoaded({index:t,size:o,image:n.options.pages[t].img,htmlContent:n.options.pages[t].htmlContent},i):setTimeout(function(){n.loadPage(t,o,i)},300):(this.options.pages[t].img=new Image,this.options.pages[t].img.setAttribute("id",t),this.options.pages[t].img.onload=function(){n.options.pages[t].imgLoaded=!0;var e=k(v.createElement("div")).addClass("flipbook-page-htmlContent");k(n.options.pages[t].htmlContent).appendTo(e),n.pageLoaded({index:t,size:o,image:n.options.pages[t].img,htmlContent:e},i)},this.options.pages[t].img.src=this.options.pages[t].src,this.options.pages[t].img.crossOrigin="Anonymous")}},pageLoaded:function(e,t){t.call(this,e,t),this.options.loadAllPages&&e.index<this.options.numPages-1&&this.loadPage(e.index+1,e.size,function(){})},loadPageFromPdf:function(e,t,o){var i=this.options.doublePage?Math.round(e/2):e;t=t||this.options.pageTextureSize,this.options.pages[e]?this.pdfService.renderPageFromPdf(i,t,o):o.call(this)},loadThumbsFromPdf:function(e){for(var t=this.pdfDocument.pdfInfo.numPages,o=0;o<t;o++){var i=v.createElement("canvas");e[o].thumbCanvas=i}this.loadThumbFromPdf(0,e)},loadThumbFromPdf:function(e,r){var l=this;this.pdfDocument.getPage(e+1).then(function(e){var t=e.getViewport(1),o=l.options.thumbQuality*l.options.thumbSize/t.height,i=e.getViewport(o),n=r[e.pageIndex].thumbCanvas,s=n.getContext("2d");n.height=i.height,n.width=i.width;var a={canvasContext:s,viewport:i};e.cleanupAfterRender=!0,e.render(a).then(function(){e.cleanup(),e.pageIndex+1<l.pdfDocument.pdfInfo.numPages&&l.loadThumbFromPdf(e.pageIndex+1,r)}),l.thumbScroll.refresh()})},getString:function(e){return this.options.strings[e]},findInDocument:function(e){if(this.hideAllThumbs(),this.$findInfo.hide(),this.pagesFound=0,this.$findInfo.show().text("0 "+this.strings.pagesFoundContaining+' "'+e+'"'),this.pdfService)for(var t=0;t<this.pdfService.pdfInfo.numPages;t++)this.findInPage(e,t);this.mark(e),this.searchingString=e},findInPage:function(t,o){var i=this;this.pdfService.findInPage(t,o,function(e){0<e&&(i.showThumb(o),i.pagesFound++,i.$findInfo.show().text(i.pagesFound+" "+i.strings.pagesFoundContaining+' "'+t+'"'))})},mark:function(e){for(var t=0;t<this.options.pages.length;t++){var o=this.options.pages[t].htmlContent;k(o).unmark({done:function(){k(o).mark(e)}})}},unmark:function(){this.searchingString=null;for(var e=0;e<this.options.pages.length;e++){var t=this.options.pages[e].htmlContent;k(t).unmark({})}},setTool:function(e){this.tool=e,this.model.trigger(e)},toggleTool:function(){var e="toolSelect"==this.tool?"toolMove":"toolSelect";this.setTool(e)},scrollPageIntoView:function(e){e=this.options.rightToLeft?this.options.pages.length-e+1:e,this.Book.goToPage(e)},goToPage:function(e){this.Book.goToPage(e)},loadScript:function(o,i){var n=this,s=v.createElement("script"),e=v.getElementsByTagName("script")[0];s.async=1,e.parentNode.insertBefore(s,e),FLIPBOOK.scriptsAdded[o]=!0,s.onload=s.onreadystatechange=function(e,t){(t||!s.readyState||/loaded|complete/.test(s.readyState))&&(s.onload=s.onreadystatechange=null,s=a,t||i&&i.call(n),FLIPBOOK.scriptsLoaded[o]=!0)},s.src=o},createBook:function(){var n=this,e=this.model,t=this.options;if("undefined"==typeof IScroll){if(!FLIPBOOK.scriptsAdded[FLIPBOOK.iscrollSrc])return void n.loadScript(FLIPBOOK.iscrollSrc,n.createBook);if(!FLIPBOOK.scriptsLoaded[FLIPBOOK.iscrollSrc])return void setTimeout(function(){n.createBook()},100)}if(this.options.btnSearch.enabled){if(!FLIPBOOK.scriptsAdded[FLIPBOOK.markSrc])return void n.loadScript(FLIPBOOK.markSrc,n.createBook);if(!FLIPBOOK.scriptsLoaded[FLIPBOOK.markSrc])return void setTimeout(function(){n.createBook()},100)}if(n.setFillPreloaderProgress(.9),"webgl"==n.options.viewMode){if("undefined"==typeof THREE){if(!FLIPBOOK.scriptsAdded[FLIPBOOK.threejsSrc])return void n.loadScript(FLIPBOOK.threejsSrc,n.createBook);if(!FLIPBOOK.scriptsLoaded[FLIPBOOK.threejsSrc])return void setTimeout(function(){n.createBook()},100)}if(void 0===FLIPBOOK.BookWebGL){if(!FLIPBOOK.scriptsAdded[FLIPBOOK.flipbookWebGlSrc])return void n.loadScript(FLIPBOOK.flipbookWebGlSrc,n.createBook);if(!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookWebGlSrc])return void setTimeout(function(){n.createBook()},100)}}else if("swipe"==n.options.viewMode){if(void 0===FLIPBOOK.BookSwipe){if(!FLIPBOOK.scriptsAdded[FLIPBOOK.flipBookSwipeSrc])return void n.loadScript(FLIPBOOK.flipBookSwipeSrc,n.createBook);if(!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipBookSwipeSrc])return void setTimeout(function(){n.createBook()},100)}}else if(void 0===FLIPBOOK.Book3){if(!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookBook3Src])return void n.loadScript(FLIPBOOK.flipbookBook3Src,n.createBook);if(!FLIPBOOK.scriptsAdded[FLIPBOOK.flipbookBook3Src])return void setTimeout(function(){n.createBook()},100)}if(n.setFillPreloaderProgress(1),n.setLoadingProgress(1),this.initEasing(),"doubleWithCover"==n.options.pageMode&&2<n.options.pages.length){for(var o=[n.options.pages[0]],i=1;i<=n.options.pages.length-2;i++){var s=n.options.pages[i],a={src:s.src,thumb:s.thumb,title:s.title,htmlContent:s.htmlContent,side:"left"},r={src:s.src,thumb:s.thumb,title:s.title,htmlContent:s.htmlContent,side:"right"};o.push(a),o.push(r)}o.push(n.options.pages[n.options.pages.length-1]),n.options.pages=o}if(this.options.numPages=this.options.pages.length,this.options.numPages%2==0||this.options.singlePageMode||(this.oddPages=!0,this.options.oddPages=!0,this.options.pages.push({src:this.options.assets.preloader,thumb:""})),0<n.options.pages.length)for(i=0;i<n.options.pages.length;i++)void 0!==n.options.pages[i].htmlContent&&(n.options.hasHtmlContent=!0,n.options.pages[i].htmlContent=k(n.options.pages[i].htmlContent));if("webgl"==n.options.viewMode){var l=n.options;l.scroll=n.scroll,(l.parent=n).Book=new FLIPBOOK.BookWebGL(n.book[0],e,l),n.webglMode=!0,n.initSwipe()}else"swipe"==n.options.viewMode?(n.Book=new FLIPBOOK.BookSwipe(n.book[0],n.bookLayer[0],e,t),n.initSwipe()):("2d"!=n.options.viewMode&&(n.options.viewMode="3d"),n.Book=new FLIPBOOK.Book3(n.book[0],e,t),n.initSwipe(),n.webglMode=!1);n.Book.enable(),n.book.hide().fadeIn("slow"),k(n.Book).bind("flipEnd",function(){var e=this.rightIndex,t="";if(1==this.mode)t=String(e+1);else{var o=String(e),i=e+1;t=0==o||o==i?String(i):i>this.pagesArr.length?String(o):String(o)+","+String(i)}t+="/",t+=String(this.pagesArr.length),n.currentPage.val(String(t))}),this.createToc(this.options.tableOfContent),this.thumbsCreated=!1,this.createMenu(),this.createCurrentPage(),this.options.currentPage.enabled||this.currentPageHolder.hide(),1==this.options.pages.length&&(this.rightToLeft=!1,this.deeplinking={enabled:!1});var p=k(n.Book);p.bind("loadPagesFromPdf",function(e,t,o,i){n.loadPagesFromPdf(t,o,i)}),p.bind("turnPageComplete",function(e){n.turnPageComplete()}),p.bind("initEasing",function(e){n.initEasing()}),p.bind("playFlipSound",function(e){n.playFlipSound()}),p.bind("closeLightbox",function(e){n.closeLightbox()}),p.bind("updateCurrentPage",function(e){n.updateCurrentPage()}),this.createLogo(),this.onBookCreated()},onBookCreated:function(){var e=this.options,t=this;k(w).resize(function(){t.resize()}),e.rightToLeft?t.Book.goToPage(Number(e.pages.length-Number(e.startPage)+1),!0):t.Book.goToPage(Number(e.startPage),!0),this.updateCurrentPage(),v.addEventListener("keydown",function(e){if(t.Book.enabled&&(t.isZoomed()||!t.bodyHasVerticalScrollbar()||t.options.lightBox||t.fullscreenActive||!t.options.arrowsDisabled))switch((e=e||w.event).keyCode){case 37:t.Book.prevPage();break;case 38:t.zoomIn();break;case 39:t.Book.nextPage();break;case 40:t.zoomOut()}}),v.addEventListener("MSFullscreenChange",function(e){t.handleFsChange()}),v.addEventListener("mozfullscreenchange",function(e){t.handleFsChange()}),v.addEventListener("webkitfullscreenchange",function(e){t.handleFsChange()}),v.addEventListener("fullscreenchange",function(e){t.handleFsChange()}),this.zoom=e.zoomMin,this.bookLayer.bind("DOMMouseScroll",function(e){if(t.Book.enabled&&(t.isZoomed()||!t.bodyHasVerticalScrollbar()||t.options.lightBox||t.fullscreenActive||!t.options.wheelDisabled))return e.stopPropagation(),e.preventDefault(),0<e.originalEvent.detail?t.zoomOut(e.originalEvent):t.zoomIn(e.originalEvent),!1}),this.bookLayer.bind("mousewheel",function(e){if(t.Book.enabled&&(t.isZoomed()||!t.bodyHasVerticalScrollbar()||t.options.lightBox||t.fullscreenActive||!t.options.wheelDisabled))return e.stopPropagation(),e.preventDefault(),e.originalEvent.wheelDelta<0?t.zoomOut(e.originalEvent):t.zoomIn(e.originalEvent),!1}),this.setTool("toolMove"),e.contentOnStart&&t.toggleToc(!0),e.thumbnailsOnStart&&t.toggleThumbs(!0),e.autoplayOnStart&&t.toggleAutoplay(!0),t.options.lightBox&&t.Book.disable(),t.Book.updateVisiblePages(),t.initColors(),t.resize(),setTimeout(function(){t.resize()},200),setTimeout(function(){t.resize()},400),setTimeout(function(){t.resize()},600),e.onbookcreated&&e.onbookcreated.call(this)},initSwipe:function(){var r=this;w.jQuery(this.bookLayer).swipe({swipeStatus:function(e,t,o,i,n,s,a){if("start"==t)try{r.currentPageInput.trigger("blur")}catch(e){}if(!r.options.sideNavigationButtons||e.target!==r.arrowL[0]&&e.target!==r.arrowR[0])if(("end"==t||"cancel"==t)&&n<200&&i<10)"toolMove"!=r.tool||r.options.doubleClickZoomDisabled||(null==r.clickTimer?r.clickTimer=setTimeout(function(){if(r.clickTimer=null,"touchend"==e.type)e.changedTouches[0].pageX;else if("mouseup"==e.type)e.offsetX},300):(clearTimeout(r.clickTimer),r.clickTimer=null,r.zoom>=r.options.zoomMax?r.zoomTo(r.options.zoomMin,0,e):r.zoomTo(r.options.zoomMax,0,e)));else{if(("up"==o||"down"==o)&&"move"==t||1<r.zoom||"toolSelect"==r.tool)return;r.Book.onSwipe(e,t,o,i,n,s,a)}},pinchStatus:function(e,t,o,i,n,s,a){1<s&&r.options.isMobile&&e.preventDefault(),"start"==t&&(r.zoomStart=r.zoom),1<s&&"webgl"==r.options.viewMode&&r.zoomTo(r.zoomStart*a,0)},fingers:2,pinchThreshold:0,allowPageScroll:"vertical",preventDefaultEvents:!1}),this.swipeEnabled=!0},toggleMenu:function(){this.menuShowing?(this.menuShowing=!1,this.bookLayer.css("bottom","0px"),this.menuWrapper.fadeOut(),this.currentPageHolder.fadeOut(),k(".flipbook-nav").fadeOut()):(this.menuShowing=!0,this.bookLayer.css("bottom",this.menuWrapper.height()+"px"),this.menuWrapper.fadeIn(),this.currentPageHolder.fadeIn(),k(".flipbook-nav").fadeIn()),this.Book.onResize()},createButton:function(t){var e,o=this.options;"material"==o.icons?(e=k("<i>").appendTo(this.menu).addClass("material-icons flipbook-icon-material flipbook-menu-btn skin-color skin-color-bg").attr("title",t.title).text(t.icon2)).css({"border-radius":o.btnRadius+"px","text-shadow":o.btnTextShadow,"box-shadow":o.btnShadow,border:o.btnBorder,color:o.btnColor,background:o.btnBackground}):((e=k(v.createElement("span")).appendTo(this.menu).attr("title",t.title)).$icon=k(v.createElement("span")).appendTo(e).attr("aria-hidden","true").addClass(t.icon).addClass("flipbook-icon-fa flipbook-menu-btn skin-color skin-color-bg fa").css({width:o.btnSize+"px","font-size":o.btnSize+"px","border-radius":o.btnRadius+"px",margin:o.btnMargin+"px",padding:o.btnPaddingV+"px "+o.btnPaddingH+"px","text-shadow":o.btnTextShadow,"box-shadow":o.btnShadow,border:o.btnBorder,color:o.btnColor,background:o.btnBackground}),t.iconAlt&&(e.$iconAlt=k(v.createElement("span")).appendTo(e).attr("aria-hidden","true").addClass(t.iconAlt).addClass("flipbook-icon-fa flipbook-menu-btn skin-color skin-color-bg fa").css({width:o.btnSize+"px","font-size":o.btnSize+"px","border-radius":o.btnRadius+"px",margin:o.btnMargin+"px",padding:o.btnPaddingV+"px "+o.btnPaddingH+"px","text-shadow":o.btnTextShadow,"box-shadow":o.btnShadow,border:o.btnBorder,color:o.btnColor,background:o.btnBackground}).hide()));return e.icon=t.icon,e.iconAlt=t.iconAlt,t.onclick&&e.bind("tap click",function(e){t.onclick()}),(o.btnColorHover||o.btnBackgroundHover||o.btnBorderHover)&&e.mouseenter(function(){e.css({color:o.btnColorHover,background:o.btnBackgroundHover,border:o.btnBorderHover})}).mouseleave(function(){e.css({color:o.btnColor,background:o.btnBackground,border:o.btnBorder})}),e},createMenu:function(){var n=this.options,o=this;if(this.menuWrapper=k(v.createElement("div")).addClass("flipbook-menuWrapper"),this.menuWrapper.appendTo(this.wrapper),n.hideMenu&&this.menuWrapper.hide(),"swipe"==n.viewMode&&(n.btnSound.enabled=!1),this.menu=k(v.createElement("div")).addClass("flipbook-menu skin-color-bg").appendTo(this.menuWrapper).css({background:n.menuBackground,"box-shadow":n.menuShadow,margin:n.menuMargin+"px",padding:n.menuPadding+"px","text-align":n.menuAlignHorizontal}),n.sideNavigationButtons?(o.btnNext=k('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"><span class="flipbook-right-arrow fa '+o.options.btnNext.icon+' skin-color skin-color-bg"></div></div>').appendTo(o.bookLayer).bind("tap click",function(e){o.btnNext.disabled||(o.btnNext.disabled=!0,setTimeout(function(){o.btnNext.disabled=!1},300),e.stopPropagation(),e.preventDefault(),o.Book.nextPage())}),o.arrowR=o.btnNext.find("span"),o.arrowR.css({width:n.sideBtnSize+"px","font-size":n.sideBtnSize+"px","border-radius":n.sideBtnRadius+"px","margin-top":String(-n.sideBtnSize/2)+"px","margin-right":n.sideBtnMargin+"px",padding:n.sideBtnPaddingV+"px "+n.sideBtnPaddingH+"px","text-shadow":n.sideBtnTextShadow,"box-shadow":n.sideBtnShadow,border:n.sideBtnBorder,color:n.sideBtnColor,background:n.sideBtnBackground,"box-sizing":"initial"}).attr("title",this.options.btnNext.title),o.btnPrev=k('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"><span class="flipbook-left-arrow fa '+o.options.btnPrev.icon+' skin-color skin-color-bg"></div></div>').appendTo(o.bookLayer).bind("tap click",function(e){o.btnPrev.disabled||(o.btnPrev.disabled=!0,setTimeout(function(){o.btnPrev.disabled=!1},300),e.stopPropagation(),e.preventDefault(),o.Book.prevPage())}),o.arrowL=o.btnPrev.find("span"),o.arrowL.css({width:n.sideBtnSize+"px","font-size":n.sideBtnSize+"px","border-radius":n.sideBtnRadius+"px","margin-top":String(-n.sideBtnSize/2)+"px","margin-left":n.sideBtnMargin+"px",padding:n.sideBtnPaddingV+"px "+n.sideBtnPaddingH+"px","text-shadow":n.sideBtnTextShadow,"box-shadow":n.sideBtnShadow,border:n.sideBtnBorder,color:n.sideBtnColor,background:n.sideBtnBackground,"box-sizing":"initial"}).attr("title",this.options.btnPrev.title),o.options.btnFirst.enabled&&(o.btnFirst=k('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"><span class="flipbook-first-arrow fa '+this.options.btnFirst.icon+' skin-color skin-color-bg"></div></div>').appendTo(o.bookLayer).bind("tap click",function(e){o.btnFirst.disabled||(o.btnFirst.disabled=!0,setTimeout(function(){o.btnFirst.disabled=!1},300),e.stopPropagation(),e.preventDefault(),o.Book.goToPage(1))}),o.btnFirst.find("span").css({width:n.sideBtnSize+"px","font-size":.66*n.sideBtnSize+"px","border-radius":n.sideBtnRadius+"px","margin-top":String(n.sideBtnSize/2+n.sideBtnMargin+2*n.sideBtnPaddingV)+"px","margin-left":n.sideBtnMargin+"px",padding:n.sideBtnPaddingV+"px "+n.sideBtnPaddingH+"px","text-shadow":n.sideBtnTextShadow,"box-shadow":n.sideBtnShadow,border:n.sideBtnBorder,color:n.sideBtnColor,background:n.sideBtnBackground,"box-sizing":"initial"}).attr("title",this.options.btnFirst.title)),o.options.btnLast.enabled&&(o.btnLast=k('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"><span class="flipbook-last-arrow fa '+this.options.btnLast.icon+' skin-color skin-color-bg"></div></div>').appendTo(o.bookLayer).bind("tap click",function(e){o.btnLast.disabled||(o.btnLast.disabled=!0,setTimeout(function(){o.btnLast.disabled=!1},300),e.stopPropagation(),e.preventDefault(),o.Book.goToPage(o.options.pages.length))}),o.btnLast.find("span").css({width:n.sideBtnSize+"px","font-size":.66*n.sideBtnSize+"px","border-radius":n.sideBtnRadius+"px","margin-top":String(n.sideBtnSize/2+n.sideBtnMargin+2*n.sideBtnPaddingV)+"px","margin-right":n.sideBtnMargin+"px",padding:n.sideBtnPaddingV+"px "+n.sideBtnPaddingH+"px","text-shadow":n.sideBtnTextShadow,"box-shadow":n.sideBtnShadow,border:n.sideBtnBorder,color:n.sideBtnColor,background:n.sideBtnBackground,"box-sizing":"initial"}).attr("title",this.options.btnLast.title))):(n.btnFirst.enabled&&(this.btnFirst=this.createButton(n.btnFirst).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.Book.goToPage(1)})),n.btnPrev.enabled&&(this.btnPrev=this.createButton(n.btnPrev).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.Book.prevPage()})),n.btnNext.enabled&&(this.btnNext=this.createButton(n.btnNext).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.Book.nextPage()})),n.btnLast.enabled&&(this.btnLast=this.createButton(n.btnLast).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.Book.goToPage(o.options.pages.length)}))),n.btnAutoplay.enabled&&(this.btnAutoplay=this.createButton(n.btnAutoplay).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.autoplay||o.Book.nextPage(),o.toggleAutoplay()})),n.btnSearch.enabled&&(this.btnSearch=this.createButton(n.btnSearch).bind("touchend click",function(e){o.toggleSearch()}),this.createSearch()),n.btnBookmark.enabled&&(this.btnBookmark=this.createButton(n.btnBookmark).bind("touchend click",function(e){o.toggleBookmark()}),this.createBookmark()),n.btnZoomIn.enabled&&(this.btnZoomIn=this.createButton(n.btnZoomIn).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.zoomIn()})),n.btnZoomOut.enabled&&(this.btnZoomOut=this.createButton(n.btnZoomOut).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.zoomOut()})),this.onZoom(n.zoom),!n.btnToc.enabled||!n.btnTocIfMobile&&n.isMobile||(this.btnToc=this.createButton(n.btnToc).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.toggleToc()})),!n.btnThumbs.enabled||!n.btnThumbsIfMobile&&n.isMobile||(this.btnThumbs=this.createButton(n.btnThumbs).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.toggleThumbs()})),!n.btnShare.enabled||!n.btnShareIfMobile&&n.isMobile||(this.btnShare=this.createButton(n.btnShare).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.toggleShareMenu()})),!n.btnDownloadPages.enabled||!n.btnDownloadPagesIfMobile&&n.isMobile||(this.btnDownloadPages=this.createButton(n.btnDownloadPages).bind("touchend click",function(e){if(o.options.downloadMenu)o.toggleDownloadMenu();else{e.stopPropagation(),e.preventDefault();var t=v.createElement("a");t.href=n.btnDownloadPages.url,t.download="file.pdf",t.dispatchEvent(new MouseEvent("click"))}})),!n.btnPrint.enabled||!n.btnPrintIfMobile&&n.isMobile||(this.btnPrint=this.createButton(n.btnPrint).bind("touchend click",function(e){o.options.printMenu?o.togglePrintMenu():(e.stopPropagation(),e.preventDefault(),o.togglePrintWindow())})),!n.btnDownloadPdf.enabled||!n.btnDownloadPdfIfMobile&&n.isMobile||(this.btnDownloadPdf=this.createButton(n.btnDownloadPdf),n.pdfMode&&!n.btnDownloadPdf.url&&(n.btnDownloadPdf.url=n.pdfUrl),this.btnDownloadPdf.bind("touchend click",function(e){if(e.stopPropagation(),e.preventDefault(),n.btnDownloadPdf.forceDownload){var t=n.btnDownloadPdf.url,o=v.createElement("a");o.href=t,o.download="",v.body.appendChild(o),o.click(),v.body.removeChild(o)}else{var i=n.btnDownloadPdf.openInNewWindow||(n.btnDownloadPdf.openInNewWindow,1)?"_blank":"_self";w.open(n.btnDownloadPdf.url,i)}})),n.sound&&n.btnSound.enabled&&(n.btnSoundIfMobile||!n.isMobile)&&(this.btnSound=this.createButton(n.btnSound).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),n.sound?(n.sound=!1,o.btnSound.find("."+o.btnSound.icon).hide(),o.btnSound.find("."+o.btnSound.iconAlt).show()):(n.sound=!0,o.btnSound.find("."+o.btnSound.icon).show(),o.btnSound.find("."+o.btnSound.iconAlt).hide())})),n.textLayer&&(this.btnSelect=this.createButton(n.btnSelect).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.toggleTool()})),!n.btnExpand.enabled||!n.btnExpandIfMobile&&n.isMobile||(this.btnExpand=this.createButton(n.btnExpand).addClass("btnExpand").bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.toggleExpand()})),n.btnSlideshow.enabled&&(this.btnSlideshow=this.createButton(n.btnSlideshow).addClass("btnSlideshow").bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.toggleSlideshow()})),n.buttons)for(var e=0;e<n.buttons.length;e++){var t=n.buttons[e];o.createButton(t).index(1)}},handleFsChange:function(){if(this.Book&&this.Book.enabled){var e=this,t=e.lightbox?k(v.body):e.$elem;v.fullscreenElement||v.webkitFullscreenElement||v.mozFullScreenElement||v.msFullscreenElement||this.isFullscreen?(e.btnExpand.find("."+e.btnExpand.icon).hide(),e.btnExpand.find("."+e.btnExpand.iconAlt).show(),t.addClass("flipbook-browser-fullscreen"),this.fullscreenActive=!0,this.options.onfullscreenenter&&this.options.onfullscreenenter.call(this)):(e.btnExpand.find("."+e.btnExpand.icon).show(),e.btnExpand.find("."+e.btnExpand.iconAlt).hide(),t.removeClass("flipbook-browser-fullscreen"),this.fullscreenActive=!1,this.options.onfullscreenexit&&this.options.onfullscreenexit.call(this)),this.triggerResize()}},createLogo:function(){var e=this.options;if(e.logoImg&&(!e.isMobile||!e.logoHideOnMobile)){var t=k("<img>").attr("src",e.logoImg).attr("style",e.logoCSS).appendTo(this.wrapper);"right"==e.logoAlignH&&t.css("right","0"),"bottom"==e.logoAlignV&&t.css("bottom","0"),e.logoUrl&&t.bind("touchend click",function(){w.open(e.logoUrl,"_blank")})}},setLoadingProgress:function(e){0<e&&e<1?k(this.preloader).stop(!0,!0).show():k(this.preloader).stop(!0,!0).hide()},setFillPreloaderProgress:function(e){if(this.$fillPreloader)if(0<e&&e<1){if(this.fillPreloaderProgress=this.fillPreloaderProgress||0,e<this.fillPreloaderProgress)return;this.fillPreloaderProgress=e;var t=this.$fillPreloaderImg[0];t.style.clip="rect(0px,"+t.width*e+"px,"+t.height+"px,0px)",this.$fillPreloader.show()}else this.$fillPreloader.hide()},createNavigation:function(){var t=this;this.navLeft=k("<div />"),this.navLeft.css("background","#f00").css("left","0").css("top","200px").attr("aria-hidden","true").addClass("skin-color fa fa-chevron-left fa-5x").css("margin-top",this.navLeft.height()+"px").bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),t.Book.prevPage()}),this.navRight=k("<div />").appendTo(this.bookLayer).css("position","absolute").css("width","200px").css("height","200px").css("margin-top","-100px").css("background","#f00").css("right","0").css("top","200px").bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),t.Book.nextPage()})},playFlipSound:function(){var e=this;this.options.sound&&this.Book.enabled&&void 0!==this.flipsound.play&&(this.flipsound.currentTime=0,setTimeout(function(){try{e.flipsound.play()}catch(e){}},100))},onMouseWheel:function(e){if("wheelDeltaX"in e)wheelDeltaX=e.wheelDeltaX/12,wheelDeltaY=e.wheelDeltaY/12;else if("wheelDelta"in e)wheelDeltaX=wheelDeltaY=e.wheelDelta/12;else{if(!("detail"in e))return;wheelDeltaX=wheelDeltaY=3*-e.detail}0<wheelDeltaX?this.zoomIn(e):this.zoomOut(e)},zoomTo:function(e,t,o){var i,n;this.zoom=e,void 0===o?(i=this.model.wrapperW/2,n=this.model.wrapperH/2):o.touches&&o.touches[0]?(i=o.touches[0].clientX,n=o.touches[0].clientY):o.changedTouches&&o.changedTouches[0]?(i=o.changedTouches[0].clientX,n=o.changedTouches[0].clientY):(i=o.pageX,n=o.pageY),this.Book.zoomTo(this.zoom,t,i,n),this.onZoom(this.zoom)},zoomOut:function(e){var t=this.zoom/this.options.zoomStep;t=t<this.options.zoomMin?this.options.zoomMin:t,this.zoom=t,this.zoomTo(this.zoom,0,e)},zoomIn:function(e){var t=this.zoom*this.options.zoomStep;this.bookLayer.height()*t>this.options.zoomSize&&(t=this.options.zoomSize/this.bookLayer.height()),this.zoom=t,this.zoomTo(this.zoom,0,e)},onZoom:function(e){this.zoom=e,this.enableButton(this.btnZoomIn,e<this.options.zoomMax),this.enableButton(this.btnZoomOut,e>this.options.zoomMin),this.enableSwipe(e<=1)},enableSwipe:function(e){this.swipeEnabled=e},createCurrentPage:function(){var o=this,e=k("<div>").appendTo(this.wrapper).addClass("flipbook-currentPageHolder");"top"==this.options.currentPagePositionV?e.css("top","0"):e.css("bottom","0"),"left"==this.options.currentPagePositionH?e.css("left","0"):e.css("right","0"),e.css("margin",this.options.currentPageMarginV+"px "+this.options.currentPageMarginH+"px"),this.currentPageHolder=e,this.currentPage=k(v.createElement("div")).addClass("flipbook-currentPageNumber").appendTo(e);var t=k("<form>").appendTo(e).submit(function(e){var t=parseInt(o.currentPageInput.val());return t=t>o.options.pages.length?o.options.pages.length:t,o.options.rightToLeft&&(t=o.options.pages.length-t+1),o.options.singlePageMode&&t--,o.Book.goToPage(t),o.currentPageInput.trigger("blur"),!1});this.currentPageInput=k('<input type="text" maxlength="4">').addClass("flipbook-currentPageInput").appendTo(t).focus(function(){o.currentPageInput.val("").width(o.currentPageHolder.width()),o.currentPage.addClass("flipbook-color-transparent")}).blur(function(){o.currentPage.removeClass("flipbook-color-transparent"),o.currentPageInput.val("")})},createSearch:function(){var e=this;this.searchEnabled=!0,this.searchHolder=k("<div>").addClass("flipbook-tocHolder skin-color-bg").appendTo(this.wrapper).hide(),this.search=k("<div>").addClass("flipbook-toc").appendTo(this.searchHolder),e.searchScroll=new FLIPBOOK.IScroll(e.searchHolder[0],{bounce:!1,mouseWheel:!0,scrollbars:!0,interactiveScrollbars:!0}),this.createMenuHeader(this.search,"Search",this.toggleSearch),this.$searchBar=k('<div class="flipbook-findbar" id="findbar" deluminate_imagetype="png"><div id="findbarInputContainer"><input id="findInput" class="toolbarField" title="Find" placeholder="'+this.strings.findInDocument+'..."></div><div class="flipbook-find-info skin-color"/></div>').appendTo(this.search),this.$findInput=this.$searchBar.find("#findInput").keyup(function(){""!=this.value?e.findInDocument(this.value):e.unmark()}),this.$findInfo=this.$searchBar.find(".flipbook-find-info")},createBookmark:function(){var t=this;this.bookmarkHolder=k("<div>").addClass("flipbook-tocHolder skin-color-bg flipbook-bmHolder flipbook-font").appendTo(this.wrapper).hide(),this.bookmark=k("<div>").addClass("flipbook-toc").appendTo(this.bookmarkHolder),t.bookmarkScroll=new FLIPBOOK.IScroll(t.bookmarkHolder[0],{bounce:!1,mouseWheel:!0,scrollbars:!0,interactiveScrollbars:!0}),this.createMenuHeader(this.bookmark,this.strings.bookmark,this.toggleBookmark);k('<a><div class="c-p skin-color flipbook-btn">Bookmark current page</div></a>').appendTo(this.bookmark).bind("touchend click",function(e){t.bookmarkPage(t.cPage[0],this),e.preventDefault(),e.stopPropagation()}),k('<a><div class="c-l-p skin-color flipbook-btn">'+this.strings.bookmarkLeftPage+"</div></a>").appendTo(this.bookmark).bind("touchend click",function(e){t.bookmarkPage(t.cPage[0],this),e.preventDefault(),e.stopPropagation()}),k('<a><div class="c-r-p skin-color flipbook-btn">'+this.strings.bookmarkRightPage+"</div></a>").appendTo(this.bookmark).bind("touchend click",function(e){t.bookmarkPage(t.cPage[1],this),e.preventDefault(),e.stopPropagation()})},createMenuHeader:function(e,t,o){var i=this,n=k("<div>").addClass("flipbook-menu-header skin-clor flipbook-font").appendTo(e),s=(t=k("<span>").text(t).addClass("flipbook-menu-title skin-color").appendTo(n),k("<span>").appendTo(n).addClass("flipbook-btn-close").bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.call(i)}));k("<span>").attr("aria-hidden","true").appendTo(s).addClass("fa fa-times flipbook-btn-close-icon skin-color")},createToc:function(e){var o=this;if(this.tocHolder=k("<div>").addClass("flipbook-tocHolder skin-color-bg").appendTo(this.wrapper).hide(),this.toc=k("<div>").addClass("flipbook-toc").appendTo(this.tocHolder),o.tocScroll=new FLIPBOOK.IScroll(o.tocHolder[0],{bounce:!1,mouseWheel:!0,scrollbars:!0,interactiveScrollbars:!0}),this.createMenuHeader(this.toc,this.strings.tableOfContent,this.toggleToc),0<e.length){this.options.pages;for(var t=0;t<e.length;t++){var i=k(v.createElement("a")).attr("class","flipbook-tocItem").addClass("skin-color").attr("title",e[t].page).appendTo(this.toc).bind("touchend click",function(e){if(e.stopPropagation(),e.preventDefault(),!o.tocScroll.moved){var t=Number(k(this).attr("title"));t=o.options.rightToLeft?o.options.pages.length-t+1:t,o.Book.goingToPage!=t&&(o.Book.goToPage(t),o.options.tableOfContentCloseOnClick&&o.toggleToc(!1))}});k(v.createElement("span")).appendTo(i).text(e[t].title),k(v.createElement("span")).appendTo(i).attr("class","right").text(e[t].page)}}else{var n=[];if(this.options.rightToLeft)for(t=this.options.pages.length-1;0<=t;t--)n.push(this.options.pages[t]);else n=this.options.pages;for(t=0;t<n.length;t++){var s=n[t].title;if(""!=s&&void 0!==s){i=k(v.createElement("a")).attr("class","flipbook-tocItem").addClass("skin-color").attr("title",String(t+1)).appendTo(this.toc).bind("touchend click",function(e){if(e.stopPropagation(),e.preventDefault(),!o.tocScroll.moved){var t=Number(k(this).attr("title"));t=o.options.rightToLeft?o.options.pages.length-t+1:t,o.Book.goingToPage!=t&&(o.Book.goToPage(t),o.options.tableOfContentCloseOnClick&&o.toggleToc(!1))}});k(v.createElement("span")).appendTo(i).text(s),k(v.createElement("span")).appendTo(i).attr("class","right").text(t+1)}}}o.tocScroll.refresh()},enablePrev:function(e){this.enableButton(this.btnPrev,e),this.enableButton(this.btnFirst,e),this.Book.enablePrev(e)},enableNext:function(e){this.enableButton(this.btnNext,e),this.enableButton(this.btnLast,e),this.Book.enableNext(e)},enableButton:function(e,t){void 0!==e&&(t?(e.css("opacity","1"),e.css("pointer-events","auto")):(e.css("opacity","0.2"),e.css("pointer-events","none")),e.enabled=t)},resize:function(){var e=this;!e.options.menuOverBook&&e.menuShowing?e.bookLayer.css("bottom",e.menuWrapper.height()+"px"):e.bookLayer.css("bottom","0px");var t=this.model;t.wrapperW=this.bookLayer.width(),t.wrapperH=this.bookLayer.height(),e.options.zoomMax=this.options.zoomSize/t.wrapperH,e.Book.onResize(),e.Book.zoomTo(e.options.zoomMin)},pdfResize:function(){this.Book.onZoom()},createThumbs:function(){var o=this;if(this.options.btnThumbs.enabled){this.thumbsCreated=!0,this.thumbHolder=k(v.createElement("div")).addClass("flipbook-thumbHolder").addClass("skin-color-bg").appendTo(o.wrapper).hide(),this.thumbsWrapper=k(v.createElement("div")).appendTo(this.thumbHolder).addClass("flipbook-thumbsWrapper"),this.thumbsScroller=k(v.createElement("div")).appendTo(this.thumbsWrapper).addClass("flipbook-thumbsScroller"),this.createMenuHeader(this.thumbHolder,this.strings.thumbnails,this.toggleThumbs),o.thumbs=[];var e=[];if(this.options.rightToLeft)for(var t=this.options.pages.length-1;0<=t;t--)e.push(this.options.pages[t]);else e=this.options.pages;var i=[];if(this.options.doublePage)for(t=0;t<e.length;t++)0!=t&&t%2==0||i.push(e[t]);else i=e;this.options.pdfMode&&this.loadThumbsFromPdf(i);var n=this.options.thumbSize,s=this.options.thumbSize*this.options.pageWidth/this.options.pageHeight;for(t=0;t<i.length;t++){var a=i[t].thumb,r=k("<div>").addClass("flipbook-thumb").appendTo(o.thumbsScroller).attr("data-thumb-index",t).width(s).height(n),l=k("<span>").appendTo(r).addClass("thumb-btn-close").bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),o.removeBookmark(k(this).parent().attr("data-thumb-index"))});k("<span>").attr("aria-hidden","true").appendTo(l).addClass("fa fa-times skin-color");if(this.thumbs.push(r),i[t].thumbCanvas)var p=k(i[t].thumbCanvas);else{if(!a)continue;(p=k("<img/>").attr("src",a))[0].onload=function(){o.thumbScroll.refresh()}}if(p.appendTo(r),k("<br/>").appendTo(r),this.options.doublePage&&0<t){r.width(2*s),p.height(n).width(2*s).attr("page-title",2*t+1);k(v.createElement("soan")).text(String(2*t)+"-"+String(2*t+1)).appendTo(r).addClass("skin-color").addClass("flipbook-thumb-num")}else{p.height(n).width(s).attr("page-title",t+1);k(v.createElement("span")).text(t+1).appendTo(r).addClass("skin-color").addClass("flipbook-thumb-num")}p.bind("touchend click",function(e){if(e.stopPropagation(),e.preventDefault(),!o.thumbScroll.moved){var t=Number(k(this).attr("page-title"));o.options.rightToLeft&&(t=o.options.pages.length-t+1),o.options.singlePageMode&&t--,o.Book.goingToPage!=t&&o.Book.goToPage(t)}})}this.thumbScroll=new FLIPBOOK.IScroll(this.thumbsWrapper[0],{bounce:!1,mouseWheel:!0,scrollbars:!0,interactiveScrollbars:!0})}},toggleThumbs:function(e){this.thumbsCreated||(this.createThumbs(),this.initColors()),this.thumbHolder&&(!this.thumbsShowing||e?(this.closeMenus(),this.thumbsShowing=!0,this.thumbHolder.show(),this.thumbsVertical(),this.options.sideMenuOverBook||this.bookLayer.css("left",this.thumbHolder.width()+"px"),this.thumbsWrapper.appendTo(this.thumbHolder).css("top","50px"),this.showAllThumbs(),k(".thumb-btn-close").hide()):(this.thumbHolder.hide(),this.options.sideMenuOverBook||this.bookLayer.css("left","0"),this.thumbsShowing=!1),this.resize())},toggleToc:function(e){!this.tocShowing||e?(this.closeMenus(),this.tocShowing=!0,this.tocHolder.show(),this.tocScroll.refresh(),this.options.sideMenuOverBook||this.bookLayer.css("left",this.tocHolder.width()+"px")):(this.tocHolder.hide(),this.tocShowing=!1,this.options.sideMenuOverBook||this.bookLayer.css("left","0")),this.resize()},toggleSearch:function(e){this.thumbsCreated||(this.createThumbs(),this.initColors()),!this.searchShowing||e?(this.closeMenus(),this.searchShowing=!0,this.searchHolder.show(),this.options.sideMenuOverBook||this.bookLayer.css("left",this.searchHolder.width()+"px"),this.thumbsWrapper.appendTo(this.searchHolder).css("top","120px"),this.hideAllThumbs(),k(".thumb-btn-close").hide(),this.searchScroll.refresh(),this.$findInput.focus()):(this.searchHolder.hide(),this.searchShowing=!1,this.options.sideMenuOverBook||this.bookLayer.css("left","0")),this.$findInput.val(""),this.$findInfo.hide(),this.resize(),this.unmark()},toggleBookmark:function(){this.thumbsCreated||(this.createThumbs(),this.initColors()),this.bookmarkShowing?(this.bookmarkHolder.hide(),this.bookmarkShowing=!1,k(".thumb-btn-close").hide(),this.options.sideMenuOverBook||this.bookLayer.css("left","0")):(this.closeMenus(),this.bookmarkShowing=!0,k(".thumb-btn-close").show(),this.bookmarkHolder.show(),this.bookmarkScroll.refresh(),this.options.sideMenuOverBook||this.bookLayer.css("left",this.bookmarkHolder.width()+"px"),this.thumbsWrapper.appendTo(this.bookmarkHolder).css("top","120px"),this.showBookmarkedThumbs(),this.bookmarkScroll.refresh()),this.resize()},closeMenus:function(){this.thumbsShowing&&this.toggleThumbs(),this.tocShowing&&this.toggleToc(),this.searchShowing&&this.toggleSearch(),this.bookmarkShowing&&this.toggleBookmark(),this.printMenuShowing&&this.togglePrintMenu(),this.dlMenuShowing&&this.toggleDownloadMenu(),this.shareMenuShowing&&this.toggleShareMenu()},togglePrintMenu:function(){var t=this;if(this.printMenu)this.printMenuShowing?(this.printMenu.hide(),this.printMenuShowing=!1):(this.closeMenus(),this.printMenu.show(),this.printMenuShowing=!0);else{this.printMenu=k('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper);var e=k('<idv class="flipbook-sub-menu-center">').appendTo(this.printMenu),o=k('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(e);this.createMenuHeader(o,this.strings.print,this.togglePrintMenu);k('<a><div class="c-p skin-color flipbook-btn">'+this.strings.printCurrentPage+"</div></a>").appendTo(o).bind("touchend click",function(e){t.printPage(t.cPage[0],this)}),k('<a><div class="c-l-p skin-color flipbook-btn">'+this.strings.printLeftPage+"</div></a>").appendTo(this.printMenu).appendTo(o).bind("touchend click",function(e){t.printPage(t.cPage[0],this)}),k('<a><div class="c-r-p skin-color flipbook-btn">'+this.strings.printRightPage+"</div></a>").appendTo(this.printMenu).appendTo(o).bind("touchend click",function(e){t.printPage(t.cPage[1],this)}),k('<a><div class="skin-color flipbook-btn">'+this.strings.printAllPages+"</div></a>").appendTo(o).bind("touchend click",function(e){t.togglePrintWindow()});this.closeMenus(),this.printMenuShowing=!0,this.initColors()}2==this.cPage.length?(this.wrapper.find(".c-l-p").show(),this.wrapper.find(".c-r-p").show(),this.wrapper.find(".c-p").hide()):(this.wrapper.find(".c-l-p").hide(),this.wrapper.find(".c-r-p").hide(),this.wrapper.find(".c-p").show())},toggleDownloadMenu:function(){var o=this;if(this.dlMenu)this.dlMenuShowing?(this.dlMenu.hide(),this.dlMenuShowing=!1):(this.dlMenu.show(),this.closeMenus(),this.dlMenuShowing=!0);else{this.dlMenu=k('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper);var e=k('<idv class="flipbook-sub-menu-center">').appendTo(this.dlMenu),t=k('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(e);this.createMenuHeader(t,this.strings.download,this.toggleDownloadMenu);k('<a><div class="c-p skin-color flipbook-btn">'+this.strings.downloadCurrentPage+"</div></a>").appendTo(t).bind("touchend click",function(e){o.downloadPage(o.cPage[0],this)}),k('<a><div class="c-l-p skin-color flipbook-btn">'+this.strings.downloadLeftPage+"</div></a>").appendTo(t).bind("touchend click",function(e){o.downloadPage(o.cPage[0],this)}),k('<a><div class="c-r-p skin-color flipbook-btn">'+this.strings.downloadRightPage+"</div></a>").appendTo(t).bind("touchend click",function(e){o.downloadPage(o.cPage[1],this)}),k('<a><div class="skin-color flipbook-btn">'+this.strings.downloadAllPages+"</div></a>").appendTo(t).bind("touchend click",function(e){var t=v.createElement("a");t.href=o.options.btnDownloadPages.url,t.download=o.options.btnDownloadPages.name,t.dispatchEvent(new MouseEvent("click"))});this.closeMenus(),this.dlMenuShowing=!0,this.initColors()}2==this.cPage.length?(this.wrapper.find(".c-l-p").show(),this.wrapper.find(".c-r-p").show(),this.wrapper.find(".c-p").hide()):(this.wrapper.find(".c-l-p").hide(),this.wrapper.find(".c-r-p").hide(),this.wrapper.find(".c-p").show())},toggleShareMenu:function(){if(this.shareMenu)this.shareMenuShowing?(this.shareMenu.hide(),this.shareMenuShowing=!1):(this.shareMenu.show(),this.closeMenus(),this.shareMenuShowing=!0);else{this.shareMenu=k('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper);var e=k('<idv class="flipbook-sub-menu-center">').appendTo(this.shareMenu),t=k('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(e);this.createMenuHeader(t,"Share",this.toggleShareMenu);var o=k('<idv class="flipbook-share">').appendTo(t),i=this.options;this.share=new Share(o[0],{networks:{google_plus:i.google_plus,twitter:i.twitter,facebook:i.facebook,pinterest:i.pinterest,email:i.email}}),this.closeMenus(),this.shareMenuShowing=!0,this.initColors()}},bookmarkPage:function(e){var t=this.getBookmarkedPages();t.indexOf(String(e))<0&&t.push(e),this.setBookmarkedPages(t),this.showBookmarkedThumbs(),this.bookmarkShowing||this.toggleBookmark()},removeBookmark:function(e){var t=this.getBookmarkedPages();-1<t.indexOf(String(e))&&t.splice(t.indexOf(String(e)),1),this.setBookmarkedPages(t),this.showBookmarkedThumbs(),this.bookmarkShowing||this.toggleBookmark()},isBookmarked:function(e){return 0<this.getBookmarkedPages().indexOf(String(e))},getBookmarkedPages:function(){var e=localStorage.getItem(this.options.name+"_flipbook_bookmarks");return e?e.split(";"):[]},setBookmarkedPages:function(e){localStorage.setItem(this.options.name+"_flipbook_bookmarks",e.join(";"))},printPage:function(e,t){var o;if(this.options.pages[e]&&this.options.pages[e].print?o=this.options.pages[e].print:this.options.pages[e]&&this.options.pages[e].canvas&&this.options.pages[e].canvas[this.options.pageTextureSize]?o=this.options.pages[e].canvas[this.options.pageTextureSize].toDataURL():this.options.pages[e]&&this.options.pages[e].src&&(o=this.options.pages[e].src),o){var i="<!DOCTYPE html>";i+="<html>",i+="<head><title>Print canvas</title></head>",i+="<body>",i+='<img src="'+o+'">',i+="</body>",i+="</html>";var n=w.open("","Print","height=1600,width=800");n.document.open(),n.document.write(i),n.document.close(),n.document.addEventListener("load",function(){n.focus(),n.print(),n.document.close(),n.close()},!0)}},downloadPage:function(e){if(this.options.pages[e]&&this.options.pages[e].download)url=this.options.pages[e].download;else if(this.options.pages[e]&&this.options.pages[e].src)url=this.options.pages[e].src;else if(this.options.pages[e]&&this.options.pages[e].canvas&&this.options.pages[e].canvas[this.options.pageTextureSize]){var t=v.createElement("canvas"),o=this.options.pageWidth/this.options.pageHeight;t.width=this.options.pageTextureSize*o,t.height=this.options.pageTextureSize,t.getContext("2d").drawImage(this.options.pages[e].canvas[this.options.pageTextureSize],0,0),url=t.toDataURL("image/jpeg",.5),delete t}if(url){var i=v.createElement("a");i.href=url,i.download="page"+String(e+1),v.body.appendChild(i),i.click(),v.body.removeChild(i),delete i}},showAllThumbs:function(){k(".flipbook-thumb").show(),this.thumbScroll.refresh()},hideAllThumbs:function(){k(".flipbook-thumb").hide(),this.thumbScroll.refresh()},showThumb:function(e){this.thumbs[e].show(),this.thumbScroll.refresh()},hideThumb:function(e){this.thumbs[e].hide(),this.thumbScroll.refresh()},showBookmarkedThumbs:function(){var e=this.getBookmarkedPages();this.hideAllThumbs();for(var t=0;t<e.length;t++){var o=e[t];o&&this.showThumb(o)}},printPdf:function(e){w.open(e,"_blank").onload=function(){this.print()}},togglePrintWindow:function(e){var n;(n=this).options.printPdfUrl?n.printPdf(n.options.printPdfUrl):n.options.pdfUrl?n.printPdf(n.options.pdfUrl):t();function t(){link="about:blank";var e=w.open(link,"_new");e.document.open();for(var t="",o=0;o<n.options.pages.length;o++)n.options.pages[o].src&&(t+='<img src="'+n.options.pages[o].src.toString()+'"/>\n');var i="<html>\n<head>\n<title>Temporary Printing Window</title>\n<script>\nfunction step1() {\n  setTimeout('step2()', 10);\n}\nfunction step2() {\n  window.print();\n  window.close();\n}\n<\/script>\n</head>\n<body onLoad='step1()'>\n"+t+"</body>\n</html>\n";e.document.write(i),e.document.close()}},thumbsVertical:function(){this.thumbsCreated&&(this.thumbScroll.hScroll=!1,this.thumbScroll.vScroll=!0,this.thumbScroll.refresh())},toggleExpand:function(e){this.browserFullscreen=!0;var t=this.lightbox?v.documentElement:this.elem[0];screenfull.enabled?screenfull.toggle(t):(k(t).toggleClass("flipbook-browser-fullscreen"),this.isFullscreen=!this.isFullscreen,this.handleFsChange())},expand:function(){},toggleAutoplay:function(e){var t=this;this.autoplay=e||!this.autoplay,this.autoplay?(t.btnAutoplay.find("."+t.btnAutoplay.icon).hide(),t.btnAutoplay.find("."+t.btnAutoplay.iconAlt).show(),this.autoplayTimer=setInterval(function(){if(t.autoplay){var e=t.options.autoplayStartPage||1;t.options.rightToLeft?t.Book.prevEnabled?t.Book.prevPage():t.goToPage(t.options.pages.length-e+1):t.Book.nextEnabled?t.Book.nextPage():t.goToPage(e)}},t.options.autoplayInterval)):(t.btnAutoplay.find("."+t.btnAutoplay.icon).show(),t.btnAutoplay.find("."+t.btnAutoplay.iconAlt).hide(),clearInterval(t.autoplayTimer))},triggerResize:function(){setTimeout(function(){k(w).trigger("resize")},100),setTimeout(function(){k(w).trigger("resize")},500),setTimeout(function(){k(w).trigger("resize")},2e3)},toggleSlideshow:function(){},initEasing:function(){w.jQuery.extend(w.jQuery.easing,{def:"easeOutQuad",swing:function(e,t,o,i,n){return k.easing[k.easing.def](e,t,o,i,n)},easeInQuad:function(e,t,o,i,n){return i*(t/=n)*t+o},easeOutQuad:function(e,t,o,i,n){return-i*(t/=n)*(t-2)+o},easeInOutQuad:function(e,t,o,i,n){return(t/=n/2)<1?i/2*t*t+o:-i/2*(--t*(t-2)-1)+o},easeInCubic:function(e,t,o,i,n){return i*(t/=n)*t*t+o},easeOutCubic:function(e,t,o,i,n){return i*((t=t/n-1)*t*t+1)+o},easeInOutCubic:function(e,t,o,i,n){return(t/=n/2)<1?i/2*t*t*t+o:i/2*((t-=2)*t*t+2)+o},easeInQuart:function(e,t,o,i,n){return i*(t/=n)*t*t*t+o},easeOutQuart:function(e,t,o,i,n){return-i*((t=t/n-1)*t*t*t-1)+o},easeInOutQuart:function(e,t,o,i,n){return(t/=n/2)<1?i/2*t*t*t*t+o:-i/2*((t-=2)*t*t*t-2)+o},easeInQuint:function(e,t,o,i,n){return i*(t/=n)*t*t*t*t+o},easeOutQuint:function(e,t,o,i,n){return i*((t=t/n-1)*t*t*t*t+1)+o},easeInOutQuint:function(e,t,o,i,n){return(t/=n/2)<1?i/2*t*t*t*t*t+o:i/2*((t-=2)*t*t*t*t+2)+o},easeInSine:function(e,t,o,i,n){return-i*Math.cos(t/n*(Math.PI/2))+i+o},easeOutSine:function(e,t,o,i,n){return i*Math.sin(t/n*(Math.PI/2))+o},easeInOutSine:function(e,t,o,i,n){return-i/2*(Math.cos(Math.PI*t/n)-1)+o},easeInExpo:function(e,t,o,i,n){return 0==t?o:i*Math.pow(2,10*(t/n-1))+o},easeOutExpo:function(e,t,o,i,n){return t==n?o+i:i*(1-Math.pow(2,-10*t/n))+o},easeInOutExpo:function(e,t,o,i,n){return 0==t?o:t==n?o+i:(t/=n/2)<1?i/2*Math.pow(2,10*(t-1))+o:i/2*(2-Math.pow(2,-10*--t))+o},easeInCirc:function(e,t,o,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+o},easeOutCirc:function(e,t,o,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+o},easeInOutCirc:function(e,t,o,i,n){return(t/=n/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+o:i/2*(Math.sqrt(1-(t-=2)*t)+1)+o},easeInElastic:function(e,t,o,i,n){var s=1.70158,a=0,r=i;if(0==t)return o;if(1==(t/=n))return o+i;if(a||(a=.3*n),r<Math.abs(i)){r=i;s=a/4}else s=a/(2*Math.PI)*Math.asin(i/r);return-r*Math.pow(2,10*(t-=1))*Math.sin((t*n-s)*(2*Math.PI)/a)+o},easeOutElastic:function(e,t,o,i,n){var s=1.70158,a=0,r=i;if(0==t)return o;if(1==(t/=n))return o+i;if(a||(a=.3*n),r<Math.abs(i)){r=i;s=a/4}else s=a/(2*Math.PI)*Math.asin(i/r);return r*Math.pow(2,-10*t)*Math.sin((t*n-s)*(2*Math.PI)/a)+i+o},easeInOutElastic:function(e,t,o,i,n){var s=1.70158,a=0,r=i;if(0==t)return o;if(2==(t/=n/2))return o+i;if(a||(a=n*(.3*1.5)),r<Math.abs(i)){r=i;s=a/4}else s=a/(2*Math.PI)*Math.asin(i/r);return t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t*n-s)*(2*Math.PI)/a)*-.5+o:r*Math.pow(2,-10*(t-=1))*Math.sin((t*n-s)*(2*Math.PI)/a)*.5+i+o},easeInBack:function(e,t,o,i,n,s){return s==a&&(s=1.70158),i*(t/=n)*t*((s+1)*t-s)+o},easeOutBack:function(e,t,o,i,n,s){return s==a&&(s=1.70158),i*((t=t/n-1)*t*((s+1)*t+s)+1)+o},easeInOutBack:function(e,t,o,i,n,s){return s==a&&(s=1.70158),(t/=n/2)<1?i/2*(t*t*((1+(s*=1.525))*t-s))+o:i/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+o},easeInBounce:function(e,t,o,i,n){return i-k.easing.easeOutBounce(e,n-t,0,i,n)+o},easeOutBounce:function(e,t,o,i,n){return(t/=n)<1/2.75?i*(7.5625*t*t)+o:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+o:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+o:i*(7.5625*(t-=2.625/2.75)*t+.984375)+o},easeInOutBounce:function(e,t,o,i,n){return t<n/2?.5*k.easing.easeInBounce(e,2*t,0,i,n)+o:.5*k.easing.easeOutBounce(e,2*t-n,0,i,n)+.5*i+o}})}},FLIPBOOK.Book=function(){},FLIPBOOK.Book.prototype={rightIndex:0,goToPage:function(){}},FLIPBOOK.Lightbox=function(e,t,o){var i=this;this.context=e,this.options=o,this.lightboxOpened=!1,e.$elem.bind("tap click",function(e){i.openLightbox(),e.stopPropagation()});k(e.elem).find("img");i.overlay=k(v.createElement("div")).attr("style",o.lightboxCSS).addClass("flipbook-overlay").css("display","none").css("top",i.options.lightboxMarginV).css("bottom",i.options.lightboxMarginV).css("left",i.options.lightboxMarginH).css("right",i.options.lightboxMarginH).appendTo("body"),i.options.lightboxCloseOnClick&&k("body").bind("tap click",function(e){var t=k(e.target);t.parents().hasClass("flipbook-overlay")&&!t.hasClass("flipbook-bookLayer")||i.closeLightbox()}),o.lightboxBackground&&i.overlay.css("background",o.lightboxBackground),k(v).keyup(function(e){27==e.keyCode&&i.closeLightbox()}),i.wrapper=k(v.createElement("div")).css("height","auto").appendTo(i.overlay),i.wrapper.attr("class","flipbook-wrapper-transparent").css("margin","0px auto").css("padding","0px").css("height","100%").css("width","100%"),t.appendTo(i.wrapper);var n=k("<div/>").appendTo(i.wrapper).addClass("flipbook-lightbox-toolbar"),s=o,a=k('<span title="'+s.strings.pressEscToClose+'"/>').appendTo(n).bind("touchend click",function(e){e.stopPropagation(),e.preventDefault(),i.closeLightbox()});k("<span/>").appendTo(a).addClass("flipbook-lightbox-close fa fa-times").css({"font-size":s.closeBtnSize+"px",padding:s.closeBtnPadding+"px ",margin:s.closeBtnMargin+"px ","border-radius":s.closeBtnRadius+"px ","text-shadow":s.closeBtnTextShadow,color:s.closeBtnColor,background:s.closeBtnBackground,border:s.closeBtnBorder})},FLIPBOOK.Lightbox.prototype={openLightbox:function(){this.lightboxOpened||(this.lightboxOpened=!0,this.overlay.css("display","none"),this.overlay.fadeIn("slow",function(){}),k("body").addClass("flipbook-overflow-hidden"),k("html").addClass("flipbook-overflow-hidden"))},closeLightbox:function(){1==this.lightboxOpened&&(this.lightboxOpened=!1,this.overlay.fadeOut("fast"),k("body").removeClass("flipbook-overflow-hidden"),k("html").removeClass("flipbook-overflow-hidden"),this.context.lightboxEnd())},resize:function(){var e=k(w);e.width(),e.height()}},FLIPBOOK.getFlipbookSrc=function(){for(var e=v.getElementsByTagName("script"),t=0;t<e.length;t++){var o=String(e[t].src);if(o.match("flipbook\\.js")||o.match("flipbook\\.min\\.js"))return o}return""},FLIPBOOK.flipbookSrc=FLIPBOOK.getFlipbookSrc(),FLIPBOOK.iscrollSrc=FLIPBOOK.flipbookSrc.replace("/flipbook.","/iscroll."),FLIPBOOK.threejsSrc=FLIPBOOK.flipbookSrc.replace("/flipbook.","/three."),FLIPBOOK.flipbookWebGlSrc=FLIPBOOK.flipbookSrc.replace("/flipbook.","/flipbook.webgl."),FLIPBOOK.flipbookBook3Src=FLIPBOOK.flipbookSrc.replace("/flipbook.","/flipbook.book3."),FLIPBOOK.flipBookSwipeSrc=FLIPBOOK.flipbookSrc.replace("/flipbook.","/flipbook.swipe."),FLIPBOOK.pdfjsSrc=FLIPBOOK.flipbookSrc.replace("/flipbook.","/pdf."),FLIPBOOK.pdfServiceSrc=FLIPBOOK.flipbookSrc.replace("/flipbook.","/flipbook.pdfservice."),FLIPBOOK.pdfjsworkerSrc=FLIPBOOK.flipbookSrc.replace("/flipbook.","/pdf.worker."),FLIPBOOK.markSrc="https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/jquery.mark.min.js",FLIPBOOK.scriptsLoaded={},FLIPBOOK.scriptsAdded={}}(jQuery,window,document),function(){"use strict";var e="undefined"!=typeof module&&module.exports,o="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var e,t,o=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,n=o.length,s={};i<n;i++)if((e=o[i])&&e[1]in document){for(i=0,t=e.length;i<t;i++)s[o[0][i]]=e[i];return s}return!1}(),t={request:function(e){var t=i.requestFullscreen;e=e||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?e[t]():e[t](o&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[i.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},raw:i};i?(Object.defineProperties(t,{isFullscreen:{get:function(){return!!document[i.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[i.fullscreenEnabled]}}}),e?module.exports=t:window.screenfull=t):e?module.exports=!1:window.screenfull=!1}(),function(e){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}(navigator.userAgent||navigator.vendor||window.opera),function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(re){"use strict";function i(e,f){function t(e){if(!(!0===Y.data(Ce+"_intouch")||0<re(e.target).closest(f.excludedElements,Y).length)){var t=e.originalEvent?e.originalEvent:e;if(!t.pointerType||"mouse"!=t.pointerType||0!=f.fallbackToMouseEvents){var o,i=t.touches,n=i?i[0]:t;return X=Te,i?J=i.length:!1!==f.preventDefaultEvents&&e.preventDefault(),Q=R=j=null,q=1,$=U=V=W=N=0,(s={})[le]=L(le),s[pe]=L(pe),s[de]=L(de),s[ce]=L(ce),Z=s,B(),O(0,n),!i||J===f.fingers||f.fingers===Be||k()?(ee=E(),2==J&&(O(1,i[1]),V=U=F(G[0].start,G[1].start)),(f.swipeStatus||f.pinchStatus)&&(o=m(t,X))):o=!1,!1===o?(m(t,X=Me),o):(f.hold&&(ae=setTimeout(re.proxy(function(){Y.trigger("hold",[t.target]),f.hold&&(o=f.hold.call(Y,t,t.target))},this),f.longTapThreshold)),T(!0),null)}}var s}function o(e){var t,o,i,n,s,a,r,l,p=e.originalEvent?e.originalEvent:e;if(X!==ye&&X!==Me&&!x()){var d,c=p.touches,h=y(c?c[0]:p);if(te=E(),c&&(J=c.length),f.hold&&clearTimeout(ae),X=Oe,2==J&&(0==V?(O(1,c[1]),V=U=F(G[0].start,G[1].start)):(y(c[1]),U=F(G[0].end,G[1].end),G[0].end,G[1].end,Q=q<1?ue:he),q=(U/V*1).toFixed(2),$=Math.abs(V-U)),J===f.fingers||f.fingers===Be||!c||k()){if(j=C(h.start,h.end),function(e,t){if(!1!==f.preventDefaultEvents)if(f.allowPageScroll===ge)e.preventDefault();else{var o=f.allowPageScroll===fe;switch(t){case le:(f.swipeLeft&&o||!o&&f.allowPageScroll!=Pe)&&e.preventDefault();break;case pe:(f.swipeRight&&o||!o&&f.allowPageScroll!=Pe)&&e.preventDefault();break;case de:(f.swipeUp&&o||!o&&f.allowPageScroll!=Se)&&e.preventDefault();break;case ce:(f.swipeDown&&o||!o&&f.allowPageScroll!=Se)&&e.preventDefault()}}}(e,R=C(h.last,h.end)),r=h.start,l=h.end,N=Math.round(Math.sqrt(Math.pow(l.x-r.x,2)+Math.pow(l.y-r.y,2))),W=I(),a=N,(s=j)!=ge&&(a=Math.max(a,M(s)),Z[s].distance=a),d=m(p,X),!f.triggerOnTouchEnd||f.triggerOnTouchLeave){var u=!0;if(f.triggerOnTouchLeave){var g={left:(n=(i=re(i=this)).offset()).left,right:n.left+i.outerWidth(),top:n.top,bottom:n.top+i.outerHeight()};t=h.end,o=g,u=t.x>o.left&&t.x<o.right&&t.y>o.top&&t.y<o.bottom}!f.triggerOnTouchEnd&&u?X=b(Oe):f.triggerOnTouchLeave&&!u&&(X=b(ye)),X!=Me&&X!=ye||m(p,X)}}else m(p,X=Me);!1===d&&m(p,X=Me)}}function i(e){var t,o=e.originalEvent?e.originalEvent:e,i=o.touches;if(i){if(i.length&&!x())return t=o,oe=E(),ie=t.touches.length+1,!0;if(i.length&&x())return!0}return x()&&(J=ie),te=E(),W=I(),p()||!l()?m(o,X=Me):f.triggerOnTouchEnd||!1===f.triggerOnTouchEnd&&X===Oe?(!1!==f.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),m(o,X=ye)):!f.triggerOnTouchEnd&&v()?r(o,X=ye,ke):X===Oe&&m(o,X=Me),T(!1),null}function n(){U=V=ee=te=J=0,q=1,B(),T(!1)}function s(e){var t=e.originalEvent?e.originalEvent:e;f.triggerOnTouchLeave&&m(t,X=b(ye))}function a(){Y.unbind(_,t),Y.unbind(K,n),Y.unbind(D,o),Y.unbind(H,i),A&&Y.unbind(A,s),T(!1)}function b(e){var t=e,o=d(),i=l(),n=p();return!o||n?t=Me:!i||e!=Oe||f.triggerOnTouchEnd&&!f.triggerOnTouchLeave?!i&&e==ye&&f.triggerOnTouchLeave&&(t=Me):t=ye,t}function m(e,t){var o,i=e.touches;return(!(!h()||!u())||u())&&(o=r(e,t,be)),(!(!c()||!k())||k())&&!1!==o&&(o=r(e,t,me)),S()&&P()&&!1!==o?o=r(e,t,we):W>f.longTapThreshold&&N<xe&&f.longTap&&!1!==o?o=r(e,t,ve):!(1!==J&&Le||!(isNaN(N)||N<f.threshold)||!v())&&!1!==o&&(o=r(e,t,ke)),t===Me&&n(),t===ye&&(i&&i.length||n()),o}function r(e,t,o){var i;if(o==be){if(Y.trigger("swipeStatus",[t,j||null,N||0,W||0,J,G,R]),f.swipeStatus&&!1===(i=f.swipeStatus.call(Y,e,t,j||null,N||0,W||0,J,G,R)))return!1;if(t==ye&&h()){if(clearTimeout(se),clearTimeout(ae),Y.trigger("swipe",[j,N,W,J,G,R]),f.swipe&&!1===(i=f.swipe.call(Y,e,j,N,W,J,G,R)))return!1;switch(j){case le:Y.trigger("swipeLeft",[j,N,W,J,G,R]),f.swipeLeft&&(i=f.swipeLeft.call(Y,e,j,N,W,J,G,R));break;case pe:Y.trigger("swipeRight",[j,N,W,J,G,R]),f.swipeRight&&(i=f.swipeRight.call(Y,e,j,N,W,J,G,R));break;case de:Y.trigger("swipeUp",[j,N,W,J,G,R]),f.swipeUp&&(i=f.swipeUp.call(Y,e,j,N,W,J,G,R));break;case ce:Y.trigger("swipeDown",[j,N,W,J,G,R]),f.swipeDown&&(i=f.swipeDown.call(Y,e,j,N,W,J,G,R))}}}if(o==me){if(Y.trigger("pinchStatus",[t,Q||null,$||0,W||0,J,q,G]),f.pinchStatus&&!1===(i=f.pinchStatus.call(Y,e,t,Q||null,$||0,W||0,J,q,G)))return!1;if(t==ye&&c())switch(Q){case he:Y.trigger("pinchIn",[Q||null,$||0,W||0,J,q,G]),f.pinchIn&&(i=f.pinchIn.call(Y,e,Q||null,$||0,W||0,J,q,G));break;case ue:Y.trigger("pinchOut",[Q||null,$||0,W||0,J,q,G]),f.pinchOut&&(i=f.pinchOut.call(Y,e,Q||null,$||0,W||0,J,q,G))}}return o==ke?t!==Me&&t!==ye||(clearTimeout(se),clearTimeout(ae),P()&&!S()?(ne=E(),se=setTimeout(re.proxy(function(){ne=null,Y.trigger("tap",[e.target]),f.tap&&(i=f.tap.call(Y,e,e.target))},this),f.doubleTapThreshold)):(ne=null,Y.trigger("tap",[e.target]),f.tap&&(i=f.tap.call(Y,e,e.target)))):o==we?t!==Me&&t!==ye||(clearTimeout(se),clearTimeout(ae),ne=null,Y.trigger("doubletap",[e.target]),f.doubleTap&&(i=f.doubleTap.call(Y,e,e.target))):o==ve&&(t!==Me&&t!==ye||(clearTimeout(se),ne=null,Y.trigger("longtap",[e.target]),f.longTap&&(i=f.longTap.call(Y,e,e.target)))),i}function l(){var e=!0;return null!==f.threshold&&(e=N>=f.threshold),e}function p(){var e=!1;return null!==f.cancelThreshold&&null!==j&&(e=M(j)-N>=f.cancelThreshold),e}function d(){return!(f.maxTimeThreshold&&W>=f.maxTimeThreshold)}function c(){var e=g(),t=w(),o=null===f.pinchThreshold||$>=f.pinchThreshold;return e&&t&&o}function k(){return!!(f.pinchStatus||f.pinchIn||f.pinchOut)}function h(){var e=d(),t=l(),o=g(),i=w();return!p()&&i&&o&&t&&e}function u(){return!!(f.swipe||f.swipeStatus||f.swipeLeft||f.swipeRight||f.swipeUp||f.swipeDown)}function g(){return J===f.fingers||f.fingers===Be||!Le}function w(){return 0!==G[0].end.x}function v(){return!!f.tap}function P(){return!!f.doubleTap}function S(){if(null==ne)return!1;var e=E();return P()&&e-ne<=f.doubleTapThreshold}function B(){ie=oe=0}function x(){var e=!1;oe&&(E()-oe<=f.fingerReleaseThreshold&&(e=!0));return e}function T(e){Y&&(!0===e?(Y.bind(D,o),Y.bind(H,i),A&&Y.bind(A,s)):(Y.unbind(D,o,!1),Y.unbind(H,i,!1),A&&Y.unbind(A,s,!1)),Y.data(Ce+"_intouch",!0===e))}function O(e,t){var o={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return o.start.x=o.last.x=o.end.x=t.pageX||t.clientX,o.start.y=o.last.y=o.end.y=t.pageY||t.clientY,G[e]=o}function y(e){var t=void 0!==e.identifier?e.identifier:0,o=G[t]||null;return null===o&&(o=O(t,e)),o.last.x=o.end.x,o.last.y=o.end.y,o.end.x=e.pageX||e.clientX,o.end.y=e.pageY||e.clientY,o}function M(e){if(Z[e])return Z[e].distance}function L(e){return{direction:e,distance:0}}function I(){return te-ee}function F(e,t){var o=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return Math.round(Math.sqrt(o*o+i*i))}function C(e,t){if(i=t,(o=e).x==i.x&&o.y==i.y)return ge;var o,i,n,s,a,r,l,p,d=(s=t,a=(n=e).x-s.x,r=s.y-n.y,l=Math.atan2(r,a),(p=Math.round(180*l/Math.PI))<0&&(p=360-Math.abs(p)),p);return d<=45&&0<=d?le:d<=360&&315<=d?le:135<=d&&d<=225?pe:45<d&&d<135?ce:de}function E(){return(new Date).getTime()}f=re.extend({},f);var z=Le||Fe||!f.fallbackToMouseEvents,_=z?Fe?Ie?"MSPointerDown":"pointerdown":"touchstart":"mousedown",D=z?Fe?Ie?"MSPointerMove":"pointermove":"touchmove":"mousemove",H=z?Fe?Ie?"MSPointerUp":"pointerup":"touchend":"mouseup",A=z?Fe?"mouseleave":null:"mouseleave",K=Fe?Ie?"MSPointerCancel":"pointercancel":"touchcancel",N=0,j=null,R=null,W=0,V=0,U=0,q=1,$=0,Q=0,Z=null,Y=re(e),X="start",J=0,G={},ee=0,te=0,oe=0,ie=0,ne=0,se=null,ae=null;try{Y.bind(_,t),Y.bind(K,n)}catch(e){re.error("events not supported "+_+","+K+" on jQuery.swipe")}this.enable=function(){return this.disable(),Y.bind(_,t),Y.bind(K,n),Y},this.disable=function(){return a(),Y},this.destroy=function(){a(),Y.data(Ce,null),Y=null},this.option=function(e,t){if("object"==typeof e)f=re.extend(f,e);else if(void 0!==f[e]){if(void 0===t)return f[e];f[e]=t}else{if(!e)return f;re.error("Option "+e+" does not exist on jQuery.swipe.options")}return null}}var le="left",pe="right",de="up",ce="down",he="in",ue="out",ge="none",fe="auto",be="swipe",me="pinch",ke="tap",we="doubletap",ve="longtap",Pe="horizontal",Se="vertical",Be="all",xe=10,Te="start",Oe="move",ye="end",Me="cancel",Le="ontouchstart"in window,Ie=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!Le,Fe=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!Le,Ce="TouchSwipe";re.fn.swipe=function(e){var t=re(this),o=t.data(Ce);if(o&&"string"==typeof e){if(o[e])return o[e].apply(o,Array.prototype.slice.call(arguments,1));re.error("Method "+e+" does not exist on jQuery.swipe")}else if(o&&"object"==typeof e)o.option.apply(o,arguments);else if(!(o||"object"!=typeof e&&e))return function(o){return!o||void 0!==o.allowPageScroll||void 0===o.swipe&&void 0===o.swipeStatus||(o.allowPageScroll=ge),void 0!==o.click&&void 0===o.tap&&(o.tap=o.click),o||(o={}),o=re.extend({},re.fn.swipe.defaults,o),this.each(function(){var e=re(this),t=e.data(Ce);t||(t=new i(this,o),e.data(Ce,t))})}.apply(this,arguments);return t},re.fn.swipe.version="1.6.18",re.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},re.fn.swipe.phases={PHASE_START:Te,PHASE_MOVE:Oe,PHASE_END:ye,PHASE_CANCEL:Me},re.fn.swipe.directions={LEFT:le,RIGHT:pe,UP:de,DOWN:ce,IN:he,OUT:ue},re.fn.swipe.pageScroll={NONE:ge,HORIZONTAL:Pe,VERTICAL:Se,AUTO:fe},re.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:Be}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Share=e()}}(function(){var o;"classList"in document.documentElement||!Object.defineProperty||"undefined"==typeof HTMLElement||Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){var e,n,t;return t=function(i){return function(e){var t,o;o=(t=n.className.split(/\s+/)).indexOf(e),i(t,o,e),n.className=t.join(" ")}},n=this,e={add:t(function(e,t,o){~t||e.push(o)}),remove:t(function(e,t){~t&&e.splice(t,1)}),toggle:t(function(e,t,o){~t?e.splice(t,1):e.push(o)}),contains:function(e){return!!~n.className.split(/\s+/).indexOf(e)},item:function(e){return n.className.split(/\s+/)[e]||null}},Object.defineProperty(e,"length",{get:function(){return n.className.split(/\s+/).length}}),e}}),String.prototype.to_rfc3986=function(){return encodeURIComponent(this).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16)})},o=function(){function e(){}return e.prototype.extend=function(e,t,o){var i,n;for(n in t)(i=void 0!==e[n])&&"object"==typeof t[n]?this.extend(e[n],t[n],o):(o||!i)&&(e[n]=t[n])},e.prototype.hide=function(e){return e.style.display="none"},e.prototype.show=function(e){return e.style.display="block"},e.prototype.has_class=function(e,t){return e.classList.contains(t)},e.prototype.add_class=function(e,t){return e.classList.add(t)},e.prototype.remove_class=function(e,t){return e.classList.remove(t)},e.prototype.is_encoded=function(e){return e=e.to_rfc3986(),decodeURIComponent(e)!==e},e.prototype.encode=function(e){return void 0===e||this.is_encoded(e)?e:e.to_rfc3986()},e.prototype.popup=function(e,t){var o,i,n,s;return null==t&&(t={}),(i={width:500,height:350}).top=screen.height/2-i.height/2,i.left=screen.width/2-i.width/2,(n=function(){var e;for(o in e=[],t)s=t[o],e.push(o+"="+this.encode(s));return e}.call(this).join("&"))&&(n="?"+n),window.open(e+n,"targetWindow","toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left="+i.left+",top="+i.top+",width="+i.width+",height="+i.height)},e}();var n={}.hasOwnProperty;return function(e){function t(e,t){return this.element=e,this.el={head:document.getElementsByTagName("head")[0],body:document.getElementsByTagName("body")[0]},this.config={enabled_networks:0,protocol:-1===["http","https"].indexOf(window.location.href.split(":")[0])?"https://":"//",url:window.location.href,caption:null,title:this.default_title(),image:this.default_image(),description:this.default_description(),ui:{flyout:"top center",button_text:"Share",button_font:!0,icon_font:!0},networks:{google_plus:{enabled:!0,url:null},twitter:{enabled:!0,url:null,description:null},facebook:{enabled:!0,load_sdk:!0,url:null,app_id:null,title:null,caption:null,description:null,image:null},pinterest:{enabled:!0,url:null,image:null,description:null},email:{enabled:!0,title:null,description:null}}},this.setup(this.element,t),this}return function(e,t){function o(){this.constructor=e}for(var i in t)n.call(t,i)&&(e[i]=t[i]);o.prototype=t.prototype,e.prototype=new o,e.__super__=t.prototype}(t,o),t.prototype.setup=function(e,t){var o,i,n,s;for(n=[e],this.extend(this.config,t,!0),this.set_global_configuration(),this.normalize_network_configuration(),this.config.networks.facebook.enabled&&this.config.networks.facebook.load_sdk&&this.inject_facebook_sdk(),i=o=0,s=n.length;o<s;i=++o)n[i],this.setup_instance(e,i)},t.prototype.setup_instance=function(e,t){var o,i,n,s,a,r,l,p;for(s=e,this.add_class(s,"sharer-"+t),this.inject_html(s),document.getElementById("flipbook-share-facebook").style.display=this.config.networks.facebook.display,document.getElementById("flipbook-share-twitter").style.display=this.config.networks.twitter.display,document.getElementById("flipbook-share-pinterest").style.display=this.config.networks.pinterest.display,document.getElementById("flipbook-share-email").style.display=this.config.networks.email.display,document.getElementById("flipbook-share-google_plus").style.display=this.config.networks.google_plus.display,s.getElementsByTagName("label")[0],i=s.getElementsByClassName("social")[0],l=s.getElementsByTagName("li"),this.add_class(i,"networks-"+this.config.enabled_networks),s.addEventListener("click",function(e){return function(){return e.event_toggle(i)}}(this)),o=this,p=[],t=n=0,a=l.length;n<a;t=++n)r=l[t],p.push(r.addEventListener("click",function(){return o.event_network(s,this),o.event_close(i)}));return p},t.prototype.event_toggle=function(e){return this.has_class(e,"active")?this.event_close(e):this.event_open(e)},t.prototype.event_open=function(e){return this.has_class(e,"load")&&this.remove_class(e,"load"),this.add_class(e,"active")},t.prototype.event_close=function(e){return this.remove_class(e,"active")},t.prototype.event_network=function(e,t){var o;return o=t.getAttribute("data-network"),this.hook("before",o,e),this["network_"+o](),this.hook("after",o,e)},t.prototype.open=function(){return this.public("open")},t.prototype.close=function(){return this.public("close")},t.prototype.toggle=function(){return this.public("toggle")},t.prototype.public=function(e){var t,o,i,n,s,a;for(a=[],i=o=0,n=(s=document.querySelectorAll(this.element)).length;o<n;i=++o)t=s[i].getElementsByClassName("social")[0],a.push(this["event_"+e](t));return a},t.prototype.network_facebook=function(){return this.config.networks.facebook.load_sdk?window.FB?FB.ui({method:"feed",name:this.config.networks.facebook.title,link:this.config.networks.facebook.url,picture:this.config.networks.facebook.image,caption:this.config.networks.facebook.caption,description:this.config.networks.facebook.description}):console.error("The Facebook JS SDK hasn't loaded yet."):this.popup("https://www.facebook.com/sharer/sharer.php",{u:this.config.networks.facebook.url})},t.prototype.network_twitter=function(){return this.popup("https://twitter.com/intent/tweet",{text:this.config.networks.twitter.description,url:this.config.networks.twitter.url})},t.prototype.network_google_plus=function(){return this.popup("https://plus.google.com/share",{url:this.config.networks.google_plus.url})},t.prototype.network_pinterest=function(){return this.popup("https://www.pinterest.com/pin/create/button",{url:this.config.networks.pinterest.url,media:this.config.networks.pinterest.image,description:this.config.networks.pinterest.description})},t.prototype.network_email=function(){return this.popup("mailto:",{subject:this.config.networks.email.title,body:this.config.networks.email.description+"%0D%0A"+this.config.url})},t.prototype.inject_stylesheet=function(e){var t;return this.el.head.querySelector('link[href="'+e+'"]')?void 0:((t=document.createElement("link")).setAttribute("rel","stylesheet"),t.setAttribute("href",e),this.el.head.appendChild(t))},t.prototype.inject_html=function(e){return e.innerHTML="<div class='social load "+this.config.ui.flyout+"'><ul><li id='flipbook-share-pinterest' class='fab fa-pinterest-p skin-color' data-network='pinterest'></li><li id='flipbook-share-twitter' class='fab fa-twitter skin-color' data-network='twitter'></li><li id='flipbook-share-facebook' class='fab fa-facebook-f skin-color' data-network='facebook'></li><li id='flipbook-share-google_plus' class='fab fa-google-plus-g skin-color' data-network='google_plus'></li><li id='flipbook-share-email' class='fas fa-at skin-color' data-network='email'></li></ul></div>"},t.prototype.inject_facebook_sdk=function(){var e,t;return window.FB||!this.config.networks.facebook.app_id||this.el.body.querySelector("#fb-root")?void 0:((t=document.createElement("script")).text="window.fbAsyncInit=function(){FB.init({appId:'"+this.config.networks.facebook.app_id+"',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='"+this.config.protocol+"connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')",(e=document.createElement("div")).id="fb-root",this.el.body.appendChild(e),this.el.body.appendChild(t))},t.prototype.hook=function(e,t,o){var i,n;"function"==typeof(i=this.config.networks[t][e])&&(void 0!==(n=i.call(this.config.networks[t],o))&&(n=this.normalize_filter_config_updates(n),this.extend(this.config.networks[t],n,!0),this.normalize_network_configuration()))},t.prototype.default_title=function(){var e;return(e=document.querySelector('meta[property="og:title"]')||document.querySelector('meta[name="twitter:title"]'))?e.getAttribute("content"):(e=document.querySelector("title"))?e.innerText:void 0},t.prototype.default_image=function(){var e;return(e=document.querySelector('meta[property="og:image"]')||document.querySelector('meta[name="twitter:image"]'))?e.getAttribute("content"):void 0},t.prototype.default_description=function(){var e;return(e=document.querySelector('meta[property="og:description"]')||document.querySelector('meta[name="twitter:description"]')||document.querySelector('meta[name="description"]'))?e.getAttribute("content"):""},t.prototype.set_global_configuration=function(){var e,t,o,i,n;for(t in n=[],i=this.config.networks){for(o in i[t])null==this.config.networks[t][o]&&(this.config.networks[t][o]=this.config[o]);this.config.networks[t].enabled?(e="block",this.config.enabled_networks+=1):e="none",n.push(this.config.networks[t].display=e)}return n},t.prototype.normalize_network_configuration=function(){return this.config.networks.facebook.app_id||(this.config.networks.facebook.load_sdk=!1),this.is_encoded(this.config.networks.twitter.description)||(this.config.networks.twitter.description=encodeURIComponent(this.config.networks.twitter.description)),"number"==typeof this.config.networks.facebook.app_id?this.config.networks.facebook.app_id=this.config.networks.facebook.app_id.toString():void 0},t.prototype.normalize_filter_config_updates=function(e){return this.config.networks.facebook.app_id!==e.app_id&&(console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly."),delete e.app_id),this.config.networks.facebook.load_sdk!==e.load_sdk&&(console.warn("You are unable to change the Facebook load_sdk option after the button has been initialized. Please update your Facebook filters accordingly."),delete e.app_id),e},t}()});!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,c){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,c=c&&c.hasOwnProperty("default")?c.default:c;var s,n,r,a,l,h,d,f,_,g,m,p,v,E,T,C,y,I,A,b,D,S,w,N,O,k,P,L,R,j,H,x,W,M,U,K,V,B,Q,F,Y,G,q,z,X,Z,$,J,tt,et,nt,it,st,rt,ot,at,lt,ht,ct,ut,dt,ft,_t,gt,mt,pt,vt,Et,Tt,Ct,yt,It,At,bt,Dt,St,wt,Nt,Ot,kt,Pt,Lt,Rt,jt,Ht,xt,Wt,Mt,Ut,Kt,Vt,Bt,Qt,Ft,Yt,Gt,qt,zt,Xt,Zt,$t,Jt,te,ee,ne,ie,se,re,oe,ae,le,he,ce,ue,de,fe,_e,ge,me,pe,ve,Ee,Te,Ce,ye,Ie,Ae,be,De,Se,we,Ne,Oe,ke,Pe,Le,Re,je,He,xe,We,Me,Ue,Ke,Ve,Be,Qe,Fe,Ye,Ge,qe,ze,Xe,Ze,$e,Je,tn,en,nn,sn,rn,on,an,ln,hn,cn,un,dn,fn,_n,gn,mn,pn,vn,En,Tn,Cn,yn,In=function(i){var e=!1;function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e,n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||""),"#"===n.charAt(0)&&(e=n,n=e="function"==typeof i.escapeSelector?i.escapeSelector(e).substr(1):e.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return 0<i(document).find(n).length?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var s=n[i],r=e[i],o=r&&l.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(s).test(o))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+s+'".')}var a}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},i.fn.emulateTransitionEnd=t,l.supportsTransitionEnd()&&(i.event.special[l.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}),l}(e),An=(n="alert",a="."+(r="bs.alert"),l=(s=e).fn[n],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},d="alert",f="fade",_="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){s.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=In.getSelectorFromElement(t),n=!1;return e&&(n=s(e)[0]),n||(n=s(t).closest("."+d)[0]),n},t._triggerCloseEvent=function(t){var e=s.Event(h.CLOSE);return s(t).trigger(e),e},t._removeElement=function(e){var n=this;s(e).removeClass(_),In.supportsTransitionEnd()&&s(e).hasClass(f)?s(e).one(In.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(150):this._destroyElement(e)},t._destroyElement=function(t){s(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=s(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(i,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),i}(),s(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),s.fn[n]=g._jQueryInterface,s.fn[n].Constructor=g,s.fn[n].noConflict=function(){return s.fn[n]=l,g._jQueryInterface},g),bn=(p="button",E="."+(v="bs.button"),T=".data-api",C=(m=e).fn[p],y="active",I="btn",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:(A="focus")+E+T+" blur"+E+T},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(D)[0];if(n){var i=m(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&m(this._element).hasClass(y))t=!1;else{var s=m(n).find(w)[0];s&&m(s).removeClass(y)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!m(this._element).hasClass(y),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!m(this._element).hasClass(y)),t&&m(this._element).toggleClass(y)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},o(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}(),m(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;m(e).hasClass(I)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=C,k._jQueryInterface},k),Dn=(L="carousel",j="."+(R="bs.carousel"),H=".data-api",x=(P=e).fn[L],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},M={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},U="next",K="prev",V="left",B="right",Q={SLIDE:"slide"+j,SLID:"slid"+j,KEYDOWN:"keydown"+j,MOUSEENTER:"mouseenter"+j,MOUSELEAVE:"mouseleave"+j,TOUCHEND:"touchend"+j,LOAD_DATA_API:"load"+j+H,CLICK_DATA_API:"click"+j+H},F="carousel",Y="active",G="slide",q="carousel-item-right",z="carousel-item-left",X="carousel-item-next",Z="carousel-item-prev",$={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},J=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=P(this._element).find($.INDICATORS)[0],this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(U)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(K)},t.pause=function(t){t||(this._isPaused=!0),P(this._element).find($.NEXT_PREV)[0]&&In.supportsTransitionEnd()&&(In.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=P(this._element).find($.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?U:K;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(j),P.removeData(this._element,R),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=u({},W,t),In.typeCheckConfig(L,t,M),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=P.makeArray(P(t).parent().find($.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===U,i=t===K,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===K?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(P(this._element).find($.ACTIVE_ITEM)[0]),s=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(s),s},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){P(this._indicatorsElement).find($.ACTIVE).removeClass(Y);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&P(e).addClass(Y)}},t._slide=function(t,e){var n,i,s,r=this,o=P(this._element).find($.ACTIVE_ITEM)[0],a=this._getItemIndex(o),l=e||o&&this._getItemByDirection(t,o),h=this._getItemIndex(l),c=Boolean(this._interval);if(t===U?(n=z,i=X,s=V):(n=q,i=Z,s=B),l&&P(l).hasClass(Y))this._isSliding=!1;else if(!this._triggerSlideEvent(l,s).isDefaultPrevented()&&o&&l){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:s,from:a,to:h});In.supportsTransitionEnd()&&P(this._element).hasClass(G)?(P(l).addClass(i),In.reflow(l),P(o).addClass(n),P(l).addClass(n),P(o).one(In.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(Y),P(o).removeClass(Y+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return P(r._element).trigger(u)},0)}).emulateTransitionEnd(600)):(P(o).removeClass(Y),P(l).addClass(Y),this._isSliding=!1,P(this._element).trigger(u)),c&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(R),e=u({},W,P(this).data());"object"==typeof i&&(e=u({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),P(this).data(R,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=In.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(F)){var i=u({},P(n).data(),P(this).data()),s=this.getAttribute("data-slide-to");s&&(i.interval=!1),r._jQueryInterface.call(P(n),i),s&&P(n).data(R).to(s),t.preventDefault()}}},o(r,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return W}}]),r}(),P(document).on(Q.CLICK_DATA_API,$.DATA_SLIDE,J._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){P($.DATA_RIDE).each(function(){var t=P(this);J._jQueryInterface.call(t,t.data())})}),P.fn[L]=J._jQueryInterface,P.fn[L].Constructor=J,P.fn[L].noConflict=function(){return P.fn[L]=x,J._jQueryInterface},J),Sn=(et="collapse",it="."+(nt="bs.collapse"),st=(tt=e).fn[et],rt={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+it,SHOWN:"shown"+it,HIDE:"hide"+it,HIDDEN:"hidden"+it,CLICK_DATA_API:"click"+it+".data-api"},lt="show",ht="collapse",ct="collapsing",ut="collapsed",dt="width",ft="height",_t={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},gt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=tt.makeArray(tt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=tt(_t.DATA_TOGGLE),i=0;i<n.length;i++){var s=n[i],r=In.getSelectorFromElement(s);null!==r&&0<tt(r).filter(t).length&&(this._selector=r,this._triggerArray.push(s))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){tt(this._element).hasClass(lt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!tt(this._element).hasClass(lt)&&(this._parent&&0===(t=tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=tt(t).not(this._selector).data(nt))&&e._isTransitioning))){var i=tt.Event(at.SHOW);if(tt(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(tt(t).not(this._selector),"hide"),e||tt(t).data(nt,null));var s=this._getDimension();tt(this._element).removeClass(ht).addClass(ct),(this._element.style[s]=0)<this._triggerArray.length&&tt(this._triggerArray).removeClass(ut).attr("aria-expanded",!0),this.setTransitioning(!0);var r=function(){tt(n._element).removeClass(ct).addClass(ht).addClass(lt),n._element.style[s]="",n.setTransitioning(!1),tt(n._element).trigger(at.SHOWN)};if(In.supportsTransitionEnd()){var o="scroll"+(s[0].toUpperCase()+s.slice(1));tt(this._element).one(In.TRANSITION_END,r).emulateTransitionEnd(600),this._element.style[s]=this._element[o]+"px"}else r()}}},t.hide=function(){var t=this;if(!this._isTransitioning&&tt(this._element).hasClass(lt)){var e=tt.Event(at.HIDE);if(tt(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",In.reflow(this._element),tt(this._element).addClass(ct).removeClass(ht).removeClass(lt),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var s=this._triggerArray[i],r=In.getSelectorFromElement(s);if(null!==r)tt(r).hasClass(lt)||tt(s).addClass(ut).attr("aria-expanded",!1)}this.setTransitioning(!0);var o=function(){t.setTransitioning(!1),tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)};this._element.style[n]="",In.supportsTransitionEnd()?tt(this._element).one(In.TRANSITION_END,o).emulateTransitionEnd(600):o()}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){tt.removeData(this._element,nt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=u({},rt,t)).toggle=Boolean(t.toggle),In.typeCheckConfig(et,t,ot),t},t._getDimension=function(){return tt(this._element).hasClass(dt)?dt:ft},t._getParent=function(){var n=this,t=null;In.isElement(this._config.parent)?(t=this._config.parent,void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=tt(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return tt(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=tt(t).hasClass(lt);0<e.length&&tt(e).toggleClass(ut,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=In.getSelectorFromElement(t);return e?tt(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=tt(this),e=t.data(nt),n=u({},rt,t.data(),"object"==typeof i&&i);if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(nt,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return rt}}]),a}(),tt(document).on(at.CLICK_DATA_API,_t.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=tt(this),e=In.getSelectorFromElement(this);tt(e).each(function(){var t=tt(this),e=t.data(nt)?"toggle":n.data();gt._jQueryInterface.call(t,e)})}),tt.fn[et]=gt._jQueryInterface,tt.fn[et].Constructor=gt,tt.fn[et].noConflict=function(){return tt.fn[et]=st,gt._jQueryInterface},gt),wn=(pt="dropdown",Et="."+(vt="bs.dropdown"),Tt=".data-api",Ct=(mt=e).fn[pt],yt=new RegExp("38|40|27"),It={HIDE:"hide"+Et,HIDDEN:"hidden"+Et,SHOW:"show"+Et,SHOWN:"shown"+Et,CLICK:"click"+Et,CLICK_DATA_API:"click"+Et+Tt,KEYDOWN_DATA_API:"keydown"+Et+Tt,KEYUP_DATA_API:"keyup"+Et+Tt},At="disabled",bt="show",Dt="dropup",St="dropright",wt="dropleft",Nt="dropdown-menu-right",Ot="dropdown-menu-left",kt="position-static",Pt='[data-toggle="dropdown"]',Lt=".dropdown form",Rt=".dropdown-menu",jt=".navbar-nav",Ht=".dropdown-menu .dropdown-item:not(.disabled)",xt="top-start",Wt="top-end",Mt="bottom-start",Ut="bottom-end",Kt="right-start",Vt="left-start",Bt={offset:0,flip:!0,boundary:"scrollParent"},Qt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},Ft=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!mt(this._element).hasClass(At)){var t=l._getParentFromElement(this._element),e=mt(this._menu).hasClass(bt);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=mt.Event(It.SHOW,n);if(mt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if(void 0===c)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var s=this._element;mt(t).hasClass(Dt)&&(mt(this._menu).hasClass(Ot)||mt(this._menu).hasClass(Nt))&&(s=t),"scrollParent"!==this._config.boundary&&mt(t).addClass(kt),this._popper=new c(s,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===mt(t).closest(jt).length&&mt("body").children().on("mouseover",null,mt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),mt(this._menu).toggleClass(bt),mt(t).toggleClass(bt).trigger(mt.Event(It.SHOWN,n))}}}},t.dispose=function(){mt.removeData(this._element,vt),mt(this._element).off(Et),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;mt(this._element).on(It.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=u({},this.constructor.Default,mt(this._element).data(),t),In.typeCheckConfig(pt,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=mt(t).find(Rt)[0]}return this._menu},t._getPlacement=function(){var t=mt(this._element).parent(),e=Mt;return t.hasClass(Dt)?(e=xt,mt(this._menu).hasClass(Nt)&&(e=Wt)):t.hasClass(St)?e=Kt:t.hasClass(wt)?e=Vt:mt(this._menu).hasClass(Nt)&&(e=Ut),e},t._detectNavbar=function(){return 0<mt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=u({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},l._jQueryInterface=function(e){return this.each(function(){var t=mt(this).data(vt);if(t||(t=new l(this,"object"==typeof e?e:null),mt(this).data(vt,t)),"string"==typeof e){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=mt.makeArray(mt(Pt)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),s=mt(e[n]).data(vt),r={relatedTarget:e[n]};if(s){var o=s._menu;if(mt(i).hasClass(bt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&mt.contains(i,t.target))){var a=mt.Event(It.HIDE,r);mt(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&mt("body").children().off("mouseover",null,mt.noop),e[n].setAttribute("aria-expanded","false"),mt(o).removeClass(bt),mt(i).removeClass(bt).trigger(mt.Event(It.HIDDEN,r)))}}}},l._getParentFromElement=function(t){var e,n=In.getSelectorFromElement(t);return n&&(e=mt(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||mt(t.target).closest(Rt).length)):yt.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!mt(this).hasClass(At))){var e=l._getParentFromElement(this),n=mt(e).hasClass(bt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=mt(e).find(Ht).get();if(0!==i.length){var s=i.indexOf(t.target);38===t.which&&0<s&&s--,40===t.which&&s<i.length-1&&s++,s<0&&(s=0),i[s].focus()}}else{if(27===t.which){var r=mt(e).find(Pt)[0];mt(r).trigger("focus")}mt(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Bt}},{key:"DefaultType",get:function(){return Qt}}]),l}(),mt(document).on(It.KEYDOWN_DATA_API,Pt,Ft._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API,Rt,Ft._dataApiKeydownHandler).on(It.CLICK_DATA_API+" "+It.KEYUP_DATA_API,Ft._clearMenus).on(It.CLICK_DATA_API,Pt,function(t){t.preventDefault(),t.stopPropagation(),Ft._jQueryInterface.call(mt(this),"toggle")}).on(It.CLICK_DATA_API,Lt,function(t){t.stopPropagation()}),mt.fn[pt]=Ft._jQueryInterface,mt.fn[pt].Constructor=Ft,mt.fn[pt].noConflict=function(){return mt.fn[pt]=Ct,Ft._jQueryInterface},Ft),Nn=(Gt="modal",zt="."+(qt="bs.modal"),Xt=(Yt=e).fn[Gt],Zt={backdrop:!0,keyboard:!0,focus:!0,show:!0},$t={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Jt={HIDE:"hide"+zt,HIDDEN:"hidden"+zt,SHOW:"show"+zt,SHOWN:"shown"+zt,FOCUSIN:"focusin"+zt,RESIZE:"resize"+zt,CLICK_DISMISS:"click.dismiss"+zt,KEYDOWN_DISMISS:"keydown.dismiss"+zt,MOUSEUP_DISMISS:"mouseup.dismiss"+zt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+zt,CLICK_DATA_API:"click"+zt+".data-api"},te="modal-scrollbar-measure",ee="modal-backdrop",ne="modal-open",ie="fade",se="show",re={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},oe=function(){function s(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Yt(t).find(re.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var t=s.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){In.supportsTransitionEnd()&&Yt(this._element).hasClass(ie)&&(this._isTransitioning=!0);var n=Yt.Event(Jt.SHOW,{relatedTarget:t});Yt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Yt(document.body).addClass(ne),this._setEscapeEvent(),this._setResizeEvent(),Yt(this._element).on(Jt.CLICK_DISMISS,re.DATA_DISMISS,function(t){return e.hide(t)}),Yt(this._dialog).on(Jt.MOUSEDOWN_DISMISS,function(){Yt(e._element).one(Jt.MOUSEUP_DISMISS,function(t){Yt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Yt.Event(Jt.HIDE);if(Yt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=In.supportsTransitionEnd()&&Yt(this._element).hasClass(ie);i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Yt(document).off(Jt.FOCUSIN),Yt(this._element).removeClass(se),Yt(this._element).off(Jt.CLICK_DISMISS),Yt(this._dialog).off(Jt.MOUSEDOWN_DISMISS),i?Yt(this._element).one(In.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},t.dispose=function(){Yt.removeData(this._element,qt),Yt(window,document,this._element,this._backdrop).off(zt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=u({},Zt,t),In.typeCheckConfig(Gt,t,$t),t},t._showElement=function(t){var e=this,n=In.supportsTransitionEnd()&&Yt(this._element).hasClass(ie);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&In.reflow(this._element),Yt(this._element).addClass(se),this._config.focus&&this._enforceFocus();var i=Yt.Event(Jt.SHOWN,{relatedTarget:t}),s=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Yt(e._element).trigger(i)};n?Yt(this._dialog).one(In.TRANSITION_END,s).emulateTransitionEnd(300):s()},t._enforceFocus=function(){var e=this;Yt(document).off(Jt.FOCUSIN).on(Jt.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Yt(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Yt(this._element).on(Jt.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Yt(this._element).off(Jt.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Yt(window).on(Jt.RESIZE,function(t){return e.handleUpdate(t)}):Yt(window).off(Jt.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Yt(document.body).removeClass(ne),t._resetAdjustments(),t._resetScrollbar(),Yt(t._element).trigger(Jt.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Yt(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Yt(this._element).hasClass(ie)?ie:"";if(this._isShown&&this._config.backdrop){var i=In.supportsTransitionEnd()&&n;if(this._backdrop=document.createElement("div"),this._backdrop.className=ee,n&&Yt(this._backdrop).addClass(n),Yt(this._backdrop).appendTo(document.body),Yt(this._element).on(Jt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),i&&In.reflow(this._backdrop),Yt(this._backdrop).addClass(se),!t)return;if(!i)return void t();Yt(this._backdrop).one(In.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){Yt(this._backdrop).removeClass(se);var s=function(){e._removeBackdrop(),t&&t()};In.supportsTransitionEnd()&&Yt(this._element).hasClass(ie)?Yt(this._backdrop).one(In.TRANSITION_END,s).emulateTransitionEnd(150):s()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var s=this;if(this._isBodyOverflowing){Yt(re.FIXED_CONTENT).each(function(t,e){var n=Yt(e)[0].style.paddingRight,i=Yt(e).css("padding-right");Yt(e).data("padding-right",n).css("padding-right",parseFloat(i)+s._scrollbarWidth+"px")}),Yt(re.STICKY_CONTENT).each(function(t,e){var n=Yt(e)[0].style.marginRight,i=Yt(e).css("margin-right");Yt(e).data("margin-right",n).css("margin-right",parseFloat(i)-s._scrollbarWidth+"px")}),Yt(re.NAVBAR_TOGGLER).each(function(t,e){var n=Yt(e)[0].style.marginRight,i=Yt(e).css("margin-right");Yt(e).data("margin-right",n).css("margin-right",parseFloat(i)+s._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Yt("body").css("padding-right");Yt("body").data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Yt(re.FIXED_CONTENT).each(function(t,e){var n=Yt(e).data("padding-right");void 0!==n&&Yt(e).css("padding-right",n).removeData("padding-right")}),Yt(re.STICKY_CONTENT+", "+re.NAVBAR_TOGGLER).each(function(t,e){var n=Yt(e).data("margin-right");void 0!==n&&Yt(e).css("margin-right",n).removeData("margin-right")});var t=Yt("body").data("padding-right");void 0!==t&&Yt("body").css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=te,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},s._jQueryInterface=function(n,i){return this.each(function(){var t=Yt(this).data(qt),e=u({},s.Default,Yt(this).data(),"object"==typeof n&&n);if(t||(t=new s(this,e),Yt(this).data(qt,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},o(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return Zt}}]),s}(),Yt(document).on(Jt.CLICK_DATA_API,re.DATA_TOGGLE,function(t){var e,n=this,i=In.getSelectorFromElement(this);i&&(e=Yt(i)[0]);var s=Yt(e).data(qt)?"toggle":u({},Yt(e).data(),Yt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=Yt(e).one(Jt.SHOW,function(t){t.isDefaultPrevented()||r.one(Jt.HIDDEN,function(){Yt(n).is(":visible")&&n.focus()})});oe._jQueryInterface.call(Yt(e),s,this)}),Yt.fn[Gt]=oe._jQueryInterface,Yt.fn[Gt].Constructor=oe,Yt.fn[Gt].noConflict=function(){return Yt.fn[Gt]=Xt,oe._jQueryInterface},oe),On=(le="tooltip",ce="."+(he="bs.tooltip"),ue=(ae=e).fn[le],de="bs-tooltip",fe=new RegExp("(^|\\s)"+de+"\\S+","g"),_e={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},ge={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},me={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},ve="out",Ee={HIDE:"hide"+ce,HIDDEN:"hidden"+ce,SHOW:(pe="show")+ce,SHOWN:"shown"+ce,INSERTED:"inserted"+ce,CLICK:"click"+ce,FOCUSIN:"focusin"+ce,FOCUSOUT:"focusout"+ce,MOUSEENTER:"mouseenter"+ce,MOUSELEAVE:"mouseleave"+ce},Te="fade",Ce="show",ye=".tooltip-inner",Ie=".arrow",Ae="hover",be="focus",De="click",Se="manual",we=function(){function h(t,e){if(void 0===c)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=h.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=ae(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(ae(this.getTipElement()).hasClass(Ce))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),ae.removeData(this.element,this.constructor.DATA_KEY),ae(this.element).off(this.constructor.EVENT_KEY),ae(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&ae(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===ae(this.element).css("display"))throw new Error("Please use show on visible elements");var t=ae.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){ae(this.element).trigger(t);var n=ae.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),s=In.getUID(this.constructor.NAME);i.setAttribute("id",s),this.element.setAttribute("aria-describedby",s),this.setContent(),this.config.animation&&ae(i).addClass(Te);var r="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,o=this._getAttachment(r);this.addAttachmentClass(o);var a=!1===this.config.container?document.body:ae(this.config.container);ae(i).data(this.constructor.DATA_KEY,this),ae.contains(this.element.ownerDocument.documentElement,this.tip)||ae(i).appendTo(a),ae(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new c(this.element,i,{placement:o,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Ie},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),ae(i).addClass(Ce),"ontouchstart"in document.documentElement&&ae("body").children().on("mouseover",null,ae.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,ae(e.element).trigger(e.constructor.Event.SHOWN),t===ve&&e._leave(null,e)};In.supportsTransitionEnd()&&ae(this.tip).hasClass(Te)?ae(this.tip).one(In.TRANSITION_END,l).emulateTransitionEnd(h._TRANSITION_DURATION):l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=ae.Event(this.constructor.Event.HIDE),s=function(){e._hoverState!==pe&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),ae(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};ae(this.element).trigger(i),i.isDefaultPrevented()||(ae(n).removeClass(Ce),"ontouchstart"in document.documentElement&&ae("body").children().off("mouseover",null,ae.noop),this._activeTrigger[De]=!1,this._activeTrigger[be]=!1,this._activeTrigger[Ae]=!1,In.supportsTransitionEnd()&&ae(this.tip).hasClass(Te)?ae(n).one(In.TRANSITION_END,s).emulateTransitionEnd(150):s(),this._hoverState="")},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){ae(this.getTipElement()).addClass(de+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||ae(this.config.template)[0],this.tip},t.setContent=function(){var t=ae(this.getTipElement());this.setElementContent(t.find(ye),this.getTitle()),t.removeClass(Te+" "+Ce)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?ae(e).parent().is(t)||t.empty().append(e):t.text(ae(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return ge[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)ae(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Se){var e=t===Ae?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Ae?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;ae(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}ae(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=u({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||ae(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?be:Ae]=!0),ae(e.getTipElement()).hasClass(Ce)||e._hoverState===pe?e._hoverState=pe:(clearTimeout(e._timeout),e._hoverState=pe,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===pe&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||ae(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),ae(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?be:Ae]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=ve,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===ve&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=u({},this.constructor.Default,ae(this.element).data(),t)).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),In.typeCheckConfig(le,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=ae(this.getTipElement()),e=t.attr("class").match(fe);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(ae(t).removeClass(Te),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},h._jQueryInterface=function(n){return this.each(function(){var t=ae(this).data(he),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new h(this,e),ae(this).data(he,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(h,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return me}},{key:"NAME",get:function(){return le}},{key:"DATA_KEY",get:function(){return he}},{key:"Event",get:function(){return Ee}},{key:"EVENT_KEY",get:function(){return ce}},{key:"DefaultType",get:function(){return _e}}]),h}(),ae.fn[le]=we._jQueryInterface,ae.fn[le].Constructor=we,ae.fn[le].noConflict=function(){return ae.fn[le]=ue,we._jQueryInterface},we),kn=(Oe="popover",Pe="."+(ke="bs.popover"),Le=(Ne=e).fn[Oe],Re="bs-popover",je=new RegExp("(^|\\s)"+Re+"\\S+","g"),He=u({},On.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),xe=u({},On.DefaultType,{content:"(string|element|function)"}),We="fade",Ue=".popover-header",Ke=".popover-body",Ve={HIDE:"hide"+Pe,HIDDEN:"hidden"+Pe,SHOW:(Me="show")+Pe,SHOWN:"shown"+Pe,INSERTED:"inserted"+Pe,CLICK:"click"+Pe,FOCUSIN:"focusin"+Pe,FOCUSOUT:"focusout"+Pe,MOUSEENTER:"mouseenter"+Pe,MOUSELEAVE:"mouseleave"+Pe},Be=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var s=i.prototype;return s.isWithContent=function(){return this.getTitle()||this._getContent()},s.addAttachmentClass=function(t){Ne(this.getTipElement()).addClass(Re+"-"+t)},s.getTipElement=function(){return this.tip=this.tip||Ne(this.config.template)[0],this.tip},s.setContent=function(){var t=Ne(this.getTipElement());this.setElementContent(t.find(Ue),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ke),e),t.removeClass(We+" "+Me)},s._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},s._cleanTipClass=function(){var t=Ne(this.getTipElement()),e=t.attr("class").match(je);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=Ne(this).data(ke),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),Ne(this).data(ke,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return He}},{key:"NAME",get:function(){return Oe}},{key:"DATA_KEY",get:function(){return ke}},{key:"Event",get:function(){return Ve}},{key:"EVENT_KEY",get:function(){return Pe}},{key:"DefaultType",get:function(){return xe}}]),i}(On),Ne.fn[Oe]=Be._jQueryInterface,Ne.fn[Oe].Constructor=Be,Ne.fn[Oe].noConflict=function(){return Ne.fn[Oe]=Le,Be._jQueryInterface},Be),Pn=(Fe="scrollspy",Ge="."+(Ye="bs.scrollspy"),qe=(Qe=e).fn[Fe],ze={offset:10,method:"auto",target:""},Xe={offset:"number",method:"string",target:"(string|element)"},Ze={ACTIVATE:"activate"+Ge,SCROLL:"scroll"+Ge,LOAD_DATA_API:"load"+Ge+".data-api"},$e="dropdown-item",Je="active",tn={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},en="offset",nn="position",sn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+tn.NAV_LINKS+","+this._config.target+" "+tn.LIST_ITEMS+","+this._config.target+" "+tn.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Qe(this._scrollElement).on(Ze.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?en:nn,s="auto"===this._config.method?t:this._config.method,r=s===nn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Qe.makeArray(Qe(this._selector)).map(function(t){var e,n=In.getSelectorFromElement(t);if(n&&(e=Qe(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Qe(e)[s]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Qe.removeData(this._element,Ye),Qe(this._scrollElement).off(Ge),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=u({},ze,t)).target){var e=Qe(t.target).attr("id");e||(e=In.getUID(Fe),Qe(t.target).attr("id",e)),t.target="#"+e}return In.typeCheckConfig(Fe,t,Xe),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&(void 0===this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Qe(t.join(","));n.hasClass($e)?(n.closest(tn.DROPDOWN).find(tn.DROPDOWN_TOGGLE).addClass(Je),n.addClass(Je)):(n.addClass(Je),n.parents(tn.NAV_LIST_GROUP).prev(tn.NAV_LINKS+", "+tn.LIST_ITEMS).addClass(Je),n.parents(tn.NAV_LIST_GROUP).prev(tn.NAV_ITEMS).children(tn.NAV_LINKS).addClass(Je)),Qe(this._scrollElement).trigger(Ze.ACTIVATE,{relatedTarget:e})},t._clear=function(){Qe(this._selector).filter(tn.ACTIVE).removeClass(Je)},n._jQueryInterface=function(e){return this.each(function(){var t=Qe(this).data(Ye);if(t||(t=new n(this,"object"==typeof e&&e),Qe(this).data(Ye,t)),"string"==typeof e){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},o(n,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return ze}}]),n}(),Qe(window).on(Ze.LOAD_DATA_API,function(){for(var t=Qe.makeArray(Qe(tn.DATA_SPY)),e=t.length;e--;){var n=Qe(t[e]);sn._jQueryInterface.call(n,n.data())}}),Qe.fn[Fe]=sn._jQueryInterface,Qe.fn[Fe].Constructor=sn,Qe.fn[Fe].noConflict=function(){return Qe.fn[Fe]=qe,sn._jQueryInterface},sn),Ln=(an="."+(on="bs.tab"),ln=(rn=e).fn.tab,hn={HIDE:"hide"+an,HIDDEN:"hidden"+an,SHOW:"show"+an,SHOWN:"shown"+an,CLICK_DATA_API:"click"+an+".data-api"},cn="dropdown-menu",un="active",dn="disabled",fn="fade",_n="show",gn=".dropdown",mn=".nav, .list-group",pn=".active",vn="> li > .active",En='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Tn=".dropdown-toggle",Cn="> .dropdown-menu .active",yn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(un)||rn(this._element).hasClass(dn))){var t,i,e=rn(this._element).closest(mn)[0],s=In.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName?vn:pn;i=(i=rn.makeArray(rn(e).find(r)))[i.length-1]}var o=rn.Event(hn.HIDE,{relatedTarget:this._element}),a=rn.Event(hn.SHOW,{relatedTarget:i});if(i&&rn(i).trigger(o),rn(this._element).trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){s&&(t=rn(s)[0]),this._activate(this._element,e);var l=function(){var t=rn.Event(hn.HIDDEN,{relatedTarget:n._element}),e=rn.Event(hn.SHOWN,{relatedTarget:i});rn(i).trigger(t),rn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){rn.removeData(this._element,on),this._element=null},t._activate=function(t,e,n){var i=this,s=("UL"===e.nodeName?rn(e).find(vn):rn(e).children(pn))[0],r=n&&In.supportsTransitionEnd()&&s&&rn(s).hasClass(fn),o=function(){return i._transitionComplete(t,s,n)};s&&r?rn(s).one(In.TRANSITION_END,o).emulateTransitionEnd(150):o()},t._transitionComplete=function(t,e,n){if(e){rn(e).removeClass(_n+" "+un);var i=rn(e.parentNode).find(Cn)[0];i&&rn(i).removeClass(un),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(rn(t).addClass(un),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),In.reflow(t),rn(t).addClass(_n),t.parentNode&&rn(t.parentNode).hasClass(cn)){var s=rn(t).closest(gn)[0];s&&rn(s).find(Tn).addClass(un),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=rn(this),e=t.data(on);if(e||(e=new i(this),t.data(on,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),i}(),rn(document).on(hn.CLICK_DATA_API,En,function(t){t.preventDefault(),yn._jQueryInterface.call(rn(this),"show")}),rn.fn.tab=yn._jQueryInterface,rn.fn.tab.Constructor=yn,rn.fn.tab.noConflict=function(){return rn.fn.tab=ln,yn._jQueryInterface},yn);!function(t){if(void 0===t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=In,t.Alert=An,t.Button=bn,t.Carousel=Dn,t.Collapse=Sn,t.Dropdown=wn,t.Modal=Nn,t.Popover=kn,t.Scrollspy=Pn,t.Tab=Ln,t.Tooltip=On,Object.defineProperty(t,"__esModule",{value:!0})}),function(){var t=-1<navigator.userAgent.toLowerCase().indexOf("webkit"),e=-1<navigator.userAgent.toLowerCase().indexOf("opera"),n=-1<navigator.userAgent.toLowerCase().indexOf("msie");(t||e||n)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1)}();/*! This file is auto-generated */
!function(d,l){"use strict";var e=!1,o=!1;if(l.querySelector)if(d.addEventListener)e=!0;if(d.wp=d.wp||{},!d.wp.receiveEmbedMessage)if(d.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){var r,a,i,s,n,o=l.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),c=l.querySelectorAll('blockquote[data-secret="'+t.secret+'"]');for(r=0;r<c.length;r++)c[r].style.display="none";for(r=0;r<o.length;r++)if(a=o[r],e.source===a.contentWindow){if(a.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;a.height=i}if("link"===t.message)if(s=l.createElement("a"),n=l.createElement("a"),s.href=a.getAttribute("src"),n.href=t.value,n.host===s.host)if(l.activeElement===a)d.top.location.href=t.value}}},e)d.addEventListener("message",d.wp.receiveEmbedMessage,!1),l.addEventListener("DOMContentLoaded",t,!1),d.addEventListener("load",t,!1);function t(){if(!o){o=!0;var e,t,r,a,i=-1!==navigator.appVersion.indexOf("MSIE 10"),s=!!navigator.userAgent.match(/Trident.*rv:11\./),n=l.querySelectorAll("iframe.wp-embedded-content");for(t=0;t<n.length;t++){if(!(r=n[t]).getAttribute("data-secret"))a=Math.random().toString(36).substr(2,10),r.src+="#?secret="+a,r.setAttribute("data-secret",a);if(i||s)(e=r.cloneNode(!0)).removeAttribute("security"),r.parentNode.replaceChild(e,r)}}}}(window,document);