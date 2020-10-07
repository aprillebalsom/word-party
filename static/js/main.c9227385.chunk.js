(this["webpackJsonpword-party"]=this["webpackJsonpword-party"]||[]).push([[0],{30:function(e,t,a){e.exports=a(59)},35:function(e,t,a){},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),s=(a(35),a(3)),c=a(4),i=a(6),m=a(5),u=(a(36),a(13)),d=a.n(u),p=a(14),h=a.n(p);a(53);h.a.initializeApp({apiKey:"AIzaSyCS6fkr1nkfcWbuxowQcwS55dUFGm9qa8g",authDomain:"wordparty-92c9f.firebaseapp.com",databaseURL:"https://wordparty-92c9f.firebaseio.com",projectId:"wordparty-92c9f",storageBucket:"wordparty-92c9f.appspot.com",messagingSenderId:"410418051346",appId:"1:410418051346:web:10cd4fb319baf427c8dbcb"});var y=h.a,f=a(29),E=a.n(f),v=a(7),b=a(8),w=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper headerFlex"},r.a.createElement("h1",null,"Word Party"),r.a.createElement("p",{className:"tagLine"},"Expand your vocabulary and create rhyming schemes with Word Party")))},g=r.a.createElement(v.a,{icon:b.a}),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).callRemove=function(){e.props.removeHandle(e.props.title)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("li",{key:this.props.listKey},r.a.createElement("button",{className:"removeList",title:"remove",onClick:this.callRemove},r.a.createElement("span",{className:"srOnly"},"Delete this list by clicking here."),g),r.a.createElement("h3",null,this.props.title),this.props.list)}}]),a}(r.a.Component),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Created at ",r.a.createElement("a",{href:"https://junocollege.com/"},"Juno College")," by:"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/thomasDotOnline"},"Thomas"),", ",r.a.createElement("a",{href:"https://github.com/bksokhi"},"Baljit"),", ",r.a.createElement("a",{href:"https://github.com/hshaikhnbake"},"Haris"),", and ",r.a.createElement("a",{href:"https://github.com/aprillebalsom"},"Aprille")))}}]),a}(n.Component),O=r.a.createElement(v.a,{icon:b.b}),N=r.a.createElement(v.a,{icon:b.a}),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleRemove=function(e){y.database().ref().child(e).remove()},e.getRhy=function(){d()({url:"https://api.datamuse.com/words",params:{max:12,rel_rhy:e.state.rhymeInput}}).then((function(t){var a=t.data;e.setState({words:a})}))},e.getSyn=function(){d()({url:"https://api.datamuse.com/words",params:{max:10,ml:e.state.synInput}}).then((function(t){var a=t.data;e.setState({words:a})}))},e.handleChange=function(t){var a=t.target.value;e.setState({wordInput:a})},e.handleRhy=function(){e.setState({rhymeInput:e.state.wordInput,title:e.state.wordInput},(function(){""===e.state.wordInput?alert("This is empty!"):e.getRhy()}))},e.handleSyn=function(){e.setState({synInput:e.state.wordInput,title:e.state.wordInput},(function(){""===e.state.wordInput?alert("This is empty!"):e.getSyn()}))},e.toggleModal=function(t){if(e.state.poemLibrary.length>0){var a=e.state.poemLibrary[0].listOfWords.includes(t.target.value);console.log(a),a?e.displayModal():e.addToList(t.target.value)}else e.addToList(t.target.value)},e.addToList=function(t){y.database().ref(e.state.title).push(t),e.setState({savedWords:t})},e.displayModal=function(){e.setState({showModal:!e.state.showModal})},e.state={title:"",rhymeInput:"",synInput:"",words:[],wordInput:"",savedWords:"",poemLibrary:[],showModal:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.database().ref().on("value",(function(t){var a=[],n=t.val();for(var r in n){var l=n[r],o=[];for(var s in l)o.push(l[s]);a.push({key:r,listOfWords:o})}e.setState({poemLibrary:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement("main",{className:"wrapper"},r.a.createElement(E.a,{show:this.state.showModal},r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modalContent"},r.a.createElement("h3",null,"Oops!"),r.a.createElement("p",null,"Looks like this word has already been added to your list!"),r.a.createElement("button",{className:"closeModal",onClick:this.displayModal},r.a.createElement("span",{className:"srOnly"},"Close this pop-up modal by clicking here."),N)))),r.a.createElement("section",{className:"form"},r.a.createElement("label",{htmlFor:"chosenWord"},"Enter A Word"),r.a.createElement("input",{type:"text",id:"chosenWord",onChange:this.handleChange,value:this.state.wordInput,placeholder:"Ex: Happy"}),r.a.createElement("h2",null,"What kind of words would you like?"),r.a.createElement("div",{className:"buttonFlex"},r.a.createElement("button",{onClick:function(){return e.handleSyn()}},"Synonyms"),r.a.createElement("p",null,"or"),r.a.createElement("button",{onClick:function(){return e.handleRhy()}},"Rhymes"))),r.a.createElement("section",{className:"displayedWords"},r.a.createElement("h2",null,this.state.title),r.a.createElement("ul",null,this.state.words.map((function(t){return r.a.createElement("li",{key:t.score,className:"wordContainer"},r.a.createElement("button",{value:t.word,onClick:e.toggleModal},t.word))})))),r.a.createElement("section",{className:"poemLists"},r.a.createElement("ul",null,this.state.poemLibrary.map((function(t){var a=t.listOfWords.map((function(e,t){return r.a.createElement("div",{className:"words",key:t},r.a.createElement("p",null,e),r.a.createElement("span",{className:"srOnly"},"Delete this word by clicking here."),r.a.createElement("button",{title:"remove"},O))}));return r.a.createElement(k,{key:t.key,title:t.key,list:a,listKey:t.key,removeHandle:e.handleRemove})}))))),r.a.createElement("footer",null,r.a.createElement(I,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c9227385.chunk.js.map