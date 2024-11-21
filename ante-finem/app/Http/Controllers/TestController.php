<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    //

    public function showTest() {
        return Inertia::render('Home', ['text' => 'Hello world!', 'test' => 'test']);
    }
}
