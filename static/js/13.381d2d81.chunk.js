(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[13],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(21),a=function(e){return{type:r.a}},c=function(e,t){return 404===e.response.status?function(e){return{type:r.e,props:e}}(t):500===e.response.status?function(e){return{type:r.f,props:e}}(t):function(e){return{type:r.g,error:e}}(e)}},221:function(e,t,n){"use strict";var r=n(21),a=n(225),c=n.n(a).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}}),o=n(219);n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return f}));var l=function(e,t){return console.log("get data"),function(n){console.log("before get data"),c.get(e).then((function(e){var t;console.log(e),n((t=e.data,{type:r.d,data:t}))})).catch((function(e){n(o.b(e,t))}))}},u=function(e,t,n){return function(a){console.log("dispatch= "),console.log("url="+e),console.log(t),c.post(e,t).then((function(e){console.log(e),a(function(e){return{type:r.h,response:e}}(e))})).catch((function(e){console.log("error.response= ",e.response),a(o.b(e,n))}))}},i=function(e,t,n){return function(a){c.put(e,t).then((function(e){a(function(e){return{type:r.i,response:e}}(e))})).catch((function(e){a(o.b(e,n))}))}},s=function(e,t){return function(n){c.delete(e).then((function(e){n(function(e){return{type:r.c,response:e}}(e))})).catch((function(e){n(o.b(e,t))}))}},f=function(e,t){return{type:r.b,props:e,url:t}}},270:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(1),c=n.n(a),o=n(12),l=n(45),u=n(221),i=n(91),s=n(229),f=n.n(s),d=function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.owner.name),c.a.createElement("td",null,c.a.createElement(f.a,{format:"MM/DD/YYYY"},e.owner.dateOfBirth)),c.a.createElement("td",null,e.owner.address),c.a.createElement("td",null,c.a.createElement(o.a,{onClick:function(){return t=e.owner.id,void e.history.push("/ownerDetails/"+t);var t}},"Details")),c.a.createElement("td",null,c.a.createElement(o.a,{bsStyle:"success",onClick:function(){return t=e.owner.id,void e.history.push("/updateOwner/"+t);var t}},"Update")),c.a.createElement("td",null,c.a.createElement(o.a,{bsStyle:"danger",onClick:function(){return t=e.owner.id,void e.history.push("/deleteOwner/"+t);var t}},"Delete")))};t.default=function(e){var t=[],n=Object(i.d)((function(e){return e.repository.data}));n&&n.length>0&&(t=n.map((function(t){return c.a.createElement(d,Object.assign({key:t.id,owner:t},e))})));var s=Object(i.c)();return Object(a.useEffect)((function(){console.log("line 30"),s(u.c("/api/owner",Object(r.a)({},e)))}),[s,e]),c.a.createElement(a.Fragment,null,c.a.createElement(o.l,null,c.a.createElement(o.b,{mdOffset:10,md:2},c.a.createElement(l.Link,{to:"/createOwner"},"Create Owner"))),c.a.createElement("br",null),c.a.createElement(o.l,null,c.a.createElement(o.b,{md:12},c.a.createElement(o.m,{responsive:!0,striped:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Date of birth"),c.a.createElement("th",null,"Address"),c.a.createElement("th",null,"Details"),c.a.createElement("th",null,"Update"),c.a.createElement("th",null,"Delete"))),c.a.createElement("tbody",null,t)))))}}}]);
//# sourceMappingURL=13.381d2d81.chunk.js.map