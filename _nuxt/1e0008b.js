(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{374:function(t,e,o){t.exports=o.p+"img/modal_image.ed30b88.png"},375:function(t,e,o){t.exports=o.p+"img/youmake.b4e9662.svg"},388:function(t,e,o){"use strict";o.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bonus-section__content__left-side js-scroll",attrs:{"data-animate":"fadeInLeft"}},[e("img",{staticClass:"umake-text",attrs:{src:o(375),alt:"YOUMAKE"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bonus-descr"},[o("p",[t._v("\n            Создай уникальный дизайн или выбери из множества готовых\n            восхитительных моделей.\n          ")])])}],l=(o(78),{methods:{show:function(){this.$modal.show("my-first-modal")},hide:function(){this.$modal.hide("my-first-modal")},copyPromocode:function(){var t=this,e=document.createRange();e.selectNode(this.$refs.promocode),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.$refs.message.style.display="block",setTimeout((function(){t.$refs.message.style.display="none"}),1500)}}}),c=o(20),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main-page bonus-section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"bonus-section__content"},[t._m(0),t._v(" "),n("div",{staticClass:"bonus-section__content__right-side js-scroll",attrs:{"data-animate":"fadeInRight"}},[n("h2",{staticClass:"bonus-title"},[t._v("Получи 500 руб на первый заказ")]),t._v(" "),t._m(1),t._v(" "),n("a",{staticClass:"btn-style black-style bonus-btn",attrs:{href:"javascript:void(0);","data-micromodal-trigger":"modal-bonus"},on:{click:function(e){return e.preventDefault(),t.show.apply(null,arguments)}}},[t._v("Получить бонус")])])])]),t._v(" "),n("modal",{staticClass:"modal-bonus",attrs:{name:"my-first-modal",width:918,height:491}},[n("div",{staticClass:"modal__container",attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-1-title"}},[n("div",{staticClass:"modal__image"},[n("img",{attrs:{src:o(374),alt:"modal-image"}})]),t._v(" "),n("div",{staticClass:"modal__info"},[n("header",{staticClass:"modal__header"},[n("button",{staticClass:"modal__close",attrs:{"aria-label":"Close modal","data-micromodal-close":""},on:{click:function(e){return e.preventDefault(),t.hide.apply(null,arguments)}}}),t._v(" "),n("h2",{staticClass:"modal__title",attrs:{id:"modal-bonus-title"}},[t._v("Твой бонус")]),t._v(" "),n("span",{staticClass:"modal__bonus-value"},[t._v("500 ₽")])]),t._v(" "),n("main",{staticClass:"modal__content",attrs:{id:"modal-bonus-content"}},[n("div",{staticClass:"modal-content"},[n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])]),t._v(" "),n("div",{staticClass:"promocode"},[n("span",{staticClass:"promocode-row"},[t._v("Ваш промокод:\n              "),n("span",{ref:"promocode",staticClass:"promocode-value",attrs:{id:"promocode"}},[t._v("NJ9HS")]),n("i",{staticClass:"icon icon-copy",attrs:{id:"copy-promocode"},on:{click:t.copyPromocode}})]),t._v(" "),n("span",{ref:"message",staticClass:"copy-message",staticStyle:{display:"none"},attrs:{id:"copy-message"}},[t._v("Промокод скопирован!")])])])])])])],1)}),n,!1,null,null,null);e.default=component.exports}}]);