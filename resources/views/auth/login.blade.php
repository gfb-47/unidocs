@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card" style="margin-top:100px">
                <div class="row justify-content-center" style="margin-top:10px">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="80" height="80"
                        viewBox="0 0 172 172"  
                        style=" fill:#000000;
                            background-color: #0E4DA4;border-radius: 50px; padding: 20px;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="#0e4da4"></path><g fill="#ffffff"><path d="M86,0c-21.99099,0 -39.69231,17.70132 -39.69231,39.69231v26.46154c-14.54868,0 -26.46154,11.91286 -26.46154,26.46154v52.92308c0,14.54868 11.91286,26.46154 26.46154,26.46154h79.38462c14.54868,0 26.46154,-11.91286 26.46154,-26.46154v-52.92308c0,-14.54868 -11.91286,-26.46154 -26.46154,-26.46154v-26.46154c0,-21.99099 -17.70132,-39.69231 -39.69231,-39.69231zM86,13.23077c15.06551,0 26.46154,11.39603 26.46154,26.46154v26.46154h-52.92308v-26.46154c0,-15.06551 11.39603,-26.46154 26.46154,-26.46154zM86,99.23077c7.28726,0 13.23077,5.94351 13.23077,13.23077c0,4.6256 -2.63581,9.17368 -6.61538,11.16346v15.29808c0,3.97957 -2.63581,6.61538 -6.61538,6.61538c-3.97956,0 -6.61538,-2.63581 -6.61538,-6.61538v-15.29808c-3.97956,-1.98978 -6.61538,-6.53786 -6.61538,-11.16346c0,-7.28726 5.94351,-13.23077 13.23077,-13.23077z"></path></g></g>
                    </svg>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="form-group row justify-content-md-center">
                            <div class="col-md-11">
                                <label for="email" class="form-label">{{ __('E-Mail') }}</label>
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                            <div class="col-md-11">
                                <label for="password" class="form-label">{{ __('Senha') }}</label>
                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                                @if (Route::has('password.request'))
                                    <a class="btn btn-link" href="{{ route('password.request') }}" style="margin-left: -10px;">
                                        <span style="text-align: left;">{{ __('Esqueceu sua senha ?') }}</span>
                                    </a>
                                @endif
                            </div>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-center" style="margin-top: 50px;">
                            <button type="submit" style="background-color: #F1F1F1;border-radius: 8px; 
                                width: 50%;height: 45px; border: 1px solid #000;">
                                <span style="font-weight: bold;">{{ __('Entrar') }}</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
