<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Role;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

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

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'role_id' => 1,
        ]);
    }
}
