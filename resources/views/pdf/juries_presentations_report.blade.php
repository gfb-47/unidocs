<html>

<head>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.0/css/bootstrap.min.css' />
    <title>Apresentações da Banca</title>
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
    <h5>APRESENTAÇÕES DE TCC E PCC À BANCA AGENDADAS DA UNIVERSIDADE ESTADUAL DO TOCANTINS - UNITINS</h5>

        <table class="table table-bordered" style="text-align:center;">
        <thead>
            <tr>
                <th>Título</th>
                <th>Aluno</th>
                <th>Orientador</th>
                <th>Convidados</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Local</th>
            </tr>
        </thead>
        <tbody>
        @forelse($data as $item)
        <tr>
            <td>{{ $item->title }}</td>
            <td>{{ $item->name }}</td>
            <td>{{ $item->professors[0]->user->name }}</td>
            <td>{{ $item->professors[1]->user->name }} e {{ $item->professors[2]->user->name }}</td>
            <td>{{ $item->date }}</td>
            <td>{{ $item->hour }}</td>
            <td>{{ $item->local }}</td>
        </tr>
        @empty
        <tr>
            <td colspan="7" style="text-align:center">
                Não foram encontrados registros
            </td>
        </tr>
        @endforelse
        </tbody>
    </table>
</body>

</html>
