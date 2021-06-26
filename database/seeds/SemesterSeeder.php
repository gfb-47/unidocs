<?php

use App\Models\Semester;
use App\Models\Student;
use Illuminate\Database\Seeder;

class SemesterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $semester = Semester::create([
            'name' => '2021.2 PCC',
            'subject_id' => 1,
            'course_id' => 4,
            'professor_id' => 2,
            'active' => false,
        ]);

        $desactivedSemesterStudents = Student::where('id', '<', '25')->get();
        foreach ($desactivedSemesterStudents as $student) {
            $semester->students()->attach($student->id);
        }

        $semester2 = Semester::create([
            'name' => '2021.2 TCC',
            'subject_id' => 2,
            'course_id' => 7,
            'professor_id' => 2,
        ]);
        $activedSemesterStudents = Student::where('id', '>=', '25')->get();
        foreach ($activedSemesterStudents as $student) {
            $semester2->students()->attach($student->id);
        }

        $this->command->info("Semester {$semester->name} and {$semester2->name} created");
    }
}