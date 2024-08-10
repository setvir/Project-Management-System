<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::factory()->create([
            'name' => 'Administrator',
        ]);
        Role::factory()->create([
            'name' => 'Discipline Leader',
        ]);
        Role::factory()->create([
            'name' => 'Hub Project Manager',
        ]);
        Role::factory()->create([
            'name' => 'Project Manager',
        ]);
        
        Role::factory()->create([
            'name' => 'Team Member',
        ]);
    }
}
