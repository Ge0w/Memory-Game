(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(e,r,c){},13:function(e,r,c){},15:function(e,r,c){"use strict";c.r(r);var t=c(1),s=c.n(t),a=c(6),i=c.n(a),n=(c(12),c(7)),o=c(5),d=(c(13),c(0)),m=function(e){var r=e.image,c=e.onInc;return Object(d.jsx)("div",{onClick:function(){return c(r.id)},className:"card my-2 py-1-2",children:Object(d.jsxs)("div",{className:"container flex",children:[Object(d.jsx)("img",{src:r.src,alt:r.charname}),Object(d.jsx)("h1",{children:r.charname})]})})},h=function(e){var r=e.images,c=e.scores,t=e.onInc;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"header",children:Object(d.jsxs)("div",{className:"container flex my-1",children:[Object(d.jsx)("h1",{children:"Rick and Morty Memory Game"}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Score: ",c.score]}),Object(d.jsxs)("p",{children:["Best score: ",c.bestscore]})]})]})}),Object(d.jsx)("div",{className:"cards",children:Object(d.jsx)("div",{className:"container flex",children:r.map((function(e){return Object(d.jsx)(m,{onInc:t,image:e},e.id)}))})})]})},j=c.p+"static/media/Beth_Smith.20f853ff.png",b=c.p+"static/media/Jerry_Smith.fa2aceeb.png",l=c.p+"static/media/MeeseeksHQ.7467b67a.png",p=c.p+"static/media/Morty_Smith.654285b6.jpeg",f=c.p+"static/media/Mr_poopy_butthole.d566feb7.png",u=c.p+"static/media/NewBirdPerson.59de6d72.jpeg",g=c.p+"static/media/Pickle_rick_transparent_edgetrimmed.07f0ff08.png",O=c.p+"static/media/Rick_Sanchez.f0f1cf87.png",S=c.p+"static/media/Scroopy.2ee87c5c.jpeg",x=c.p+"static/media/Snuffles-helmet.23873436.jpeg",k=c.p+"static/media/Squanchy_.fa7bf037.png",y=c.p+"static/media/Summer_is_cool.04c00f30.jpeg";var v=function(){var e=Object(t.useState)([{id:1,sortorder:1,charname:"Beth Smith",src:j},{id:2,sortorder:2,charname:"Jerry Smith",src:b},{id:3,sortorder:3,charname:"Mr Meeseeks",src:l},{id:4,sortorder:4,charname:"Morty Smith",src:p},{id:5,sortorder:5,charname:"Mr Poopy Butthole",src:f},{id:6,sortorder:6,charname:"Birdman",src:u},{id:7,sortorder:7,charname:"Pickle Rick",src:g},{id:8,sortorder:8,charname:"Scroopy",src:S},{id:9,sortorder:9,charname:"Snuffles",src:x},{id:10,sortorder:10,charname:"Squanchy",src:k},{id:11,sortorder:11,charname:"Rick Sanchez",src:O},{id:12,sortorder:12,charname:"Summer Smith",src:y}]),r=Object(o.a)(e,2),c=r[0],s=r[1],a=Object(t.useState)({idTracker:[],bestscore:0,score:0}),i=Object(o.a)(a,2),m=i[0],v=i[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(h,{images:c,scores:m,onInc:function(e){m.idTracker.includes(e)&&m.score>m.bestscore?v({idTracker:[],bestscore:m.score,score:0}):m.idTracker.includes(e)&&m.score<m.bestscore?v({idTracker:[],bestscore:m.bestscore,score:0}):v({idTracker:[].concat(Object(n.a)(m.idTracker),[e]),bestscore:m.bestscore,score:m.score+1});s(function(e){for(var r=0;r<e.length;r++)e[r].sortorder=Math.floor(1e4*Math.random()+1);return e.sort((function(e,r){return e.sortorder>r.sortorder?1:r.sortorder>e.sortorder?-1:0}))}(c))}})})},M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(r){var c=r.getCLS,t=r.getFID,s=r.getFCP,a=r.getLCP,i=r.getTTFB;c(e),t(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),M()}},[[15,1,2]]]);
//# sourceMappingURL=main.acf8d489.chunk.js.map