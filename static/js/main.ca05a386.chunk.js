(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(e,t,s){},14:function(e,t,s){"use strict";s.r(t);var n=s(3),c=s.n(n),r=s(4),a=s(5),o=s(7),l=s(6),i=s(1),u=s.n(i),h=(s(12),s(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(r.a)(this,s);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={goods:d,count:0,isReversed:!1,sortBy:"",lengths:[1,2,3,4,5,6,7,8,9,10],selectedNumb:1},e.showList=function(){e.setState({count:1})},e.changeLength=function(t){e.setState({selectedNumb:Number(t.target.value)})},e.reverseList=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.reset=function(){e.setState({isReversed:!1,sortBy:"",selectedNumb:1})},e.sortAlphabetically=function(){e.setState({sortBy:"alpha"})},e.sortByLength=function(){e.setState({sortBy:"length"})},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this,t=this.state,s=t.count,n=t.goods,c=t.isReversed,r=t.sortBy,a=t.lengths,o=t.selectedNumb,l=n.filter((function(e){return e.length>=o}));return l.sort((function(e,t){switch(r){case"alpha":return e.localeCompare(t);case"length":return e.length-t.length;default:return 0}})),c&&l.reverse(),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"App__container",children:[Object(h.jsx)("h1",{className:"App__title",children:"Goods"}),Object(h.jsxs)("div",{className:"App__info",children:[1===s&&Object(h.jsx)("ul",{className:"App__goods",children:l.map((function(e){return Object(h.jsx)("li",{className:"App__good",children:e},e)}))}),Object(h.jsx)("button",{className:1===s?"disabled":"App__open",type:"button",onClick:this.showList,children:"Click here"}),Object(h.jsxs)("div",{className:"App__sort",children:[Object(h.jsx)("button",{className:1===s?"App__button":"disabled",type:"button",onClick:this.reverseList,children:"Reverse"}),Object(h.jsx)("button",{className:1===s?"App__button":"disabled",type:"button",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{className:1===s?"App__button":"disabled",type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("button",{className:1===s?"App__button":"disabled",type:"button",onClick:this.sortByLength,children:"Sort by length"})]})]}),Object(h.jsx)("select",{className:1===s?"App__select":"disabled",id:"selectLength",onChange:function(t){return e.changeLength(t)},children:a.map((function(e){return Object(h.jsx)("option",{value:e,children:e})}))})]})})}}]),s}(u.a.Component),b=p;c.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.ca05a386.chunk.js.map