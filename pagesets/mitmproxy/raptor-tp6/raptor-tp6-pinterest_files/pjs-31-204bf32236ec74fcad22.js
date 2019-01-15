webpackJsonp([31],{"0+Oy":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var m=n("d6ZO"),p=n.n(m),v=n("W/Cr"),b=n("gEaE");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?d(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function c(e,t){return(c=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=5e3,h=15e3,w="surveyLoaded",S="surveyFinished",g,E=function(e){function o(){var e,l;i(this,o);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return y(d(d(l=u(this,(e=s(o)).call.apply(e,[this].concat(n))))),"state",{surveyAccepted:!1,surveyLoaded:!1,surveyLoadFailed:!1}),y(d(d(l)),"processIFrameMessage",function(e){var t=l.props,n=t.presentationDelay,r=void 0===n?f:n,o=t.onComplete,i=t.onView,a=t.surveyLink,u=e.origin||e.originalEvent.origin;a.startsWith(u)&&(e.data===S?o():e.data===w&&(window.clearTimeout(l.loadSurveyFailureTimeout),l.loadSurveyTimeout=window.setTimeout(function(){i(),l.setState({surveyLoaded:!0})},r)))}),y(d(d(l)),"handleShowSurvey",function(){l.setState({surveyAccepted:!0})}),l}return l(o,e),a(o,[{key:"componentDidMount",value:function e(){var t=this;window.addEventListener("message",this.processIFrameMessage),this.loadSurveyFailureTimeout=window.setTimeout(function(){t.state.surveyLoaded||(window.clearTimeout(t.loadSurveyTimeout),t.setState({surveyLoadFailed:!0}))},h)}},{key:"componentWillUnmount",value:function e(){window.removeEventListener("message",this.processIFrameMessage),window.clearTimeout(this.loadSurveyTimeout),window.clearTimeout(this.loadSurveyFailureTimeout)}},{key:"render",value:function e(){var t=this.state,n=t.surveyAccepted,r=t.surveyLoadFailed,o=t.surveyLoaded;if(r)return null;var i=this.props,a=i.acceptButtonText,u=i.bodyText,l=i.declineButtonText,s=i.onDismiss,c=i.subtitleText,d=i.surveyLink,y=i.titleText,f=p.a.createElement("iframe",{className:n?"PinnerSurvey":"SurveyHidden",src:d,title:v.a._("Pinterest Survey","Accessible label for survey frame")});return o?p.a.createElement("div",{style:{zIndex:1e3,position:"absolute"}},p.a.createElement(b.y,{accessibilityCloseLabel:v.a._("close","Accessible label for the modal close button"),accessibilityModalLabel:v.a._("Have a few minutes to take a survey?","User evaluation survey"),footer:!n&&p.a.createElement(b.b,{display:"flex",justifyContent:"end",deprecatedPadding:{x:1}},p.a.createElement("div",{className:"p1"},p.a.createElement(b.c,{text:l,onClick:s})),p.a.createElement("div",{className:"p1"},p.a.createElement(b.c,{color:"red",text:a,onClick:this.handleShowSurvey}))),heading:n?"":y,onDismiss:s,role:"alertdialog",size:n?"lg":"md"},p.a.createElement("div",null,f),!n&&p.a.createElement(b.b,{deprecatedPadding:3},p.a.createElement(b.K,{smSize:"xs",mdSize:"sm",lgSize:"md"},c),p.a.createElement(b.K,{smSize:"xs",mdSize:"sm",lgSize:"md"},u)))):f}}]),o}(m.Component),x=n("wUWH"),T=n("R6a3"),_=n("tmfO");function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return t&&k(e.prototype,t),n&&k(e,n),e}function C(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?A(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)})(e)}function D(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}function z(e,t){return(z=Object.setPrototypeOf||function e(t,n){return t.__proto__=n,t})(e,t)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(e){function i(){var e,t;L(this,i);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return F(A(A(t=C(this,(e=P(i)).call.apply(e,[this].concat(r))))),"state",{surveyLoaded:!1}),F(A(A(t)),"loadSurvey",function(){return t.setState({surveyLoaded:!0})}),F(A(A(t)),"handleDismiss",function(){t.props.dismiss(),t.setState({surveyLoaded:!1})}),F(A(A(t)),"handleComplete",function(){t.props.complete(),t.setState({surveyLoaded:!1})}),t}return D(i,e),j(i,[{key:"componentDidMount",value:function e(){var t=this.props.displayData.delay;this.surveyTimer=window.setTimeout(this.loadSurvey,t)}},{key:"componentWillUnmount",value:function e(){clearTimeout(this.surveyTimer)}},{key:"render",value:function e(){var n=this;if(!this.state.surveyLoaded)return null;var t=this.props,r=t.displayData,o=r.buttons,i=r.detailed_text,a=r.title_text,u;return(0,t.view)(),p.a.createElement(T.a,{accessibilityCloseLabel:v.a._("close","Accessible label for the modal close button"),heading:a,accessibilityModalLabel:v.a._("Would you mind taking a survey?","User eval survey"),onDismiss:this.handleDismiss,size:"sm",footer:p.a.createElement(b.b,{display:"flex",justifyContent:"end"},o.map(function(e,t){return e.uri?p.a.createElement(b.b,{key:e.text,marginStart:1},p.a.createElement(_.b,{external:!0,to:e.uri},p.a.createElement(b.c,{color:"red",text:e.text,onClick:n.handleComplete}))):p.a.createElement(b.b,{key:e.text,marginStart:1},p.a.createElement(b.c,{text:e.text,onClick:n.handleDismiss}))}))},p.a.createElement(b.b,{padding:3},p.a.createElement(b.K,{size:"lg",smSize:"sm",mdSize:"md",lgSize:"lg"},i)))}}]),i}(m.Component);function I(e,t){return B(e)||U(e,t)||W()}function W(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function U(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a=e[Symbol.iterator](),u;!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}function B(e){if(Array.isArray(e))return e}function H(e){var t=e.placementId;return m.createElement(x.a,{placementId:t,type:5,disableAutoView:!0},function(e){var t=e.complete,n=e.dismiss,r=e.display_data,o=e.view,i=r.anket,a=r.buttons,u=r.delay,l=r.detailed_text,s=r.subtitle_text,c=r.title_text,d=I(a,2),y=d[0],f=d[1];return i?m.createElement(E,{acceptButtonText:f.text,bodyText:l,declineButtonText:y.text,onComplete:t,onDismiss:n,onView:o,presentationDelay:u,subtitleText:s,surveyLink:f.uri,titleText:c}):m.createElement(M,{complete:t,dismiss:n,displayData:r,view:o})})}t.default=H}});