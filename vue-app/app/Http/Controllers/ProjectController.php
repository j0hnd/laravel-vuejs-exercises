<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    public function create()
    {
        return view('projects.create', [
            'projects' => Project::all()
        ]);
    }

    public function get()
    {
        return collect(Project::all());
    }

    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'description' => 'required'
        ]);

        $project = Project::forceCreate([
            'project_name' => request('name'),
            'description' => request('description')
        ]);

        return ['message' => 'Project Created!', 'data' => Project::all()];
    }
}
