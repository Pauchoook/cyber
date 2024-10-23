export default function servicesSort() {
  const sortBtn = document.querySelector(".all-services__btn");
  const servicesMark = document.querySelector("#services-mark");
  const servicesModel = document.querySelector("#services-model");
  const servicesYear = document.querySelector("#services-year");
  const nav = document.querySelector(".all-services__slider .swiper-wrapper");
  if (sortBtn) {
    sortBtn.addEventListener("click", () => {
      if (servicesMark.value) {
        mySort("data-mark");
      }
      if (servicesModel.value) {
        mySort("data-model");
      }
      if (servicesYear.value) {
        mySort("data-year");
      }
    })

    function mySort(sortType) {
      for (let i = 0; i < nav.children.length; i++) {
        for (let j = i; j < nav.children.length; j++) {
          if (+nav.children[i].getAttribute(sortType) > +nav.children[j].getAttribute(sortType)) {
            const replaceNode = nav.replaceChild(nav.children[j], nav.children[i]);
            insertAfter(replaceNode, nav.children[i]);
          }
        }
      }
    }

    function insertAfter(elem, refElem) {
      return refElem.parentNode.insertBefore(elem, refElem.nextSibling)
    }
  }
}
