(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),i=n.n(s),a=(n(12),n(13),n(4)),o=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.id,n=e.name,r=e.email;return Object(b.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2",children:[Object(b.jsx)("img",{alt:"friends",src:"https://robohash.org/".concat(t,"?150x150")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n}),Object(b.jsx)("p",{children:r})]})]})},j=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){var t=e.onSearchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search friends",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflow:"scroll",height:"200px"},children:e.children})},g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).SearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(b.jsx)("h1",{children:"Loading"}):Object(b.jsxs)("div",{className:"tc bg-light-blue",children:[Object(b.jsx)("h1",{style:{display:"inline-block"},children:"RobosFriends"}),Object(b.jsx)(u,{onSearchChange:this.SearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(j,{robots:t})})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.d9b8da0b.chunk.js.map