<?php

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

        $this->command->info(("User {$user->name} created"));
    }
}