(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{35:function(e,a,t){},36:function(e,a,t){},48:function(e,a,t){e.exports=t(64)},53:function(e,a,t){},54:function(e,a,t){},64:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),s=t.n(l),i=(t(53),t(6)),c=t(7),o=t(9),m=t(8),d=t(21),u=t.n(d),p=(t(54),t(20)),f=t(28),h=t(33),E=t.n(h),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(p.a)(e)),e}return Object(c.a)(t,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,a="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",a)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var a=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var t=r.a.memo((function(){return r.a.createElement(f.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,a){return!0}));if(this.props.sharedBasicInfo)this.props.sharedBasicInfo.social.map((function(e){return r.a.createElement("span",{key:e.name,className:"m-4"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.class})))}));return r.a.createElement("header",{id:"home",style:{height:"50px",display:"block",paddingTop:"50px ",paddingBottom:"5px !important"}},r.a.createElement("div",{className:"row aligner",style:{height:"100%"}},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",null,r.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),r.a.createElement("br",null),r.a.createElement("h1",{className:"mb-0"},r.a.createElement(f.a,{steps:[a],wrapper:"p"})),r.a.createElement("div",{className:"title-container"},r.a.createElement(t,null)),r.a.createElement(E.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:r.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:r.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("a",{href:"https://github.com/arnavigode",style:{textDecoration:"none",cursor:"pointer",color:"inherit"},target:"_blank"},r.a.createElement("i",{class:"fab fa-github fa-2x",style:{textDecoration:"none",cursor:"pointer"}})),r.a.createElement("a",{href:"https://www.linkedin.com/in/arnavi-gode-3227ba148/",style:{textDecoration:"none",cursor:"pointer",color:"inherit"},target:"_blank"},r.a.createElement("i",{class:"fab fa-linkedin fa-2x",style:{cursor:"pointer"}})),r.a.createElement("a",{href:"https://twitter.com/GodeArnavi",style:{textDecoration:"none",cursor:"pointer",color:"inherit"},target:"_blank"},r.a.createElement("i",{class:"fab fa-twitter fa-2x",style:{cursor:"pointer"}}))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),t}(n.Component),v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return r.a.createElement("span",{key:e.name,className:"m-4"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:e.class})))}));return r.a.createElement("footer",{id:"footer"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{style:{fontFamily:"'Raleway', sans-serif",fontSize:"22px"}},"CONTACT ME"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("i",{class:"fas fa-mobile-android-alt fa-1x"})," ",r.a.createElement("span",{className:"sp"},"+91-7350441681")),r.a.createElement("div",{class:"col"},r.a.createElement("i",{class:"fal fa-map-marker-check fa-1x"})," ",r.a.createElement("span",{className:"sp"},"Pune,Maharshtra")),r.a.createElement("div",{class:"col"},r.a.createElement("i",{class:"far fa-envelope-open fa-1x"}),r.a.createElement("span",{className:"sp"},"arnavi.gode96@gmail.com")))))),r.a.createElement("div",{className:"social-links"},e),r.a.createElement("div",{className:"copyright py-4 text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???")))))}}]),t}(n.Component),b=t(67),y=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.about,t=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{style:{color:"black"}},r.a.createElement("span",null,a)),r.a.createElement("div",{className:"row center mx-auto mb-5"},r.a.createElement("div",{className:"col-md-4 mb-5 center"},r.a.createElement("div",{className:"polaroid"},r.a.createElement("span",{style:{cursor:"auto"}},r.a.createElement("img",{height:"250px",src:e,alt:"Avatar placeholder"})))),r.a.createElement("div",{className:"col-md-8 center"},r.a.createElement("div",{className:"col-md-10"},r.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%",background:"transperent",color:"white"}},r.a.createElement("br",null),r.a.createElement("span",{style:{},className:"wave"},t," \u263a\ufe0f "),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:"21px"}},n),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{className:"buttonres",href:"Arnavi_Gode.pdf",target:"_blank"},r.a.createElement(b.a,{className:"button",style:{background:"black",color:"white",border:"none",width:"30%",height:"40px",clear:"both"}},"VIEW RESUME"))))))))}}]),t}(n.Component),w=t(66),k=t(34),N=t.n(k),x=t(35),j=t.n(x),I=t(36),S=t.n(I),O=(t(59),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,a=this.props.data.images,t=this.props.data.title,n=this.props.data.description,l=this.props.data.url,s=this.props.data.url2;if(this.props.data.technologies){var i=e.map((function(e,a){return r.a.createElement("li",{className:"list-inline-item mx-3",key:a},r.a.createElement("span",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},r.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}));if(this.props.data.images)var c=a.map((function(e,a){return r.a.createElement("div",{key:a,"data-src":e})}))}}return r.a.createElement(w.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside"}),r.a.createElement("span",{onClick:this.props.onHide,className:"modal-close"},r.a.createElement("i",{className:"fas fa-times fa-3x close-icon"})),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"}},r.a.createElement("div",{className:"slider-tab"},r.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",r.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",r.a.createElement("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})),r.a.createElement(N.a,{cssModule:[j.a,S.a],animation:"scaleOutAnimation",className:"slider-image"},c)),r.a.createElement("div",{className:"col-md-10 mx-auto"},r.a.createElement("h3",{style:{padding:"5px 5px 0 5px"}},t,s?r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer",className:"link-href"},r.a.createElement("i",{className:" fab fa-github",style:{marginLeft:"10px"}})):null,l?r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer",className:"link-href"},r.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null),r.a.createElement("p",{className:"modal-description"},n),r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("ul",{className:"list-inline mx-auto"},i)))))}}]),t}(n.Component)),B=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(c.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo){var a=this.props.resumeBasicInfo.section_name.projects;if(this.props.resumeBasicInfo.projects){var t=this.props.resumeBasicInfo.projects.technologies;if(this.props.resumeBasicInfo.projects.technologies)t.map((function(e,a){return r.a.createElement("li",{className:"list-inline-item mx-3",key:a},r.a.createElement("span",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("i",{className:e.class,style:{fontSize:"300%"}},r.a.createElement("p",{className:"text-center",style:{fontSize:"30%"}},e.name)))))}))}var n=this.props.resumeProjects.map((function(a){return r.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer",color:"white"},id:"projects"},r.a.createElement("span",{className:"portfolio-item d-block"},r.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},r.a.createElement("div",null,r.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("p",{className:"project-title-settings mt-3"},a.title),r.a.createElement("br",null),r.a.createElement("p",{className:"project-title-settings mt-3",style:{padding:"5px 5px 0 5px"}},a.url2?r.a.createElement("a",{href:a.url2,target:"_blank",rel:"noopener noreferrer",className:"link-href"},r.a.createElement("i",{className:" fab fa-github",style:{marginLeft:"10px"}})):null,a.url?r.a.createElement("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",className:"link-href"},r.a.createElement("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})):null))))))}))}return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"section-title",style:{color:"white",fontSize:"22px"}},r.a.createElement("span",null,a)),r.a.createElement("div",{className:"col-md-12 mx-auto"},r.a.createElement("div",{className:"row mx-auto"},n)),r.a.createElement(O,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})))}}]),t}(n.Component),C=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,a=this.props.sharedSkills.icons.map((function(e,a){return r.a.createElement("li",{className:"list-inline-item mx-3",key:a},r.a.createElement("span",null,r.a.createElement("div",{className:"text-center skills-tile"},r.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},r.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return r.a.createElement("section",{id:"skills"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"section-title"},r.a.createElement("span",{className:"text-white",style:{fontSize:"22px"}},e))),r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},a))))}}]),t}(n.Component),L=t(41);function _(){var e=Object(L.a)(['\n\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .navbarp {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 60px;\n    background: #3f3f3f;\n    /* background-color: red; */\n    color: black;\n    font-family: "Raleway", sans-serif;\n    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);\n    position: fixed;\n    width: 100vw !important;\n    top: 0;\n    z-index: 1 !important;\n    /* overflow: hidden; */\n  }\n  .navbarp h3 {\n    display: flex;\n    justify-content: flex-end !important;\n    margin-left: 30%;\n  }\n  a {\n    color: white !important;\n  }\n  .logo {\n    font-size: 30px;\n  }\n  .nav-links {\n    display: flex;\n    justify-content: flex-end !important;\n    list-style: none;\n    width: 75px;\n    margin-left: 90%;\n  }\n  .home,\n  .about,\n  .skills,\n  .projects,\n  .contact {\n    text-decoration: none;\n    color: white;\n    font-size: 20px;\n    padding: 10px 20px;\n    margin: 0 10px;\n    cursor: pointer;\n  }\n']);return _=function(){return e},e}var D=t(42).a.div(_());function A(){return r.a.createElement(D,null,r.a.createElement("nav",{className:"navbarp"},r.a.createElement("ul",{className:"nav-links"},r.a.createElement("div",{className:"home"},r.a.createElement("a",{href:"#home"},r.a.createElement("li",null,"Home"))),r.a.createElement("div",{className:"about"},r.a.createElement("a",{href:"#about"},r.a.createElement("li",null,"About"))),r.a.createElement("div",{className:"skills"},r.a.createElement("a",{href:"#skills"},r.a.createElement("li",null,"Skills"))),r.a.createElement("div",{className:"projects"},r.a.createElement("a",{href:"#projects"},r.a.createElement("li",null,"Projects"))),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{href:"#footer"},r.a.createElement("li",null,"Contact"))))))}var z=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(c.a)(t,[{key:"applyPickedLanguage",value:function(e,a){this.swapCurrentlyActiveLanguage(a),document.documentElement.lang=e;var t=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(t)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var a=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(a).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){u.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"loadSharedData",value:function(){u.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,a,t){alert(t)}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(g,{sharedData:this.state.sharedData.basic_info}),r.a.createElement("div",{className:"col-md-12 mx-auto text-center language"},r.a.createElement("div",{onClick:function(){return e.applyPickedLanguage()},style:{display:"inline"}},r.a.createElement("span",{"data-inline":"false",id:window.$primaryLanguageIconId})),r.a.createElement("div",null,r.a.createElement("span",{"data-inline":"false",id:window.$secondaryLanguageIconId}))),r.a.createElement(y,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),r.a.createElement(C,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),r.a.createElement(B,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),r.a.createElement(v,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(63);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",s.a.render(r.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolioupload",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/portfolioupload","/service-worker.js");T?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):$(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):$(a,e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.fcd1105b.chunk.js.map