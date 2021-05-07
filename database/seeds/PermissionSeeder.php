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
            'name' => 'administrador_plataforma',
            'description' => 'Administrador'
        ]);

        $admin->permissions()->sync(Permission::all());
        $this->command->info('Full Permissions sucessfull added');
    }
}
