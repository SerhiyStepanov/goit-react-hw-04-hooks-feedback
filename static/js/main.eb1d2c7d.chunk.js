(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),r=c(5),i=c.n(r),o=(c(11),c(3)),l=c(2),j=c.n(l);function b(e){var t=e.title,c=e.children;return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("h2",{className:j.a.title,children:t}),c]})}function d(e){var t=e.options,c=e.onLeaveFeedback;return Object(n.jsx)("ul",{className:j.a.btnContainer,children:t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("button",{id:e,type:"button",name:e,className:j.a.btn,onClick:function(){return c(e)},children:e})},t.toString())}))})}function u(e){var t=e.good,c=e.neutral,s=e.bad,r=e.total,i=void 0===r?0:r,o=e.positivePercentage,l=void 0===o?0:o;return Object(n.jsx)(a.Fragment,{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsxs)("p",{className:j.a.text,children:["Good : ",Object(n.jsx)("span",{style:{color:"green"},children:t})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{className:j.a.text,children:["Neutral : ",c]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{className:j.a.text,children:["Bad : ",Object(n.jsx)("span",{style:{color:"red"},children:s})]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{className:j.a.text,children:["Total : ",i," "]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("p",{className:j.a.text,children:["Positive feedback :"," ",Object(n.jsx)("span",{style:{color:"green"},children:l})," %"]})})]})})}function x(e){var t=e.message;return Object(n.jsx)(a.Fragment,{children:Object(n.jsx)("p",{className:j.a.message,children:t})})}function h(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)(0),i=Object(o.a)(r,2),l=i[0],j=i[1],h=Object(a.useState)(0),O=Object(o.a)(h,2),p=O[0],m=O[1],f=function(){return c+l+p};return Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{title:"Please leave feedback",children:Object(n.jsx)(d,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e){case"good":s((function(e){return e+1}));break;case"neutral":j((function(e){return e+1}));break;case"bad":m((function(e){return e+1}))}}})}),Object(n.jsx)(b,{title:"Statistics",children:0===f()?Object(n.jsx)(x,{message:"No feedback given"}):Object(n.jsx)(u,{good:c,neutral:l,bad:p,total:f(),positivePercentage:function(){var e=c+l+p;return Math.round(Number.parseFloat(100/e)*c)}()})})]})}i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))},2:function(e,t,c){e.exports={title:"Feedback_title__2uje6",btnContainer:"Feedback_btnContainer__14XzV",btn:"Feedback_btn__3bYqI",text:"Feedback_text__1yhOT",message:"Feedback_message__psixo"}}},[[12,1,2]]]);
//# sourceMappingURL=main.eb1d2c7d.chunk.js.map