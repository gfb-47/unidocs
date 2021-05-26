<?php

use App\Models\Professor;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
            'name' => 'Admin',
            'email' => 'unitins@unitins.br',
            'color' => '#673ab7',
            'phone' => '(63) 90000-0000',
            'password' => bcrypt('unitins2021'),
        ]);

        $student = Student::create([
            'cpf' => '000.000.000-00',
            'user_id' => $user->id,
        ]);

        $professor = Professor::create([
            'user_id' => $user->id,
        ]);

        $user->assignRole('administrador');

        $this->command->info(("User {$user->name} created"));
    }
}