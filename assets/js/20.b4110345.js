(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{368:function(t,a,e){"use strict";e.r(a);var s=e(42),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"get-heart-rate-intraday-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-heart-rate-intraday-data"}},[t._v("#")]),t._v(" Get Heart Rate Intraday Data")]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("To fetch Intraday data, your app must be registered as Personal or must obtain a specifc grant by Fitbit, otherwise you will get an error. For additional information see "),e("a",{attrs:{href:"https://dev.fitbit.com/build/reference/web-api/intraday/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.fitbit.com/build/reference/web-api/intraday/"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("As specified by Fitbit's Web API Heart Rate Intraday data cannot be retrieved for more than a 24 hour period. Any requests that expand over a 24 hour period will result in an error.")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This guide assumes that your app has already been authorized and the snippet of code that I will show you can access to a valid "),e("code",[t._v("FitbitCredentials")]),t._v(" instance, here called "),e("code",[t._v("fitbitCredentials")]),t._v(", the Fitbit OAuth 2.0 client ID, here called "),e("code",[t._v("clientID")]),t._v(", and the Fitbit client secret, here called "),e("code",[t._v("clientSecret")]),t._v(".")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://dev.fitbit.com/build/reference/web-api/intraday/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heart Rate Intraday data"),e("OutboundLink")],1),t._v(" contain details about a user's Heart Rate Intraday data. In Fitbitter, a datapoint is expressed by the "),e("code",[t._v("FitbitHeartRateIntradayData")]),t._v(" model.\nFitbitter fetches a simplified version of "),e("a",{attrs:{href:"https://dev.fitbit.com/build/reference/web-api/intraday/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heart Rate Intraday data"),e("OutboundLink")],1),t._v(" as described by Fitbit. In particular, an instance of "),e("code",[t._v("FitbitHeartRateIntradayData")]),t._v(" has the following fields:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The user encoded id.")]),t._v("\n  String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The date of monitoring of the data.")]),t._v("\n  DateTime"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" dateOfMonitoring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The value of the data.")]),t._v("\n  double"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("An example is:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitHeartRateIntradayData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ML2XV"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateOfMonitoring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("02")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitHeartRateIntradayData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ML2XV"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateOfMonitoring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("02")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitHeartRateIntradayData")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("ML2XV"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dateOfMonitoring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2022")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("05")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("02")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("30.000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" value"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("51")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Information about the user's Heart Rate Intraday data can be obtained in three steps:")]),t._v(" "),e("h3",{attrs:{id:"step-1-instanciate-a-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-instanciate-a-manager"}},[t._v("#")]),t._v(" Step 1: Instanciate a manager")]),t._v(" "),e("p",[t._v("First, you need to instanciate a "),e("code",[t._v("FitbitHeartRateIntradayDataManager")])]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    FitbitHeartRateIntradayDataManager fitbitHeartRateIntradayDataManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitHeartRateIntradayDataManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        clientID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clientSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"step-2-create-the-request-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-request-url"}},[t._v("#")]),t._v(" Step 2: Create the request url")]),t._v(" "),e("p",[t._v("Then, you have to create a url object, "),e("code",[t._v("FitbitHeartRateIntradayAPIURL")]),t._v(" to fetch the Heart Rate Intraday data as:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    FitbitHeartRateIntradayAPIURL fitbitHeartRateIntradayAPIURL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FitbitHeartRateIntradayAPIURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dayAndDetailLevel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                                    date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DateTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                    fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                    intradayDetailLevel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" intradayDetailLevel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("where "),e("code",[t._v("date")]),t._v(" is the day you want to fetch "),e("code",[t._v("FitbitHeartRateIntradayData")]),t._v(" from, "),e("code",[t._v("fitbitCredentials")]),t._v(" is the "),e("code",[t._v("FitbitCredentials")]),t._v(" instance obtained during the authentication step, and "),e("code",[t._v("intradayDetailLevel")]),t._v(" is an instance of "),e("code",[t._v("IntradayDetailLevel")]),t._v(" enumerator that defines the desired data granularity (Supported: "),e("code",[t._v("IntradayDetailLevel.ONE_SECOND")]),t._v(", "),e("code",[t._v("IntradayDetailLevel.ONE_MINUTE")]),t._v(", "),e("code",[t._v("IntradayDetailLevel.FIVE_MINUTES")]),t._v(", and "),e("code",[t._v("IntradayDetailLevel.FIFTEEN_MINUTES")]),t._v(") .")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("For the complete list of possible "),e("code",[t._v("FitbitHeartRateIntradayAPIURL")]),t._v(", defined for different time ranges, please refer to the "),e("a",{attrs:{href:"https://pub.dev/documentation/fitbitter/latest/fitbitter/FitbitHeartRateIntradayAPIURL-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Doc"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"step-3-get-the-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-get-the-data"}},[t._v("#")]),t._v(" Step 3: Get the data")]),t._v(" "),e("p",[t._v("Finally you can obtain the Heart Rate Intraday data using")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    List"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FitbitHeartRateIntradayData"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fitbitHeartRateIntradayData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fitbitHeartRateIntradayDataManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fitbitHeartRateIntradayAPIURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);