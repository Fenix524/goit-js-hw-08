!function(){function e(e,n,o){var t,a=o||{},r=a.noTrailing,l=void 0!==r&&r,c=a.noLeading,i=void 0!==c&&c,u=a.debounceMode,s=void 0===u?void 0:u,v=!1,m=0;function g(){t&&clearTimeout(t)}function d(){for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];var c=this,u=Date.now()-m;function d(){m=Date.now(),n.apply(c,a)}function f(){t=void 0}v||(i||!s||t||d(),g(),void 0===s&&u>e?i?(m=Date.now(),l||(t=setTimeout(s?f:d,e))):d():!0!==l&&(t=setTimeout(s?f:d,void 0===s?e-u:e)))}return d.cancel=function(e){var n=(e||{}).upcomingOnly,o=void 0!==n&&n;g(),v=!o},d}function n(e,n){try{var o=JSON.stringify(n);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}}var o=document.querySelector(".feedback-form");o.addEventListener("input",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=n.email,t=n.message;s({email:o.value,message:t.value})})),o.addEventListener("submit",(function(e){e.preventDefault(),console.log(e.currentTarget.elements);var n=e.currentTarget.elements,t=n.email,a=n.message;console.log("Відправлено наступні дані:"),console.log("".concat(t.name,": ").concat(t.value)),console.log("".concat(a.name,": ").concat(a.value)),o.reset(),localStorage.removeItem(l)}));var t,a,r,l="feedback-form-state",c=null!==(t=JSON.parse(localStorage.getItem(l)))&&void 0!==t?t:"",i=o.querySelector('[name="email"]'),u=o.querySelector('[name="message"]');i.value=null!==(a=c.email)&&void 0!==a?a:"",u.value=null!==(r=c.message)&&void 0!==r?r:"";var s=e(500,(function(e){n(l,e)}))}();
//# sourceMappingURL=03-feedback.dd5f9d21.js.map
