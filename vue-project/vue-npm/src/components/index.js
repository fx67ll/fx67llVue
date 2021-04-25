import componentsTest from './components-test/componentsTest.vue';
componentsTest.install = function(Vue) {
    Vue.component(componentsTest.name, componentsTest);
};
export default componentsTest;