(this.webpackJsonpfoodify_application=this.webpackJsonpfoodify_application||[]).push([[0],{73:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(10),r=n.n(c),s=(n(73),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,132)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),c(e),r(e)}))}),o=n(45),l=n(48),u=n.n(l),j=n(56),d=n(20),h=n(46),b=n(11),f=n(124),O=n(128),v=n(125),g=n(126),p=n(115),x=Object(p.a)({navigation:{paddingBottom:"2px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gridGap:"20px"},container:{marginTop:"38px",paddingTop:"20px",gridRow:"row",justify:"center",alignItems:"center",backgroundColor:"gray"}}),m=n(130),D=n(119),S=n(120),y=n(121),I=n(127),C=n(122),k=n(123),M=(n(77),n(5)),N=function(e){var t=e.currentDish,n=e.ingredients;return Object(M.jsxs)("div",{className:"dish_container",children:[t.strMealThumb?Object(M.jsx)("img",{src:t.strMealThumb,className:"dish_img",alt:"Dish"}):"",Object(M.jsx)("h1",{children:t.strMeal}),n.length?Object(M.jsxs)("ul",{className:"ingredients",children:[Object(M.jsx)("h3",{children:"Ingredients:"}),n.map((function(e){return Object(M.jsx)("li",{children:e},e)}))]}):"",Object(M.jsx)("p",{children:t.strInstructions})]})},F=function(e){for(var t=[],n=Object.keys(e).filter((function(e){return e.includes("strIngredient")||e.includes("strMeasure")})),a=1;a<=n.length;a+=1)e["strIngredient".concat(a)]&&t.push("".concat(e["strIngredient".concat(a)]," ").concat(e["strMeasure".concat(a)]));return t},w=(n(79),function(e){var t=e.favoriteDishes,n=e.setFavoriteDishes,c=Object(a.useState)({}),r=Object(d.a)(c,2),s=r[0],l=r[1],u=Object(a.useState)([]),j=Object(d.a)(u,2),h=j[0],b=j[1],f=Object(a.useState)(""),v=Object(d.a)(f,2),g=v[0],p=v[1],x=Object(a.useState)(""),w=Object(d.a)(x,2),T=w[0],J=w[1],_=i.a.useState(!1),E=Object(d.a)(_,2),A=E[0],B=E[1];Object(a.useEffect)((function(){var e=localStorage.getItem("favoriteDishes");e&&n(JSON.parse(e))}),[localStorage]);var R=function(e){e.preventDefault();var t=e.target.innerText,n=JSON.parse(localStorage.getItem("favoriteDishes")).find((function(e){return e.strMeal===t}));l(n),b(F(n))},L=function(e){e.preventDefault();var t=e.target.value,a=localStorage.getItem("favoriteDishes"),i=JSON.parse(a);i.splice(t,1),localStorage.setItem("favoriteDishes",JSON.stringify(i)),n(i),l({}),b([])},P=function(){B(!1)};return Object(M.jsxs)("div",{children:[t.length?"Favorite dishes:":"You don`t have favorite dishes",Object(M.jsxs)("ul",{children:[t.map((function(e,t){return Object(M.jsxs)("li",{children:[Object(M.jsx)("button",{type:"button",onClick:R,className:"dish_button",children:e.strMeal}),Object(M.jsx)(O.a,{variant:"contained",color:"default",value:t,onClick:L,children:"Delete"})]},e.idMeal)})),Object(M.jsx)(O.a,{variant:"contained",color:"primary",style:{marginTop:"10px"},onClick:function(){B(!0)},children:"Add a dish"}),Object(M.jsxs)(m.a,{open:A,onClose:P,"aria-labelledby":"form-dialog-title",children:[Object(M.jsx)(D.a,{id:"form-dialog-title",children:"Add your recipe"}),Object(M.jsxs)(S.a,{children:[Object(M.jsx)(y.a,{children:"Add a name of dish and cooking instruction"}),Object(M.jsx)(I.a,{autoFocus:!0,margin:"dense",id:"name",value:g,onChange:function(e){var t=e.target.value;p(t)},label:"Name of a dish",type:"title",fullWidth:!0}),Object(M.jsx)(C.a,{"aria-label":"maximum height",placeholder:"Instruction",value:T,onChange:function(e){var t=e.target.value;J(t)},style:{width:"-webkit-fill-available",height:"50px"}})]}),Object(M.jsxs)(k.a,{children:[Object(M.jsx)(O.a,{onClick:P,color:"primary",children:"Cancel"}),Object(M.jsx)(O.a,{onClick:function(){var e={idMeal:t.length+1,strMeal:g,strInstructions:T};n((function(t){return[].concat(Object(o.a)(t),[e])})),B(!1)},color:"primary",children:"Add"})]})]})]}),s.idMeal?Object(M.jsx)(N,{ingredients:h,currentDish:s}):""]})}),T=(n(81),function(e){var t=e.currentDish,n=e.ingredients,i=e.fetchRandomDish,c=e.saveToFavorite,r=e.setFavoriteDishes;return Object(a.useEffect)((function(){var e=localStorage.getItem("favoriteDishes");e&&r(JSON.parse(e))}),[]),Object(M.jsxs)("div",{className:"app",children:[Object(M.jsxs)("div",{className:"button_container",children:[Object(M.jsx)(O.a,{variant:"contained",color:"default",onClick:function(){return i()},children:"Skip"}),Object(M.jsx)(O.a,{variant:"contained",color:"default",onClick:function(){return c()},children:"Save"})]}),Object(M.jsx)(N,{currentDish:t,ingredients:n})]})}),J=function(){var e=Object(a.useState)({}),t=Object(d.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)([]),r=Object(d.a)(c,2),s=r[0],l=r[1],p=Object(a.useState)([]),m=Object(d.a)(p,2),D=m[0],S=m[1],y=x(),I=function(){var e=Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(e){return e.meals[0]}));case 2:t=e.sent,l(F(t)),i(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){I()}),[]),Object(a.useEffect)((function(){localStorage.setItem("favoriteDishes",JSON.stringify(D))}),[D]),Object(M.jsxs)(h.a,{basename:"/",children:[Object(M.jsxs)(f.a,{className:y.navigation,children:[Object(M.jsx)(h.b,{to:"/main",children:Object(M.jsx)(O.a,{variant:"contained",color:"primary",href:"/main",children:"Main"})}),Object(M.jsx)(h.b,{to:"/favorites",children:Object(M.jsx)(O.a,{variant:"contained",color:"primary",children:"Favorites"})})]}),Object(M.jsx)(v.a,{children:Object(M.jsx)(g.a,{container:!0,className:y.container,children:Object(M.jsxs)(b.d,{children:[Object(M.jsx)(b.b,{exact:!0,path:"/",render:function(){return Object(M.jsx)(b.a,{to:"/main"})}}),Object(M.jsx)(b.b,{path:"/main",children:Object(M.jsx)(T,{currentDish:n,ingredients:s,fetchRandomDish:I,saveToFavorite:function(){D.some((function(e){return e.idMeal===n.idMeal}))||S([].concat(Object(o.a)(D),[n]))},setFavoriteDishes:S})}),Object(M.jsx)(b.b,{path:"/favorites",children:Object(M.jsx)(w,{favoriteDishes:D,setFavoriteDishes:S})})]})})})]})};r.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(J,{})}),document.getElementById("root")),s()}},[[84,1,2]]]);
//# sourceMappingURL=main.cbf8f1cb.chunk.js.map