<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">

<head>
    
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport"
        content="viewport-fit=cover, width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    
    <meta name="format-detection" content="telephone=no" />
    <!-- icons -->
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#0061AA" />

    <meta name="apple-mobile-web-app-status-bar-style" content="#0061AA">
    <meta name="application-name" content="<?php echo e(config('app.name')); ?>" />
    <meta name="msapplication-TileColor" content="#2d89ef" />
    <link rel="Shortcut Icon" type="image/x-icon" href="/images/favicon/favicon.ico" />


    <title><?php echo e(config('app.name')); ?></title>

    <script>
        window.API_HOST = "<?php echo e(url('/')); ?>";
        window.APP_NAME = "<?php echo e(config('app.name')); ?>";
        window.APP_VERSION = "<?php echo e(config('app.version')); ?>";
        window.APP_ENV = "<?php echo e(config('app.env')); ?>";
        window.BUILDED_AT = "<?php echo e(config('app.builded_at')); ?>";
    </script>
    
    <?php echo '<script type="module" crossorigin src="/assets/index.6e67c3f0.js"></script>\n<link rel="stylesheet" href="/assets/index.a7c85ea1.css" />'; ?>

</head>

<body>
    <div id="q-app">
        <?php echo $__env->yieldContent('content'); ?>
    </div>

    <?php echo $__env->yieldContent('scripts'); ?>
</body>

</html>
<?php /**PATH /Users/James/code/guppy/resources/views/vue.blade.php ENDPATH**/ ?>