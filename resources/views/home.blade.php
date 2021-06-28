@extends('layouts.app')
@push('css')
<meta name="csrf-token" content="{{csrf_token()}}" />
<meta name="username" content="{{auth()->user()->name}}" />
<link href="{{ asset('css/app.css') }}" rel="stylesheet">

@endpush
@section('content')
<div id="app"></div>
@endsection
@push('js')
<script type="text/javascript">
  window.Laravel = {
      token: '{{$token->accessToken}}',
      jsPermissions: {!! auth()->check()?auth()->user()->jsPermissions():null !!}
  }
</script> 
<script src="{{asset('js/app.js')}}"></script>
@endpush