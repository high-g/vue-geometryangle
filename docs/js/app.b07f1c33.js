(function(e){function t(t){for(var i,c,a=t[0],l=t[1],s=t[2],u=0,g=[];u<a.length;u++)c=a[u],n[c]&&g.push(n[c][0]),n[c]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);h&&h(t);while(g.length)g.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],i=!0,a=1;a<r.length;a++){var l=r[a];0!==n[l]&&(i=!1)}i&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var i={},n={app:0},o=[];function c(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=i,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(r,i,function(t){return e[t]}.bind(null,i));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-bubbly-bg/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var h=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var i=r("64a9"),n=r.n(i);n.a},3484:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var i=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("vue-bubbly-bg")]),r("section",{staticClass:"mb50",attrs:{id:"hero"}},[r("VueBubblyBg"),e._m(0)],1),r("section",{staticClass:"mb100",attrs:{id:"content1"}},[r("h2",[e._v("Content1")]),r("p",[e._v('\n      bgColor="blue"\n      colorString="orange"\n      circleNum="500"\n      circleSpeed="veryfast"\n      circleSize="verysmall"\n    ')]),r("VueBubblyBg",{attrs:{bgColor:"#333",colorString:"orange",circleNum:"300",circleSpeed:"veryfast",circleSize:"verysmall"}})],1),r("section",{staticClass:"mb100",attrs:{id:"content2"}},[r("h2",[e._v("Content2")]),r("p",[e._v('\n      bgColor="rgba(255,0,0,0.5)"\n      colorString="green"\n      circleNum="100"\n      circleSpeed="slow"\n      circleSize="small"\n      moveType="horizon"\n    ')]),r("VueBubblyBg",{attrs:{bgColor:"rgba(255,0,0,0.5)",colorString:"green",circleNum:"100",circleSpeed:"slow",circleSize:"small",moveType:"horizon"}})],1),r("section",{attrs:{id:"content3"}},[r("h2",[e._v("Content3")]),r("p",[e._v('\n      colorString="purple"\n      circleNum="20"\n      circleSize="big"\n      moveType="vert"\n    ')]),r("VueBubblyBg",{staticClass:"mb100",attrs:{colorString:"purple",circleNum:"20",circleSize:"big",moveType:"vert"}})],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{staticClass:"hero--title"},[e._v("\n      Love the life you live. Live the life you love."),r("br"),e._v("\n      Stay hungry. Stay foolish."),r("br"),e._v("\n      Your time is limited, so don’t waste it living someone else’s life."),r("br"),e._v("\n      If it can be imagined, it can be created."),r("br"),e._v("\n      If you want to be happy, be."),r("br"),e._v("\n      Happiness depends upon ourselves."),r("br"),e._v("\n      Every day is a new day.\n    ")])}],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("canvas",{style:e.backgroundColor})},a=[],l=(r("6c7b"),r("c5f6"),{props:{bgColor:String,colorString:String,colorNum:[Number,String],circleNum:[Number,String],circleSpeed:String,circleSize:String,flgSizeFix:[Boolean,String],moveType:String},data:function(){return{ctx:null,width:0,height:0,circleManage:[],drawCount:0,moveVertical:1,moveHorizontal:1,colorList:{red:0,orange:25,yellow:60,yellowgreen:85,green:110,greenblue:165,lightblue:180,blue:200,bluepurple:260,purple:285,lightpuple:300,purplered:315,lightred:340}}},computed:{backgroundColor:function(){return console.log("backgroundColor",this.bgColor),"background-color: ".concat(this.bgColor)}},mounted:function(){this.settingCanvas(),this.initPoint(),requestAnimationFrame(this.draw),window.addEventListener("resize",this.settingCanvas)},beforeDestroy:function(){window.removeEventListener("resize",this.settingCanvas)},methods:{settingCanvas:function(){var e=this.$el.parentNode;this.width=e.clientWidth,this.height=e.clientHeight,this.ctx=this.$el.getContext("2d"),this.$el.width=this.width,this.$el.height=this.height},initPoint:function(){this.circleManage=[];var e=this.circleNum||30,t=this.circleNum?this.circleNum/2:10,r=Math.floor(Math.random()*(e-t)+t),i=0,n=1;switch(this.circleSpeed){case"veryslow":n=.1;break;case"slow":n=.5;break;case"fast":n=2;break;case"veryfast":n=5;break}var o=1;switch(this.circleSize){case"verysmall":o=.1;break;case"small":o=.5;break;case"big":o=2.5;break;case"verybig":o=4.5;break}switch(this.moveType){case"vert":this.moveHorizontal=0;break;case"horizon":this.moveVertical=0;break}var c=50;while(i<r){var a=Math.floor(40*Math.random()+50);!1===this.flgSizeFix&&(c=Math.floor(45*Math.random()+5)),this.circleManage.push({x:Math.floor(Math.random()*(this.width-0)+0),y:Math.floor(Math.random()*(this.height-0)+0),r:c*o,moveX:Math.random()*(Math.random()<.5?-1:1)*n*this.moveHorizontal,moveY:Math.random()*(Math.random()<.5?-1:1)*n*this.moveVertical,color:"hsl(".concat(this.desideColorNum(),", 100%, ").concat(a,"%)")}),i++}},draw:function(){for(var e in this.ctx.clearRect(0,0,this.width,this.height),this.circleManage)this.calcPoint(this.circleManage[e],e),this.settingCircle(this.circleManage[e]);requestAnimationFrame(this.draw)},desideColorNum:function(){var e=200;return this.colorList.hasOwnProperty(this.colorString)?e=this.colorList[this.colorString]:isNaN(this.colorNum)||(e=this.colorNum),e},calcPoint:function(e,t){e.x+=e.moveX,e.y+=e.moveY,e.x<0?e.x=this.width:e.x>this.width&&(e.x=0),e.y<0?e.y=this.height:e.y>this.height&&(e.y=0),this.circleManage[t]=e},settingCircle:function(e){this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.r,0,2*Math.PI,!1),this.ctx.strokeStyle=e.color,this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.closePath(),this.ctx.stroke()}}}),s=l,h=(r("73ae"),r("2877")),u=Object(h["a"])(s,c,a,!1,null,"06d472a4",null),g=u.exports,d={components:{VueBubblyBg:g}},b=d,v=(r("034f"),Object(h["a"])(b,n,o,!1,null,null,null)),f=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(f)}}).$mount("#app")},"64a9":function(e,t,r){},"73ae":function(e,t,r){"use strict";var i=r("3484"),n=r.n(i);n.a}});
//# sourceMappingURL=app.b07f1c33.js.map