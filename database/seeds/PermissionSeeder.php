<?php

use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->createPermissions();
        $this->createRoles();
    }

    private function createPermissions()
    {
        // Seed the default permissions
        $permissions = Permission::defaultPermissions();

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(
                ['name' => $permission['name']],
                ['description' => $permission['description']]
            );
        }

        $this->command->info('Default Permissions added.');
    }

    private function createRoles()
    {
        $admin = Role::firstOrCreate([
            'name' => 'administrador',
            'description' => 'Administrador'
        ]);

        $professor_disciplina = Role::firstOrCreate([
            'name' => 'professor_disciplina',
            'description' => 'Professor da disciplina'
        ]);

        $professor_orientador = Role::firstOrCreate([
            'name' => 'professor_orientador',
            'description' => 'Professor orientador'
        ]);

        $student = Role::firstOrCreate([
            'name' => 'estudante',
            'description' => 'Estudante'
        ]);

        $admin->permissions()->sync(Permission::all());
        $professor_disciplina->permissions()->sync([1,2,3,4,5,8,10,13,14,15,16,17]);
        $professor_orientador->permissions()->sync([1,2,3,4,5,6,7,9]);
        $student->permissions()->sync([1,5,10,11,12]);
        
        $this->command->info('Full Permissions sucessfull added');
    }
}
