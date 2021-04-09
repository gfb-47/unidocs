<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="msapplication-TileColor" content="#18448f">
    <title>Unitins - Universidade Estadual do Tocantins</title>
    <link rel="shortcut icon" href="{{ asset('img/icons/favicon.ico') }}">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400&amp;display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <script src="https://kit.fontawesome.com/8151011b7f.js" crossorigin="anonymous"></script>
</head>

<body>
    <div class="topbar-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 align-self-center d-none d-lg-block">
                    <div class="text-left">
                        Tocantins, <span id="relogio"></span>
                    </div>
                </div>
                <div class="col-md-8 align-self-center text-md-right text-center ">
                    <div class="float-right ml-5">
                        <ul class="intranet-area">
                            <li>
                                <a href="{{ route('login') }}" data-toggle="tooltip" data-placement="auto"
                                    title="Portal do Aluno">
                                    <span class="badge badge-primary mr-2"><i class="fas fa-user-graduate"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('login') }}" data-toggle="tooltip" data-placement="auto"
                                    title="Portal do Professor">
                                    <span class="badge badge-primary mr-2"><i class="fas fa-user-tie"></i></span>
                                </a>
                            </li>
                            <li>
                                <a href="{{ route('login') }}" data-toggle="tooltip" data-placement="auto"
                                    title="Administrativo">
                                    <span class="badge badge-primary"><i class="fas fa-tv"></i></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="float-right d-none d-lg-block">
                        <ul class="social-area">
                            <li><a href="https://www.youtube.com/channel/UCRtt_C3Q_9cm5J532cTzr2Q" target="_blank"><i
                                        class="fab fa-youtube"></i></a></li>
                            <li><a href="https://www.facebook.com/unitinsoficial" target="_blank"><i
                                        class="fab fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/unitins" target="_blank"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li><a href="https://www.instagram.com/unitins_oficial" target="_blank"><i
                                        class="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/school/unitins" target="_blank"><i
                                        class="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar-area">

        <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
                <a class="navbar-brand" href="">
                    <img src="{{ asset('img/logo.jpeg') }}" alt="Logo da Unitins">
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownInstitucional" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Institucional
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownInstitucional">
                                <a class="dropdown-item" href="#">Unitins</a>
                                <a class="dropdown-item" href="#">Histórico</a>
                                <a class="dropdown-item" href="#">Reitoria</a>
                                <a class="dropdown-item" href="#">Pró-reitorias</a>
                                <a class="dropdown-item" href="#">Conselhos</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Galeria de Reitores</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="dropdownCursos" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cursos
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownCursos">
                                <a class="dropdown-item" href="#">Administração</a>
                                <a class="dropdown-item" href="#">Ciências Contábeis</a>
                                <a class="dropdown-item" href="#">Direito</a>
                                <a class="dropdown-item" href="#">Enfermagem</a>
                                <a class="dropdown-item" href="#">Engenharia Agronômica</a>
                                <a class="dropdown-item" href="#">Letras</a>
                                <a class="dropdown-item" href="#">Pedagogia</a>
                                <a class="dropdown-item" href="#">Serviço Social</a>
                                <a class="dropdown-item" href="/cursos">Sistemas de Informação</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Tecnólogo em Agronegócio</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pesquisa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Extensão</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Serviços</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Vestibular</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0" id="form-pesquisa">
                        <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar no site">
                        <button class="btn btn-primary my-2 my-sm-0" type="submit">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                </div>
            </nav>
        </div>

    </div>

    <main>
        <div id="slide">
            <div class="container">
                <div id="carouselNavegacao" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselNavegacao" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselNavegacao" data-slide-to="1"></li>
                        <li data-target="#carouselNavegacao" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <a href="https://www.unitins.br/portalegresso/" target="_blank" rel="noopener noreferrer">
                                <img src="{{ asset('img/slide/1.jpg') }}" class="d-block w-100" alt="Egressos Unitins">
                            </a>
                        </div>
                        <div class="carousel-item">
                            <img src="{{ asset('img/slide/2.jpg') }}" class="d-block w-100"
                                alt="Protocolo de Segurança em Saúde">
                        </div>
                        <div class="carousel-item">
                            <img src="{{ asset('img/slide/3.jpg') }}" class="d-block w-100"
                                alt="Encontro FAUBAI Regional Norte">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselNavegacao" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Próximo</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselNavegacao" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                </div>
            </div>
        </div>

        <section class="container mt-3" id="servicos">
            <div class="cabecalho">
                <h2>Serviços</h2>
                <span class="float-right">
                    <a href="">ver todos</a>
                </span>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card-group">
                        <div class="card bg-primary text-white"
                            onclick="window.open('https://www.unitins.br/iprotocolo/')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-info fa-2x"></i>
                                    <h6>
                                        Iprotocolo
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white"
                            onclick="window.open('https://www.unitins.br/PortalAluno')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-user-graduate fa-2x"></i>
                                    <h6>
                                        Portal do Aluno
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white"
                            onclick="window.open('https://www.unitins.br/portaldoprofessor/')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-user-tie fa-2x"></i>
                                    <h6>
                                        Portal do Professor
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white" onclick="window.open('https://revista.unitins.br/')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fab fa-readme fa-2x"></i>
                                    <h6>
                                        Portal de Periódicos
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white"
                            onclick="window.open('https://www.unitins.br/nportal/portaldoservidor')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-address-card fa-2x"></i>
                                    <h6>
                                        Portal do Servidor
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white"
                            onclick="window.open('https://www.unitins.br/nportal/graduacao/page/show/distribuicao-dos-cursos')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-list-alt fa-2x"></i>
                                    <h6>
                                        Nossos Cursos
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white"
                            onclick="window.open('https://www.unitins.br/Concursos/Publico')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-id-card-alt fa-2x"></i>
                                    <h6>
                                        Concursos e Seleções
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white"
                            onclick="window.open('https://www.unitins.br/nportal/sibuni')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-book fa-2x"></i>
                                    <h6>
                                        Biblioteca
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white" onclick="window.open('https://www.unitins.br/cpl')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-file-alt fa-2x"></i>
                                    <h6>
                                        Portal de Licitações
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="card bg-primary text-white"
                            onclick="window.open('https://www.unitins.br/nportal/portal/page/show/ouvidoria-da-unitins')">
                            <div class="card-body">
                                <div class="card-title">
                                    <i class="fas fa-headset fa-2x"></i>
                                    <h6>
                                        Ouvidoria Unitins
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container mt-3" id="destaque">
            <div class="cabecalho">
                <h2>Notícias</h2>
                <span class="float-right">
                    <a href="">ver todas</a>
                </span>
            </div>
            <div class="row">
                <div class="col-md-5">
                    <div class="foto">
                        <a href="/noticia">
                            <img src="{{ asset('img/noticias/1.jpg') }}" alt="Vestibular" class="img-fluid">
                        </a>
                    </div>

                    <div class="noticia">
                        <span>Vestibular 2021/01</span>
                        <h3>
                            <a href="/noticia">
                                Inscrições terão início no próximo dia 8 e seguirão até o dia 4 de janeiro;
                                provas serão realizadas no dia 27 de janeiro de 2021
                            </a>
                        </h3>
                        <small class="text-muted">
                            Publicado em
                            <time datetime="2020-12-04 17:08">04/12/2020 às 17:08</time>
                        </small>
                    </div>
                </div>
                <div class="col-md-7 mais-noticias">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card mb-4 border-0">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="{{ asset('img/noticias/2.jpg') }}" class="card-img" alt="">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                <a href="/noticia">
                                                    Servidores do Câmpus Dianópolis participam de testagem para a
                                                    Covid-19
                                                </a>
                                            </h5>
                                            <p class="card-text">
                                                <small class="text-muted">
                                                    Publicado em
                                                    <time datetime="2020-12-04 17:08">04/12/2020 às 17:08</time>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-4 border-0">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="{{ asset('img/noticias/3.jpg') }}" class="card-img" alt="">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                <a href="/noticia">
                                                    Inscrições abertas para oportunidade de bolsas de estudos na Hungria
                                                </a>
                                            </h5>
                                            <p class="card-text">
                                                <small class="text-muted">
                                                    Publicado em
                                                    <time datetime="2020-12-08 06:31">08/12/2020 às 06:31</time>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card mb-4 border-0">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="{{ asset('img/noticias/4.jpg') }}" class="card-img" alt="">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">
                                                <a href="/noticia">
                                                    Diretor de Ensino visita câmpus do Bico para verificar implementação
                                                    do Protocolo de Segurança em Saúde
                                                </a>
                                            </h5>
                                            <p class="card-text">
                                                <small class="text-muted">
                                                    Publicado em
                                                    <time datetime="2020-12-08 15:36">08/12/2020 às 15:36</time>
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-3" id="multimidias">
            <div class="container mb-5">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="foto">
                            <img src="{{ asset('img/multimidias/1.png') }}"
                                alt=" Unitins desenvolve variedade de arroz em parceria com a Embrapa">
                            <a href="https://www.youtube.com/embed/PqB4pUQfXcg" class="video-botao play">
                                <i class="fas fa-play fa-2x"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 align-self-center">
                        <div class="mt-4 mt-lg-0">
                            <h1><span class="badge badge-warning">VÍDEO</span></h1>
                            <h2>
                                <a href="https://www.youtube.com/embed/PqB4pUQfXcg" class="video-botao text-white">
                                    Unitins desenvolve variedade de arroz em parceria com a Embrapa.
                                </a>
                            </h2>
                            <small>
                                <i class="fas fa-calendar mr-1"></i>
                                Publicado em
                                <time datetime="2015-10-06 17:08">06/10/2015 às 17:08</time>
                                <br>
                                <i class="fas fa-tag mr-1"></i>
                                Portal
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="destaques container mb-5">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 mb-4">
                        <div class="pb-2">
                            <img src="{{ asset('img/multimidias/2.png') }}"
                                alt="Ciências Contábeis é um dos cursos oferecidos pela Unitins" class="img-fluid">
                            <span class="badge badge-warning">VÍDEO</span>
                            <a href="https://www.youtube.com/embed/e3cr-7gNTQk" class="video-botao play">
                                <i class="fas fa-play"></i>
                            </a>
                        </div>
                        <div>
                            <h5>
                                <a href="https://www.youtube.com/embed/e3cr-7gNTQk" class="video-botao text-white">
                                    Ciências Contábeis é um dos cursos oferecidos pela Unitins
                                </a>
                            </h5>
                            <small>
                                <i class="fas fa-calendar mr-1"></i>
                                <time datetime="2015-10-06 17:08">06/10/2015 às 17:08</time>
                            </small>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-4">
                        <div class="pb-2">
                            <a href="/galeria">
                                <img src="{{ asset('img/multimidias/4.png') }}"
                                    alt="Solenidade de comemoração aos 30 anos da Unitins" class="img-fluid">
                            </a>
                            <span class="badge badge-danger">FOTOS</span>
                        </div>
                        <div>
                            <h5>
                                <a href="/galeria" class="text-white">
                                    Solenidade de comemoração aos 30 anos da Unitins
                                </a>
                            </h5>
                            <small>
                                <i class="fas fa-calendar mr-1"></i>
                                <time datetime="2020-03-16 19:21">16/03/2020 às 19:21</time>
                            </small>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-4">
                        <div class="pb-2">
                            <img src="{{ asset('img/multimidias/3.png') }}" alt="Inauguração do CTC Agro"
                                class="img-fluid">
                            <span class="badge badge-warning">VÍDEO</span>
                            <a href="https://www.youtube.com/embed/BEdaB7f-n6Q" class="play video-botao">
                                <i class="fas fa-play"></i>
                            </a>
                        </div>
                        <div>
                            <h5>
                                <a href="https://www.youtube.com/embed/BEdaB7f-n6Q" class="video-botao text-white">
                                    Inauguração do CTC Agro
                                </a>
                            </h5>
                            <small>
                                <i class="fas fa-calendar mr-1"></i>
                                <time datetime="2015-10-06 17:08">06/10/2015 às 17:08</time>
                            </small>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 mb-4">
                        <div class="pb-2">
                            <a href="/galeria">
                                <img src="{{ asset('img/multimidias/5.png') }}"
                                    alt="Colação de Grau 2019/2 - Direito Câmpus Dianópolis" class="img-fluid">
                            </a>
                            <span class="badge badge-danger">FOTOS</span>
                        </div>
                        <div>
                            <h5>
                                <a href="/galeria" class="text-white">
                                    Colação de Grau 2019/2 - Direito Câmpus Dianópolis
                                </a>
                            </h5>
                            <small>
                                <i class="fas fa-calendar mr-1"></i>
                                <time datetime="2015-10-06 17:08">06/10/2015 às 17:08</time>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer id="rodape">
        <div class="container">
            <div class="row">
                <div class="col-12 text-md-left text-center mb-3">
                    <a href="">
                        <img src="{{ asset('img/logo-negativa.png') }}">
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 text-md-left text-center mb-3">
                    © Universidade Estadual do Tocantins - UNITINS<br>
                    108 Sul Alameda 11 Lote 03, CEP: 77020-122, Palmas-TO
                </div>
                <div class="col-md-4 text-md-right text-center">
                    <ul class="social-area">
                        <li><a href="https://www.youtube.com/channel/UCRtt_C3Q_9cm5J532cTzr2Q" target="_blank"><i
                                    class="fab fa-youtube"></i></a></li>
                        <li><a href="https://www.facebook.com/unitinsoficial" target="_blank"><i
                                    class="fab fa-facebook"></i></a></li>
                        <li><a href="https://twitter.com/unitins" target="_blank"><i class="fab fa-twitter"></i></a>
                        </li>
                        <li><a href="https://www.instagram.com/unitins_oficial" target="_blank"><i
                                    class="fab fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/school/unitins" target="_blank"><i
                                    class="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

    <!-- Player -->
    <div id="player">
        <div class="col py-5 text-center">
            <iframe src="" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <button type="button" class="fechar btn rounded-0">×</button>
    </div>
    <!-- /Player -->

    <!-- Ir para topo -->
    <a href="#" class="ir-topo visivel transparente" onclick="irParaTopo(event)">
        <i class="fas fa-chevron-circle-up fa-3x"></i>
    </a>
    <!-- /Ir para topo -->

    <div class="copyright">
        Redesign do site da Unitins feito por <a href="mailto:ferleonardo@gmail.com">Leonardo Fernandes</a>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('js/scripts.js') }}"></script>
</body>

</html>