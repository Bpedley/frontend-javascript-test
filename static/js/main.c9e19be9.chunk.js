(this["webpackJsonpfrontend-javascript-test"]=this["webpackJsonpfrontend-javascript-test"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(9),s=a.n(l),i=(a(18),a(12)),c=a(3),o=a(4),d=a(6),h=a(5),m=a(7),u=a(11),p=[{Header:"Id",accessor:"id"},{Header:"First Name",accessor:"firstName"},{Header:"Last Name",accessor:"lastName"},{Header:"Email",accessor:"email"},{Header:"Phone",accessor:"phone"}],f=(a(21),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={text:a.props.data.description},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"selected-row"},r.a.createElement("p",null,"\u0412\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"," ",r.a.createElement("b",null,"".concat(this.props.data.firstName," ").concat(this.props.data.lastName))),r.a.createElement("p",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"),r.a.createElement("textarea",{value:this.state.text,rows:30,onChange:function(t){return e.setState({text:t.target.value})}}),r.a.createElement("p",null,"\u0410\u0434\u0440\u0435\u0441 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u0438\u044f:"," ",r.a.createElement("b",null,this.props.data.address?this.props.data.address.streetAddress:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e")),r.a.createElement("p",null,"\u0413\u043e\u0440\u043e\u0434:"," ",r.a.createElement("b",null,this.props.data.address?this.props.data.address.city:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e")),r.a.createElement("p",null,"\u041f\u0440\u043e\u0432\u0438\u043d\u0446\u0438\u044f/\u0448\u0442\u0430\u0442:"," ",r.a.createElement("b",null,this.props.data.address?this.props.data.address.state:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e")),r.a.createElement("p",null,"\u0418\u043d\u0434\u0435\u043a\u0441:"," ",r.a.createElement("b",null,this.props.data.address?this.props.data.address.zip:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.data.description!==t.text?{text:e.data.description||""}:null}}]),t}(n.Component));a(22);var g=function(e){var t=e.handleSelectSubmit,a=e.handleSelectChange,n=e.currentSelect;return r.a.createElement("form",{onSubmit:t},r.a.createElement("label",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043e\u0431\u044a\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b:",r.a.createElement("select",{value:n,onChange:a},r.a.createElement("option",{value:"32 \u0441\u0442\u0440\u043e\u043a\u0438"},"32 \u0441\u0442\u0440\u043e\u043a\u0438"),r.a.createElement("option",{value:"1000 \u0441\u0442\u0440\u043e\u043a"},"1000 \u0441\u0442\u0440\u043e\u043a"))),r.a.createElement("input",{type:"submit",value:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"}))},b=a(10),v=(a(23),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",firstName:"",lastName:"",email:"",phone:"",expand:!1},a.handleRowAdd=function(){var e=a.state,t=e.id,n=e.firstName,r=e.lastName,l=e.email,s=e.phone;a.props.addRowData({id:t,firstName:n,lastName:r,email:l,phone:s}),a.setState({id:"",firstName:"",lastName:"",email:"",phone:"",expand:!1})},a.handleChange=function(e){a.setState(Object(b.a)({},e.target.id,e.target.value))},a.toggleForm=function(){a.setState({expand:!a.state.expand})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.id,a=e.firstName,n=e.lastName,l=e.email,s=e.phone;return e.expand?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn change-state",onClick:this.toggleForm},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement("button",{disabled:!t||!a||!n||!l||!s,onClick:this.handleRowAdd,className:"btn confirm"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement("div",{className:"input-fields"},r.a.createElement("label",{htmlFor:"id"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Id: "),r.a.createElement("input",{id:"id",value:this.state.id,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"firstName"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f: "),r.a.createElement("input",{id:"firstName",value:this.state.firstName,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"lastName"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e: "),r.a.createElement("input",{id:"lastName",value:this.state.lastName,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"email"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email: "),r.a.createElement("input",{id:"email",value:this.state.email,onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"phone"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430: "),r.a.createElement("input",{id:"phone",value:this.state.phone,onChange:this.handleChange}))):r.a.createElement("button",{className:"btn change-state",onClick:this.toggleForm},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")}}]),t}(n.Component)),E=(a(24),a(25),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={data:[],filteredData:[],selected:[],searchInput:"",currentSelect:"32 \u0441\u0442\u0440\u043e\u043a\u0438",isLoading:!1},a.fetchData=function(e){a.setState({isLoading:!0}),fetch(e).then((function(e){return e.json()})).then((function(e){a.setState({data:e,filteredData:e,isLoading:!1})}))},a.handleFilterChange=function(e){var t=void 0===e?a.state.searchInput:e.target.value;a.setState({searchInput:t},(function(){a.globalSearch()}))},a.handleSelectChange=function(e){a.setState({currentSelect:e.target.currentSelect})},a.handleSelectSubmit=function(e){var t;e.preventDefault(),t="32 \u0441\u0442\u0440\u043e\u043a\u0438"===a.state.currentSelect?"https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}":"https://cors-anywhere.herokuapp.com/http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",a.fetchData(t)},a.selectRow=function(e,t){return{onClick:function(){t.row._original.email===a.state.selected.email?a.setState({selected:[]}):a.setState({selected:t.row._original})}}},a.globalSearch=function(){var e=a.state,t=e.searchInput,n=e.data.filter((function(e){return e.id.toString().includes(t)||e.firstName.toLowerCase().includes(t.toLowerCase())||e.lastName.toLowerCase().includes(t.toLowerCase())||e.email.toLowerCase().includes(t.toLowerCase())||e.phone.match(/\d+/g).join("").includes(t)}));a.setState({filteredData:n})},a.addRowData=function(e){var t=[e].concat(Object(i.a)(a.state.data));a.setState({data:t}),a.handleFilterChange()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchInput,a=e.filteredData,n=e.data;return e.isLoading?r.a.createElement("h1",{className:"loader"},"\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445..."):n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"search",value:t,onChange:this.handleFilterChange,placeholder:"\u041d\u0430\u0439\u0442\u0438"}),r.a.createElement(v,{addRowData:this.addRowData}),r.a.createElement(u.a,{data:a,columns:p,defaultPageSize:10,pageSizeOptions:[10,25,50],className:"-striped -highlight",getTrProps:this.selectRow,defaultSorted:[{id:"id",desc:!1}]}),this.state.selected.email?r.a.createElement(f,{data:this.state.selected}):null):r.a.createElement(g,{handleSelectSubmit:this.handleSelectSubmit,handleSelectChange:this.handleSelectChange,currentSelect:this.state.currentSelect})}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[13,1,2]]]);
//# sourceMappingURL=main.c9e19be9.chunk.js.map