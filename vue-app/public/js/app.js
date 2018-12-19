webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_Form__ = __webpack_require__(32);

window.Form = __WEBPACK_IMPORTED_MODULE_0__core_Form__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = ({
    template: '\n        <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">\n            <div class="form-group">\n                <label for="name">Project Name:</label>\n\n                <input type="text" id="name" name="name" class="form-control" v-model="form.name">\n\n                <span class="help text-danger" v-if="form.errors.has(\'name\')" v-text="form.errors.get(\'name\')"></span>\n            </div>\n\n            <div class="form-group">\n                <label for="description">Project Description:</label>\n\n                <input type="text" id="description" name="description" class="form-control" v-model="form.description">\n\n                <span class="help text-danger" v-if="form.errors.has(\'description\')" v-text="form.errors.get(\'description\')"></span>\n            </div>\n\n            <div class="form-group">\n                <button class="btn btn-dark" :disabled="form.errors.any()">Create</button>\n            </div>\n        </form>\n    ',

    data: function data() {
        return {
            form: new __WEBPACK_IMPORTED_MODULE_0__core_Form__["a" /* default */]({
                name: '',
                description: ''
            })
        };
    },


    methods: {
        onSubmit: function onSubmit() {
            this.form.post('/projects').then(function (response) {
                console.log(response);
            });
        }
    }
});

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    template: '\n        <div>\n            <slot name="table-title">My Projects</slot>\n\n        \t<table class="table table-striped mb-5">\n        \t\t<thead>\n        \t\t\t<tr class="thead-dark">\n                        <th scope="col">#</th>\n        \t\t\t\t<th scope="col">Project Name</th>\n        \t\t\t\t<th scope="col">Description</th>\n        \t\t\t</tr>\n        \t\t</thead>\n\n        \t\t<tbody>\n                    <tr v-for="project in projects">\n                        <th scope="row">{{ project.id }}</th>\n                        <td>{{ project.project_name }}</td>\n                        <td>{{ project.description }}</td>\n                    </tr>\n\n                    <tr v-if="isEmpty">\n                        <td colspan="3" class="text-white bg-danger text-center">No projects found!</td>\n                    </tr>\n        \t\t</tbody>\n        \t</table>\n        </div>\n    ',

    data: function data() {
        return {
            projects: [],

            isEmpty: false
        };
    },


    methods: {
        load: function load(data) {
            var _this = this;

            axios.get('/projects/get').then(function (response) {
                if (Object.keys(response.data).length === 0) {
                    _this.isEmpty = true;
                } else {
                    _this.projects = response.data;
                }
            });
        }
    },

    mounted: function mounted() {
        this.load();
    }
});

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_List__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Create__ = __webpack_require__(11);


// import Form from './core/Form';

window.axios = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;
// window.Form = Form;




new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',

    components: {
        List: __WEBPACK_IMPORTED_MODULE_2__components_List__["a" /* default */], Create: __WEBPACK_IMPORTED_MODULE_3__components_Create__["a" /* default */]
    }
});

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Errors = function () {
    /**
     * Create a new Errors instance.
     */
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    /**
     * Determine if an errors exists for the given field.
     *
     * @param {string} field
     */


    _createClass(Errors, [{
        key: "has",
        value: function has(field) {
            return this.errors.hasOwnProperty(field);
        }

        /**
         * Determine if we have any errors.
         */

    }, {
        key: "any",
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }

        /**
         * Retrieve the error message for a field.
         *
         * @param {string} field
         */

    }, {
        key: "get",
        value: function get(field) {
            if (this.errors[field]) {
                return this.errors[field][0];
            }
        }

        /**
         * Record the new errors.
         *
         * @param {object} errors
         */

    }, {
        key: "record",
        value: function record(errors) {
            this.errors = errors;
        }

        /**
         * Clear one or all error fields.
         *
         * @param {string|null} field
         */

    }, {
        key: "clear",
        value: function clear(field) {
            if (field) {
                delete this.errors[field];

                return;
            }

            this.errors = {};
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Errors__ = __webpack_require__(31);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Form = function () {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    function Form(data) {
        _classCallCheck(this, Form);

        this.originalData = data;

        for (var field in data) {
            this[field] = data[field];
        }

        this.errors = new __WEBPACK_IMPORTED_MODULE_0__Errors__["a" /* default */]();
    }

    /**
     * Fetch all relevant data for the form.
     */


    _createClass(Form, [{
        key: 'data',
        value: function data() {
            var data = {};

            for (var property in this.originalData) {
                data[property] = this[property];
            }

            return data;
        }

        /**
         * Reset the form fields.
         */

    }, {
        key: 'reset',
        value: function reset() {
            for (var field in this.originalData) {
                this[field] = '';
            }

            this.errors.clear();
        }

        /**
         * Send a POST request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'post',
        value: function post(url) {
            return this.submit('post', url);
        }

        /**
         * Send a PUT request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'put',
        value: function put(url) {
            return this.submit('put', url);
        }

        /**
         * Send a PATCH request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'patch',
        value: function patch(url) {
            return this.submit('patch', url);
        }

        /**
         * Send a DELETE request to the given URL.
         * .
         * @param {string} url
         */

    }, {
        key: 'delete',
        value: function _delete(url) {
            return this.submit('delete', url);
        }

        /**
         * Submit the form.
         *
         * @param {string} requestType
         * @param {string} url
         */

    }, {
        key: 'submit',
        value: function submit(requestType, url) {
            var _this = this;

            return new Promise(function (resolve, reject) {
                axios[requestType](url, _this.data()).then(function (response) {
                    _this.onSuccess(response.data);

                    resolve(response.data);
                }).catch(function (error) {
                    _this.onFail(error.response.data.errors);

                    reject(error.response.data.errors);
                });
            });
        }

        /**
         * Handle a successful form submission.
         *
         * @param {object} data
         */

    }, {
        key: 'onSuccess',
        value: function onSuccess(data) {
            alert(data.message); // temporary

            this.reset();
        }

        /**
         * Handle a failed form submission.
         *
         * @param {object} errors
         */

    }, {
        key: 'onFail',
        value: function onFail(errors) {
            this.errors.record(errors);
        }
    }]);

    return Form;
}();

/* harmony default export */ __webpack_exports__["a"] = (Form);

/***/ })

},[30]);