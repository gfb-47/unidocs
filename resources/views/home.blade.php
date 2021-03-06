@extends('layouts.app')
@push('css')
<meta name="csrf-token" content="{{csrf_token()}}" />
<meta name="user" content="{{auth()->id()}}" />
<link href="{{ asset('css/app.css') }}" rel="stylesheet">

@endpush
@section('content')
<div id="app"></div>
@endsection
@push('js')
<script src="{{asset('js/app.js')}}"></script>
@endpush