(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{374:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"get-temperature-skin-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-temperature-skin-data"}},[t._v("#")]),t._v(" Get Temperature (Skin) Data")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This guide assumes that your app has already been authorized and the snippet of code that I will show you can access to a valid "),e("code",[t._v("FitbitCredentials")]),t._v(" instance, here called "),e("code",[t._v("fitbitCredentials")]),t._v(", the Fitbit OAuth 2.0 client ID, here called "),e("code",[t._v("clientID")]),t._v(", and the Fitbit client secret, here called "),e("code",[t._v("clientSecret")]),t._v(".")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://dev.fitbit.com/build/reference/web-api/temperature/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Temperature (Skin) data"),e("OutboundLink")],1),t._v(" contain details about a user's Temperature (Skin) data. In Fitbitter, a datapoint is expressed by the "),e("code",[t._v("FitbitTemperatureSkinData")]),t._v(" model.\nIn particular, an instance of "),e("code",[t._v("FitbitTemperatureSkinData")]),t._v(" has the following fields:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The user encoded id.")]),t._v("\n  String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The date of monitoring of the data.")]),t._v("\n  DateTime"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" dateOfMonitoring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The value of the data.")]),t._v("\n  double"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The type of skin temeperature log created.")]),t._v("\n  String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" logType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("An example is:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitTemperatureSkinData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ML2XV"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateOfMonitoring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dedicated_temp_sensor'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Information about the user's Temperature (Skin) data can be obtained in three steps:")]),t._v(" "),e("h3",{attrs:{id:"step-1-instanciate-a-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-instanciate-a-manager"}},[t._v("#")]),t._v(" Step 1: Instanciate a manager")]),t._v(" "),e("p",[t._v("First, you need to instanciate a "),e("code",[t._v("FitbitTemperatureSkinDataManager")])]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    FitbitTemperatureSkinDataManager fitbitTemperatureSkinDataManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitTemperatureSkinDataManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        clientID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clientSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"step-2-create-the-request-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-request-url"}},[t._v("#")]),t._v(" Step 2: Create the request url")]),t._v(" "),e("p",[t._v("Then, you have to create a url object, "),e("code",[t._v("FitbitTemperatureSkinAPIURL")]),t._v(" to fetch the Temperature (Skin) data as:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    FitbitTemperatureSkinAPIURL fitbitTemperatureSkinAPIURL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FitbitTemperatureSkinAPIURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("day")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                                    date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DateTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                    fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("where "),e("code",[t._v("date")]),t._v(" is the day you want to fetch "),e("code",[t._v("FitbitTemperatureSkinData")]),t._v(" from and "),e("code",[t._v("fitbitCredentials")]),t._v(" is the "),e("code",[t._v("FitbitCredentials")]),t._v(" instance obtained during the authentication step.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("For the complete list of possible "),e("code",[t._v("FitbitTemperatureSkinAPIURL")]),t._v(", defined for different time ranges, please refer to the "),e("a",{attrs:{href:"https://pub.dev/documentation/fitbitter/latest/fitbitter/FitbitTemperatureSkinAPIURL-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Doc"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"step-3-get-the-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-get-the-data"}},[t._v("#")]),t._v(" Step 3: Get the data")]),t._v(" "),e("p",[t._v("Finally you can obtain the Temperature (Skin) data using")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    List"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FitbitTemperatureSkinData"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fitbitTemperatureSkinData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fitbitTemperatureSkinDataManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fitbitTemperatureSkinAPIURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);