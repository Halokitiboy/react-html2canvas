(this.webpackJsonpreactgrml2canvas=this.webpackJsonpreactgrml2canvas||[]).push([[0],{106:function(e,t,a){e.exports=a(217)},111:function(e,t,a){},211:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),c=(a(111),a(44)),l=a.n(c),s=a(65),m=a(94),u=a(95),d=a(101),g=a(102),h=a(239),p=a(238),v=a(237),f=a(51),b=a.n(f),E=a(97),w=a.n(E),C=(a(209),a(210),a(211),function(e){Object(g.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={editorState:b.a.createEditorState(null),outputContent:"",canvasConfig:{dpi:3*window.devicePixelRatio,scale:1},name:"",imageControls:["float-left","float-right","align-left","align-center","align-right","link","size","remove"],open:!1,vertical:"top",horizontal:"right",hideDuration:2e3,message:""},e.submitContent=Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=e.state.editorState.toHTML(),e.setState({outputContent:a});case 2:case"end":return t.stop()}}),t)}))),e.handleEditorChange=function(t){var a=t.toHTML();e.setState({editorState:t,outputContent:a})},e.html2canvasHandle=function(t){var a=e.state.name;w()(t,e.state.canvasConfig).then((function(t){e.downLoadImg(t,a)}))},e.downLoadImg=function(t,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"jpg";if(t)if(a){var o=document.createElement("a"),r=t.getContext("2d");r.mozImageSmoothingEnabled=!1,r.webkitImageSmoothingEnabled=!1,r.msImageSmoothingEnabled=!1,r.imageSmoothingEnabled=!1;var i=t.toDataURL({quality:1,width:750}),c=e.dataURLtoBlob(i),l=URL.createObjectURL(c);o.download="".concat(a,".").concat(n),o.href=l,o.click()}else e.setState({open:!0,message:"\u8bf7\u8f93\u5165\u6587\u4ef6\u540dname"});else e.setState({open:!0,message:"\u8bf7\u5148\u751f\u6210\u6587\u4ef6"})},e.dataURLtoBlob=function(e){for(var t=e.split(","),a=t[0].match(/:(.*?);/)[1],n=atob(t[1]),o=n.length,r=new Uint8Array(o);o--;)r[o]=n.charCodeAt(o);return new Blob([r],{type:a})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({editorState:b.a.createEditorState("")});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getName",value:function(e){this.setState({name:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.editorState,a=e.outputContent,n=e.name,r=e.imageControls,i=e.open,c=e.message,l=e.vertical,s=e.horizontal,m=e.hideDuration;return o.a.createElement("div",{className:"my-component"},o.a.createElement("section",{className:"EditorLeft"},o.a.createElement("header",null,"\u8f93\u5165"),o.a.createElement(b.a,{value:t,onChange:this.handleEditorChange,onSave:this.submitContent,imageControls:r,media:{accepts:{image:"image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg",video:"video/mp4",audio:"audio/mp3"}}})),o.a.createElement("section",{className:"resultRight"},o.a.createElement("header",null,o.a.createElement("span",null,"\u8f93\u51fa"),o.a.createElement(h.a,{placeholder:"\u751f\u6210\u7684\u6587\u4ef6\u540d",value:n,onChange:this.getName.bind(this),className:"input-box"}),o.a.createElement(p.a,{onClick:this.html2canvasHandle.bind(this,this.refs.myInput),variant:"contained",color:"primary"},"\u5bfc\u51fa\u6587\u4ef6")),o.a.createElement("div",{id:"braft-output-content",ref:"myInput",className:"braft-output-content",dangerouslySetInnerHTML:{__html:a}})),o.a.createElement(v.a,{anchorOrigin:{vertical:l,horizontal:s},open:i,message:c,autoHideDuration:m,resumeHideDuration:m}))}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:"title"},"\u90fd\u602aps\u6280\u672f\u4e0d\u884c\u53ea\u80fd\u641e\u641e\u5c0f\u806a\u660e-\u56fe\u7247\u751f\u6210\u5de5\u5177"),o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[106,1,2]]]);
//# sourceMappingURL=main.584a0ff0.chunk.js.map