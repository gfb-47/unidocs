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
        $colors = [
            "#673ab7",
            "#3f51b5",
            "#f44336",
            "#00bcd4",
            "#e91e63",
            "#673ab7",
            "#2196f3",
            "#03a9f4",
            "#009688",
            "#4caf50",
            "#8bc34a",
            "#ffc107",
            "#ff9800",
            "#ff5722",
            "#795548"  
        ];
        foreach ($users as $key => $user) {
            try {
                DB::beginTransaction();
                $user['password'] = bcrypt('12345678');
                $user['color'] = $colors[array_rand($colors)];
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