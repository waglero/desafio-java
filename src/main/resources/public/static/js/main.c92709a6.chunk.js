(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{223:function(e,t,s){},224:function(e,t,s){"use strict";s.r(t);var a=s(46),n=s.n(a),c=s(7),i=s(0),r=s.n(i),o=s(36),l=s.n(o),d=s(47),m=s.n(d),x=s(3),p=s(4),u=s(10),b=s(11),h=function(e){var t=e.split("-");return t[2]+"/"+t[1]+"/"+t[0]},j=s(1),f=function(e){Object(u.a)(s,e);var t=Object(b.a)(s);function s(){return Object(x.a)(this,s),t.apply(this,arguments)}return Object(p.a)(s,[{key:"componentDidMount",value:function(){this.props.loadPersons()}},{key:"handleEditClick",value:function(e){this.props.setCurrentPerson(e),this.props.openModal()}},{key:"handleDeleteClick",value:function(e){this.props.deletePerson(e.id)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"flex flex-col",children:Object(j.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:Object(j.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:Object(j.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(j.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(j.jsx)("thead",{className:"bg-gray-50",children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nome"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"E-mail"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Sexo"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data de Nascimento"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Naturalidade"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Nacionalidade"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"CPF"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Data de cria\xe7\xe3o"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"\xdaltima atualiza\xe7\xe3o"}),Object(j.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"A\xe7\xf5es"})]})}),Object(j.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:this.props.persons.map((function(t){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)("div",{className:"flex-shrink-0 h-10 w-10",children:Object(j.jsx)("img",{className:"h-10 w-10 rounded-full",src:"/default-user-image.webp",alt:""})}),Object(j.jsx)("div",{className:"ml-4",children:Object(j.jsx)("div",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.name})})]})}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.email}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:{M:"Masculino",F:"Feminino",NI:"Indefinido"}[t.gender]}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:h(t.birthDate)}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.placeOfBirth}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.nationality}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:t.cpf}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(t.createdAt).toLocaleString("pt-BR")}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:new Date(t.updatedAt).toLocaleString("pt-BR")}),Object(j.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:[Object(j.jsx)("button",{onClick:function(){return e.handleEditClick(t)},className:"mb-4 mr-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Editar"}),Object(j.jsx)("button",{onClick:function(){return e.handleDeleteClick(t)},className:"mb-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Deletar"})]})]},t.id)}))})]})})})})})}}]),s}(r.a.Component),g=s(8),O=s(48),y=s(34),N=s(87),v=s(14),w=function(e){var t,s,a,n,i,o;v.c({mixed:{default:"N\xe3o \xe9 v\xe1lido",required:"Campo obrigat\xf3rio",date:"Data inv\xe1lida"},string:{email:"E-mail inv\xe1lido"}});var l=v.b().shape({id:v.a().notRequired(),gender:v.d().notRequired(),nationality:v.d().notRequired(),placeOfBirth:v.d().notRequired(),name:v.d().required(),email:v.d().email(),birthDate:v.d().required(),cpf:v.d().required()}),d=Object(y.b)({resolver:Object(N.yupResolver)(l)}),m=d.register,x=d.errors,p=d.handleSubmit,u=r.a.useState([]),b=Object(c.a)(u,2),h=b[0],f=b[1],w=e.person,k=r.a.useState(w),C=Object(c.a)(k,2),D=C[0],S=C[1],F=function(e){var t=e.target,s=t.name,a=t.value;S(Object(O.a)(Object(O.a)({},D),{},Object(g.a)({},s,a)))};return Object(j.jsx)("div",{className:"mt-10 sm:mt-0",children:Object(j.jsx)("div",{className:"md:grid",children:Object(j.jsx)("div",{className:"mt-5 md:mt-0 md:col-span-2",children:Object(j.jsx)("form",{onSubmit:p((function(t){e.savePerson(t).then((function(e){var t={};Object.keys(e).forEach((function(s){t[s]={message:e[s]},f(t)}))}))})),method:"POST",children:Object(j.jsxs)("div",{className:"shadow overflow-hidden sm:rounded-md",children:[Object(j.jsx)("div",{className:"px-4 py-5 bg-white sm:p-6",children:Object(j.jsxs)("div",{className:"grid grid-cols-6 gap-6",children:[Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Nome"}),Object(j.jsx)("input",{defaultValue:w.name,onChange:F,maxLength:"255",type:"text",name:"name",id:"name",ref:m,autoComplete:"given-name",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}),Object(j.jsx)("p",{className:"text-red-500",children:null===(t=x.name)||void 0===t?void 0:t.message})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"E-mail"}),Object(j.jsx)("input",{defaultValue:w.email,onChange:F,maxLength:"255",type:"text",name:"email",id:"email",ref:m,autoComplete:"email",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}),Object(j.jsx)("p",{className:"text-red-500",children:null===(s=x.email)||void 0===s?void 0:s.message})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"gender",className:"block text-sm font-medium text-gray-700",children:"Sexo"}),Object(j.jsxs)("select",{defaultValue:w.gender,onChange:F,id:"gender",ref:m,name:"gender",autoComplete:"gender",className:"mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",children:[Object(j.jsx)("option",{value:""}),Object(j.jsx)("option",{value:"F",children:"Feminino"}),Object(j.jsx)("option",{value:"M",children:"Masculino"}),Object(j.jsx)("option",{value:"NI",children:"Indefinido"})]})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"birthDate",className:"block text-sm font-medium text-gray-700",children:"Data de nascimento"}),Object(j.jsx)("input",{max:(new Date).toISOString().split("T")[0],defaultValue:w.birthDate,onChange:F,type:"date",name:"birthDate",id:"birthDate",ref:m,autoComplete:"birthDate",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}),Object(j.jsx)("p",{className:"text-red-500",children:null===(a=x.birthDate)||void 0===a?void 0:a.message}),Object(j.jsx)("p",{className:"text-red-500",children:null===(n=h.birthDate)||void 0===n?void 0:n.message})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"placeOfBirth",className:"block text-sm font-medium text-gray-700",children:"Naturalidade"}),Object(j.jsx)("input",{defaultValue:w.placeOfBirth,onChange:F,maxLength:"255",type:"text",name:"placeOfBirth",id:"placeOfBirth",ref:m,autoComplete:"street-address",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-6 lg:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"nationality",className:"block text-sm font-medium text-gray-700",children:"Nacionalidade"}),Object(j.jsx)("input",{defaultValue:w.nationality,onChange:F,maxLength:"255",type:"text",name:"nationality",id:"nationality",ref:m,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),Object(j.jsxs)("div",{className:"col-span-6 sm:col-span-3 lg:col-span-3",children:[Object(j.jsx)("label",{htmlFor:"cpf",className:"block text-sm font-medium text-gray-700",children:"CPF"}),Object(j.jsx)("input",{defaultValue:w.cpf,onChange:F,maxLength:"11",type:"text",name:"cpf",id:"cpf",ref:m,className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"}),Object(j.jsx)("p",{className:"text-red-500",children:null===(i=x.cpf)||void 0===i?void 0:i.message}),Object(j.jsx)("p",{className:"text-red-500",children:null===(o=h.cpf)||void 0===o?void 0:o.message})]})]})}),Object(j.jsxs)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:[Object(j.jsx)("button",{onClick:function(){return e.closeModal()},className:"mb-4 mr-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500",children:"Cancelar"}),Object(j.jsx)("input",{value:"Salvar",type:"submit",className:"cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-default"})]})]})})})})})};m.a.setAppElement("#root");var k=function(){var e="http://localhost:8080/api/v1/persons",t=r.a.useState(!1),s=Object(c.a)(t,2),a=s[0],n=s[1],i=r.a.useState([]),o=Object(c.a)(i,2),d=o[0],x=o[1],p=r.a.useState({}),u=Object(c.a)(p,2),b=u[0],h=u[1],g=function(){return n(!0)},O=function(){return n(!1)},y=function(){l.a.get(e).then((function(e){x(e.data),O()}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("nav",{className:"bg-gray-800",children:Object(j.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(j.jsx)("div",{className:"flex items-center justify-between h-16",children:Object(j.jsx)("div",{className:"-mr-2 flex md:hidden"})})})}),Object(j.jsx)("header",{className:"bg-white shadow",children:Object(j.jsx)("div",{className:"max-w-10xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:Object(j.jsx)("h1",{className:"text-3xl font-bold text-gray-900",children:"Cadastro de pessoas"})})}),Object(j.jsxs)("main",{children:[Object(j.jsx)("div",{className:"max-w-10xl mx-auto py-6 sm:px-6 lg:px-8",children:Object(j.jsxs)("div",{className:"px-4 sm:px-0",children:[Object(j.jsx)("button",{onClick:function(){return h({}),void g()},type:"button",className:"mb-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Criar"}),Object(j.jsx)(f,{persons:d,setCurrentPerson:h,openModal:g,loadPersons:y,deletePerson:function(t){l.a.delete(e+"/"+t).then((function(e){y()}))}})]})}),Object(j.jsx)(m.a,{isOpen:a,onRequestClose:O,style:{content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},children:Object(j.jsx)(w,{savePerson:function(e){var t="post";return b.id&&(e.id=b.id,t="put"),l.a[t]("http://localhost:8080/api/v1/persons"+("put"===t?"/"+b.id:""),e).then((function(e){return y(),[]})).catch((function(e){if(e.response)return Object.assign({},e.response.data)}))},person:b,closeModal:O})})]})]})};s(223);n.a.render(Object(j.jsx)(k,{}),document.getElementById("root"))}},[[224,1,2]]]);
//# sourceMappingURL=main.c92709a6.chunk.js.map