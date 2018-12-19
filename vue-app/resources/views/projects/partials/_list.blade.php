@foreach ($projects as $project)
<tr>
    <td><a href="#">{{ $project->project_name }}</a></td>
    <td>{{ $project->description }}</td>
</tr>
@endforeach
