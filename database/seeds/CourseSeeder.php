<?php

use Illuminate\Database\Seeder;
use App\Models\Course;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    
    public function run()
    {
        $courses = [
            'Engenharia Agrônomica', 
            'Direito', 
            'Sistema de Informação', 
            'Serviço Social', 
            'Enfermargem', 
            'Letras',  
            'Pedagogia', 
            'Ciências Contábeis', 
            'Tecnologia em Gestão de Agronegócio', 
            'Administração', 
            'Tecnologia em Gestão Ambiental'
        ];

        foreach ($courses as $value) {
            $course = Course::create([
                'name' => $value,
            ]);
        }

        $this->command->info(("Courses created"));
    }
}
