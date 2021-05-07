<?php

namespace App\Models;

class Permission extends \Spatie\Permission\Models\Permission
{
    public static function defaultPermissions()
    {
        return [
            array('name' => 'knowledge_area_view', 'description' => 'Visualiza área de conhecimento'),
            array('name' => 'knowledge_area_create', 'description' => 'Cria área de conhecimento'),
            array('name' => 'knowledge_area_edit', 'description' => 'Edita área de conhecimento'),
            array('name' => 'knowledge_area_delete', 'description' => 'Deleta área de conhecimento'),
            
            array('name' => 'jury_view', 'description' => 'Visualiza banca avaliadora'),
            array('name' => 'jury_create', 'description' => 'Cria banca avaliadora'),
            array('name' => 'jury_edit', 'description' => 'Edita banca avaliadora'),
            array('name' => 'jury_delete', 'description' => 'Deleta banca avaliadora'),
            
            array('name' => 'process_view', 'description' => 'Visualiza processo'),
            array('name' => 'process_create', 'description' => 'Cria processo'),
            array('name' => 'process_edit', 'description' => 'Edita processo'),
            
            array('name' => 'course_view', 'description' => 'Visualiza curso'),
            array('name' => 'professor_view', 'description' => 'Visualiza professor'),
            array('name' => 'student_view', 'description' => 'Visualiza aluno'),
            array('name' => 'semester_view', 'description' => 'Visualiza semestre'),
            array('name' => 'subject_view', 'description' => 'Visualiza disciplina'),
        ];
    }
}
