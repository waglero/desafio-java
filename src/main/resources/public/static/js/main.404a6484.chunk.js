(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{196:function(e,t){},198:function(e,t){},209:function(e,t){},211:function(e,t){},236:function(e,t){},238:function(e,t){},239:function(e,t){},244:function(e,t){},246:function(e,t){},265:function(e,t){},277:function(e,t){},280:function(e,t){},412:function(e,t,s){},413:function(e,t,s){"use strict";s.r(t);var a=s(96),n=s.n(a),r=s(9),i=s(1),c=s.n(i),o=(s(190),s(65)),l=s.n(o),d=s(49),m=s.n(d),x=s(5),u=s(6),p=s(14),b=s(15),h=function(e){var t=e.split("-");return t[2]+"/"+t[1]+"/"+t[0]},j=s(0),f=function(e){return Object(j.jsxs)("div",{className:" inline-block border align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline",children:[Object(j.jsx)("div",{className:"bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(j.jsxs)("div",{className:"sm:flex sm:items-start",children:[Object(j.jsx)("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:Object(j.jsx)("svg",{className:"h-6 w-6 text-red-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),Object(j.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[Object(j.jsxs)("h3",{className:"text-lg leading-6 font-medium text-gray-900",id:"modal-headline",children:["Deletar: ",e.person.name,"?"]}),Object(j.jsx)("div",{className:"mt-2",children:Object(j.jsx)("p",{className:"text-sm text-gray-500",children:"Essa a\xe7\xe3o n\xe3o pode ser revetida"})})]})]})}),Object(j.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(j.jsx)("button",{type:"button",onClick:function(){e.deletePerson(e.person.id),e.closeModal()},className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm",children:"Deletar"}),Object(j.jsx)("button",{type:"button",onClick:function(){e.closeModal()},className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",children:"Cancelar"})]})]})},g=function(e){Object(p.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(x.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={modalIsOpen:!1,personToBeDeleted:{}},e.setIsOpen=function(t){e.setState({modalIsOpen:t})},e.openModal=function(){return e.setIsOpen(!0)},e.closeModal=function(){return e.setIsOpen(!1)},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.props.loadPersons()}},{key:"handleEditClick",value:function(e){this.props.setCurrentPerson(e),this.props.openModal()}},{key:"handleDeleteClick",value:function(e){this.setState({personToBeDeleted:e}),this.openModal()}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(j.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(j.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(j.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(j.jsx)("thead",{className:"bg-gray-50",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nome"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"E-mail"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Sexo"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data de Nascimento"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Naturalidade"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nacionalidade"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"CPF"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data de cria\xe7\xe3o"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"\xdaltima atualiza\xe7\xe3o"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"A\xe7\xf5es"})]})}),Object(j.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:this.props.persons.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)("div",{className:"flex-shrink-0 h-10 w-10",children:Object(j.jsx)("img",{className:"h-10 w-10 rounded-full",src:"/default-user-image.webp",alt:""})}),Object(j.jsx)("div",{className:"ml-4",children:Object(j.jsx)("div",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.name})})]})}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.email}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:{M:"Masculino",F:"Feminino",NI:"Indefinido"}[t.gender]}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:h(t.birthDate)}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.placeOfBirth}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.nationality}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.cpf}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(t.createdAt).toLocaleString("pt-BR")}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(t.updatedAt).toLocaleString("pt-BR")}),Object(j.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:[Object(j.jsx)("button",{onClick:function(){return e.handleEditClick(t)},className:"mb-4 mr-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Editar"}),Object(j.jsx)("button",{onClick:function(){return e.handleDeleteClick(t)},className:"mb-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Deletar"})]})]},t.id)}))})]})})})}),Object(j.jsx)(m.a,{isOpen:this.state.modalIsOpen,onRequestClose:this.closeModal,style:{content:{border:0,top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:Object(j.jsx)(f,{deletePerson:this.props.deletePerson,person:this.state.personToBeDeleted,closeModal:this.closeModal})})]})}}]),s}(c.a.Component),O=s(10),y=s(97),w=s(63),v=s(185),N=s(21),k=function(e){var t,s,a,n,i,o;N.c({mixed:{default:"N\xe3o \xe9 v\xe1lido",required:"Campo obrigat\xf3rio",date:"Data inv\xe1lida"},string:{email:"E-mail inv\xe1lido"}});var l=N.b().shape({id:N.a().notRequired(),gender:N.d().notRequired(),nationality:N.d().notRequired(),placeOfBirth:N.d().notRequired(),name:N.d().required(),email:N.d().email(),birthDate:N.d().required(),cpf:N.d().required()}),d=Object(w.b)({resolver:Object(v.yupResolver)(l)}),m=d.register,x=d.errors,u=d.handleSubmit,p=c.a.useState([]),b=Object(r.a)(p,2),h=b[0],f=b[1],g=e.person,k=c.a.useState(g),C=Object(r.a)(k,2),D=C[0],M=C[1],S=function(e){var t=e.target,s=t.name,a=t.value;M(Object(y.a)(Object(y.a)({},D),{},Object(O.a)({},s,a)))};return Object(j.jsx)("div",{className:"mt-10 sm:mt-0",children:Object(j.jsx)("div",{className:"md:grid",children:Object(j.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:Object(j.jsx)("form",{onSubmit:u((function(t){e.savePerson(t).then((function(e){var t={};Object.keys(e).forEach((function(s){t[s]={message:e[s]},f(t)}))}))})),method:"POST",children:Object(j.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(j.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:Object(j.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Nome"}),Object(j.jsx)("input",{defaultValue:g.name,onChange:S,maxLength:"255",type:"text",name:"name",id:"name",ref:m,autoComplete:"given-name",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}),Object(j.jsx)("p",{className:"text-red-500",children:null===(t=x.name)||void 0===t?void 0:t.message})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"E-mail"}),Object(j.jsx)("input",{defaultValue:g.email,onChange:S,maxLength:"255",type:"text",name:"email",id:"email",ref:m,autoComplete:"email",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}),Object(j.jsx)("p",{className:"text-red-500",children:null===(s=x.email)||void 0===s?void 0:s.message})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"gender",className:"block text-sm font-medium text-gray-700",children:"Sexo"}),Object(j.jsxs)("select",{defaultValue:g.gender,onChange:S,id:"gender",ref:m,name:"gender",autoComplete:"gender",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:"F",children:"Feminino"}),Object(j.jsx)("option",{value:"M",children:"Masculino"}),Object(j.jsx)("option",{value:"NI",children:"Indefinido"})]})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"birthDate",className:"block text-sm font-medium text-gray-700",children:"Data de nascimento"}),Object(j.jsx)("input",{max:(new Date).toISOString().split("T")[0],defaultValue:g.birthDate,onChange:S,type:"date",name:"birthDate",id:"birthDate",ref:m,autoComplete:"birthDate",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}),Object(j.jsx)("p",{className:"text-red-500",children:null===(a=x.birthDate)||void 0===a?void 0:a.message}),Object(j.jsx)("p",{className:"text-red-500",children:null===(n=h.birthDate)||void 0===n?void 0:n.message})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"placeOfBirth",className:"block text-sm font-medium text-gray-700",children:"Naturalidade"}),Object(j.jsx)("input",{defaultValue:g.placeOfBirth,onChange:S,maxLength:"255",type:"text",name:"placeOfBirth",id:"placeOfBirth",ref:m,autoComplete:"street-address",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"nationality",className:"block text-sm font-medium text-gray-700",children:"Nacionalidade"}),Object(j.jsx)("input",{defaultValue:g.nationality,onChange:S,maxLength:"255",type:"text",name:"nationality",id:"nationality",ref:m,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3 lg:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"cpf",className:"block text-sm font-medium text-gray-700",children:"CPF"}),Object(j.jsx)("input",{defaultValue:g.cpf,onChange:S,maxLength:"11",type:"text",name:"cpf",id:"cpf",ref:m,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}),Object(j.jsx)("p",{className:"text-red-500",children:null===(i=x.cpf)||void 0===i?void 0:i.message}),Object(j.jsx)("p",{className:"text-red-500",children:null===(o=h.cpf)||void 0===o?void 0:o.message})]})]})}),Object(j.jsxs)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:[Object(j.jsx)("button",{onClick:function(){return e.closeModal()},className:"mb-4 mr-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Cancelar"}),Object(j.jsx)("input",{value:"Salvar",type:"submit",className:"cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-default"})]})]})})})})})};m.a.setAppElement("#root");var C=function(){var e="http://localhost:8080/api/v1/persons",t={auth:{username:"admin",password:"admin"}},s=c.a.useState(!1),a=Object(r.a)(s,2),n=a[0],i=a[1],o=c.a.useState([]),d=Object(r.a)(o,2),x=d[0],u=d[1],p=c.a.useState({}),b=Object(r.a)(p,2),h=b[0],f=b[1],O=function(){return i(!0)},y=function(){return i(!1)},w=function(){l.a.get(e,t).then((function(e){u(e.data),y()}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("nav",{className:"bg-gray-800",children:Object(j.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(j.jsx)("div",{className:"flex items-center justify-between h-16",children:Object(j.jsx)("div",{className:"-mr-2 flex md:hidden"})})})}),Object(j.jsx)("header",{className:"bg-white shadow",children:Object(j.jsx)("div",{className:"max-w-10xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:Object(j.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Cadastro de pessoas"})})}),Object(j.jsxs)("main",{children:[Object(j.jsx)("div",{className:"max-w-10xl mx-auto py-6 sm:px-6 lg:px-8",children:Object(j.jsxs)("div",{className:"px-4 sm:px-0",children:[Object(j.jsx)("button",{onClick:function(){return f({}),void O()},type:"button",className:"mb-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Criar"}),Object(j.jsx)(g,{persons:x,setCurrentPerson:f,openModal:O,loadPersons:w,deletePerson:function(s){l.a.delete(e+"/"+s,t).then((function(e){w()}))}})]})}),Object(j.jsx)(m.a,{isOpen:n,onRequestClose:y,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:Object(j.jsx)(k,{savePerson:function(s){var a="post";return h.id&&(s.id=h.id,a="put"),l.a[a](e+("put"===a?"/"+h.id:""),s,t).then((function(e){return w(),[]})).catch((function(e){if(e.response)return Object.assign({},e.response.data)}))},person:h,closeModal:y})})]})]})};s(412);n.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))}},[[413,1,2]]]);
//# sourceMappingURL=main.404a6484.chunk.js.map