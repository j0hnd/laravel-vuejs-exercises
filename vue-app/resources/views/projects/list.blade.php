@if (count($projects))
	<example></example>
	<h1 class="title is-3">My Projects</h1>

	<table class="table is-hoverable">
		<thead>
			<tr>
				<th>Project Name</th>
				<th>Description</th>
			</tr>
		</thead>

		<tbody id="project-container">
			{{-- @include('projects.partials._list') --}}

			{{-- <tr v-for="project in projects"> --}}
				{{-- <td>@{{ project.project_name }}</td> --}}
				{{-- <td>@{{ project.description }}</td> --}}
			{{-- </tr> --}}
		</tbody>
	</table>
@endif
