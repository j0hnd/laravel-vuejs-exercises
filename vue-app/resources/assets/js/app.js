import Vue from 'vue';
import axios from 'axios';
// import Form from './core/Form';

window.axios = axios;
// window.Form = Form;

import List from './components/List';
import Create from './components/Create';

new Vue({
    el: '#app',

    components: {
        List, Create
    }
});
