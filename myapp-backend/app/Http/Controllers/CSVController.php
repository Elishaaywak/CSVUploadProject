<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\UsersImport;

class CSVController extends Controller
{
    public function upload(Request $request)
    {
        $file = $request->file('csv_file');
        Excel::import(new UsersImport, $file);

        return response()->json(['message' => 'File uploaded']);
    }
}
