(this.webpackJsonpglaucomark=this.webpackJsonpglaucomark||[]).push([[0],{105:function(e,t){},115:function(e,t){},116:function(e,t){},117:function(e,t){},125:function(e,t){},127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n,r=a(18),o=a.n(r),l=a(61),c=a.n(l),s=(a(89),a(2)),i=a.n(s),u=a(10),m=a(17),d=a(4),p=a(9),g=a(12),h=a(13),f=(a(90),a(130)),E=a(131),w=a(132),y=a(134),v=a(133),x=a(43),b=a.n(x),k=a(54),S=a(39);window.tf=S,window.progress=0,window.bytesUsed=0,S.enableProdMode();var I=window.location.href+"model_full/model.json",U=function(){var e=Object(k.a)(b.a.mark((function e(t,a,r){var o,l,c,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Generation start"),console.log(a),o=S.browser.fromPixels(a),console.log("Original image size:",o.shape),l=S.tidy((function(){return S.image.resizeBilinear(o,[224,224]).expandDims(0).div(255)})),o.dispose(),n=performance.now(),e.next=9,t.predict(l);case 9:c=e.sent,l.dispose(),s=performance.now(),console.log("Image Generated"),console.log("Took ".concat((s-n)/1e3," s to generate the image")),console.log("generated.print: "+c.flatten().arraySync()),i=100*(1-c.flatten().arraySync()),r.innerHTML="The chance that you test postive for glaucoma is "+i+"%",c.dispose();case 18:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),_=function(){var e=Object(k.a)(b.a.mark((function e(t,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return performance.now(),e.next=3,S.loadLayersModel(I).then(function(){var e=Object(k.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Model Loaded"),performance.now(),e.next=4,U(n,document.getElementById(t),document.getElementById(a));case 4:S.disposeVariables(),console.log(S.memory());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:window.progress=1;case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),B=a(81),N=a.n(B),T=function(e){return e.children},C=a(82),O=a.n(C),j=function(e){return e.show?o.a.createElement("div",{className:O.a.Backdrop,onClick:e.clicked}):null},L=function(e){return o.a.createElement(T,null,o.a.createElement(j,{show:e.show,clicked:e.modalClosed}),o.a.createElement("div",{className:N.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},A=a(57),P=a.n(A),M=function(e){return o.a.createElement("button",{className:[P.a.Button,P.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},G=(a(126),a(127),new Image),R=function(e){Object(g.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={uploadedImageURL:"data:image/png;",ImageURL:"data:image/png;",uploaded:!1,generationStatus:0,updateGenerationProgressInterval:-1,bytesUsed:0,operating:!1,width:1,height:1},e.operateCancelHandler=function(){e.setState({operating:!1})},e.operateHandler=function(){e.setState({operating:!0})},e.onUpload=function(t){var a=t.target,n=new FileReader;n.onload=function(){var t=n.result,a=new Image;a.src=t,a.onload=function(){e.setState({uploadedImageURL:t,uploaded:!0})}},n.readAsDataURL(a.files[0])},e.detectOD=function(t){var a,n=new FormData;n.append("image",t.files[0]),(a=console).log.apply(a,Object(m.a)(n)),fetch("https://cors-anywhere.herokuapp.com/http://47.251.47.22:5000/image",{method:"POST",body:n}).then((function(e){return e.text()})).then((function(t){G.src="data:image/png;base64,"+t,e.setState({ImageURL:"data:image/png;base64,"+t}),G.onload=function(){e.setState({width:G.width,height:G.width})},_("output","result");console.log("detected"),e.setState({generationStatus:2})})).catch((function(e){return console.log("error",e)}))},e.generate=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0===e.state.generationStatus){t.next=2;break}return t.abrupt("return");case 2:if(console.log(e.state),!1!==e.state.uploaded){t.next=6;break}return alert("Please upload an image."),t.abrupt("return");case 6:return window.progress=0,window.bytesUsed=0,a=setInterval((function(){e.setState({generationProgress:100*window.progress,bytesUsed:window.bytesUsed}),1!==e.state.generationStatus&&clearInterval(a)}),500),e.setState({generationStatus:1,updateGenerationProgressInterval:a}),!1,t.prev=11,t.next=14,e.detectOD(document.getElementById("image"));case 14:return t.next=16,console.log("detected");case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(11),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[11,18]])}))),e.componentWillUnmount=function(){-1!==e.state.updateGenerationProgressInterval&&clearInterval(e.state.updateGenerationProgressInterval)},e}return Object(p.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement(f.a,{fluid:!0,style:{display:0===this.state.generationStatus?"block":"none"}},o.a.createElement(E.a,{className:"margin"},o.a.createElement("div",{className:"topbar"},o.a.createElement("h1",{style:{textAlign:"center",width:"100%"}},"GlaucoMark.js: Take a Glaucoma Test at Home"),o.a.createElement("a",{href:"https://github.com/Lempickax/Glaucomark",style:{fontSize:"12px"}},"View Source Code"))),o.a.createElement(E.a,{className:"margin"},o.a.createElement(w.a,null),o.a.createElement(w.a,{xs:"12",md:"8",lg:"6"}),o.a.createElement(w.a,null)),o.a.createElement(E.a,{className:"margin"},o.a.createElement(w.a,null),o.a.createElement(w.a,{xs:"12",md:"8",lg:"5",xl:"4",style:{textAlign:"center",marginTop:"80px"}},o.a.createElement("h5",{style:{textAlign:"center",width:"100%"}},"Upload a image of retina to continue"),o.a.createElement("input",{label:this.state.uploaded?"Change the image":"Upload an image",onChange:this.onUpload,multiple:!1,custom:!0,type:"file",name:"image",id:"image",alt:"",width:this.state.width,height:this.state.height}),o.a.createElement("img",{id:"uploaded-image",alt:"",src:this.state.uploadedImageURL})),o.a.createElement(w.a,null)),o.a.createElement(E.a,{className:"margin"},o.a.createElement(w.a,null),o.a.createElement(w.a,{xs:"12",md:"8",lg:"6",style:{textAlign:"center"}},o.a.createElement(L,{show:this.state.operating,modalClosed:this.operateCancelHandler},o.a.createElement("div",null,o.a.createElement("h1",null,"Term of Use "),o.a.createElement("p",null,"The result from this website can only be used as references."),o.a.createElement("p",null,"While the predicting model had been validated with a high accuracy, the training dataset still lacks variety."," "),o.a.createElement("p",null,"Thus, the author of this site makes no claims, promises or guarantees about the testing results, and expressly disclaims liability for any potential errors."),o.a.createElement("p",null,"Please see a doctor for final diagnosis."," ")),o.a.createElement("div",null,o.a.createElement(M,{btnType:"Success",clicked:this.generate},"Agree"),o.a.createElement(M,{btnType:"Danger",clicked:this.operateCancelHandler},"Cancel"))),o.a.createElement(y.a,{variant:"primary",onClick:this.operateHandler},"Predict")),o.a.createElement(w.a,null))),o.a.createElement("div",{className:"overlay",style:{display:1===this.state.generationStatus?"block":"none"}},o.a.createElement("div",{style:{marginTop:"calc( 50vh - 50px )",height:"100px",textAlign:"center"}},o.a.createElement(f.a,{fluid:!0},o.a.createElement(E.a,null,o.a.createElement(w.a,null),o.a.createElement(w.a,{xs:"12",md:"8",lg:"6",style:{textAlign:"center"}},o.a.createElement(v.a,{animation:"border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")),o.a.createElement("p",null,"Predicting results..."),o.a.createElement("p",null,"This may take 15 to 30 seconds depending on your device.")),o.a.createElement(w.a,null))))),o.a.createElement("div",{className:"overlay",style:{display:2===this.state.generationStatus?"block":"none"}},o.a.createElement(f.a,{fluid:!0},o.a.createElement(E.a,{className:"margin"},o.a.createElement(w.a,null),o.a.createElement(w.a,{textAlign:"center",xs:"12",md:"8",lg:"5",xl:"4",style:{textAlign:"center",margin:"20px"}},o.a.createElement("img",{id:"output",src:this.state.ImageURL}),o.a.createElement("div",{id:"result"})),o.a.createElement(w.a,null)),o.a.createElement(E.a,{className:"margin"},o.a.createElement(w.a,null),o.a.createElement(w.a,{xs:"12",md:"12",lg:"12",xl:"10",style:{textAlign:"center",margin:"20px"}},o.a.createElement(y.a,{variant:"primary",onClick:function(){return window.location.reload()}},"Restart")),o.a.createElement(w.a,null)))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},57:function(e,t,a){e.exports={Button:"Button_Button__34Npy",Success:"Button_Success__3b4Ig",Danger:"Button_Danger__1WXlI"}},81:function(e,t,a){e.exports={Modal:"Modal_Modal__2Q_cQ"}},82:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__tO-Lj"}},84:function(e,t,a){e.exports=a(128)},89:function(e,t,a){},90:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},93:function(e,t){},94:function(e,t){}},[[84,1,2]]]);
//# sourceMappingURL=main.77ebb611.chunk.js.map