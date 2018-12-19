import Form from '../core/Form';
window.Form = Form;

export default {
    template: `
        <form method="POST" action="/projects" @submit.prevent="onSubmit" @keydown="form.errors.clear($event.target.name)">
            <div class="form-group">
                <label for="name">Project Name:</label>

                <input type="text" id="name" name="name" class="form-control" v-model="form.name">

                <span class="help text-danger" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
            </div>

            <div class="form-group">
                <label for="description">Project Description:</label>

                <input type="text" id="description" name="description" class="form-control" v-model="form.description">

                <span class="help text-danger" v-if="form.errors.has('description')" v-text="form.errors.get('description')"></span>
            </div>

            <div class="form-group">
                <button class="btn btn-dark" :disabled="form.errors.any()">Create</button>
            </div>
        </form>
    `,

    data() {
        return {
            form: new Form({
                name: '',
                description: ''
            })
        }
    },

    methods: {
        onSubmit() {
            this.form.post('/projects')
                .then(response => {
                    console.log(response);
                });
        }
    }
}
