(this.webpackJsonpaccountownerclient=this.webpackJsonpaccountownerclient||[]).push([[9],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var r=n(21),a=function(e){return{type:r.a}},o=function(e,t){return 404===e.response.status?function(e){return{type:r.e,props:e}}(t):500===e.response.status?function(e){return{type:r.f,props:e}}(t):function(e){return{type:r.g,error:e}}(e)}},220:function(e,t,n){},221:function(e,t,n){"use strict";var r=n(21),a=n(225),o=n.n(a).a.create({baseURL:"https://brokerage.herokuapp.com",headers:{headerType:"example header type"}}),c=n(219);n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return d}));var l=function(e,t){return console.log("get data"),function(n){console.log("before get data"),o.get(e).then((function(e){var t;console.log(e),n((t=e.data,{type:r.d,data:t}))})).catch((function(e){n(c.b(e,t))}))}},s=function(e,t,n){return function(a){console.log("dispatch= "),console.log("url="+e),console.log(t),o.post(e,t).then((function(e){console.log(e),a(function(e){return{type:r.h,response:e}}(e))})).catch((function(e){console.log("error.response= ",e.response),a(c.b(e,n))}))}},u=function(e,t,n){return function(a){o.put(e,t).then((function(e){a(function(e){return{type:r.i,response:e}}(e))})).catch((function(e){a(c.b(e,n))}))}},i=function(e,t){return function(n){o.delete(e).then((function(e){n(function(e){return{type:r.c,response:e}}(e))})).catch((function(e){n(c.b(e,t))}))}},d=function(e,t){return{type:r.b,props:e,url:t}}},223:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(12);n(220);t.a=function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(o.h,{show:e.show,backdrop:"static"},a.a.createElement(o.h.Header,null,e.modalHeaderText),a.a.createElement(o.h.Body,null,a.a.createElement("p",null,e.modalBodyText)),a.a.createElement(o.h.Footer,null,a.a.createElement(o.a,{bsStyle:"success",onClick:e.successClick},e.okButtonText))))}},224:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(12);n(220);t.a=function(e){return a.a.createElement(r.Fragment,null,a.a.createElement(o.h,{show:e.show,backdrop:"static"},a.a.createElement(o.h.Header,null,e.modalHeaderText),a.a.createElement(o.h.Body,null,a.a.createElement("p",null,e.modalBodyText)),a.a.createElement(o.h.Footer,null,a.a.createElement(o.a,{bsStyle:"danger",onClick:e.closeModal},e.okButtonText))))}},227:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(12),c=n(231);n(230),n(228);t.a=function(e){var t=null,n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(n=a.a.createElement("em",null,e.errorMessage)),e.elementType){case"input":t=a.a.createElement(o.f,{controlId:e.id},a.a.createElement(o.b,{componentClass:o.c,sm:2},e.label),a.a.createElement(o.b,{sm:6},a.a.createElement(o.e,{type:e.type,value:e.value,onChange:e.changed,onBlur:e.blur})),a.a.createElement(o.b,null,a.a.createElement("em",null,n)));break;case"datePicker":t=a.a.createElement(o.f,{controlId:e.id},a.a.createElement(o.b,{componentClass:o.c,sm:2},e.label),a.a.createElement(o.b,{sm:6},a.a.createElement(c.a,{selected:e.value,dateFormat:"MM/DD/YYYY",readOnly:!0,onChange:e.changed,className:"datePickerControl",showYearDropdown:!0,dropdownMode:"select"})),a.a.createElement(o.b,null,a.a.createElement("em",null,n)));break;default:t=null}return a.a.createElement(r.Fragment,null,t)}},228:function(e,t,n){},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(226),a=n.n(r),o=function(){return{name:{element:"input",type:"text",value:"",validation:{required:!0},valid:!1,touched:!1,errorMessage:"",label:"Name:"},address:{element:"input",type:"text",value:"",validation:{required:!0,maxLength:60},valid:!1,touched:!1,errorMessage:"",label:"Address:"},dateOfBirth:{element:"datePicker",type:"text",value:a()(),valid:!0,touched:!1,errorMessage:"",label:"Date of birth:"}}}},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n(22),a=function(e){var t=[];for(var n in e)t.push({id:n,config:e[n]});return t},o=function(e,t,n){var a=Object(r.a)({},t[n]);a.value="dateOfBirth"===n?e:e.target.value,a.touched=!0;var o=c(a.value,a.validation);return a.valid=o.isValid,a.errorMessage=o.errorMessage,a},c=function(e,t){var n={isValid:!0,errorMessage:""};return t?(t.required&&(n.isValid=""!==e.trim(),n.errorMessage=n.isValid?"":"Field is required"),n.isValid&&t.maxLength&&(n.isValid=e.length<=t.maxLength,n.errorMessage="Not allowed more than ".concat(t.maxLength," characters")),n):n},l=function(e){var t=0;for(var n in e)if(!e[n].valid){t+=1;break}return t}},265:function(e,t,n){"use strict";n.r(t);var r=n(22),a=n(93),o=n(94),c=n(96),l=n(95),s=n(97),u=n(1),i=n.n(u),d=n(227),m=n(12),f=n(232),p=n(233),h=n(221),b=n(219),v=n(91),g=n(226),E=n.n(g),w=n(223),y=n(224),O=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(n=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={ownerForm:{},isFormValid:!0},n.componentWillMount=function(){n.setState({ownerForm:Object(f.a)()})},n.componentDidMount=function(){var e="/api/owner/"+n.props.match.params.id;n.props.onGetOwnerById(e,Object(r.a)({},n.props))},n.componentWillReceiveProps=function(e){var t=Object(r.a)({},n.state.ownerForm),a=Object(r.a)({},t.name),o=Object(r.a)({},t.dateOfBirth),c=Object(r.a)({},t.address);a.value=e.data.name,a.valid=!0,o.value=E()(e.data.dateOfBirth),c.value=e.data.address,c.valid=!0,t.name=a,t.dateOfBirth=o,t.address=c,n.setState({ownerForm:t})},n.updateOwner=function(e){e.preventDefault();var t={name:n.state.ownerForm.name.value,dateOfBirth:n.state.ownerForm.dateOfBirth.value,address:n.state.ownerForm.address.value},a="/api/owner/"+n.props.data.id;n.props.onUpdateOwner(a,t,Object(r.a)({},n.props))},n.redirectToOwnerList=function(){n.props.history.push("/owner-List")},n.handleChangeEvent=function(e,t){var a=Object(r.a)({},n.state.ownerForm);a[t]=p.c(e,a,t);var o=p.b(a);n.setState({ownerForm:a,isFormValid:0===o})},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=p.a(Object(r.a)({},this.state.ownerForm));return i.a.createElement(m.n,null,i.a.createElement(m.d,{horizontal:!0,onSubmit:this.updateOwner},t.map((function(t){return i.a.createElement(d.a,{key:t.id,elementType:t.config.element,id:t.id,label:t.config.label,type:t.config.type,value:t.config.value,changed:function(n){return e.handleChangeEvent(n,t.id)},errorMessage:t.config.errorMessage,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,blur:function(n){return e.handleChangeEvent(n,t.id)}})})),i.a.createElement("br",null),i.a.createElement(m.f,null,i.a.createElement(m.b,{mdOffset:6,md:1},i.a.createElement(m.a,{type:"submit",bsStyle:"info",disabled:!this.state.isFormValid},"Update")),i.a.createElement(m.b,{md:1},i.a.createElement(m.a,{bsStyle:"danger",onClick:this.redirectToOwnerList},"Cancel")))),i.a.createElement(w.a,{show:this.props.showSuccessModal,modalHeaderText:"Success message",modalBodyText:"Action completed successfully",okButtonText:"OK",successClick:function(){return e.props.onCloseSuccessModal("/owner-List",Object(r.a)({},e.props))}}),i.a.createElement(y.a,{show:this.props.showErrorModal,modalHeaderText:"Error message",modalBodyText:this.props.errorMessage,okButtonText:"OK",closeModal:function(){return e.props.onCloseErrorModal()}}))}}]),t}(u.Component);t.default=Object(v.b)((function(e){return{data:e.repository.data,showSuccessModal:e.repository.showSuccessModal,showErrorModal:e.errorHandler.showErrorModal,errorMessage:e.errorHandler.errorMessage}}),(function(e){return{onGetOwnerById:function(t,n){return e(h.c(t,n))},onUpdateOwner:function(t,n,r){return e(h.e(t,n,r))},onCloseSuccessModal:function(t,n){return e(h.a(n,t))},onCloseErrorModal:function(){return e(b.a())}}}))(O)}}]);
//# sourceMappingURL=9.d0629b9f.chunk.js.map