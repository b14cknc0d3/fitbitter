(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{365:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"authorization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authorization"}},[t._v("#")]),t._v(" Authorization")]),t._v(" "),e("h3",{attrs:{id:"authorize-your-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authorize-your-application"}},[t._v("#")]),t._v(" Authorize your application")]),t._v(" "),e("p",[t._v("To do that, simply call the asynchronous method "),e("code",[t._v("FitbitConnector.authorize()")]),t._v(", within your code, as:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    FitbitCredentials"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" fitbitCredentials "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" FitbitConnector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("authorize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            clientID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Strings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitbitClientID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            clientSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Strings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitbitClientSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            redirectUri"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Strings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitbitRedirectUri"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            callbackUrlScheme"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Strings"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fitbitCallbackScheme\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("This will open a web view where user will be able to input his Fitbit credentials and login.\nAfter the login, the web view will close and the method will return a "),e("code",[t._v("FitbitCredentials?")]),t._v(" instance that contains the credentials to be used to make requests to the Fitbit Web API via "),e("code",[t._v("fitbitter")]),t._v(". In particular, "),e("code",[t._v("fitbitCredentials.userID")]),t._v(" contains the Fitbit user id of the user that just authorized "),e("code",[t._v("fitbitter")]),t._v(", "),e("code",[t._v("fitbitCredentials.fitbitAccessToken")]),t._v(" contains the Fitbit access token, and "),e("code",[t._v("fitbitCredentials.fitbitRefreshToken")]),t._v(" contains the Fitbit refresh token.")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("Since version 2.0.0, "),e("code",[t._v("fitbitter")]),t._v(" no longer stores the credentials automatically. As such, you, as a developer, must manage such crendentials according to your strategy.")])]),t._v(" "),e("h3",{attrs:{id:"unauthorize-your-application"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unauthorize-your-application"}},[t._v("#")]),t._v(" Unauthorize your application")]),t._v(" "),e("p",[t._v("To do that, simply call the asynchronous method "),e("code",[t._v("FitbitConnector.unauthorize()")]),t._v(", within your code, as:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" FitbitConnector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unauthorize")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            clientID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            clientSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("this will unauthorize the provided "),e("code",[t._v("FitbitCredentials")]),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"check-token-validity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-token-validity"}},[t._v("#")]),t._v(" Check token validity")]),t._v(" "),e("p",[t._v("To check if your "),e("code",[t._v("FitbitCredentials")]),t._v(" are still valid, simply call the asynchronous method "),e("code",[t._v("FitbitConnector.isTokenValid()")]),t._v(", within your code, as:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    bool valid "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" FitbitConnector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isTokenValid")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"refresh-retained-credentials"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#refresh-retained-credentials"}},[t._v("#")]),t._v(" Refresh retained credentials")]),t._v(" "),e("p",[t._v("To do that, simply call the asynchronous method "),e("code",[t._v("FitbitConnector.refreshToken()")]),t._v(", within your code, as:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    FitbitCredentials newFitbitCredentials "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" FitbitConnector"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("refreshToken")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            clientID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            clientSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("this will return a new instance of "),e("code",[t._v("FitbitCredentials")]),t._v(" containing the refreshed tokens.")])])}),[],!1,null,null,null);a.default=n.exports}}]);