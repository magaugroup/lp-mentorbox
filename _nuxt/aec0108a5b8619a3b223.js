(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(t,e,n){"use strict";var l={name:"NavOne",data:function(){return{menus:[{path:"/",name:"Home"},{path:"/about",name:"Tentang Kami"},{path:"/courses",name:"Program Pelatihan"}]}},computed:{email:function(){return"admin@mentorbox.id"},phone:function(){return"6281779000018"},appsName:function(){return"mentorbox.id"}},mounted:function(){if($(".main-navigation .navigation-box").length){$(".main-navigation .sub-menu").parent("li").children("a").append((function(){return'<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>'}));var t=$(".header-navigation .menu-toggler"),e=$(".main-navigation .sub-nav-toggler");t.on("click",(function(){var menu=$(this).data("target");return $(menu).slideToggle(),$(menu).toggleClass("showen"),!1})),e.on("click",(function(){return $(this).parent().parent().children(".sub-menu").slideToggle(),!1}))}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topbar-one"},[n("div",{staticClass:"container"},[n("div",{staticClass:"topbar-one__left"},[n("a",{attrs:{href:"mailto:"+t.email,title:"Kirim Email"}},[t._v(t._s(t.email))]),t._v(" "),n("a",{attrs:{href:"https://wa.me/"+t.phone,title:"Hubungi Kami"}},[t._v(t._s(t.phone))])]),t._v(" "),n("div",{staticClass:"topbar-one__right"},[n("a",{attrs:{href:"https://app.mentorbox.id",title:"Member Area"}},[t._v("Login")]),t._v(" "),n("nuxt-link",{attrs:{to:"/register",title:"Pendaftaran Akun"}},[t._v("Register")])],1)])]),t._v(" "),n("header",{staticClass:"site-header site-header__header-one "},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light header-navigation stricky"},[n("div",{staticClass:"container clearfix"},[n("div",{staticClass:"logo-box clearfix"},[n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/",title:t.appsName}},[n("img",{staticClass:"main-logo",attrs:{src:"/assets/images/mb-logo-blue.png",width:"128",alt:t.appsName}})]),t._v(" "),t._m(0)],1),t._v(" "),n("div",{staticClass:"main-navigation"},[n("ul",{staticClass:"navigation-box"},t._l(t.menus,(function(e,l){return n("li",{key:l},[n("nuxt-link",{attrs:{to:e.path,title:e.name}},[t._v(t._s(e.name))])],1)})),0)])])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"menu-toggler",attrs:{"data-target":".main-navigation"}},[e("span",{staticClass:"kipso-icon-menu"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"site-header__decor"},[e("div",{staticClass:"site-header__decor-row"},[e("div",{staticClass:"site-header__decor-single"},[e("div",{staticClass:"site-header__decor-inner-1"})]),this._v(" "),e("div",{staticClass:"site-header__decor-single"},[e("div",{staticClass:"site-header__decor-inner-2"})]),this._v(" "),e("div",{staticClass:"site-header__decor-single"},[e("div",{staticClass:"site-header__decor-inner-3"})])])])}],!1,null,"090a05c3",null);e.a=component.exports},153:function(t,e,n){"use strict";var l={name:"Footer",data:function(){return{date:(new Date).getFullYear()}},computed:{appsName:function(){return"mentorbox.id"},companyName:function(){return"LPK Mentorbox Indonesia"}}},r=n(21),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("footer",{staticClass:"site-footer"},[n("div",{staticClass:"site-footer__bottom"},[n("div",{staticClass:"container"},[n("p",{staticClass:"site-footer__copy"},[t._v("\n          Copyright "+t._s(t.date)+" ©\n          "),n("nuxt-link",{attrs:{to:"/"}},[t._v(t._s(t.appsName))]),t._v("   by PT.\n          "+t._s(t.companyName)+"\n        ")],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"site-footer__social"},[e("a",{staticClass:"scroll-to-target site-footer__scroll-top",attrs:{href:"#","data-target":"html"}},[e("i",{staticClass:"kipso-icon-top-arrow"})]),this._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})]),this._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-square"})]),this._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-pinterest-p"})]),this._v(" "),e("a",{attrs:{href:"#"}},[e("i",{staticClass:"fab fa-instagram"})])])}],!1,null,"79cb50ec",null);e.a=component.exports},154:function(t,e,n){"use strict";var l={name:"PageHeader",props:{title:{type:String}}},r=n(21),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"inner-banner"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"inner-banner__title"},[this._v(this._s(this.title))])])])}),[],!1,null,"13dcdd42",null);e.a=component.exports},155:function(t,e,n){"use strict";var l={name:"Subscribe"},r=n(21),component=Object(r.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"mailchimp-one"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"mailchimp-one__content"},[e("div",{staticClass:"mailchimp-one__icon"},[e("i",{staticClass:"kipso-icon-email"})]),this._v(" "),e("h2",{staticClass:"mailchimp-one__title"},[this._v("\n            Dapatkan update "),e("br"),this._v("\n            program pelatihan\n          ")])])]),this._v(" "),e("div",{staticClass:"col-lg-6 d-flex"},[e("div",{staticClass:"my-auto"},[e("form",{staticClass:"mailchimp-one__form mc-form",attrs:{action:"#"}},[e("input",{attrs:{type:"text",id:"mc-email",placeholder:"Masukkan email "}}),this._v(" "),e("button",{staticClass:"thm-btn",attrs:{type:"submit"}},[this._v("Subscribe")])]),this._v(" "),e("div",{staticClass:"mc-form__response"})])])])])])}],!1,null,"42d5c807",null);e.a=component.exports},194:function(t,e,n){"use strict";n.r(e);var l=n(152),r=n(154),o=n(153),_={name:"AboutOne"},c=n(21),m=Object(c.a)(_,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-one "},[n("img",{staticClass:"about-one__circle",attrs:{src:"/assets/images/circle-stripe.png",alt:""}}),t._v(" "),n("div",{staticClass:"container text-center"},[n("div",{staticClass:"block-title text-center"},[n("h2",{staticClass:"block-title__title"},[t._v("\n        PT. LPK Mentorbox Indonesia "),n("br"),t._v("\n        mentorbox.id\n      ")])]),t._v(" "),n("p",{staticClass:"about-one__text text-left"},[t._v("\n      Lembaga Pelatihan Kerja (LPK) Mentorbox Indonesia adalah Lembaga\n      Pelatihan Kerja yang bergerak dibidang Pelatihan Kompetensi Kerja,\n      Tempat Uji Kompetensi dan bekerjasama dengan Lembaga Sertifikasi Profesi\n      untuk melakukan uji kompetensi guna mendapatkan sertifikasi profesi dari\n      Badan Nasional Sertifikasi Profesi (BNSP).\n    ")]),t._v(" "),n("p",{staticClass:"about-one__text text-left"},[t._v("\n      Semua pelatihan yang kami lakukan adalah berbasis Standar Kompetensi\n      Kerja Nasional Indonesia (SKKNI) serta juga mengikuti kebutuhan standar\n      kompetensi kerja berbagai Industri.\n    ")]),t._v(" "),n("p",{staticClass:"about-one__text text-left"},[t._v("\n      Lembaga Pelatihan Kerja (LPK) Mentorbox Indonesia suatu Perseroan\n      Terbatas didirikan berdasarkan hukum Indonesia, dengan akte notaris\n      Robin Dwijorumantyo Zakharia, S.H., M.KN., berkedudukan dan berkantor di\n      Gedung Megah Group, Jl. Adyaksa Baru No. 49A, Pandang, Panakkukang, Kota\n      Makassar, Sulawesi Selatan, 90231. Lembaga Pelatihan Kerja (LPK)\n      Mentorbox Indonesia merupakan subsidiary dari Magau Group.\n    ")]),t._v(" "),n("p",{staticClass:"about-one__text text-left"},[t._v("\n      Tujuan kami adalah ingin ikut serta dalam perjuangan bangsa Indonesia\n      dalam mencerdaskan kehidupan bangsa dimana semua sumber daya manusianya\n      memiliki skill sesuai standar kompetensi dan bersertifikat profesi dari\n      Badan Nasional Sertifikasi Profesi (BNSP) yang hasilnya nanti semua SDM\n      yang kami latih dapat diterima di berbagai perusahaan baik dalam maupun\n      luar negeri\n    ")]),t._v(" "),n("div",{staticClass:"block-title text-center"},[n("h3",{staticClass:"block-title__title"},[t._v("\n        Visi Misi LPK MentorBox "),n("br"),t._v("Indonesia\n      ")])]),t._v(" "),n("div",{staticClass:"row text-left"},[n("div",{staticClass:"col-lg-6"},[n("p",{staticClass:"about-one__text"},[n("b",[t._v("Visi:")]),n("br"),t._v("\n          Menjadi Lembaga Pelatihan Kerja Berbasis Kompetensi dan berstandart\n          Industri yang mengedepankan kualitas SDM yang unggul dan berdaya\n          saing global.\n        ")])]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("p",{staticClass:"about-one__text"},[n("b",[t._v("Misi:")]),n("br"),t._v(" "),n("ol",[n("li",[t._v("Menjadi platform online yang dapat membantu dan memudahkan\tmasyarakat yang ingin mengikuti pelatihan kompetensi kerja, uji\tkompetensi, dan sertifikasi profesi BNSP")]),t._v(" "),n("li",[t._v("Menjadi tempat pelatihan kompetensi kerja berbasis standar kompetensi\tkerja nasional indonesia (SKKNI) dan standar kompetensi kerja industri")]),t._v(" "),n("li",[t._v("Bekerjasama dengan Perguruan tinggi dan persuahaan swasta guna")]),t._v(" "),n("li",[t._v("Menerbitkan sertifikat profesi berbasis kompetensi dari Badan Nasional\tSertifikasi Profesi (BNSP)")])])])])]),t._v(" "),n("div",{staticClass:"block-title text-center"},[n("h3",{staticClass:"block-title__title"},[t._v("\n        Sejarah LPK MentorBox "),n("br"),t._v("Indonesia\n      ")])]),t._v(" "),n("p",{staticClass:"about-one__text text-left"},[t._v("\n      Lembaga Pelatihan Kerja (LPK) Mentorbox Indonesia didirikan pada tanggal 8 Februari 2020 dan merupakan Lembaga Pelatihan Kerja yang dengan produk Pelatihan Kompetensi Kerja, Tempat Uji Kompetensi dan Sertifikasi Profesi dari Badan Nasional Sertifikasi Profesi (BNSP).\n    ")]),t._v(" "),n("p",{staticClass:"about-one__text text-left"},[t._v("\n      Lembaga Pelatihan Kerja (LPK) Mentorbox Indonesia telah berlegalitas sebagai Perseroan Terbatas didirikan berdasarkan hukum Indonesia, dengan akte notaris Robin Dwijorumantyo Zakharia, S.H., M.KN., berkedudukan dan berkantor Kota Makassar Prov. Sulawesi Selatan. Dengan paltform resminya mentorbox.id.\n    ")]),t._v(" "),n("div",{staticClass:"text-left"},[n("h4",[t._v("Pelatihan Kompetensi Kerja Yang Kami Adakan")]),t._v(" "),n("ol",[n("li",[t._v("Pelatihan Kompetensi Kerja Teknologi Informasi & Komunikasi\n        "),n("ul",[n("li",[t._v("Junior Network Administrator")]),t._v(" "),n("li",[t._v("Junior Office Operator")]),t._v(" "),n("li",[t._v("Junior Web Developer")]),t._v(" "),n("li",[t._v("Enterprise Resource Planning (ERP) Analyst")]),t._v(" "),n("li",[t._v("Junior Graphic Design")]),t._v(" "),n("li",[t._v("IT Security")]),t._v(" "),n("li",[t._v("Teknisi Pusat Data")]),t._v(" "),n("li",[t._v("Teknisi Utama Jaringan Komputer")]),t._v(" "),n("li",[t._v("Database Management")]),t._v(" "),n("li",[t._v("ICT Project Manager")]),t._v(" "),n("li",[t._v("Content Creator")]),t._v(" "),n("li",[t._v("Junior Mobile Programmer")]),t._v(" "),n("li",[t._v("Multimedia")]),t._v(" "),n("li",[t._v("Video Editing")])])]),t._v(" "),n("li",[t._v("Pelatihan Kompetensi Kerja  Industri Kreatif\n        "),n("ul",[n("li",[t._v("Teknisi Telepon Seluler Reparasi Perangkat Keras")]),t._v(" "),n("li",[t._v("Barista")]),t._v(" "),n("li",[t._v("Animasi")]),t._v(" "),n("li",[t._v("Batik")]),t._v(" "),n("li",[t._v("Fotografi")]),t._v(" "),n("li",[t._v("Junior digital artist")])])]),t._v(" "),n("li",[t._v("Pelatihan Kompetensi Kerja   Bisnis & Manajemen\n        "),n("ul",[n("li",[t._v("Digital Marketing")]),t._v(" "),n("li",[t._v("Pelayanan Pelanggan")]),t._v(" "),n("li",[t._v("Junior Sekretaris")]),t._v(" "),n("li",[t._v("Tenaga pemasar operasional penjualan ")]),t._v(" "),n("li",[t._v("Teknisi akuntansi junior (Keuangan)")]),t._v(" "),n("li",[t._v("Administrasi perkantoran")]),t._v(" "),n("li",[t._v("Analis keuangan muda")]),t._v(" "),n("li",[t._v("Kewirausahaan")])])])])])])])}],!1,null,"d2da3e02",null).exports,v={name:"TeamOne"},d=Object(c.a)(v,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"team-one team-one__become-teacher"},[n("div",{staticClass:"container"},[n("div",{staticClass:"block-title text-center"},[n("h2",{staticClass:"block-title__title"},[t._v("Meet the best "),n("br"),t._v("\n                teachers")])]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-xl-3 col-lg-6 col-md-6 col-sm-12"},[n("div",{staticClass:"team-one__single"},[n("div",{staticClass:"team-one__image"},[n("img",{attrs:{src:"/assets/images/team-1-1.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"team-one__content"},[n("h2",{staticClass:"team-one__name"},[n("a",{attrs:{href:"/teacher-details"}},[t._v("Adelaide Hunter")])]),t._v(" "),n("p",{staticClass:"team-one__designation"},[t._v("Teacher")]),t._v(" "),n("p",{staticClass:"team-one__text"},[t._v("There are many varia of passages of lorem.")])]),t._v(" "),n("div",{staticClass:"team-one__social"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-pinterest-p"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-lg-6 col-md-6 col-sm-12"},[n("div",{staticClass:"team-one__single"},[n("div",{staticClass:"team-one__image"},[n("img",{attrs:{src:"/assets/images/team-1-2.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"team-one__content"},[n("h2",{staticClass:"team-one__name"},[n("a",{attrs:{href:"/teacher-details"}},[t._v("Christina Newman")])]),t._v(" "),n("p",{staticClass:"team-one__designation"},[t._v("Teacher")]),t._v(" "),n("p",{staticClass:"team-one__text"},[t._v("There are many varia of passages of lorem.")])]),t._v(" "),n("div",{staticClass:"team-one__social"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-pinterest-p"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-lg-6 col-md-6 col-sm-12"},[n("div",{staticClass:"team-one__single"},[n("div",{staticClass:"team-one__image"},[n("img",{attrs:{src:"/assets/images/team-1-3.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"team-one__content"},[n("h2",{staticClass:"team-one__name"},[n("a",{attrs:{href:"/teacher-details"}},[t._v("Gilbert Daniels")])]),t._v(" "),n("p",{staticClass:"team-one__designation"},[t._v("Teacher")]),t._v(" "),n("p",{staticClass:"team-one__text"},[t._v("There are many varia of passages of lorem.")])]),t._v(" "),n("div",{staticClass:"team-one__social"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-pinterest-p"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])])]),t._v(" "),n("div",{staticClass:"col-xl-3 col-lg-6 col-md-6 col-sm-12"},[n("div",{staticClass:"team-one__single"},[n("div",{staticClass:"team-one__image"},[n("img",{attrs:{src:"/assets/images/team-1-4.jpg",alt:""}})]),t._v(" "),n("div",{staticClass:"team-one__content"},[n("h2",{staticClass:"team-one__name"},[n("a",{attrs:{href:"/teacher-details"}},[t._v("Austin Caldwell")])]),t._v(" "),n("p",{staticClass:"team-one__designation"},[t._v("Teacher")]),t._v(" "),n("p",{staticClass:"team-one__text"},[t._v("There are many varia of passages of lorem.")])]),t._v(" "),n("div",{staticClass:"team-one__social"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-pinterest-p"})]),t._v(" "),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})])])])])])])])}],!1,null,"f35228e6",null).exports,h={name:"VideoOne"},f=Object(c.a)(h,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"video-one"},[n("div",{staticClass:"container"},[n("img",{staticClass:"video-one__scratch",attrs:{src:"/assets/images/scratch-1-1.png",alt:""}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 d-flex align-items-end"},[n("div",{staticClass:"video-one__content"},[n("h2",{staticClass:"video-one__title"},[t._v("Take a tour dolor "),n("br"),t._v("\n                        sit amet, consect "),n("br"),t._v("\n                        etur elit")]),t._v(" "),n("a",{staticClass:"thm-btn video-one__btn",attrs:{href:"#"}},[t._v("Learn More")])])]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"video-one__img"},[n("img",{attrs:{src:"/assets/images/video-1-1.jpg",alt:""}}),t._v(" "),n("a",{staticClass:"video-one__popup",attrs:{href:"#"}},[n("i",{staticClass:"fas fa-play"})])])])])])])}],!1,null,"5d6ead31",null).exports,C={name:"ClientsLogoOne"},k=Object(c.a)(C,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"brand-one brand-one__home-three"},[n("div",{staticClass:"container"},[n("div",{staticClass:"brand-one__carousel owl-carousel owl-theme"},[n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})]),t._v(" "),n("div",{staticClass:"item"},[n("img",{attrs:{src:"/assets/images/brand-1-1.png",alt:""}})])])])])}],!1,null,"692791d8",null).exports,x={name:"Testimonial"},j=Object(c.a)(x,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"testimonials-one testimonials-one__home-three"},[n("div",{staticClass:"container"},[n("div",{staticClass:"block-title text-center"},[n("h2",{staticClass:"block-title__title"},[t._v("What our students "),n("br"),t._v("\n                have to say")])]),t._v(" "),n("div",{staticClass:"testimonials-one__carousel owl-carousel owl-theme"},[n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-1.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Anne Hall")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority have suffered alteration in some form.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-2.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Andre Obrien")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority have suffered alteration in some form, by injected humour.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-3.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Shane Vasquez")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-4.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Maud Lee")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority have suffered alteration in some form.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-5.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Barbara Kennedy")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority have suffered alteration in some form, by injected humour.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-6.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Duane Carter")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-1.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Sally Green")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority have suffered alteration in some form.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-2.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Iva Santos")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])]),t._v(" "),n("div",{staticClass:"item"},[n("div",{staticClass:"testimonials-one__single"},[n("div",{staticClass:"testimonials-one__qoute"},[n("img",{attrs:{src:"/assets/images/qoute-1-1.png",alt:""}})]),t._v(" "),n("p",{staticClass:"testimonials-one__text"},[t._v("There are many variations of passages of lore ipsu available but\n                        the majority have suffered alteration in some form, by injected humour.")]),t._v(" "),n("img",{staticClass:"testimonials-one__img",attrs:{src:"/assets/images/team-1-3.jpg",alt:""}}),t._v(" "),n("h3",{staticClass:"testimonials-one__name"},[t._v("Max Burns")]),t._v(" "),n("p",{staticClass:"testimonials-one__designation"},[t._v("Student")])])])])])])}],!1,null,"207955d0",null).exports,y={name:"CallToActionOne"},K=Object(c.a)(y,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"cta-one cta-one__home-one",style:{backgroundImage:"url(/assets/images/cta-bg-1-1.jpg)"}},[this._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h2",{staticClass:"cta-one__title"},[this._v("Kipso one & only "),e("br"),this._v("\n              mission is to extend "),e("br"),this._v("\n              your knowledge base")]),this._v(" "),e("div",{staticClass:"cta-one__btn-block"},[e("a",{staticClass:"thm-btn cta-one__btn",attrs:{href:"#"}},[this._v("Learn More")])])])}],!1,null,"432ded38",null).exports,P=n(155),T={components:{CallToActionOne:K,Testimonial:j,ClientsLogoOne:k,VideoOne:f,TeamOne:d,AboutOne:m,Footer:o.a,PageHeader:r.a,NavOne:l.a,Subscribe:P.a},head:function(){return{title:"MentorBox.id - Tentang Kami"}}},S=Object(c.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavOne"),this._v(" "),e("PageHeader",{attrs:{title:"Tentang Kami"}}),this._v(" "),e("AboutOne"),this._v(" "),e("div",{staticClass:"border-bottom"}),this._v(" "),e("Subscribe"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=S.exports}}]);