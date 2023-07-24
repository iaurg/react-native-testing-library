"use strict";(self.webpackChunkreact_native_testing_library_website=self.webpackChunkreact_native_testing_library_website||[]).push([[381],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],s={id:"user-event",title:"User Event"},p=void 0,o={unversionedId:"user-event",id:"user-event",title:"User Event",description:"Table of contents",source:"@site/docs/UserEvent.md",sourceDirName:".",slug:"/user-event",permalink:"/react-native-testing-library/docs/user-event",draft:!1,editUrl:"https://github.com/callstack/react-native-testing-library/blob/main/website/docs/UserEvent.md",tags:[],version:"current",frontMatter:{id:"user-event",title:"User Event"}},u={},m=[{value:"Table of contents",id:"table-of-contents",level:3},{value:"<code>userEvent.setup</code>",id:"usereventsetup",level:2},{value:"Options",id:"options",level:3},{value:"<code>press()</code>",id:"press",level:2},{value:"<code>longPress()</code>",id:"longpress",level:2},{value:"<code>type()</code>",id:"type",level:2},{value:"Options:",id:"options-1",level:3},{value:"Sequence of events",id:"sequence-of-events",level:3}],d={toc:m},c="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#usereventsetup"},(0,i.kt)("inlineCode",{parentName:"a"},"userEvent.setup")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#options"},"Options")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#press"},(0,i.kt)("inlineCode",{parentName:"a"},"press()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#longpress"},(0,i.kt)("inlineCode",{parentName:"a"},"longPress()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#type"},(0,i.kt)("inlineCode",{parentName:"a"},"type()")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#options-1"},"Options:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sequence-of-events"},"Sequence of events"))))),(0,i.kt)("h2",{id:"usereventsetup"},(0,i.kt)("inlineCode",{parentName:"h2"},"userEvent.setup")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"userEvent.setup(options?: {\n  delay: number;\n  advanceTimers: (delay: number) => Promise<void> | void;\n})\n")),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const user = userEvent.setup();\n")),(0,i.kt)("p",null,"Creates User Event instances which can be used to trigger events."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delay")," - controls the default delay between subsequent events, e.g. keystrokes, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"advanceTimers")," - time advancement utility function that should be used for fake timers. The default setup handles both real and Jest fake timers.")),(0,i.kt)("h2",{id:"press"},(0,i.kt)("inlineCode",{parentName:"h2"},"press()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"press(\n  element: ReactTestInstance,\n): Promise<void>\n")),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const user = userEvent.setup();\nawait user.press(element);\n")),(0,i.kt)("p",null,"This helper simulates a press on any pressable element, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"Pressable"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TouchableOpacity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"TextInput"),", etc. Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"fireEvent.press()")," which is a simpler API that will only call the ",(0,i.kt)("inlineCode",{parentName:"p"},"onPress")," prop, this simulates the entire press event in a more realistic way by reproducing what really happens when a user presses an interface view. This will trigger additional events like ",(0,i.kt)("inlineCode",{parentName:"p"},"pressIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pressOut"),". "),(0,i.kt)("h2",{id:"longpress"},(0,i.kt)("inlineCode",{parentName:"h2"},"longPress()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"longPress(\n  element: ReactTestInstance,\n  options: { duration: number } = { duration: 500 }\n): Promise<void>\n")),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const user = userEvent.setup();\nawait user.longPress(element);\n")),(0,i.kt)("p",null,"Simulates a long press user interaction. In React Native the ",(0,i.kt)("inlineCode",{parentName:"p"},"longPress")," event is emitted when the press duration exceeds long press threshold (by default 500 ms). In other aspects this actions behaves similar to regular ",(0,i.kt)("inlineCode",{parentName:"p"},"press")," action, e.g. by emitting ",(0,i.kt)("inlineCode",{parentName:"p"},"pressIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pressOut")," events. The press duration is customisable through the options. This should be useful if you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"delayLongPress")," prop. When using real timers this will take 500 ms so it is highly recommended to use that API with fake timers to prevent test taking a long time to run. "),(0,i.kt)("h2",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h2"},"type()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"type(\n  element: ReactTestInstance,\n  text: string,\n  options?: {\n    skipPress?: boolean\n    submitEditing?: boolean\n  }\n")),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'const user = userEvent.setup();\nawait user.type(textInput, "Hello world!");\n')),(0,i.kt)("p",null,"This helper simulates user focusing on ",(0,i.kt)("inlineCode",{parentName:"p"},"TextInput")," element, typing ",(0,i.kt)("inlineCode",{parentName:"p"},"text")," one character at a time, and leaving the element."),(0,i.kt)("p",null,"This function supports only host ",(0,i.kt)("inlineCode",{parentName:"p"},"TextInput")," elements. Passing other element type will result in throwing error."),(0,i.kt)("h3",{id:"options-1"},"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"skipPress")," - if true, ",(0,i.kt)("inlineCode",{parentName:"li"},"pressIn")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"pressOut")," events will not be triggered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"submitEditing")," - if true, ",(0,i.kt)("inlineCode",{parentName:"li"},"submitEditing")," event will be triggered after typing the text.")),(0,i.kt)("h3",{id:"sequence-of-events"},"Sequence of events"),(0,i.kt)("p",null,"The sequence of events depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"multiline")," prop, as well as passed options."),(0,i.kt)("p",null,"Events will not be emitted if ",(0,i.kt)("inlineCode",{parentName:"p"},"editable")," prop is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("p",null,"Entering the element:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pressIn")," (optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"focus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pressOut")," (optional)")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"pressIn")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pressOut")," events are sent by default, but can be skipped by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"skipPress: true")," option."),(0,i.kt)("p",null,"Typing (for each character):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"keyPress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"textInput")," (optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"change")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"changeText")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"selectionChange"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"textInput")," event is sent only for mutliline text inputs."),(0,i.kt)("p",null,"Leaving the element:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"submitEditing")," (optional)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"endEditing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"blur"))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"submitEditing")," event is skipped by default. It can sent by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"submitEditing: true")," option."))}k.isMDXComponent=!0}}]);