<?php

namespace App\Models;

class Permission extends \Spatie\Permission\Models\Permission
{
    public static function defaultPermissions()
    {
        return [
            //todo mundo
            array('name' => 'knowledge_area_view', 'description' => 'Visualiza área de conhecimento'),
            //professor disciplina, orientador
            array('name' => 'knowledge_area_create', 'description' => 'Cria área de conhecimento'),
            //professor disciplina, orientador
            array('name' => 'knowledge_area_edit', 'description' => 'Edita área de conhecimento'),
            //professor disciplina, orientador
            array('name' => 'knowledge_area_delete', 'description' => 'Desativar área de conhecimento'),
            
            //professor disciplina, orientador, aluno
            array('name' => 'jury_view', 'description' => 'Visualiza banca avaliadora'),
            //professor orientador
            array('name' => 'jury_create', 'description' => 'Cria banca avaliadora'),
            //professor orientador
            array('name' => 'jury_edit', 'description' => 'Edita banca avaliadora'),
            //array('name' => 'jury_delete', 'description' => 'Deleta banca avaliadora'),
            
            //array('name' => 'process_view', 'description' => 'Visualiza processo'),
            //professor disciplina
            array('name' => 'process_view_professor_disciplina', 'description' => 'Visualiza processo que o professor da disciplina está vinculado'),
            //professor orientador
            array('name' => 'process_view_professor_orientador', 'description' => 'Visualiza processo que o professor orientando está vinculado'),
            //aluno, professor disciplina
            array('name' => 'process_view_aluno', 'description' => 'Visualiza processo do aluno'),
            //aluno
            array('name' => 'process_create', 'description' => 'Cria processo'),
            //aluno
            array('name' => 'process_edit', 'description' => 'Edita processo'),
            //professor disciplina
            array('name' => 'course_view', 'description' => 'Visualiza curso'),
            //professor disciplina
            array('name' => 'professor_view', 'description' => 'Visualiza professor'),
            //professor disciplina
            array('name' => 'student_view', 'description' => 'Visualiza aluno'),
            //professor disciplina
            array('name' => 'semester_view', 'description' => 'Visualiza semestre'),
            //professor disciplina
            array('name' => 'subject_view', 'description' => 'Visualiza disciplina'),

            //professor orientador
            array('name' => 'report_juries', 'description' => 'Visualizar relatório de bancas'),
        ];
    }
}
