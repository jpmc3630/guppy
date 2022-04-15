<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    {{-- <base href="{{ url('/') }}" /> --}}
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport"
        content="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    {{-- <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> --}}
    <meta name="format-detection" content="telephone=no" />
    <!-- icons -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#0061AA" />

    <meta name="apple-mobile-web-app-status-bar-style" content="#0061AA">
    <meta name="application-name" content="{{ config('app.name') }}" />
    <meta name="msapplication-TileColor" content="#2d89ef" />
    <link rel="Shortcut Icon" type="image/x-icon" href="/images/favicon/favicon.ico" />


    <title>{{ config('app.name') }}</title>

    <script>
        window.API_HOST = "{{ url('/') }}";
        window.APP_NAME = "{{ config('app.name') }}";
        window.APP_VERSION = "{{ config('app.version') }}";
        window.APP_ENV = "{{ config('app.env') }}";
        window.BUILDED_AT = "{{ config('app.builded_at') }}";
    </script>
    
    @vite

</head>

<body>
    <div id="q-app">
        @yield('content')
    </div>

    @yield('scripts')
</body>

</html>
