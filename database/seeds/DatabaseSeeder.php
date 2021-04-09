<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UserSeed::class);
        $this->call(PopulateUsers::class);
        $this->call(SubjectSeeder::class);
        $this->call(CourseSeeder::class);
        $this->call(SemesterSeeder::class);
    }
}