import { createVNode as e, ref as v, defineComponent as g, createTextVNode as h, Fragment as i } from "vue";
const w = {
  data: {
    type: Array,
    default: [],
    required: !0
  }
};
const T = () => e("svg", {
  style: "vertical-align: middle;",
  t: "1671772859005",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "8599",
  width: "16",
  height: "16"
}, [e("path", {
  d: "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",
  "p-id": "8600"
}, null), e("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z",
  style: "vertical-align: middle;",
  "p-id": "8601"
}, null)]), x = () => e("svg", {
  t: "1671772792969",
  class: "icon",
  style: "vertical-align: middle;",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2668",
  width: "16",
  height: "16"
}, [e("path", {
  d: "M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z",
  "p-id": "2669"
}, null), e("path", {
  d: "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-40 728H184V184h656v656z",
  "p-id": "2670"
}, null)]);
function y(t) {
  const o = (c) => c.reduce(
    (s, l) => l != null && l.open ? s.concat(l, o((l == null ? void 0 : l.children) ?? [])) : s.concat(l),
    []
  ), r = v(o(t));
  return {
    openedTree: o,
    openedData: r,
    toggle: (c) => {
      console.log("toggle", c), c.open = !c.open, r.value = o(t);
    }
  };
}
const a = /* @__PURE__ */ g({
  name: "DTreeTest",
  props: w,
  emits: [],
  setup(t, o) {
    const {
      openedTree: r,
      openedData: d,
      toggle: c
    } = y(t.data), s = () => e("span", {
      style: "display:inline-block; width:16px;"
    }, null), l = (n) => e(i, null, [e("div", {
      onClick: () => {
        n != null && n.children && c(n);
      },
      style: {
        paddingLeft: `${20 * (((n == null ? void 0 : n.level) ?? 1) - 1)}px`
      }
    }, [n.children ? n.open ? e(T, null, null) : e(x, null, null) : e(s, null, null), e("span", {
      style: "vertical-align: middle;"
    }, [n.label])])]), p = (n) => n.map((u) => l(u));
    return () => e("div", {
      class: "devui-tree-test"
    }, [h("   "), p(d.value)]);
  }
}), f = {
  title: "TreeTest 树测试",
  category: "数据展示",
  status: "1%",
  // TODO 组件完成状态，开发完组件新特性请及时更新该状态值；若组件开发完成则填入'100%'，并删除该注释
  install(t) {
    t.component(a.name, a);
  }
};
export {
  a as TreeTest,
  f as default,
  w as treeTestProps
};
