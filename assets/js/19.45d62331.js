(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{371:function(t,a,e){"use strict";e.r(a);var n=e(42),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"get-heart-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get-heart-data"}},[t._v("#")]),t._v(" Get Heart Data")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This guide assumes that your app has already been authorized and the snippet of code that I will show you can access to the Fitbit user id, here called "),e("code",[t._v("userID")]),t._v(", the Fitbit OAuth 2.0 client ID, here called "),e("code",[t._v("clientID")]),t._v(", and the Fitbit client secret, here called "),e("code",[t._v("clientSecret")]),t._v(".")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://dev.fitbit.com/build/reference/web-api/heartrate-timeseries/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heart data"),e("OutboundLink")],1),t._v(" contain details about a user's heart activity. In Fitbitter, a datapoint is expressed by the "),e("code",[t._v("FitbitHeartData")]),t._v(" model.\nIn particular, an instance of "),e("code",[t._v("FitbitHeartData")]),t._v(" has the following fields:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The user encoded id.")]),t._v("\n  String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" userID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The date of monitoring of the data.")]),t._v("\n  DateTime"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" dateOfMonitoring"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The calories spent out of active range during the [dateOfMonitoring].")]),t._v("\n  double"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" caloriesOutOfRange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The minimum value of the out of active range.")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" minimumOutOfRange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The minutes spent out of active range during the [dateOfMonitoring].")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" minutesOutOfRange"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The calories spent in the fat burn range during the [dateOfMonitoring].")]),t._v("\n  double"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" caloriesFatBurn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The minimum value of the fat burn range.")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" minimumFatBurn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The minutes spent in the fat burn range during the [dateOfMonitoring].")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" minutesFatBurn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The calories spent in the cardio range during the [dateOfMonitoring].")]),t._v("\n  double"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" caloriesCardio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The minimum value of the cardio range.")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" minimumCardio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The minutes spent in the cardio range during the [dateOfMonitoring].")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" minutesCardio"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The calories spent in the peak range during the [dateOfMonitoring].")]),t._v("\n  double"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" caloriesPeak"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The minimum value of the peak range.")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" minimumPeak"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The minutes spent in the peak range during the [dateOfMonitoring].")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" minutesPeak"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The resting heart rate during the [dateOfMonitoring].")]),t._v("\n  int"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" restingHeartRate"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("For example:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("FitbitHeartData(userID: 7ML2XV, dateOfMonitoring: 2022-05-05 00:00:00.000, caloriesOutOfRange: 2446.1926200000003, minimumOutOfRange: 30, minutesOutOfRange: 1401, caloriesFatBurn: 25.95498, minimumFatBurn: 107, minutesFatBurn: 3, caloriesCardio: 524.1107099999997, minimumCardio: 134, minutesCardio: 34, caloriesPeak: 32.89344, minimumPeak: 169, minutesPeak: 2, restingHeartRate: 52, )\n")])])]),e("p",[t._v("Information about the user's Heart data can be obtained in three steps:")]),t._v(" "),e("h3",{attrs:{id:"step-1-instanciate-a-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-instanciate-a-manager"}},[t._v("#")]),t._v(" Step 1: Instanciate a manager")]),t._v(" "),e("p",[t._v("First, you need to instanciate a "),e("code",[t._v("FitbitHeartRateDataManager")])]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    FitbitHeartRateDataManager fitbitHeartRateDataManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitHeartRateDataManager")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        clientID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clientSecret"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"step-2-create-the-request-url"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-request-url"}},[t._v("#")]),t._v(" Step 2: Create the request url")]),t._v(" "),e("p",[t._v("Then, you have to create a url object, "),e("code",[t._v("FitbitHeartRateAPIURL")]),t._v(", that fetches the Heart Rate data, during the desidered time range. For example:")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    FitbitHeartRateAPIURL fitbitHeartRateAPIURL "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FitbitHeartRateAPIURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("day")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                                    date"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" DateTime"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                    fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fitbitCredentials"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("For the complete list of possible "),e("code",[t._v("FitbitHeartRateAPIURL")]),t._v(", defined for different time ranges, please refer to the "),e("a",{attrs:{href:"https://pub.dev/documentation/fitbitter/latest/fitbitter/FitbitHeartAPIURL-class.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("API Doc"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"step-3-get-the-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-get-the-data"}},[t._v("#")]),t._v(" Step 3: Get the data")]),t._v(" "),e("p",[t._v("Finally you can obtain the Heart data using")]),t._v(" "),e("div",{staticClass:"language-dart extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dart"}},[e("code",[t._v("    List"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FitbitHeartRateData"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fitbitHeartRateData "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fitbitHeartRateDataManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fitbitHeartRateAPIURL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);