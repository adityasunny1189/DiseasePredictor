(this["webpackJsonpdisease-prediction-app"]=this["webpackJsonpdisease-prediction-app"]||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(27),i=n.n(r),o=(n(76),n(77),n(39)),l=n(34),c=n(19);n(78);var u=function(){return s.a.createElement(o.a,{sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark"},s.a.createElement(c.b,{to:"/"},s.a.createElement(o.a.Brand,{className:"brand"},"Disease Predictor")),s.a.createElement(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),s.a.createElement(o.a.Collapse,{id:"responsive-navbar-nav"},s.a.createElement(l.a,{className:"mr-auto"},s.a.createElement(l.a.Link,{as:c.b,className:"lnk",to:"/DiseasePrediction"},"Predict Disease"),s.a.createElement(l.a.Link,{as:c.b,className:"lnk",to:"/Statistics"},"View Statistics")),s.a.createElement(l.a,null,s.a.createElement(l.a.Link,{eventKey:2,href:"https://ashleshmahule.me/",className:"lnk"},"Developer"))))},m=n(10),d=n(14),_=n(15),p=n(17),h=n(16),f=(n(84),n(55),n(33)),g=n(24),y=n(20),b=n(37),v=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({username:e.target.value})},a.state={username:null},a}return Object(_.a)(n,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u,null),s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",null,"Welcome ",this.state.username)),s.a.createElement(f.a,{id:"form"},s.a.createElement(g.a,{className:"justify-content-md-center"},s.a.createElement(y.a,{sm:"3",md:"3",lg:"3"},s.a.createElement(f.a.Group,{as:f.a.Row,controlId:"name"},s.a.createElement(f.a.Control,{onChange:this.handleChange,type:"text",placeholder:"Enter Your Name"}))))),s.a.createElement(c.b,{to:"/DiseasePrediction"},s.a.createElement(b.a,{className:"gs",variant:"light"},"Get Started")))}}]),n}(s.a.Component),E=n(29),k=n.n(E),w=n(38),j=n(23),O=n(70),S=n(44),C=(n(101),n(102),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).symptoms=e.symp,a.data={},a.state={disease:null},a.SendData=a.SendData.bind(Object(j.a)(a)),a.GetFromFlask=a.GetFromFlask.bind(Object(j.a)(a)),a}return Object(_.a)(n,[{key:"GetFromFlask",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t,n=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=localStorage.getItem("diseaseName"))?(t=JSON.parse(t),this.setState({dname:t})):fetch("https://diseasepredtictor.herokuapp.com/getDisease?query="+this.symptoms).then((function(e){return e.json()})).then((function(e){n.setState({disease:e.disease}),localStorage.setItem("dname",JSON.stringify(t))}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"SendData",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{(t=new XMLHttpRequest).open("POST","https://diseasepredictorapp.herokuapp.com/ShowMore"),t.send(JSON.stringify({result:this.state}))}catch(n){console.error(n)}case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.GetFromFlask();var e=this.state.disease;return console.log({disease:e}),this.SendData(),s.a.createElement(s.a.Fragment,null,s.a.createElement(S.a,null,s.a.createElement(g.a,{className:"justify-content-md-center predicted"},s.a.createElement(y.a,{sm:"6",md:"6",lg:"6"},"Predicted Disease: ",e))))}}]),n}(a.Component)),x=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).symptoms=["abdominal_pain","abnormal_menstruation","acidity","acute_liver_failure","altered_sensorium","anxiety","back_pain","belly_pain","blackheads","bladder_discomfort","blister","blood_in_sputum","bloody_stool","blurred_and_distorted_vision","breathlessness","brittle_nails","bruising","burning_micturition","chest_pain","chills","cold_hands_and_feets","coma","congestion","constipation","continuous_feel_of_urine","continuous_sneezing","cough","cramps","dark_urine","dehydration","depression","diarrhoea","dischromic _patches","distention_of_abdomen","dizziness","drying_and_tingling_lips","enlarged_thyroid","excessive_hunger","extra_marital_contacts","family_history","fast_heart_rate","fatigue","fluid_overload","fluid_overload.1","foul_smell_of urine","headache","high_fever","hip_joint_pain","history_of_alcohol_consumption","increased_appetite","indigestion","inflammatory_nails","internal_itching","irregular_sugar_level","irritability","irritation_in_anus","itching","joint_pain","knee_pain","lack_of_concentration","lethargy","loss_of_appetite","loss_of_balance","loss_of_smell","malaise","mild_fever","mood_swings","movement_stiffness","mucoid_sputum","muscle_pain","muscle_wasting","muscle_weakness","nausea","neck_pain","nodal_skin_eruptions","obesity","pain_behind_the_eyes","pain_during_bowel_movements","pain_in_anal_region","painful_walking","palpitations","passage_of_gases","patches_in_throat","phlegm","polyuria","prominent_veins_on_calf","puffy_face_and_eyes","pus_filled_pimples","receiving_blood_transfusion","receiving_unsterile_injections","red_sore_around_nose","red_spots_over_body","redness_of_eyes","restlessness","runny_nose","rusty_sputum","scurring","shivering","silver_like_dusting","sinus_pressure","skin_peeling","skin_rash","slurred_speech","small_dents_in_nails","spinning_movements","spotting_ urination","stiff_neck","stomach_bleeding","stomach_pain","sunken_eyes","sweating","swelled_lymph_nodes","swelling_joints","swelling_of_stomach","swollen_blood_vessels","swollen_extremeties","swollen_legs","throat_irritation","toxic_look_(typhos)","ulcers_on_tongue","unsteadiness","visual_disturbances","vomiting","watering_from_eyes","weakness_in_limbs","weakness_of_one_body_side","weight_gain","weight_loss","yellow_crust_ooze","yellow_urine","yellowing_of_eyes","yellowish_skin"],a.handleChange=function(e){console.log(e),a.syms=e,console.log(a.syms)},a.state={showComponent:!1},a.syms=[],a.GetDiseaseDisp=null,a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.Predict=a.Predict.bind(Object(j.a)(a)),a.toSend="",a._onButtonClick=a._onButtonClick.bind(Object(j.a)(a)),a.disease="",a}return Object(_.a)(n,[{key:"_onButtonClick",value:function(){this.setState({showComponent:!0})}},{key:"Predict",value:function(){return this.toSend=this.syms.map((function(e){return"".concat(e)})).join(","),console.log(this.toSend),s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{symp:this.toSend}))}},{key:"_redirectToShowMore",value:function(){var e=Object(w.a)(k.a.mark((function e(){var t=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://diseasepredictorapp.herokuapp.com/ShowMore").then((function(e){return e.json()})).then((function(e){console.log(e),t.disease=e}));case 2:console.log(this.disease),this.context.router.push({pathname:"/ShowMore",state:{yourCalculatedData:this.disease}});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=function(t){return s.a.createElement(s.a.Fragment,null,s.a.createElement(S.a,{id:"cont"},s.a.createElement(g.a,{noGutters:!0,id:"symp-1",className:"justify-content-md-center"},s.a.createElement(y.a,{sm:"9",md:"9",lg:"9"},s.a.createElement(f.a.Label,null,"Choose The Symptoms You Have Been Experiencing Lately"))),s.a.createElement(g.a,{id:"symp-2",className:"justify-content-md-center"},s.a.createElement(y.a,{className:"justify-content-md-center inputSym",sm:"6",md:"6",lg:"6"},s.a.createElement(O.a,{size:"lg",clearButton:!0,id:"SymptomsInput",labelKey:"name",multiple:!0,options:e.symptoms,placeholder:"Start Typing",onChange:e.handleChange}))),s.a.createElement(g.a,{id:"warn"},s.a.createElement(y.a,null,"Try to choose as much symptoms as possible.")),s.a.createElement(b.a,{onClick:e._onButtonClick,variant:"success",id:"check"},"Check!"),e.state.showComponent?s.a.createElement(s.a.Fragment,null,s.a.createElement(e.Predict,null),s.a.createElement(g.a,null,s.a.createElement(y.a,null,s.a.createElement(b.a,{as:c.b,to:"/ShowMore",onClick:e._redirectToShowMore,variant:"dark"},"Know More!")))):null))};return s.a.createElement(t,null)}}]),n}(s.a.Component);var N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u,null),s.a.createElement(x,null))},F=(n(103),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h2",null,"Yet to be updated. Be patient"))}}]),n}(s.a.Component)),D=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u,null),s.a.createElement(F,null))}}]),n}(s.a.Component),P=(n(104),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u,null))}}]),n}(s.a.Component)),B=function(){return s.a.createElement(m.c,null,s.a.createElement(m.a,{exact:!0,path:"/",component:v}),s.a.createElement(m.a,{exact:!0,path:"/DiseasePrediction",component:N}),s.a.createElement(m.a,{exact:!0,path:"/Statistics",component:D}),s.a.createElement(m.a,{exact:!0,path:"/ShowMore",component:P}))};var M=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(c.a,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},71:function(e,t,n){e.exports=n(105)},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},84:function(e,t,n){}},[[71,1,2]]]);
//# sourceMappingURL=main.6c6aacad.chunk.js.map