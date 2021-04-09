<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;
use App\Models\Student;

$factory->define(Student::class, function (Faker $faker) {
    return [
        'cpf' => $faker->unique()->cpf,
    ];
});
