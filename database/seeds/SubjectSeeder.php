<?php

use Illuminate\Database\Seeder;
use App\Models\Subject;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pcc = Subject::create([
            'name' => 'Projeto de Conclusão de Curso',
            'acronym' => 'PCC'
        ]);

        $tcc = Subject::create([
            'name' => 'Trabalho de Conclusão de Curso',
            'acronym' => 'TCC'
        ]);

        $this->command->info("Subject {$pcc->acronym} and {$tcc->acronym} created");
    }
}
