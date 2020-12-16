(this["webpackJsonprancid-tomatillos"]=this["webpackJsonprancid-tomatillos"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),r=n.n(i),s=n(19),o=n.n(s),a=(n(26),n(10)),l=n(11),j=n(13),d=n(12),u=n(2),b=n(7),h=(n(27),function(e){var t=e.title,n=e.src,i=e.alt,r=e.rating,s=e.id,o=e.getSingleMovie;return Object(c.jsx)(b.b,{to:"/rancid-tomatillos/".concat(s),children:Object(c.jsxs)("section",{id:s,className:"card",onClick:function(){return o(s)},children:[Object(c.jsx)("img",{className:"card-img",src:n,alt:i}),Object(c.jsx)("p",{children:t}),Object(c.jsxs)("p",{children:["Average Rating: ",r.toFixed(2)]})]})})}),m=(n(33),function(e){var t=e.movies,n=e.getSingleMovie,i=t.map((function(e){return Object(c.jsx)(h,{title:e.title,src:e.poster_path,alt:e.title,rating:e.average_rating,id:e.id,getSingleMovie:n},e.id)}));return Object(c.jsx)("section",{children:Object(c.jsx)("section",{className:"movie-container",children:i})})}),v=(n(34),function(e){var t=e.label,n=e.body;return Object(c.jsxs)("section",{className:"details-box",children:[Object(c.jsx)("p",{className:"l-details",children:Object(c.jsx)("b",{children:t})}),Object(c.jsx)("p",{className:"r-details",children:n})]})}),x=(n(35),function(e){var t=e.movie,n=(e.movieTrailers,e.resetState),r=e.getSingleMovie,s=+window.location.pathname.slice(19);Object(i.useEffect)((function(){s!==+t.id&&r(s)}));var o,a=function(e,t){return e>0&&Object(c.jsx)(v,{label:t,body:"$".concat(new Intl.NumberFormat("en-US").format(e))})};return Object(c.jsxs)("section",{children:[Object(c.jsx)("nav",{children:Object(c.jsx)(b.b,{to:"/",onClick:function(){return n()},children:Object(c.jsx)("button",{className:"all-movies",children:"All Movies"})})}),Object(c.jsx)("section",{className:"banner-container",children:Object(c.jsx)("img",{className:"card-img banner-img",src:t.backdrop_path,alt:"".concat(t.title," banner")})}),Object(c.jsxs)("section",{className:"container",children:[Object(c.jsx)("section",{className:"side-panel"}),Object(c.jsx)("section",{className:"center-panel",children:Object(c.jsxs)("section",{className:"movie-details-box",children:[Object(c.jsxs)("section",{className:"up-first",children:[Object(c.jsx)("img",{className:"card-img poster",src:t.poster_path,alt:"".concat(t.title," poster")}),Object(c.jsxs)("section",{className:"poster-aside",children:[Object(c.jsx)("p",{className:"movie-title",children:Object(c.jsx)("b",{children:t.title})}),Object(c.jsxs)("section",{className:"ratings-box",children:[Object(c.jsx)("p",{className:"user-rating-title",children:Object(c.jsx)("b",{children:"Average User Rating:"})}),Object(c.jsxs)("p",{className:"rating",children:[t.average_rating.toFixed(2)," /10"]}),Object(c.jsx)("p",{className:"rating-emoji",children:(o=t.average_rating,o<4?"\ud83e\udd22":o<6?"\ud83d\udc4c":o<9?"\ud83d\udc4d":"\ud83e\udd29")})]})]})]}),Object(c.jsxs)("section",{className:"overview-box",children:[Object(c.jsx)("p",{className:"overview-title",children:Object(c.jsx)("b",{children:"Movie Info:"})}),Object(c.jsx)("p",{className:"overview-text",children:t.overview})]}),Object(c.jsx)(v,{label:"Genre:",body:function(e){if(e.genres){if(e.genres.length>1){var t=e.genres.reduce((function(e,t){return e+=" | "+t}),"");return t.slice(3,t.length)}return e.genres[0]}return"Unavailable"}(t)}),Object(c.jsx)(v,{label:"Release Date:",body:t.release_date}),a(t.budget,"Budget"),a(t.revenue,"Total Revenue"),Object(c.jsx)(v,{label:"Runtime:",body:t.runtime})]})}),Object(c.jsx)("section",{className:"side-panel"})]})]})}),O=(n(36),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){var e=this;return this.state.hasError?Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Something went wrong."}),Object(c.jsx)(b.b,{to:"/",onClick:function(){e.setState({hasError:!1})},children:Object(c.jsx)("button",{className:"all-movies",children:"Back to All Movies"})})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(i.Component)),g=(n(37),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).componentDidMount=function(){fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then((function(e){if(!e.ok)throw Error("Sorry! We've encountered an error");return e.json()})).then((function(t){"/rancid-tomatillos/"===window.location.pathname&&(e.setState({movies:t.movies}),console.log(window.location.pathname))})).then((function(){"/rancid-tomatillos/"!==window.location.pathname&&(e.getSingleMovie(+window.location.pathname.slice(19)),console.log(window.location.pathname))})).catch((function(t){return e.setState({error:t.message})}))},e.getSingleMovie=function(t){return function(e){return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(+e)).then((function(e){if(!e.ok)throw Error("Sorry! We've encountered an error");return e.json()}))}(t).then((function(t){e.setState({movie:t.movie})})).catch((function(t){return e.setState({error:t.message})}))},e.getMovieTrailers=function(t){(function(e){return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(+e,"/videos")).then((function(e){return e.json()}))})(t).then((function(t){return e.setState({movieTrailers:t.videos})})).catch((function(e){return console.log(e)}))},e.resetState=function(){e.setState({movie:null,movieTrailers:[]})},e.state={movies:[],movie:null,error:"",movieTrailers:[]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)("main",{className:"App",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h1",{children:"Rancid Tomatillos"})}),Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(c.jsx)(O,{children:Object(c.jsx)(m,{movies:e.state.movies,getSingleMovie:e.getSingleMovie})})}}),Object(c.jsx)(u.a,{exact:!0,path:"/:id",render:function(){return e.state.movie?e.state.movie?Object(c.jsx)(O,{children:Object(c.jsx)(x,{movie:e.state.movie,resetState:e.resetState,getSingleMovie:e.getSingleMovie})}):void 0:Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:"Whoops, it looks like something went wrong. Try refreshing the page or return to all movies."}),Object(c.jsx)(b.b,{to:"/",onClick:function(){return e.resetState()},children:Object(c.jsx)("button",{className:"back",children:"Back to Movies"})})]})}})]})]})}}]),n}(i.Component));o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b.a,{basename:"/rancid-tomatillos",children:Object(c.jsx)(g,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9e8a13ef.chunk.js.map