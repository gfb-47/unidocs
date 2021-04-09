<?php

use App\Models\Professor;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PopulateUsers extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = factory(User::class, 100)->make()->toArray();

        foreach ($users as $key => $user) {
            try {
                DB::beginTransaction();
                $user['password'] = bcrypt('12345678');
                $createdUser = User::create($user);
                if ($key < 49) {
                    Professor::create(['user_id' => $createdUser->id]);
                } else {
                    $student = factory(Student::class)->make()->toArray();
                    $student['user_id'] = $createdUser->id;
                    Student::create($student);
                }
                DB::commit();
            } catch (\Exception $e) {
                DB::rollback();
            }
        }

        $this->command->info('Users Populate completed');

    }
}
