import{m as _,W as E,B as H,R as B,P as h,C as F,n as Z}from"./index-f28d7425.js";import{E as g,H as O,s as P,t as r,a as $,b as D,i as T,k as A,c as L,S as J,j as q,d as I}from"./codemirror-0a1db0c7.js";import"./vuetify-f4a6879d.js";import"./overlayscrollbars-44d87bcf.js";import"./echarts-ff51454d.js";function k(){return k=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(i[t]=n[t])}return i},k.apply(this,arguments)}var R=i=>{var{theme:e,settings:n={},styles:t=[]}=i,o={".cm-gutters":{}},c={};n.background&&(c.backgroundColor=n.background),n.backgroundImage&&(c.backgroundImage=n.backgroundImage),n.foreground&&(c.color=n.foreground),(n.background||n.foreground)&&(o["&"]=c),n.fontFamily&&(o["&.cm-editor .cm-scroller"]={fontFamily:n.fontFamily}),n.gutterBackground&&(o[".cm-gutters"].backgroundColor=n.gutterBackground),n.gutterForeground&&(o[".cm-gutters"].color=n.gutterForeground),n.gutterBorder&&(o[".cm-gutters"].borderRightColor=n.gutterBorder),n.caret&&(o[".cm-content"]={caretColor:n.caret},o[".cm-cursor, .cm-dropCursor"]={borderLeftColor:n.caret});var l={};n.gutterActiveForeground&&(l.color=n.gutterActiveForeground),n.lineHighlight&&(o[".cm-activeLine"]={backgroundColor:n.lineHighlight},l.backgroundColor=n.lineHighlight),o[".cm-activeLineGutter"]=l,n.selection&&(o["&.cm-focused .cm-selectionBackground, & .cm-line::selection, & .cm-selectionLayer .cm-selectionBackground, .cm-content ::selection"]={background:n.selection+" !important"}),n.selectionMatch&&(o["& .cm-selectionMatch"]={backgroundColor:n.selectionMatch});var f=g.theme(o,{dark:e==="dark"}),d=O.define(t),m=[f,P(d)];return m},W={background:"#1e1e1e",foreground:"#9cdcfe",caret:"#c6c6c6",selection:"#6199ff2f",selectionMatch:"#72a1ff59",lineHighlight:"#ffffff0f",gutterBackground:"#1e1e1e",gutterForeground:"#838383",gutterActiveForeground:"#fff",fontFamily:'Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono", "Courier New", monospace'};function V(i){var{theme:e="dark",settings:n={},styles:t=[]}=i||{};return R({theme:e,settings:k({},W,n),styles:[{tag:[r.keyword,r.operatorKeyword,r.modifier,r.color,r.constant(r.name),r.standard(r.name),r.standard(r.tagName),r.special(r.brace),r.atom,r.bool,r.special(r.variableName)],color:"#569cd6"},{tag:[r.controlKeyword,r.moduleKeyword],color:"#c586c0"},{tag:[r.name,r.deleted,r.character,r.macroName,r.propertyName,r.variableName,r.labelName,r.definition(r.name)],color:"#9cdcfe"},{tag:r.heading,fontWeight:"bold",color:"#9cdcfe"},{tag:[r.typeName,r.className,r.tagName,r.number,r.changed,r.annotation,r.self,r.namespace],color:"#4ec9b0"},{tag:[r.function(r.variableName),r.function(r.propertyName)],color:"#dcdcaa"},{tag:[r.number],color:"#b5cea8"},{tag:[r.operator,r.punctuation,r.separator,r.url,r.escape,r.regexp],color:"#d4d4d4"},{tag:[r.regexp],color:"#d16969"},{tag:[r.special(r.string),r.processingInstruction,r.string,r.inserted],color:"#ce9178"},{tag:[r.angleBracket],color:"#808080"},{tag:r.strong,fontWeight:"bold"},{tag:r.emphasis,fontStyle:"italic"},{tag:r.strikethrough,textDecoration:"line-through"},{tag:[r.meta,r.comment],color:"#6a9955"},{tag:r.link,color:"#6a9955",textDecoration:"underline"},{tag:r.invalid,color:"#ff0000"},...t]})}var K=V();const b={token:function(i,e,n=0){const t=i.peek();if(i.pos===n&&e.klipperMacro&&(e.klipperMacro=!1),i.pos>n&&e.klipperMacro){if(i.eatSpace(),i.match(/^{/))return"tag";if(i.match(/^"[^{]+"/)||i.match(/^'[^{]+'/))return"string";if(i.match(/^[-+]?[0-9]*\.?[0-9]+/))return"number";if(i.match(/^[A-Za-z\d_]+/))return"propertyName";if(n===0&&i.match(/^{[^%]+}/))return"variable"}if([";"].includes(t!=null?t:""))return i.skipToEnd(),"comment";const o=i.pos==n;return o&&i.match(/_?[GMgm][\d.]+/)?"namespace":i.string.substring(n).toLowerCase().startsWith("m117")?(i.skipToEnd(),"string"):i.pos>n&&i.match(/[EPXYZIJ]-?([\d]*\.[\d]+|[\d]+)?/i)?"className":i.pos>n&&i.match(/[Ff]-?([\d]*\.[\d]+|[\d]+)?/)?"string":i.pos>n&&i.match(/[TtSs]-?([\d]*\.[\d]+|[\d]+)?/)?"atom":n===0&&i.pos>n&&i.match(/^{[^%]+}/)?"propertyName":o&&i.match(/^\s*[A-Z_\d]+/)?(e.klipperMacro=!0,"name"):(i.next(),null)},startState:function(){return{klipperMacro:!1}},languageData:{commentTokens:{line:";"}}},G={token:function(i,e){var x,j;const n=["\\+","-","\\/\\/","\\/","%","\\*\\*","\\*","\\(","\\)","==","!=",">=",">","<=","<","=","\\|","~",","],t=new RegExp("^"+n.join("|")),o=["elif","else","endif","if","endfor","for","loop\\.index","loop\\.revindex","loop\\.first","loop\\.last","loop\\.length","loop\\.cycle","loop\\.depth","and","or","not","in","is","endmacro","macro","endcall","call","endfilter","filter","endset","set","extends","block","endblock","include","import","do"],c=["abs","attr","batch","capitalize","center","default","dictsort","escape","filesizeformat","first","float","forceescape","format","groupby","indent","int","join","last","length","list","lower","map","max","min","pprint","random","reject","rejectattr","replace","reverse","round","tojson","safe","select","selectattr","slice","sort","string","striptags","sum","title","trim","truncate","unique","upper","urlencode","urlize","wordcount","wordwrap","xmlattr"],l=["callable","defined","divisibleby","equalto","escaped","even","iterable","lower","mapping","none","number","odd","sameas","sequence","string","undefined","upper"],f=["range","lipsum","dict","cycler","joiner"],d=["\\.reset\\(\\)","\\.next\\(\\)"],m=new RegExp("^"+o.join("\\s+|")+"|"+d.join("|")+"\\s+"),C=new RegExp("^"+c.join("|")+"|"+l.join("|")+"|"+f.join("|")+"\\s+");function v(a){var S;const y=a.match(/^%}/),w=a.match(/^}/);function M(){return e.klipperMacroJinjaBraceStack.length===0&&e.klipperMacroJinjaPctStack.length===0}return y||w?(y?(e.klipperMacroJinjaPctStack.pop(),M()&&(e.klipperMacroJinja=!1)):(e.klipperMacroJinjaBraceStack.pop(),M()&&(e.klipperMacroJinja=!1)),a.eatSpace(),e.gcodeZeroPos=a.pos,"tag"):a.match(new RegExp("^((?<![\\\\])['\"])((?:.(?!(?<![\\\\])\\1))*.?)\\1"))?(e.klipperMacroJinjaHighlightNext=!0,"string"):a.eol()&&a.match(/^"/)?(e.klipperMacroJinjaHighlightNext=!1,"string"):e.klipperMacroJinjaHighlightNext&&a.match(m)?(e.klipperMacroJinjaHighlightNext=!1,"keyword"):e.klipperMacroJinjaHighlightNext&&a.match(C)&&["(","}",",","|"," "].includes((S=a.peek())!=null?S:"")?(e.klipperMacroJinjaHighlightNext=!1,"updateOperator"):a.match(t)?(e.klipperMacroJinjaHighlightNext=!0,"number"):a.match(/^true\s|false\s/i)?(e.klipperMacroJinjaHighlightNext=!1,"atom"):a.match(/^[-+]?[0-9]*\.?[0-9]+/)?(e.klipperMacroJinjaHighlightNext=!1,"number"):a.eatSpace()?(e.klipperMacroJinjaHighlightNext=!0,"propertyName"):(a.next(),e.klipperMacroJinjaHighlightNext=!1,"propertyName")}const s=i.peek();if(i.match(/^\s+[#;]/)||[";","#"].includes(s!=null?s:"")&&(i.pos===0||/\s/.test(i.string.charAt(i.pos-1))))return i.skipToEnd(),e.block=!1,e.pair=!1,"comment";if(s!=="["&&i.indentation()===0&&i.sol()&&i.match(/^[^:]+$/i))return i.skipToEnd(),null;if(i.indentation()===0){if(i.pos===0&&s==="[")return e.block=!0,i.next(),null;if(e.block){if(!s||s==="]"||i.eol())return i.next(),e.block=!1,null;if(i.match(/^\s[^\]]+/))return"className";if(i.match(/^[^ \]]+/))return"namespace"}if(e.gcode)return i.sol()||i.eol()?(e.gcode=!1,e.gcodeZeroPos=null,null):(e.gcodeZeroPos||(i.eatSpace(),e.gcodeZeroPos=i.pos),i.match(/^\s*{[%#]?/)?(e.klipperMacroJinja=!0,i.string.includes("{%")?e.klipperMacroJinjaPctStack.push("{%"):e.klipperMacroJinjaBraceStack.push("{"),"tag"):e.klipperMacroJinja?v(i):b.token(i,e,(x=e.gcodeZeroPos)!=null?x:0))}else{if(e.was=!0,e.gcode)return i.sol()&&(i.eatSpace(),e.gcodeZeroPos=i.pos),i.match(/^\s*{[%#]?/)?(e.klipperMacroJinja=!0,i.string.includes("{%")?e.klipperMacroJinjaPctStack.push("{%"):e.klipperMacroJinjaBraceStack.push("{"),"tag"):e.klipperMacroJinja?v(i):b.token(i,e,(j=e.gcodeZeroPos)!=null?j:i.pos);if(e.pair){if(i.eatSpace(),s!==","){if(i.match(/^-?\d*\.?(?:\d+)?($|,)/))return"number";if(i.match(/^[^#]+/))return"string"}return i.next(),null}}if(e.was&&i.indentation()===0&&(e.pair=!1,e.gcode=!1,e.was=!1),!e.pair&&!e.gcode&&i.sol())return i.match(/^(?:[A-Za-z]*_?gcode|enable):/)?e.gcode=!0:(i.match(/^.+?:\s*/),e.pair=!i.eol()),"atom";if(e.pair){if(s===":")return i.next(),i.eatSpace(),null;if(!s||i.eol())return e.pair=!1,null;if(i.match(/^(-?\d*\.?(?:\d+)?(,|$|\s))+/))return e.pair=!1,"number";if(i.match(/^[^#]+/))return e.pair=!1,"string"}return i.next(),null},startState:function(){return{block:!1,pair:!1,was:!1,gcode:!1,klipperMacro:!1,gcodeZeroPos:null,klipperMacroJinja:!1,klipperMacroJinjaHighlightNext:!1,klipperMacroJinjaBraceStack:[],klipperMacroJinjaPctStack:[]}},languageData:{commentTokens:{line:"#"}}};var U=Object.defineProperty,z=Object.getOwnPropertyDescriptor,p=(i,e,n,t)=>{for(var o=t>1?void 0:t?z(e,n):e,c=i.length-1,l;c>=0;c--)(l=i[c])&&(o=(t?l(e,n,o):l(o))||o);return t&&o&&U(e,n,o),o};let u=class extends _(H){constructor(){super(...arguments),this.content="",this.codemirror=null,this.cminstance=null}valueChanged(e){var t,o;const n=(o=(t=this.cminstance)==null?void 0:t.state)==null?void 0:o.doc.toString();e!==n&&this.setCmValue(e)}mounted(){this.initialize()}beforeDestroy(){this.destroy()}destroy(){var e;(e=this.cminstance)==null||e.destroy()}initialize(){this.codemirror=new g({parent:this.editor}),this.cminstance=this.codemirror,this.$nextTick(()=>{this.setCmValue(this.code||this.value||this.content),this.$emit("ready",this.codemirror)})}setCmValue(e){var n;(n=this.cminstance)==null||n.setState($.create({doc:e,extensions:this.cmExtensions}))}get cmExtensions(){const e=[g.theme({},{dark:!0}),D,K,T.of(" ".repeat(this.tabSize)),A.of([L]),g.updateListener.of(n=>{var t,o,c,l,f;if(n.selectionSet){const d=(l=(t=this.cminstance)==null?void 0:t.state)==null?void 0:l.doc.lineAt((c=(o=this.cminstance)==null?void 0:o.state)==null?void 0:c.selection.main.head).number;this.$emit("lineChange",d)}this.content=(f=n.state)==null?void 0:f.doc.toString(),this.$emit&&this.$emit("input",this.content)})];return["cfg","conf"].includes(this.fileExtension)?e.push(J.define(G)):["gcode"].includes(this.fileExtension)?e.push(J.define(b)):["json"].includes(this.fileExtension)?e.push(q()):["css","scss","sass"].includes(this.fileExtension)&&e.push(I()),e}visibilityChanged(e){var n;e&&((n=this.cminstance)==null||n.focus())}get tabSize(){return this.$store.state.gui.editor.tabSize||2}gotoLine(e){var t,o,c;const n=(o=(t=this.cminstance)==null?void 0:t.state)==null?void 0:o.doc.line(e);n&&((c=this.cminstance)==null||c.dispatch({selection:{head:n.from,anchor:n.to},scrollIntoView:!0}))}};p([B("editor")],u.prototype,"editor",2);p([h({required:!1,default:""})],u.prototype,"code",2);p([h({required:!1,default:""})],u.prototype,"value",2);p([h({required:!1,default:"codemirror"})],u.prototype,"name",2);p([h({required:!1,default:""})],u.prototype,"fileExtension",2);p([E("value")],u.prototype,"valueChanged",1);u=p([F],u);var X=function(){var i=this,e=i.$createElement,n=i._self._c||e;return n("div",{staticClass:"vue-codemirror"},[n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:i.visibilityChanged,expression:"visibilityChanged"}],ref:"editor"})])},Y=[];const N={};var Q=Z(u,X,Y,!1,ee,null,null,null);function ee(i){for(let e in N)this[e]=N[e]}const ae=function(){return Q.exports}();export{ae as default};