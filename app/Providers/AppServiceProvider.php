<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Blade;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
          \Artisan::call('view:clear');

          Blade::directive('vite', function () {
                
            $manifiest = json_decode(file_get_contents(public_path('manifest.json')));
            $module = $manifiest->{'index.html'}->{'file'};
            // $imports = $manifiest->{'index.html'}->{'imports'};
            $css = $manifiest->{'index.html'}->{'css'};
            // index.js
            $out = '<script type="module" crossorigin src="/'.$module.'"></script>\n';
            // vendor.js
            // foreach ($imports as $import) {
            //     $out .= '<link rel="modulepreload" href="/'.$manifiest->{$import}->{'file'}.'" />\n';
            // }
            // css
            foreach ($css as $c) {
                $out .= '<link rel="stylesheet" href="/'.$c.'" />';
            }
            
            return sprintf(
                "<?php echo '%s'; ?>",
                $out
            );
        });
    }
}
