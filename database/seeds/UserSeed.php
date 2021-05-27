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
        $user->assignRole('administrador');      

        ////////////////////////////////////////////////////////////
        $student = User::create([
            'name' => 'Estutante',
            'email' => 'estudante@unitins.br',
            'color' => '#673ab7',
            'phone' => '(63) 69696-0000',
            'password' => bcrypt('unitins2021'),
        ]);
        $student->assignRole('estudante');
        $student = Student::create([
            'cpf' => '000.000.000-00',
            'user_id' => $student->id,
        ]);

        ////////////////////////////////////////////////////////////
        $professor_disciplina = User::create([
            'name' => 'Disciplina',
            'email' => 'disciplina@unitins.br',
            'color' => '#673ab7',
            'phone' => '(63) 66666-9999',
            'password' => bcrypt('unitins2021'),
            ]);
        $professor_disciplina->assignRole('professor_disciplina');
        $professor_disciplina = Professor::create([
            'user_id' => $professor_disciplina->id,
        ]);

        ////////////////////////////////////////////////////////////
        $professor_orientador = User::create([
            'name' => 'Orientador',
            'email' => 'orientado@unitins.br',
            'color' => '#673ab7',
            'phone' => '(63) 99999-6666',
            'password' => bcrypt('unitins2021'),
        ]);
        $professor_orientador->assignRole('professor_orientador');
        $professor_orientador = Professor::create([
            'user_id' => $professor_orientador->id,
        ]);

        //$this->command->info(("User {$user->name} created"));
    }
}