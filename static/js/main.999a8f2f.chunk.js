(this["webpackJsonpword-party"]=this["webpackJsonpword-party"]||[]).push([[0],{30:function(e,t,a){e.exports=a(59)},35:function(e,t,a){},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),l=a.n(r),s=(a(35),a(3)),c=a(4),i=a(6),d=a(5),u=(a(36),a(14)),m=a.n(u),h=a(15),p=a.n(h);a(53);p.a.initializeApp({apiKey:"AIzaSyCS6fkr1nkfcWbuxowQcwS55dUFGm9qa8g",authDomain:"wordparty-92c9f.firebaseapp.com",databaseURL:"https://wordparty-92c9f.firebaseio.com",projectId:"wordparty-92c9f",storageBucket:"wordparty-92c9f.appspot.com",messagingSenderId:"410418051346",appId:"1:410418051346:web:10cd4fb319baf427c8dbcb"});var y=p.a,f=a(7),w=a.n(f),E=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"wrapper headerFlex"},o.a.createElement("h1",null,"Word Party"),o.a.createElement("p",null,"Expand your vocabulary and create rhyming schemes with Word Party")))},v=a(11),b=a(10),g=o.a.createElement(b.a,{icon:v.a}),k=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).callModal=function(){e.props.showTheModal()},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modalContent"},o.a.createElement("h3",null,"Oops!"),o.a.createElement("p",null,this.props.pTag),o.a.createElement("button",{className:"closeModal",onClick:this.callModal},o.a.createElement("span",{className:"srOnly"},"Close this pop-up modal by clicking here."),g)))}}]),a}(o.a.Component),M=o.a.createElement(b.a,{icon:v.a}),O=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).callRemove=function(){e.props.removeHandle(e.props.title)},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("li",{key:this.props.listKey},o.a.createElement("h3",null,this.props.title),this.props.list,o.a.createElement("button",{className:"removeList",title:"remove",onClick:this.callRemove},o.a.createElement("span",{className:"srOnly"},"Delete this list by clicking here."),M))}}]),a}(o.a.Component),I=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("p",null,"Created at ",o.a.createElement("a",{href:"https://junocollege.com/"},"Juno College")," by:"),o.a.createElement("p",null,o.a.createElement("a",{href:"https://github.com/thomasDotOnline"},"Thomas"),","," ",o.a.createElement("a",{href:"https://github.com/bksokhi"},"Baljit"),","," ",o.a.createElement("a",{href:"https://github.com/hshaikhnbake"},"Haris"),", and"," ",o.a.createElement("a",{href:"https://github.com/aprillebalsom"},"Aprille")))}}]),a}(n.Component),S=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).getSyn=function(){m()({url:"https://api.datamuse.com/words",params:{max:12,ml:e.state.synInput}}).then((function(t){var a=t.data;0===a.length&&e.displayNoResultsModal(),e.setState({words:a,showDisplayedWords:!0})}))},e.getRhy=function(){m()({url:"https://api.datamuse.com/words",params:{max:12,rel_rhy:e.state.rhymeInput}}).then((function(t){var a=t.data;0===a.length&&e.displayNoResultsModal(),e.setState({words:a,showDisplayedWords:!0})}))},e.handleChange=function(t){var a=t.target.value;e.setState({wordInput:a})},e.handleRhy=function(){e.setState({rhymeInput:e.state.wordInput,title:e.state.wordInput},(function(){""===e.state.wordInput?e.displayFormModal():e.getRhy()}))},e.handleSyn=function(){e.setState({synInput:e.state.wordInput,title:e.state.wordInput},(function(){""===e.state.wordInput?e.displayFormModal():e.getSyn()}))},e.displayNoResultsModal=function(){e.setState({noResultsModal:!e.state.noResultsModal})},e.displayFormModal=function(){e.setState({showFormModal:!e.state.showFormModal})},e.toggleModal=function(t){if(e.state.poemLibrary.length>0){var a=e.state.poemLibrary.map((function(e){return e.key})).indexOf(e.state.title);if(a>-1)e.state.poemLibrary[a].listOfWords.includes(t.target.value)?e.displayModal():e.addToList(t.target.value);else e.addToList(t.target.value)}else e.addToList(t.target.value)},e.addToList=function(t){y.database().ref(e.state.title).push(t),e.setState({savedWords:t})},e.displayModal=function(){e.setState({showModal:!e.state.showModal})},e.handleRemove=function(e){y.database().ref().child(e).remove()},e.state={title:"",rhymeInput:"",synInput:"",words:[],wordInput:"",savedWords:"",poemLibrary:[],showFormModal:!1,showDisplayedWords:!1,showModal:!1,noResultsModal:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.database().ref().on("value",(function(t){var a=[],n=t.val();for(var o in n){var r=n[o],l=[];for(var s in r)l.push(r[s]);a.push({key:o,listOfWords:l})}e.setState({poemLibrary:a})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(E,null),o.a.createElement("main",{className:"wrapper"},o.a.createElement(w.a,{show:this.state.showFormModal},o.a.createElement(k,{pTag:"Please enter a word and try again!",showTheModal:this.displayFormModal})),o.a.createElement(w.a,{show:this.state.noResultsModal},o.a.createElement(k,{pTag:"Looks like we can't find any results, please try another word!",showTheModal:this.displayNoResultsModal})),o.a.createElement(w.a,{show:this.state.showModal},o.a.createElement(k,{pTag:"Looks like this word has already been added to your list!",showTheModal:this.displayModal})),o.a.createElement("section",{className:"form"},o.a.createElement("label",{htmlFor:"chosenWord"},"Enter A Word"),o.a.createElement("input",{type:"text",id:"chosenWord",onChange:this.handleChange,value:this.state.wordInput,placeholder:"Ex: Happy"}),o.a.createElement("h2",null,"What kind of words would you like?"),o.a.createElement("div",{className:"buttonFlex"},o.a.createElement("button",{onClick:function(){return e.handleSyn()}},"Synonyms"),o.a.createElement("p",null,"or"),o.a.createElement("button",{onClick:function(){return e.handleRhy()}},"Rhymes"))),o.a.createElement(w.a,{show:this.state.showDisplayedWords},o.a.createElement("section",{className:"displayedWords"},o.a.createElement("h2",null,this.state.title),o.a.createElement("ul",null,this.state.words.map((function(t){return o.a.createElement("li",{key:t.score,className:"wordContainer"},o.a.createElement("button",{value:t.word,onClick:e.toggleModal},t.word))}))))),o.a.createElement("section",{className:"poemLists"},o.a.createElement("ul",null,this.state.poemLibrary.map((function(t){var a=t.listOfWords.map((function(e,t){return o.a.createElement("div",{className:"words",key:t},o.a.createElement("p",null,e))}));return o.a.createElement(O,{key:t.key,title:t.key,list:a,listKey:t.key,removeHandle:e.handleRemove})}))))),o.a.createElement(I,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.999a8f2f.chunk.js.map