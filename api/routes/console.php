<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


//Le decimos que ejecute el comando todos los días a las 02:00 OJOOO!!!!
Schedule::command('app:wipe-diario')->dailyAt('02:00');
