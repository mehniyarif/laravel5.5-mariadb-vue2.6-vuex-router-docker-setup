<?php

namespace App\Http\Controllers;

class BoardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    
    public function index($id = 2, $r_test = "deneme"){
        return view('board', ['id'=> $id, 'r_test'=> $r_test]);
    }
}
