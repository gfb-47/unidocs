<html>

<head>
    <link rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.0/css/bootstrap.min.css' />
    <title>Ata de Apresentação</title>
    <style type="text/css">
        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,700;1,300;1,700&display=swap');

        *,
        h5 {
            font-family: 'Roboto', sans-serif;
            text-align: center;
            margin-bottom: 50px;
        }

        p {
            text-align: justify;
            margin-bottom: 50px;

        }

        .logo-unitnis {
            max-width: 100vh;
            margin-bottom: 50px;

        }

        .advise-professor-sign {
            text-align: center;
            margin-bottom: 30px;

        }

    </style>
</head>

<body>
    <img src="{{ public_path('img/logo-pdf-unitins.png') }}" alt="logo pdf unitins" class="logo-unitnis">
    <h5>ATA DE DEFESA DE TRABALHO DE CONCLUSÃO DE CURSO DO CURSO DE SISTEMAS DE INFORMAÇÃO DA FUNDAÇÃO UNIVERSIDADE DO
        TOCANTINS - UNITINS</h5>

    <p>Aos 19 dias do mês de Junho de 2020, reuniu-se na Fundação Universidade do Tocantins, às 19 horas, sob a
        Coordenação do Professor <strong>{{ $data->adviseProfessor->user->name }}</strong>, a banca examinadora de
        Trabalho de Conclusão de
        Curso em Sistemas de
        Informação, composta pelos examinadores Professor <strong>{{ $data->adviseProfessor->user->name }}</strong>
        (Orientador), Professor
        <strong>{{ $data->jury->professors[1]->user->name }}</strong> e
        Professor <strong>{{ $data->jury->professors[2]->user->name }}</strong>, para avaliação da defesa do trabalho
        intitulado
        <strong>“{{ $data->title }}”</strong> do acadêmico <strong>{{ $data->student->user->name }}</strong> como
        requisito para aprovação na disciplina
        Trabalho de Conclusão de Curso (TCC). Após exposição do trabalho realizado pelo acadêmica e arguição pelos
        Examinadores da banca, em conformidade com o disposto no Regulamento de Trabalho de Conclusão de Curso em
        Sistemas de Informação, a banca atribuiu a pontuação: {{ $data->rating ?? '____' }} .
    </p>

    <p>Sendo, portanto, o Acadêmico:
        {{ $data->rating != null ? ($data->rating > 6 ? '(X) Aprovado ( ) Reprovado' : '( ) Aprovado (X) Reprovado') : '( ) Aprovado ( ) Reprovado' }}
    </p>

    <p>Assinam esta Ata:<br />
        Professor Orientador: _________________________________________________________<br />
        Examinador: ________________________________________________________________<br />
        Examinador: __________________________________________________________________<br />
    </p>

    <p class="advise-professor-sign"><strong>Prof. {{ $data->adviseProfessor->user->name }}</strong><br />
        <strong>Presidente da Banca Examinadora</strong><br />
        Coordenação do Curso de {{ $data->semester->course->name }}
    </p>

    <p>________________________________________________________________________________</p>
</body>

</html>
