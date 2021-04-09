<?php

use Illuminate\Database\Seeder;
use App\Models\User;
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
            'phone' => '(63) 90000-0000',
            'password' => bcrypt('unitins2021')
        ]);

        $this->command->info(("User {$user->name} created"));
    }
}
