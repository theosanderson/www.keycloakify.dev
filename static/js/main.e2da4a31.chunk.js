(this.webpackJsonpkeycloakify_landingpage=this.webpackJsonpkeycloakify_landingpage||[]).push([[0],{644:function(A,e,t){"use strict";t.r(e);var o=t(53),a=t(0),i=t(327),s=t(34),n=t(325),c=t(149),r=Object(c.createI18nApi)()({languages:["en","fr","zh-CN"],fallbackLanguage:"en"},{en:{App:{documentation:"Documentation","paid for by French taxpayers":"Keycloakify is free and open source software payed for by the french tax payers.",pricing:"Pricing","it is libre software":"It is libre software",ok:"Ok"}},fr:{App:{documentation:"Documentation","paid for by French taxpayers":"Keycloakify est un logiciel libre et gratuit firancer par le contribuable francais.",pricing:"Prix","it is libre software":"C'est un logiciel libre",ok:"D'accord"}},"zh-CN":{App:{documentation:"\u6587\u6863","paid for by French taxpayers":"\u7531\u6cd5\u56fd\u7a0e\u6536\u5b98\u5458\u652f\u4ed8",pricing:"\u4ef7\u683c","it is libre software":"\u8fd9\u662f\u4e00\u4e2a\u5f00\u6e90\u8f6f\u4ef6",ok:"\u597d"}}}).useTranslation,g=t(77),l=t(310),h=t(145),d=t(144),C=t(61),p=Object(s.createThemeProvider)({getTypographyDesc:function(A){return Object(o.a)(Object(o.a)({},Object(s.defaultGetTypographyDesc)(A)),{},{fontFamily:'"Work Sans", sans-serif'})},palette:s.francePalette}),f=p.ThemeProvider,B=p.useTheme,u=Object(g.createMakeStyles)({useTheme:B}).makeStyles,Q=Object(h.createText)({useTheme:B}).Text,y=Object(C.createIcon)({}).Icon,b=(Object(d.createButton)({Icon:y}).Button,Object(l.createLanguageSelect)({languagesPrettyPrint:{en:"English",fr:"Fran\xe7ais","zh-CN":"\u7b80\u4f53\u4e2d\u6587"}}).LanguageSelect,t(328)),w=t(152),m=t.p+"static/media/keycloakify-logo.1eb8361a.png",I=t(9),E=t(315),k=t.p+"static/media/keycloakify-logo-hero-moving.24694c9b.png",K=t(1),v=Object(a.memo)((function(A){var e=A.id,t=A.className,o=A.onLoad,i=Object(a.useState)(!1),s=Object(I.a)(i,2),n=s[0],c=s[1],r=Object(E.useConstCallback)((function(){c(!0),null===o||void 0===o||o()})),g=j({isImageLoaded:n}),l=g.classes,h=g.cx;return Object(K.jsxs)("div",{id:e,className:h(l.root,t),children:[Object(K.jsx)("img",{className:l.rotatingImg,onLoad:r,src:k,alt:"Rotating react logo"}),Object(K.jsx)("img",{className:l.stillImg,src:"data:image/png;base64,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tre/kuSRj3z4w2/801/8xePve++Zpe6Hl48t5/jxuzJeWtqa64Px79raWt56661cvXZtUpuvvPrK9V/5lV9960//9H/enY11wT+QjdC9ns3onbUsYq+YBgNH1sLOLwE4XAY7uu1X/HbXs470sJDk15I8srKycvWpX3jqjve+98xSs7GxOXn33bn77lNZWlra2MhmcBiHZvp6cWkpp06dyt13352MRmmSnD59ZvGpp566Y2Vl5WqSR5L8aqYjfHjpb/de2PLnPmcHRIBDxwQYOFL2aUe3qY9sr/ux2V/2sJjkQpLfX1xczNNPf/6tbtnDwsJCTp48meXl5WyOePub3P4azWj6kyaaXLt2LZcvv5n19Y3h6je+8Y23fuZnfvau9rv740m+mo0p8KzlEHu5FKLPDnLAkWICDBwJo9Fo4QDit9OFbzJ7+vv5JPn0T/7kN99/7txd7cEccvLEiYzH4yRNO/ltkqZJ045+m27k258HN02a9pImWR4v5+SJExsf3jR5//vP3fWZz3y6O0ba05k9BU5v+/ZD/+9j1PLvC3Bo+YICDr3eet/MuN63zcjs+P2RJN/70EMPXfnpz/302W6jTpw8mfHy8saGNsmot+yhb+rUbs30893t8fJyTpw8OVkm8bnPfe6ehx566EqS720/f95SiP205e9HBAOHlS8n4CgYduF+xe9wLe0wfheS/FySPP7445e6zVsej3Ps2PLUG00Gvf37/eenpsGbr2ra62PLy72lFMnjjz/Wfl5+frA9s9YA71cMD/9uLIUADiUBDBxq7RRxuHh2Pw0nq/37707yw0ny6Z/8B2e7Ee7x48d7Sxx6Sxp6Sxz612l6w9Pez3VB3D19/M4725c3+cynP322/aEfardj1vbt5zKIvskiZ1Ng4DDyxQQcdvs58Z1lu7W/P5BkdOHCE6/fceedkyM4LI3HM9dpzLrdzLhMvabZvL00HmdpaePIasfuuCMXLjzxers9P5Dt1wIflIP+uwOYSQADR8VBrPnt3551eTxJzp8//1Y3ye0vU5jVf026ie/2v04zefX0uonJ+zft5254fJttnPX77AfhCxxaSzu/BOBADU8bsZ+GQ4LhFPh7kuTs2bOL3QuWFhe3rOVt0myeLWLUf7rZrNLBb9lMPbT5usXe+9979my3fd/Tbs96toZves8dhIP8+wOYSQADbG/e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FAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJQigAEAKEUAAwBQigAGAKAUAQwAQCkCGACAUgQwAAClCGAAAEoRwAAAlCKAAQAoRQADAFCKAAYAoBQBDABAKQIYAIBSBDAAAKUIYAAAShHAAACUIoABAChFAAMAUIoABgCgFAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJQigAEAKEUAAwBQigAGAKAUAQwAQCkCGACAUgQwAAClCGAAAEoRwAAAlCKAAQAoRQADAFCKAAYAoBQBDABAKQIYAIBSBDAAAKUIYAAAShHAAACUIoABAChFAAMAUIoABgCgFAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJQigAEAKEUAAwBQigAGAKAUAQwAQCkCGACAUgQwAAClCGAAAEoRwAAAlCKAAQAoRQADAFCKAAYAoBQBDABAKQIYAIBSBDAAAKUIYAAAShHAAACUIoABAChFAAMAUIoABgCgFAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJQigAEAKEUAAwBQigAGAKAUAQwAQCkCGACAUgQwAAClCGAAAEoRwAAAlCKAAQAoRQADAFCKAAYAoBQBDABAKQIYAIBSBDAAAKUIYAAAShHAAACUIoABAChFAAMAUIoABgCgFAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJQigAEAKEUAAwBQigAGAKAUAQwAQCkCGACAUgQwAAClCGAAAEoRwAAAlCKAAQAoRQADAFCKAAYAoBQBDABAKQIYAIBSBDAAAKUIYAAAShHAAACUIoABAChFAAMAUIoABgCgFAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJQigAEAKEUAAwBQigAGAKAUAQwAQCkCGACAUgQwAAClCGAAAEoRwAAAlCKAAQAoRQADAFCKAAYAoBQBDABAKQIYAIBSBDAAAKUIYAAAShHAAACUIoABAChFAAMAUIoABgCgFAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJQigAEAKEUAAwBQigAGAKAUAQwAQCkCGACAUgQwAAClCGAAAEoRwAAAlCKAAQAoRQADAFCKAAYAoBQBDABAKQIYAIBSBDAAAKUIYAAAShHAAACUIoABAChFAAMAUIoABgCgFAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJQigAEAKEUAAwBQigAGAKAUAQwAQCkCGACAUgQwAAClCGAAAEoRwAAAlCKAAQAoRQADAFCKAAYAoBQBDABAKQIYAIBSBDAAAKUIYAAAShHAAACUIoABAChFAAMAUIoABgCgFAEMAEApAhgAgFIEMAAApQhgAABKEcAAAJTy/wGnAVT66o8KVgAAAABJRU5ErkJggg==",alt:"keyhole"})]})})),j=u({name:{KeycloakifyRotatingLogo:v}})((function(A,e){var t=e.isImageLoaded;return{root:{position:"relative"},rotatingImg:{animation:"".concat(Object(g.keyframes)({from:{transform:"rotate(0deg)"},to:{transform:"rotate(360deg)"}})," infinite 20s linear"),width:t?"100%":void 0,height:t?"auto":void 0},stillImg:{position:"absolute",top:"0",left:"0",width:t?"100%":void 0,height:t?"auto":void 0}}})),D=t(160),U=t.p+"static/media/Keycloakify_demo_full-vp9-chrome.e098d057.webm",Y=t.p+"static/media/Keycloakify_demo.5b07ad68.mp4",M=t.p+"static/media/theme_select-vp9-chrome.1244c825.webm",x=t.p+"static/media/theme_select.f6dab481.mp4",F=t.p+"static/media/keycloakify_frontend_validation.dcf6327c.mp4",G=t.p+"static/media/keycloakify_frontend_validation-vp9-chrome.af3a6e8e.webm",z=t(318),O=t(319),S=t(326),L=t(329),H=t(330),P=t.p+"static/media/cloud-iam.a91773ee.svg",T="https://github.com/InseeFrLab/keycloakify",J="https://docs.keycloakify.dev";function N(){var A=Object(s.useSplashScreen)().hideRootSplashScreen;Object(a.useEffect)((function(){A()}),[]);var e=X().classes,t=r({App:N}).t;return Object(K.jsx)(i.a,{header:Object(K.jsx)(n.a,{title:Object(K.jsxs)("div",{className:e.headerTitleWrapper,onClick:function(){return window.scrollTo(0,0)},children:[Object(K.jsx)("img",{src:m,className:e.logo,alt:"logo"}),Object(K.jsxs)("div",{className:e.headerMainTextContainer,children:[Object(K.jsx)(Q,{typo:"section heading",className:e.headerOnyxiaText,children:"Keycloakify"}),Object(K.jsx)(Q,{typo:"section heading",className:e.headerDatalabText,children:"Themes"})]})]}),links:[{label:"GitHub",href:T},{label:t("documentation"),href:J}],enableDarkModeSwitch:!0,githubRepoUrl:T,githubButtonSize:"large",showGithubStarCount:!0}),headerOptions:{position:"sticky",isRetracted:"smart"},body:Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(b.a,{title:Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(w.a,{children:"Keycloak theming"}),Object(K.jsx)(Q,{typo:"display heading",className:e.title2,children:"Made easy. With React."})]}),subTitle:"\n          Customize the look and feel of your login and registration pages without having to mess with FreeMarker.\n          ",illustration:{type:"custom component",Component:v},hasLinkToSectionBellow:!0,classes:{subtitle:e.subtitle}}),Object(K.jsx)(D.a,{id:"firstSection",title:"A real solution to a real problem",body:"Keycloak provides [theme support](https://www.keycloak.org/docs/latest/server_development/#_themes) for web pages. This allows customizing the look and feel of end-user facing pages so they can be integrated with your applications.\nIt involves, however, a lot of raw JS/CSS/[FTL](https://freemarker.apache.org/) hacking, and bundling the theme is not exactly straightforward.\n\nBeyond that, if you use Keycloak for a specific app you want your login page to be tightly integrated with it.\nIdeally, you don't want the user to notice when he is being redirected away.\n\nTrying to reproduce the look and feel of a specific app in another stack is not an easy task not to mention\nthe cheer amount of maintenance that it involves.  \n\nWouldn't it be great if we could just design the login and register pages as if they were part of our app?  \n\n                ",buttonLabel:"Get started",buttonLink:{href:J},illustration:{type:"video",sources:[{src:Y,type:'video/mp4; codecs="hvc1"'},{src:U,type:"video/webm"}],hasShadow:!0},hasAnimation:!0,illustrationPosition:"right"}),Object(K.jsx)(D.a,{title:"Batteries included",body:"Keycloakify bundles your theme into a single `.jar` that you'll be able to import\n          into your keycloak server.",buttonLabel:"Get started",buttonLink:{href:J},illustration:{type:"video",sources:[{src:x,type:'video/mp4; codecs="hvc1"'},{src:M,type:"video/webm"}],hasShadow:!0},hasAnimation:!0,illustrationPosition:"left"}),Object(K.jsx)(D.a,{title:"It's not just cosmetics",body:"Keycloakify enables you to greatly improve the UX of your login and registration pages\n          by enabling realtime input validation.\n          Define **from the Keycloak admin consol** your validator and provide instantaneous feedback to your users.  \n          Best yet, it work **out of the box** with any theme generated with Keycloakify.",buttonLabel:"Get started",buttonLink:{href:"https://docs.keycloakify.dev"},illustration:{type:"video",sources:[{src:F,type:'video/mp4; codecs="hvc1"'},{src:G,type:"video/webm"}],hasShadow:!0},hasAnimation:!0,illustrationPosition:"right"}),Object(K.jsx)(z.a,{}),Object(K.jsx)(O.a,{heading:"Everything you expect and more",hasAnimation:!0,elements:[{title:"Account theme support",description:"Customize the pages where the user can update he's profile, change he's password, ect..."},{title:"[Email customization support](https://docs.keycloakify.dev/email-customization)",description:"Customize the email sent to validates users addresses and other emails of sorts."},{title:"[Easily testable](https://docs.keycloakify.dev/developpement)",description:"Test your login page with a mock context without having to deploy to a real Keycloak instance.\n            When you are ready spin up a Keycloak container with a simple command and check that everything is working."},{title:"[Context persistence](https://docs.keycloakify.dev/context-persistence)",description:"You can easily carry the theme (dark/light) and the language from your main app over to the login pages."},{title:"Recommended on the support forum",description:"This tool [has been recommended](https://keycloak.discourse.group/t/keycloak-nodejs-admin-api-for-custom-login/12220/2?u=garronej) to users by a member of the Keycloak team."},{title:"Shallow or advanced customization, it's up to you",description:"You can opt to just inject some CSS of branding into the pages but you can also opt for modifying the pages \n            at the component level."},{title:"[Terms and conditions](https://docs.keycloakify.dev/terms-and-conditions)",description:"Need your users to accept your terms and conditions when registering?\n            Just provide a Markdown file, optionally in different languages. That's it."},{title:"[Starter setups](https://github.com/codegouvfr/keycloakify-starter)",description:"If you are not big on reading documentation there are working demo repo you can start hacking from.\n            "},{title:"Strong and active community of contributor",description:"This tool [will stay up to date with Keycloak](https://docs.keycloakify.dev/#supported-keycloak-version) for the forseeable future and you \n              are welcome to [open issues](https://github.com/InseeFrLab/keycloakify/issues/new) if you are experiencing any issues.\n            "}]}),Object(K.jsx)(L.a,{title:"Our exclusive sponsor",classes:{cardsWrapper:e.sponsorCardsWrapper},children:Object(K.jsx)(H.a,{className:e.sponsorCard,title:"Cloud IAM",paragraph:Object(K.jsxs)(K.Fragment,{children:["Perfectly configured, optimized and customized Keycloak IAM, ready in seconds. ",Object(K.jsx)("br",{}),"Keycloak without the pain.",Object(K.jsx)("br",{}),Object(K.jsx)("br",{}),Object(K.jsxs)("i",{children:["Use the promo code ",Object(K.jsx)("code",{children:"keycloakify"})," to get 5% off your annual subscription and support us."]})]}),iconUrls:[P],buttonLabel:"Check them out",link:{href:"https://www.cloud-iam.com/"}})})]}),footer:Object(K.jsx)(S.a,{bottomDivContent:"[Page created with GitLanding](https://www.gitlanding.dev)",links:[{href:"https://www.npmjs.com/package/keycloakify",label:Object(K.jsx)("img",{src:"https://img.shields.io/npm/dm/keycloakify",alt:""})},{href:"https://github.com/garronej/keycloakify/blob/main/LICENSE",label:Object(K.jsx)("img",{src:"https://img.shields.io/npm/l/keycloakify",alt:""})},{href:"https://github.com/thomasdarimont/awesome-keycloak",label:Object(K.jsx)("img",{src:"https://awesome.re/mentioned-badge.svg",alt:""})},{href:"https://github.com/InseeFrLab/keycloakify/blob/729503fe31a155a823f46dd66ad4ff34ca274e0a/tsconfig.json#L14",label:Object(K.jsx)("img",{src:"https://camo.githubusercontent.com/0f9fcc0ac1b8617ad4989364f60f78b2d6b32985ad6a508f215f14d8f897b8d3/68747470733a2f2f62616467656e2e6e65742f62616467652f547970655363726970742f7374726963742532302546302539462539322541412f626c7565",alt:""})}]})})}Object(c.declareComponentKeys)()({App:N}).i18n;var X=u({name:{App:N}})((function(A){return{headerTitleWrapper:{display:"flex",cursor:"pointer",alignItems:"center"},logo:{fill:A.colors.useCases.typography.textFocus,width:33,height:"100%"},headerMainTextContainer:{cursor:"pointer","& > *":{display:"inline"}},headerOnyxiaText:Object(o.a)({},A.spacing.rightLeft("margin",2)),headerDatalabText:{fontWeight:600,color:A.colors.useCases.typography.textFocus},title2:{color:A.colors.useCases.typography.textFocus,fontStyle:"italic"},subtitle:{color:A.colors.useCases.typography.textPrimary},sponsorCardsWrapper:{display:"flex",justifyContent:"center"},sponsorCard:Object(o.a)({},A.spacing.rightLeft("padding",5))}})),R=t(324);Object(R.createRoot)(document.getElementById("root")).render(Object(K.jsx)(a.StrictMode,{children:Object(K.jsx)(f,{children:Object(K.jsx)(N,{})})}))}},[[644,1,2]]]);
//# sourceMappingURL=main.e2da4a31.chunk.js.map