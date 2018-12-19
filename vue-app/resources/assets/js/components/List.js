export default {
    template: `
        <div>
            <slot name="table-title">My Projects</slot>

        	<table class="table table-striped mb-5">
        		<thead>
        			<tr class="thead-dark">
                        <th scope="col">#</th>
        				<th scope="col">Project Name</th>
        				<th scope="col">Description</th>
        			</tr>
        		</thead>

        		<tbody>
                    <tr v-for="project in projects">
                        <th scope="row">{{ project.id }}</th>
                        <td>{{ project.project_name }}</td>
                        <td>{{ project.description }}</td>
                    </tr>

                    <tr v-if="isEmpty">
                        <td colspan="3" class="text-white bg-danger text-center">No projects found!</td>
                    </tr>
        		</tbody>
        	</table>
        </div>
    `,

    data() {
        return {
            projects: [],

            isEmpty: false
        }
    },

    methods: {
        load(data) {
            axios.get('/projects/get')
                .then(response => {
                    if (Object.keys(response.data).length === 0) {
                        this.isEmpty = true;
                    } else {
                        this.projects = response.data;
                    }
                });
        }
    },

    mounted() {
        this.load();
    }
}
