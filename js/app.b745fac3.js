(function(){"use strict";var e={454:function(e,t,a){var i=a(963),o=a(252);const s={class:"main-body"};function r(e,t,a,i,r,l){const n=(0,o.up)("Navbar"),c=(0,o.up)("router-view"),d=(0,o.up)("Footer");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(n),(0,o._)("div",s,[(0,o.Wm)(c)]),(0,o.Wm)(d)],64)}const l={class:"navbar navbar-light bg-light",id:"top"},n={class:"container-fluid"},c=(0,o.Uk)("Kamen Stones"),d={class:"nav nav-tabs",id:"full-menu"},u={class:"nav-item"},p=(0,o.Uk)("About Us"),h={class:"nav-item"},m=(0,o.Uk)("Products"),v={class:"nav-item"},f=(0,o.Uk)("Price List"),g={class:"nav-item"},b=(0,o.Uk)("Careers"),y={class:"nav-item"},w=(0,o.Uk)("Contacts"),k=(0,o._)("ul",{class:"navbar-nav",id:"menu-toggle"},[(0,o._)("li",{class:"nav-item"},[(0,o._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar"},[(0,o._)("span",{class:"navbar-toggler-icon"})])])],-1),_={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel"},x=(0,o._)("div",{class:"offcanvas-header"},[(0,o._)("h5",{class:"offcanvas-title fs-2",id:"offcanvasNavbarLabel"},"Menu"),(0,o._)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),S={class:"offcanvas-body"},C={class:"navbar-nav",id:"offcanvas-menu"},W={class:"nav-item fs-3"},T=(0,o.Uk)("Home"),U={class:"nav-item fs-3"},P=(0,o.Uk)("About Us"),$={class:"nav-item fs-3"},E=(0,o.Uk)("Price List"),O={class:"nav-item fs-3"},q=(0,o.Uk)("Products"),A={class:"nav-item fs-3"},L=(0,o.Uk)("Careers"),J={class:"nav-item fs-3"},j=(0,o.Uk)("Contacts");function F(e,t,a,i,s,r){const F=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",l,[(0,o._)("div",n,[(0,o.Wm)(F,{to:"/",class:"navbar-brand fs-3",id:"home-btn"},{default:(0,o.w5)((()=>[c])),_:1}),(0,o._)("ul",d,[(0,o._)("li",u,[(0,o.Wm)(F,{to:"/about",class:"nav-link",id:"about-btn"},{default:(0,o.w5)((()=>[p])),_:1})]),(0,o._)("li",h,[(0,o.Wm)(F,{to:"/products",class:"nav-link",id:"product-btn"},{default:(0,o.w5)((()=>[m])),_:1})]),(0,o._)("li",v,[(0,o.Wm)(F,{to:"/price-list",class:"nav-link",id:"price-btn"},{default:(0,o.w5)((()=>[f])),_:1})]),(0,o._)("li",g,[(0,o.Wm)(F,{to:"/career",class:"nav-link",id:"careers-btn"},{default:(0,o.w5)((()=>[b])),_:1})]),(0,o._)("li",y,[(0,o.Wm)(F,{to:"/contacts",class:"nav-link",id:"contact-btn"},{default:(0,o.w5)((()=>[w])),_:1})])]),k,(0,o._)("div",_,[x,(0,o._)("div",S,[(0,o._)("ul",C,[(0,o._)("li",W,[(0,o.Wm)(F,{to:"/",class:"nav-link"},{default:(0,o.w5)((()=>[T])),_:1})]),(0,o._)("li",U,[(0,o.Wm)(F,{to:"/about",class:"nav-link"},{default:(0,o.w5)((()=>[P])),_:1})]),(0,o._)("li",$,[(0,o.Wm)(F,{to:"/price-list",class:"nav-link"},{default:(0,o.w5)((()=>[E])),_:1})]),(0,o._)("li",O,[(0,o.Wm)(F,{to:"/products",class:"nav-link"},{default:(0,o.w5)((()=>[q])),_:1})]),(0,o._)("li",A,[(0,o.Wm)(F,{to:"/career",class:"nav-link"},{default:(0,o.w5)((()=>[L])),_:1})]),(0,o._)("li",J,[(0,o.Wm)(F,{to:"/contacts",class:"nav-link"},{default:(0,o.w5)((()=>[j])),_:1})])])])])])])}var M=a(755),D=a.n(M),R={name:"Navbar",created(){D()(document).ready((()=>{let e=D()("#about-btn"),t=D()("#price-btn"),a=D()("#careers-btn"),i=D()("#contact-btn"),o=D()("#product-btn"),s=D()("#home-btn");o.click((()=>{o.addClass("active"),e.removeClass("active"),t.removeClass("active"),a.removeClass("active"),i.removeClass("active")})),s.click((()=>{e.removeClass("active"),t.removeClass("active"),a.removeClass("active"),i.removeClass("active"),o.removeClass("active")})),e.click((()=>{e.addClass("active"),t.removeClass("active"),a.removeClass("active"),i.removeClass("active"),o.removeClass("active")})),t.click((()=>{t.addClass("active"),e.removeClass("active"),a.removeClass("active"),i.removeClass("active"),o.removeClass("active")})),a.click((()=>{a.addClass("active"),t.removeClass("active"),e.removeClass("active"),i.removeClass("active"),o.removeClass("active")})),i.click((()=>{i.addClass("active"),a.removeClass("active"),t.removeClass("active"),e.removeClass("active"),o.removeClass("active")}));let r=D()(".nav-link"),l=D()("#offcanvasNavbar"),n=D()("#menu-toggle");n.click((()=>{l.show()})),r.click((()=>{l.hide()}))}))}},N=a(744);const z=(0,N.Z)(R,[["render",F]]);var I=z;const V={class:"container-fluid navbar-light bg-light"},K=(0,o._)("hr",null,null,-1),B={action:"#"},G=(0,o._)("h3",{class:"text-center"},"Subscribe to Newsletter",-1),H=(0,o._)("br",null,null,-1),Z={class:"subscribe input-group mb-3"},Y=(0,o._)("i",{class:"bi bi-envelope text-muted"},null,-1),Q=(0,o._)("button",{class:"btn btn-outline-secondary",type:"button",id:"subscribe-button"}," Subscribe ",-1),X=(0,o._)("p",{class:"form-footer-text text-muted text-center"}," *Subscribe to our newsletter to receive early discount offers and new product info. ",-1),ee=(0,o._)("br",null,null,-1),te=(0,o._)("hr",null,null,-1),ae=(0,o._)("div",{class:"outro text-center"},[(0,o._)("p",null,"2022 © Kamen Stones LTD. All rights reserved."),(0,o._)("p",{class:"text-muted fs-6"},[(0,o.Uk)(" Made by "),(0,o._)("em",null,[(0,o._)("a",{class:"text-muted",href:"#",id:"my-link"},"Freedom Design")])])],-1),ie=(0,o._)("a",{href:"#top",class:"back-to-top",id:"top-btn"},[(0,o._)("i",{class:"bi bi-arrow-up"}),(0,o.Uk)("_"),(0,o._)("span",null,"back top"),(0,o.Uk)("_"),(0,o._)("i",{class:"bi bi-arrow-up"})],-1);function oe(e,t,a,s,r,l){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("footer",V,[K,(0,o._)("form",B,[G,H,(0,o._)("div",Z,[Y,(0,o.wy)((0,o._)("input",{type:"email",class:"form-control",placeholder:"Your email","aria-label":"your email","aria-describedby":"button-addon2","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[i.nr,r.email]]),Q]),X,ee]),te,ae]),ie],64)}var se={name:"Footer",data(){return{email:""}},created(){D()(document).ready((()=>{let e=D()("#top-btn");e.hide(),D()(window).scroll((()=>{let t=D()(window).scrollTop();t>700?e.fadeIn():e.fadeOut()}))}))}};const re=(0,N.Z)(se,[["render",oe]]);var le=re,ne=(a(244),{name:"App",components:{Navbar:I,Footer:le}});const ce=(0,N.Z)(ne,[["render",r]]);var de=ce,ue=a(119),pe=a.p+"img/Kamen-stones-logo.ad4531a2.png";const he={class:"home"},me=(0,o.uE)('<div class="caption"><p class="text-light fs-2"> We strive to focus on operational excellence and continuous cost improvement. </p><p class="text-light fs-2"> We are committed to providing quality products and services to our customers. </p><p class="text-light fs-2"> We invite you to explore our website. We hope you will enjoy learning more about Kamen Stones Rock Quarry. </p></div><div class="logo-container"><img src="'+pe+'" alt="kamen stones ltd logo"></div>',2),ve=[me];function fe(e,t,a,i,s,r){return(0,o.wg)(),(0,o.iD)("div",he,ve)}var ge={name:"HomeView"};const be=(0,N.Z)(ge,[["render",fe]]);var ye=be;const we={class:"price-list-container container-fluid"},ke=(0,o.uE)('<hr><h1 class="text-center">Our prices</h1><hr><table class="table table-striped table-hover"><thead class="text-center"><tr><th scope="col">Product</th><th scope="col">Price/t (METRIC-TONS)</th><th scope="col">Price/m<sup>3</sup> (METERS CUBED)</th><th scope="col">Volume Purchase</th></tr></thead><tbody class="text-center"><tr><th scope="row">Base Material</th><td>$54</td><td>$98</td><td></td></tr><tr><th scope="row"></th><td>$64</td><td>$108</td><td>1000 TONS +</td></tr><tr><th scope="row">Clay Soil</th><td>$78</td><td>$88</td><td></td></tr><tr><th scope="row"></th><td>$88</td><td>$98</td><td>1000 TONS +</td></tr><tr><th scope="row">Base Material</th><td>$23</td><td>$33</td><td></td></tr><tr><th scope="row"></th><td>$33</td><td>$43</td><td>1000 TONS +</td></tr><tr><th scope="row">Fill Material</th><td>$97</td><td>$107</td><td></td></tr><tr><th scope="row"></th><td>$117</td><td>$127</td><td>1000 TONS +</td></tr><tr><th scope="row">Landscape Rocks</th><td>$70</td><td>$80</td><td></td></tr><tr><th scope="row"></th><td>$90</td><td>$100</td><td>1000 TONS +</td></tr><tr><th scope="row">Oversized</th><td>$175</td><td>$185</td><td></td></tr><tr><th scope="row"></th><td>$195</td><td>$205</td><td>1000 TONS +</td></tr><tr><th scope="row">Rip Rap</th><td>$312</td><td>$322</td><td></td></tr><tr><th scope="row"></th><td>$323</td><td>$333</td><td>1000 TONS +</td></tr><tr><th scope="row">Septic Fill</th><td>$69</td><td>$79</td><td></td></tr><tr><th scope="row"></th><td>$89</td><td>$99</td><td>1000 TONS +</td></tr><tr><th scope="row">Top Soil</th><td>$159</td><td>$169</td><td></td></tr><tr><th scope="row"></th><td>$179</td><td>$189</td><td>1000 TONS +</td></tr></tbody></table><hr>',5),_e={class:"text-center"},xe=(0,o.Uk)("Contact"),Se=(0,o.Uk)(" us to clarify anything related to our products and prices. "),Ce=(0,o._)("hr",null,null,-1);function We(e,t,a,i,s,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",we,[ke,(0,o._)("p",_e,[(0,o.Wm)(l,{to:"/contacts"},{default:(0,o.w5)((()=>[xe])),_:1}),Se]),Ce])}var Te={name:"PriceListView"};const Ue=(0,N.Z)(Te,[["render",We]]);var Pe=Ue;const $e={class:"contact-container container-fluid"},Ee=(0,o._)("hr",null,null,-1),Oe=(0,o._)("h1",{class:"text-center"},"Contacts",-1),qe=(0,o._)("hr",null,null,-1),Ae={action:"#"},Le=(0,o._)("p",{class:"text-center"},"Comments, complaints, compliments",-1),Je={class:"form-floating mb-3"},je=(0,o._)("label",{for:"floatingInput"},"Email address",-1),Fe={class:"form-floating"},Me=(0,o._)("label",{for:"message"},"Your message",-1),De=(0,o._)("br",null,null,-1),Re=(0,o._)("div",{class:"submit-btn"},[(0,o._)("button",{type:"submit",class:"btn btn-outline-success"},"Submit")],-1),Ne=(0,o._)("hr",null,null,-1),ze=(0,o._)("h1",{class:"text-center"},"Find us here",-1),Ie=(0,o._)("hr",null,null,-1),Ve=(0,o._)("div",{class:"location-container"},[(0,o._)("div",{class:"map"},[(0,o._)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127650.74683709093!2d36.95551216020882!3d-1.0979083786046855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f492933ec3075%3A0xf7db8bdafb93a4cd!2sHirani%20quarries%20Ltd!5e0!3m2!1sen!2ske!4v1651152174368!5m2!1sen!2ske",allowfullscreen:"true",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})]),(0,o._)("br"),(0,o._)("div",{class:"location fs-4"},[(0,o._)("h4",null,"Our offices are at:"),(0,o._)("p",null,[(0,o.Uk)(" Saint Jhn tower, "),(0,o._)("br"),(0,o.Uk)(" 11th story, wing C, "),(0,o._)("br"),(0,o.Uk)(" Kenyatta road, Nairobi, Kenya ")]),(0,o._)("br"),(0,o._)("h4",null,"Alternatively, you can contact us in the following ways:"),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("strong",null,"email:"),(0,o.Uk)(" kamenstones@info.com")]),(0,o._)("li",null,[(0,o._)("strong",null,"tel (paid):"),(0,o.Uk)(" +2548942430")]),(0,o._)("li",null,[(0,o._)("strong",null,"tel (toll free):"),(0,o.Uk)(" +25480934982")])])])],-1),Ke=(0,o._)("hr",null,null,-1);function Be(e,t,a,s,r,l){return(0,o.wg)(),(0,o.iD)("div",$e,[Ee,Oe,qe,(0,o._)("form",Ae,[Le,(0,o._)("div",Je,[(0,o.wy)((0,o._)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[i.nr,r.email]]),je]),(0,o._)("div",Fe,[(0,o.wy)((0,o._)("textarea",{name:"message",class:"form-control",id:"message",placeholder:"Your message",style:{height:"200px"},"onUpdate:modelValue":t[1]||(t[1]=e=>r.message=e)},null,512),[[i.nr,r.message]]),Me]),De,Re]),Ne,ze,Ie,Ve,Ke])}var Ge={name:"ContactsView",data(){return{email:"",message:""}}};const He=(0,N.Z)(Ge,[["render",Be]]);var Ze=He;const Ye={class:"career-container container-fluid"},Qe=(0,o.uE)('<hr><h1 class="text-center">Work With Us</h1><hr><div class="jobs"><p class="text-center intro-to-jobs"> Open opportunities at Kamen Stones LTD </p><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> Human Resource Manager </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><h4>Job Details</h4><br><h5>Salary</h5><p>$130,000 - $150,000 a year</p><br><h5>Job type</h5><p>Full time</p><br><h5>Full Job Description</h5><p> We are Psychology Today – the world&#39;s #1 psychology site visited by over 40 million people a month. We match thousands of therapists with clients every day. Think Airbnb, but for Therapy. </p><p> Join us on our mission to bring mental health and therapy to the world. </p><p> Ideal candidates have 4+ years of relevant experience. Expertise in Go, AWS and Vue.js or React is a plus. Hours are Eastern Standard Time; the position is remote. </p><p>We offer:</p><ul><li>Work/life balance.</li><li> A product and team that will inspire you - so you can do meaningful work with people who make you laugh! </li><li> A healthy, profitable and stable company where team members stay for many years. </li><li> The freedom to work remotely (most of us are in the US, Canada, or South America - as we all work on US Eastern time). </li><li> A supportive platform and a flat structure to do innovative work, be acknowledged, and make a difference. </li><li>Annual compensation from: $130 - $150K + Bonus</li></ul><br><p>Requirements:</p><ul><li> Ability to work independently without supervision to meet deadlines </li><li> Well organized, results oriented self-starter with a sense of urgency </li><li> Exceptionally strong technical, analytical, written, and verbal communication skills </li><li> Ability to work with continuous integration and continuous deployment </li><li> Experience with infrastructure as code using tools like Terraform or CloudFormation </li><li> Ability to work in and adapt to multiple backend languages with a focus on GoLang </li><li> Must have experience working with AWS managed services and related tooling </li><li> Good understanding of and experience implementing server side rendering techniques </li><li> Expertise with writing frontend applications in VueJS or React </li></ul><br><p>Benefits:</p><ul><li>Flexible schedule</li><li>Paid time off</li></ul></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> Security Personnel </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><h4>Job Details</h4><br><h5>Salary</h5><p>$130,000 - $150,000 a year</p><br><h5>Job type</h5><p>Full time</p><br><h5>Full Job Description</h5><p> We are Psychology Today – the world&#39;s #1 psychology site visited by over 40 million people a month. We match thousands of therapists with clients every day. Think Airbnb, but for Therapy. </p><p> Join us on our mission to bring mental health and therapy to the world. </p><p> Ideal candidates have 4+ years of relevant experience. Expertise in Go, AWS and Vue.js or React is a plus. Hours are Eastern Standard Time; the position is remote. </p><p>We offer:</p><ul><li>Work/life balance.</li><li> A product and team that will inspire you - so you can do meaningful work with people who make you laugh! </li><li> A healthy, profitable and stable company where team members stay for many years. </li><li> The freedom to work remotely (most of us are in the US, Canada, or South America - as we all work on US Eastern time). </li><li> A supportive platform and a flat structure to do innovative work, be acknowledged, and make a difference. </li><li>Annual compensation from: $130 - $150K + Bonus</li></ul><br><p>Requirements:</p><ul><li> Ability to work independently without supervision to meet deadlines </li><li> Well organized, results oriented self-starter with a sense of urgency </li><li> Exceptionally strong technical, analytical, written, and verbal communication skills </li><li> Ability to work with continuous integration and continuous deployment </li><li> Experience with infrastructure as code using tools like Terraform or CloudFormation </li><li> Ability to work in and adapt to multiple backend languages with a focus on GoLang </li><li> Must have experience working with AWS managed services and related tooling </li><li> Good understanding of and experience implementing server side rendering techniques </li><li> Expertise with writing frontend applications in VueJS or React </li></ul><br><p>Benefits:</p><ul><li>Flexible schedule</li><li>Paid time off</li></ul></div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> Senior Software Engineer </button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><h4>Job Details</h4><br><h5>Salary</h5><p>$130,000 - $150,000 a year</p><br><h5>Job type</h5><p>Full time</p><br><h5>Full Job Description</h5><p> We are Psychology Today – the world&#39;s #1 psychology site visited by over 40 million people a month. We match thousands of therapists with clients every day. Think Airbnb, but for Therapy. </p><p> Join us on our mission to bring mental health and therapy to the world. </p><p> Ideal candidates have 4+ years of relevant experience. Expertise in Go, AWS and Vue.js or React is a plus. Hours are Eastern Standard Time; the position is remote. </p><p>We offer:</p><ul><li>Work/life balance.</li><li> A product and team that will inspire you - so you can do meaningful work with people who make you laugh! </li><li> A healthy, profitable and stable company where team members stay for many years. </li><li> The freedom to work remotely (most of us are in the US, Canada, or South America - as we all work on US Eastern time). </li><li> A supportive platform and a flat structure to do innovative work, be acknowledged, and make a difference. </li><li>Annual compensation from: $130 - $150K + Bonus</li></ul><br><p>Requirements:</p><ul><li> Ability to work independently without supervision to meet deadlines </li><li> Well organized, results oriented self-starter with a sense of urgency </li><li> Exceptionally strong technical, analytical, written, and verbal communication skills </li><li> Ability to work with continuous integration and continuous deployment </li><li> Experience with infrastructure as code using tools like Terraform or CloudFormation </li><li> Ability to work in and adapt to multiple backend languages with a focus on GoLang </li><li> Must have experience working with AWS managed services and related tooling </li><li> Good understanding of and experience implementing server side rendering techniques </li><li> Expertise with writing frontend applications in VueJS or React </li></ul><br><p>Benefits:</p><ul><li>Flexible schedule</li><li>Paid time off</li></ul></div></div></div></div></div><hr>',5),Xe={class:"text-center"},et=(0,o.Uk)("Contact"),tt=(0,o.Uk)(" us to clarify anything related to our job postings and opportunities. "),at=(0,o._)("hr",null,null,-1);function it(e,t,a,i,s,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Ye,[Qe,(0,o._)("p",Xe,[(0,o.Wm)(l,{to:"/contacts"},{default:(0,o.w5)((()=>[et])),_:1}),tt]),at])}var ot={name:"CareerView"};const st=(0,N.Z)(ot,[["render",it]]);var rt=st;const lt={class:"about-container container-fluid"},nt=(0,o.uE)('<hr><h1 class="text-center">About Kamen Stones LTD</h1><hr><div class="general-info fs-4"><h3 class="text-center">General Information</h3><p> Kamen Stone Rock Quarry provides limestone materials required by the Kenyan economy. We primarily produce crushed stone, as well as fill material, topsoil and rip rap. Aggregates are used to build roads, non-residential and residential properties. </p></div><div class="mission fs-4"><h3 class="text-center">Our Mission</h3><p> Our Mission is to provide quality products and services which consistently meet our customer&#39;s expectations: to be responsible stewards, with respect to the safety and environmental impact of our operations and products. We recognize that success in all of our activities is related directly to the talents, dedication and performance of our employees throughout the company. </p></div><div class="guiding-principles fs-4"><h3 class="text-center">Guiding Principles</h3><ul><li> Integrity: We will work consistently to earn the respect and trust of all parties with whom we interact by acting fairly and honorably. We will observe high ethical standards and obey all laws and regulations. </li><br><li> Excellence: We are committed to excellence in all of our activities. We value innovation and we intend to maintain a position of leadership in our area. </li><br><li> Respect: We will maintain a high respect for both employees and customers, their dignity, their talents and their interests. </li></ul></div><hr>',7),ct=[nt];function dt(e,t,a,i,s,r){return(0,o.wg)(),(0,o.iD)("div",lt,ct)}var ut={name:"AboutView"};const pt=(0,N.Z)(ut,[["render",dt]]);var ht=pt;const mt={class:"products-container container-fluid"},vt=(0,o._)("hr",null,null,-1),ft=(0,o._)("h1",{class:"text-center"},"Our Products",-1),gt=(0,o._)("hr",null,null,-1),bt={class:"products"},yt=(0,o.uE)('<div class="list-group list-group-flush col-2"><a class="list-group-item list-group-item-action" id="base-material-btn" href="#">Base Material</a><a class="list-group-item list-group-item-action" id="clay-btn" href="#">Clary</a><a class="list-group-item list-group-item-action" id="fill-btn" href="#">FIll</a><a class="list-group-item list-group-item-action" id="landscape-btn" href="#">Landscape Rocks</a><a class="list-group-item list-group-item-action" id="oversized-btn" href="#">Oversized</a><a class="list-group-item list-group-item-action" id="rip-rap-btn" href="#">Rip Rap</a><a class="list-group-item list-group-item-action" id="septic-btn" href="#">Septic</a><a class="list-group-item list-group-item-action" id="top-soil-btn" href="#">Top Soil</a></div>',1),wt={class:"col-10"},kt={class:"",id:"base-material"},_t=(0,o.uE)('<h4 class="">Base Material</h4><div class="prod-img"><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/1%2034%20Base.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/1%2034%20Base%202.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/1%2034%20base%203.jpg" alt=""></div>',2),xt={class:"prod-caption"},St={class:"fs-5"},Ct=(0,o.Uk)("Contact"),Wt=(0,o.Uk)(" us to learn more on product and how to purchase and acquire. "),Tt={class:"",id:"clay"},Ut=(0,o.uE)('<h4 class="">Clay</h4><div class="prod-img"><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Fill%20Dirt.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Fill%20Dirt2.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Top%20Soil%203.jpg" alt=""></div>',2),Pt={class:"prod-caption"},$t={class:"fs-5"},Et=(0,o.Uk)("Contact"),Ot=(0,o.Uk)(" us to learn more on product and how to purchase and acquire. "),qt={class:"",id:"fill"},At=(0,o.uE)('<h4 class="">Fill</h4><div class="prod-img"><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Screened%20top%20soil.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/screened%20top%20soil2.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Top%20Soil%202.jpg" alt=""></div>',2),Lt={class:"prod-caption"},Jt={class:"fs-5"},jt=(0,o.Uk)("Contact"),Ft=(0,o.Uk)(" us to learn more on product and how to purchase and acquire. "),Mt={class:"",id:"landscape"},Dt=(0,o.uE)('<h4 class="">Landscape</h4><div class="prod-img"><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Fountian%20Rock.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/6-18k%20boulders.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/snail%20stone%202.jpg" alt=""></div>',2),Rt={class:"prod-caption"},Nt={class:"fs-5"},zt=(0,o.Uk)("Contact"),It=(0,o.Uk)(" us to learn more on product and how to purchase and acquire. "),Vt={class:"",id:"oversized"},Kt=(0,o.uE)('<h4 class="">Oversized</h4><div class="prod-img"><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Mixed%20Oversize.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Mixed%20Oversize2.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Mixed%20oversized4.jpg" alt=""></div>',2),Bt={class:"prod-caption"},Gt={class:"fs-5"},Ht=(0,o.Uk)("Contact"),Zt=(0,o.Uk)(" us to learn more on product and how to purchase and acquire. "),Yt={class:"",id:"rip-rap"},Qt=(0,o.uE)('<h4 class="">Rip Rap</h4><div class="prod-img"><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Mixed%20Oversize.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Mixed%20Oversize2.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Mixed%20oversized4.jpg" alt=""></div>',2),Xt={class:"prod-caption"},ea={class:"fs-5"},ta=(0,o.Uk)("Contact"),aa=(0,o.Uk)(" us to learn more on product and how to purchase and acquire. "),ia={class:"",id:"septic"},oa=(0,o.uE)('<h4 class="">Septic</h4><div class="prod-img"><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Septic%20Small%202.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Septic%20Large3.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/snail%20stone%202.jpg" alt=""></div>',2),sa={class:"prod-caption"},ra={class:"fs-5"},la=(0,o.Uk)("Contact"),na=(0,o.Uk)(" us to learn more on product and how to purchase and acquire. "),ca={class:"",id:"top-soil"},da=(0,o.uE)('<h4 class="">Top Soil</h4><div class="prod-img"><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Screened%20top%20soil.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/screened%20top%20soil2.jpg" alt=""><img src="http://leonarockquarry.com/images/stories/LargeProductJpg/Top%20Soil%203.jpg" alt=""></div>',2),ua={class:"prod-caption"},pa={class:"fs-5"},ha=(0,o.Uk)("Contact"),ma=(0,o.Uk)(" us to learn more on product and how to purchase and acquire. "),va=(0,o._)("hr",null,null,-1);function fa(e,t,a,i,s,r){const l=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",mt,[vt,ft,gt,(0,o._)("div",bt,[yt,(0,o._)("div",wt,[(0,o._)("div",kt,[_t,(0,o._)("div",xt,[(0,o._)("p",St,[(0,o.Wm)(l,{to:"/contacts",class:"prod-info"},{default:(0,o.w5)((()=>[Ct])),_:1}),Wt])])]),(0,o._)("div",Tt,[Ut,(0,o._)("div",Pt,[(0,o._)("p",$t,[(0,o.Wm)(l,{to:"/contacts",class:"prod-info"},{default:(0,o.w5)((()=>[Et])),_:1}),Ot])])]),(0,o._)("div",qt,[At,(0,o._)("div",Lt,[(0,o._)("p",Jt,[(0,o.Wm)(l,{to:"/contacts",class:"prod-info"},{default:(0,o.w5)((()=>[jt])),_:1}),Ft])])]),(0,o._)("div",Mt,[Dt,(0,o._)("div",Rt,[(0,o._)("p",Nt,[(0,o.Wm)(l,{to:"/contacts",class:"prod-info"},{default:(0,o.w5)((()=>[zt])),_:1}),It])])]),(0,o._)("div",Vt,[Kt,(0,o._)("div",Bt,[(0,o._)("p",Gt,[(0,o.Wm)(l,{to:"/contacts",class:"prod-info"},{default:(0,o.w5)((()=>[Ht])),_:1}),Zt])])]),(0,o._)("div",Yt,[Qt,(0,o._)("div",Xt,[(0,o._)("p",ea,[(0,o.Wm)(l,{to:"/contacts",class:"prod-info"},{default:(0,o.w5)((()=>[ta])),_:1}),aa])])]),(0,o._)("div",ia,[oa,(0,o._)("div",sa,[(0,o._)("p",ra,[(0,o.Wm)(l,{to:"/contacts",class:"prod-info"},{default:(0,o.w5)((()=>[la])),_:1}),na])])]),(0,o._)("div",ca,[da,(0,o._)("div",ua,[(0,o._)("p",pa,[(0,o.Wm)(l,{to:"/contacts",class:"prod-info"},{default:(0,o.w5)((()=>[ha])),_:1}),ma])])])])]),va])}var ga={name:"ProductsView",created(){D()(document).ready((()=>{let e=D()("#base-material"),t=D()("#clay"),a=D()("#fill"),i=D()("#landscape"),o=D()("#oversized"),s=D()("#rip-rap"),r=D()("#septic"),l=D()("#top-soil");t.hide(),a.hide(),i.hide(),o.hide(),s.hide(),r.hide(),l.hide();let n=D()("#base-material-btn"),c=D()("#clay-btn"),d=D()("#fill-btn"),u=D()("#landscape-btn"),p=D()("#oversized-btn"),h=D()("#rip-rap-btn"),m=D()("#septic-btn"),v=D()("#top-soil-btn");n.click((()=>{e.fadeIn(),t.hide(),a.hide(),i.hide(),o.hide(),s.hide(),r.hide(),l.hide()})),c.click((()=>{e.hide(),t.fadeIn(),a.hide(),i.hide(),o.hide(),s.hide(),r.hide(),l.hide()})),d.click((()=>{e.hide(),t.hide(),a.fadeIn(),i.hide(),o.hide(),s.hide(),r.hide(),l.hide()})),u.click((()=>{e.hide(),t.hide(),a.hide(),i.fadeIn(),o.hide(),s.hide(),r.hide(),l.hide()})),p.click((()=>{e.hide(),t.hide(),a.hide(),i.hide(),o.fadeIn(),s.hide(),r.hide(),l.hide()})),h.click((()=>{e.hide(),t.hide(),a.hide(),i.hide(),o.hide(),s.fadeIn(),r.hide(),l.hide()})),m.click((()=>{e.hide(),t.hide(),a.hide(),i.hide(),o.hide(),s.hide(),r.fadeIn(),l.hide()})),v.click((()=>{e.hide(),t.hide(),a.hide(),i.hide(),o.hide(),s.hide(),r.hide(),l.fadeIn()}));let f=D()(".prod-info"),g=D()("#about-btn"),b=D()("#price-btn"),y=D()("#careers-btn"),w=D()("#contact-btn"),k=D()("#product-btn");f.click((()=>{w.addClass("active"),y.removeClass("active"),b.removeClass("active"),g.removeClass("active"),k.removeClass("active")}))}))}};const ba=(0,N.Z)(ga,[["render",fa]]);var ya=ba;const wa=[{path:"/",name:"home",component:ye},{path:"/about",name:"about",component:ht},{path:"/price-list",name:"price-list",component:Pe},{path:"/career",name:"career",component:rt},{path:"/contacts",name:"contacts",component:Ze},{path:"/products",name:"products",component:ya}],ka=(0,ue.p7)({history:(0,ue.PO)("/Kamen-Stones-LTD/"),routes:wa});var _a=ka,xa=a(907),Sa=(0,xa.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,i.ri)(de).use(Sa).use(_a).mount("#app")}},t={};function a(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,i,o,s){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],o=e[d][1],s=e[d][2];for(var l=!0,n=0;n<i.length;n++)(!1&s||r>=s)&&Object.keys(a.O).every((function(e){return a.O[e](i[n])}))?i.splice(n--,1):(l=!1,s<r&&(r=s));if(l){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[i,o,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/Kamen-Stones-LTD/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var o,s,r=i[0],l=i[1],n=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(n)var d=n(a)}for(t&&t(i);c<r.length;c++)s=r[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},i=self["webpackChunkkamen_stones_ltd"]=self["webpackChunkkamen_stones_ltd"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(454)}));i=a.O(i)})();
//# sourceMappingURL=app.b745fac3.js.map